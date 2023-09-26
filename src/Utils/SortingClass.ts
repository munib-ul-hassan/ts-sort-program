class SortClass {
    static SortByDescending(arr: number[]): number[] {

        return arr.slice().sort((a, b) => b - a);
    }
}

export default SortClass;
