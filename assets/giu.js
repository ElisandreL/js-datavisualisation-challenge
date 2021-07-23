
// varriables declaration
let table2Td = document.getElementById("table2").querySelectorAll("td");
let table2Th = document.getElementById("table2").querySelectorAll("th");

let dataYears = [];
let dataPrisPop = [];
let dataCountry = [];
let data = [];
let a = 0;
let b = 1;

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
        th.push(e.innerHTML)
    })
    
    dataYears.push(th[2])
    dataYears.push(th[3])
    
    dataCountry.forEach(e => {
        let myObject = new Object();
        myObject["Country"] = e;
        myObject[dataYears[0]] = dataPrisPop[a];
        myObject[dataYears[1]] = dataPrisPop[b];
        data.push(myObject)
        a+=2;
        b+=2;
    });
}
fillArrays()

console.log('data: ', data);


let table2  = document.getElementById("table2");

const svg = d3.select("#table2").append("svg");

let svgTable2Width = "600";
let svgTable2Height = "500";
let barPadding = 5;
let barTable2Width = (svgTable2Width / dataPrisPop.length);

svg.attr("width", svgTable2Width)
    .attr("height", svgTable2Height);

svg.append("g")
    .selectAll("g")
    .data(dataCountry)
    .join("g")
        .attr("transform", (d, i) => {
            var translate = [(svgTable2Width/dataCountry.length) * i, 0];
            return "translate(" + translate + ")"; 
        })
    .selectAll("rect")
    .data(dataYears)
    .join("rect")
    .data(dataPrisPop)
//         .attr("x", d => x1(d.key))
//         .attr("y", d => y(d.value))
//         .attr("width", x1.bandwidth())
//         .attr("height", d => y(0) - y(d.value))
//         .attr("fill", d => color(d.key));

// svg.append("g")
//     .call(xAxis);

// svg.append("g")
//     .call(yAxis);

// svg.append("g")
//     .call(legend);











// let svgTable2Width = "600";
// let svgTable2Height = "500";
// let barPadding = 5;
// let barTable2Width = (svgTable2Width / dataPrisPop.length);

// svg.attr("width", svgTable2Width).attr("height", svgTable2Height);

// let barChart = svg.selectAll("rect")
//     .data(dataPrisPop)
//     .enter()
//     .append("rect")
//     .attr("y", (d) => {
//         return svgTable2Height - d;
//     })
//     .attr("height", (d) => {
//         return d - 50;
//     })
//     .attr("width", barTable2Width - barPadding)
//     .attr("transform", (d, i) => {
//         var translate = [barTable2Width * i, 0];
//         return "translate(" + translate + ")"; 
//     })
//     .attr("fill", (d) => {
//         if (dataPrisPop.indexOf(d) % 2 === 0) {
//             return "#A64C38";
//         } else {
//             return "#6AC483";
//         }
//     });

// let country = svg.selectAll("text")
//     .data(dataCountry)
//     .enter()
//     .append("text")
//     .text((d) => {
//         return d;
//     })
//     .attr("y", (d, i) => {
//         return svgTable2Height - 50;
//     })
//     .attr("x", (d, i) => {
//         return barTable2Width * i;
//     })
//     .attr("fill", "#A64C38")
//     .attr("writing-mode", () => {
//         return "vertical-lr";
//     })
//     .attr("text-orientation", () => {
//         return "mixed";
//     });
    
// // let tableau1 = document.getElementById("table1").querySelectorAll("td");
// // let tableauJavsc =[];
// // for (i = 0; i < tableau1.length; i++) { 
// //     tableauJavsc.push(tableau1[i].innerHTML)
// //     // tableauJavsc[i] = tableau1[i].firstChild.data 
// // }
// // 