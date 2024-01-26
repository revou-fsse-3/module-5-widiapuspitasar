import React, { ReactNode } from "react";

interface Props {
    className?: string;
    children: ReactNode;
    color?: string;
}

const Text = ({ children, className, color }: Props) => {
    const textStyle = {
        color: color || 'black',
    };

    return (
        <h1 className={className} style={textStyle}>
            {children}
        </h1>
    );
};

export default Text;
