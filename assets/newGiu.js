//import {max} from "d3";

// varriables declaration
let table2Td = document.getElementById("table2").querySelectorAll("td");

let table2Th = document.getElementById("table2").querySelectorAll("th");

let dataYears = [];

let dataPrisPop = [];

let dataCountry = [];
let dataG = [];


let aG = 59;
let bG = 60;




// get the data from the DOM (years, prisons population & country)
function fillArrays() {
    table2Td.forEach(e => {
        if (isNaN(e.innerHTML)) {
            dataCountry.push(e.innerHTML.replace("<br>", ""));
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
        myObject["prisonYearOne"] = dataPrisPop[aG];
        myObject["prisonYearTwo"] = dataPrisPop[bG];
        dataG.push(myObject);
        aG-=2;
        bG-=2;
    }
    }
fillArrays()

dataG.forEach(d => d.prisonYearOne = +d.prisonYearOne)
dataG.forEach(d => d.prisonYearTwo = +d.prisonYearTwo)
    
    
let divTable2 = document.createElement("div");
divTable2.setAttribute("id", "divTable2");
let table2 = document.getElementById("table2");
let tagBefore = document.getElementById("mw-content-text");
tagBefore.insertBefore(divTable2, table2)

const svgG = d3.select("#divTable2").append("svg");
svgG.attr("width", "800")
    .attr("height", "500")

const width = "800";
const height = "500";
const marginG = {top: 25, right: 20, bottom: 38, left: 136};
const innerWidthG = width - marginG.left - marginG.right;
const innerHeightG = height - marginG.top - marginG.bottom;

const xScaleG = d3.scaleLinear()
    .domain([0, d3.max(dataG, d => d.prisonYearOne)])
    .range([0, innerWidthG]);

const yScaleG = d3.scaleBand()
    .domain(dataG.map(d => d.Country))
    .range([0, innerHeightG])
    .padding(0.1);
    
const gG = svgG.append("g")
    .attr("transform", `translate(${marginG.left},${marginG.top})`);

const yAxisG = gG.append("g")
    .call(d3.axisLeft(yScaleG))
    .selectAll(".domain, .tick line")
    .remove();

// yAxisG.append("g")
//     .select("text")
//     .text("Country")
//     .attr("y", innerHeight / 2)
//     .append("text");

const xAxisG = gG.append("g")
    .call(d3.axisBottom(xScaleG))
    .attr("transform", `translate(0,${innerHeightG})`)
    .attr("color", "red");

// xAxisG.selectAll("line")
//     .tickSize(-100)

xAxisG.select(".domain").remove();

gG.selectAll("text")
    .attr("color", "darkgreen");

xAxisG.select("text")
    .text("Prison population, average")
    .attr("x", innerWidthG / 2)
    .attr("y", 25)
    .attr("font-size", ".8rem")
    .attr("color", "black")
    .attr("font-weight", "700")
    .append("text");

xAxisG.selectAll("line")
    .attr("y2", -innerHeightG)
    
gG.selectAll("rect")
    .data(dataG)
    .enter().append("rect")
        .attr("y", d => yScaleG(d.Country))
        .attr("width", d => xScaleG(d.prisonYearOne))
        .attr("height", yScaleG.bandwidth())
        .attr("fill", "steelblue");

    
gG.append("text")
    .attr("y", -10)
    .attr("font-weight", "900")
    .text("Prison population, average per year (per 100,000 inhabitants)")
    
    
    
    const legend = gG.append("g")
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

gG.selectAll("text")
    .attr("font-family", "sans-serif");