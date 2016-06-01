$(document).ready(function(){
    if(typeof timeBirth == "undefined" || timeBirth === null){
        $(".inputMore").hide();
        timeBirth = null;
    }

    $("div.inputBirth").find("input.submit").click(function(){
        $("div.inputBirth").hide(500);
        $("div.inputMore").show(500);
        alert($("input#birth").val());
    });

    $("div.inputMore").find("input.reSetBirth").click(function(){
        $("div.inputMore").hide(800);
        $("div.inputBirth").show(800);
    });

});