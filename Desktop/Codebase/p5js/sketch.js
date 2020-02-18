let numMT = 0;
let priceMT = 10; //dollar
let monthly_interest = 0.005; //percent per month
let age = 0;
let savings = 0;

function setup() {
  // create canvas
  createCanvas(710, 800);

  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(submit);

  greeting = createElement('h2', 'How many cups of bubble tea do you drink every month?');
  greeting.position(20, 5);

  // input2 = createInput();
  // input2.position(20, 760);
  //
  // button2 = createButton('submit');
  // button2.position(input.x + input.width, 760);
  // button2.mousePressed(submit);

  greeting2 = createElement('h2', 'You can save ' + Math.round(savings) + ' dollars!');
  greeting2.position(20, 700);

  textAlign(CENTER);
  textSize(50);
}


function draw() {
//  background(220);
  points = [];
  seed = 100;

  num_year = 60-age;
  for (i = 0; i < num_year; i++) {
    savings = 0;
    for (j = 0; j<i*12; j++){
      savings += numMT*priceMT*Math.pow(1+monthly_interest, num_year*12 - j);
    }
    points[i] = new GPoint(i, savings);
  }

  greeting2.html('You can save ' + Math.round(savings) + ' dollars!');

  plot = new GPlot(this);
  plot.setPos(0, 100);
  plot.setOuterDim(width, height-200);
  plot.setTicksLength(5);
  plot.setAxesOffset(3);

  // Add the points
  plot.setPoints(points);

  // Set the plot title and the axis labels
  plot.setTitleText("The amount of money you would you save if you stopped drinking bubble tea!");
  plot.getXAxis().setAxisLabelText("Years");
  plot.getYAxis().setAxisLabelText("Dollars");

  //Background colour
  background(255, 204, 0);

  // Draw it!
  plot.defaultDraw();

}

function submit() {
  const name = input.value();
  numMT = parseInt(name);
}

function submit2() {
  const name2 = input2.value();
  age = parseInt(name2);
}
