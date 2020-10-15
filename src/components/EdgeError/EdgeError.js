import React from 'react';
import './EdgeError.css';

class EdgeError extends React.Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <div className="error"><h2>Something has gone wrong</h2></div>;
        }
        return this.props.children;
    }
}

export default EdgeError;