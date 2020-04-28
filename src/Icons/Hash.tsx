import * as React from 'react';

export default function Hash({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hash" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="5" y1="9" x2="19" y2="9"/>
            <line x1="5" y1="15" x2="19" y2="15"/>
            <line x1="11" y1="4" x2="7" y2="20"/>
            <line x1="17" y1="4" x2="13" y2="20"/>
        </svg>)
}
