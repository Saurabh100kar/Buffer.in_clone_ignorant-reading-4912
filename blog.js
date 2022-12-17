    
    document.querySelector("#subs-btn").addEventListener("click", function(){
        let input_value = document.querySelector(".Subscribe>input").value;
        console.log("subscribed");
        if(input_value !== ""){
            alert("Thank you for your interset");
        }
        else{
            alert("please enter email correct address");
        }
    })