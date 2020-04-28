import * as React from 'react';

export default function ArrowsMaximize({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-maximize" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <polyline points="16 4 20 4 20 8"/>
            <line x1="14" y1="10" x2="20" y2="4"/>
            <polyline points="8 20 4 20 4 16"/>
            <line x1="4" y1="20" x2="10" y2="14"/>
            <polyline points="16 20 20 20 20 16"/>
            <line x1="14" y1="14" x2="20" y2="20"/>
            <polyline points="8 4 4 4 4 8"/>
            <line x1="4" y1="4" x2="10" y2="10"/>
        </svg>)
}
