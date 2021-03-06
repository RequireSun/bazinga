import React from 'react';
import { inject, observer } from 'mobx-react';
import { Button, Progress, Tooltip } from 'antd';
import { WelfareInfo } from '../../stores';
import { WELFARE, WelfareType } from '../../static/config';
import IconArrowMore from '../icons/arrow-more';

import './index.less';

interface PropsInjected {
    welfare: WelfareInfo[];
}

export interface Props {}

interface State {
    tooltipVisible: Set<WelfareType>;
}

@inject(({ store }: { store: PropsInjected }) => ({
    welfare: store.welfare,
}))
@observer
export default class EntranceQuick extends React.Component<Props, State> {
    state = {
        tooltipVisible: new Set<WelfareType>(),
    };

    constructor(props: any) {
        super(props);

        for (const [type, config] of WELFARE.entries()) {
            if (config.action && config.action.tooltip) {
                this.state.tooltipVisible.add(type);
            }
        }
    }

    changeTooltipVisible = (type: WelfareType) => {
        const { tooltipVisible } = this.state;
        if (tooltipVisible.has(type)) {
            tooltipVisible.delete(type);
        } else {
            tooltipVisible.add(type);
        }
        this.setState({
            tooltipVisible,
        });
    };

    get injected() {
        return this.props as PropsInjected;
    }

    render() {
        const { welfare } = this.injected;
        const { tooltipVisible } = this.state;

        return (
            <div className="entrance-quick">
                <div className="entrance-quick-title">福利进度</div>
                <ul className="entrance-quick-list">
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
                            <li className="entrance-quick-item">
                                <div className="entrance-quick-item-icon">
                                    <Icon />
                                </div>
                                <div className="entrance-quick-item-info">
                                    <div className="entrance-quick-item-title">
                                        <span>{name}</span>
                                        {desc ? <span className="secondary">{desc}</span> : null}
                                    </div>
                                    <div className="entrance-quick-item-progress">
                                        <Progress type="line" status="exception"
                                                  format={() => `${progress} / ${total}`}
                                                  percent={progress / total * 100} />
                                    </div>
                                </div>
                                {action ? (
                                    action.tooltip ? (
                                        <Tooltip title={action.tooltip} trigger="trigger" visible={tooltipVisible.has(type)}
                                                 overlayClassName="entrance-quick-item-tooltip">
                                            <div className="entrance-quick-item-action">
                                                <Button type="primary" shape="round" size="small" onClick={this.changeTooltipVisible.bind(this, type)}>{action.name}</Button>
                                            </div>
                                        </Tooltip>
                                    ) : (
                                        <div className="entrance-quick-item-action">
                                            <Button type="primary" shape="round" size="small">{action.name}</Button>
                                        </div>
                                    )
                                ) : null}
                            </li>
                        );
                    })}
                </ul>
                <div className="entrance-quick-more">
                    <span>查看更多</span>
                    <IconArrowMore />
                </div>
            </div>
        );
    }
}
