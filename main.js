Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
}) ;

camera=document.getElementById("camera");

Webcam.attach('#camera');
function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>'; 
    });
}
console.log('ml5 version', ml5.version)
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/eaRG0hsEl/model.json',modelLoaded);
function modelLoaded(){
    console.log('Model Loaded!')
}
function check(){
    img = document.getElementById('captured_image');
classifier.classify(img, gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error)
    }else{
        if(results[0].label == "Thumbs up"){
            document.getElementById("update_emoji").innerHTML ="&#128077;" 
            
        }
        if(results[0].label == "Up"){
            document.getElementById("update_emoji").innerHTML ="&#128070;" 
            
        }
        if(results[0].label == "Down"){
            document.getElementById("update_emoji").innerHTML ="&#128071;" 
            
        }
        if(results[0].label == "Left"){
            document.getElementById("update_emoji").innerHTML ="&#128072;" 
            
        }
        if(results[0].label == "Right"){
            document.getElementById("update_emoji").innerHTML ="&#128073;" 
            
        }
        if(results[0].label == "Thumbs down"){
            document.getElementById("update_emoji").innerHTML ="&#128078;" 
            
        }
    }
}