import React, {useState, useEffect} from 'react';
import styles from './index.module.css';
import ProfileReplace from '../../container/profile/replace';
import withPrivateRoute from '../../hoc/withPrivateRoute';
import Adverts from '../../container/profile/adverts';
import EmptyAdverts from '../../components/empty-adverts';
import {useRouter} from 'next/router';
import {MyComponent} from '../../hooks/useResponsivenenessAdjuster';
import {ArrowSVG} from '../../assets/svg/Arrow';
import PopupDialog from "../../components/popup-dialog";

interface DashboardProps {

}

const Dashboard: React.FC<DashboardProps> = ({isLoggedIn}: any) => {
    const [balance, setBalance] = useState(5);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedTab, setselectedTab] = useState({title: 'Profil', content: <ProfileReplace CB={setBalance}/>})
    const tabs = [
        {title: 'Profil', content: <ProfileReplace CB={setBalance}/>},
        {title: 'Elanlar', content: <Adverts/>},
        {title: 'Ödənişlər', content: <EmptyAdverts title='' selectable='action'/>},
        {title: 'Elan limiti', content: <EmptyAdverts title='' selectable='action'/>}
    ]

    const router = useRouter()
    const responsive = MyComponent()
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    useEffect(() => {

        const findIndex = tabs.findIndex(item => item.title === router.query.param)
        router.query.param && setselectedTab(tabs[findIndex])
    }, [router.query.param])


    return (
        <div className={styles.dashboard}>

            <header>
                <div className="wrapper">
                    <h3>Şəxsi Kabinet</h3>
                    <div>
                        <div><p>Şəxsi hesab</p>
                            <h5>{balance} Azn</h5></div>
                        <button onClick={openModal} className={styles.incrementButton}>Artır</button>
                    </div>
                </div>
            </header>
            <main>
                <div className="wrapper">
                    <ul>
                        {
                            tabs.map(tab => (
                                <li key={tab.title} onClick={() => setselectedTab(tab)}
                                    style={selectedTab.title === tab.title ? {color: 'red'} : {}}>{tab.title}
                                    {responsive < 900 &&
                                        <span style={{transform: 'rotate(-90deg)', display: 'inline-block'}}><ArrowSVG/></span>}
                                </li>
                            ))
                        }

                    </ul>
                    {
                        selectedTab.content
                    }

                </div>
            </main>

            <PopupDialog
                title={'Balansın artırılması'}
                isOpen={isOpen}
                component={<div>Salam</div>}
                closeModal={closeModal}/>


        </div>

    );
};

export default withPrivateRoute(Dashboard);