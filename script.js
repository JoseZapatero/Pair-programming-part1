// Question 1 
function createHelloWorld() {
  return function () {
    return "hello world"
  }
}

let f = createHelloWorld()
console.log(f(2));

// Question 2 

let arr1 = [5, 6, 7, 8, 9, 10]

let arr2 = arr1.map((x) => x ** 2)
console.log(arr2);

//Question 3
var debounce = function (fn, t) {
  let timeoutId; // store the timeout ID

  return function (...args) {
    clearTimeout(timeoutId); // clear any previous timeout

    timeoutId = setTimeout(() => {
      fn.apply(this, args); // execute the function after the delay
    }, t);
  };
};

const log = debounce(console.log,);
log('Hello'); // execution cancelled
log('Hello'); // execution cancelled
log('Hello'); // 'Hello' will be logged after a delay of 100ms   

//Thursday Question

// Question 1  

function createMultiplyer(value) {
  return value * 5
}

console.log(createMultiplyer(10));


//Q3

function expect(val) {
  return {
    toBe: function (val2) {
      if (val === val2) {
        return "value: true"
      } else {
        throw new Error("Not equal")
      }
    },

    notToBe: function (val2) {
      if (val === val2) {
        throw new Error("They are equal")
      } else {
        return "value: true"
      }
    }
  }
}
console.log(expect(5).notToBe(9));
// console.log(expect(5).toBe(9)); 
console.log(expect(5).toBe(5));

console.log(expect(5).notToBe(5));

