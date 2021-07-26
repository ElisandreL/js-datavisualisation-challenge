
let tableTd = [];
tableTd = document.getElementById("table1").querySelectorAll("td");
let tableTdData = [];
let tableJavscCountry =[];
let tableData =[];
let data =[];
let x =0;

for (let i = 0; i<tableTd.length; i++) {
 
  tableTdData.push(tableTd[i].innerHTML);
 
}


for (let i = 0; i < tableTdData.length; i++) {

 if(tableTdData.indexOf(tableTdData[i]) % 12 == 0) {

 tableJavscCountry.push(tableTdData[i]);
 
 }

else {
 tableData.push(tableTdData[i]);
}
}
  console.log(tableJavscCountry);


let tableYears = document.getElementById("table1").querySelectorAll("th");
let tableJavscYears =[];

for (i=5; i <= 15; i++) {

    tableJavscYears.push(tableYears[i].innerHTML);
}

console.log(tableJavscYears);
console.log(tableData);


let a = 0;
tableJavscCountry.forEach(e => {
    let myObject = new Object();
    myObject["Country"] = e;
   tableJavscYears.forEach(element => {
       myObject[element] = tableData[a];
       a++;
   });
   data.push(myObject);
 
})
console.log(data);

let div = document.createElement("div");
div.setAttribute("id", "div")
let table1 = document.getElementById("table1");

document.getElementById("mw-content-text").insertBefore(div, table1);


let margin = {
    top: 20,
    right: 20,
    bottom: 50,
    left: 100,
};


//const xValue = d => d.data;
//const yValue = d => d.data;
const innerWidth = 1000 - margin.left - margin.right;
const innerHeight =  900 - margin.top - margin.bottom;

//let max = d3.max(d3.values(data)); 
 //let values = d3.values(data);
//console.log(d3);

let xScale = d3.scaleLinear()
            .domain([0, 7000])
            .range([0,innerWidth]);




 let yScale = d3.scaleBand()
                 .domain(data.map(d => d.Country))
                 .range([0,innerHeight]);
                 
         
console.log(d3.greatest(data));

  let svg = d3.select("#div")
               .append("svg")
                   .attr("width", 1000)
                   .attr("height", 900)
                   .style("background-color" , 'with');
 
             
                              
const g = svg.append('g')
    .attr("transform", `translate(${margin.left}, ${margin.top})`);


 g.append('g')
      .call(d3.axisLeft(yScale))
      .selectAll('domain')
        .remove();

 g.append('g')
      .call(d3.axisBottom(xScale))
      .attr("transform", `translate(0,${innerHeight})`);
     
let bars = svg.selectAll('rect')
               .data(data)
               .enter()
               .append('rect')
              
  //.attr('y', d => yScale(yValue(d)))
  //.attr('width',d => xScale(xValue(d)))
  //.attr('height', d => yScale.bandwidth());

bars.attr("x", 10)
    .attr("y", function(d, i){return 10 + i*40})
    .attr("width", function(d){return d})
    .attr("height", 30);


