import React from 'react';
import { inject, observer } from 'mobx-react';
import { Button, Progress, Tooltip } from 'antd';
import { WelfareInfo } from '../../stores';
import { WELFARE } from '../../static/config';
import IconArrowMore from '../icons/arrow-more';

import './index.less';

interface PropsInjected {
    welfare: WelfareInfo[];
}

@inject(({ store }: { store: PropsInjected }) => ({
    welfare: store.welfare,
}))
@observer
export default class QuickEntrance extends React.Component<any, any> {
    get injected() {
        return this.props as PropsInjected;
    }

    render() {
        const { welfare } = this.injected;

        return (
            <div className="quick-entrance">
                <div className="quick-entrance-title">福利进度</div>
                <ul className="quick-entrance-list">
                    {welfare.map(({ type, progress, override }) => {
                        let config = WELFARE.get(type);

                        if (!config) {
                            return null;
                        }
                        if (override) {
                            config = {
                                ...config,
                                ...override,
                            };
                        }

                        const { icon: Icon, name, desc, total, action } = config;

                        return (
                            <li className="quick-entrance-item">
                                <div className="quick-entrance-item-icon">
                                    <Icon />
                                </div>
                                <div className="quick-entrance-item-info">
                                    <div className="quick-entrance-item-title">
                                        <span>{name}</span>
                                        {desc ? <span className="secondary">{desc}</span> : null}
                                    </div>
                                    <div className="quick-entrance-item-progress">
                                        <Progress type="line" status="exception"
                                                  format={() => `${progress} / ${total}`}
                                                  percent={progress / total * 100} />
                                    </div>
                                </div>
                                {action ? (
                                    action.tooltip ? (
                                        <Tooltip title={action.tooltip} trigger="trigger" defaultVisible={true}
                                                 overlayClassName="quick-entrance-item-tooltip">
                                            <div className="quick-entrance-item-action">
                                                <Button type="primary" shape="round" size="small">{action.name}</Button>
                                            </div>
                                        </Tooltip>
                                    ) : (
                                        <div className="quick-entrance-item-action">
                                            <Button type="primary" shape="round" size="small">{action.name}</Button>
                                        </div>
                                    )
                                ) : null}
                            </li>
                        );
                    })}
                </ul>
                <div className="quick-entrance-more">
                    <span>查看更多</span>
                    <IconArrowMore />
                </div>
            </div>
        );
    }
}
