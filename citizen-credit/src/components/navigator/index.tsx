import React from 'react';
import { inject, observer } from 'mobx-react';
import { LeftOutlined, EllipsisOutlined } from '@ant-design/icons';
import IconGuo from '../icons/guo';
import { SECTION, SectionType } from '../../static/config';

import './index.less';

interface PropsInjected {
    sectionActive: SectionType,
}

export interface Props {}

@inject(({ store }: { store: PropsInjected }) => ({
    sectionActive: store.sectionActive,
}))
@observer
export default class Navigator extends React.Component<Props, any> {
    get injected() {
        return this.props as PropsInjected;
    }

    render() {
        const { sectionActive } = this.injected;
        const section = SECTION.get(sectionActive);

        let name = null;
        if (section) {
            name = section.name;
        }

        return (
            <div className="navigator">
                <div className="navigator-left">
                    <LeftOutlined style={{ color: '#fff' }} />
                    <span>{name}</span>
                </div>
                <div className="navigator-right">
                    <IconGuo size="large" />
                    <EllipsisOutlined style={{ fontSize: 24, color: '#fff' }} />
                </div>
            </div>
        );
    }
}
