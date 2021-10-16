import React from 'react';
import { Alert } from 'react-bootstrap';

type Props = {
    children: React.ReactNode;
    variant: string;
}

export const Message : React.FC<Props> = ({variant, children}) => {
    return (
        <Alert variant={variant}>
            {children}
        </Alert>
    )
}

Message.defaultProps = {
    variant: 'info',
}

