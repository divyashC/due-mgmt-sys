import React, { useState } from "react";
import {
	Accordion,
	AccordionHeader,
	AccordionBody,
} from "@material-tailwind/react";
import ContactForm from "../components/ContactForm.js";

const initialData = [
	{
		attributes: {
			question: "New Question 1?",
			answer: "Answer to New Question 1.",
		},
	},
	{
		attributes: {
			question: "New Question 2?",
			answer: "Answer to New Question 2.",
		},
	},
	{
		attributes: {
			question: "New Question 3?",
			answer: "Answer to New Question 3.",
		},
	},
	{
		attributes: {
			question: "New Question 4?",
			answer: "Answer to New Question 4.",
		},
	},
];

function Icon({ id, open }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={2}
			stroke="currentColor"
			className={`${
				id === open ? "rotate-180" : ""
			} h-5 w-5 transition-transform`}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M19.5 8.25l-7.5 7.5-7.5-7.5"
			/>
		</svg>
	);
}

export default function ContactUs() {
	const [open, setOpen] = useState(-1);

	const handleOpen = (value) => {
		setOpen(open === value ? -1 : value);
	};

	return (
		<>
			{" "}
			<div className="flex flex-col items-center content-center py-10">
				<h1 className="mb-8 text-3xl font-bold">Frequently Asked Questions</h1>
				<div className="w-[65%] bg-white rounded-lg shadow-lg">
					{initialData.map((item, key) => {
						return (
							<Accordion key={key} open={open === key}>
								<AccordionHeader
									className="flex px-6 py-4 cursor-pointer bg-gray-50 text-sky-950 hover:bg-blue-100"
									onClick={() => handleOpen(key)}
								>
									<span className="text-lg text-left font-semibold w-[90%] ">
										{item.attributes.question}
									</span>
									<Icon id={key} className="w-[10%]" open={open} />
								</AccordionHeader>
								<AccordionBody
									className={`px-6 py-4 max-h-[${
										open === key ? "10" : "0"
									}0] overflow-hidden transition-max-h duration-300`}
								>
									{item.attributes.answer}
								</AccordionBody>
							</Accordion>
						);
					})}
				</div>
			</div>
			<ContactForm />
		</>
	);
}
