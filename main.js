Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image"src="'+data_uri+'"/>';    
    });
}
console.log('m15 version:',m15.version);
classfier=m15.imageClassfier('https://teachablemachine.withgoogle.com/models/fwjBt6W6T/',modeL);
function modelLoaded()
{
    console.log('model loaded')
}