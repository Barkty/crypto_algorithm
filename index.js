var store = window.localStorage.getItem('encrypt');

const load = () => {
    if (store != null) {
        
    }
}

const charToInt = () => {
    var input = document.getElementById('char').value;
    var newInput = parseInt(input);
    //console.log(newInput);
    var str = newInput.toString();
    //console.log(str);
    var out = []
    
    for (let i = 0; i < str.length; i++) {
        out.push((+str.charAt(i) + 7) % 10);
    }
    console.log(out); //logs [8, 9, 0, 1]
    const swapNum = (arr, indexA, indexB) => {
        var temp = arr[indexA];
        arr[indexA] = arr[indexB];
        arr[indexB] = temp;
    }
    swapNum(out, 0, 2);
    swapNum(out, 1, 3);
    console.log(out);
    let res = Number(out.join(''));
    console.log(res); // logs 0189

    var ul = document.getElementById('ul');
    ul.innerHTML = `The encrpyted integer is ${res}`;
}

const decrypt = () => {
    var input = document.getElementById('dec').value;
    var newInput = parseInt(input);
    //console.log(newInput);
    var str = newInput.toString();
    //console.log(str);
    var out = [];

    for (let i = 0; i < str.length; i++) {
        out.push(+str.charAt(i));
    }
    const swapNum = (arr, indexA, indexB) => {
        var temp = arr[indexA];
        arr[indexA] = arr[indexB];
        arr[indexB] = temp;
    }
    swapNum(out, 0, 2);
    swapNum(out, 1, 3);
    console.log(out);
    
    for (let i = 0; i < str.length; i++){

    }

    var lu = document.getElementById('lu');
    //lu.innerHTML = `The encrpyted integer is ${res}`;
}