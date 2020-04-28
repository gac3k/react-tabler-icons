import * as React from 'react';

export default function InfoCircle({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <circle cx="12" cy="12" r="9"/>
            <line x1="12" y1="8" x2="12.01" y2="8"/>
            <polyline points="11 12 12 12 12 16 13 16"/>
        </svg>)
}
