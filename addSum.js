function printSum(...nums) {
    let totalSum = nums.reduce((acc, currNum) => {
        return acc + currNum;
    });

    console.log(totalSum);
}

printSum(5,1,8);
