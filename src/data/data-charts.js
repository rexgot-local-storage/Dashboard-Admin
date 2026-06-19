//multi Line Charts
const xMCValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

new Chart("MC", {
    type: "line",
    data: {
        labels: xMCValues,
        datasets: [{
            data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
            borderColor: "red",
            fill: false
        }, {
            data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
            borderColor: "green",
            fill: false
        }, {
            data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
            borderColor: "blue",
            fill: false
        }]
    },
    options: {
        legend: { display: false }
    }
});
//

//Line Charts
const xLCValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
const yLCValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

new Chart("LC", {
    type: "line",
    data: {
        labels: xLCValues,
        datasets: [{
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.1)",
            data: yLCValues
        }]
    },
    options: {
        legend: { display: false },
        scales: {
            yAxes: [{ ticks: { min: 6, max: 16 } }],
        }
    }
});
//

//Pie Charts
var xPCValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yPCValues = [55, 49, 44, 24, 15];
var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
];

new Chart("PC", {
    type: "pie",
    data: {
        labels: xPCValues,
        datasets: [{
            backgroundColor: barColors,
            data: yPCValues
        }]
    },
    options: {
        title: {
            display: true,
            text: "World Wide Wine Production 2018"
        }
    }
});
//

//Doughnut Charts
var xDCValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yDCValues = [55, 49, 44, 24, 15];
var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
];

new Chart("DC", {
    type: "doughnut",
    data: {
        labels: xDCValues,
        datasets: [{
            backgroundColor: barColors,
            data: yDCValues
        }]
    },
    options: {
        title: {
            display: true,
            text: "World Wide Wine Production 2018"
        }
    }
});