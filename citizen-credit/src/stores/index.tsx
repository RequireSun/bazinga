import React from 'react';
import { observable, action } from 'mobx';
import { InquiryType, WelfareConfig, WelfareType, SectionType } from '../static/config';
import { getNextMonth1st } from '../utils/time';

export enum Device {
    iPhone8Plus = 'iPhone 8 Plus',
}

export interface WelfareInfo {
    type: WelfareType;
    progress: number;
    override?: { [key in keyof WelfareConfig]?: any; };
}

export interface SectionInfo {
    type: SectionType;
}

export default class Store {
    @observable
    device: Device = Device.iPhone8Plus;
    @observable
    score: number = 999;
    @action
    setScore = (score: number | string = this.score) => {
        console.log(111, score);
        if (typeof(score) !== 'number') {
            score = parseInt(score as string);
        }
        console.log(222, score);
        this.score = score;
    };

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
    inquiry: InquiryType[] = [
        InquiryType.Execution,
        InquiryType.Tea,
        InquiryType.FruitsNVegetables,
        InquiryType.ImportedFood,
        InquiryType.TrafficViolation,
        InquiryType.Uncivilized,
        InquiryType.Medicine,
        InquiryType.Alcohol,
        InquiryType.Tobacco,
        InquiryType.MinistryOfLove,
    ];
    @observable
    section: SectionInfo[] = [{
        type: SectionType.Credit,
    }, {
        type: SectionType.Record,
    }, {
        type: SectionType.Approval,
    }, {
        type: SectionType.Personal,
    },];
    @observable
    sectionActive: SectionType = SectionType.Credit;
}
