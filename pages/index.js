import react, {useState, useEffect} from 'react';
import dynamic from 'next/dynamic'


export default function Index() {

    const DynamicComponentWithNoSSR = dynamic(
        () => import('../components/flythrough.js'),
        {ssr: false}
    );

    return (
        <div>
            <div>
            </div>
            <DynamicComponentWithNoSSR/>
        </div>
    );
}
