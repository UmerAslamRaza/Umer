'use client';
import Head from "next/head";


import React from "react";
import Image from "next/image";

import project1 from '@/assets/_next/project1.png';
import project2 from '@/assets/_next/project2.png';
import project3 from '@/assets/_next/project3.png';
import project4 from '@/assets/_next/project4.png';
import Link from "next/link";

export default function Portfolio() {

    return (

        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Umer Portfolio</title>
                <link rel="icon" href="favicon.ico" type="image/x-icon" sizes="11x15"/>
                <meta name="next-size-adjust"/>
            </Head>

                <div className="main-content w-100">
                        <section className="pt-120 pb-120 mt-10 mt-lg-0">
                            <div>
                                <div className="pb-60 br-bottom-n3">
                                    <div className="page-heading"><h3
                                        className="page-title n5-color fs-onefw-semibold n5-color mb-2 mb-md-3 text-center">A
                                        collection of my best projects</h3>
                                        <p className="fs-seven n5-color mb-4 mb-md-8 text-center">With many years in web
                                            development, I acquired extensive experience working on projects across
                                            multiple
                                            industries and technologies. Let me show you my best creations.</p><a
                                            className="w-max p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 mx-auto"
                                            href="contact.html">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                 viewBox="0 0 256 256" height="1em" width="1em"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z"></path>
                                            </svg>
                                            Hire Me</a></div>
                                </div>
                            </div>
                            <div className="container mt-8 mt-md-15">
                                <div>
                                    <button type="button" aria-hidden="true"
                                            style={{
                                                position: 'fixed',
                                                top: '1px',
                                                left: '1px',
                                                width: '1px',
                                                height: '0',
                                                padding: '0',
                                                margin: '-1px',
                                                overflow: 'hidden',
                                                clip: 'rect(0, 0, 0, 0)',
                                                whiteSpace: 'nowrap',
                                                borderWidth: '0',
                                            }}
                                    ></button>
                                    <div>
                                        <div
                                            className="d-flex flex-wrap gap-4 gap-sm-5 gap-md-7 align-items-center justify-content-center"
                                            role="tablist" aria-orientation="horizontal">
                                            <button className="tab-active fs-seven fw-medium n3-color"
                                                    id="headlessui-tabs-tab-:R5l6fnkv6ja:" role="tab"
                                                    aria-selected="true"
                                                    tabIndex="0" data-headlessui-state="selected" data-selected="">All
                                            </button>
                                            <button className="fs-seven fw-medium n3-color"
                                                    id="headlessui-tabs-tab-:R9l6fnkv6ja:"
                                                    role="tab" aria-selected="false" tabIndex="-1"
                                                    data-headlessui-state="">Web
                                                App
                                            </button>
                                            <button className="fs-seven fw-medium n3-color"
                                                    id="headlessui-tabs-tab-:Rdl6fnkv6ja:"
                                                    role="tab" aria-selected="false" tabIndex="-1"
                                                    data-headlessui-state="">
                                                Mobile App
                                            </button>
                                            <button className="fs-seven fw-medium n3-color"
                                                    id="headlessui-tabs-tab-:Rhl6fnkv6ja:"
                                                    role="tab" aria-selected="false" tabIndex="-1"
                                                    data-headlessui-state="">
                                                Frontend
                                            </button>
                                            <button className="fs-seven fw-medium n3-color"
                                                    id="headlessui-tabs-tab-:Rll6fnkv6ja:"
                                                    role="tab" aria-selected="false" tabIndex="-1"
                                                    data-headlessui-state="">
                                                Backend
                                            </button>
                                        </div>
                                        <div className="mt-5 mt-md-10">
                                            <div id="headlessui-tabs-panel-:R6l6fnkv6ja:" role="tabpanel" tabIndex="0"
                                                 data-headlessui-state="selected" data-selected="">
                                                <div className="row g-5 g-md-10 mt-8 mt-md-15">
                                                    <div className="col-xl-6">
                                                        <div 
                                                        >
                                                            <div className="project-card"><a className="thumb d-block"
                                                                                             href="portfolio_details.html">
                                                                <div className="post-thumb">
                                                                    <div className="post-thumb-inner"><Image
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
                                                                    <div className="post-thumb-inner"><Image
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
                                                                            <a className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                                                               href="#">React Js</a><a
                                                                            className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                                                            href="#">gsap</a><a
                                                                            className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                                                            href="#">Web Development</a></div>
                                                                        <Link className="project-title fs-five fw-semibold n5-color mt-3 mt-md-5 d-block"
                                                                           href="/portfolioDetail">Crypto Website
                                                                            Development for DeFi X</Link></div>
                                                                    <Link className="project-link d-flex align-items-center justify-content-center flex-shrink-0"
                                                                       href="/portfolioDetail"><i
                                                                        className="n5-color">
                                                                        <svg stroke="currentColor" fill="currentColor"
                                                                             strokeWidth="0" viewBox="0 0 256 256"
                                                                             height="1em"
                                                                             width="1em"
                                                                             xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                                                                        </svg>
                                                                    </i></Link></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <div
                                                        >
                                                            <div className="project-card"><a className="thumb d-block"
                                                                                             href="portfolio_details.html">
                                                                <div className="post-thumb">
                                                                    <div className="post-thumb-inner"> <Image
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
                                                                    <div className="post-thumb-inner"> <Image
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
                                                                            <a className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                                                               href="#">React Js</a><a
                                                                            className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                                                            href="#">gsap</a><a
                                                                            className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                                                            href="#">Web Development</a></div>
                                                                        <a className="project-title fs-five fw-semibold n5-color mt-3 mt-md-5 d-block"
                                                                           href="portfolio_details.html">Salesforce CRM
                                                                            -
                                                                            Invoice Management </a></div>
                                                                    <a className="project-link d-flex align-items-center justify-content-center flex-shrink-0"
                                                                       href="portfolio_details.html"><i
                                                                        className="n5-color">
                                                                        <svg stroke="currentColor" fill="currentColor"
                                                                             strokeWidth="0" viewBox="0 0 256 256"
                                                                             height="1em"
                                                                             width="1em"
                                                                             xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                                                                        </svg>
                                                                    </i></a></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <div
                                                        >
                                                            <div className="project-card"><a className="thumb d-block"
                                                                                             href="portfolio_details.html">
                                                                <div className="post-thumb">
                                                                    <div className="post-thumb-inner"><Image
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
                                                                    <div className="post-thumb-inner"><Image
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
                                                                            <a className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                                                               href="#">React Js</a><a
                                                                            className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                                                            href="#">gsap</a><a
                                                                            className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                                                            href="#">Web Development</a></div>
                                                                        <a className="project-title fs-five fw-semibold n5-color mt-3 mt-md-5 d-block"
                                                                           href="portfolio_details.html">Car Rental
                                                                            App</a>
                                                                    </div>
                                                                    <a className="project-link d-flex align-items-center justify-content-center flex-shrink-0"
                                                                       href="portfolio_details.html"><i
                                                                        className="n5-color">
                                                                        <svg stroke="currentColor" fill="currentColor"
                                                                             strokeWidth="0" viewBox="0 0 256 256"
                                                                             height="1em"
                                                                             width="1em"
                                                                             xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                                                                        </svg>
                                                                    </i></a></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <div
                                                        >
                                                            <div className="project-card"><a className="thumb d-block"
                                                                                             href="portfolio_details.html">
                                                                <div className="post-thumb">
                                                                    <div className="post-thumb-inner"><Image
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
                                                                    <div className="post-thumb-inner"><Image
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
                                                                            <a className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                                                               href="#">React Js</a><a
                                                                            className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                                                            href="#">gsap</a><a
                                                                            className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                                                            href="#">Web Development</a></div>
                                                                        <a className="project-title fs-five fw-semibold n5-color mt-3 mt-md-5 d-block"
                                                                           href="portfolio_details.html">Financial
                                                                            management</a></div>
                                                                    <a className="project-link d-flex align-items-center justify-content-center flex-shrink-0"
                                                                       href="portfolio_details.html"><i
                                                                        className="n5-color">
                                                                        <svg stroke="currentColor" fill="currentColor"
                                                                             strokeWidth="0" viewBox="0 0 256 256"
                                                                             height="1em"
                                                                             width="1em"
                                                                             xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                                                                        </svg>
                                                                    </i></a></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <div
                                                        >
                                                            <div className="project-card"><a className="thumb d-block"
                                                                                             href="portfolio_details.html">
                                                                <div className="post-thumb">
                                                                    <div className="post-thumb-inner"><Image
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
                                                                    <div className="post-thumb-inner"><Image
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
                                                                            <a className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                                                               href="#">React Js</a><a
                                                                            className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                                                            href="#">gsap</a><a
                                                                            className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                                                            href="#">Web Development</a></div>
                                                                        <Link className="project-title fs-five fw-semibold n5-color mt-3 mt-md-5 d-block"
                                                                           href="/portfolioDetail">Crypto Website
                                                                            Development for DeFi X</Link></div>
                                                                    <Link className="project-link d-flex align-items-center justify-content-center flex-shrink-0"
                                                                       href="/portfolioDetail"><i
                                                                        className="n5-color">
                                                                        <svg stroke="currentColor" fill="currentColor"
                                                                             strokeWidth="0" viewBox="0 0 256 256"
                                                                             height="1em"
                                                                             width="1em"
                                                                             xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                                                                        </svg>
                                                                    </i></Link></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <div
                                                        >
                                                            <div className="project-card"><a className="thumb d-block"
                                                                                             href="portfolio_details.html">
                                                                <div className="post-thumb">
                                                                    <div className="post-thumb-inner"> <Image
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
                                                                    <div className="post-thumb-inner"> <Image
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
                                                                            <a className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                                                               href="#">React Js</a><a
                                                                            className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                                                            href="#">gsap</a><a
                                                                            className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                                                            href="#">Web Development</a></div>
                                                                        <a className="project-title fs-five fw-semibold n5-color mt-3 mt-md-5 d-block"
                                                                           href="portfolio_details.html">Salesforce CRM
                                                                            -
                                                                            Invoice Management </a></div>
                                                                    <a className="project-link d-flex align-items-center justify-content-center flex-shrink-0"
                                                                       href="portfolio_details.html"><i
                                                                        className="n5-color">
                                                                        <svg stroke="currentColor" fill="currentColor"
                                                                             strokeWidth="0" viewBox="0 0 256 256"
                                                                             height="1em"
                                                                             width="1em"
                                                                             xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                                                                        </svg>
                                                                    </i></a></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <div
                                                        >
                                                            <div className="project-card"><a className="thumb d-block"
                                                                                             href="portfolio_details.html">
                                                                <div className="post-thumb">
                                                                    <div className="post-thumb-inner"><Image
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
                                                                    <div className="post-thumb-inner"><Image
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
                                                                            <a className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                                                               href="#">React Js</a><a
                                                                            className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                                                            href="#">gsap</a><a
                                                                            className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                                                            href="#">Web Development</a></div>
                                                                        <a className="project-title fs-five fw-semibold n5-color mt-3 mt-md-5 d-block"
                                                                           href="portfolio_details.html">Car Rental
                                                                            App</a>
                                                                    </div>
                                                                    <a className="project-link d-flex align-items-center justify-content-center flex-shrink-0"
                                                                       href="portfolio_details.html"><i
                                                                        className="n5-color">
                                                                        <svg stroke="currentColor" fill="currentColor"
                                                                             strokeWidth="0" viewBox="0 0 256 256"
                                                                             height="1em"
                                                                             width="1em"
                                                                             xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                                                                        </svg>
                                                                    </i></a></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <div
                                                        >
                                                            <div className="project-card"><a className="thumb d-block"
                                                                                             href="portfolio_details.html">
                                                                <div className="post-thumb">
                                                                    <div className="post-thumb-inner"><Image
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
                                                                    <div className="post-thumb-inner"><Image
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
                                                                            <a className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                                                               href="#">React Js</a><a
                                                                            className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                                                            href="#">gsap</a><a
                                                                            className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                                                            href="#">Web Development</a></div>
                                                                        <a className="project-title fs-five fw-semibold n5-color mt-3 mt-md-5 d-block"
                                                                           href="portfolio_details.html">Financial
                                                                            management</a></div>
                                                                    <a className="project-link d-flex align-items-center justify-content-center flex-shrink-0"
                                                                       href="portfolio_details.html"><i
                                                                        className="n5-color">
                                                                        <svg stroke="currentColor" fill="currentColor"
                                                                             strokeWidth="0" viewBox="0 0 256 256"
                                                                             height="1em"
                                                                             width="1em"
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
                                            <span aria-hidden="true" id="headlessui-tabs-panel-:Ral6fnkv6ja:"
                                                  role="tabpanel"
                                                  tabIndex="-1"
                                                  style={{
                                                      position: 'fixed',
                                                      top: '1px',
                                                      left: '1px',
                                                      width: '1px',
                                                      height: '0',
                                                      padding: '0',
                                                      margin: '-1px',
                                                      overflow: 'hidden',
                                                      clip: 'rect(0, 0, 0, 0)',
                                                      whiteSpace: 'nowrap',
                                                      borderWidth: '0',
                                                  }}
                                            ></span><span
                                            aria-hidden="true" id="headlessui-tabs-panel-:Rel6fnkv6ja:" role="tabpanel"
                                            tabIndex="-1"
                                            style={{
                                                position: 'fixed',
                                                top: '1px',
                                                left: '1px',
                                                width: '1px',
                                                height: '0',
                                                padding: '0',
                                                margin: '-1px',
                                                overflow: 'hidden',
                                                clip: 'rect(0, 0, 0, 0)',
                                                whiteSpace: 'nowrap',
                                                borderWidth: '0',
                                            }}
                                        ></span><span
                                            aria-hidden="true" id="headlessui-tabs-panel-:Ril6fnkv6ja:" role="tabpanel"
                                            tabIndex="-1"
                                            style={{
                                                position: 'fixed',
                                                top: '1px',
                                                left: '1px',
                                                width: '1px',
                                                height: '0',
                                                padding: '0',
                                                margin: '-1px',
                                                overflow: 'hidden',
                                                clip: 'rect(0, 0, 0, 0)',
                                                whiteSpace: 'nowrap',
                                                borderWidth: '0',
                                            }}
                                        ></span><span
                                            aria-hidden="true" id="headlessui-tabs-panel-:Rml6fnkv6ja:" role="tabpanel"
                                            tabIndex="-1"
                                            style={{
                                                position: 'fixed',
                                                top: '1px',
                                                left: '1px',
                                                width: '1px',
                                                height: '0',
                                                padding: '0',
                                                margin: '-1px',
                                                overflow: 'hidden',
                                                clip: 'rect(0, 0, 0, 0)',
                                                whiteSpace: 'nowrap',
                                                borderWidth: '0',
                                            }}
                                        ></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
        </>
    );
}
