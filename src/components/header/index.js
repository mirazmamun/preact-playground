import { h } from 'preact';
import { Link } from 'preact-router/match';

const Header = () => (
	<div id="sidebar-wrapper">
		<ul class="sidebar-nav">
			<li class="sidebar-brand">
				<Link href="/">Home</Link>
			</li>
			<li>
				<Link href="/profile">Me</Link>
			</li>
		</ul>
	</div>
);

export default Header;
