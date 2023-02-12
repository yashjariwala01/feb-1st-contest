/** @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 }
  ];
  
  function PrintStudentswithMap() {
    //Write your code here , just console.log
    arr.map(obj => {
      if(obj.marks > 50){
        console.log(obj);
      }
    });
  }
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    // const newArr = [];
    arr.forEach(element => {
      if(element.marks > 50){
        console.log(element);
      }
    });
    // console.log(newArr);
  }
  
  function addData() {
    //Write your code here, just console.log
    let obj = {id:4,name:"susan",age:"20",marks:45};
    arr.push(obj);
    console.log(arr);
  }
  
  function removeFailedStudent() {
    //Write your code here, just console.log
    for(let i = 0; i <= arr.length; i++){
      if(arr[i].marks <= 50){
        arr.splice(i, i + 1);
      }
    }
    console.log(arr);
  }
  
  
  function concatenateArray() {
    //Write your code here, just console.log
    let oldId = arr.length;
    let arr1 = [
      { id: oldId + 1, name: "Yash", age: "22", marks: 85 },
      { id: oldId + 2, name: "Shivani", age: "28", marks: 80 },
      { id: oldId + 3, name: "Divyansh", age: "24", marks: 50 },
    ];
    let array = arr.concat(arr1);
    console.log(array)
  }