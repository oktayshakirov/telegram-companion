export function sortArrayByField<T>(array: T[], field: keyof T, ascending = true): T[] {
    return array.sort((a, b) => {
        if (a[field] < b[field]) {
            return ascending ? -1 : 1;
        }
        if (a[field] > b[field]) {
            return ascending ? 1 : -1;
        }
        return 0;
    });
}
