import React from 'react';
import WaterDrop from '../icons/water-drop';

import './dashboard.less';

export default () => (
    <div className="dashboard">
        <div className="dashboard-round">
            {Array(25).fill('').map(() => <WaterDrop />)}
        </div>
    </div>
);
