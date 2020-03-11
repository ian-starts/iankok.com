import React, {useState, useEffect} from 'react';
import Link from "next/link";
import styles from './css/about.module.css'
import Layout from "../components/Layout";

export default (props) => {
    return (
        <Layout title={"Ian Kok - Projects"}>
            <div className="flex">
                <Link href={"/"}>
                    <div className="flex w-0 lg:w-40 xl:w-40"/>
                </Link>
                <div className="flex-1 h-screen bg-black overflow-auto">
                    <div className="max-w-2xl py-10 px-8 md:px-12 lg:px-12 xl:px-12">

                    </div>
                </div>
            </div>
        </Layout>
    )
}