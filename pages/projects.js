import React from 'react';
import Link from "next/link";
import styles from './css/about.module.css'
import Layout from "../components/Layout";
import LogoParley from "../svgs/logo-parley.svg";
import LogoFlairtable from "../svgs/logo-flairtable.svg";
import LogoJoin from "../svgs/logo-join.svg"
import LogoLoopground from "../svgs/logo-loopground.svg"
import LogoFlanderijn from "../svgs/logo-flanderijn.svg"

export default (props) => {
    return (
        <Layout title={"Ian Kok - Projects"}>
            <div className="flex">
                <Link href={"/"}>
                    <div className="flex w-0 lg:w-40 xl:w-40"/>
                </Link>
                <div className="flex-1 h-screen bg-black overflow-auto">
                    <div className="py-10 px-1 sm:px-8 sm:px-12">
                        <div className="flex flex-row">
                            <h1 className="text-white px-2 font-bold text-5xl sm:text-7xl md:text-8xl">PROJECTS</h1>
                        </div>
                        <p className="text-white px-2 my-5 text-lg">
                            These are some of the projects I recently worked on and think are awesome. Sadly some are
                            closed source :(. If you want to
                            know more about older projects: <Link href={"/contact"}><a className="link">let me know!</a></Link>
                        </p>
                        <ul className="flex flex-col flex-wrap mt-3 ml-0 sm:ml-10">
                            <li className="mx-2 flex flex-row my-2">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.flanderijn.nl/"
                                   className="sm:self-center">
                                    <div className="p-3 align-middle bg-white border-4 w-16 h-16 sm:w-20 sm:h-20"
                                         style={{borderRadius: '100%', borderColor: '#9600ff'}}>
                                        <LogoFlanderijn/>
                                    </div>
                                </a>
                                <div className="self-center">
                                    <p className="text-white px-5 self-center font-bold text-sm sm:text-lg">
                                        Flanderijn
                                    </p>
                                    <p className="text-white px-5 self-center text-sm sm:text-l">
                                        Over at Flanderijn I was responsible for connecting their largest clients to
                                        their internal software package. I worked intensely with large banks such as
                                        ABN AMRO and ING to automate their debt management and build a highly
                                        scalable distributed system capable of handling the spiky load. Initially a
                                        6 month contract, we extended twice due to a very pleasant work dynamic,
                                        and needing to keep a senior on-board.
                                    </p>
                                    <p className="text-white px-5 self-center font-bold text-sm sm:text-l">
                                        .NET 6, Service Bus, CQRS, DDD, Architecture, Masstransit
                                    </p>
                                </div>
                            </li>
                            <li className="mx-2 flex flex-row my-2">
                                <a target="_blank" rel="noopener noreferrer" href="https://thaly.nl"
                                   className="sm:self-center">
                                    <div
                                        className="p-3 flex items-center align-middle bg-white border-4 w-16 h-16 sm:w-20 sm:h-20"
                                        style={{borderRadius: '100%', borderColor: '#9600ff'}}>
                                        <img src="/images/logo-thaly.png" alt="Thaly B.V."
                                             className="rounded-full"
                                             height="100" width="100"/>
                                    </div>
                                </a>
                                <div className="self-center">
                                    <p className="text-white px-5 self-center font-bold text-sm sm:text-lg">
                                        Thaly
                                    </p>
                                    <p className="text-white px-5 self-center text-sm sm:text-l">
                                        Thaly requested full automation for their webshop in medical and safety
                                        equipment. As a lead developer and greenfield architect I built and deployed a
                                        solution to reduce his workload from almost an FTE to 4 hours a week. I
                                        translated user requests into a functional MVP and created a sprint based
                                        release schedule with live demos. This projects is ongoing to reduce his
                                        workload to max 1 hour per week. It’s built in .NET Core 3.1, and uses a custom
                                        dashboard in React.
                                    </p>
                                    <p className="text-white px-5 self-center font-bold text-sm sm:text-l">
                                        .NET Core, Next.js, Kubernetes
                                    </p>
                                </div>
                            </li>
                            <li className="mx-2 flex flex-row my-2">
                                <a target="_blank" rel="noopener noreferrer" href="https://loopground.com"
                                   className="sm:self-center">
                                    <div className="p-3 align-middle bg-white border-4 w-16 h-16 sm:w-20 sm:h-20"
                                         style={{borderRadius: '100%', borderColor: '#9600ff'}}>
                                        <LogoLoopground/>
                                    </div>
                                </a>
                                <div className="self-center">
                                    <p className="text-white px-5 self-center font-bold text-sm sm:text-lg">
                                        Loopground
                                    </p>
                                    <p className="text-white px-5 self-center text-sm sm:text-l">
                                        Loopground is my latest venture. I love building things with electrical
                                        components, but it always sucks that Sparkfun and Adafruit are ridiculously
                                        expensive. Ordering from china is a possibility but much like forrest gump's box
                                        of chocolates: you never know what you gon' get. Loopground sources pre-vetted
                                        components from china for a very good price, and with great docs. We're
                                        currently experimenting with "kits" so people can easily start building cool DIY
                                        projects.
                                    </p>
                                    <p className="text-white px-5 self-center font-bold text-sm sm:text-l">
                                        .NET Core, Nuxt.js, Kubernetes, RabbitMQ
                                    </p>
                                </div>
                            </li>
                            <li className="mx-2 flex flex-row my-2">
                                <a target="_blank" rel="noopener noreferrer" href="https://flairtable.com"
                                   className="sm:self-center">
                                    <div className="p-3 pt-4 align-middle bg-white border-4 w-16 h-16 sm:w-20 sm:h-20"
                                         style={{borderRadius: '100%', borderColor: '#9600ff'}}>
                                        <LogoFlairtable/>
                                    </div>
                                </a>
                                <div className="self-center">
                                    <p className="text-white px-5 self-center font-bold text-sm sm:text-lg">
                                        Flairtable
                                    </p>
                                    <p className="text-white px-5 self-center text-sm sm:text-l">
                                        Flairtable is essentially a security layer over Airtable. It allows you to scope
                                        your API key and make Airtable usable in frontends and clients. It's written as
                                        a typescript cloudfunction and has a JavaScript package for easy implementation.
                                    </p>
                                    <p className="text-white px-5 self-center font-bold text-sm sm:text-l">
                                        JavaScrip, TypeScript, Node, Firebase
                                    </p>
                                </div>
                            </li>
                            <li className="mx-2 flex flex-row my-2">
                                <a target="_blank" rel="noopener noreferrer" href="https://getparley.app"
                                   className="sm:self-center">
                                    <div className="align-middle bg-white border-4 w-16 h-16 sm:w-20 sm:h-20"
                                         style={{borderRadius: '100%', borderColor: '#9600ff'}}>
                                        <LogoParley/>
                                    </div>
                                </a>
                                <div className="self-center">
                                    <p className="text-white px-5 self-center font-bold text-sm sm:text-lg">
                                        Parley
                                    </p>
                                    <p className="text-white px-5 self-center text-sm sm:text-l">
                                        Parley helps people overcome anxiety and mental
                                        problems by using <a className="link" target="_blank"
                                                             rel="noopener noreferrer"
                                                             href={"https://blog.iankok.com/the-steps-of-cbt"}>CBT</a>(Cognitive
                                        Behavioral Therapy) In short: it helps you feel better. With Parley I had to
                                        dive into
                                        the
                                        world of front-end frameworks, and create a thorough understanding of not only
                                        how an application should architecturally look like, but also the challenges
                                        that arise when you have to implement complex back-ends.
                                    </p>
                                    <p className="text-white px-5 self-center font-bold text-sm sm:text-l">
                                        React Native, Expo
                                    </p>
                                </div>
                            </li>
                            <li className="mx-2 flex flex-row my-3">
                                <a target="_blank" rel="noopener noreferrer" href="https://join.marketing"
                                   className="sm:self-center">
                                    <div className="p-3 align-middle bg-white border-4 w-16 h-16 sm:w-20 sm:h-20"
                                         style={{borderRadius: '100%', borderColor: '#9600ff'}}>
                                        <LogoJoin/>
                                    </div>
                                </a>
                                <div className="self-center">
                                    <p className="text-white px-5 self-center font-bold text-sm sm:text-lg">
                                        Join - Influencer Marketing
                                    </p>
                                    <p className="text-white px-5 self-center text-sm sm:text-l">
                                        As a senior backend developer in this young start up, I was mostly responsible
                                        for rapid
                                        progress. Building features as fast as possible to grow as fast as possible. I
                                        was responsible for migrating their monolith to a separated API based platform,
                                        and build features such as social outreach predication, and campaign success
                                        metrics.
                                    </p>
                                    <p className="text-white px-5 self-center font-bold text-sm sm:text-l">
                                        Laravel, ElasticSearch, MySql
                                    </p>
                                </div>
                            </li>
                            <li className="mx-2 flex flex-row my-3">
                                <a target="_blank" rel="noopener noreferrer" href="https://travelflow.com"
                                   className="sm:self-center">
                                    <div
                                        className="p-3 flex items-center align-middle bg-white border-4 w-16 h-16 sm:w-20 sm:h-20"
                                        style={{borderRadius: '100%', borderColor: '#9600ff'}}>
                                        <img src="/images/travelflow-logo.png" alt="Travel Flow"
                                             className="rounded-full"
                                             height="100" width="100"/>
                                    </div>
                                </a>
                                <div className="self-center">
                                    <p className="text-white px-5 self-center font-bold text-sm sm:text-lg">
                                        Travel Flow - Travel Package
                                    </p>
                                    <p className="text-white px-5 self-center text-sm sm:text-l">
                                        Travelflow wanted to build a booking engine, combining flights, hotels and event
                                        tickets. As lead developer I was responsible for charting the business
                                        requirements from the employees and translating that into domain sketches. From
                                        those domain sketches, we started building an MVP and creating a team of
                                        developers. I did most of the interviews to determine developer skill, and to
                                        stay on release track. After assembling a backend team and writing a lot of C#
                                        code, I also created the requirements for the CMS in React. While not building a
                                        lot of React, I was reviewing the bulk of the PR’s. We deployed the solution as
                                        a microservice landscape on AWS. Using SQS as a service bus and Fargate as a
                                        container manager.
                                    </p>
                                    <p className="text-white px-5 self-center font-bold text-sm sm:text-l">
                                        Laravel, MySql, Redis
                                    </p>
                                </div>
                            </li>
                            <li className="mx-2 flex flex-row my-3">
                                <a target="_blank" rel="noopener noreferrer" href="https://travelflow.com"
                                   className="sm:self-center">
                                    <div
                                        className="p-3 flex items-center align-middle bg-white border-4 w-16 h-16 sm:w-20 sm:h-20"
                                        style={{borderRadius: '100%', borderColor: '#9600ff'}}>
                                        <img src="/images/travelflow-logo.png" alt="Travel Flow"
                                             className="rounded-full"
                                             height="100" width="100"/>
                                    </div>
                                </a>
                                <div className="self-center">
                                    <p className="text-white px-5 self-center font-bold text-sm sm:text-lg">
                                        Travel Flow - Tickets Backend
                                    </p>
                                    <p className="text-white px-5 self-center text-sm sm:text-l">
                                        Together with their team, we built a complete back-end for their event ticketing
                                        business. It entailed intelligently parsing tons of emails, pre-filling orders
                                        with suggested matches, API links with their financial tools, tracking of
                                        shipments, etc.
                                        Originally built with Laravel and then rebuilt in .NET Core using Domain Driven
                                        Design, SOLID, SQRS, and (excuse my french) a microservice architecture.
                                    </p>
                                    <p className="text-white px-5 self-center font-bold text-sm sm:text-l">
                                        Laravel, .NET Core, PostgreSQL, MongoDB, RabbitMQ, Redis, Kubernetes, Docker
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <p className="text-white px-2 mt-10 text-lg">I recommend checking out my <a
                            className="link" target="_blank"
                            rel="noopener noreferrer"
                            href={"https://github.com/ian-starts"}>GitHub
                        </a> for some open source stuff I made. You can also see the <a
                            className="link" target="_blank"
                            rel="noopener noreferrer"
                            href={"https://github.com/ian-starts/iankok.com"}>source code of this site
                        </a> if you
                            think it's dope (I do). There are also some archived things in .NET Core, Lumen, Next.js,
                            Gatsby and
                            Nuxt.js if you want to check that out.<br/> All in all, I love .NET, know my way around
                            AWS, Azure, and a Kubernets cluster, and can build a functional and fast
                            front-end. Oh, and I'm always <Link href={"/contact"}><a className="link"
                            >open for a chat!</a></Link></p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
