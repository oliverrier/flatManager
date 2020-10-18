import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useHistory } from "react-router-dom";


const ApartmentListings: React.FC = () => {
    const history = useHistory();
    const data = {
        1: {
            name: "appartement1",
            adress: "5 rue des pissenlits 33000 Bordeaux",
            price: 125000,
            surface: 45,
            renovation: "non",
            rent: "Ceci est la rentabilité.",
            vacations: "aled",
            note: "Ceci est une note. L'appartement est cool achetez svp car sinpn je serais triste et voila."
        },
        2: {
            name: "appartement2",
            adress: "5 rue des coucous 33000 Bordeaux",
            price: 134000,
            surface: 45,
            renovation: "non",
            rent: "Ceci est la rentabilité.",
            vacations: "aled",
            note: "Ceci est une note. L'appartement est cool que les autres donc achetez svp car sinpn je serais triste et voila."
        },
        3: {
            name: "appartement3",
            adress: "5 rue des bidules 33000 Bordeaux",
            price: 100000,
            surface: 45,
            renovation: "non",
            rent: "Ceci est la rentabilité.",
            vacations: "aled",
            note: "Ceci est une note. L'appartement est encore plus cool que les autres donc achetez svp car sinpn je serais triste et voila."
        }
    }
    const navigateToDetails = (data: any) => {
        history.push({
            pathname: `/details`,
            state: data
        });
        history.go(0)
    }
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
                            <IonCard color='primary' button={true} onClick={() => navigateToDetails(data[1])} >
                                <IonCardHeader>
                                    <IonImg src="https://jojo-app.fr/wp-content/uploads/2018/09/espace-optimise-appartement-meuble-paris.jpg" />
                                    <IonCardSubtitle>{data[1].price} €</IonCardSubtitle>
                                    <IonCardSubtitle>{data[1].rent}</IonCardSubtitle>
                                    <IonCardTitle>{data[1].adress}</IonCardTitle>
                                    <IonCardSubtitle>02/12/2019</IonCardSubtitle>

                                </IonCardHeader>

                                <IonCardContent>
                                    {data[1].note}
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size-md="3" size="12">
                            <IonCard color='primary' button={true} onClick={() => navigateToDetails(data[2])}>
                                <IonCardHeader>
                                    <IonImg src="http://goraguer.fr/wp/wp-content/uploads/2012/06/Appartement-marais-5.jpg" />
                                    <IonCardSubtitle>{data[2].price} €</IonCardSubtitle>
                                    <IonCardSubtitle>{data[2].rent}</IonCardSubtitle>
                                    <IonCardTitle>{data[2].adress}</IonCardTitle>
                                    <IonCardSubtitle>06/02/2020</IonCardSubtitle>
                                </IonCardHeader>

                                <IonCardContent>
                                    {data[2].note}
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size-md="3" size="12">
                            <IonCard color='primary' button={true} onClick={() => navigateToDetails(data[3])}>
                                <IonCardHeader>
                                    <IonImg src="http://www.notreloft.com/images/2014/05/Renovation-appartement-haussmannien-0100.jpg" />
                                    <IonCardSubtitle>{data[3].price} €</IonCardSubtitle>
                                    <IonCardSubtitle>{data[3].rent}  </IonCardSubtitle>
                                    <IonCardTitle>{data[3].adress}  </IonCardTitle>
                                    <IonCardSubtitle>06/02/2020</IonCardSubtitle>
                                </IonCardHeader>

                                <IonCardContent>
                                    {data[3].note}                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default ApartmentListings;