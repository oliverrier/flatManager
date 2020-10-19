import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonImg, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';


const ProfilePage: React.FC = () => {


    
    const [name, setName] = useState<string>('');
    type Item = {
        src: string;
        text: string;
      };
    const items: Item[] = [{ src: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png', text: ''}];
    const [contribution, setContribution] = useState<number>();
    const [borrowingRate, setBorrowingRate] = useState<number>();
    const [insuranceRate, setInsuranceRate] = useState<number>();
    const [termLoan, setTermLoan] = useState<number>();
    const [notaryFees, setNotaryFees] = useState<number>();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Profil page</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonCardContent>
                    <IonInput value={name} placeholder="Enter your name" onIonChange={e => setName(e.detail.value!)}></IonInput>
                    {items.map((image, i) => (
                        <IonItem key={i}>
                            <IonThumbnail slot="start">
                                <IonImg src={image.src} />
                            </IonThumbnail>
                            <IonLabel>{image.text}</IonLabel>
                        </IonItem>
                    ))}
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonList>
                        <IonItemDivider>Contribution</IonItemDivider>
                        <IonItem>
                            <IonInput type="number" value={contribution} placeholder="Enter Number" onIonChange={e => setContribution(parseInt(e.detail.value!, 0))}></IonInput>
                        </IonItem>
                        <IonItemDivider>Taux emprunt</IonItemDivider>
                        <IonItem>
                            <IonInput type="number" value={borrowingRate} placeholder="Enter Input" onIonChange={e => setBorrowingRate(parseInt(e.detail.value!, 0))}></IonInput> %
                        </IonItem>
                        <IonItemDivider>Taux assurance</IonItemDivider>
                        <IonItem>
                            <IonInput type="number" value={insuranceRate} placeholder="Enter Input" onIonChange={e => setInsuranceRate(parseInt(e.detail.value!, 0))}></IonInput> %
                        </IonItem>
                        <IonItemDivider>Durée de l'emprunt</IonItemDivider>
                        <IonItem>
                            <IonInput type="number" value={termLoan} placeholder="Enter Input" onIonChange={e => setTermLoan(parseInt(e.detail.value!, 0))}></IonInput>
                        </IonItem>
                        <IonItemDivider>Frais de notaire</IonItemDivider>
                        <IonItem>
                            <IonInput type="number" value={notaryFees} placeholder="Enter Input" onIonChange={e => setNotaryFees(parseInt(e.detail.value!, 0))}></IonInput> %   
                        </IonItem>
                    </IonList>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default ProfilePage;