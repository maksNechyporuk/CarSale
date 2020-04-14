﻿import React, { Component } from 'react';

class ShowProfile extends Component {

	render() {
		return (
			<div class="profile">
				<div class="container portfolio">
					<div class="row">
						<div class="col-md-12">
							<div class="heading">
								<img src="https://image.ibb.co/cbCMvA/logo.png" />
							</div>
						</div>
					</div>
					<div class="bio-info">
						<div class="row">
							<div class="col-md-6">
								<div class="row">
									<div class="col-md-12">
										<div class="bio-image">
											<img
												src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
												class="avatar img-circle img-thumbnail"
												alt="avatar"
											/>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="bio-content">
									<h1>@Model.Email</h1>
									<div class="col-xs-6">
										<label><h6>First name:</h6></label>
										<label><h6>@Model.First name</h6></label>
									</div>
									<div class="col-xs-6">
										<label><h6>Last name:</h6></label>
										<label><h6>@Model.last name</h6></label>
									</div>
									<div class="col-xs-6">
										<label><h6>City:</h6></label>
										<label><h6>@Model.City</h6></label>
									</div>

									<button asp-action="Edit" asp-controller="Profile" class="btn_Edit"
									><i class="fa fa-pencil" aria-hidden="true"></i> Edit</button
									>
									<button asp-action="Edit" asp-controller="Profile" class="btn_SignOut"
									><i class="fa fa-sign-out" aria-hidden="true"></i>
 Sign out</button
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		);
	}
}

export default ShowProfile;