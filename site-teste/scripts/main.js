// Troca de imagens

const myImage = document.querySelector("img");
myImage.onclick = () => {

   const mySrc = myImage.getAttribute("src");
   if (mySrc === "imagens/OIP.jpg") {
      myImage.setAttribute("src", "imagens/halnaker-tunnel-inglaterra-paul-benns.jpg");
      myImage.setAttribute("alt", "Uma floresta com tons verdes chamativos reluzindo a luz do sol entre suas árvores");
   }

   else {
      myImage.setAttribute("src", "imagens/OIP.jpg");
      myImage.setAttribute("alt", "Uma passagem de formato redondo envolta por árvores amarelas curvadas");
   }

// Mensagem de boas vindas personalizada

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

   function setUserName() {
      const myName = prompt("Por favor digite o seu nome.");
      if (!myName) {
         setUserName();
      }

      else {
         localStorage.setItem("name", myName);
         myHeading.textContent = `Bem vindo(a), ${myName}`;
      }
   }

   if (!localStorage.getItem("name")) {
      setUserName();
   }
   else {
      const storedName = localStorage.getItem("name");
      myHeading.textContent = `Bem vindo(a), ${storedName}`;
   }

myButton.onclick = function() {
   setUserName();
}

};
