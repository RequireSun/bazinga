import { observable } from 'mobx';
import { WelfareType } from '../static/config';
import { getNextMonth1st } from '../utils/time';

export enum Device {
    iPhone8Plus = 'iPhone 8 Plus',
}

export interface WelfareInfo {
    type: WelfareType;
    progress: number;
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
    }];
}
