import { IonButton, IonContent, IonFooter, IonInput, IonItem, IonLabel, IonList } from "@ionic/react"
import React from "react"

type ModalProps = {
  showModal: boolean,
  setShowModal: Function
  closeAction: Function;
}



class Modal extends React.Component<ModalProps> {

  state: {
    address: string,
    price: number,
    surface: number,
    renovationPrice: number,
    rent: number,
    vacancyTime: number,
    photos: File[]
  }

  constructor(props: any) {
    super(props)
    this.state= {
      address: '',
      price: 0,
      surface: 0,
      renovationPrice: 0,
      rent: 0,
      vacancyTime: 0,
      photos: []
    }
  }

  handleInputChange(e: any) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  log() {
    console.log(this)
  }
  
  render() {

    return <>
      <IonContent>
        <IonList class="ion-padding">
          <IonItem>
            <IonLabel>
              Address
            </IonLabel>
            <IonInput value={this.state.address} placeholder="Enter address" onInput={(e: any) => this.handleInputChange(e)}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel>
              Price (€)
            </IonLabel>
            <IonInput type="number" value={this.state.price} placeholder="Enter price" onInput={(e: any) => this.handleInputChange(e)}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel>
              Surface (m²)
            </IonLabel>
            <IonInput type="number" value={this.state.surface} placeholder="Enter surface" onInput={(e: any) => this.handleInputChange(e)}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel>
              Renovation Price (€)
            </IonLabel>
            <IonInput type="number" value={this.state.renovationPrice} placeholder="Enter renovation price" onInput={(e: any) => this.handleInputChange(e)}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel>
              Rent (€)
            </IonLabel>
            <IonInput type="number" value={this.state.rent} placeholder="Enter rent" onInput={(e: any) => this.handleInputChange(e)}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel>
              Vacancy Time (month)
            </IonLabel>
            <IonInput type="number" value={this.state.vacancyTime} placeholder="Enter vacancy time" onInput={(e: any) => this.handleInputChange(e)}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel>
              Photos
            </IonLabel>
            <input 
              type="file"
              accept="image/*" 
              value={this.state.address} 
              placeholder="Add Photos" 
              onInput={(e: any) => this.handleInputChange(e)}>

              </input>
          </IonItem>
        </IonList>

      </IonContent>

      <IonFooter>
        <IonButton onClick={() => this.props.setShowModal(false)}>Cancel</IonButton>
        <IonButton onClick={() => this.props.setShowModal(false)}>Save</IonButton>
      </IonFooter>
    </>
  };

}

export default (showModal: boolean, setShowModal: Function, {closeAction}: { closeAction: Function }) => (
  <Modal 
    showModal={showModal}
    setShowModal={setShowModal}
    closeAction={closeAction}>
  </Modal>
)