/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((x) => {
    if (x.profession=="developer") {
      console.log(x);
    }
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
      arr = arr.filter((e) => e.profession == "admin");
  console.log(arr);
}
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr = [
  { id: 4, name: "ben", age: "21", profession: "admin" },
  { id: 5, name: "david", age: "22", profession: "developer" },
  { id: 6, name: "mary", age: "20", profession: "admin" },
];
    const concatenateArray = arr.concat(newArr);
  console.log(concatenateArray);

}
