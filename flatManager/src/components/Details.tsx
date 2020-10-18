import { IonApp, IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonRow, IonToolbar } from "@ionic/react";
import React from "react";

const Details: React.FC = () => (
    <IonApp>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                <IonBackButton defaultHref="home" text="Back"/>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
      <IonContent>
          <IonCard>
          <IonCardHeader>
            <IonCardTitle>appartName</IonCardTitle>
          </IonCardHeader>
              <IonCardContent>
              <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel>Address : </IonLabel>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel>Price :</IonLabel>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel>Surface :</IonLabel>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel>Renovation : </IonLabel>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel>Rent :</IonLabel>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel>Vacations :</IonLabel>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel>Note : </IonLabel>
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
                                <IonLabel>m² Buy Price : </IonLabel>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel>m² Location Price : </IonLabel>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel>Monthly Price Rent : </IonLabel>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel>Rentability : </IonLabel>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel>Cash-Flow : </IonLabel>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                  </IonGrid>
              </IonCardContent>
          </IonCard>
      </IonContent>
    </IonApp>
);

export default Details;