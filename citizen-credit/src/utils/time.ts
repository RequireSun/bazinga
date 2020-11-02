import { padLeft } from './string';

export function getNextMonth1st() {
    const _t = new Date();
    _t.setMonth(_t.getMonth() + 1);
    _t.setDate(1);
    _t.setHours(0);
    _t.setMinutes(0);
    _t.setSeconds(0);
    _t.setMilliseconds(0);
    return _t.getTime();
}

export function format(format: string, time: string | number | Date = new Date(), options: {
    padLeft?: boolean;
} = {}) {
    if (!(time instanceof Date)) {
        time = new Date(time);
    }

    let _M: string | number = time.getMonth() + 1;
    let _D: string | number = time.getDate();
    let _h: string | number = time.getHours();
    let _m: string | number = time.getMinutes();
    let _s: string | number = time.getSeconds();

    if (options.padLeft) {
        _M = padLeft(`${_M}`, '0', 2);
        _D = padLeft(`${_D}`, '0', 2);
        _h = padLeft(`${_h}`, '0', 2);
        _m = padLeft(`${_m}`, '0', 2);
        _s = padLeft(`${_s}`, '0', 2);
    }

    return (
        format
            .replace(/YYYY/g, `${time.getFullYear()}`)
            .replace(/MM/g, `${_M}`)
            .replace(/DD/g, `${_D}`)
            .replace(/hh/g, `${_h}`)
            .replace(/ii/g, `${_m}`)
            .replace(/ss/g, `${_s}`)
    );
}
