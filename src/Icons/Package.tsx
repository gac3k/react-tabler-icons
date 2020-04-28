import * as React from 'react';

export default function Package({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-package" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"/>
            <line x1="12" y1="12" x2="20" y2="7.5"/>
            <line x1="12" y1="12" x2="12" y2="21"/>
            <line x1="12" y1="12" x2="4" y2="7.5"/>
            <line x1="16" y1="5.25" x2="8" y2="9.75"/>
        </svg>)
}
