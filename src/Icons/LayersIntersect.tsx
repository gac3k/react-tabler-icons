import * as React from 'react';

export default function LayersIntersect({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layers-intersect" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <rect x="8" y="4" width="12" height="12" rx="2"/>
            <rect x="4" y="8" width="12" height="12" rx="2"/>
        </svg>)
}
