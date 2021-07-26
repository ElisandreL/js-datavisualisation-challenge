// IMPORT CANVAS
//import { Chart, LineController, LineElement, PointElement, LinearScale, Title } from `chart.js`
//Chart.register(LineController, LineElement, PointElement, LinearScale, Title);

// CANVAS CREATION

const newCanvas = document.createElement("canvas");
//var currentHead = document.getElementById('bodyContent');
//document.getElementById("content").insertBefore(newCanvas, currentHead);
newCanvas.appendChild('chart')
let chartParent = document.getElementsById('bodyContent').parentNode

newCanvas.setAttribute('width', '1000px');
newCanvas.setAttribute('height', '500px');
newCanvas.setAttribute('id', 'chartCanvas');
newCanvas.getContext('2d');
newCanvas.style.border= 'black 3px solid'



/*const xhr = new XMLHttpRequest;

xhr.open('GET', 'https://canvasjs.com/services/data/datapoints.php', true);

xhr.onload = function() {
    if(this.status === 200) {
        console.log(JSON.parse(this.responseText));
    }
}

xhr.send();



*/








  // ANIMATION 

/*const totalDuration = 10000;
const delayBetweenPoints = totalDuration / data.length;
const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
const animation = {
  x: {
    type: 'number',
    easing: 'linear',
    duration: delayBetweenPoints,
    from: NaN, // the point is initially skipped
    delay(ctx) {
      if (ctx.type !== 'data' || ctx.xStarted) {
        return 0;
      }
      ctx.xStarted = true;
      return ctx.index * delayBetweenPoints;
    }
  },
  y: {
    type: 'number',
    easing: 'linear',
    duration: delayBetweenPoints,
    from: previousY,
    delay(ctx) {
      if (ctx.type !== 'data' || ctx.yStarted) {
        return 0;
      }
      ctx.yStarted = true;
      return ctx.index * delayBetweenPoints;
    }
  }
};*/

// DATA 

  // FETCH
const data1 = [];
const data2 = [];
fetch('https://canvasjs.com/services/data/datapoints.php')
.then(response => response.json())
.then(data => { 
  data.forEach(value => {
      data1.push(value[0]);
      data2.push(value[1])
    })
  });
  
console.log(data2);


const dataConst = {
  labels: data1,
  datasets: [{
    label: 'Dataset',
    data: data2,
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

const config = {
  type: 'line',
  data: dataConst,
};
/*var ctx = document.getElementById('chartCanvas');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});*/

/*for (let i = 0; i < 1000; i++) {
  prev += 5 - Math.random() * 10;
  data.push({x: i, y: prev});
  prev2 += 5 - Math.random() * 10;
  data2.push({x: i, y: prev2});
}

const config = {
  type: 'line',
  data: {
    datasets: [{
      borderColor: 'red',
      borderWidth: 1,
      radius: 0,
      data: data2,
    },
    /*{
      borderColor: 'blue',
      borderWidth: 1,
      radius: 0,
      data: data2,
    }]
  },
  options: {
    //animation,
    interaction: {
      intersect: false
    },
    plugins: {
      legend: false
    },
    scales: {
      x: {
        type: 'linear'
      }
    }
  }
};

var myChart = new Chart(
  document.getElementById('chartCanvas'),
  config
    );*/