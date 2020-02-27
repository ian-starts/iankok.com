import React, {useState, useEffect} from 'react';
import Link from "next/link";
import LinkedIn from '../svgs/linkedin-in-brands.svg'
import Envelope from '../svgs/envelope-solid.svg'
import Twitter from '../svgs/twitter-brands.svg'

export default (props) => {
    return (
        <div className="flex">
            <Link href={"/"}>
                <div className="flex w-0 lg:w-40 xl:w-40"/>
            </Link>
            <div className="flex-1 h-screen bg-black overflow-auto">
                <div className="max-w-2xl py-10 px-8 md:px-12 lg:px-12 xl:px-12">
                    <div className="flex flex-row">
                        <h1 className="text-white font-bold text-6xl md:text-7xl lg:text-8xl xl:text-8xl">CONTACT</h1>
                    </div>
                    <div className="mx-3">
                        <h2 className="text-white pt-10 font-semibold leading-tight mt-20 text-2xl md:text-3xl lg:text-4xl xl:text-4xl">
                            Get in touch!
                        </h2>
                        <ul className="flex flex-row flex-wrap mt-3 ml-10">
                            <li className={"mx-2"}>
                                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/starts_ian">
                                    <div className="p-3 align-middle bg-white border-4 w-16 h-16" style={{borderRadius: '100%', borderColor: '#9600ff'}}>
                                        <Twitter/>
                                    </div>
                                </a>
                            </li>
                            <li className={"mx-2"}>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/yoni-kok-b0885813a/">
                                    <div className="p-4 align-middle bg-white border-4 w-16 h-16" style={{borderRadius: '100%', borderColor: '#9600ff'}}>
                                        <LinkedIn/>
                                    </div>
                                </a>
                            </li>
                            <li className={"mx-2"}>
                                <a target="_blank" rel="noopener noreferrer" href="mailto:hello@iankok.com">
                                    <div className="p-3 align-middle bg-white border-4 w-16 h-16" style={{borderRadius: '100%', borderColor: '#9600ff'}}>
                                        <Envelope/>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}