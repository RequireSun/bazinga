import React from 'react';
import { TeamOutlined } from '@ant-design/icons/lib';

import './score-label.less';

export interface Props {
    name: string;
}

export default ({ name }: Props) => (
    <div className="score-label">
        <TeamOutlined />
        <span className="score-label-name">{name}</span>
    </div>
);
