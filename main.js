song="";
leftWristX = 0;
rigthWristX = 0;
leftWristY = 0;
rigthWristY = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
     poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw()
    image(video,0,0,600,500);
    fill("#FF000");
	stroke("#FF000");
	if (scoreLeftWrist>0.2){
		circle(leftWristX,leftWristY,20);
	inNumberleftWristY=Number(leftWristY);
	remover_decimals=floor(inNumberleftWristY);
	volume=remover_decimals/500;
	document.getElementById("volume").innerHTML="volume="+volume;
	song.setVolume(volume);	
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
        scoreLeftWrist=results[0].pose.keypoints[9].score;
		scoreRightWrist=results[0].pose.keypoints[10].score;
		console.log("scoreRightWrist="+scoreRightWrist+"scoreLeftWrist="+scoreLeftWrist);
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
}