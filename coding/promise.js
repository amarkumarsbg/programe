let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let timer = true;
    if (timer) {
      resolve("promise full filled");
    } else {
      reject("Promise false");
    }
  }, 1000);
});

myPromise
  .then((res) => console.log(res))
  .catch((error) => console.error(error));
