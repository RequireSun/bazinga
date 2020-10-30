import React from 'react';
import Preview from '../../components/preview';

import './index.less';

export default class Index extends React.Component<any, any> {
    render() {
        return (
            <div className="citizen-credit">
                <Preview />
            </div>
        );
    }
}
