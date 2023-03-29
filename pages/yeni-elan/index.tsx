import React from 'react';
import styles from './index.module.css';
interface NewAdvertProps {

}

const NewAdvert: React.FC<NewAdvertProps> = ({ }) => {
    return (
        <section className={styles.newAdvert}>

            <div className="wrapper">
                <h4>YENİ ELAN</h4>
                <form action="">
                    <div className={styles.elementCard}>
                        <label htmlFor="">Alıcı/Satıcı <span className={styles.required}>*</span></label>
                        <div className={styles.elements}>
                            <div className={styles.element}>
                                <input type="radio" name="advert_type" id="buyer" />
                                <label htmlFor="buyer">Satıcı </label>

                            </div>
                            <div className={styles.element}>
                                <input type="radio" name="advert_type" id="seller" />
                                <label htmlFor="seller">Alıcı </label>

                            </div>

                        </div>
                    </div>

                    <div className={styles.elementCard}>
                        <label htmlFor="city">Şəhər <span className={styles.required}>*</span></label>
                        <div className={styles.elements}>
                            <div className={styles.element}>
                                <select name="city" id="city">
                                    <option value="">fsdfsda</option>
                                </select>

                            </div>

                        </div>
                    </div>
                    <div className={styles.elementCard}>
                        <label htmlFor="category_id">Kateqoriya <span className={styles.required}>*</span></label>
                        <div className={styles.elements}>
                            <div className={styles.element}>
                                <select name="category_id" id="category_id">
                                    <option value="">fsdfsda</option>
                                </select>

                            </div>

                        </div>
                    </div>

                    <div className={styles.elementCard}>
                        <label htmlFor="">Ölçü vahidi<span className={styles.required}>*</span></label>
                        <div className={`${styles.elements} ${styles.elements_different}`}>
                            <div className={styles.element}>
                                <input type="radio" name="unit_id" id="unit_2" />
                                <label htmlFor="unit_2" title='Ədəd'> </label>

                            </div>
                            <div className={styles.element}>
                                <input type="radio" name="unit_id" id="unit_1" />
                                <label htmlFor="unit_1" title='Litr'> </label>

                            </div>
                            <div className={styles.element}>
                                <input type="radio" name="unit_id" id="unit_3" />
                                <label htmlFor="unit_3" title='Kilo'> </label>

                            </div>
                            <div className={styles.element}>
                                <input type="radio" name="unit_id" id="unit_4" />
                                <label htmlFor="unit_4" title='Metr'> </label>

                            </div>
                        </div>
                    </div>

                    <div className={styles.elementCard}>
                        <label htmlFor="min_order_count_text">Minimum sifariş <span className={styles.required}>*</span></label>
                        <div className={styles.elements}>
                            <div className={styles.element}>
                                <input type="text" name="min_order_count" id='min_order_count_text' />

                            </div>
                            <div className={styles.element}>
                                <input type="radio" name="min_order_count" id="min_order_count" />
                                <label htmlFor="min_order_count" style={{ fontSize: '12px' }}>Razılaşma yolu ilə </label>

                            </div>
                        </div>
                    </div>

                    <div className={styles.elementCard}>
                        <label htmlFor="wholesale_price_text">Topdan qiymət/AZN <span className={styles.required}>*</span></label>
                        <div className={styles.elements}>
                            <div className={styles.element}>
                                <input type="text" name="wholesale_price" id='wholesale_price_text' />

                            </div>
                            <div className={styles.element}>
                                <input type="radio" name="wholesale_price" id="wholesale_price" />
                                <label htmlFor="wholesale_price" style={{ fontSize: '12px' }}>Razılaşma yolu ilə </label>

                            </div>

                        </div>
                    </div>



                    <div className={styles.elementCard}>
                        <label htmlFor="">Pərakəndə satış mümkündür <span className={styles.required}>*</span></label>
                        <div className={styles.elements}>
                            <div className={styles.element}>
                                <input type="radio" name="retail_sales" id="retail_sales_ok" />
                                <label htmlFor="retail_sales_ok" style={{ fontSize: '12px' }}>Bəli </label>

                            </div>
                            <div className={styles.element}>
                                <input type="radio" name="retail_sales" id="retail_sales_no" />
                                <label htmlFor="retail_sales_no" style={{ fontSize: '12px' }}>Alıcı </label>

                            </div>

                        </div>
                    </div>

                    <div className={styles.elementCard}>
                        <label htmlFor="detail">Ətraflı </label>
                        <div className={styles.elements}>
                            <div className={styles.element}>
                                <textarea name="detail" id="detail" ></textarea>

                            </div>


                        </div>
                    </div>

                    <div className={styles.elementCard}>
                        <label htmlFor="category_id">Adınız <span className={styles.required}>*</span></label>
                        <div className={styles.elements}>
                            <div className={styles.element}>
                                <input type="text" className={styles.singleInput} placeholder='Əli' />

                            </div>

                        </div>
                    </div>

                    <div className={styles.elementCard}>
                        <label htmlFor="category_id">E-mail <span className={styles.required}>*</span></label>
                        <div className={styles.elements}>
                            <div className={styles.element}>
                                <input type="email" className={styles.singleInput} placeholder='əli.əliyev@gmail.com' />

                            </div>

                        </div>
                    </div>

                    <div className={styles.elementCard}>
                        <label htmlFor="category_id">Mobil nömrə <span className={styles.required}>*</span></label>
                        <div className={styles.elements}>
                            <div className={styles.element}>
                                <input type="text" className={styles.singleInput} placeholder='(000) 000 00 00' />

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