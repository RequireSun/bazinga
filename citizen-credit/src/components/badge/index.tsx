import React from 'react';

import './index.less';

export interface Props {
    text: string;
}

export default ({ text }: Props) => (
    <div className="badge">
        {text}
    </div>
);
