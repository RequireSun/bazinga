import React from 'react';
import classNames from 'classnames';

import './guo.less';

export type SIZE = 'normal' | 'large';

export interface Props {
    size?: SIZE;
}

export default ({ size = 'normal' }: Props = {}) =>
    <i className={classNames("icon icon-guo", size)} />;
