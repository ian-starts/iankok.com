import React, {useState, useEffect} from 'react';
import Link from "next/link";

export default (props) => {
    return (
        <div className="flex">
            <Link href={"/"}>
                <div className="flex w-0 lg:w-40 xl:w-40"/>
            </Link>
            <div className="flex-1 h-screen bg-black overflow-auto">
                <div className="max-w-2xl py-10 px-8 md:px-12 lg:px-12 xl:px-12">
                    <div className="flex flex-row">
                        <h1 className="text-white font-bold text-6xl md:text-7xl lg:text-8xl xl:text-8xl">ABOUT</h1>
                        <div className="px-10 self-center">
                            <img src="/images/headshot-b-w-cirlce.jpg" alt="Smiley face" className="rounded-full" height="100" width="100"/>
                        </div>
                    </div>
                    <h2 className="text-white pt-10 font-semibold leading-tight mt-20 text-2xl md:text-3xl lg:text-4xl xl:text-4xl">
                        10% serious, 90% unfinished side projects
                    </h2>
                    <p className="text-white py-10 text-l">
                        I guess the most important thing that I want this page to say is that I am not one thing.
                        I heard <a target="_blank" rel="noopener noreferrer" href={"https://twitter.com/naval"}>Naval
                        Ravikant</a> say
                        that humans aren't meant to focus their entire lives on doing one thing. I wholeheartedly agree.
                        We are an incredibly versatile species, and it would be a shame to waste that versatility.
                    </p>
                    <p className="text-white pb-10 text-l">
                        I love reading, sailing, surfing, being a digital
                        bromad, <a target="_blank" rel="noopener noreferrer" href={"https://herres.haus"}>throwing
                        parties</a>, worrying about political
                        malpractice, and watching <a target="_blank" rel="noopener noreferrer"
                                                     href={"https://www.youtube.com/watch?v=MBRqu0YOH14"}>kurzgesagt</a>.
                    </p>
                    <p className="text-white pb-10 text-l">
                        I'm currently working a lot with React Native (which I think is 70% the best thing ever, 30% the
                        worst thing ever). I've worked a lot with .NET core in tandem with postgres or mongo. Laravel is
                        my former lover, but after discovering the power of C# in .NET core I was quickly cured
                        of my love for PHP. React is my favorite frontend framework so far, however the new Vue
                        composition API looks like it could steal React's thunder.
                    </p>
                    <p className="text-white pb-10 text-l">
                        My most pleasing development experience was probably deploying a kubernetes cluster on rancher.
                        That piece of software is so magnificent I could honestly cry. If you ever want to chat about it
                        I'm always available.
                    </p>
                    <p className="text-white pb-10 text-l">
                        My latest obsession would be Cognitive Behavioural Therapy. It is the most concrete
                        translation of stoicism I've ever come across, and I'm working with my close friend Pim on
                        bringing the therapy to more people. Feeling good should be for everyone. Hit me up
                        if you're
                        interested!
                    </p>
                    <p className="text-white pb-10 text-l">
                        Live long and prosper, <br/>Ian
                    </p>
                </div>
            </div>
        </div>
    )
}