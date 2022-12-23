export function getKeys<T extends {}>(obj: T) {
    return Object.keys(obj) as Array<keyof T>;
}
