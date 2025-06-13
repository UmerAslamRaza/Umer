'use client';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from 'react';
import userPic from '@/assets/_next/user.jpg';
import laravelIcon from '@/assets/_next/laravel.svg';
import resumeIcon from '@/assets/_next/resume-icon.png';
import reactIcon from '@/assets/_next/react.png';
import vueIcon from '@/assets/_next/vue.png';

import tailwindIcon from '@/assets/_next/tailwind-css.svg';
import bootstrapIcon from '@/assets/_next/bootstrap.svg';
import vuetifyIcon from '@/assets/_next/vuetify.svg';
import javascriptIcon from '@/assets/_next/javascript-js.svg';
import typescriptIcon from '@/assets/_next/typescript.svg';
import jqueryIcon from '@/assets/_next/jquery-plain-wordmark.svg';
import reduxIcon from '@/assets/_next/redux-original.svg';
import vuexIcon from '@/assets/_next/vue-dot-js.svg';
import gitIcon from '@/assets/_next/github.svg';
import postmanIcon from '@/assets/_next/postman.svg';
import firebaseIcon from '@/assets/_next/file-type-firebase.svg';
import miroIcon from '@/assets/_next/miro.svg';
import basecampIcon from '@/assets/_next/basecamp.svg';
import jiraIcon from '@/assets/_next/jira.svg';

import phpIcon from '@/assets/_next/php.png';
import htmlIcon from '@/assets/_next/html.png';
import cssIcon from '@/assets/_next/css.png';

import buyer1 from '@/assets/_next/buyer1.png';
import projects from '@/enums/projects';
import useResponsiveHeight from '@/hooks/useResponsiveHeight';
import ProjectCard from '@/components/ProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination,Navigation } from 'swiper/modules';
import { TESTIMONIALS } from "@/enums/testimonials";

export default function Home() {
    const featuredProjects = projects.filter(project => project.featured);
    const height = useResponsiveHeight();
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
                                        className="d-flex flex-wrap gap-3 gap-md-12 align-items-center justify-content-between">
                                        <div className="section-heading">
                                            <span
                                            className="n5-color fs-five">Hi, I&#x27;M A Full Stack
                                            </span>
                                            <h2 className="typing-text display-one p1-color mt-2 mb-3">
                                                <span>Developer</span>
                                            </h2>
                                            <p className="fs-seven n4-color mt-2 mt-md-4">
                                                I help businesses and individuals turn ideas into fast, functional, and modern web or mobile apps. Whether it's a portfolio site, an e-commerce platform, or a custom dashboard I build solutions that are scalable, user-friendly, and tailored to your needs.
                                                With hands-on experience in both frontend and backend technologies like React, and MongoDB, I ensure smooth performance and a seamless user experience.
                                                <br/>
                                            </p>
                                                <ul className="fs-seven n4-color mt-2 mt-md-4">
                                                    <li>Need a quick MVP?</li>
                                                    <li>Looking to revamp your current site?</li>
                                                    <li>Want a developer who communicates well and meets deadlines?</li>
                                                </ul>
                                                <br/>
                                            <p className="fs-seven n4-color mt-2 mt-md-4">
                                                Let’s talk, I’m currently available for freelance or full-time roles and would love to hear what you're working on. Explore my
                                                <Link className="p1-color" href="/portfolio"> project portfolio </Link>and
                                                <Link className="p1-color" href="/resume"> online resume</Link>.
                                            </p>

                                            <div
                                                className="d-flex flex-wrap align-itmes-center gap-3 gap-md-6 mt-4 mt-md-8">
                                                <Link className="p-btn n11-color bg1-color fw-medium n1-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2"
                                                    href="/portfolio">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                         viewBox="0 0 256 256" height="1em" width="1em"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                                                    </svg>
                                                    View Portfolio</Link>
                                                <Link
                                                className="p-btn n11-color bgn51-color fw-medium n1-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2"
                                                href="/resume">
                                                <Image
                                                    alt="Resume Icon"
                                                    loading="lazy"
                                                    width={24}
                                                    height={25}
                                                    decoding="async"
                                                    style={{color: 'transparent'}}
                                                    src={resumeIcon}
                                                />View Resume</Link>

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
                                            className="display-two fw-semibold p1-color"><span>5</span></h2>
                                            <div className="line"></div>
                                            <span className="n5-color">Years of Experience</span></div>
                                        <div className="d-flex align-items-center gap-2 gap-xl-4"><h2
                                            className="display-two fw-semibold p1-color"><span>80</span></h2>
                                            <div className="line"></div>
                                            <span className="n5-color">More than Projects Completed</span></div>
                                        <div className="d-flex align-items-center gap-2 gap-xl-4"><h2
                                            className="display-two fw-semibold p1-color d-flex gap-1"><span>60</span>
                                        </h2>
                                            <div className="line"></div>
                                            <span className="n5-color">More than Clients worked worldwide</span></div>
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
                                                <p className="fs-seven n4-color mt-2 mt-md-4">I’m a Full Stack Developer with 5 years of experience creating web and mobile apps that are not just functional but also secure and easy to scale. I’ve spent most of my time working with Laravel and Vue.js, and more recently with React.js and React Native. I enjoy building clean APIs, managing databases like MySQL and MongoDB, and connecting apps with third-party tools. I’m passionate about solving real problems through code and delivering work that makes a difference for clients around the world. Want to
                                                    find out
                                                    more about my experience? Check out my <Link className="p1-color"
                                                                                              href="/resume">online
                                                        resume</Link> and <Link className="p1-color" href="/portfolio">project
                                                        portfolio</Link>.</p></div>
                                            <Link className="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 h-100 text-nowrap"
                                               href="/contact">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                     viewBox="0 0 256 256" height="1em" width="1em"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                                                </svg>
                                                Let's talk</Link></div>
                                    </div>
                                    <div className="row g-3 g-md-6 pt-60">
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
                                                    <p className="fs-seven n4-color">
                                                        Experienced in creating responsive, Converting figma mockups to pixel-perfect UIs using HTML5, CSS3, Sass, and Bootstrap.
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                            <div>
                                                <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div>
                                                            <Image
                                                                alt="tailwind"
                                                                loading="lazy"
                                                                width={28}
                                                                height={28}
                                                                decoding="async"
                                                                className="service-icon"
                                                                style={{color: 'transparent'}}
                                                                src={tailwindIcon}
                                                            />
                                                        </div>
                                                        <div>
                                                            <Image
                                                                alt="bootstrap"
                                                                loading="lazy"
                                                                width={28}
                                                                height={28}
                                                                decoding="async"
                                                                className="service-icon"
                                                                style={{color: 'transparent'}}
                                                                src={bootstrapIcon}
                                                            />
                                                        </div>
                                                        <div>
                                                            <Image
                                                                alt="vuetify"
                                                                loading="lazy"
                                                                width={28}
                                                                height={28}
                                                                decoding="async"
                                                                className="service-icon"
                                                                style={{color: 'transparent'}}
                                                                src={vuetifyIcon}
                                                            />
                                                        </div>
                                                    </div>
                                                    <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">Tailwind css, Bootstrap &amp;
                                                        Vuetify</h4>
                                                    <p className="fs-seven n4-color">
                                                        Skilled in modern UI frameworks like Tailwind CSS, Bootstrap 5, and Vuetify for sleek, scalable designs.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                            <div>
                                                <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div>
                                                            <Image
                                                                alt="jquery"
                                                                loading="lazy"
                                                                width={28}
                                                                height={28}
                                                                decoding="async"
                                                                className="service-icon"
                                                                style={{color: 'transparent'}}
                                                                src={jqueryIcon}
                                                            />
                                                        </div>
                                                        <div>
                                                            <Image
                                                                alt="javascript"
                                                                loading="lazy"
                                                                width={28}
                                                                height={28}
                                                                decoding="async"
                                                                className="service-icon"
                                                                style={{color: 'transparent'}}
                                                                src={javascriptIcon}
                                                            />
                                                        </div>
                                                        <div>
                                                            <Image
                                                                alt="typescript"
                                                                loading="lazy"
                                                                width={28}
                                                                height={28}
                                                                decoding="async"
                                                                className="service-icon"
                                                                style={{color: 'transparent'}}
                                                                src={typescriptIcon}
                                                            />
                                                        </div>
                                                    </div>
                                                    <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">Jquery, Javascript &amp;
                                                        Typescript</h4>
                                                    <p className="fs-seven n4-color">
                                                        Proficient in interactive web development using JavaScript, TypeScript, and legacy support with jQuery.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                            <div>
                                                <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div>
                                                            <Image
                                                                alt="vue"
                                                                loading="lazy"
                                                                width={28}
                                                                height={28}
                                                                decoding="async"
                                                                className="service-icon"
                                                                style={{color: 'transparent'}}
                                                                src={vueIcon}
                                                            />
                                                        </div>
                                                        <div>
                                                            <Image
                                                                alt="react"
                                                                loading="lazy"
                                                                width={28}
                                                                height={28}
                                                                decoding="async"
                                                                className="service-icon"
                                                                style={{color: 'transparent'}}
                                                                src={reactIcon}
                                                            />
                                                        </div>
                                                    </div>
                                                    <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">Vue, React &amp;
                                                        React Native</h4>
                                                    <p className="fs-seven n4-color">
                                                        Developed dynamic web and mobile apps using Vue.js, React.js, and React Native with reusable component design and clean structure.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                            <div>
                                                <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div>
                                                            <Image
                                                                alt="redux"
                                                                loading="lazy"
                                                                width={28}
                                                                height={28}
                                                                decoding="async"
                                                                className="service-icon"
                                                                style={{color: 'transparent'}}
                                                                src={reduxIcon}
                                                            />
                                                        </div>
                                                        <div>
                                                            <Image
                                                                alt="vuex"
                                                                loading="lazy"
                                                                width={28}
                                                                height={28}
                                                                decoding="async"
                                                                className="service-icon"
                                                                style={{color: 'transparent'}}
                                                                src={vuexIcon}
                                                            />
                                                        </div>
                                                    </div>
                                                    <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">Redux, Context API &amp;
                                                        Vuex</h4>
                                                    <p className="fs-seven n4-color">
                                                        Proficient in managing complex application states using Redux for React and Vuex for Vue.js. Experienced with Context API for lightweight state management, ensuring scalability, and optimized component performance.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                            <div>
                                                <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div>
                                                            <Image
                                                                alt="Laravel"
                                                                loading="lazy"
                                                                width={28}
                                                                height={28}
                                                                decoding="async"
                                                                className="service-icon"
                                                                style={{color: 'transparent'}}
                                                                src={laravelIcon}
                                                            />
                                                        </div>
                                                        <div>
                                                            <Image
                                                                alt="php"
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
                                                    <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">PHP
                                                        &amp; Laravel</h4>
                                                    <p className="fs-seven n4-color">
                                                        Expert in backend development with PHP and Laravel, focusing on building RESTful APIs, authentication systems, and scalable web applications. Familiar with Eloquent ORM, queues, event broadcasting, and Laravel Reverb for real-time features.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                            <div>
                                                <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div>
                                                            <Image
                                                                alt="git"
                                                                loading="lazy"
                                                                width={28}
                                                                height={28}
                                                                decoding="async"
                                                                className="service-icon"
                                                                style={{color: 'transparent'}}
                                                                src={gitIcon}
                                                            />
                                                        </div>
                                                        <div>
                                                            <Image
                                                                alt="postman"
                                                                loading="lazy"
                                                                width={28}
                                                                height={28}
                                                                decoding="async"
                                                                className="service-icon"
                                                                style={{color: 'transparent'}}
                                                                src={postmanIcon}
                                                            />
                                                        </div>
                                                        <div>
                                                            <Image
                                                                alt="firebase"
                                                                loading="lazy"
                                                                width={28}
                                                                height={28}
                                                                decoding="async"
                                                                className="service-icon"
                                                                style={{color: 'transparent'}}
                                                                src={firebaseIcon}
                                                            />
                                                        </div>
                                                    </div>
                                                    <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">Git,
                                                        Postman &amp; Firebase</h4>
                                                    <p className="fs-seven n4-color">
                                                        Experienced in version control using Git for collaborative development. Skilled in API testing and documentation with Postman. Hands-on with Firebase for authentication, Firestore, push notifications, and real-time data handling in mobile apps.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                            <div>
                                                <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <div>
                                                            <Image
                                                                alt="miro"
                                                                loading="lazy"
                                                                width={28}
                                                                height={28}
                                                                decoding="async"
                                                                className="service-icon"
                                                                style={{color: 'transparent'}}
                                                                src={miroIcon}
                                                            />
                                                        </div>
                                                        <div>
                                                            <Image
                                                                alt="basecamp"
                                                                loading="lazy"
                                                                width={28}
                                                                height={28}
                                                                decoding="async"
                                                                className="service-icon"
                                                                style={{color: 'transparent'}}
                                                                src={basecampIcon}
                                                            />
                                                        </div>
                                                        <div>
                                                            <Image
                                                                alt="jira"
                                                                loading="lazy"
                                                                width={28}
                                                                height={28}
                                                                decoding="async"
                                                                className="service-icon"
                                                                style={{color: 'transparent'}}
                                                                src={jiraIcon}
                                                            />
                                                        </div>
                                                    </div>
                                                    <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">Miro,Basecamp &amp;
                                                        Jira</h4>
                                                    <p className="fs-seven n4-color">
                                                        Familiar with agile tools like Miro for brainstorming and product design, Basecamp for team collaboration, and Jira for sprint planning, task tracking, and effective project management in cross-functional teams and google meet for team meetings.
                                                    </p>
                                                </div>
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
                                            className="display-four n11-color fw-semibold mb-2 mb-md-4">Your Project Deserves the Right Developer</h3>
                                            <p className="fs-seven n11-color">Whether it’s freelance or full-time, I’m ready to contribute. Let’s make your next product a success.</p></div>
                                        <Link className="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 h-100"
                                           href="/contact">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                 viewBox="0 0 256 256" height="1em" width="1em"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                                            </svg>
                                            Let’s get in touch</Link></div>
                                </div>
                            </section>
                            <section className="pt-120 pb-120 br-bottom-n3">
                                <div className="container">
                                    <div>
                                        <div className="d-flex gap-3 flex-wrap flex-xxl-nowrap justify-content-between align-items-end mb-8 mb-md-15">
                                            <div className="section-heading">
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="title-line"></div>
                                                    <h2 className="display-four n5-color fw-semibold">Featured
                                                        Projects
                                                    </h2>
                                                </div>
                                                <p className="fs-seven n4-color mt-2 mt-md-4">Every project you see here was crafted with care, built to solve real-world challenges, and designed to leave a lasting impression. I treat each line of code as a step toward helping clients grow and innovate.</p></div>
                                            <Link className="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 h-100 text-nowrap"
                                               href="/portfolio">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                     viewBox="0 0 256 256" height="1em" width="1em"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                                                </svg>
                                                View Portfolio
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row g-6 g-md-10 ">
                                        {featuredProjects.map(project => (
                                            <ProjectCard key={project.id} project={project} height={height} />
                                        ))}
                                    </div>
                                </div>
                            </section>
                            <section className="pt-120 pb-120 br-bottom-n3">
                                <div className="container">
                                    <div>
                                    <div className="d-flex gap-3 flex-wrap flex-xxl-nowrap justify-content-between align-items-end mb-8 mb-md-15">
                                    <div className="section-heading">
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="title-line"></div>
                                            <h2 className="display-four n5-color fw-semibold">Testimonials</h2>
                                        </div>
                                        <p className="fs-seven n4-color mt-2 mt-md-4">Hear What My Clients Have to Say</p>

                                    </div>
                                    <Link className="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 h-100 text-nowrap"
                                          href="/testimonials">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                             viewBox="0 0 256 256" height="1em" width="1em"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                                        </svg>
                                        View Screenshots
                                    </Link>
                                    </div>
                                    </div>

                                    <div className="mt-8 mt-md-15 overflow-x-hidden">
                                        <Swiper
                                            modules={[Pagination, Navigation, Autoplay]}
                                            navigation
                                            pagination={{ clickable: true }}
                                            spaceBetween={30}
                                            slidesPerView={1}
                                            autoplay={{
                                                delay: 1000,
                                                disableOnInteraction: true,
                                            }}
                                        >
                                            {TESTIMONIALS.map((testimonial, idx) => (
                                                <SwiperSlide key={idx}>
                                                    <div className="px-5 px-md-10 py-6 py-md-12 bgn2-color box-shadow1 br-left-p1 position-relative mx-2 mx-md-4">

                                                    <p className="n4-color fs-six">{testimonial?.text}</p>
                                                        <div className="d-flex gap-3 align-items-center mt-4 mt-md-7">
                                                            <div>
                                                                <span className="fs-eight d-block n5-color">{testimonial?.name}</span>
                                                                <span className="fs-nine d-block n5-color">{testimonial?.location}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>

                                </div>
                            </section>
                        </div>
                    </main>
                </div>
            <style global jsx>{`
  .project-thumb {
    height: 220px !important;
    display: block;
  }

  @media (min-width: 576px) {
    .project-thumb {
      height: 300px !important;
    }
  }

  @media (min-width: 768px) {
    .project-thumb {
      height: 360px !important;
    }
  }

  @media (min-width: 992px) {
    .project-thumb {
      height: 417px !important;
    }
  }

  .w-100 {
    width: 100% !important;
    object-fit: cover !important;
  }
`}</style>
        </>

    );

}

