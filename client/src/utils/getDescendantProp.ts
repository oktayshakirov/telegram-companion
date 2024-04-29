/* eslint-disable @typescript-eslint/no-explicit-any */
export default function getDescendantProp(obj: any, path: string) {
    const arr = path.split(".");
    while (arr.length && (obj = obj[arr.shift()!]));
    return obj;
}
