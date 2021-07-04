prediction_1 = "";
prediction_2 = "";

camera = document.getElementsByClassName("cam")[0];

Webcam.set({
    height: 300,
    width: 350,
    image_format: "png",
    png_quality: 100
});

Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementsByClassName("result")[0].innerHTML='<img id="my_image" src="'+data_uri+'"/>'
    });
}

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/IfaaFIpFd/model.json",model_loaded);

console.log("ml5_version",ml5.version);

function model_loaded(){
     console.log("Model_Loaded");
}

function speak(){
    synth=window.speechSynthesis;
    data_1= "First Prediction is "+prediction_1;
    data_2= "Second Prediction is "+prediction_2;
    utterThis=new SpeechSynthesisUtterance(data_1+data_2);
    synth.speak(utterThis);
}