var store = window.localStorage.getItem('encrypt');

const charToInt = () => {

    //Get the user input
    var input = document.getElementById('char').value;
    var out = [];

    //Validate if integer is 5 digits
    if (input.length != 5) {
        var ul = document.getElementById('ul');
        ul.innerHTML = `Integer must be five digits`;
    } else {
        for (let i = 0; i < input.length; i++) {
            out.push(+input.charAt(i));
        }
        console.log(out); //logs [8, 9, 0, 1]
        
        //Check if integer is a palindrome
        const swapNum = (arr, indexA, indexB, indexC, indexD) => {
            if (arr[indexA] == arr[indexB] && arr[indexC] == arr[indexD]) {
                //console.log('Integer is a palindrome');
                var ul = document.getElementById('ul');
                ul.innerHTML = `Integer is a palindrome`;
                return true;
            } else {
                //console.log('Integer is not a palindrome');
                var ul = document.getElementById('ul');
                ul.innerHTML = `Integer is not a palindrome`;
                return false;
            }
        }
        swapNum(out, 0, 4, 1, 3);
    }

}