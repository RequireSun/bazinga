import React from 'react';
import { inject, observer } from 'mobx-react';
import Dashboard from './dashboard';

import './index.less';

interface PropsInjected {
    score: number;
}

export interface Props {}

@inject((stores: { store: PropsInjected }) => ({
    score: stores.store.score,
}))
@observer
export default class Overview extends React.Component<Props, any> {
    get injected() {
        return this.props as PropsInjected;
    }

    render() {
        const { score } = this.injected;

        return (
            <div className="overview">
                <Dashboard score={score} />
            </div>
        );
    }
}
