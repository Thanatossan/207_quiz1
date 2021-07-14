const func = require('../quiz')
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

const output1=[ { name: 'katsuya', age: 20 }, { name: 'ricardoMilos', age: 18 } ]
const output2=[ { name: 'Jordan ', age: 19 }, { name: 'Flowers', age: 20 } ]
const output3=[ { name: 'Francis ', age: 55 }, { name: 'Schneider', age: 51 } ]
const output4=[ { name: 'Mandy ', age: 30 }, { name: 'Cook', age: 30 } ]
const output5=[ { name: 'sinovac', age: 3 } ]
test('outputs the correct object 1', () => {
    expect(func(members1)).toEqual(output1);
});
test('outputs the correct object 2', () => {
expect(func(members2)).toEqual(output2);
});
test('outputs the correct object 3', () => {
expect(func(members3)).toEqual(output3);
});
test('outputs the correct object 4', () => {
    expect(func(members4)).toEqual(output4);
});
test('outputs the correct object 5', () => {
expect(func(members5)).toEqual(output5);
});