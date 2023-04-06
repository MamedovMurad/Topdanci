import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.css';
import { api } from '../../common/api';
import Router from 'next/router';
import { usePhoneInput } from '../../hooks/inputmask';
interface NewAdvertProps {

}

const NewAdvert: React.FC<NewAdvertProps> = ({ }) => {
    const [tel,handlesetTel]=usePhoneInput()
    const [cities, setcities] = useState<{ name: string, id: number }[]>([])
    const [categories, setcategories] = useState<{ name: string, id: number, subcategories: [] }[]>([])
    const [unit, setunit] = useState<{ name: string, id: number }[]>([])
    const [files, setfiles] = useState<any>([])
    const [errors, serErrors] = useState<any>({})
    const input_firstRef = useRef<any>(null)
    const input_secondRef = useRef<any>(null)
    async function handleSubmit(event: any) {
        event.preventDefault()
        api.setHeader('content-type', 'application/json')
        api.setHeader('Accept', 'application/json')
        const data = new FormData(event.target)
        console.log({ ...Object.fromEntries(data.entries()), images: files });
        const exam = validate(Object.fromEntries(data.entries()))
        if (Object.keys(exam).length === 0) {
            const res = await api.post('advert-store', { ...Object.fromEntries(data.entries()), 
                tel:'994'+Number(tel.replace('(', '').replace(')', '').replaceAll('-','')),
                images: files })
            res&& Router.push('/product/'+res.data.title+'/'+res.data.id)
        }
    }

    async function fetchApi() {
        const res = await api.get('cities')
        setcities(res.data)
        const category = await api.get('categories')
        setcategories(category.data)
        const unit_data = await api.get('units')
        setunit(unit_data.data)
    }
    function validate(value: any) {
        const emptyProps = Object.entries(value).filter(([key, value]) => !value)
            .map(([key]) => key);
        const newObj = Object.fromEntries(emptyProps.map(key => [key, 'məcburidir!']));
        serErrors(newObj)
        return newObj
    }
    async function addFile(params: any) {
        const formData = new FormData();
        formData.append('img', params.target.files[0]);
        console.log(params.target.files[0], 'formData');
        api.setHeader('content-type', '')
        api.setHeader('Accept', '')
        const file = await api.postWithFormData('file-upload-temporary', formData)

        file?.data?.path && setfiles((prev: any) => [...prev, file.data.path])
    }
    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <section className={styles.newAdvert}>
            <div className="wrapper">
                <h4>YENİ ELAN</h4>
                <form onSubmit={handleSubmit}>
                <div className={styles.elementCard}>
                        <label htmlFor="category_id">Elan başlığı <span className={styles.required}>*</span></label>
                        <div className={styles.elements}>
                            <div className={styles.element}>
                                <input name='advert_title' type="text" className={styles.singleInput} />
                                <p className={styles.required}>{errors?.advert_title}</p>
                            </div>

                        </div>
                    </div>

                    <div className={styles.elementCard}>
                        <label htmlFor="">Alıcı/Satıcı <span className={styles.required}>*</span></label>
                        <div className={styles.elements}>
                            <div className={styles.element}>
                                <input type="radio" name="advert_type" id="buyer" value={0} defaultChecked />
                                <label htmlFor="buyer">Satıcı </label>

                            </div>
                            <div className={styles.element}>
                                <input type="radio" name="advert_type" id="seller" value={1} />
                                <label htmlFor="seller">Alıcı </label>

                            </div>

                        </div>
                        <span className={styles.required}>{errors?.advert_type}</span>
                    </div>

                    <div className={styles.elementCard}>
                        <label htmlFor="city">Şəhər <span className={styles.required}>*</span></label>
                        <div className={styles.elements}>
                            <div className={styles.element}>
                                <select name="city_id" id="city">
                                    {cities.map(item => (
                                        <option key={item.id} value={item.id}>{item.name}</option>
                                    ))}
                                </select>

                            </div>

                        </div>
                    </div>
                    <div className={styles.elementCard}>
                        <label htmlFor="category_id">Kateqoriya <span className={styles.required}>*</span></label>
                        <div className={styles.elements}>
                            <div className={styles.element}>
                                <select name="category_id" id="category_id">
                                    {
                                        categories.map(item => (
                                            <optgroup key={item.id} label={item.name}>
                                                {item.subcategories?.map((sub: any) => (
                                                    <option key={sub.id} value={sub.id}>{sub.name}</option>
                                                ))}
                                            </optgroup>
                                        ))
                                    }

                                </select>

                            </div>

                        </div>
                    </div>

                    <div className={styles.elementCard}>
                        <label htmlFor="">Ölçü vahidi<span className={styles.required}>*</span></label>
                        <div className={`${styles.elements} ${styles.elements_different}`}>
                            {
                                unit.map((item, index: number) => (
                                    <div key={item.id} className={styles.element}>
                                        <input type="radio" name="unit_id" id={'unit_' + item.id} value={item.id} defaultChecked={index === 0} />
                                        <label htmlFor={'unit_' + item.id} title={item.name}> </label>

                                    </div>
                                ))
                            }


                        </div>
                    </div>

                    <div className={styles.elementCard}>
                        <label htmlFor="min_order_count_text">Minimum sifariş <span className={styles.required}>*</span></label>
                        <div className={styles.elements}>
                            <div className={styles.element}>
                                <input type="text" name="min_order_count" id='min_order_count_text'
                                    onFocus={() => input_firstRef.current.checked = false} />

                            </div>
                            <div className={styles.element}>
                                <input type="radio" name="min_order_count" id="min_order_count" value={-1} ref={input_firstRef}
                                    defaultChecked />
                                <label htmlFor="min_order_count" style={{ fontSize: '12px' }}>Razılaşma yolu ilə </label>

                            </div>
                        </div>
                    </div>

                    <div className={styles.elementCard}>
                        <label htmlFor="wholesale_price_text">Topdan qiymət/AZN <span className={styles.required}>*</span></label>
                        <div className={styles.elements}>
                            <div className={styles.element}>
                                <input type="text" name="wholesale_price" id='wholesale_price_text'
                                    onFocus={() => input_secondRef.current.checked = false} />

                            </div>
                            <div className={styles.element}>
                                <input defaultChecked type="radio" name="wholesale_price" value={-1} ref={input_secondRef} id="wholesale_price" />
                                <label htmlFor="wholesale_price" style={{ fontSize: '12px' }}>Razılaşma yolu ilə </label>

                            </div>

                        </div>
                    </div>



                    <div className={styles.elementCard}>
                        <label htmlFor="">Pərakəndə satış mümkündür <span className={styles.required}>*</span></label>
                        <div className={styles.elements}>
                            <div className={styles.element}>
                                <input type="radio" name="retail_sales" id="retail_sales_ok" defaultChecked value={1} />
                                <label htmlFor="retail_sales_ok" style={{ fontSize: '12px' }}>Bəli </label>

                            </div>
                            <div className={styles.element}>
                                <input type="radio" name="retail_sales" id="retail_sales_no" value={0} />
                                <label htmlFor="retail_sales_no" style={{ fontSize: '12px' }}>Xeyr </label>

                            </div>

                        </div>
                    </div>

                    <div className={styles.elementCard}>
                        <label htmlFor="detail">Ətraflı </label>
                        <div className={styles.elements}>
                            <div className={styles.element}>
                                <textarea name="detail" id="detail" ></textarea>
                                <p className={styles.required}>{errors?.detail}</p>
                            </div>


                        </div>
                    </div>
                    <div className={styles.elementCard}>
                        <label htmlFor="category_id">Şəkillər <span className={styles.required}>*</span></label>
                        <div className={styles.picture}>

                            <label htmlFor='pctr' className={styles.buttonPicture} >Şəkil əlavə et</label>
                            <input type="file" id='pctr' style={{ display: 'none' }} onChange={addFile} />
                            <ul>
                                {files?.map((item: any) => (
                                    <li key={item}><img src={item} alt="" /></li>

                                ))}
                            </ul>


                        </div>
                    </div>
                    <div className={styles.elementCard}>
                        <label htmlFor="category_id">Adınız <span className={styles.required}>*</span></label>
                        <div className={styles.elements}>
                            <div className={styles.element}>
                                <input name='name_surname' type="text" className={styles.singleInput} placeholder='Əli Aliyev' />
                                <p className={styles.required}>{errors?.name_surname}</p>
                            </div>

                        </div>
                    </div>

                    <div className={styles.elementCard}>
                        <label htmlFor="category_id">E-mail <span className={styles.required}>*</span></label>
                        <div className={styles.elements}>
                            <div className={styles.element}>
                                <input name='email' type="email" className={styles.singleInput} placeholder='əli.əliyev@gmail.com' />
                                <p className={styles.required}>{errors?.email}</p>
                            </div>

                        </div>
                    </div>

                    <div className={styles.elementCard}>
                        <label htmlFor="category_id">Mobil nömrə <span className={styles.required}>*</span></label>
                        <div className={styles.elements}>
                            <div className={styles.element}>
                                <input type="text" name='tel' value={tel} onChange={handlesetTel} className={styles.singleInput} placeholder='(000) 000 00 00' />
                                <p className={styles.required}>{errors?.tel}</p>
                            </div>

                        </div>


                    </div>

                    <div className={styles.content}>
                        <h3>Elan qaydaları</h3>
                        <p><span className={styles.required}>*</span> Eyni elanı bir neçə dəfə təqdim etməyin. <br />
                            <span className={styles.required}>*</span> Təsvir və ya şəkillərdə telefon, email və ya sayt ünvanı göstərməyin. <br />
                            <span className={styles.required}>*</span> Tək və topdan qiymətlə r arasındakı fərqi dəqiq yazın <br />
                            <span className={styles.required}>*</span> Qadağan olunmuş məhsulları satmayın. <br />
                            <a href="">Ümumi qaydalar</a> </p>
                    </div>
                    <div className={styles.buttonArea}>
                        <p>Elan yerləşdirərək, siz Topdanci.az-ın <a href="">İstifadəçi razılaşması</a> ilə razı olduğunuzu təsdiq edirsiniz.</p>
                        <button type='submit'>Təsdiq et</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default NewAdvert;