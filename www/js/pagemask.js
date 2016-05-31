$(document).ready(function(){
    //設定 nav 欄位
    var navData = [] ;
    navData[0] = ['edit','#pageInpute','輸入資料'];
    navData[1] = ['cloud','#pageShare','分享 &amp; 儲存'];
    navData[2] = ['info','#pageOther','其他'];

    var str = "<ul>\n";
    for(var i=0; i<navData.length; i++){
        str = str + "\t<li>\n"+
                        "\t\t<a data-icon='"+navData[i][1]+"' href='"+navData[i][2]+"' data-transition='none'>\n"+
                            "\t\t\t"+navData[i][3]+"\n"+
                        "\t\t</a>\n"+
                    "\t</li>\n";
    }
    str = str + "<ul>";
    $("div.nav").html(str);
});