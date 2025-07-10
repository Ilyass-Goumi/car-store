 // for menu

 const icon = document.querySelector(".bar i");


 const list = document.querySelector(".nav-bar");
 
 
 const links = document.querySelectorAll(".nav-bar ul li a"); // Tous les liens du menu
 
 
 
 
 
 // Clic sur l'icône hamburger
 
 
 icon.onclick = () => {
 
 
   icon.classList.toggle('fa-xmark'); // Bascule l'icône
 
 
   list.classList.toggle('active');   // Affiche / cache le menu
 
 
 };
 
 
 
 
 
 // Clic sur un lien du menu : on ferme le menu
 
 
 links.forEach(link => {
 
 
   link.onclick = () => {
 
 
     icon.classList.remove('fa-xmark'); // Restaure l'icône hamburger
 
 
     list.classList.remove('active');   // Cache le menu
 
 
   };
 
 
 });
 



 // script for animation 
const sr = ScrollReveal ({
  distance:"30px" ,
  duration: 1000 ,
  delay: 400,
  reset: false
})


sr.reveal('.container-box-home h1' ,{delay: 200 , origin: 'left'}) 
sr.reveal('.container-box-home p' ,{delay: 250 , origin: 'left'}) 
sr.reveal('.container-home .container-box-home button' ,{delay: 260 , origin: 'left'}) 
 sr.reveal('.container-box-home-img .ele2 img' ,{delay: 400 , origin: 'right'}) 
sr.reveal('.container-box-car2' ,{delay: 250 , origin: 'top'}) 
sr.reveal('.container-box-car3' ,{delay: 200 , origin: 'bottom'}) 
sr.reveal('#ABOUT h1' ,{delay: 250 , origin: 'top'}) 
sr.reveal('.container-about' ,{delay: 300 , origin: 'left'}) 
sr.reveal('#REVIEWS h1' ,{delay: 250 , origin: 'top'}) 
sr.reveal('.container-reviews' ,{delay: 300 , origin: 'top'}) 
sr.reveal('.container-add .info' ,{delay: 200 , origin: 'top'}) 
sr.reveal('.container-add .data-add' ,{delay: 270 , origin: 'left'}) 
sr.reveal('.container-add .info2' ,{delay: 300 , origin: 'top'})
