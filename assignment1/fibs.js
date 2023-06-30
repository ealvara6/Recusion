const fibs = (num) => {
  let arr = [0, 1];
  for (let i = 1; i <= num ; i += 1) {
    arr.push(arr[i - 1] + arr[i]);
  }
  return arr;
}

// console.log(fibs(8));

const fibsRec = (num) => {
  let arr = [];

  if(num === 2) {
    return [0, 1];
  }
  if (num === 1)
    return [0];
  if(num <= 0 ) {
    return null;
  }
  
  arr = arr.concat(fibsRec(num - 1));
  arr.push(arr[num - 3] + arr[num - 2]);
  
  return arr;
}

console.log(fibsRec(10));