import * as React from 'react';

export default function Prompt({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-prompt" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <polyline points="5 7 10 12 5 17"/>
            <line x1="13" y1="17" x2="19" y2="17"/>
        </svg>)
}
