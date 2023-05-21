export const getFirstNElements = <T>(array: Array<T>, n : number): Array<T> => {
    return array.slice(0, n);
}
