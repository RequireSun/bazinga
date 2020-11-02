import React from 'react';
import { inject, observer } from 'mobx-react';
import { Row, Col } from 'antd';
import { InquiryType, INQUIRY } from '../../static/config';

import './index.less';

interface PropsInjected {
    inquiry: InquiryType[];
}

export interface Props {

}

@inject(({ store }: { store: PropsInjected }) => ({
    inquiry: store.inquiry,
}))
@observer
export default class EntranceInquiry extends React.Component<Props, any> {
    get injected() {
        return this.props as PropsInjected;
    }

    render() {
        const { inquiry } = this.injected;

        return (
            <div className="entrance-inquiry">
                <div className="entrance-inquiry-title">快捷查询</div>
                <Row>
                    {inquiry.map((_i) => {
                        const _iq = INQUIRY.get(_i);

                        if (_iq && _iq.name && _iq.icon) {
                            const { icon: Icon, name } = _iq;
                            return (
                                <Col span={6} className="entrance-inquiry-item">
                                    <Icon />
                                    <div className="entrance-inquiry-item-title">{name}</div>
                                </Col>
                            );
                        } else {
                            return null;
                        }
                    })}
                </Row>
            </div>
        );
    }
}
