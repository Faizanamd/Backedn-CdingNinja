

function sum(a,b){
    return a+b;
}

function div(a,b){
    return a/b;
}

// First way to export module 

module.exports = {
    add:sum,
    div:div,
}