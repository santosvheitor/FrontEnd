console.log("Hello from site.js");

let fleet = [

    {
        mf: 'Ford',
        model: 'Fiesta',
        engine: '1.2',
        colour: 'Pink',
        type: 'Sedan'
    },
    {
        mf: 'Volkswagen',
        model: 'Golf',
        engine: '1.6',
        colour: 'Red',
        type: 'Hatchback'
    },
    {
        mf: 'Ford',
        model: 'Kuga',
        engine: '1.3',
        colour: 'Blue',
        type: 'Hatchback'
    },
    {
        mf: 'Nissan',
        model: 'Navara', 
        Engine: 1.2, 
        colour: 'Grey', 
        type: 'Hatchback'
    },
    { 
        mf: 'Nissan', 
        model: 'Qashai', 
        Engine: 1.3, 
        colour: 'Black', 
        type: 'pickup' 
    },
    { 
        mf: 'Nissan', 
        model: 'Juke', 
        Engine: 1.4, 
        colour: 'Red', 
        type: 'Hatchback' 
    },
    { 
        mf: 'Opel', 
        model: 'Corsa', 
        Engine: 1.4, 
        colour: 'Red', 
        type: 'Hatchback' 
    },
    { 
        mf: 'Opel', 
        model: 'Astra', 
        Engine: 1.4, 
        colour: 'Red', 
        type: 'Hatchback' 
    },
    { 
        mf: 'Opel', 
        model: 'Mokka', 
        Engine: 1.4, 
        colour: 'Red', 
        type: 'Hatchback' 
    }
];



console.log(fleet[0].mf); //Ford
console.log(fleet[0].model);  //Fiesta
console.log(fleet[1].mf); //Volkswagen
console.log(fleet[1].model);  //Golf
console.log(fleet[2].mf); //Ford
console.log(fleet[2].model);  //Kuga

for (let i = 0; i < fleet.length; i++) {
    console.log(fleet[i].mf); // Ford, Volksvagen, Ford
    console.log(fleet[i].model); //Fiesta, Golf, Kuga
    console.log(fleet[i].engine); //1.2, 1.6, 1.3
    console.log(fleet[i].colour);// Pink, Red, Blue
    console.log(fleet[i].type); // Sedan, Hatchback, Hatchback

}

for (let car of fleet) {
    console.log(`${car.mf} ${car.model} ${car.engine} ${car.colour} ${car.type}`);
}

function loadFleet() {
    const tbody = document.querySelector('#fleetTable tbody');

    for (let car of fleet) {
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${car.mf}</td>
        <td>${car.model}</td>
        <td>${car.engine}</td>
        <td>${car.colour}</td>
        <td>${car.type}</td>
    `;

        tbody.appendChild(row);

    }
}



