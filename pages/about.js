import React, {useState, useEffect} from 'react';

export default (props) => {
    return (
        <div className="ml-0 lg:ml-40 xl:ml-40 flex-1 bg-black">
            <div className="h-screen overflow-auto">
                <div className="max-w-2xl pb-10">
                    <div className="flex flex-row p-10">
                        <h1 className="text-white font-bold text-6xl md:text-7xl lg:text-8xl xl:text-8xl">ABOUT</h1>
                        <div className="px-10 self-center">
                            <img src="/images/headshot-b-w-cirlce.png" alt="Smiley face" height="100" width="100"/>
                        </div>
                    </div>
                    <h2 className="text-white pt-10 px-10 font-semibold leading-tight mt-20 text-2xl md:text-3xl lg:text-4xl xl:text-4xl">
                        10% serious, 90% unfinished side projects
                    </h2>
                    <p className="text-white p-10 text-l">
                        I guess the most important thing that I want this page to say is that I am not one thing.
                        I heard <a target="_blank" rel="noopener noreferrer" href={"https://twitter.com/naval"}>Naval
                        Ravikant</a> voice
                        that humans aren't meant to focus their entire lives on doing one thing. I wholeheartedly agree.
                        We are an incredibly versatile species, and it would be a shame to waste that.
                    </p>
                    <p className="text-white px-10 pb-10 text-l">
                        I love reading, sailing, surfing, being a digital
                        bromad, <a target="_blank" rel="noopener noreferrer" href={"https://herres.haus"}>throwing
                        parties</a>, worrying about political
                        malpractice, and watching <a target="_blank" rel="noopener noreferrer"
                                                     href={"https://www.youtube.com/watch?v=MBRqu0YOH14"}>kurzgesagt</a>.
                    </p>
                    <p className="text-white px-10 pb-10 text-l">
                        I'm currently working a lot with React Native (which I think is 70% the best thing ever, 30% the
                        worst thing ever). I've worked a lot with .NET core in tandem with postgres or mongo. Laravel is
                        my former lover, but after discovering the power of C# in .NET core I was quickly cured
                        of my love for PHP. React is my favorite frontend framework so far, however the new Vue
                        composition API looks like it could steal React's thunder.
                    </p>
                    <p className="text-white px-10 pb-10 text-l">
                        If I would have to say what my most pleasing development experience was, I would say it was
                        deploying a kubernetes cluster on rancher. That piece of software is so magnificent I could
                        honestly cry. If you ever want to chat about it I'm always available.
                    </p>
                    <p className="text-white px-10 pb-10 text-l">
                        However my latest obsession would be Cognitive Behavioural Therapy. It is the most concrete
                        translation of stoicism I've ever heard, and I'm working with my close friend Pim on bringing
                        the therapy to more people. Being able to feel good should be for everyone. Hit me up if you
                        want early access to the app!
                    </p>
                    <p className="text-white px-10 pb-10 text-l">
                        Live long and prosper, Ian
                    </p>
                </div>
            </div>
        </div>
    )
}