export const sumOfPairs = (nums, target) => {
    let sum = 0;

    const getIndicies = (...result) => {
        return [nums.indexOf(result[0]), nums.indexOf(result[1])]
    };

    let indices = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            sum = nums[i] + nums[j];
            sum === target
                ? indices = [nums[i], nums[j]]
                : sum = 0;
        }
    }

    console.log(indices);
};

// 1, 2, 3, 4, 5, target = 3
// ^--^ => [0, 1]

// 1, 2, 3, 4, 5, target = 4
// ^-----^ => [0, 3]

// 1, 2, 3, 4, 5, target = 9
//          ^--^ => [3, 4]
