import React, { useState } from "react";

export default function ContactForm() {
	const [formData, setFormData] = useState({
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission, e.g., send data to the server
		console.log(formData);
	};

	return (
		<section className="bg-white">
			<div className="max-w-screen-md px-4 py-8 mx-auto lg:py-16">
				<h2 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900">
					Contact Us
				</h2>
				<p className="mb-8 font-light text-center text-gray-500 lg:mb-16 sm:text-xl">
					Got a technical issue? Want to send feedback on your experiences? Need
					details about your dues? Let us know.
				</p>
				<form onSubmit={handleSubmit} className="space-y-8">
					<div>
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-medium text-gray-900"
						>
							Your email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
							placeholder="name.cst@rub.edu.bt"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="subject"
							className="block mb-2 text-sm font-medium text-gray-900"
						>
							Subject
						</label>
						<input
							type="text"
							id="subject"
							name="subject"
							value={formData.subject}
							onChange={handleChange}
							className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500"
							placeholder="Let us know how we can help you"
							required
						/>
					</div>
					<div className="sm:col-span-2">
						<label
							htmlFor="message"
							className="block mb-2 text-sm font-medium text-gray-900"
						>
							Your message
						</label>
						<textarea
							id="message"
							name="message"
							rows="6"
							value={formData.message}
							onChange={handleChange}
							className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
							placeholder="Leave a comment..."
						></textarea>
					</div>
					<button
						type="submit"
						className="px-5 py-3 text-sm font-semibold bg-white rounded-md shadow-sm text-sky-950 ring-1 ring-inset ring-gray-800 hover:bg-sky-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-950"
					>
						Send message
					</button>
				</form>
			</div>
		</section>
	);
}
