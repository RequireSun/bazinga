import React from 'react';
import { LeftOutlined, EllipsisOutlined } from '@ant-design/icons';
import IconGuo from '../icons/guo';

import './index.less';

export default class Navigator extends React.Component<any, any> {
    render() {
        return (
            <div className="navigator">
                <div className="navigator-left">
                    <LeftOutlined style={{ color: '#fff' }} />
                    {/*<span>中国信用</span>*/}
                </div>
                <div className="navigator-right">
                    <IconGuo size="large" />
                    <EllipsisOutlined style={{ fontSize: 24, color: '#fff' }} />
                </div>
            </div>
        );
    }
}
