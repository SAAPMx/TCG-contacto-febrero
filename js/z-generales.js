// ------------------- FIREBASE INFORMTACION 
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    collection,
    getDocs,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
    getFirestore,
    query, 
    where,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
    // Import the functions you need from the SDKs you need
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries


    // Your web app's Firebase configuration
    const firebaseConfig = {
      // Paste your firebase config here
      apiKey: "AIzaSyANFhqh71TQqLm2DWuQhBOAGnFMntWUqTY",
      authDomain: "tcg-contacto.firebaseapp.com",
      projectId: "tcg-contacto",
      storageBucket: "tcg-contacto.appspot.com",
      messagingSenderId: "310182934941",
      appId: "1:310182934941:web:c94bde003b9c34612c1774",
      measurementId: "G-97KL1B2HV4"
    };

    // Initialize Firebase
    export const app = initializeApp(firebaseConfig);
    //export const auth = getAuth(app);
    export const db = getFirestore(app);
//const analytics = getAnalytics(app);
// -------------------



//FUNCIONES DE OPERACIONES GENERALES
/*Agregar a Base*/
export const saveContacto = (mail, cel, name, lname, motive, company) =>
  addDoc(collection(db, "contacto"), { mail, cel, name, lname, motive, company });


export const saveTask = (mail, predio, referencia, contacto, descripcion, fecha) =>
  addDoc(collection(db, "tasks"), { mail, predio, referencia, contacto, descripcion, fecha });
export const savePersonal = (correo, nombre, apellidoPaterno, apellidoMaterno, grado) =>
addDoc(collection(db,"personal"), {correo, nombre, apellidoPaterno, apellidoMaterno, grado});
/*Obetener de Base*/
export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);
export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const onGetRegisters = (callback) =>
  onSnapshot(collection(db, "registro"), callback);
export const getRegister = (id) => getDoc(doc(db, "registro", id));

/*Borrar*/
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));
export const deleteRegister = (id) => deleteDoc(doc(db, "registro", id));

/*Actualizar*/
export const updateFolio = (newFields) => //Actualiza el último folio en UTILIDADES 
  updateDoc(doc(db, "utilidades", "folio"), newFields);
export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);

  
export const getTasks = () => getDocs(collection(db, "personal"));


