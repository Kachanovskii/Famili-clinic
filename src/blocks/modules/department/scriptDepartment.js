function $div(cls) { return document.querySelector(cls); }
function $divAll(cls) { return document.querySelectorAll(cls); }
let department = localStorage.getItem('key');
let objDepartments = {
  0: ".family-doc",
  1: ".urology",
  2: ".uzd",
  3: ".otolaryngology",
  4: ".massage",
  5: ".gynecology",
  6: ".dermatology",
  7: ".cosmetology",
  8: ".surgery",
};
if (localStorage.getItem('key') !== null) {
  $div(objDepartments[department]).style.display = 'flex';
}
let $links = $divAll('.mainDoctorsAndReferrals__navbar-content li');
for (let i = 0; i < $links.length; i++) {
  $links[i].addEventListener("click", function (events) {
    for (let j = 0; j < $divAll('.direction-content').length; j++) {
      $div(objDepartments[j]).style.display = 'none';
    }
    let a = i - 1;
    $div(objDepartments[a]).style.display = 'flex';
  });
}
localStorage.clear();