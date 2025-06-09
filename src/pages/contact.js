'use client';
import Head from "next/head";
import React from 'react';

export default function Contact() {

    return (

        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Contact</title>
                <link rel="icon" href="favicon.ico" type="image/x-icon" sizes="11x15"/>
            </Head>
            <div className="main-content w-100">
                <div>
                    <section className="pt-120 pb-120 mt-10 mt-lg-0">
                        <div >
                            <div className="pb-60 br-bottom-n3">
                                <div className="page-heading"><h3
                                    className="page-title fs-onefw-semibold n5-color mb-2 mb-md-3 text-center">Contact</h3>
                                    <p className="fs-seven n5-color mb-4 mb-md-8 text-center">Interested in hiring me for your
                                        project or just want to say hi? You can fill in the contact form below or send me an
                                        email to<a className="p1-color" href="#"> evans@yourwebsite.com</a>
                                        .Want to get connected? Follow me on the social channels below.</p>
                                    <div className="d-flex flex-wrap justify-content-center gap-2 align-items-center mt-4"><a
                                        className="social-icon" href="#"><i className="p1-color">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                             viewBox="0 0 256 256" height="1em" width="1em"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
                                        </svg>
                                    </i></a><a className="social-icon" href="#"><i className="p1-color">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                             viewBox="0 0 256 256" height="1em" width="1em"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                                        </svg>
                                    </i></a><a className="social-icon" href="#"><i className=" p1-color">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                             viewBox="0 0 256 256" height="1em" width="1em"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
                                        </svg>
                                    </i></a><a className="social-icon" href="#"><i className="p1-color">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                             viewBox="0 0 256 256" height="1em" width="1em"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                                        </svg>
                                    </i></a><a className="social-icon" href="#"><i className="p1-color">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                             viewBox="0 0 256 256" height="1em" width="1em"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M216,152.09V216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152.09a8,8,0,0,1,16,0V208H200V152.09a8,8,0,0,1,16,0Zm-128,32h80a8,8,0,1,0,0-16H88a8,8,0,1,0,0,16Zm4.88-53,77.27,20.68a7.89,7.89,0,0,0,2.08.28,8,8,0,0,0,2.07-15.71L97,115.61A8,8,0,1,0,92.88,131Zm18.45-49.93,69.28,40a8,8,0,0,0,10.93-2.93,8,8,0,0,0-2.93-10.91L119.33,67.27a8,8,0,1,0-8,13.84Zm87.33,13A8,8,0,1,0,210,82.84l-56.57-56.5a8,8,0,0,0-11.32,11.3Z"></path>
                                        </svg>
                                    </i></a><a className="social-icon" href="#"><i className="p1-color">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                             viewBox="0 0 256 256" height="1em" width="1em"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-15.49,113a8,8,0,0,1-4.77,5.49c-31.65,12.22-85.48,12-86,12H128c-.54,0-54.33.2-86-12a8,8,0,0,1-4.77-5.49C34.8,173.39,32,156.57,32,128s2.8-45.39,5.16-54.47A8,8,0,0,1,41.93,68c30.52-11.79,81.66-12,85.85-12h.27c.54,0,54.38-.18,86,12a8,8,0,0,1,4.77,5.49C221.2,82.61,224,99.43,224,128S221.2,173.39,218.84,182.47Z"></path>
                                        </svg>
                                    </i></a></div>
                                </div>
                            </div>
                        </div>
                        <div className="container mt-8 mt-md-15">
                            <div >
                                <div className="section-heading">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="title-line"></div>
                                        <h2 className="display-four n5-color fw-semibold">Contact Details</h2></div>
                                    <p className="fs-seven n4-color mt-2 mt-md-4">If you are going to use a passage of Lorem
                                        Ipsum, you need to be sure there isn&#x27;t anything embarrassing hidden in the
                                        middle of text.</p></div>
                            </div>
                            <div >
                                <div className="d-flex flex-wrap gap-3 gap-md-6 align-items-center justify-content-between mt-8 mt-md-15">
                                    <div className="d-flex gap-3 align-items-center p-3 p-md-5 br1-left"><i
                                        className="p1-color fs-one">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                             viewBox="0 0 256 256" height="1em" width="1em"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16Zm8,200a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8ZM140,60a12,12,0,1,1-12-12A12,12,0,0,1,140,60Z"></path>
                                        </svg>
                                    </i>
                                        <div><span className="n5-color fs-five fw-semibold d-block mb-1 mb-sm-2">Phone</span><a
                                            className="n4-color fs-nine" href="tel:+6494461709">+123-456-7890</a></div>
                                    </div>
                                    <div className="d-flex gap-3 align-items-center p-3 p-md-5 br1-left"><i
                                        className="p1-color fs-one">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                             viewBox="0 0 256 256" height="1em" width="1em"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM172.42,72.84l-64,32a8.05,8.05,0,0,0-3.58,3.58l-32,64A8,8,0,0,0,80,184a8.1,8.1,0,0,0,3.58-.84l64-32a8.05,8.05,0,0,0,3.58-3.58l32-64a8,8,0,0,0-10.74-10.74ZM138,138,97.89,158.11,118,118l40.15-20.07Z"></path>
                                        </svg>
                                    </i>
                                        <div><span className="n5-color fs-five fw-semibold d-block mb-1 mb-sm-2">Location</span><span
                                            className="n4-color fs-nine">123 Example Street, City, Country</span></div>
                                    </div>
                                    <div className="d-flex gap-3 align-items-center p-3 p-md-5 br1-left"><i
                                        className="ph ph-envelope-open p1-color fs-one">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                             viewBox="0 0 256 256" height="1em" width="1em"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M228.44,89.34l-96-64a8,8,0,0,0-8.88,0l-96,64A8,8,0,0,0,24,96V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96A8,8,0,0,0,228.44,89.34ZM96.72,152,40,192V111.53Zm16.37,8h29.82l56.63,40H56.46Zm46.19-8L216,111.53V192ZM128,41.61l81.91,54.61-67,47.78H113.11l-67-47.78Z"></path>
                                        </svg>
                                    </i>
                                        <div><span className="n5-color fs-five fw-semibold d-block mb-1 mb-sm-2">Email</span><a
                                            className="n4-color fs-nine" href="mailto:someone@example.com">yourmail@domain.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="pb-120">
                        <div className="container">
                            <div >
                                <div className="section-heading">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="title-line"></div>
                                        <h2 className="display-four n5-color fw-semibold">Get In Touch</h2></div>
                                    <p className="fs-seven n4-color mt-2 mt-md-4">If you are going to use a passage of Lorem
                                        Ipsum, you need to be sure there isn&#x27;t anything embarrassing hidden in the
                                        middle of text.</p></div>
                            </div>
                            <div >
                                <form className="mt-8 mt-md-15 p-3 p-sm-5 p-md-10 rounded-5 brn4">
                                    <div className="d-flex flex-wrap flex-md-nowrap gap-3 gap-md-6 mb-3 mb-md-6">
                                        <div className="d-flex align-items-center gap-2  py-2 py-md-4 rounded-2 brn4 w-100"><i
                                            className="ph ph-octagon p1-color fs-six mb-1"></i><input
                                            className="n5-color border-0" placeholder="Your Name*" type="text" id="name"
                                            required=""/></div>
                                        <div className="d-flex align-items-center gap-2  py-2 py-md-4 rounded-2 brn4 w-100"><i
                                            className="ph ph-envelope p1-color fs-six mb-1"></i><input
                                            className="n5-color border-0" placeholder="Email address*" type="email"
                                            id="email" required=""/></div>
                                    </div>
                                    <div className="d-flex flex-wrap flex-md-nowrap gap-3 gap-md-6">
                                        <div className="d-flex align-items-center gap-2 py-2 py-md-4 rounded-2 brn4 w-100"><i
                                            className="ph ph-device-mobile-camera p1-color fs-six mb-1"></i><input
                                            className="n5-color border-0" placeholder="Phone*" type="number" id="phone"
                                            required=""/></div>
                                        <div className="d-flex align-items-center gap-2 py-2 py-md-4 rounded-2 brn4 w-100"><i
                                            className="ph ph-map-pin p1-color fs-six mb-1"></i><input
                                            className="n5-color border-0" placeholder="Location*" type="text" id="location"
                                            required=""/></div>
                                    </div>
                                    <div className="mt-3 mt-md-6"><textarea
                                        className="n5-color px-2 px-md-3 py-2 py-md-4 rounded-2 brn4 w-100 h-120"
                                        placeholder="Your Message:" id="message"></textarea></div>
                                    <div className="d-flex gap-2 align-items-center mt-3 mt-md-5"><input id="check"
                                                                                                     type="checkbox"
                                                                                                     className="cursor-pointer"/><label
                                        htmlFor="check" className="n4-color fs-nine cursor-pointer">Save my name, email, and
                                        website in this browser for the next time.</label></div>
                                    <button className="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill mt-5 mt-md-10">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>
                    <footer className="container d-flex flex-wrap gap-3 gap-md-6 justify-content-center justify-content-sm-between align-items-center pb-4 pb-md-8 text-center mb-16 mb-lg-0">
                    <span className="fs-eight fw-medium n5-color order-sm-2">Designed by <a
                        className="fs-eight fw-medium n5-color"
                        href="https://themeforest.net/user/uiaxis">UIAXIS</a></span><span
                        className="fs-eight fw-medium n5-color order-sm-1">Copyright © 2024 <a
                        className="fs-eight fw-medium n5-color"
                        href="index.html">Portfolify</a>. All Rights Reserved.</span></footer>
                </div>
            </div>

        </>
    );
}
