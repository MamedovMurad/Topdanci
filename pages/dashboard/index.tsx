import React, { useState } from 'react';
import styles from './index.module.css';
import ProfileReplace from '../../container/profile/replace';
import { useRouter } from 'next/navigation';
import withPrivateRoute from '../../hoc/withPrivateRoute';
import Adverts from '../../container/profile/adverts';
import EmptyAdverts from '../../components/empty-adverts';
interface DashboardProps {

}

const Dashboard: React.FC<DashboardProps> = ({ isLoggedIn }: any) => {
  const [balance, setBalance] = useState(5)
  const [selectedTab, setselectedTab] = useState({ title: 'Profil', content: <ProfileReplace CB={setBalance} /> })
  const tabs = [
    { title: 'Profil', content: <ProfileReplace CB={setBalance}  /> },
    { title: 'Elanlar', content: <Adverts /> },
    { title: 'Ödənişlər', content: <EmptyAdverts title='' selectable='action' /> },
    { title: 'Elan limiti', content: <EmptyAdverts title='' selectable='action' /> }
  ]
console.log('fdsafsaf');



  return (
    <div className={styles.dashboard}>

      <header>
        <div className="wrapper">
          <h3>Şəxsi Kabinet</h3>
          <div>
            <div> <p>Şəxsi hesab</p>
              <h5>{balance} Azn</h5></div>
            <button>Artır</button>
          </div>
        </div>
      </header>
      <main>
        <div className="wrapper">
          <ul>
            {
              tabs.map(tab => (
                <li key={tab.title} onClick={() => setselectedTab(tab)} style={selectedTab.title === tab.title ? { color: 'red' } : {}}>{tab.title}</li>
              ))
            }

          </ul>
          {
            selectedTab.content
          }

        </div>
      </main>


    </div>

  );
};

export default withPrivateRoute(Dashboard);