import { saveContacto } from "./z-generales.js";
import "./firebase.js";
import { showMessage } from "./showMessage.js";


//ESCUCHA DE DOCUMENTO
const signup = document.getElementById("signup-form")

signup.addEventListener("submit", async (e) => {
  e.preventDefault();
  
//DATOS PARA REGISTRO
  const mail = signup["signup-email"].value;
  const cel = signup["signup-cel"].value;
  const name = signup["signup-name"].value;

  const lname = signup["signup-lname"].value;
  const motive = signup["signup-motive"].value;
  const company = signup["signup-company"].value;
  
  //REGISTRAR NUEVA INFORMACIÓN EN "REGISTRO"
  try {
      const registro = await saveContacto (mail, cel, name, lname, motive, company)
      console.log("Registrando información en la nube: " + registro)
      signup.reset();
      showMessage("¡Nosotros nos ponemos en contacto!")
    
  } catch (error){
    console.log("Error registrando información", error)
  } });