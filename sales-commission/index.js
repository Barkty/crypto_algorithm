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
    alert('values');
}