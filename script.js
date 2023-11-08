var debounce = function(fn, t) {
    let timeoutId; // store the timeout ID
  
    return function(...args) {
      clearTimeout(timeoutId); // clear any previous timeout
  
      timeoutId = setTimeout(() => {
        fn.apply(this, args); // execute the function after the delay
      }, t);
    };
  };
  
  const log = debounce(console.log, );
  log('Hello'); // execution cancelled
  log('Hello'); // execution cancelled
  log('Hello'); // 'Hello' will be logged after a delay of 100ms  