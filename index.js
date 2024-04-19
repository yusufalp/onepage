// Copyrights dynamic year
const today = new Date();
const currentYear = today.getFullYear();

const footerYearRange = document.querySelector(".year-range");

const yearRangeText = `2020 - ${currentYear}`;
footerYearRange.textContent = yearRangeText;