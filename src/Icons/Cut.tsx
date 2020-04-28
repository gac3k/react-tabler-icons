import * as React from 'react';

export default function Cut({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cut" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <circle cx="7" cy="17" r="3"/>
            <circle cx="17" cy="17" r="3"/>
            <line x1="9.15" y1="14.85" x2="18" y2="4"/>
            <line x1="6" y1="4" x2="14.85" y2="14.85"/>
        </svg>)
}
