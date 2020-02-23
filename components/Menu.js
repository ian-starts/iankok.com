import React, {useState, useEffect} from 'react';

export default function (props) {
    return(
        <div className="absolute bottom-0 right-0">
            <div className="flex flex-col m-10 p-5" style={{backgroundColor: '#ffffff1c', mixBlendMode: 'difference'}}>
                <a className="text-white text-xl" href="#">About</a>
                <a className="text-white text-xl" href="#">Projects</a>
                <a className="text-white text-xl" href="#">Blog</a>
            </div>
        </div>
    )
}