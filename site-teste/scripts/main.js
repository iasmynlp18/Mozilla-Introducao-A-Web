// Troca de imagens

const myImage = document.querySelector("img");
myImage.onclick = () => {

   const mySrc = myImage.getAttribute("src");
   if (mySrc === "imagens/OIP(2).jpg") {
      myImage.setAttribute("src", "https://fossiltrace.com/wp-content/uploads/2020/02/4EarlyMorningFall2016-scaled.jpeg");
      myImage.setAttribute("alt", "A esquerda um feixe de sol reluzindo entre o alto tronco de uma árvore de folhas verdes. A direita um caminho com tons verdes chamativos e árvores de outono alaranjadas.");
   }

   else {
      myImage.setAttribute("src", "imagens/OIP(2).jpg");
      myImage.setAttribute("alt", "Uma casa de madeira no fundo da imagem envolta por árvores altas que reluzem feixes de sol em seus troncos");
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
