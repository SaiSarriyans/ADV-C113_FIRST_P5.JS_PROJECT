function preload(){

}
function setup(){
canvas = createCanvas(900, 900);
canvas.position(250, 270);
video = createCapture(VIDEO);
video.hide();

}
function draw(){
image(video,50,50,800,800);
circle(50, 50, 110);
rect(20, 100, 50, 700);
circle(50, 800, 110);
rect(80, 800, 750, 50);
circle(850, 800, 110);
rect(830, 100, 50, 700);
circle(850, 55, 110);
rect(80, 40, 750, 50);

}

function take_snapshot(){
    save('student_name.png');
}

