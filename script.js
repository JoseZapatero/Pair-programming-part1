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
}

const log = debounce(console.log, 900);
log("Hello"); // execution cancelled
log("Hello"); // execution cancelled
log("Hello"); // 'Hello' will be logged after a delay of 100ms;

// Question 1 ( Thursday )
function createMultiplier(value) {
  return value * 5;
}
console.log(createMultiplier(20));

// Question 2(Thursday)
class Bookshelf {
  constructor() {
    this.books = [];
  }
  addBook(newBook) {
    this.books.push(newBook);
  }

  removeBook(oldBook) {
    let indexOfOldBook = this.books.indexOf(oldBook);
    this.books.splice(indexOfOldBook, 1);
  }

  getTotalBooks(){
    return this.books.length;
  }
}
const bookshelf = new Bookshelf(); 
bookshelf.addBook("The Great Gatsby"); 
bookshelf.addBook("To Kill a Mockingbird"); 
bookshelf.addBook("Pride and Prejudice"); 
console.log(bookshelf.getTotalBooks()); // 3 
bookshelf.removeBook("To Kill a Mockingbird"); 
console.log(bookshelf.getTotalBooks()); // 2 
console.log(bookshelf.books);

//Q3

let expect = (val) => {

  let toBe = (val2) => {
    if (val === val2) {
      return "value: true"
    } else {
      throw new Error("Not equal")
    }
  }

  let notToBe = (val2) => {
    if (val === val2) {
      throw new Error("They are equal")
    } else {
      return "value: true"
    }
  }
  
  return {}
} 

console.log(expect(5).notToBe(5));

