import React from 'react'
import './footer.scss'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const footer = () => {
    return (

        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p className="text-justify">Consectetur id laboris aute qui ea eiusmod aute consequat proident.
                        Aute aliquip incididunt laboris occaecat sint. Minim minim consequat dolor irure esse labore fugiat nisi et laborum. Aliquip anim nostrud sint reprehenderit aute consectetur.
                        Officia do proident id ipsum deserunt aute consequat non ea irure dolor.</p>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Categories</h6>
                        <ul className="footer-links">
                            <li><a href="http://scanfcode.com/category/c-language/">All Item</a></li>
                            <li><a href="http://scanfcode.com/category/front-end-development/">Women</a></li>
                            <li><a href="http://scanfcode.com/category/back-end-development/">Men</a></li>

                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                            <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                            <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by
             <a href="#">NS Apperal</a>.
                </p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li><a className="facebook" href="#"><FaFacebookF /></a></li>
                            <li><a className="twitter" href="#"><FaTwitter /></a></li>
                            <li><a className="dribbble" href="#"><FaInstagram /></a></li>
                            <li><a className="linkedin" href="#"><FaLinkedinIn /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default footer
