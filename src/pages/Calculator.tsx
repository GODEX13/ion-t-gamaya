import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAlert, IonButton,  IonActionSheet} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Calculator.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>gamaya</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
      <img alt="Silhouette of mountains" src="../src/assets/img/godz.jpg" />
      <IonCardHeader>
        <IonCardTitle>godex</IonCardTitle>
        <IonCardSubtitle>yeah</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>once an artist, always an artist</IonCardContent>
      <IonButton id="present-alert">click</IonButton>
      <IonAlert
        trigger="present-alert"
        header="bsag unsa"
        subHeader="jalinon the hacker"
        message="oh yeah"
        buttons={['Action']}
      ></IonAlert>

<IonButton id="open-action-sheet">nc ka jals</IonButton>
      <IonActionSheet
        trigger="open-action-sheet"
        header="Actions"
        buttons={[
          {
            text: 'Delete',
            role: 'destructive',
            data: {
              action: 'delete',
            },
          },
          {
            text: 'Share',
            data: {
              action: 'share',
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
            data: {
              action: 'cancel',
            },
          },
        ]}
      ></IonActionSheet>
    </IonCard>
        <ExploreContainer name="" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
