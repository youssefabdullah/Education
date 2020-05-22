import firebase from 'firebase'

// var firebaseConfig = {
//     apiKey: "AIzaSyDG_E716w-w1QkATved2z_8DRrbmXkLw5s",
//     authDomain: "omararabic-afd8c.firebaseapp.com",
//     databaseURL: "https://omararabic-afd8c.firebaseio.com",
//     projectId: "omararabic-afd8c",
//     storageBucket: "omararabic-afd8c.appspot.com",
//     messagingSenderId: "618494260719",
//     appId: "1:618494260719:web:660e475e2eaa079efdb21a"
//   };
//   console.log()

  // export const fire = firebase.initializeApp(firebaseConfig)
  // export const userRef = fire.database().ref("users")
  // export const db = firebase.firestore()
  // export const storeRef = fire.storage();
  var firebaseConfig = {
    apiKey: "AIzaSyCOSUnvPMDKE1_xAD_2ozNhO4hVCpgTgdY",
    authDomain: "mrkhaled-cca21.firebaseapp.com",
    databaseURL: "https://mrkhaled-cca21.firebaseio.com",
    projectId: "mrkhaled-cca21",
    storageBucket: "mrkhaled-cca21.appspot.com",
    messagingSenderId: "242035240738",
    appId: "1:242035240738:web:380b21ceb2619b0d90ff7b"
  };

  export const fire = firebase.initializeApp(firebaseConfig)
  export const userRef = fire.database().ref("users")
  export const db = firebase.firestore()
  export const storeRef = fire.storage();