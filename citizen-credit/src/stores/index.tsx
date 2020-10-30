import { action, observable, computed } from 'mobx';

export enum Device {
    iPhone8Plus = 'iPhone 8 Plus',
}

export default class Store {
    @observable
    device: Device = Device.iPhone8Plus;
}
