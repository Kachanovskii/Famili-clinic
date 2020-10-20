function $div(cls) { return document.querySelector(cls); }
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
$div(objDepartments[department]).style.display = 'flex';
