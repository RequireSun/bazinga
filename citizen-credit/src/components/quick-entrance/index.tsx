import React from 'react';
import { Button, Progress } from 'antd';
import IconCar from '../icons/car';

import './index.less';

export default class QuickEntrance extends React.Component<any, any> {
    render() {
        return (
            <div className="quick-entrance">
                <div className="quick-entrance-title">福利进度</div>
                <ul className="quick-entrance-list">
                    <li className="quick-entrance-item">
                        <div className="quick-entrance-item-icon">
                            <IconCar />
                        </div>
                        <div className="quick-entrance-item-info">
                            <div className="quick-entrance-item-title">私人轿车</div>
                            <div className="quick-entrance-item-progress">
                                <Progress type="line" status="exception" format={() => '370 / 1105'} percent={370 / 1105 * 100} />
                            </div>
                        </div>
                        <div className="quick-entrance-item-action">
                            <Button type="primary" shape="round" size="small">切换为新能源</Button>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
