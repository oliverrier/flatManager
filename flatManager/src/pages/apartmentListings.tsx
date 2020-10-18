import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRouterOutlet, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Route } from 'react-router';


const apartmentListings: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color='primary'>
                    <IonTitle>Apartment Listings</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol size-md="3" size="12" >
                            <IonCard color='primary' button={true} >
                                <IonCardHeader>
                                    <IonImg src="https://jojo-app.fr/wp-content/uploads/2018/09/espace-optimise-appartement-meuble-paris.jpg" />
                                    <IonCardSubtitle>125 000 €</IonCardSubtitle>
                                    <IonCardSubtitle>Ceci est la rentabilité.</IonCardSubtitle>
                                    <IonCardTitle>5 rue des pissenlits 33000 Bordeaux</IonCardTitle>
                                    <IonCardSubtitle>02/12/2019</IonCardSubtitle>

                                </IonCardHeader>

                                <IonCardContent>
                                    Ceci est une note. L'appartement est cool achetez svp car sinpn je serais triste et voila.
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size-md="3" size="12">
                            <IonCard color='primary' button={true}>
                                <IonCardHeader>
                                    <IonImg src="http://goraguer.fr/wp/wp-content/uploads/2012/06/Appartement-marais-5.jpg" />
                                    <IonCardSubtitle>134 000 €</IonCardSubtitle>
                                    <IonCardSubtitle>Ceci est la rentabilité.</IonCardSubtitle>
                                    <IonCardTitle>5 rue des coucous 33000 Bordeaux</IonCardTitle>
                                    <IonCardSubtitle>06/02/2020</IonCardSubtitle>
                                </IonCardHeader>

                                <IonCardContent>
                                    Ceci est une note. L'appartement est cool que les autres donc achetez svp car sinpn je serais triste et voila.
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size-md="3" size="12">
                            <IonCard color='primary' button={true}>
                                <IonCardHeader>
                                    <IonImg src="http://www.notreloft.com/images/2014/05/Renovation-appartement-haussmannien-0100.jpg" />
                                    <IonCardSubtitle>100 000 €</IonCardSubtitle>
                                    <IonCardSubtitle>Ceci est la rentabilité.</IonCardSubtitle>
                                    <IonCardTitle>5 rue des bidules 33000 Bordeaux</IonCardTitle>
                                    <IonCardSubtitle>06/02/2020</IonCardSubtitle>
                                </IonCardHeader>

                                <IonCardContent>
                                    Ceci est une note. L'appartement est encore plus cool que les autres donc achetez svp car sinpn je serais triste et voila.
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default apartmentListings;