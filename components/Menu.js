import React, {useState, useEffect} from 'react';
import Link from "next/link";

export default function (props) {

    return(
        <div className="absolute bottom-0 right-0">
            <div className="flex flex-col m-10 p-5" style={{backgroundColor: '#ffffff1c', mixBlendMode: 'difference'}}>
                <Link href={"/about"}><a className="text-white hover:line-through font-sans underline text-2xl">about</a></Link>
                <Link href={"/projects"}><a className="text-white hover:line-through font-sans underline text-2xl">projects</a></Link>
                <a className="text-white hover:line-through font-sans underline text-2xl" href="https://blog.iankok.com">blog</a>
            </div>
        </div>
    )
}