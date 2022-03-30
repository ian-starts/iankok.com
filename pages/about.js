import React, {useState, useEffect} from 'react';
import Link from "next/link";
import styles from './css/about.module.css'
import Layout from "../components/Layout";

export default (props) => {
    return (
        <Layout title={"Ian Kok - About"}>
            <div className="flex">
                <Link href={"/"}>
                    <div className="flex w-0 lg:w-40 xl:w-40"/>
                </Link>
                <div className="flex-1 h-screen bg-black overflow-auto">
                    <div className="max-w-2xl py-10 px-8 md:px-12 lg:px-12 xl:px-12">
                        <div className="flex flex-row">
                            <h1 className="text-white font-bold text-6xl md:text-7xl lg:text-8xl xl:text-8xl">ABOUT</h1>
                            <div className="px-10 self-center">
                                <img src="/images/headshot-b-w-cirlce.jpg" alt="Smiley face" className="rounded-full"
                                     height="100" width="100"/>
                            </div>
                        </div>
                        <h2 className="text-white pt-10 font-semibold leading-tight mt-20 text-2xl md:text-3xl lg:text-4xl xl:text-4xl">
                            Pitter Patter...
                        </h2>
                        <p className="text-white py-10 text-l">
                            I love reading, sailing, surfing, being a digital
                            bromad, <a className="link" target="_blank" rel="noopener noreferrer"
                                       href={"https://herres.haus"}>standing behind the decks</a>, worrying about
                            political
                            malpractice, and watching <a className="link" target="_blank" rel="noopener noreferrer"
                                                         href={"https://www.youtube.com/watch?v=MBRqu0YOH14"}>kurzgesagt</a>.
                        </p>
                        <p className="text-white pb-10 text-l">I've worked a lot with .NET, and it's been love at first sight.
                            The ability to write code that's rigid enough that autocomplete is faster than doc-reading,
                            while maintaining the flexibility to write versatile and highly reusable code is such a pleasure.
                            It also doesn't hurt that's there is a pretty defined standard as to what <i>good</i> code is and
                            being able to write it as much as I can.
                        </p>
                        <p className="text-white pb-10 text-l">
                            Furthermore I'm an expert in Docker, software architecture, Event Driven Design,
                            Domain Driven Design and Test Driven Design. Would love to start a crusade against code rot
                            and an abstractionist at heart.
                        </p>
                        <p className="text-white pb-10 text-l">
                            In the future I would really like to setup an in person software school for the web. I've
                            experienced first hand what good and bad code can do to a company. Pair that with the
                            current dichotomy between the market need for highly skilled developers, and universities
                            (rightfully so) not filling that gap; I feel I could provide a lot of real value there.
                        </p>
                        <p className="text-white pb-10 text-l">
                            Live long and prosper, <br/>Ian
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}