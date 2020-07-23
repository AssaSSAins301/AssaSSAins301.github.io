const name = document.getElementsByClassName("name");
const email = document.getElementsByClassName("email");
const subject = document.getElementsByClassName("subject");
const contact = document.getElementsByClassName("contact");
const form = document.getElementsByClassName("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (name.value === "") {
    showError(name, "Enter Your Name");
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (email.value === "") {
    showError(email, "Enter Your Name");
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (subject.value === "") {
    showError(subject, "Enter Your Name");
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (contact.value === "") {
    showError(contact, "Enter Your Name");
  }
});
