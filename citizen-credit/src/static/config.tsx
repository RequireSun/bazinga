import React from 'react';
import ScoreLabel from '../components/overview/score-label';

export interface CreditLevel {
    label: React.ComponentType;
}

export const LEVEL: { [score: number]: CreditLevel; } = new Proxy({
    config: new Map<[number, number], CreditLevel>([
        [[-Infinity, 0], {
            label: () => (
                <ScoreLabel name="叛徒" />
            ),
        }],
        [[0, 350], {
            label: () => (
                <ScoreLabel name="改造人员" />
            ),
        }],
        [[350, 550], {
            label: () => (
                <ScoreLabel name="帮扶对象" />
            ),
        }],
        [[550, 600], {
            label: () => (
                <ScoreLabel name="守法公民" />
            ),
        }],
        [[600, 650], {
            label: () => (
                <ScoreLabel name="积极分子" />
            ),
        }],
        [[650, 700], {
            label: () => (
                <ScoreLabel name="党员" />
            ),
        }],
        [[700, 950], {
            label: () => (
                <ScoreLabel name="人民公仆" />
            ),
        }],
        [[950, Infinity], {
            label: () => (
                <ScoreLabel name="老大哥" />
            ),
        }],
    ]),
}, {
    get(target, p: string | number | symbol, receiver: any): CreditLevel | undefined {
        if (typeof(p) === 'symbol') {
            p = -Infinity;
        } else if (typeof(p) === 'string') {
            p = parseFloat(p);
        }

        switch (p) {
            case Infinity: {
                for (const [[min, max], config] of target.config.entries()) {
                    if (max === Infinity) {
                        return config;
                    }
                }
                break;
            }
            case -Infinity: {
                for (const [[min, max], config] of target.config.entries()) {
                    if (min === -Infinity) {
                        return config;
                    }
                }
                break;
            }
            default: {
                for (const [[min, max], config] of target.config.entries()) {
                    if (p >= min && p < max) {
                        return config;
                    }
                }
                break;
            }
        }
        return undefined;
    },
});