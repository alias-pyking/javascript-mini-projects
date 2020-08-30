const getJokesButton = document.querySelector(".get-jokes");

getJokesButton.addEventListener("click", loadJokes);

function loadJokes(event) {
  event.preventDefault();
  const numberEl = document.getElementById("no-of-jokes");
  const number = numberEl.value;
  if (number === "") {
    showErrorMessage("Please fill in some number", "error");
  } else {
    numberEl.value = "";
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);
    xhr.onload = function () {
      const response = JSON.parse(xhr.responseText);
      if (response.type === "success") {
        if (xhr.status === 200) {
          let output = "<h3>Jokes</h3>";
          const jokes = response.value;
          jokes.forEach((joke) => {
            output += `
						<p>${joke.joke}</p>
						<hr>
						`;
          });
          document.querySelector(".jokes").innerHTML = output;
        } else {
          showErrorMessage("Invalid request", "error");
        }
      } else {
        showErrorMessage("Something went wrong please try again", "error");
      }
    };
    xhr.send();
  }
}

function showErrorMessage(message, className) {
  const container = document.querySelector(".container");
  const form = document.querySelector("#joke-form");
  const div = document.createElement("div");
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  container.insertBefore(div, form);

  setTimeout(() => {
    document.querySelector(".alert").remove();
  }, 2000);
}
