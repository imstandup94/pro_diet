import React from 'react';

const CheckIcon = React.memo(({color}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
        <g transform="translate(-426.263 -487.158)">
            <rect width="32" height="32" transform="translate(426.263 487.158)" fill="none" opacity="0.2"/>
            <path d="M450.263,495.158l-13.333,12-6.667-6" transform="translate(2.5 2.5)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        </g>
    </svg>
));
export default CheckIcon;