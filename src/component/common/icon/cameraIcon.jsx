import React from 'react';

const CameraIcon = React.memo((props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
        <defs>
            <clipPath>
            <rect width="40" height="40" transform="translate(20.5 20.5)" fill="none"/>
            </clipPath>
        </defs>
        <g transform="translate(-425 -1058)">
            <g transform="translate(105.5 -153.5)">
                <g transform="translate(303 1195)" clip-path="url(#clip-path)">
                    <path d="M0,0H40V40H0Z" transform="translate(20.5 20.5)" fill="none"/>
                </g>
                <path d="M48.5,32l-2-4h-12l-2,4h-8V53h32V32Z" transform="translate(303 1195)" fill="none" stroke="#505050" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                <circle cx="5" cy="5" r="5" transform="translate(338.5 1232)" fill="none" stroke="#505050" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
            </g>
            <rect width="48" height="48" transform="translate(425 1058)" fill="none"/>
        </g>
    </svg>
));

export default CameraIcon;