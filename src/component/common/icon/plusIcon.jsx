import React from 'react';

const PlusIcon = React.memo(({color}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
        <g transform="translate(-477.745 -487.863)">
            <rect width="32" height="32" transform="translate(477.745 487.863)" fill="none" opacity="0.2"/>
            <g>
            <g transform="translate(1.5 1.5)">
                <line stroke={color ? color : "#fff"} x2="20" transform="translate(482.245 502.363)" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                <line stroke={color ? color : "#fff"} y2="20" transform="translate(492.245 492.363)" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
            </g>
            </g>
        </g>
    </svg>
));

export default PlusIcon;