const today = new Date();
const currentYear = today.getFullYear();

const footerTextContent = document.querySelector(".copyrights")

const copyrights = `Copyrights @ Yusuf Alp ${currentYear}`;
footerTextContent.textContent = copyrights;
