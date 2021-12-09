const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    header.classList.add('bg-white', 'bg-opacity-70');
  } else {
    header.classList.remove('bg-white', 'bg-opacity-70');
  }
})

var currentDay = new Date().getDate();
var currentMonth = new Date().getMonth() + 1;
var currentYear = new Date().getFullYear();

const currentYearSpan = document.querySelector('.currentYear');
currentYearSpan.innerHTML = currentYear;

if (document.querySelector('.currentAge')) {
  var currentDate = '"' + currentDay + '/' + currentMonth + '/' + currentYear + '"';
  var currentAge = calculateAge("05/09/1999", currentDate);
  function calculateAge(birthDate, otherDate) {
    birthDate = new Date(birthDate);
    otherDate = new Date(otherDate);
    var currentAge = (otherDate.getFullYear() - birthDate.getFullYear());
    if (otherDate.getMonth() < birthDate.getMonth() ||
      otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate()) {
      currentAge--;
    }
    const currentAgeSpan = document.querySelectorAll('.currentAge');
    currentAgeSpan.forEach(element => {
      element.innerHTML = currentAge;
    });
  }
}