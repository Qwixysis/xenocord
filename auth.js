import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Регистрация
window.register = function() {
  const email = document.getElementById("regEmail").value;
  const pass = document.getElementById("regPass").value;
  createUserWithEmailAndPassword(auth, email, pass)
    .then(() => {
      console.log("Регистрация успешна");
      window.location.href = "./main.html"; // редирект
    })
    .catch(err => alert(err.message));
};

// Логин
window.login = function() {
  const email = document.getElementById("logEmail").value;
  const pass = document.getElementById("logPass").value;
  signInWithEmailAndPassword(auth, email, pass)
    .then(() => {
      console.log("Логин успешен");
      window.location.href = "./main.html"; // редирект
    })
    .catch(err => alert(err.message));
};
