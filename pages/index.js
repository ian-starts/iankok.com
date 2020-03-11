import React, {useState, useEffect} from 'react';
import Menu from '../components/Menu'
import dynamic from 'next/dynamic'
import Layout from "../components/Layout";


export default function Index() {

    const ModelWithNoSSR = dynamic(
        () => import('../components/Model.js'),
        {ssr: false}
    );

    return (
        <Layout>
            <ModelWithNoSSR text={"Ian Kok ,\nDeveloper."}/>
            <Menu/>
        </Layout>
    );
}
