
var DATA_START = "1961-01";
var DATA_END = "2016-01";
var sum = 0;



$(document).ready(function(){
    $(".submitAll").click(function(){
        $("#totalpm25").parent().show();
        var msg = "終生曝露量："+Math.round(sum/1000)+" 毫克";
        var msghtml = "終生曝露量：<strong>"+Math.round(sum/1000)+"</strong> 毫克";
        $("#totalpm25").html(msghtml);

        var lineURL = $("#line_share").attr("href") + msg;
        $("#line_share").attr("href",lineURL);
        //Line 設定
    });
});

function getData(startV,endV,placesV) {
    var latlon = getLatLon(placesV);
    var lat = latlon[0];
    var lon = latlon[1];
    prapareUIData(startV,endV,lat,lon);
    $("#results").listview().listview('refresh');
}

function getLatLon(address){
    var url = "https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&key="+GOOGLE_MAP_KEY;
    var lat,lon;
    $.ajax({
        url: url,
        type: 'get',
        dataType: "json",
        async: false,
        error: function () {
            alert("無法連線。");
        },
        success: function (data) {
            if(data.status == "ZERO_RESULTS"){
                alert("地點找不到，請嘗試利用google map 自動完成功能避免此問題。");
                return;
            }
            lat = (data.results[0].geometry.location.lat);
            lon = (data.results[0].geometry.location.lng);
        }
    });
    var latlon = [lat,lon];
    return latlon;
};

function prapareUIData(startV,endV,lat,lon){
    var end = new Date();
    end.setTime( Date.parse(endV) );
    var endM = end.getMonth()+1;
    var endY = end.getFullYear();
    var divider = "<li data-role='list-divider'>"+startV+"到"+endV+"</li>";
    $("#results").append(divider);

    var currect = new Date();
    currect.setTime( Date.parse(startV) );
    var currectY = currect.getFullYear();
    var currectM = (currect.getMonth()+1 < 10)? '0'+(currect.getMonth()+1) : ''+(currect.getMonth()+1);
    var currectYM = currectY+"-"+currectM;
    while(currect.getTime() <= end.getTime() ){
        if(currect.getTime() < Date.parse(DATA_START) || currect.getTime() >= Date.parse(DATA_END)){
            var data = {timeYM:currectYM, pm25C:"無資料", pm25M:"無資料", site:"無資料", distence:""};
            setUI(data);
        }else{
            var currectData = PM25_DATA[currectY][(currect.getMonth()+1)];
            var min = 11; //沒有測站時min會保持11
            var pm25C = "";
            var pm25M = "";
            var site = "";
            for (var n = 0 ; n <currectData.length ;n++){
                siteDistance = haversine(currectData[n]['lat'],currectData[n]['lon'],lat,lon);
                if(siteDistance <= 10 && siteDistance < min )
                {
                    var days = new Date(currectY, currectM, 0).getDate();
                    pm25C = currectData[n]['pm25'];
                    pm25M = currectData[n]['pm25']*days * 11; //每人每天約呼吸11m^3 之空氣
                    site = currectData[n]['siteName'];
                    min = siteDistance;
                }
            }
            if(min == 11){
                var data = {timeYM:currectYM, pm25C:"無資料", pm25M:"無資料", site:"無資料", distence:""};
                setUI(data);
            }else{
                var data = {timeYM:currectYM, pm25C:Math.round(pm25C)+"(微克/立方公分)", pm25M:Math.round(pm25M/1000)+"毫克", site: site, distence:" 距離"+Math.round(min)+"公里"};
                setUI(data);
                sum += pm25M;
            }
        }
        currect = new Date();
        currect.setTime( Date.parse(nextMonth(currectYM)) ); //nextMonth 在input.js宣告
        currectY = currect.getFullYear();
        currectM = (currect.getMonth()+1 < 10)? '0'+(currect.getMonth()+1) : ''+(currect.getMonth()+1);
        currectYM = currectY+"-"+currectM;
    }

};

function setUI(imf){
    appending = '\t<li data-role="collapsible" data-iconpos="right">'+
                '\t\t<h2>'+imf["timeYM"]+"| "+imf["pm25C"]+"</h2>"+
                '\t\t<ul data-role="listview">'+
                '\t\t\t<li>總量：'+imf["pm25M"]+'</li>'+
                '\t\t\t<li>測站：'+imf["site"]+imf["distence"]+'</li>'+
                '\t\t</ul>'+
                '\t</li>';
    $("#results").append(appending);
};//更新 ul#results

function haversine() {
   var radians = Array.prototype.map.call(arguments, function(deg) { return deg/180.0 * Math.PI; });
   var lat1 = radians[0], lon1 = radians[1], lat2 = radians[2], lon2 = radians[3];
   var R = 6372.8; // km
   var dLat = lat2 - lat1;
   var dLon = lon2 - lon1;
   var a = Math.sin(dLat / 2) * Math.sin(dLat /2) + Math.sin(dLon / 2) * Math.sin(dLon /2) * Math.cos(lat1) * Math.cos(lat2);
   var c = 2 * Math.asin(Math.sqrt(a));
   return R * c;
};//計算距離

function cleanUI(){
    return
};