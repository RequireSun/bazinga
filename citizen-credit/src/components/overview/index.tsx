import React from 'react';
import { inject, observer } from 'mobx-react';
import Dashboard from './dashboard';
import ArrowIncrease from '../icons/arrow-increase';
import { format } from '../../utils/time';

import './index.less';

interface PropsInjected {
    score: number;
    increment: number;
    nextUpdateTimestamp: number;
}

export interface Props {}

@inject(({ store }: { store: PropsInjected }) => ({
    score: store.score,
    increment: store.increment,
    nextUpdateTimestamp: store.nextUpdateTimestamp,
}))
@observer
export default class Overview extends React.Component<Props, any> {
    get injected() {
        return this.props as PropsInjected;
    }

    render() {
        const { score, increment, nextUpdateTimestamp } = this.injected;

        let Increment = null;

        if (increment > 0) {
            Increment = (
                <>
                    <ArrowIncrease size="xs" />
                    <span className="overview-info-part">{increment}分</span>
                    <i className="overview-info-separator" />
                </>
            );
        } else if (increment < 0) {
            Increment = (
                <>
                    <ArrowIncrease size="xs" direction="reverse" />
                    <span className="overview-info-part">{-increment}分</span>
                    <i className="overview-info-separator" />
                </>
            );
        }

        return (
            <div className="overview">
                <Dashboard score={score} />
                <div className="overview-info">
                    {Increment}
                    <span className="overview-info-part">下次更新{format('MM月DD日', nextUpdateTimestamp)}</span>
                </div>
            </div>
        );
    }
}
