import * as React from 'react';

export default function Id({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-id" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <rect x="3" y="4" width="18" height="16" rx="3"/>
            <circle cx="9" cy="10" r="2"/>
            <line x1="15" y1="8" x2="17" y2="8"/>
            <line x1="15" y1="12" x2="17" y2="12"/>
            <line x1="7" y1="16" x2="17" y2="16"/>
        </svg>)
}
