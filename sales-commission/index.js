const addNewRow = () => {
    var row = document.createElement('tr');
    //console.log(row);
    var text = `<tr>
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
    var form = document.querySelector('#salesForm');
    form.appendChild(row);
    //form.innerHTML = row;
    console.log(form);
}

const handleSubmit = () => {
    var mile1 = document.getElementById('mile1').value;
    var mile2 = document.getElementById('mile2').value;
    var mile3 = document.getElementById('mile3').value;
    
    var gas1 = document.getElementById('gallon1').value;
    var gas2 = document.getElementById('gallon2').value;
    var gas3 = document.getElementById('gallon3').value;
    console.log(mile1, mile2, mile3);
    console.log(gas1, gas2, gas3);

    let amt1 = parseFloat(mile1)
    let amt2 = parseFloat(mile2)
    let amt3 = parseFloat(mile3);

    let gal1 = parseFloat(gas1)
    let gal2 = parseFloat(gas2)
    let gal3 = parseFloat(gas3);

    //Calculate mileage
    var mileage1 = gal1 / amt1;
    var mileage2 = gal2 / amt2;
    var mileage3 = gal3 / amt3;

    var totalMileage = mileage1 + mileage2 + mileage3;
    console.log(mileage1);
    console.log(mileage2);
    console.log(mileage3);
    console.log(totalMileage);
    var out = document.getElementById('lu');
    out.innerHTML = `First mileage is ${mileage1}. <br> Second mileage is ${mileage2}. <br>Third mileage is ${mileage3}. <br> Total mileage is ${totalMileage}`;
}