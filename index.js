// Copyrights dynamic year
const today = new Date();
const currentYear = today.getFullYear();

const footerTCopyrights = document.querySelector(".copyrights");

const copyrights = `2020 - ${currentYear}`;
footerTCopyrights.textContent = copyrights;
