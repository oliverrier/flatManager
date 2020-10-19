import React, { useState } from 'react';
import { Redirect, Route, } from 'react-router-dom';
import { IonApp, IonButton, IonModal, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Details from './pages/Details';
import ApartmentListings from './pages/apartmentListings';
import Modal from './components/Modal';
import ProfilePage from './pages/ProfilePage';

const App: React.FC = () => {

  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    setShowModal(false);
  }
  return (

    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/list" component={ApartmentListings} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/list" />} />
          <Route path="/details" component={Details} exact={true} />
          <Route path="/profile" component={ProfilePage} exact={true} />
        </IonRouterOutlet>
      </IonReactRouter>
      <IonModal isOpen={showModal}>
      {/* <Modal 
        showModal={showModal}
        setShowModal={setShowModal}
        closeAction={closeModal}>
      </Modal> */}
    </IonModal>
    <IonButton onClick={() => setShowModal(true)}>Show Modal</IonButton>
    </IonApp>
  )
};

export default App;
