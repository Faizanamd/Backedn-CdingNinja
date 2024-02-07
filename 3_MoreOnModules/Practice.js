const characters = [
    {name:'Faia', age: 23},
    {name:'Faia2', age: 21},
    {name:'Faia3', age: 16},
];


let ans = Number.MIN_VALUE;

characters.forEach((character) =>{
    if(character.age > ans ) ans = character.age;
});

console.log(ans);