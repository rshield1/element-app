const config = {
    apiKey: "AIzaSyApZNG1M_1Ugx-fGAF75PEwvCuSxx2m6As",
    authDomain: "element-678.firebaseapp.com",
    databaseURL: "https://element-678-default-rtdb.firebaseio.com",
    projectId: "element-678",
    storageBucket: "element-678.appspot.com",
    messagingSenderId: "735927576189",
    appId: "1:735927576189:web:163570ca8c52c9169d7314"
  };

  const firebase = window.firebase.initializeApp(config)
  const { FieldValue} = window.firebase.firestore

  export { firebase, FieldValue };