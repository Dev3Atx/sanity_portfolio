import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
	return (
		<header className="bg-gray-600">
			<div className="container mx-auto flex justify-between">
				<nav className="flex">
					<NavLink
						to="/"
						exact
						activeClassName="text-white"
						className="inflex-flex items-center py-6 px-3 mr-4 text-gray-100 hover:text-gray-800 text-4xl font-bold tracking-widest"
					>
						Dev3
					</NavLink>
					<NavLink
						to="/post"
						className="inflex-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-gray-800"
						activeClassName="text-gray-100 bg-gray-700"
					>
						CV
					</NavLink>
					<NavLink
						to="/project"
						className="inflex-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-gray-800"
						activeClassName="text-gray-100 bg-gray-700"
					>
						Projects
					</NavLink>
					<NavLink
						to="/about"
						className="inflex-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-gray-800"
						activeClassName="text-gray-100 bg-gray-700"
					>
						About Me!
					</NavLink>
				</nav>
				<div className="inline-flex py-3 px-3 my-6">
					<SocialIcon
						url="https://github.com/Dev3Atx"
						className="mr-4"
						target="_blank"
						fgColor="#fff"
						style={{ height: 30, width: 30 }}
					/>
					<SocialIcon
						url="https://www.linkedin.com/in/dev3atx/"
						className="mr-4"
						target="_blank"
						fgColor="#fff"
						style={{ height: 30, width: 30 }}
					/>
					<SocialIcon
						url="https://www.facebook.com/TonyDominguez84"
						className="mr-4"
						target="_blank"
						fgColor="#fff"
						style={{ height: 30, width: 30 }}
					/>
					<SocialIcon
						url="https://twitter.com/ToneD84"
						className="mr-4"
						target="_blank"
						fgColor="#fff"
						style={{ height: 30, width: 30 }}
					/>
				</div>
			</div>
		</header>
	);
}
