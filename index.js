




let ages = [3,9,23,64,2,8,28,93];
console.log("ages: ", ages);


let age = (ages[ages.length-1] ) - (ages[0]);
//console.log(subs);
console.log("subs last element vs first elment value ", age);
ages.push(100);
console.log("ages after pushing", ages);
//initate var for average and sum to 0 so we can push it
let sumAges =0;

ages.forEach(num => {
    sumAges += num;
    console.log(sumAges)
})
console.log("total",sumAges);

//average = sumAges /length of ages
 console.log("average is:", average = sumAges / ages.length);

// crate an array
const names = ['Sam','Tommy','Tim','Sally','Buck','Bob'];
let totalcharact = 0;

names.forEach(avgnum=>{
    console.log("name:" ,avgnum,"", "number of characters", avgnum.length);
    totalcharact += avgnum.length;
  
})
console.log("Sum of all characters:",totalcharact);
console.log("average of characters:",totalcharact/names.length)

//2B

let concatNames ="";
for (i=0;i<names.length;i++){
    concatNames = concatNames.concat(" " + names[i])
    console.log("Names concatenated",concatNames);
}

//3, the last element of an array is accesssible with the method:

console.log("Last lement of names array is: ",names[names.length-1])

//4 first element of an array

console.log("first element of names array is:", names[0]);


//5
let namesLengths = [];
for ( i =0; i < names.length;i++){
    namesLengths.push(names[i].length)
    console.log("Name length array:" ,namesLengths);
}

//6
let total = 0
for (i=0;i<namesLengths.length;i++){
      total += namesLengths[i];
      console.log("total characters:",total);
}

//7
let yo = "";
function concatWords(word,n){
   let concat = word.repeat(n);
   console.log(concat);
    }
concatWords("Hello",3);

//8

function fullName(firstName,lastName){
  let fullName = firstName + " " + lastName;
  console.log(fullName);
}
fullName("Dany","Louis");

//9

let numbers = [100,200,300,400]
let numbers2 = [5,2,53,1,3,2]

function sumArr(array){
    let total=0;
    for (i=0;i<array.length;i++){
        total += array[i];
        console.log("total",total);
    }
    if (total > 100){
        console.log("totalllll",total,true)
        return "true";
}}
sumArr(numbers);

//10

 function averageOfArrays(num){
    let totals = 0;

    for(i=0;i<num.length;i++){
        totals += num[i];
        console.log("total: is:" , totals );
    }
   console.log( "average:", totals/num.length);
 }
averageOfArrays(numbers);

//11

let numbers3 = [100,100,100];
let numbers4 = [100,100,99];
function twoAverages(arr1,arr2){
    let total1 = 0;
    let total2 =0;

    arr1.forEach(num=>{
        total1 +=num;
        console.log("total 1:",total1);
    })
    arr2.forEach(num=>{
        total2 +=num;
        console.log("total 2:",total2);
    })
    let avg1 = total1/arr1.length;
    let avg2 = total2/arr2.length
console.log(avg1)
console.log(avg2)
if (avg1>avg2){
    console.log(true);
}

}

twoAverages(numbers3,numbers4);


//12

function willBuyDrink(isHotOutside,moneyInPocket){

   let buyDrink = (isHotOutside === true && moneyInPocket > 10.50);
   console.log("parameters",isHotOutside,moneyInPocket)
    console.log("buy a drink: ",buyDrink);
    return buyDrink;
    }


willBuyDrink(true,15);