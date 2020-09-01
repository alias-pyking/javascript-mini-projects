class GitHub{
	constructor() {
		this.clientId = '0eacaf552df6eaf17a83';
		this.clientSecret = '35d42d6c323f96c9e7c2fc5ea516f647994408e5';
		this.url = 'https://api.github.com/users';
		this.reposCount = 5;
		this.reposSort = 'created; asc';
	}
	async getUser(user) {
		const profileUrl = `${this.url}/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`;
		const repoUrl = `${this.url}/${user}/repos?perpage=${this.reposCount}&sort=${this.reposSort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`
		const profileResponse = await fetch(profileUrl);
		const repoResponse = await fetch(repoUrl);
		const profile = await profileResponse.json();
		const repos = await repoResponse.json();
		return {
			profile:profile,
			repos:repos,
		}
	}
}