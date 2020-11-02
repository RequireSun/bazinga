import React from 'react';
import Badge from '../badge';

export default () => (
    <div className="category-container">
        <div className="category-item">
            <div className="category-item-title">
                <span>组织任务</span>
                <Badge text="新" />
            </div>
            <div className="category-item-desc">
                <span>执行中</span>
                <span className="number">(3)</span>
            </div>
        </div>
        <div className="category-item">
            <div className="category-item-title">
                <span>享受权益</span>
            </div>
            <div className="category-item-desc">
                <span>即将过期</span>
                <span className="number">(1)</span>
            </div>
        </div>
    </div>
);
