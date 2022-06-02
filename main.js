song = "";
music = "";
left = 0;
right = 0;
lx = 0;
rx = 0; 
score_l =0;
score_r = 0;
status_l = "";
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
    status = song.isPlaying();
    console.log(status);
    fill("#5bc0de");
    stroke("#5bc0de");
    if(score_l>0.2){
    circle(lx,left,20);
    music.stop();
    }
    if(status == "false"){
    song.play();
    document.getElementById("cont").innerHTML = "Song = Harry Potter Theme Song";
    }
}
function modelLoaded(){
    console.log("PoseNet is initialized");
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    score_l = results[0].pose.keypoints[9].score;
    console.log("Score Left = " + score_l);
score_r = results[0].pose.keypoints[10].score;
console.log("Score right = "+ score_r);
    left = results[0].pose.leftWrist.y;
    right = results[0].pose.rightWrist.y;
    console.log("Left Y = " + left + " Right Y = " + right);
    lx = results[0].pose.leftWrist.x;
    rx = results[0].pose.rightWrist.x;
    console.log("Left X = " + lx + " Right X = " + rx);
}
}