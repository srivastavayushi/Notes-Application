// Asynchronous
setTimeout(() => {
  console.log("2 seconds are up");
}, 2000);

// Synchronous
const names = ["djkk", "ayuu", "devil", "mini"];
const shortNames = names.filter((name) => {
  return name.length <= 4;
});

// CallBack Function - Geocode

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      lattitude: 0,
      longitude: 0,
    };
    callback(data);
  }, 2000);
};

geocode("lucknow", (data) => {
  console.log(data);
});

// CallBack Function - Add

const add = (num1, num2, callback) => {
  setTimeout(() => {
    const sum = num1 + num2;
    callback(sum);
  }, 2000);
};
add(1, 4, (sum) => {
  console.log(sum); // Should print: 5
});
