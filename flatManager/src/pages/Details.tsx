import { IonApp, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonRow, IonToolbar } from "@ionic/react";
import React from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {trash} from 'ionicons/icons';

const Details: React.FC = () => {
    const history = useHistory();

    const location: any = useLocation();
    const navigateToList = (data: any) => {
        history.push({
            pathname: `/list`,
            state: data
        });
        history.go(0)
    }

    const squareMeterBuyPrice = () => {
        const price = location.state.price;
        const surface = location.state.surface;
        const res = (price / surface).toFixed(2);
        return res
    }

    const squareMeterRentPrice = () => {
        const rent = location.state.rent;
        const surface = location.state.surface;
        const res = (rent / surface).toFixed(2);
        return res
    }
    const deleteAppart = () => {
        navigateToList(location)
        alert("Appartement deleted")
    }

    return (
        <IonApp>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton onClick={() => navigateToList(location)}>Back</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>{location.state.name}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonGrid>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel>Address : {location.state.adress}</IonLabel>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel>Price : {location.state.price} €</IonLabel>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel>Surface : {location.state.surface} m2</IonLabel>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel>Renovation : {location.state.renovation}</IonLabel>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel>Rent : {location.state.rent}</IonLabel>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel>Vacations : {location.state.vacation}</IonLabel>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel>Note : {location.state.note}</IonLabel>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>
                            Calculation :
                  </IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonGrid>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel>m² Buy Price : {squareMeterBuyPrice()}€</IonLabel>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel>m² Location Price : {squareMeterRentPrice()}€</IonLabel>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel>Monthly Price Loan : N/A</IonLabel>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel>Rentability : N/A</IonLabel>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonLabel>Cash-Flow : N/A</IonLabel>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>
                <IonButton onClick={deleteAppart}>
                    <IonIcon slot="start" color="warning" icon={trash}/>
                        Delete
                    </IonButton>
            </IonContent>
        </IonApp>
    )
};

export default Details;