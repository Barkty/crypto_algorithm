var store = window.localStorage.getItem('encrypt');

const load = () => {
    if (store != null) {
        
    }
}

const encrypt = (n) => {
    
    //console.log(str);
    var out = []
    
    for (let i = 0; i < n.length; i++) {
        out.push((+n.charAt(i) + 7) % 10);
    }
    //console.log(out); //logs [8, 9, 0, 1]
    const swapNum = (arr, indexA, indexB) => {
        var temp = arr[indexA];
        arr[indexA] = arr[indexB];
        arr[indexB] = temp;
    }
    swapNum(out, 0, 2);
    swapNum(out, 1, 3);
    //console.log(out);

    return Number(out.join(''));
}

const decrypt = (n) => {
    var out = [];
    let res = [];
    let sub = [];
    let int = [];
    for (let i = 0; i < n.length; i++) {
        out.push(+n.charAt(i));
    }
    const swapNum = (arr, indexA, indexB) => {
        var temp = arr[indexA];
        arr[indexA] = arr[indexB];
        arr[indexB] = temp;
    }
    swapNum(out, 0, 2);
    swapNum(out, 1, 3);

    for (let i = 0; i < out.length; i++){
        res.push((10 * 1) + (+out[i]))
    }
    for (let i = 0; i < res.length; i++){
        sub.push(+res[i] - 7);
    }

    for (let i = 0; i < sub.length; i++){
        if(sub[i] > 9) {
            int.push(+sub[i] - 10);
        } else {
            int.push(+sub[i]);
        }
    }

    return Number(int.join(''));
}

//Create another function that calls the two functions
const handleClick = (func, isEncrypt) => {
    const elementId = isEncrypt ? 'char' : 'dec';
    const input = document.getElementById(elementId).value;
    let parsedInput = parseInt(input);
    let str = parsedInput.toString();
    let res = func(str);

    const displayResultElementId = isEncrypt ? 'ul' : 'lu';
    let displayResult = document.getElementById(displayResultElementId);
    displayResult.innerHTML = `The ${isEncrypt ? 'encrypted' : 'decrypted'} is ${res}`;
}