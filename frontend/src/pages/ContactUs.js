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
			question: "How do I create a new due entry in the system?",
			answer: `To create a new due entry, log in to your account and navigate to the "Add Due" section. Fill in the required details, such as the student's name, student number, due amount, due date, and any additional information. Click "Submit" to create the due entry.`,
		},
	},
	{
		attributes: {
			question: "Can I edit or update an existing due entry?",
			answer: `Yes, you can edit or update an existing due entry. Locate the due entry you want to modify in the system, click on it to open the details, and then select the "Edit" option. Make the necessary changes and save the updated information.`,
		},
	},
	{
		attributes: {
			question:
				"How can I view the list of all dues or filter dues based on specific criteria?",
			answer: `To view a list of all dues, go to the "View Dues" or "Due List" section. You can filter dues by various criteria, including student name, due date, department, and more. Use the filter options provided to refine your search and view specific sets of dues.`,
		},
	},
	{
		attributes: {
			question:
				"What should I do if I encounter an issue or have questions about the system?",
			answer: `If you encounter any issues while using the Due Management System or have questions about its functionality, please contact our support team. You can reach out to our support by visiting the "Contact Us" or "Support" section on the system's website. Our team will assist you in resolving any problems or answering your questions.`,
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
