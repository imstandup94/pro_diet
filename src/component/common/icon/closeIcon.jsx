import React from 'react';

const CloseIcon = React.memo(({size}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size ? size : 56} height={size ? size : 56} viewBox="0 0 56 56">
        <defs>
            <clipPath>
            <rect width="56" height="56" transform="translate(26.162 26.162)" fill="none"/>
            </clipPath>
        </defs>
        <g transform="translate(-26.162 -26.162)">
            <g>
                <line x1="28.284" y2="28.284" transform="translate(40.02 40.02)" fill="none" stroke="#20232d" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                <line x1="28.284" y1="28.284" transform="translate(40.02 40.02)" fill="none" stroke="#20232d" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/>
                <g>
                    <g opacity="0.2">
                        <g clip-path="url(#clip-path)">
                            <path  d="M0,0H56V56H0Z" transform="translate(26.162 26.162)" fill="none"/>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
));

export default CloseIcon;