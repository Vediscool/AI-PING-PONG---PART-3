function parent(){
    canvas=createCanvas(400,336);
    canvas.position(480,250);
    canvas.parent('canvas');
    video=createCapture(VIDEO);
    video.size(300,290);
    video.hide();

   poseNet=ml5.poseNet(video,modelLoaded);
   poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('Model is Loaded !');
}