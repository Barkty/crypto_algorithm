const addNewRow = () => {
    let row = document.createElement('tr');
    //console.log(row);
    let text = `<tr>
                    <td>
                        <div>
                            <input type="text" name="char" class="char" id="item">
                        </div>
                    </td>
                    <td>
                        <div>
                            <input type="text" name="char" class="char" id="char">
                        </div>
                    </td>
                </tr>`;
    //console.log(text);
    row.innerHTML = text;
    //row.appendChild(text);
    //console.log(row);            
    let form = document.querySelector('#salesForm');
    form.innerHTML += text;
    //form.innerHTML = row;
    console.log(form);
}

const handleSubmit = () => {
    let amount1 = document.getElementById('amount').value;
    let amount2 = document.getElementById('amt').value;
    let amount3 = document.getElementById('price').value;

    console.log(amount1, amount2, amount3);

    let amt1 = parseFloat(amount1)
    let amt2 = parseFloat(amount2)
    let amt3 = parseFloat(amount3)

    //Initial Salary
    let initialSalary = 200;

    //Total of sales
    let sales = amt1 + amt2 + amt3;

    //percentage of sales
    let per = parseInt((9 / 100) * sales);

    let totalSalary = initialSalary + per;
    console.log(totalSalary);
    let out = document.getElementById('lu');
    out.innerHTML = `Total salary for the month is ${totalSalary}`;
}