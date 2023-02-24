var kittens = ["Milo", "Otis", "Garfield"]; 


function destructivelyPrependKitten(name){
    kittens.unshift(name);
}

function destructivelyAppendKitten(name){
kittens.push (name);
}
function appendKitten(name){
  return  kittens.concat(name);
}
function destructivelyRemoveFirstKitten(name){
    kittens.shift(name);
}
function destructivelyRemoveLastKitten(name){
    kittens.pop(name);
}
function prependKitten(name){
    const newKittens=[name, ...kittens];
return newKittens;
}
function removeLastKitten(name){
const cats= kittens.slice(0,kittens.length-1);
return cats;
}
function removeFirstKitten(name){
    const cats= kittens.slice(1)
    return cats
}