//find members who age is more than average of the group
const members1 = [ 
    {name: "katsuya", age: 20}, 
    {name: "ricardoMilos", age: 18}, 
    {name: "jody", age: 15}
 ]
 const members2 = [ 
    {name: "Nash", age: 6}, 
    {name: "Carr", age: 3}, 
    {name: "Jordan ", age: 19}, 
    {name: "Flowers", age: 20}
 ]
 const members3 = [ 
    {name: "Francis ", age: 55}, 
    {name: "Boyd", age: 25}, 
    {name: "Priscilla ", age: 38}, 
    {name: "Ward", age: 40},
    {name: "Schneider", age: 51},
 ]
 const members4 = [ 
    {name: "Daniels", age: 20}, 
    {name: "Rios", age: 20}, 
    {name: "Mandy ", age: 30}, 
    {name: "Cook", age: 30}
 ]
 const members5 = [ 
    {name: "sinovac", age: 3}, 
    {name: "astra", age: 2}, 
    {name: "pfizer", age: 2}, 
    {name: "j&j", age: 1}
 ] 
const findAvgMember= (input)=>{
    initialValue = 0
    const average = input.reduce((sum,currentAge)=> sum+currentAge.age , initialValue) / input.length
    const result = input.filter((member)=> member.age > average)
    return result
}

console.log(findAvgMember(members1))
console.log(findAvgMember(members2))
console.log(findAvgMember(members3))
console.log(findAvgMember(members4))
console.log(findAvgMember(members5))
module.exports = findAvgMember