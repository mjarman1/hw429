function alphabeticalOrder(arr) {
    // Add your code below this line
    return arr.sort(function(a, b) {
      return a === b ? 0 : a < b ? -1 : 1;
    });
    // Add your code above this line
  }
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);


  var globalArray = [5, 6, 3, 2, 9];
  function nonMutatingSort(arr) {
    // Add your code below this line
    return [].concat(arr).sort(function(a, b) {
      return a - b;
    });
    // Add your code above this line
  }
  nonMutatingSort(globalArray);





// Add your code below this line

var filteredList = watchList
  .map(function(e) {
    return { title: e["Title"], rating: e["imdbRating"] };
  })
  .filter(e => e.rating >= 8);

console.log(filteredList);



function splitify(str) {
    // Add your code below this line
    return str.split(/\W/);
    // Add your code above this line
  }
  splitify("Hello World,I-am code");



  function sentensify(str) {
    // Add your code below this line
    return str.split(/\W/).join(" ");
    // Add your code above this line
  }
  sentensify("May-the-force-be-with-you");



  // the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
  return title
    .split(" ")
    .filter(substr => substr !== "")
    .join("-")
    .toLowerCase();
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"




function checkPositive(arr) {
    // Add your code below this line
  
    return arr.every(val => val > 0);
    // Add your code above this line
  }
  checkPositive([1, 2, 3, -4, 5])



  function checkPositive(arr) {
    return arr.some(elem => elem > 0);
  }
  checkPositive([1, 2, 3, -4, 5]);




  function add(x) {
    // Add your code below this line
    return function(y) {
      return function(z) {
        return x + y + z;
      };
    };
    // Add your code above this line
  }
  add(10)(20)(30);