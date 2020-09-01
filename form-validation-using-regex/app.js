const nameInput = document.getElementById("name");
const zipInput = document.getElementById("zip");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
nameInput.addEventListener("blur", (event) => {
  // Validate name
  const name = document.getElementById("name").value;
  const re = /^[a-zA-Z]{2,10}$/;
  if (!re.test(name)) {
    nameInput.classList.add("is-invalid");
  } else {
    nameInput.classList.remove("is-invalid");
  }
});

zipInput.addEventListener("blur", (event) => {
  const zip = zipInput.value;
  const re = /^[0-9]{5}(-[0-9]{4})?$/;
  if (!re.test(zip)) {
    zipInput.classList.add("is-invalid");
  } else {
    zipInput.classList.remove("is-invalid");
  }
});

emailInput.addEventListener("blur", (event) => {
  const email = document.getElementById("email").value;
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+).([a-zA-Z]){2,5}$/;
  if (!re.test(email)) {
    emailInput.classList.add("is-invalid");
  } else {
    emailInput.classList.remove("is-invalid");
  }
});

phoneInput.addEventListener("blur", (event) => {
  const phone = document.getElementById("phone").value;
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
  if (!re.test(phone)) {
    phoneInput.classList.add("is-invalid");
  } else {
    phoneInput.classList.remove("is-invalid");
  }
});
