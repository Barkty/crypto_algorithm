const predictWorldPopulation = () => {
    const INITIAL_WORLD_POPULATION = 79e8;
    const GROWTH_RATES = 1.05 / 100;
    const INITIAL_YEAR = 2021;
    const yearsOfPrediction = 75;
    let currentWorldPopulation = INITIAL_WORLD_POPULATION;
    let currentYear = INITIAL_YEAR;
    let iSDoubleDetected = false;
    let table = ``;
    const tableHead = `<thead>
        <tr>
            <th>S/N</th>
            <th>Year</th>
            <th>Anticipated World Population</th>
        </tr>
                        </thead>`;

    for (let i = 1; i <= yearsOfPrediction; i++) {
        currentWorldPopulation += Math.floor(currentWorldPopulation * GROWTH_RATES);
        currentYear = INITIAL_YEAR + i;
        //console.log(currentYear, currentWorldPopulation);

        let tableBody = `
            <tbody>
                <tr>
                    <td>${i}</td>
                    <td>${currentYear}</td>
                    <td>${currentWorldPopulation}</td>
                </tr>
            </tbody>
        `;

        table += tableBody;

        const TABLE = `<table id='populationTable'>` + tableHead + table + `</table>`;
        document.getElementById('integer').innerHTML = TABLE;
        
        if (currentWorldPopulation >= (INITIAL_WORLD_POPULATION * 2)) {
            if(iSDoubleDetected) continue;
            // console.log(`Population doubled in the year ${currentYear} with populaton ${currentWorldPopulation}`);
            iSDoubleDetected = true;
        }
    }
    
    // let populationTable = document.getElementById('populationTable');
    // for (let i = 0, row; row = populationTable.rows[i]; i++) {
    //     if(parseFloat(row.cells[i].innerText) == ){}
    // }
}