import React from 'react';

import Header from './common/Header';

class Root extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
            </div>
        );
    }
}

export default Root;