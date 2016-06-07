/*
** 用來協助輸入頁更新資料
** 包含修改及新增，不包含googlemap
** googlemap 的程式碼在 map_autocomplate裡
**
*/
$(document).ready(function(){
    $('#formMore').validationEngine('attach', {
        promptPosition: 'topLeft: 50,0'
    });
    //設置輸入驗證

    var start = $("input#start");
    var end = $("input#end");
    var places = $("input#pac-input");
    //設定元件

    var edit = 0; // 0代表不修改 1以上代表修改某次資料
    var now = new Date();
    var nowY = now.getFullYear().toString();
    var nowM = (now.getMonth()+1 < 10)? '0'+(now.getMonth()+1) : ''+(now.getMonth()+1);
    //全域變數

    if(typeof n == "undefined" || n === null){
        var n = 1;
        $("#record").hide(); 
        $(".submitAll").hide(); //沒填過先隱藏
        $("#totalpm25").parent().hide();
    }//inital

    $("#formMore").find("input.submit").click(function(){

        if($("#formMore").validationEngine('validate') == false ){
            return;
        }
        if(Date.parse(start.val()) > Date.parse(end.val())){
            end.validationEngine('showPrompt','* 結束時間不能比開始時間早','error')
            return;
        }
        if(!testStart(start.val())){
            end.validationEngine('showPrompt','* 別鬧了，你真的超過100歲?','load')
            return;
        }
        if(!testEnd(end.val())){
            end.validationEngine('showPrompt','* 結束時間大於現在時間','error')
            return;
        }
        if(edit == 0){//新增
            addRecordList(start.val(),end.val(),places.val());
            //設定

            $(".submitAll").show();
            $("#record").show();
            //顯示按鈕 

            start.val(nextMonth(end.val()));
            start.attr("disabled","disabled");
            end.val("");
            places.val("");
            //重設
            n++;

        }else{//修改
            var liEdit = $("li.record"+edit); //鎖定要進行更改的 li 元件
            liEdit.find(".start"+edit).text(start.val());
            liEdit.find(".end"+edit).text(end.val());
            liEdit.find(".places"+edit).text(places.val());

            if(n-1 == edit){
                start.val(nextMonth(end.val()));
                start.attr("disabled","disabled");
            }else{
                var final = $(".end"+(n-1));
                start.val(nextMonth(final.text()));

                var nextStart = $(".start"+(edit+1));
                nextStart.text(nextMonth(end.val()));
            }
            //尋找預設定的開始日期，並更新下一筆開始值

            end.val("");
            places.val("");
            //清空

            edit = 0;
            $("p#introInput").text("依時間填入你曾經在哪住過");
        }
    });//設定完成一筆
    function addRecordList(startV,endV,placesV){
        var setTxt = "\t<li class='record"+n+"'>"+
            "\t\t<a href='#'>\n"+
            "\t\t\t<h2 class='places"+n+"'>"+placesV+"</h2>\n"+
            "\t\t\t<p class='start"+n+"'>"+startV+"</p>\n"+
            "\t\t\t<p class='end"+n+"'>"+endV+"</p>\n"+
            "\t\t</a>\n"+
            "\t\t<a href='#' class='edit' value='"+n+"'></a>\n"+
            "\t</li>";
        $("#record").append(setTxt).listview('refresh');

        getData(startV,endV,placesV);
        //這定義在getData.js中
        
        $("a.edit").on("click", function(){
            edit = parseInt( $(this).attr("value") );
            var startEditV = $(this).prev().children(".start"+edit).text();
            var endEditV = $(this).prev().children(".end"+edit).text();
            var placesEditV = $(this).prev().children(".places"+edit).text();
            start.val( startEditV);
            end.val( endEditV );
            places.val( placesEditV );
            if(edit == 1 ){
                 start.attr("disabled",false);
            }
            msg = "修改 " + startEditV + " 到 " + endEditV;
            $("p#introInput").text(msg);
        });//設定修改資料事件
    }//設定新欄位
});


function testStart(YM) {
    var now = new Date();
    var nowY = now.getFullYear();
    now.setTime( Date.parse(YM) );
    return (nowY - now.getFullYear() < 100)
}//判斷是否大於100歲

function testEnd(YM) {
    var now = new Date();
    return (Date.parse(YM) - now.getTime() <= 0)
}//判斷是否超過現在時間

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
