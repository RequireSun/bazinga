import React from 'react';
import { Form, Slider, InputNumber, Row, Col } from 'antd';
import { inject, observer } from 'mobx-react';
import Store from '../../stores';

import './index.less';

export interface Props {}

@inject(({ store }: { store: Store }) => ({
    score: store.score,
    setScore: store.setScore,
}))
@observer
export default class IConsole extends React.Component<Props, any> {
    get injected() {
        return this.props as Store;
    }

    render() {
        const { score, setScore } = this.injected;

        return (
            <Form className="console">
                <section className="console-section">
                    <p className="console-section-title">总览</p>
                    <Form.Item label="分数">
                        <Row>
                            <Col span={18}>
                                <Slider min={-999} max={999} onChange={setScore} value={score} />
                            </Col>
                            <Col span={5} offset={1}>
                                <InputNumber min={-999} max={999} onChange={setScore} value={score} />
                            </Col>
                        </Row>
                    </Form.Item>
                </section>
            </Form>
        );
    }
}
