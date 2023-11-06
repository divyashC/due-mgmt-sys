import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginErrorModal from "../components/LoginErrorModal";
import LoginSuccessModal from "../components/LoginSuccessModal";
import ProgressBar from "../components/ProgressBar";

const Login = () => {
	const navigate = useNavigate();
	const [showLoginErrorModal, setShowLoginErrorModal] = useState(false);
	const [loginInProgress, setLoginInProgress] = useState(false);
	const [loginProgress, setLoginProgress] = useState(0); // Track login progress
	const [showLoginSuccessModal, setShowLoginSuccessModal] = useState(false);

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const [error, setError] = useState(""); // State to store error messages

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const changePage = () => {
		const userDetails = JSON.parse(localStorage.getItem("userDetails"));
		if (userDetails.userType === "ICT") {
			navigate("/dashboard");
		} else {
			navigate("/profile");
		}
	};

	const apiBaseUrl = "http://localhost:8000";

	useEffect(() => {
		if (loginInProgress) {
			// Simulate login progress with a timer
			const timer = setInterval(() => {
				setLoginProgress((prevProgress) => {
					if (prevProgress >= 100) {
						clearInterval(timer); // Stop the timer when progress reaches 100
					}
					return prevProgress + 10; // Increase progress by 10
				});
			}, 1000); // Update progress every second
		}
	}, [loginInProgress]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoginInProgress(true); // Start login progress

		try {
			setLoginProgress(0);
			const response = await axios.post(`${apiBaseUrl}/login`, formData);
			const { token, ...userDetails } = response.data;

			// Save user details in local storage (excluding hashed password)
			localStorage.setItem("token", token);
			localStorage.setItem("userDetails", JSON.stringify(userDetails));

			// Display the success modal when login is successful
			setShowLoginSuccessModal(true);
		} catch (error) {
			// Check if it's a server error
			if (error.response.status !== 200) {
				setShowLoginErrorModal(true);
				setLoginProgress(0); // Reset progress
			} else {
				// Handle other errors or display a different error message
				setError(error.response.error);
			}
		} finally {
			setLoginInProgress(false); // End login progress
			setLoginProgress(0); // Reset progress
		}
	};

	return (
		<div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
					Sign in
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form className="space-y-6" onSubmit={handleSubmit}>
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Email address
						</label>
						<div className="mt-2">
							<input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								onChange={handleChange}
							/>
						</div>
					</div>

					<div>
						<div className="flex items-center justify-between">
							<label
								htmlFor="password"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Password
							</label>
							<div className="text-sm">
								<a
									href="#"
									className="font-semibold text-sky-950 hover:text-indigo-500"
								>
									Forgot password?
								</a>
							</div>
						</div>
						<div className="mt-2">
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								onChange={handleChange}
							/>
						</div>
					</div>

					{error && <div className="text-sm text-red-600">{error}</div>}

					<div>
						<button
							onClick={handleSubmit}
							className="flex justify-center w-full px-3 py-2 text-sm font-semibold leading-6 text-white rounded-md shadow-sm bg-sky-950 hover:bg-white hover:text-sky-950 hover:ring-1 hover:ring-inset hover:ring-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							disabled={loginInProgress}
						>
							{loginInProgress ? "Signing in..." : "Sign in"}
						</button>
					</div>
				</form>
			</div>
			{showLoginErrorModal && (
				<LoginErrorModal
					isOpen={showLoginErrorModal}
					onClose={() => setShowLoginErrorModal(false)}
				/>
			)}

			{showLoginSuccessModal && (
				<LoginSuccessModal
					isOpen={showLoginSuccessModal}
					onClose={() => {
						setShowLoginSuccessModal(false);
						changePage();
					}}
				/>
			)}
		</div>
	);
};

export default Login;
