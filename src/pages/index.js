'use client';
import Head from "next/head";
import Image from "next/image";
import React from 'react';
import userPic from '@/assets/_next/user.jpg';
import jsIcon from '@/assets/_next/js.png';
import resumeIcon from '@/assets/_next/resume-icon.png';
import angularIcon from '@/assets/_next/angular.png';
import reactIcon from '@/assets/_next/react.png';
import vueIcon from '@/assets/_next/vue.png';
import nodeIcon from '@/assets/_next/node.png';
import pythonIcon from '@/assets/_next/python.png';
import phpIcon from '@/assets/_next/php.png';
import npmIcon from '@/assets/_next/npm.png';
import gulpIcon from '@/assets/_next/gulp.png';
import htmlIcon from '@/assets/_next/html.png';
import cssIcon from '@/assets/_next/css.png';

import project1 from '@/assets/_next/project1.png';
import project2 from '@/assets/_next/project2.png';
import project3 from '@/assets/_next/project3.png';
import project4 from '@/assets/_next/project4.png';
import buyer1 from '@/assets/_next/buyer1.png';


export default function Home() {

    return (

        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Umer</title>
                <link rel="icon" href="favicon.ico" type="image/x-icon" sizes="11x15"/>
                <meta name="next-size-adjust"/>
            </Head>

                <div className="main-content w-100">
                    <main>
                        <div className="overflow-hidden">
                            <section className="pt-120 pb-60 br-bottom-n3  mt-10 mt-lg-0">
                                <div className="container">
                                    <div
                                        className="d-flex flex-wrap gap-9 gap-md-12 align-items-center justify-content-between">
                                        <div className="banner-content"><span
                                            className="n5-color fs-five">HI, I&#x27;M A FREELANCER</span>
                                            <h2 className="typing-text display-one p1-color mt-2 mb-3">
                                                <span>Developer</span>
                                            </h2>
                                            <p className="fs-seven n5-color">I&#x27;m a software engineer
                                                specializing in scalable
                                                web apps. Explore my<a className="p1-color"
                                                                       href="blog.html"> blog</a>,<a
                                                    className="p1-color" href="portfolio.html"> project portfolio
                                                </a>and <a className="p1-color" href="resume.html">online
                                                    resume</a>.</p>
                                            <div
                                                className="d-flex flex-wrap align-itmes-center gap-3 gap-md-6 mt-4 mt-md-8">
                                                <a
                                                    className="p-btn n11-color bg1-color fw-medium n1-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2"
                                                    href="portfolio.html">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                         viewBox="0 0 256 256" height="1em" width="1em"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                                                    </svg>
                                                    View Portfolio</a><a
                                                className="p-btn n11-color bgn51-color fw-medium n1-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2"
                                                href="resume.html">
                                                <Image
                                                    alt="Resume Icon"
                                                    loading="lazy"
                                                    width={24}
                                                    height={25}
                                                    decoding="async"
                                                    style={{color: 'transparent'}}
                                                    src={resumeIcon}
                                                />View Resume</a>

                                            </div>
                                        </div>
                                        <div className="position-relative profile-img">
                                            <div className="user-bg"></div>
                                            <div className="bg-white">
                                                <Image
                                                    alt="user-umer"
                                                    loading="lazy"
                                                    width={326}
                                                    height={398}
                                                    decoding="async"
                                                    className="user-img"
                                                    style={{color: 'transparent'}}
                                                    src={userPic}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="banner-counter d-flex flex-wrap flex-xl-nowrap align-items-center gap-3 gap-md-6 mt-10 mt-md-17">
                                        <div className="d-flex align-items-center gap-2 gap-xl-4"><h2
                                            className="display-two fw-semibold p1-color"><span></span></h2>
                                            <div className="line"></div>
                                            <span className="n5-color">Years of Experience</span></div>
                                        <div className="d-flex align-items-center gap-2 gap-xl-4"><h2
                                            className="display-two fw-semibold p1-color"><span></span></h2>
                                            <div className="line"></div>
                                            <span className="n5-color">Projects Completed</span></div>
                                        <div className="d-flex align-items-center gap-2 gap-xl-4"><h2
                                            className="display-two fw-semibold p1-color d-flex gap-1"><span></span>k
                                        </h2>
                                            <div className="line"></div>
                                            <span className="n5-color">Clients Worldwide</span></div>
                                    </div>
                                </div>
                            </section>
                            <section className="pt-120 pb-120">
                                <div className="container">
                                    <div>
                                        <div
                                            className="d-flex gap-3 flex-wrap flex-xxl-nowrap justify-content-between align-items-end">
                                            <div className="section-heading">
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="title-line"></div>
                                                    <h2 className="display-four n5-color fw-semibold">What I do</h2>
                                                </div>
                                                <p className="fs-seven n4-color mt-2 mt-md-4">I have more than 10
                                                    years experience
                                                    building software for clients all over the world. Below is a
                                                    quick overview
                                                    of my main technical skill sets and technologies I use. Want to
                                                    find out
                                                    more about my experience? Check out my <a className="p1-color"
                                                                                              href="resume.html">online
                                                        resume</a> and<a className="p1-color" href="portfolio.html">project
                                                        portfolio</a>.</p></div>
                                            <a className="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 h-100 text-nowrap"
                                               href="price.html">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                     viewBox="0 0 256 256" height="1em" width="1em"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                                                </svg>
                                                Services &amp; Pricing</a></div>
                                    </div>
                                    <div className="row g-3 g-md-6 pt-60">
                                        <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                            <div>
                                                <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div>
                                                            <Image
                                                                alt="JavaScript Icon"
                                                                loading="lazy"
                                                                width={28}
                                                                height={28}
                                                                decoding="async"
                                                                className="service-icon"
                                                                style={{color: 'transparent'}}
                                                                src={jsIcon}
                                                            />

                                                        </div>
                                                    </div>
                                                    <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">Vanilla
                                                        JavaScript</h4>
                                                    <p className="fs-seven n4-color">List skills and technologies
                                                        here. Customize as
                                                        needed. Built on HTML5, Sass, and Bootstrap 5.</p></div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                            <div>
                                                <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div>
                                                            <Image
                                                                alt="Angular"
                                                                loading="lazy"
                                                                width={28}
                                                                height={28}
                                                                decoding="async"
                                                                className="service-icon"
                                                                style={{color: 'transparent'}}
                                                                src={angularIcon}
                                                            />
                                                        </div>
                                                        <div>
                                                            <Image
                                                                alt="React"
                                                                loading="lazy"
                                                                width={28}
                                                                height={28}
                                                                decoding="async"
                                                                className="service-icon"
                                                                style={{color: 'transparent'}}
                                                                src={reactIcon}
                                                            />
                                                        </div>
                                                        <div>
                                                            <Image
                                                                alt="Vue"
                                                                loading="lazy"
                                                                width={28}
                                                                height={28}
                                                                decoding="async"
                                                                className="service-icon"
                                                                style={{color: 'transparent'}}
                                                                src={vueIcon}
                                                            />
                                                        </div>
                                                    </div>
                                                    <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">Angular,
                                                        React &amp; Vue</h4>
                                                    <p className="fs-seven n4-color">List skills and technologies
                                                        here. Customize as
                                                        needed. Built on HTML5, Sass, and Bootstrap 5.</p></div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                            <div>
                                                <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div>
                                                            <Image
                                                                alt="Node.js"
                                                                loading="lazy"
                                                                width={26}
                                                                height={28}
                                                                decoding="async"
                                                                className="service-icon"
                                                                style={{color: 'transparent'}}
                                                                src={nodeIcon}
                                                            />
                                                        </div>
                                                    </div>
                                                    <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">Node.js</h4>
                                                    <p className="fs-seven n4-color">List skills and technologies
                                                        here. Customize as
                                                        needed. Built on HTML5, Sass, and Bootstrap 5.</p></div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                            <div>
                                                <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div>
                                                            <Image
                                                                alt="Python"
                                                                loading="lazy"
                                                                width={28}
                                                                height={28}
                                                                decoding="async"
                                                                className="service-icon"
                                                                style={{color: 'transparent'}}
                                                                src={pythonIcon}
                                                            />
                                                        </div>
                                                    </div>
                                                    <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">Python &amp;
                                                        Django</h4>
                                                    <p className="fs-seven n4-color">List skills and technologies
                                                        here. Customize as
                                                        needed. Built on HTML5, Sass, and Bootstrap 5.</p></div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                            <div>
                                                <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div>
                                                            <Image
                                                                alt="PHP"
                                                                loading="lazy"
                                                                width={28}
                                                                height={28}
                                                                decoding="async"
                                                                className="service-icon"
                                                                style={{color: 'transparent'}}
                                                                src={phpIcon}
                                                            />
                                                        </div>
                                                    </div>
                                                    <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">PHP</h4>
                                                    <p className="fs-seven n4-color">List skills and technologies
                                                        here. Customize as
                                                        needed. Built on HTML5, Sass, and Bootstrap 5.</p></div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                            <div>
                                                <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div>
                                                            <Image
                                                                alt="html"
                                                                loading="lazy"
                                                                width={28}
                                                                height={28}
                                                                decoding="async"
                                                                className="service-icon"
                                                                style={{color: 'transparent'}}
                                                                src={htmlIcon}
                                                            />
                                                        </div>
                                                        <div>
                                                            <Image
                                                                alt="css"
                                                                loading="lazy"
                                                                width={28}
                                                                height={28}
                                                                decoding="async"
                                                                className="service-icon"
                                                                style={{color: 'transparent'}}
                                                                src={cssIcon}
                                                            />
                                                        </div>
                                                    </div>
                                                    <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">HTML &amp;
                                                        CSS</h4>
                                                    <p className="fs-seven n4-color">List skills and technologies
                                                        here. Customize as
                                                        needed. Built on HTML5, Sass, and Bootstrap 5.</p></div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                            <div>
                                                <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div>
                                                            <Image
                                                                alt="html"
                                                                loading="lazy"
                                                                width={28}
                                                                height={28}
                                                                decoding="async"
                                                                className="service-icon"
                                                                style={{color: 'transparent'}}
                                                                src={htmlIcon}
                                                            />
                                                        </div>
                                                        <div>
                                                            <Image
                                                                alt="css"
                                                                loading="lazy"
                                                                width={28}
                                                                height={28}
                                                                decoding="async"
                                                                className="service-icon"
                                                                style={{color: 'transparent'}}
                                                                src={cssIcon}
                                                            />
                                                        </div>
                                                    </div>
                                                    <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">HTML &amp;
                                                        CSS</h4>
                                                    <p className="fs-seven n4-color">List skills and technologies
                                                        here. Customize as
                                                        needed. Built on HTML5, Sass, and Bootstrap 5.</p></div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                            <div>
                                                <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div>
                                                            <Image
                                                                alt="npmIcon"
                                                                loading="lazy"
                                                                width={28}
                                                                height={28}
                                                                decoding="async"
                                                                className="service-icon"
                                                                style={{color: 'transparent'}}
                                                                src={npmIcon}
                                                            />
                                                        </div>
                                                        <div>
                                                            <Image
                                                                alt="gulpIcon"
                                                                loading="lazy"
                                                                width={28}
                                                                height={28}
                                                                decoding="async"
                                                                className="service-icon"
                                                                style={{color: 'transparent'}}
                                                                src={gulpIcon}
                                                            />
                                                        </div>
                                                    </div>
                                                    <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">Npm &amp;
                                                        Gup</h4>
                                                    <p className="fs-seven n4-color">List skills and technologies
                                                        here. Customize as
                                                        needed. Built on HTML5, Sass, and Bootstrap 5.</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="next-project pt-120 pb-120">
                                <div>
                                    <div
                                        className="container d-flex gap-3 gap-md-6 flex-wrap justify-content-between align-items-center">
                                        <div className="next-project-content"><h3
                                            className="display-four n11-color fw-semibold mb-2 mb-md-4">Let’s Work
                                            together on
                                            your next Project</h3>
                                            <p className="fs-seven n11-color">I am available for freelance projects.
                                                Hire me and get
                                                your project done.</p></div>
                                        <a className="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 h-100"
                                           href="contact.html">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                 viewBox="0 0 256 256" height="1em" width="1em"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                                            </svg>
                                            Let’s get in touch</a></div>
                                </div>
                            </section>
                            <section className="pt-120 pb-120 br-bottom-n3">
                                <div className="container">
                                    <div>
                                        <div
                                            className="d-flex gap-3 flex-wrap flex-xxl-nowrap justify-content-between align-items-end mb-8 mb-md-15">
                                            <div className="section-heading">
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="title-line"></div>
                                                    <h2 className="display-four n5-color fw-semibold">Featured
                                                        Projects</h2></div>
                                                <p className="fs-seven n4-color mt-2 mt-md-4">My step-by-step guide
                                                    ensures a smooth
                                                    project journey, from the initial consultation to the final
                                                    delivery. I take
                                                    care of every detail, allowing you to focus on what you do
                                                    best.</p></div>
                                            <a className="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 h-100 text-nowrap"
                                               href="portfolio.html">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                     viewBox="0 0 256 256" height="1em" width="1em"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                                                </svg>
                                                View Portfolio</a></div>
                                    </div>
                                    <div className="row g-6 g-md-10 ">
                                        <div className="col-xl-6">
                                            <div>
                                                <div className="project-card"><a className="thumb d-block"
                                                                                 href="portfolio_details.html">
                                                    <div className="post-thumb">
                                                        <div className="post-thumb-inner">
                                                            <Image
                                                                alt="project"
                                                                loading="lazy"
                                                                width={620}
                                                                height={357}
                                                                decoding="async"
                                                                className="w-100 p-2"
                                                                style={{color: 'transparent'}}
                                                                src={project1}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="post-thumb">
                                                        <div className="post-thumb-inner">
                                                            <Image
                                                                alt="project"
                                                                loading="lazy"
                                                                width={620}
                                                                height={357}
                                                                decoding="async"
                                                                className="w-100 p-2"
                                                                style={{color: 'transparent'}}
                                                                src={project1}
                                                            />
                                                        </div>
                                                    </div>
                                                </a>
                                                    <div
                                                        className="d-flex justify-content-between gap-2 align-items-center pt-4 pt-md-8 px-3 px-md-6">
                                                        <div>
                                                            <div
                                                                className="d-flex flex-wrap gap-1 gap-sm-2 align-items-center">
                                                                <a
                                                                    className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                                                    href="#">React Js</a><a
                                                                className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                                                href="#">gsap</a><a
                                                                className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                                                href="#">Web Development</a></div>
                                                            <a className="project-title fs-five fw-semibold n5-color mt-3 mt-md-5 d-block"
                                                               href="portfolio_details.html">Crypto Website
                                                                Development for DeFi
                                                                X</a></div>
                                                        <a className="project-link d-flex align-items-center justify-content-center flex-shrink-0"
                                                           href="portfolio_details.html"><i className="n5-color">
                                                            <svg stroke="currentColor" fill="currentColor"
                                                                 strokeWidth="0"
                                                                 viewBox="0 0 256 256" height="1em" width="1em"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                                                            </svg>
                                                        </i></a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div>
                                                <div className="project-card"><a className="thumb d-block"
                                                                                 href="portfolio_details.html">
                                                    <div className="post-thumb">
                                                        <div className="post-thumb-inner">
                                                            <Image
                                                                alt="project"
                                                                loading="lazy"
                                                                width={620}
                                                                height={357}
                                                                decoding="async"
                                                                className="w-100 p-2"
                                                                style={{color: 'transparent'}}
                                                                src={project2}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="post-thumb">
                                                        <div className="post-thumb-inner">
                                                            <Image
                                                                alt="project"
                                                                loading="lazy"
                                                                width={620}
                                                                height={357}
                                                                decoding="async"
                                                                className="w-100 p-2"
                                                                style={{color: 'transparent'}}
                                                                src={project2}
                                                            />
                                                        </div>
                                                    </div>
                                                </a>
                                                    <div
                                                        className="d-flex justify-content-between gap-2 align-items-center pt-4 pt-md-8 px-3 px-md-6">
                                                        <div>
                                                            <div
                                                                className="d-flex flex-wrap gap-1 gap-sm-2 align-items-center">
                                                                <a
                                                                    className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                                                    href="#">React Js</a><a
                                                                className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                                                href="#">gsap</a><a
                                                                className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                                                href="#">Web Development</a></div>
                                                            <a className="project-title fs-five fw-semibold n5-color mt-3 mt-md-5 d-block"
                                                               href="portfolio_details.html">Salesforce CRM -
                                                                Invoice
                                                                Management </a></div>
                                                        <a className="project-link d-flex align-items-center justify-content-center flex-shrink-0"
                                                           href="portfolio_details.html"><i className="n5-color">
                                                            <svg stroke="currentColor" fill="currentColor"
                                                                 strokeWidth="0"
                                                                 viewBox="0 0 256 256" height="1em" width="1em"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                                                            </svg>
                                                        </i></a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div>
                                                <div className="project-card"><a className="thumb d-block"
                                                                                 href="portfolio_details.html">
                                                    <div className="post-thumb">
                                                        <div className="post-thumb-inner">
                                                            <Image
                                                                alt="project"
                                                                loading="lazy"
                                                                width={620}
                                                                height={357}
                                                                decoding="async"
                                                                className="w-100 p-2"
                                                                style={{color: 'transparent'}}
                                                                src={project3}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="post-thumb">
                                                        <div className="post-thumb-inner">
                                                            <Image
                                                                alt="project"
                                                                loading="lazy"
                                                                width={620}
                                                                height={357}
                                                                decoding="async"
                                                                className="w-100 p-2"
                                                                style={{color: 'transparent'}}
                                                                src={project3}
                                                            />
                                                        </div>
                                                    </div>
                                                </a>
                                                    <div
                                                        className="d-flex justify-content-between gap-2 align-items-center pt-4 pt-md-8 px-3 px-md-6">
                                                        <div>
                                                            <div
                                                                className="d-flex flex-wrap gap-1 gap-sm-2 align-items-center">
                                                                <a
                                                                    className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                                                    href="#">React Js</a><a
                                                                className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                                                href="#">gsap</a><a
                                                                className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                                                href="#">Web Development</a></div>
                                                            <a className="project-title fs-five fw-semibold n5-color mt-3 mt-md-5 d-block"
                                                               href="portfolio_details.html">Car Rental App</a>
                                                        </div>
                                                        <a className="project-link d-flex align-items-center justify-content-center flex-shrink-0"
                                                           href="portfolio_details.html"><i className="n5-color">
                                                            <svg stroke="currentColor" fill="currentColor"
                                                                 strokeWidth="0"
                                                                 viewBox="0 0 256 256" height="1em" width="1em"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                                                            </svg>
                                                        </i></a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div>
                                                <div className="project-card"><a className="thumb d-block"
                                                                                 href="portfolio_details.html">
                                                    <div className="post-thumb">
                                                        <div className="post-thumb-inner">
                                                            <Image
                                                                alt="project"
                                                                loading="lazy"
                                                                width={620}
                                                                height={357}
                                                                decoding="async"
                                                                className="w-100 p-2"
                                                                style={{color: 'transparent'}}
                                                                src={project4}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="post-thumb">
                                                        <div className="post-thumb-inner">
                                                            <Image
                                                                alt="project"
                                                                loading="lazy"
                                                                width={620}
                                                                height={357}
                                                                decoding="async"
                                                                className="w-100 p-2"
                                                                style={{color: 'transparent'}}
                                                                src={project4}
                                                            />
                                                        </div>
                                                    </div>
                                                </a>
                                                    <div
                                                        className="d-flex justify-content-between gap-2 align-items-center pt-4 pt-md-8 px-3 px-md-6">
                                                        <div>
                                                            <div
                                                                className="d-flex flex-wrap gap-1 gap-sm-2 align-items-center">
                                                                <a
                                                                    className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                                                    href="#">React Js</a><a
                                                                className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                                                href="#">gsap</a><a
                                                                className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                                                href="#">Web Development</a></div>
                                                            <a className="project-title fs-five fw-semibold n5-color mt-3 mt-md-5 d-block"
                                                               href="portfolio_details.html">Financial
                                                                management</a></div>
                                                        <a className="project-link d-flex align-items-center justify-content-center flex-shrink-0"
                                                           href="portfolio_details.html"><i className="n5-color">
                                                            <svg stroke="currentColor" fill="currentColor"
                                                                 strokeWidth="0"
                                                                 viewBox="0 0 256 256" height="1em" width="1em"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                                                            </svg>
                                                        </i></a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="pt-120 pb-120 br-bottom-n3">
                                <div className="container">
                                    <div>
                                        <div className="section-heading">
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="title-line"></div>
                                                <h2 className="display-four n5-color fw-semibold">Testimonials</h2>
                                            </div>
                                            <p className="fs-seven n4-color mt-2 mt-md-4">See how I&#x27;ve helped
                                                our clients
                                                succeed. IT’s a highly Customizable,creative, modern, visually
                                                stunning and
                                                Bootstrap5 HTML5 Template.</p></div>
                                    </div>
                                    <div className="mt-8 mt-md-15 overflow-x-hidden">
                                        <div className="swiper">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <div
                                                        className="px-3 px-md-6 py-5 py-md-10 bgn2-color box-shadow1 br-left-p1">
                                                        <div className="d-flex gap-1 mb-2 mb-md-3"><i
                                                            className="ph-fill ph-star y1-color fs-six"></i><i
                                                            className="ph-fill ph-star y1-color fs-six"></i><i
                                                            className="ph-fill ph-star y1-color fs-six"></i><i
                                                            className="ph-fill ph-star y1-color fs-six"></i><i
                                                            className="ph-fill ph-star y1-color fs-six"></i></div>
                                                        <p className="n4-color fs-six">I highly recommend Portfolify
                                                            to anyone
                                                            looking for a high-quality and responsive Bootstrap
                                                            theme.</p>
                                                        <div
                                                            className="d-flex gap-3 align-items-center mt-4 mt-md-7">
                                                            <Image
                                                                alt="testimonial"
                                                                loading="lazy"
                                                                width={40}
                                                                height={40}
                                                                decoding="async"
                                                                className="testimonial_img"
                                                                style={{color: 'transparent'}}
                                                                src={buyer1}
                                                            />
                                                            <div><span
                                                                className="fs-eight d-block n5-color">Esther Howard</span><span
                                                                className="fs-nine d-block n5-color">Australia</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div
                                                        className="px-3 px-md-6 py-5 py-md-10 bgn2-color box-shadow1 br-left-p1">
                                                        <div className="d-flex gap-1 mb-2 mb-md-3"><i
                                                            className="ph-fill ph-star y1-color fs-six"></i><i
                                                            className="ph-fill ph-star y1-color fs-six"></i><i
                                                            className="ph-fill ph-star y1-color fs-six"></i><i
                                                            className="ph-fill ph-star y1-color fs-six"></i><i
                                                            className="ph-fill ph-star y1-color fs-six"></i></div>
                                                        <p className="n4-color fs-six">Portfolify is the perfect
                                                            theme for
                                                            businesses that want to create a stylish and functional
                                                            website.</p>
                                                        <div
                                                            className="d-flex gap-3 align-items-center mt-4 mt-md-7">
                                                            import Image from 'next/image';

                                                            <Image
                                                                alt="testimonial"
                                                                src="/images/buyer2.png"
                                                                width={40}
                                                                height={40}
                                                                className="testimonial_img"
                                                                style={{color: 'transparent'}}
                                                                loading="lazy"
                                                                decoding="async"
                                                            />

                                                            <div><span
                                                                className="fs-eight d-block n5-color">Robert Fox</span><span
                                                                className="fs-nine d-block n5-color">Canada</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div
                                                        className="px-3 px-md-6 py-5 py-md-10 bgn2-color box-shadow1 br-left-p1">
                                                        <div className="d-flex gap-1 mb-2 mb-md-3"><i
                                                            className="ph-fill ph-star y1-color fs-six"></i><i
                                                            className="ph-fill ph-star y1-color fs-six"></i><i
                                                            className="ph-fill ph-star y1-color fs-six"></i><i
                                                            className="ph-fill ph-star y1-color fs-six"></i><i
                                                            className="ph-fill ph-star y1-color fs-six"></i></div>
                                                        <p className="n4-color fs-six">Portfolify helped us create a
                                                            stunning and
                                                            clear website that reflects our brand perfectly.</p>
                                                        <div
                                                            className="d-flex gap-3 align-items-center mt-4 mt-md-7">
                                                            <Image
                                                                alt="testimonial"
                                                                loading="lazy"
                                                                width={40}
                                                                height={40}
                                                                decoding="async"
                                                                className="testimonial_img"
                                                                style={{color: 'transparent'}}
                                                                src={buyer1}
                                                            />
                                                            <div><span
                                                                className="fs-eight d-block n5-color">Cameron Williamson</span><span
                                                                className="fs-nine d-block n5-color">China</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div
                                                        className="px-3 px-md-6 py-5 py-md-10 bgn2-color box-shadow1 br-left-p1">
                                                        <div className="d-flex gap-1 mb-2 mb-md-3"><i
                                                            className="ph-fill ph-star y1-color fs-six"></i><i
                                                            className="ph-fill ph-star y1-color fs-six"></i><i
                                                            className="ph-fill ph-star y1-color fs-six"></i><i
                                                            className="ph-fill ph-star y1-color fs-six"></i><i
                                                            className="ph-fill ph-star y1-color fs-six"></i></div>
                                                        <p className="n4-color fs-six">Best Bootstrap template ever:
                                                            easy to
                                                            customize, feature-rich, responsive and meets all our
                                                            needs.</p>
                                                        <div
                                                            className="d-flex gap-3 align-items-center mt-4 mt-md-7">
                                                            <Image
                                                                alt="testimonial"
                                                                loading="lazy"
                                                                width={40}
                                                                height={40}
                                                                decoding="async"
                                                                className="testimonial_img"
                                                                style={{color: 'transparent'}}
                                                                src={buyer1}
                                                            />
                                                            <div><span
                                                                className="fs-eight d-block n5-color">Jenny Wilson</span><span
                                                                className="fs-nine d-block n5-color">USA</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div
                                                        className="px-3 px-md-6 py-5 py-md-10 bgn2-color box-shadow1 br-left-p1">
                                                        <div className="d-flex gap-1 mb-2 mb-md-3"><i
                                                            className="ph-fill ph-star y1-color fs-six"></i><i
                                                            className="ph-fill ph-star y1-color fs-six"></i><i
                                                            className="ph-fill ph-star y1-color fs-six"></i><i
                                                            className="ph-fill ph-star y1-color fs-six"></i><i
                                                            className="ph-fill ph-star y1-color fs-six"></i></div>
                                                        <p className="n4-color fs-six">Portfolify is the perfect
                                                            theme for
                                                            businesses that want to create a stylish and functional
                                                            website.</p>
                                                        <div
                                                            className="d-flex gap-3 align-items-center mt-4 mt-md-7">
                                                            <Image
                                                                alt="testimonial"
                                                                loading="lazy"
                                                                width={40}
                                                                height={40}
                                                                decoding="async"
                                                                className="testimonial_img"
                                                                style={{color: 'transparent'}}
                                                                src={buyer1}
                                                            />
                                                            <div><span
                                                                className="fs-eight d-block n5-color">Robert Fox</span><span
                                                                className="fs-nine d-block n5-color">India</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative mt-15">
                                                <div
                                                    className="swiper-pagination d-flex allign-items-center justify-content-center gap-2"></div>
                                            </div>
                                            <div className="relative mt-15">
                                                <div
                                                    className="swiper-pagination d-flex allign-items-center justify-content-center gap-2"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </main>
                </div>
        </>
    );
}
