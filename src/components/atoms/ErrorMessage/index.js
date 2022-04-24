import React from 'react'
import { Alert } from 'react-bootstrap'

const ErrorMessage = ({ variant = "info", children}) => {
    return (
        <div>
            <Alert variant={variant} style={{fontSize: 14, textAlign: 'center'}}>
                {children}
            </Alert>
        </div>
    )
}

export default ErrorMessage
