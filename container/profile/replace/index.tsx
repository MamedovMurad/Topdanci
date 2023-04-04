import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import { api } from '../../../common/api';
import { usePhoneInput } from '../../../hooks/inputmask';
import SpinnerLoader from '../../../components/loader/spinner';
interface ProfileReplaceProps {
    CB?: any
}

const ProfileReplace: React.FC<ProfileReplaceProps> = ({ CB }) => {
    const [data, setdata] = useState({ name: '', mail: '', loader: false })
    const [tel, setTel, handleSetTelAll] = usePhoneInput()


    async function fetchApi() {
        if (typeof window !== 'undefined' && localStorage.getItem('agent')) {
            api.setHeader('Authorization', 'Bearer ' + localStorage.getItem('agent') || '')
            setdata({ ...data, loader: true })
            const res = await api.get('user/info')

            setdata({ name: res.name, mail: res.email, loader: false })

            handleSetTelAll(('0' + res.tel).replace('994', ''))

            CB && CB(res.balance)
        }
    }
    async function updateProfile(event: any) {
        setdata({ ...data, loader: true })
        event.preventDefault()
        const response = await api.post('user/update', { name: data.name, email: data.mail })
        setdata({ ...data, loader: false })
    }
    useEffect(() => {
        fetchApi()
    }, [CB])


    return (
        <section className={styles.replace}>
            <h4>Düzəliş et</h4>

            {
                !data.loader ? <form action="" onSubmit={updateProfile}>
                    <div>
                        <label htmlFor="">Adınız <span>*</span></label>
                        <input type="text" placeholder='Əli' value={data.name} onChange={(event) => setdata({ ...data, name: event.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="">E-mail <span>*</span></label>
                        <input type="email" placeholder='e-mail' value={data.mail} onChange={(event) => setdata({ ...data, mail: event.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="">Mobil nömrə <span>*</span></label>
                        <input type="text" value={tel} placeholder='nömrə' disabled onChange={setTel} />
                    </div>
                    <div>   <button>Yadda saxla</button></div>
                </form>
                    : <SpinnerLoader />
            }
        </section>
    );
};

export default ProfileReplace;