// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'Why build Construct?',
		slug: 'why-build-construct',
		html: `<p>Well, <a href="https://github.com/yekara">Yekara</a> and <a href="https://github.com/tionis">me</a> wanted to break free of the boundaries of Pen and Paper Systems bound to the Settings of themselves. <br>
			We both brought experience in Call of Cthulhu, he some more of D20 Systems and myself of Chronicles of Darkness and Shadowrun to the Table. We sat together and decided to solve the Problem in our own way, the IT way.<br>
			We sat together and decided we wanted a System that has following properties:
			<ul>
			  <li>Easy to learn. play and customize.</li>
			  <li>Contains skill progression that follows the gauss distribution.</li>
			</ul></p>
			<p>After giving the whole thing some thought, we decided on a D10 based System (optionally with D6s) with a very strong modularity. This enabled us to use concepts from the IT World to enable Users to build their own System with bundles. While this rule system will not be published for copyright reasons, the system that automatically manages rule sets will be published. To learn more about how this work, read the documentation.</p>
			`,
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
