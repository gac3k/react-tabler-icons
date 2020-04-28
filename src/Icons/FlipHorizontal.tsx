import * as React from 'react';

export default function FlipHorizontal({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-flip-horizontal" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <polyline points="7 16 17 16 7 21 7 16"/>
            <polyline points="7 8 17 8 7 3 7 8"/>
        </svg>)
}
