class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let map = new Map<number, number>();
        for(let i = 0; i < nums.length; i++) {
            const lookUp = target - nums[i];
            if(map.has(lookUp)) return [map.get(lookUp), i];
            map.set(nums[i], i);
        }
    }
}
