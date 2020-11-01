import React from 'react';
import WaterDrop from '../icons/water-drop';
import { LEVEL } from '../../static/config';

import './dashboard.less';

export interface Props {
    score: number;
}

export default (props: Props) => {
    const level = LEVEL[props.score];
    const Label = level.label;

    return (
        <div className="dashboard">
            <div className="dashboard-round">
                {Array(25).fill('').map(() => <WaterDrop />)}
            </div>
            <div className="dashboard-bd">
                <div className="dashboard-score">{props.score}</div>
                <Label />
            </div>
        </div>
    );
}
