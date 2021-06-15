
prediction_1 = "";
prediction_2 = "";

Webcam.set ({
    height: 300,
    width: 350,
    image_format: 'png',
    png_quality : 90
    
});

camera = document.getElementById("camera");

Webcam.attach ('#camera');

function take_snapshot(){

    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id= "captured_image" src = "'+ data_uri +'"/>';
    });
}
console.log ( 'ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/al10vQiHa/model.json' , modelLoaded);

function modelLoaded(){
    console.log ("model loaded");
}

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}





function gotResult( error , results){

    if (error){

        console.log (error);

    }

    else{
        console.log (results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        

        prediction_1 = results[0].label;
        

        
        

        if(results[0].label == "HIGH-5"){

        document.getElementById("update_emoji").innerHTML = '<img src = "high5.png">'; 
      
        }
        if(results[0].label == "PEACE"){

            document.getElementById("update_emoji").innerHTML = '<img src = "peace .jpeg">'; 
            }
           


               
    }
}