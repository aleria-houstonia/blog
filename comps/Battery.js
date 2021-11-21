import React from "react";

const Battery = () => {
    return (
        <svg
            width="24"
            height="11"
            viewBox="0 0 24 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                opacity="0.35"
                x="0.5"
                y="0.5"
                width="21"
                height="10"
                rx="2.16667"
                stroke="#474646"
            />
            <path
                opacity="0.4"
                d="M23 4V8C23.606 7.66122 24 6.87313 24 6C24 5.12687 23.606 4.33878 23 4Z"
                fill="#474646"
            />
            <rect
                x="2"
                y="2"
                width="18"
                height="7"
                rx="1.33333"
                fill="#474646"
            />
        </svg>
    );
};

export default Battery;