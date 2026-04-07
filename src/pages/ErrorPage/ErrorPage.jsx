import React from 'react';
import './ErrorPage.css'; // We will create this file next

const ErrorPage = () => {
    return (
        <div className="error-container">
            <div className="error-content">
                <h1 className="error-code">404</h1>
                <h2 className="error-message">Oops! Page Not Found</h2>
                <p className="error-description">
                    The page you are looking for does not exist or has been moved.
                </p>
                <a href="/" className="home-button">
                    Go Back Home
                </a>
            </div>
        </div>
    );
};

export default ErrorPage;