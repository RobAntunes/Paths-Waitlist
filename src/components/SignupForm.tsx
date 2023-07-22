import React from "react";
import { useState } from "react";

export default function SignupForm() {
	const [email, setEmail] = useState("");

	return (
		<div id="mc_embed_shell">
			<link
				href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
				rel="stylesheet"
				type="text/css"
			/>

			<div id="mc_embed_signup">
				<form
					action="https://network.us17.list-manage.com/subscribe/post?u=4f743fafd07bdafbea4ee609d&amp;id=c874069f7d&amp;f_id=00a66ae0f0"
					method="post"
					id="mc-embedded-subscribe-form"
					name="mc-embedded-subscribe-form"
					className="validate"
					target="_blank"
				>
					<div id="mc_embed_signup_scroll" className="text-center sm:text-left">
						<h2 className="!mb-0 !text-5xl">Join the waitlist!</h2>
						<h4>
							We're launching soon, sign up to support our mission and stay in
							the loop.
						</h4>
						<div className="indicates-required">
							<span className="asterisk">*</span> indicates required
						</div>
						<div className="mc-field-group !w-full">
							<label htmlFor="mce-EMAIL">
								Email Address <span className="asterisk">*</span>
							</label>
							<input
								type="email"
								name="EMAIL"
								className="required email"
								id="mce-EMAIL"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}

							/>
							<span id="mce-EMAIL-HELPERTEXT" className="helper_text" />
						</div>
						<div id="mce-responses" className="clearfalse !m-0">
							<div className="response hidden" id="mce-error-response" />
							<div className="response hidden !m-0" id="mce-success-response" />
						</div>
						<div aria-hidden="true" className="absolute left-[-5000px]">
							<input
								type="text"
								name="b_4f743fafd07bdafbea4ee609d_c874069f7d"
								tabIndex={-1}
								value=""
							/>
						</div>
						<div className="clear">
							<input
								type="submit"
								name="subscribe"
								id="mc-embedded-subscribe"
								className="button !mx-0 !h-full !bg-black !w-full md:!w-[30%] !text-white !font-bold !text-lg !py-3 !px-6 !rounded-lg !shadow-lg !hover:!bg-gray-900 !transition-colors !duration-300 !ease-in-out"
								value="Subscribe"
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
