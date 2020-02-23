import React, {useState, useEffect} from 'react';
import Menu from '../components/Menu'
import dynamic from 'next/dynamic'


export default function Index() {

    const ModelWithNoSSR = dynamic(
        () => import('../components/Model.js'),
        {ssr: false}
    );

    return (
        <div>
            <ModelWithNoSSR text={"Ian Kok\nDeveloper"}/>
            <Menu/>
        </div>
    );
}
