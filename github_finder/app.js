const searchUser = document.getElementById('search-user');
const github = new GitHub();
const ui = new UI();


searchUser.addEventListener('keyup', (event) => {
	const userText = event.target.value;
	if (userText !== '') {
		github.getUser(userText)
			.then(data => {
				if (data.profile.message === 'Not Found') {
					ui.showAlert('User not found','alert alert-danger');
				} else {
					// Show profile
					ui.clearAlert();
					ui.showProfile(data.profile);
					ui.showRepos(data.repos);
				}
			})
			.catch(err => {
				console.log(err);
			});
	} else {
		ui.clearProfile();
	}
});