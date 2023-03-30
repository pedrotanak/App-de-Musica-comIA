song="";
leftWristX = 0;
rigthWristX = 0;
leftWristY = 0;
rigthWristY = 0
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
     poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    Image(video,0,0,600,500);
}
function preload(){
    song=loadSound("music.mp3");
}
function play(){
    song.play();
     song.setVolume(1);
    song.rate(1);
}


function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        rigthWristX = results[0].pose.leftWrist.x;
        rigthWristY = results[0].pose.rigthWrist.y;
        console.log("rightWristX= " + rigthWristX + "rigthWristY=" + rigthWristY);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX= " + leftWristX + "leftWristY=" + leftWristY);
    }
}
function modelLoaded() {
    console.log('poseNet está estabilizado');