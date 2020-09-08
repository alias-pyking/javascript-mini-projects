const data = [
  {
    name: "John doe",
    age: 32,
    gender: "male",
    lookingFor: "female",
    location: "boston",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Gen smith",
    age: 34,
    gender: "female",
    lookingFor: "male",
    location: "New Jersey",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    name: "Jeff bezos",
    age: 45,
    gender: "male",
    lookingFor: "female",
    location: "CA",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
];

function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { vlaue: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
const profiles = profileIterator(data);
function nextProfile() {

  const currentProfile = profiles.next().vlaue;
  const profileDisplay = document.getElementById("profile-display");
	if (currentProfile !== undefined) {
		profileDisplay.innerHTML = `
		<ul class = "list-group">
			<li class="list-group-item">Name : ${currentProfile.name}</li>
			<li class="list-group-item">Age : ${currentProfile.age}</li>
			<li class="list-group-item">Location : ${currentProfile.location}</li>
			<li class="list-group-item">Preference :
			${currentProfile.gender} looking for
			${currentProfile.lookingFor}</li>
		</ul>
	`;
  document.getElementById("image-display").innerHTML = `
		<img src="${currentProfile.image}">`;
	} else {
		window.location.reload();
  }
}

const nextButton = document.getElementById("next");
nextButton.addEventListener("click", nextProfile);
