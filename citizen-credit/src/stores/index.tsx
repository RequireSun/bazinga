import {observable} from 'mobx';
import {WelfareConfig, WelfareType} from '../static/config';
import {getNextMonth1st} from '../utils/time';

export enum Device {
    iPhone8Plus = 'iPhone 8 Plus',
}

export interface WelfareInfo {
    type: WelfareType;
    progress: number;
    override?: { [key in keyof WelfareConfig]?: any; };
}

export default class Store {
    @observable
    device: Device = Device.iPhone8Plus;
    @observable
    score: number = 999;
    @observable
    increment: number = -1;
    @observable
    nextUpdateTimestamp: number = getNextMonth1st();
    @observable
    welfare: WelfareInfo[] = [{
        type: WelfareType.Car,
        progress: 370,
    }, {
        type: WelfareType.Cabin,
        progress: 2700,
    }, {
        type: WelfareType.Spouse,
        progress: 700,
    }, {
        type: WelfareType.Residence,
        progress: 60,
        override: {
            name: '驻马店户口',
        },
    }];
    @observable
    inquiry = [];
}
