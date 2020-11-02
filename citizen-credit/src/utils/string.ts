export function padLeft(str: string, padder: string, targetLength: number) {
    if (!padder || padder.length !== 1 || targetLength < 0) {
        return str;
    }

    return `${padder.repeat(targetLength - str.length)}${str}`;
}
