import React, { useState } from 'react';
import styles from './index.module.css';
import ProfileReplace from '../../container/profile/replace';
interface DashboardProps {

}

const Dashboard: React.FC<DashboardProps> = ({ }) => {
  const [selectedTab, setselectedTab] = useState({ title: 'Profil', content: <ProfileReplace /> })
  const tabs = [
    { title: 'Profil', content: <ProfileReplace /> },
    { title: 'Elanlar', content: <></> },
    { title: 'Ödənişlər', content: <></> },
    { title: 'Elan limiti', content: <></> }
  ]


  return (
    <div className={styles.dashboard}>

      <header>
        <div className="wrapper">
          <h3>Şəxsi Kabinet</h3>
          <div>
            <div> <p>Şəxsi hesab</p>
              <h5>15 Azn</h5></div>
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

export default Dashboard;