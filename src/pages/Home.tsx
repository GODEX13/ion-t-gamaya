import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCards = [
    { id: 'card1', title: 'Click counter', imageUrl: '../src/assets/img/Click Counter.gif', onClick: () => history.push('/click_counter') },
    { id: 'card2', title: 'Calculator', imageUrl: '../src/assets/img/Calculator.gif', onClick: () => history.push('/calculator') },
    { id: 'card3', title: 'Todo List', imageUrl: '../src/assets/img/Todolist.gif', onClick: () => history.push('/to_do_list') },
    { id: 'card4', title: 'Qoutes Generator', imageUrl: '../src/assets/img/Quote_Generator.gif', onClick: () => history.push('/qoutes_generator') },
    { id: 'card5', title: 'Notes', imageUrl: '../src/assets/img/Quote_Generator.gif', onClick: () => history.push('/notes') },
  ].filter(card => card.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
        <hr />
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <div className="ion-text-center">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
          />
          {filteredCards.map(card => (
            <IonCard key={card.id} onClick={card.onClick} style={{ width: '350px', cursor: 'pointer' }}>
              <IonCardContent>
                <div style={{ display: 'flex', alignItems: 'center', padding: 0 }}>
                  <img alt="" src={card.imageUrl} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0 }}>
                  {card.title}
                </div>
              </IonCardContent>
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;