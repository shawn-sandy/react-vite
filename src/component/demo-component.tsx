import * as React from 'react';

export interface DemoComponentProps {
    title: string;
    children: React.ReactNode;
}

export const DemoComponent: React.FC<DemoComponentProps> = ({ title, children, ...props }) => {
    return (
        <>
        <h1>{title}</h1>
        <div {...props}>
            {children}
        </div>
        </>
    )
}

export default DemoComponent;