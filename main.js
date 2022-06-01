song = "";
music = "";
left = 0;
right = 0;
lx = 0;
rx = 0; 
function preload(){
    song = loadSound("music.mp3");
    music = loadSound("music2.mp3");
}
function setup(){
    canvas = createCanvas(500,400);
    canvas.position(350,150);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,500,400);
}
function modelLoaded(){
    console.log("PoseNet is initialized");
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    left = results[0].pose.leftWrist.y;
    right = results[0].pose.rightWrist.y;
    console.log("Left Y = " + left + " Right Y = " + right);
    lx = results[0].pose.leftWrist.x;
    rx = results[0].pose.rightWrist.x;
    console.log("Left X = " + lx + " Right X = " + rx);
}
}