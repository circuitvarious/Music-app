song = "";

function preload(){
    song = "music.mp3";
}

function setup(){
    canvas = createCanvas(555, 444);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    image(video, 0, 0, 555, 444);
}

function modalLoaded(){
    console.log("fd");
}

function gotPoses(results){
}