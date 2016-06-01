$(document).ready(function(){
    if(typeof timeBirth == "undefined" || timeBirth === null){
        $(".inputMore").hide();
        timeBirth = null;
    }//inital

    $("div.inputBirth").find("input.submit").click(function(){
        if($("input#birth").val() == ""){
            return;
        }
        else {
        $("div.inputBirth").hide(500);
        $("div.inputMore").show(500);
        timeBirth = $("input#birth").val();
        }      
    });//設定生日年月

    $("div.inputMore").find("input.reSetBirth").click(function(){
        $("div.inputMore").hide(800);
        $("div.inputBirth").show(800);
    });//重設生日年月

});