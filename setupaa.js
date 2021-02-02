
//function 1
function d3test () 

{
    d3.select("body")
  .selectAll("p")
  .data([4, 8, 15, 16, 23, 42])
  .enter().append("p")
    .text(function(d) { return "I’m number " + d + "!"; });
}


//function 2
//draw a rectangle
function drawRectangle()
{

    const svg=d3.select("body")
    .append('svg')
    .attrs({width:500,height:200});
    
    svg.append('rect')
           .attrs({ x: 10, y: 10, width: 80, height: 80, fill: 'red' })
           .transition()
           .duration(5000)
           .attrs({ x: 460, y: 150, width: 40, height: 40, fill: 'blue' });
   
}

//call function right here
d3test();
drawRectangle();