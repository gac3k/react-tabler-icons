import * as React from 'react';

export default function Subscript({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-subscript" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <path d="M5 7l8 10m-8 0l8 -10"/>
            <path d="M21 20h-4l3.5 -4a1.73 1.73 0 0 0 -3.5 -2"/>
        </svg>)
}
