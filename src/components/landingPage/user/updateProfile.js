import React, { Component } from 'react';
import './../../landingPage/user/user.css';
import NavBar from './../../navbar';
import books from './../../../assets/book.png';
class UpdateProfile extends Component {
	constructor() {
		super();
		this.state = {
			input: {},
			errors: {},
			startDate: new Date(),
			isVerified: false,
			value: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.phoneCheck = this.phoneCheck.bind(this);
	}
	handleChange(event) {
		let input = this.state.input;
		input[event.target.name] = event.target.value;

		this.setState({ input });
	}

	phoneCheck(e) {
		const re = /^[0-9\b]+$/;
		let errors = {};
		if (e.target.value.length < 10) {
			errors['phone'] = 'Size must be 10';
		}
		if (e.target.value === '' || re.test(e.target.value)) {
			this.setState({ value: e.target.value });
		} else {
			errors['phone'] = 'Please enter only numbers';
		}
		this.setState({ errors: errors });
	}

	handleSubmit(event) {
		event.preventDefault();

		if (this.validate()) {
			console.log(this.state);

			let input = {};
			input['email'] = '';

			this.setState({ input: input });

			alert('Form is submited');
		}
	}

	validate() {
		let input = this.state.input;
		let errors = {};
		let isValid = true;

		if (!input['email']) {
			isValid = false;
			errors['email'] = 'Please enter your email Address.';
		}

		if (typeof input['email'] !== 'undefined') {
			var pattern = new RegExp(
				/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
			);
			if (!pattern.test(input['email'])) {
				isValid = false;
				errors['email'] = 'Please enter valid email address.';
			}
		}

		this.setState({ errors: errors });

		return isValid;
	}
	render() {
		return (
			<div className="update-profile-container">
				<NavBar />
				<div class="head">
					<div class="row">
						<div class="col col-md-8">
							<h2>Update Profile</h2>
						</div>
						
					</div>
				</div>

				<div class="row">
					<form action="" onSubmit={this.handleSubmit} id="signupForm">
                    <div className="form-group">
						<div class="custom-file">
                        <label for="inputGroupFile01">
								Upload Profile Picture
							</label>
							<input
								type="file"
								class="custom-file-input"
								id="inputGroupFile01"
								aria-describedby="inputGroupFileAddon01"
							/>
							</div>
						</div>
						<div className="form-group">
							<label for="fname">First Name:</label>
							<input
								type="text"
								className="form-control"
								id="fname"
								placeholder="Enter your First Name"
								name="fname"
							/>
						</div>

						<div className="form-group">
							<label for="mname">Middle Name:</label>
							<input
								type="text"
								className="form-control"
								id="mname"
								placeholder="Enter your Middle Name"
								name="mname"
							/>
						</div>

						<div className="form-group">
							<label for="lname">Last Name:</label>
							<input
								type="text"
								className="form-control"
								id="lname"
								placeholder="Enter your Last Name"
								name="lname"
							/>
						</div>

						<div className="form-group">
							<label for="email">Change Email Id:</label>
							<input
								type="email"
								className="form-control"
								id="email"
								onChange={this.handleChange}
								placeholder="Enter your Email Id"
								name="email"
							/>
						</div>
						<div className="form-group">
							<label for="pno">Change Phone Number:</label>

							<input
								type="text"
								className="form-control"
								id="pno"
								value={this.state.value}
								onChange={this.phoneCheck}
								placeholder="Enter Phone Number"
								name="pno"
							/>
							<div className={this.state.errors['phone'] == null ? 'text-success' : 'text-danger'}>
								{this.state.errors['phone'] == null ? '' : this.state.errors['phone']}{' '}
							</div>
						</div>
						<button
							type="submit"
							className="example_a"
							onClick={() => {
								this.setState({ isVerified: true });
							}}
						>
							Update Profile
						</button>
						<footer className="footer" />
					</form>
				</div>
			</div>
		);
	}
}

export default UpdateProfile;
