import { error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

// 1

const keyEl = document.getElementById("#key")

const keys = [
    "q",
    "w",
    "e",
    "n",
    "i",
    "p",
]

let currentKeyIndex = Math.floor(Math.random() * keys.length)

keyEl.textContent = keys[currentKeyIndex]

document.addEventListener("keydown", onKeyDown)

function onKeyDown(event){
    console.log(event.key)
    if (event.key === keys[currentKeyIndex]) {
        currentKeyIndex += 1
        keyEl.textContent = keys[currentKeyIndex]
    } else{
        error({
            text: "ви натиснули невірну клавішу"
        });
    }
}



// 2

const chartData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    datasets: [{
    label: 'Продажі за останній місяць',
    data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
    backgroundColor: '#2196f3',
    borderColor: '#2196f3',
    borderWidth: 1
    }]
    };

    const salesChartCanvas = document.getElementById('sales-chart')
    const salesChart = new Chart(salesChartCanvas, {
    type: 'line',
    data: chartData
  });
