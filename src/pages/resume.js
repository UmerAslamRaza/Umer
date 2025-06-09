'use client';
import Head from "next/head";
import Image from "next/image";
import React from 'react';
export default function Resume() {

    return (

        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Umer Resume</title>
                <link rel="icon" href="favicon.ico" type="image/x-icon" sizes="11x15"/>
                <meta name="next-size-adjust"/>
            </Head>
            <div className="main-content w-100">
                <div>
                    <section className="pt-120 pb-120 mt-10 mt-lg-0">
                        <div >
                            <div className="pb-60 br-bottom-n3">
                                <div data-aos="zoom-in" className="page-heading"><h3
                                    className="page-title fs-onefw-semibold n5-color mb-2 mb-md-3 text-center">Online
                                    Resume</h3><a href="images/resume.pdf"
                                                  className="w-max p-btn bg1-color fw-medium n1-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 mx-auto"
                                                  download="">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256"
                                         height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M224,152a8,8,0,0,1-8,8H192v16h16a8,8,0,0,1,0,16H192v16a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8h32A8,8,0,0,1,224,152ZM92,172a28,28,0,0,1-28,28H56v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8H64A28,28,0,0,1,92,172Zm-16,0a12,12,0,0,0-12-12H56v24h8A12,12,0,0,0,76,172Zm88,8a36,36,0,0,1-36,36H112a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h16A36,36,0,0,1,164,180Zm-16,0a20,20,0,0,0-20-20h-8v40h8A20,20,0,0,0,148,180ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.69L160,51.31Z"></path>
                                    </svg>
                                    Download PDF Version</a></div>
                            </div>
                        </div>
                        <div className="container mt-8 mt-md-15">
                            <div >
                                <div className="bgn2-color p-4 p-sm-8 p-md-15 rounded-5 brn4">
                                    <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 br-bottom-n3 pb-3 pb-md-6">
                                        <div><h2 className="display-three p1-color fw-semibold">Chris Evans</h2><span
                                            className="n4-color fs-six fw-medium">Senior Software Engineer</span></div>
                                        <div className="ps-5 br-left-n3">
                                            <ul className="d-flex flex-column gap-3">
                                                <li><a className="d-flex gap-2 align-items-center n4-color"
                                                       href="tel:+6494461709">
                                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                         viewBox="0 0 256 256" height="1em" width="1em"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
                                                    </svg>
                                                    0123 4567 890</a></li>
                                                <li><a className="d-flex gap-2 align-items-center n4-color"
                                                       href="mailto:someone@example.com">
                                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                         viewBox="0 0 256 256" height="1em" width="1em"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
                                                    </svg>
                                                    Evans@yourwebsite.com</a></li>
                                                <li className="d-flex gap-2 align-items-center n4-color">
                                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                         viewBox="0 0 256 256" height="1em" width="1em"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z"></path>
                                                    </svg>
                                                    www.yourwebsite.com
                                                </li>
                                                <li className="d-flex gap-2 align-items-center n4-color">
                                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                         viewBox="0 0 256 256" height="1em" width="1em"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
                                                    </svg>
                                                    New York
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-wrap flex-md-nowrap align-items-center gap-5 gap-md-10 pb-4 pb-md-8 br-bottom-n3 pt-60">
                                        <div className="resume-profile flex-shrink-0"><img alt="profile" loading="lazy"
                                                                                       width="127" height="159"
                                                                                       decoding="async" data-nimg="1"
                                                                                       className="object-fit-cover"
                                                                                       style={{color:'transparent'}}
                                                                                       srcSet="_next/profile.png 1x, _next/profile.png 2x"
                                                                                       src="_next/profile.png"/></div>
                                        <p className="n42-color fs-seven">Summarise your career here. You can make a PDF version
                                            of your resume using our free Sketch template here. Donec quam felis, ultricies
                                            nec, pellentesque eu. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
                                            magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                            ultricies nec, pellentesque eu, pretium quis, sem. Maecenas nec odio et ante
                                            tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis
                                            ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla
                                            mauris sit amet nibh.</p></div>
                                    <div className="resume-section row pt-60 pb-60 br-bottom-n3">
                                        <div className="col-md-8 col-lg-12 col-xl-8 col-xxl-9">
                                            <div className="d-flex align-items-center gap-2 mb-5 mb-md-10">
                                                <div className="title-line2"></div>
                                                <h2 className="fs-three p1-color fw-semibold">Work Experiences</h2></div>
                                            <div className="mb-4 mb-md-6">
                                                <div className="d-flex flex-wrap gap-2 gap-sm-3 justify-content-between align-items-center">
                                                    <span className="n5-color fs-six fw-medium">Senior Software Engineer</span><span
                                                    className="n4-color fs-eight">Google | 2023 - Present</span></div>
                                                <p className="n42-color fs-seven my-2 my-md-5">Role description goes here ipsum
                                                    dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                                    dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                                                    parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
                                                    nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla
                                                    vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                                                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
                                                    magnis dis parturient montes, nascetur ridiculus mus. Donec quam
                                                    felis.</p>
                                                <ul className="d-flex flex-column gap-3 ms-6 ms-lg-10">
                                                    <li className="n42-color fs-seven">Lorem ipsum dolor sit amet,
                                                        consectetuer.
                                                    </li>
                                                    <li className="n42-color fs-seven">Aenean commodo ligula eget dolor.</li>
                                                    <li className="n42-color fs-seven">Etiam ultricies nisi vel augue.</li>
                                                </ul>
                                            </div>
                                            <div className="mb-4 mb-md-6">
                                                <div className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center">
                                                    <span className="n5-color fs-six fw-medium">Lead Software Developer</span><span
                                                    className="n4-color fs-eight">Apple | 2016 - 2019</span></div>
                                                <p className="n42-color fs-seven my-2 my-md-5">Role description goes here ipsum
                                                    dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                                    dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                                                    parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
                                                    nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla
                                                    vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                                                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
                                                    magnis dis parturient montes, nascetur ridiculus mus. Donec quam
                                                    felis.</p>
                                                <ul className="d-flex flex-column gap-3 ms-6 ms-lg-10">
                                                    <li className="n42-color fs-seven">Lorem ipsum dolor sit amet,
                                                        consectetuer.
                                                    </li>
                                                    <li className="n42-color fs-seven">Aenean commodo ligula eget dolor.</li>
                                                    <li className="n42-color fs-seven">Etiam ultricies nisi vel augue.</li>
                                                </ul>
                                            </div>
                                            <div className="mb-4 mb-md-6">
                                                <div className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center">
                                                    <span className="n5-color fs-six fw-medium">Senior Software Developer</span><span
                                                    className="n4-color fs-eight">Dropbox | 2014 - 2016</span></div>
                                                <p className="n42-color fs-seven my-2 my-md-5">Role description goes here ipsum
                                                    dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                                    dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                                                    parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
                                                    nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla
                                                    vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                                                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
                                                    magnis dis parturient montes, nascetur ridiculus mus. Donec quam
                                                    felis.</p>
                                                <ul className="d-flex flex-column gap-3 ms-6 ms-lg-10">
                                                    <li className="n42-color fs-seven">Lorem ipsum dolor sit amet,
                                                        consectetuer.
                                                    </li>
                                                    <li className="n42-color fs-seven">Aenean commodo ligula eget dolor.</li>
                                                </ul>
                                            </div>
                                            <div className="mb-4 mb-md-6">
                                                <div className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                                                    <span className="n5-color fs-six fw-medium">Senior Developer</span><span
                                                    className="n42-color fs-eight">Uber | 2013 - 2014</span></div>
                                                <p className="n42-color fs-seven">Role description goes here ipsum dolor sit
                                                    amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                                                    montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                                                    pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel.</p>
                                            </div>
                                            <div className="mb-4 mb-md-6">
                                                <div className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                                                    <span className="n5-color fs-six fw-medium">Backend Developer</span><span
                                                    className="n42-color fs-eight">Amazon | 2014 - 2016</span></div>
                                                <p className="n42-color fs-seven">Role description goes here ipsum dolor sit
                                                    amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                                                    montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                                                    pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel.</p>
                                            </div>
                                            <div className="mb-5 mb-md-10">
                                                <div className="d-flex flex-wrap gap-2 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                                                    <span className="n5-color fs-six fw-medium">Frontend Developer</span><span
                                                    className="n42-color fs-eight">Startup | 2013 - 2014</span></div>
                                                <p className="n42-color fs-seven">Role description goes here ipsum dolor sit
                                                    amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                                                    montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                                                    pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel.</p>
                                            </div>
                                            <div className="d-flex align-items-center gap-2 mb-5 mb-md-10">
                                                <div className="title-line2"></div>
                                                <h2 className="fs-three p1-color fw-semibold">Projects</h2></div>
                                            <div className="mb-4 mb-md-6">
                                                <div className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                                                    <span className="n5-color fs-six fw-medium">Project Lorem Ipsum</span><span
                                                    className="n42-color fs-eight">Open Source</span></div>
                                                <p className="n42-color fs-seven">You can use this section for your side
                                                    projects. You can provide a project link here as well. Lorem ipsum dolor
                                                    sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                                    dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                                                    parturient montes, nascetur ridiculus mus.</p></div>
                                            <div className="mb-4 mb-md-6">
                                                <div className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                                                    <span className="n5-color fs-six fw-medium">Project Sed Fringilla</span><span
                                                    className="n42-color fs-eight">Open Source</span></div>
                                                <p className="n42-color fs-seven">You can use this section for your side
                                                    projects. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                                                    eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
                                                    eleifend ac, enim.</p></div>
                                            <div>
                                                <div className="d-flex flex-wrap gap-2 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                                                    <span className="n5-color fs-six fw-medium">Project Praesent</span><span
                                                    className="n4-color fs-eight">Open Source</span></div>
                                                <p className="n4-color fs-seven">You can use this section for your side
                                                    projects. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                                                    eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
                                                    eleifend ac, enim.</p></div>
                                        </div>
                                        <div className="col-md-4 col-lg-12 col-xl-4 col-xxl-3">
                                            <div className="ps-4 ps-xxl-7 br-left-n3 mt-5 mt-md-0">
                                                <div className="mb-8 mb-md-15">
                                                    <div className="d-flex align-items-center gap-2 mb-5 mb-md-10">
                                                        <div className="title-line2"></div>
                                                        <h2 className="fs-three p1-color fw-semibold">Skills</h2></div>
                                                    <div className="mb-3 mb-md-6"><h5
                                                        className="fs-six n5-color fw-medium mb-2 mb-md-4">Technical</h5>
                                                        <ul className="d-flex flex-column gap-3 ms-6 ms-lg-10">
                                                            <li className="n4-color fs-seven">JavaScript/React/Vue</li>
                                                            <li className="n4-color fs-seven">Python/Ruby/PHP</li>
                                                            <li className="n4-color fs-seven">Node.js/ASP.NET</li>
                                                            <li className="n4-color fs-seven">PostgreSQL/MySQL</li>
                                                            <li className="n4-color fs-seven">Object-oriented design</li>
                                                            <li className="n4-color fs-seven">Design and implement database
                                                                structures
                                                            </li>
                                                            <li className="n4-color fs-seven">Lead and deliver complex software
                                                                systems
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div><h5 className="fs-six n5-color fw-medium mb-2 mb-md-4">
                                                        Professional</h5>
                                                        <ul className="d-flex flex-column gap-3 ms-6 ms-lg-10">
                                                            <li className="n4-color fs-seven">Effective communication</li>
                                                            <li className="n4-color fs-seven">Team player</li>
                                                            <li className="n4-color fs-seven">Strong problem solver</li>
                                                            <li className="n4-color fs-seven">Good time management</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="mb-8 mb-md-15">
                                                    <div className="d-flex align-items-center gap-2 mb-3 mb-md-6">
                                                        <div className="title-line2"></div>
                                                        <h2 className="fs-three p1-color fw-semibold">Education</h2></div>
                                                    <div className="d-flex gap-2 mb-3 mb-md-5"><i className="fs-six p1-color">
                                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                             viewBox="0 0 256 256" height="1em" width="1em"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
                                                        </svg>
                                                    </i>
                                                        <div><span className="n4-color fs-seven">MSc in Computer Science University College London</span><span
                                                            className="n4-color fs-eleven">2010 - 2011</span></div>
                                                    </div>
                                                    <div className="d-flex gap-2"><i className="fs-six p1-color">
                                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                             viewBox="0 0 256 256" height="1em" width="1em"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
                                                        </svg>
                                                    </i>
                                                        <div><span className="n4-color fs-seven">BSc Maths and Physics Imperial College London</span><span
                                                            className="n4-color fs-eleven">2007 - 2010</span></div>
                                                    </div>
                                                </div>
                                                <div className="mb-8 mb-md-15">
                                                    <div className="d-flex align-items-center gap-2 mb-3 mb-md-6">
                                                        <div className="title-line2"></div>
                                                        <h2 className="fs-three p1-color fw-semibold">Awards</h2></div>
                                                    <div className="d-flex gap-2 mb-3 mb-md-5"><i className=" fs-six p1-color">
                                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                             viewBox="0 0 256 256" height="1em" width="1em"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M232,64H208V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V64H24A16,16,0,0,0,8,80V96a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,191.61V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.58c31.94-3.23,58.44-25.64,68.08-55.58H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,120A24,24,0,0,1,24,96V80H48v32q0,4,.39,8Zm144-8.9c0,35.52-29,64.64-64,64.9a64,64,0,0,1-64-64V56H192ZM232,96a24,24,0,0,1-24,24h-.5a81.81,81.81,0,0,0,.5-8.9V80h24Z"></path>
                                                        </svg>
                                                    </i>
                                                        <div><span className="n4-color fs-seven">Award Lorem Ipsum Microsoft lorem ipsum</span><span
                                                            className="n4-color fs-eleven">2019</span></div>
                                                    </div>
                                                    <div className="d-flex gap-2"><i className=" fs-six p1-color">
                                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                             viewBox="0 0 256 256" height="1em" width="1em"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M232,64H208V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V64H24A16,16,0,0,0,8,80V96a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,191.61V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.58c31.94-3.23,58.44-25.64,68.08-55.58H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,120A24,24,0,0,1,24,96V80H48v32q0,4,.39,8Zm144-8.9c0,35.52-29,64.64-64,64.9a64,64,0,0,1-64-64V56H192ZM232,96a24,24,0,0,1-24,24h-.5a81.81,81.81,0,0,0,.5-8.9V80h24Z"></path>
                                                        </svg>
                                                    </i>
                                                        <div><span className="n4-color fs-seven">Award Donec Sodales Oracle Aenean</span><span
                                                            className="n4-color fs-eleven">2017</span></div>
                                                    </div>
                                                </div>
                                                <div className="mb-8 mb-md-15">
                                                    <div className="d-flex align-items-center gap-2 mb-3 mb-md-6">
                                                        <div className="title-line2"></div>
                                                        <h2 className="fs-three p1-color fw-semibold">Languages</h2></div>
                                                    <ul className="d-flex flex-column gap-3 ms-6 ms-lg-10">
                                                        <li className="n4-color fs-seven">English(Native)</li>
                                                        <li className="n4-color fs-seven">Spanish (Professional)</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <div className="d-flex align-items-center gap-2 mb-3 mb-md-6">
                                                        <div className="title-line2"></div>
                                                        <h2 className="fs-three p1-color fw-semibold">Interests</h2></div>
                                                    <ul className="d-flex flex-column gap-3 ms-6 ms-lg-10">
                                                        <li className="n4-color fs-seven">Climbing</li>
                                                        <li className="n4-color fs-seven">Snowboarding</li>
                                                        <li className="n4-color fs-seven">Photography</li>
                                                        <li className="n4-color fs-seven">Travelling</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-wrap gap-2 gap-md-3 gap-md-5 align-items-center justify-content-center mt-4 mt-md-8">
                                        <a className="d-flex gap-1 align-items-center resume-icon" href="#">
                                            <div className="social-icon"><i className="p1-color">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                     viewBox="0 0 256 256" height="1em" width="1em"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                                                </svg>
                                            </i></div>
                                            <span className="fs-eight n4-color">github.com/username</span></a><a
                                        className="d-flex gap-1 align-items-center resume-icon" href="#">
                                        <div className="social-icon"><i className="p1-color">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                 viewBox="0 0 256 256" height="1em" width="1em"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                                            </svg>
                                        </i></div>
                                        <span className="fs-eight n4-color">linkedin.com/in/username</span></a><a
                                        className="d-flex gap-1 align-items-center resume-icon" href="#">
                                        <div className="social-icon"><i className="p1-color">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                 viewBox="0 0 256 256" height="1em" width="1em"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
                                            </svg>
                                        </i></div>
                                        <span class="fs-eight n4-color">@twittername</span></a></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <footer class="container d-flex flex-wrap gap-3 gap-md-6 justify-content-center justify-content-sm-between align-items-center pb-4 pb-md-8 text-center mb-16 mb-lg-0">
                    <span class="fs-eight fw-medium n5-color order-sm-2">Designed by<a
                        class="fs-eight fw-medium n5-color"
                        href="https://themeforest.net/user/uiaxis">UIAXIS</a></span><span
                        class="fs-eight fw-medium n5-color order-sm-1">Copyright © 2024<a
                        class="fs-eight fw-medium n5-color"
                        href="index.html">Portfolify</a>. All Rights Reserved.</span></footer>
                </div>
            </div>
        </>
);
}
