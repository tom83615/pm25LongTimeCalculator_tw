$(document).ready(function(){
    $('#inputBirth').validationEngine();
    $('#inputMore').validationEngine();

    if(typeof timeBirth == "undefined" || timeBirth === null){
        $(".inputMore").hide();
        timeBirth = null;
    }//inital

    var d = new Date();
    var nowY = d.getFullYear();
    var nowM = d.getMonth();
    //設定現在日期

    $("div.inputBirth").find("input.submit").click(function(){
        if($("input#birth").val() == ""){
            return;
        }
        else {
            $("div.inputBirth").hide(500);
            $("div.inputMore").show(500);
            timeBirth = $("input#birth").val();
            $("input#start0").val(timeBirth);
        }
    });//設定生日年月

    $("input#start0").click(function(){
        $("div.inputMore").hide(800);
        $("div.inputBirth").show(800);
    });//重設生日年月

    function setMY(MY){
        var patt = "([0-9]{4})-([0-9]{2})";
    }
});