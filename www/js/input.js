$(document).ready(function(){
    $('#formMore').validationEngine('attach', {
        promptPosition: 'topLeft: 50,0'
    });
    //設置輸入驗證

    var start = $("input#start");
    var end = $("input#end");
    var places = $("input#pac-input");
    //設定元件

    if(typeof n == "undefined" || timeBirth === null){
        var n = 0;
    }//inital

    var d = new Date();
    var nowY = d.getFullYear();
    var nowM = d.getMonth();
    //設定現在日期


    $("#formMore").find("input.submit").click(function(){

        if($("#formMore").validationEngine('validate') == false ){
            return;
        }
        else if(Date.parse(start.val()) > Date.parse(end.val())){
            end.validationEngine('showPrompt','* 結束時間不能比開始時間早','error')
        }
        else if(!testStart(start.val())){
            end.validationEngine('showPrompt','* 別鬧了，你真的超過100歲?','load')
        }
        else{
            addRecordList(start.val(),end.val(),places.val());
            start.val(nextMonth(end.val()));
            start.attr("disabled","disabled");
            end.val("");
            places.val("");
            //設定並重設
            n++
        }
    });//設定完成一筆

    function setMY(MY){
        var patt = "([0-9]{4})-([0-9]{2})";
    }

    function addRecordList(start,end,places){
        var setTxt = "\t<li>" +
            "\t\t<a href='#'>\n"+
            "\t\t\t<h2 class='places"+n+"'>"+places+"</h2>\n"+
            "\t\t\t<p class='start"+n+"'>"+start+"</p>\n"+
            "\t\t\t<p class='end"+n+"'>"+end+"</p>\n"+
            "\t\t</a>\n"+
            "\t\t<a href='#' class='edit'>"+n+"</a>\n"+
            "\t</li>";
        $("#record").append(setTxt).listview('refresh');

    }//設定新欄位

    function testStart(YM) {
        var now = new Date();
        nowY = now.getFullYear();
        now.setTime( Date.parse(YM) );
        return (nowY - now.getFullYear() < 100)
    }//判斷是否大於100歲

    function nextMonth(YM){
        var now = new Date();
        now.setTime( Date.parse(YM) );
        if (now.getMonth() == 11) {
            var next = new Date(now.getFullYear() + 1, 0, 1);
        } else {
            var next = new Date(now.getFullYear(), now.getMonth() + 1, 1);
        }
        var nextY = next.getFullYear().toString();
        var dM = next.getMonth()+1;
        var nextM = (dM < 10)? '0'+dM : ''+dM;
        return nextY+"-"+nextM;
    }//取得下個月份(YYYY-MM)
});