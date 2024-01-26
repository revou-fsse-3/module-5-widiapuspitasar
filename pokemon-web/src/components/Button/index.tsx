import React, { useState } from "react";

interface ButtonProps {
    label: string;
    onClick: () => void;
    className?: string;
}

const Button = ({ label, onClick, className }: ButtonProps) => {
    const [buttonStyle, setButtonStyle] = useState({
        backgroundColor: 'black',
        color: 'white',
    });

    const hoverStyle = {
        backgroundColor: 'orange',
    };

    return (
        <button
            className={`bg-black color-white text-white ${className}`}
            style={buttonStyle}
            onClick={onClick}
            onMouseOver={() => setButtonStyle({ ...buttonStyle, ...hoverStyle })}
            onMouseOut={() => setButtonStyle({ backgroundColor: 'black', color: 'white' })}
        >
            {label}
        </button>
    );
};

export default Button;
