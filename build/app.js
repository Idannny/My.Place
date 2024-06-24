console.log(d3)
d3.select("body").append("p").text("Hello World!");
d3.select('div')
    .selectAll('p')
    .data([1,2,3])
    .enter()
    .append('p')
    .text(dta => dta)
    ;
    // Set Dimensions
