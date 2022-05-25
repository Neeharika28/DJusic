song = "";
music = "";
function preload(){
    song = loadSound("music.mp3");
    music = loadSound("music2.mp3");
}
function setup(){
    canvas = createCanvas(500,400);
    canvas.position(350,150);

    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,500,400);
}
