// Copyrights dynamic year
const today = new Date();
const currentYear = today.getFullYear();

const footerTCopyrights = document.querySelector(".copyrights");

const copyrights = `Copyrights @ Yusuf Alp ${currentYear}`;
footerTCopyrights.textContent = copyrights;
