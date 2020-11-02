import React from 'react';
import classNames from 'classnames';
import { inject, observer } from 'mobx-react';
import { SECTION, SectionType } from '../../static/config';
import { SectionInfo } from '../../stores';

import './index.less';

interface PropsInjected {
    section: SectionInfo[];
    sectionActive: SectionType,
}

export interface Props {}

@inject(({ store }: { store: PropsInjected }) => ({
    section: store.section,
    sectionActive: store.sectionActive,
}))
@observer
export default class NavSection extends React.Component<Props, any> {
    get injected() {
        return this.props as PropsInjected;
    }

    render() {
        const { section, sectionActive } = this.injected;

        return (
            <div className="nav-section">
                {section.map(({ type }) => {
                    const config = SECTION.get(type);

                    if (config) {
                        const { icon: Icon, name } = config;

                        return (
                            <div className={classNames("nav-section-item", type === sectionActive ? 'active' : '')}>
                                <Icon />
                                <span className="nav-section-item-title">{name}</span>
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        );
    }
}
