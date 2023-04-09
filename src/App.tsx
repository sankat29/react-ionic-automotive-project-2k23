import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";
import React from "react";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
// import H1 from "./components/H1";

setupIonicReact();

const App: React.FC = () => (
  <React.Fragment>
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Title</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent></IonContent>
    </IonApp>
  </React.Fragment>
);

export default App;

//  <IonApp>
//    <IonContent>{/* <H1 title="Hello World    " /> */}</IonContent>
//  </IonApp>;
