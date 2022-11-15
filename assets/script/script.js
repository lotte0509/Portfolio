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
  var currentDate = '"' + currentYear + '/' + currentMonth + '/' + currentDay + '"';
  var currentAge = calculateAge("1999/09/05", currentDate);
  function calculateAge(birthDate, todaysDate) {
    var birthDate = new Date(birthDate);
    var todaysDate = new Date(todaysDate);
    var currentAge = (todaysDate.getFullYear() - birthDate.getFullYear());
    if (todaysDate.getMonth() < birthDate.getMonth() ||
      todaysDate.getMonth() == birthDate.getMonth() && todaysDate.getDate() < birthDate.getDate()) {
      currentAge--;
    }
    const currentAgeSpan = document.querySelectorAll('.currentAge');
    currentAgeSpan.forEach(element => {
      element.innerHTML = currentAge;
    });
  }
}