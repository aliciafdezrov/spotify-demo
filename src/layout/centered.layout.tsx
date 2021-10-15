import * as React from 'react';

export const CenteredLayout: React.FC = (props) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: "center",
                height: '100vh',
                marginTop: '-15vh',
                boxSizing: 'border-box',
                overflow: 'auto'
            }}
        >
            {props.children}
        </div>
    )
}
