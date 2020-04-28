import * as React from 'react';

export default function Dashboard({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dashboard" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <circle cx="12" cy="13" r="2"/>
            <line x1="13.45" y1="11.55" x2="15.5" y2="9.5"/>
            <path d="M6.4 20a9 9 0 1 1 11.2 0Z"/>
        </svg>)
}
