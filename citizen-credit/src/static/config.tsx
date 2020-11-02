import React from 'react';
import ScoreLabel from '../components/overview/score-label';
import IconCar from '../components/icons/car';
import IconCabin from '../components/icons/cabin';
import IconSpouse from '../components/icons/spouse';
import IconResidence from '../components/icons/residence';
import IconPoliceman from '../components/icons/policeman';
import IconTrafficLight from '../components/icons/traffic-light';
import IconMauserPistol from '../components/icons/mauser-pistol';
import IconMixture from '../components/icons/mixture';
import IconTea from '../components/icons/tea';
import IconDonut from '../components/icons/donut';
import IconCabbage from '../components/icons/cabbage';
import IconWhiskey from '../components/icons/whiskey';
import IconCigarettes from '../components/icons/cigarettes';
import IconTeam from '../components/icons/team';
import IconConnection from '../components/icons/connection';
import IconApproveDocument from '../components/icons/approve-document';
import IconRubberStamp from '../components/icons/rubber-stamp';
import IconInprivateAccount from '../components/icons/inprivate-account';

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

// @todo 进修机会
//   度假
//   健身 (training program)
//   茅台配额
//   伴侣动物
export enum WelfareType {
    Car = 'Car',
    Cabin = 'Cabin',
    Spouse = 'Spouse',
    Residence = 'Residence',
}

export interface WelfareConfig {
    name: string;
    desc?: string;
    icon: React.ComponentType;
    total: number;
    action?: {
        name: string;
        tooltip?: string;
    };
}

export const WELFARE: Map<WelfareType, WelfareConfig> = new Map([
    [WelfareType.Car, {
        name: '私人轿车',
        icon: IconCar,
        total: 1105,
        action: {
            name: '切换为新能源',
        },
    }],
    [WelfareType.Cabin, {
        name: '独栋住宅',
        icon: IconCabin,
        total: 7470,
        action: {
            name: '切换住宅性质',
            tooltip: '换成公寓, 排队快30%',
        },
    }],
    [WelfareType.Spouse, {
        name: '革命伴侣',
        icon: IconSpouse,
        total: 5000,
    }],
    [WelfareType.Residence, {
        name: '落户',
        desc: '没有户口莫着急, 何处不能献青春',
        icon: IconResidence,
        total: 9999,
    }],
]);

export enum InquiryType {
    Uncivilized = 'Uncivilized',
    TrafficViolation = 'TrafficViolation',
    Execution = 'Execution',
    Medicine = 'Medicine',
    Tea = 'Tea',
    ImportedFood = 'ImportedFood',
    FruitsNVegetables = 'FruitsNVegetables',
    Alcohol = 'Alcohol',
    Tobacco = 'Tobacco',
    MinistryOfLove = 'MinistryOfLove',
}

export interface InquiryConfig {
    name: string;
    icon: React.ComponentType,
}

export const INQUIRY: Map<InquiryType, InquiryConfig> = new Map([
    [InquiryType.Uncivilized, {
        name: '不文明行为',
        icon: IconPoliceman,
    }],
    [InquiryType.TrafficViolation, {
        name: '交通违章',
        icon: IconTrafficLight,
    }],
    [InquiryType.Execution, {
        name: '处决名单',
        icon: IconMauserPistol,
    }],
    [InquiryType.Medicine, {
        name: '进口药物名录',
        icon: IconMixture,
    }],
    [InquiryType.Tea, {
        name: '本月新茶',
        icon: IconTea,
    }],
    [InquiryType.ImportedFood, {
        name: '进口食品',
        icon: IconDonut,
    }],
    [InquiryType.FruitsNVegetables, {
        name: '本月果蔬',
        icon: IconCabbage,
    }],
    [InquiryType.Alcohol, {
        name: '酒类专营',
        icon: IconWhiskey,
    }],
    [InquiryType.Tobacco, {
        name: '烟草专营',
        icon: IconCigarettes,
    }],
    [InquiryType.MinistryOfLove, {
        name: '附近友爱部',
        icon: IconTeam,
    }],
]);

export enum SectionType {
    Credit = 'Credit',
    Record = 'Record',
    Personal = 'Personal',
    Approval = 'Approval',
}

export interface SectionConfig {
    name: string;
    icon: React.ComponentType;
}

export const SECTION: Map<SectionType, SectionConfig> = new Map([
    [SectionType.Credit, {
        name: '人民信用',
        icon: IconConnection,
    }],
    [SectionType.Record, {
        name: '信用记录',
        icon: IconApproveDocument,
    }],
    [SectionType.Approval, {
        name: '审批',
        icon: IconRubberStamp,
    }],
    [SectionType.Personal, {
        name: '个人中心',
        icon: IconInprivateAccount,
    }],
]);
