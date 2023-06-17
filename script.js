/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  let developer= arr.map((x) => {
    if (x.profession=="developer") {
      return x;
    }
    console.log(developer);
  });

  
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((x) => {
    if (x.profession=="developer") {
      console.log(x);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const newEmployee = {id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(newEmployee);
  console.log(arr);

}

function removeAdmin() {
  //Write your code here, just console.log
    let noAdmin=  arr = arr.filter((e) =>
      if (e.profession !== "admin"){
      return e;
    };
  console.log(noAdmin);
}
}

 function concatenateArray() {
  //Write your code here, just console.log
  //Create another array with three different objects
  let anotherArray = [
    { id: 5, name: "raj", age: "21", profession: "tester" },
    { id: 6, name: "priya", age: "22", profession: "designer" },
    { id: 7, name: "ali", age: "23", profession: "manager" },
  ];
  //Concatenate the two arrays using the concat method
  let concatenatedArray = arr.concat(anotherArray);
  console.log(concatenatedArray);
}
