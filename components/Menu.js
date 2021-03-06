import React, {useState, useEffect} from 'react';
import Link from "next/link";

export default function (props) {

    return(
        <div className="absolute bottom-0 right-0">
            <div className="flex flex-col m-10 p-5" style={{backgroundColor: '#ffffff1c', mixBlendMode: 'difference'}}>
                <Link href={"/about"}><a className="text-white font-sans text-lg lg:text-2xl xl:text-2xl">about</a></Link>
                <Link href={"/projects"}><a className="text-white font-sans text-lg lg:text-2xl xl:text-2xl">projects</a></Link>
                <a className="text-white font-sans text-lg lg:text-2xl xl:text-2xl" href="/blog">blog</a>
                <Link href={"/contact"}><a className="text-white font-sans text-lg lg:text-2xl xl:text-2xl">get in touch</a></Link>
            </div>
        </div>
    )
}