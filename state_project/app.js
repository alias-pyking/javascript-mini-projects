const PageState = function () {
	let currentState = new HomeState(this);
	this.init = function () {
		this.change(new HomeState);
	}
	this.change = function (state) {
		this.currentState = state;
	}
}

// home state

const HomeState = function (page) {
	document.querySelector('#heading').textContent = null;
	document.querySelector('#content').innerHTML = `
	<div class="jumbotron">
	<h1 class="display-4">Hello, world!</h1>
	<p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
	<hr class="my-4">
	<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
	<a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
	</div>
	`;

}

// About state 

const AboutState = function (page) {
	document.querySelector('#heading').textContent = 'About US';
	document.querySelector('#content').innerHTML = `
	<p> This is the about page </p>
	`;
}

const ContactState = function (page) {
	document.querySelector('#heading').textContent = 'Contact US';
	document.querySelector('#content').innerHTML = `
	<p> This is the contact page </p>
	`;
}

const pagestate = new PageState();

// Init the first state

pagestate.init();

// UI vars

const home = document.getElementById('home');
const about = document.getElementById('about');
const contact = document.getElementById('contact');

home.addEventListener('click', (e) => {
	pagestate.change(new HomeState);
	e.preventDefault();
});


about.addEventListener('click', (e) => {
	pagestate.change(new AboutState);
	e.preventDefault();
});

contact.addEventListener('click', (e) => {
	pagestate.change(new ContactState);
	e.preventDefault();
});
