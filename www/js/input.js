$(document).ready(function(){
    $('#formBirth').validationEngine('attach', {
        promptPosition: 'topLeft: 50,0'
    });
    $('#formMore').validationEngine('attach', {
        promptPosition: 'topLeft: 50,0'
    });
    //設置輸入驗證

    if(typeof timeBirth == "undefined" || timeBirth === null){
        $(".inputMore").slideToggle();
        timeBirth = null;
    }//inital

    var d = new Date();
    var nowY = d.getFullYear();
    var nowM = d.getMonth();
    //設定現在日期
    $("#formBirth").find("input.submit").click(function(){
        if($("#formBirth").validationEngine('validate') == false){
            return;
        }
        else {
            $("div.inputBirth").slideToggle(500);
            $("div.inputMore").slideToggle(500);
            timeBirth = $("input#birth").val();
            $("input#start0").val(timeBirth);
        }
    });

    $("input#start0").click(function(){
        $("div.inputMore").slideToggle(800);
        $("div.inputBirth").slideToggle(800);
    });//重設生日

    $("#formMore").find("input.submit").click(function(){
        if($("#formMore").validationEngine('validate') == false){
            return;
        }
        else {
            alert("do it ");
        }
    });//設定完成一筆

    function setMY(MY){
        var patt = "([0-9]{4})-([0-9]{2})";
    }
});