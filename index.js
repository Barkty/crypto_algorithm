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
    let ratePerHour = document.getElementById('amount').value;
    let hoursOfWork = document.getElementById('hour').value;

    console.log(hoursOfWork);
    console.log(ratePerHour);

    let hr1 = parseFloat(hoursOfWork);
    let rates = parseFloat(ratePerHour);
    let out = document.getElementById('lu');

    let extraHours = hr1 - 40;
    let salary = (40 * rates) + (extraHours * rates * 1.5);

    out.innerHTML = `Total salary for the month is ${salary}`;
}