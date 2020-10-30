import React from 'react';
import { inject, observer } from 'mobx-react';
import classNames from 'classnames';
import Cover from '../cover';
import Navigator from '../navigator';
import Background from '../background';
import Overview from '../overview';
import { Device } from '../../stores/';

import './index.less';

export interface Props {
}

interface PropsInjected extends Props {
    device: Device;
}

@inject((stores: { store: PropsInjected }) => ({
    device: stores.store.device,
}))
@observer
export default class Preview extends React.Component<Props, any> {
    get injected() {
        return this.props as PropsInjected;
    }

    render() {
        const { device } = this.injected;
        return (
            <div className={classNames('preview-container', device.replace(/\s/g, '-').toLowerCase())}>
                <Cover />
                <Navigator />
                <div className="preview-bd">
                    <Background />
                    <Overview />
                </div>
            </div>
        );
    }
}
