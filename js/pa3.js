var sbttl = document.getElementById("sbttl");
var aPaid = document.getElementById("aPaid");
var tax = document.getElementById("tax");
var aPaid = document.getElementById("aPaid");
var aTotal = document.getElementById("aTotal");
var submit = document.getElementById("submit");
var change = document.getElementById("change");


sbttl.addEventListener("change", function(){
    if(parseInt(sbttl.value) >= 100 && parseInt(sbttl.value) <= 10000){
        aPaid.disabled = false;
        tax.value = (sbttl.value * 0.12);
        aTotal.value = parseInt(tax.value) + parseInt(sbttl.value);
        aPaid.value = aTotal.value;
        aPaid.min = aTotal.value;
        change.value = parseInt(aPaid.value) - parseInt(aTotal.value);
        submit.disabled = false;
        submit.style.backgroundColor = "black"
    }
    else{
        aPaid.disabled = true;
        submit.disabled = true;
    }
})
aPaid.addEventListener("change", function(){
    change.value = parseInt(aPaid.value) - parseInt(aTotal.value);
    if(parseInt(change.value) >= 0){
        submit.disabled = false;
        submit.style.backgroundColor = "green";
    }
    else{
        submit.disabled = true;
        submit.style.backgroundColor = "rgb(168, 16, 16)";
    }
})


