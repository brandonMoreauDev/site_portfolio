let lastScroll = 0;
const navbar = document.getElementById("navbar"); // Utilisation directe de l'id

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) {
    navbar.style.top = 0;
  } else {
    navbar.style.top = "-68px";
  }

  lastScroll = window.scrollY;
});

function telechargerFichier() {
  const lien = document.createElement("a");
  lien.href = "./assets/doc/CV_Brandon.pdf";
  lien.download = "CV_Moreau_Brandon";
  document.body.appendChild(lien);
  lien.click();
  document.body.removeChild(lien);
}
