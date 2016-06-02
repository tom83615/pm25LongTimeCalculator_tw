(function($){
    $.fn.validationEngineLanguage = function(){};
    $.validationEngineLanguage = {
        newLang:function(){
            $.validationEngineLanguage.allRules = {
                "required":{ // Add your regex rules here, you can take telephone as an example
                    "regex":"none",
                    "alertText":"* 此處不可空白",
                    "alertTextCheckboxMultiple":"* 請選擇一個項目",
                    "alertTextCheckboxe":"* 該選項為必選",
                    "alertTextDateRange":"* 日期範圍不可空白"
                },
                "dateRange":{
                    "regex":"none",
                    "alertText":"* 無效的 ",
                    "alertText2":" 日期範圍"
                },
                "dateTimeRange":{
                    "regex":"none",
                    "alertText":"* 無效的 ",
                    "alertText2":" 時間範圍"
                },
                "minSize":{
                    "regex":"none",
                    "alertText":"* 最少 ",
                    "alertText2":" 個字符"
                },
                "maxSize":{
                    "regex":"none",
                    "alertText":"* 最多 ",
                    "alertText2":" 個字符"
                },
                "groupRequired":{
                    "regex":"none",
                    "alertText":"* 至少填寫其中一項"
                },
                "min":{
                    "regex":"none",
                    "alertText":"* 最小值為 "
                },
                "max":{
                    "regex":"none",
                    "alertText":"* 最大值為 "
                },
                "past":{
                    "regex":"none",
                    "alertText":"* 日期需在 ",
                    "alertText2":" 之前"
                },
                "future":{
                    "regex":"none",
                    "alertText":"* 日期需在 ",
                    "alertText2":" 之後"
                },
                "maxCheckbox":{
                    "regex":"none",
                    "alertText":"* 最多選擇 ",
                    "alertText2":" 個項目"
                },
                "minCheckbox":{
                    "regex":"none",
                    "alertText":"* 最少選擇 ",
                    "alertText2":" 個項目"
                },
                "equals":{
                    "regex":"none",
                    "alertText":"* 兩次輸入的密碼不一致"
                },
                "creditCard": {
                    "regex": "none",
                    "alertText": "* 無效的信用卡號碼"
                },
                "phone":{
                    // credit:jquery.h5validate.js / orefalo
                    "regex":/^([\+][0-9]{1,3}[ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
                    "alertText":"* 無效的電話號碼"
                },
                "email":{
                    // Shamelessly lifted from Scott Gonzalez via the Bassistance Validation plugin http://projects.scottsplayground.com/email_address_validation/
                    "regex":/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
                    "alertText":"* 無效的郵件地址"
                },
                "integer":{
                    "regex":/^[\-\+]?\d+$/,
                    "alertText":"* 無效的整數"
                },
                "number":{
                    // Number, including positive, negative, and floating decimal. credit:orefalo
                    "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                    "alertText":"* 無效的數值"
                },
                "date":{
                    "regex":/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/,
                    "alertText":"* 無效的日期，格式必需為 YYYY-MM-DD"
                },
                "ipv4":{
                    "regex":/^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText":"* 無效的 IP 地址"
                },
                "url":{
                    "regex":/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    "alertText":"* 無效的網址"
                },
                "onlyNumberSp":{
                    "regex":/^[0-9\ ]+$/,
                    "alertText":"* 只能填寫數字"
                },
                "onlyLetterSp":{
                    "regex":/^[a-zA-Z\ \']+$/,
                    "alertText":"* 只能填寫英文字母"
                },
                "onlyLetterNumber":{
                    "regex":/^[0-9a-zA-Z]+$/,
                    "alertText":"* 只能填寫數字與英文字母"
                },
                //tls warning:homegrown not fielded
                "dateFormat":{
                    "regex":/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
                    "alertText":"* 無效的日期格式"
                },
                //tls warning:homegrown not fielded
                "dateTimeFormat":{
                    "regex":/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
                    "alertText":"* 無效的日期或時間格式",
                    "alertText2":"可接受的格式： ",
                    "alertText3":"mm/dd/yyyy hh:mm:ss AM|PM 或 ",
                    "alertText4":"yyyy-mm-dd hh:mm:ss AM|PM"
                },
                "chinese":{
                    "regex":/^[\u4E00-\u9FA5]+$/,
                    "alertText":"* 只能填寫中文"
                },
                "legalchar":{
                    "regex":/^[\u4E00-\u9FA5]*|[0-9|a-z|A-Z]*$/,
                    "alertText":"* 該符號禁止使用"
                },
                "nospace":{
                    "regex":/^\S*$/,
                    "alertText":"* 不接受空格"
                },
                "monthYear":{
                    "regex":/^[0-9]{4}-[0-9]{2}$/,
                    "alertText":"* 請符合格式YYYY-MM"
                }
            };
        }
    };
    $.validationEngineLanguage.newLang();
})(jQuery);