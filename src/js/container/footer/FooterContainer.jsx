import React, { Component } from 'react';

import './Footer.less';

class FooterContainer extends Component {
    render() {
        const date = new Date().getFullYear();
        return (
            <div className="footer">
                <p className="info">
                    &copy;{date}Ciyuer.com. All Rights Reserved.
                </p>
            </div>
        );
    }
}

export default FooterContainer;