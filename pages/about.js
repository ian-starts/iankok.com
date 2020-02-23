import React, {useState, useEffect} from 'react';

export default (props) => {
    return (
        <div className="ml-0 lg:ml-40 xl:ml-40 flex-1 bg-black">
            <div className="h-screen overflow-auto">
                <div className="max-w-2xl">
                    <h1 className="text-white p-10 font-bold text-8xl">ABOUT</h1>
                    <h2 className="text-white p-10 mt-20 text-5xl">
                        Bespoke apps, performant backends, and functional frontends.
                    </h2>
                    <p className="text-white p-10 text-xl">
                        I love building shit and some more shit. Please give me shit to build. Somebody stop me
                        This is rediculous.This is rediculous.This is rediculous.
                    </p>
                </div>
            </div>
        </div>
    )
}