function delay(timeDelay) {
  return new Promise(resolve => setTimeout(resolve, timeDelay))
}

async function addValueToInput(value, callback, timeDelay) {
  await delay(timeDelay);
  callback(value)
}

async function animateArrayitem(arr, callback, itemFunc, timeDelay) {
  for (const item of arr) {
    await callback(item, itemFunc, timeDelay)
  }
}

async function animateNumberValue(array, setFunc, timeDelay) {

  await delay(2000);

  const arrValue = array.toString().split("");

  const valuesToAnim = arrValue.map((item, index, arr) => {
    let result = [];
    result.push(item);
    for (let i = index - 1; i >= 0; i--) {
      result.unshift(arr[i]);
    }
    return result.join("");
  });

  await animateArrayitem(valuesToAnim, addValueToInput, setFunc, timeDelay)
}

async function animateImput(array, callback, timeDelay) {
  await animateArrayitem(array, animateNumberValue, callback, timeDelay)
}
