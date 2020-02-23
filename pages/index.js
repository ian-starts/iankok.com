import React, {useState, useEffect} from 'react';
import dynamic from 'next/dynamic'


export default function Index() {

    const ModelWithNoSSR = dynamic(
        () => import('../components/Model.js'),
        {ssr: false}
    );

    return (
        <div>
            <ModelWithNoSSR text={"Ian Kok\nDeveloper"}/>
        </div>
    );
}
