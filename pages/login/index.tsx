import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.css';
import { LogoRed } from '../../assets/svg/logo';
import { TopdanciSVG } from '../../assets/svg/topdanci';
import PrimaryButton from '../../components/UI/button';
import { api } from '../../common/api';
import { useRouter } from 'next/router';
interface LoginProps {

}

const Login: React.FC<LoginProps> = ({ }) => {
    const router = useRouter()

    const [tel, settel] = useState<string>('(0')
    const [tab, setTab] = useState(0)
    const [otp_code, setOtp_code] = useState(0)
    const [inputs, setInputs] = useState({
        first: '',
        second: '',
        third: '',
        last: ''
    })
    const handleSubmitForm = async (event: any) => {

        event.preventDefault()
        setTab(2)
        const response = await api.post('otp', { tel: Number(tel.replace('(', '').replace(')', '')) })
        setOtp_code(response.kod)


    }

    const secondRef = useRef<any>(null);
    const thirdRef = useRef<any>(null);
    const lastRef = useRef<any>(null);

    const handleInput1Change = async (event: any) => {
        const value = event.target.value;
        const name = event.target.name;
        setInputs((input) => ({ ...input, [name]: value }))
        /*  setInputs({ ...inputs, [name]: value }); */
        if (name === 'first' && value.length > 0) {
            secondRef.current.focus();
            return
        } else if (name === 'second' && value.length > 0) {
            thirdRef.current.focus();
            return
        }
        else if (name === 'third' && value.length > 0) {
            lastRef.current.focus();

        } else if (name === 'last' && value.length > 0) {
            console.log(Object.values(inputs).join('') + value);
            const response = await api.post('login', { tel, otp_code: Object.values(inputs).join('') + value })
            localStorage.setItem('agent', response.token)
            return router.push('dashboard')
        }


    };


    function handlesetTel(event: any) {

        if (
            (Number(event.target.value.replace('(', '').replace(')', '').replaceAll('-', '')) ||
             Number(event.target.value.replace('(', '').replace(')', '').replaceAll('-', '')) == 0) &&
            event.target.value.replace('(', '').replace(')', '').replaceAll('-', '').length < 11) {
              
                
            if (event.target.value.length > 1) {

                settel(event.target.value)
            }
            if (event.target.value.length === 4 && tel[4] !== ')') {

                settel(event.target.value + ')-')

            }
            console.log(tel);
            if((event.target.value.length === 9 && tel[9] !== '-')||
            (event.target.value.length === 12 && tel[12] !== '-')){
              
                settel(event.target.value + '-')
            }
            

        } else {

        }


    }

    return (
        <section className={styles.login}>
            {
                tab !== 2 ? <div>
                    <header>
                        {
                            tab === 0 ? <>     <LogoRed />  <TopdanciSVG />
                                <p>Öz elanlarınıza baxmaq, onları redaktə və ya bərpa etmək üçün
                                    qeydiyyatdan keçin</p></> : <h3>Kabinetə giriş</h3>
                        }



                    </header>
                    <main>
                        {
                            tab === 0 ? <button onClick={() => setTab(1)}>Telefon nömrəsi ilə giriş</button> :
                                <form action="" onSubmit={handleSubmitForm}>
                                    <div>
                                        <label htmlFor="phone">Telefon nömrəsi</label>
                                        <input type="text" name="" id="phone" value={tel} onChange={handlesetTel} />
                                    </div>
                                    <button type='submit' style={{ padding: '6px', background: '#00A0E4', color: 'white' }}>SMS kod göndərilsin</button>
                                </form>

                        }

                    </main>
                    <footer>
                        <p>Saytda avtorizasiyadan keçməklə siz Topdanci.az İstifadəçi razılaşmasını və Qaydalarını
                            qəbul etdiyinizi təsdiqləmiş olursunuz.</p>
                    </footer>
                </div> : <main className={styles.otp}>
                    <h1>{otp_code}</h1>
                    <h3>Kodu daxil edin</h3>
                    <div >
                        <p>4 rəqəmli kod</p>
                        <div>
                            <input type="text" maxLength={1} name='first' onChange={handleInput1Change} />
                            <input type="text" maxLength={1} ref={secondRef} name='second' onChange={handleInput1Change} />
                            <input type="text" maxLength={1} ref={thirdRef} name='third' onChange={handleInput1Change} />
                            <input type="text" maxLength={1} ref={lastRef} name='last' onChange={handleInput1Change} />
                        </div>
                        <button>Təkrar göndər</button>
                    </div>
                </main>
            }
        </section>
    );
};

export default Login;