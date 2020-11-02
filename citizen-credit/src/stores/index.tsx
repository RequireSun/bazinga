import { action, observable, computed } from 'mobx';
import { getNextMonth1st } from '../utils/time';

export enum Device {
    iPhone8Plus = 'iPhone 8 Plus',
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
}
