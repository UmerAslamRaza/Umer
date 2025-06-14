'use client';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from 'react';

import { TESTIMONIALS } from "@/enums/testimonials";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {withBasePath} from "@/utils/basePath";

export default function Testimonials() {

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
                        <section className="pt-120 pb-120 br-bottom-n3 mt-10 mt-lg-0">
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
                                              href={`${basePath}/portfolio`}>
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

                                <div className="d-flex gap-3 flex-wrap flex-xxl-nowrap justify-content-between align-items-end mb-8 mt-8 mb-md-15">
                                    <div className="section-heading">
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="title-line"></div>
                                            <h2 className="display-four n5-color fw-semibold">Screenshots</h2>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 mt-md-15 overflow-x-hidden">
                                    {TESTIMONIALS.filter(t => t.isImage).map((testimonial, idx) => (
                                        <div
                                            key={idx}
                                            className="px-5 px-md-8 py-3 py-md-5 mb-8 bgn2-color box-shadow1 br-left-p1 position-relative mx-2 mx-md-4"
                                        >
                                            <Image
                                                alt="testimonial-image"
                                                loading="lazy"
                                                width={620}
                                                height={300}
                                                decoding="async"
                                                className="w-100 p-2"
                                                style={{ color: 'transparent' }}
                                                src={withBasePath(testimonial.image)}
                                            />
                                            <div className="d-flex gap-3 align-items-center mt-3 mt-md-5">
                                                <div>
                                                    <span className="fs-eight d-block n5-color">{testimonial?.name}</span>
                                                    <span className="fs-nine d-block n5-color">{testimonial?.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </section>
                    </div>
                </main>
            </div>

        </>

    );

}

