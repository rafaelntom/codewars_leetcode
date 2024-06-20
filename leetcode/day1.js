//1. Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

async function sleep(millis) {
  await new Promise((resolve) => setTimeout(resolve, millis));
}

// 2. Closure concept: A closure is created when a function is defined inside another function, and the inner function references variables in the outer function's scope. When the inner function is returned from the outer function, it retains a reference to the outer function's scope, and can continue to access those variables even after the outer function has finished executing.

const makeCounter = () => {
  let count = 0;

  return () => {
    count++;
    console.log(count);
  };
};

let counter = makeCounter();
counter(); // logs 1
counter(); // logs 2
counter(); // logs 3

// 3. Array Reduce Transformation
// Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.
// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.
// If the length of the array is 0, the function should return init.
// Please solve it without using the built-in Array.reduce method.

const reduce = (nums, fn, init) => {
  res = init;

  nums.forEach((number) => {
    res = fn(res, number);
  });

  return res;
};
