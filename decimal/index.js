const charToInt = () => {
    var input = document.getElementById('char').value;
    //console.log(input);
    var out = [];
    var val = [];
    var position = 1;

    for (let i = 0; i < input.length; i++) {
        out.push((+input.charAt(i) % 10) * (position *= 2));
    }
    //console.log(out); //logs [8, 9, 0, 1]

    for (let i = 0; i < out.length; i++) {
        val.push(+out[i] / 2);
    } 
    //console.log(val); 
    
    var x = 0;

    for (let i = 0; i < val.length; i++) {
        x += val[i];
    }
    //console.log(x);

    var ul = document.getElementById('ul');
    ul.innerHTML = `The decimal equivalent of ${input} is ${x}`;
}