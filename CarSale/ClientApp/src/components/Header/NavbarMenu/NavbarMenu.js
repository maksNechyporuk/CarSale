﻿import React, { Component } from 'react';
class NavbarMenu extends Component {
   
    render() {
        return (
            <div class="navbar-menu hidden">
                <div class="container">
                    <div class="col">
                        <div class="row">
                            <ul class="navbar-pc d-none d-lg-block">
                                <li class="home-icon"><i class="fa fa-home fa-2x"></i></li>
                                <li><a href="#" class="nav-item nav_active">Pre-Owned Cars</a></li>
                                <li><a href="#" class="nav-item">Finance</a></li>
                                <li><a href="#" class="nav-item">Service</a></li>
                                <li><a href="#" class="nav-item">News</a></li>
                                <li><a href="#" class="nav-item">Careers</a></li>
                                <li><a href="#" class="nav-item">Meet Our Team</a></li>
                                <li><a href="#" class="nav-item">Contact Us</a></li>
                                <li><a href="#" class="nav-item">About Us</a></li>
                                <button type="submit" class=" btn btn_account">
                                    <i class="fa fa-user"></i> My Account
                                    <i class="fa fa-chevron-down"></i>
                                </button>
                                 <button type="submit" class="btn btn_register">Register</button>
                                <button type="submit" class="btn btn_login">Login</button>
                            </ul>
                            <div
                                class="phone-burger d-none d-block d-sm-none d-sm-block d-xs d-lg-none"
                            >
                                <div class="wrapper">
                                    <input type="checkbox" id="check-menu" />
                                    <label for="check-menu">MENU</label>
                                    <div class="burger-line first"></div>
                                    <div class="burger-line second"></div>
                                    <div class="burger-line third"></div>
                                    <div class="burger-line fourth"></div>
                                    <nav class="main-menu">
                                        <a href="#">Pre-Owned Cars</a>
                                        <a href="#">Service</a>
                                        <a href="#">Meet Our Team</a>
                                        <a href="#">Contact Us</a>
                                        <a href="#">About Us</a>
                                        <a href="#">Login</a>
                                        <a href="#">Register</a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default NavbarMenu;