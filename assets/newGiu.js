//import {max} from "d3";

// varriables declaration
let table2Td = document.getElementById("table2").querySelectorAll("td");

let table2Th = document.getElementById("table2").querySelectorAll("th");

let dataYears = [];

let dataPrisPop = [];

let dataCountry = [];
let data = [];


let a = 59;
let b = 60;

// get the data from the DOM (years, prisons population & country)
function fillArrays() {
    table2Td.forEach(e => {
        if (isNaN(e.innerHTML)) {
            dataCountry.push(e.innerHTML);
        } else {
            dataPrisPop.push(e.innerHTML);
        }
    });
    
    let th = [];
    table2Th.forEach(e => {
        th.push(e.innerHTML);
    });
    
    dataYears.push(th[2]);
    dataYears.push(th[3]);
    
    for (let i = dataCountry.length-1; i >= 0; i--) {
        let myObject = new Object();
        myObject["Country"] = dataCountry[i];
        myObject["prisonYearOne"] = dataPrisPop[a];
        myObject["prisonYearTwo"] = dataPrisPop[b];
        data.push(myObject);
        a-=2;
        b-=2;
        
    }
    
    
    // dataCountry.forEach(e => {
    //     let myObject = new Object();
    //     myObject["Country"] = e;
    //     myObject["prisonYearOne"] = dataPrisPop[a];
    //     myObject["prisonYearTwo"] = dataPrisPop[b];
    //     data.push(myObject);
    //     a+=2;
    //     b+=2;
    // });
}
fillArrays()

data.forEach(d => d.prisonYearOne = +d.prisonYearOne)
data.forEach(d => d.prisonYearTwo = +d.prisonYearTwo)


let divTable2 = document.createElement("div");
divTable2.setAttribute("id", "divTable2");
let table2 = document.getElementById("table2");
let tagBefore = document.getElementById("mw-content-text");
tagBefore.insertBefore(divTable2, table2)

const svg = d3.select("#divTable2").append("svg");
svg.attr("width", "800")
    .attr("height", "500")

const width = "800";
const height = "500";
const margin = {top: 25, right: 20, bottom: 38, left: 136};
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.prisonYearOne)])
    .range([0, innerWidth]);

const yScale = d3.scaleBand()
    .domain(data.map(d => d.Country))
    .range([0, innerHeight])
    .padding(0.1);
    
const g = svg.append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

const yAxisG = g.append("g")
    .call(d3.axisLeft(yScale))
    .selectAll(".domain, .tick line")
    .remove();

// yAxisG.append("g")
//     .select("text")
//     .text("Country")
//     .attr("y", innerHeight / 2)
//     .append("text");

const xAxisG = g.append("g")
    .call(d3.axisBottom(xScale))
    .attr("transform", `translate(0,${innerHeight})`)
    .attr("color", "red");

// xAxisG.selectAll("line")
//     .tickSize(-100)

xAxisG.select(".domain").remove();

g.selectAll("text")
    .attr("color", "darkgreen");

xAxisG.select("text")
    .text("Prison population, average")
    .attr("x", innerWidth / 2)
    .attr("y", 25)
    .attr("font-size", ".8rem")
    .attr("color", "black")
    .attr("font-weight", "700")
    .append("text");

xAxisG.selectAll("line")
    .attr("y2", -innerHeight)
    
g.selectAll("rect")
    .data(data)
    .enter().append("rect")
        .attr("y", d => yScale(d.Country))
        .attr("width", d => xScale(d.prisonYearOne))
        .attr("height", yScale.bandwidth())
        .attr("fill", "steelblue");

    
g.append("text")
    .attr("y", -10)
    .attr("font-weight", "900")
    .text("Prison population, average per year (per 100,000 inhabitants)")
    
    
    
    const legend = g.append("g")
    .attr("transform", (dataYears, i) => `translate(0,${i * 20})`);
    
    legend.append("rect")
    .attr("x", -136)
    .attr("y", 425)
    .attr("width", 10)
    .attr("height", 10)
    .attr("fill", "steelblue");
    
    legend.append("rect")
    .attr("x", -136)
    .attr("y", 440)
    .attr("width", 10)
    .attr("height", 10)
    //.attr("fill", color);
    
    legend.append("text")
    .attr("x", -116)
    .attr("y", 431)
    .attr("dy", "0.35em")
    .text("2007-09")
    .attr("font-size", ".8em");
    
    legend.append("text")
    .attr("x", -116)
    .attr("y", 446)
    .attr("dy", "0.35em")
    .text("2010-12")
    .attr("font-size", ".8em");

g.selectAll("text")
    .attr("font-family", "sans-serif");