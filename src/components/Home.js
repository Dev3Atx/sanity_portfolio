import React from "react";
import image from "../austin.jpeg";

export default function Home() {
	return (
		<main>
			<img
				src={image}
				alt="Austin Skyline gray"
				className="
				absolute
				object-cover
				w-full
				h-full"
			/>
			<section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
				<h1 className="text-6xl text-gray-100 font-extrabold leading-none lg:leading-snug home-name ">
					Hello Friend.
				</h1>
			</section>
		</main>
	);
}
