function guess(input,totalAttempts){
  
    let text
    let status=0;
    let i=0;
    while(status==0 && i<totalAttempts){
        var choix=prompt(`Enter a Number ${i+1}/${totalAttempts} :`);
        if(choix == null){return}
        if(isNaN(choix)){
            alert("Enter a Number !!!")
            continue;
        }
        if (choix==input){
            alert("You Won");
            status=1;
            
        }
        else 
            {
                if (input-choix<0) {text="Lower";}
                if (input-choix>0) {text="Higher";}
                alert(`Wrong !! go ${text}` );
            }
        i++;
    } 

    if(status==0){
    alert(`You lost!! the number is ${input}` )
    }
}

function startGame(ele){
    ele.addEventListener("click",function(e){

        let option=document.querySelector('input[name="defi"]:checked').value 
        let randomNumber ;
        let totalAttempts ;
        if(option=="easy"){
            randomNumber = Math.floor(Math.random() * 101);
            totalAttempts=10;
    }
        if(option=="medium"){
            randomNumber = Math.floor(Math.random() * 301);
            console.log("This is the answer : ",randomNumber); /* just to test the functionality  */
            totalAttempts=13;
            }
        if(option=="hard"){
            randomNumber = Math.floor(Math.random() * 501);
            totalAttempts=15;
    }
    guess(randomNumber,totalAttempts);
    ele.value="Replay";

    })
}
var ele=document.getElementById("btn");
startGame(ele);