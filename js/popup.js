/**
 * Created with IntelliJ IDEA.
 * User: tejia
 * Date: 13-12-3
 * Time: 下午5:08
 * To change this template use File | Settings | File Templates.
 */


$(document).ready(function(){
    chrome.tabs.getSelected(null,function(thisTab){
            myUrl=thisTab.url;
            $("#tab_url").append(myUrl);
            $("#canvas").qrcode(myUrl);
        }

    );
//    $("#tab_url").click(function{
//        $("#canvas").toggle();
//    });
//    $("#canvas").toggle("fast");


//    $("body").append("<p id='last'>历史记录11</p>");
//    $("body").append("<p id='last'>历史记录12</p>");
//    $("btn1").onclick({
//        $("body").append("aaaa");
//    });
    $("#btn1").click(function(){
//        $("#canvas").hide();
        var inputMsg = $("#input_text2").val();
/**        var booleanExist = $("#userCreateQR")[0].length >0;
        if(booleanExist){
            $("#userCreateQR").remove();
        }else{
            $("#userCreateQR").qrcode(inputMsg);
        }

 **/
        $("#canvas").hide();
        $("#tab_url").hide();
//        $("#userCreateQR").remove();
        $("#userCreateQR").qrcode(inputMsg);

//        $("#userCreateBtn").append("<p> </p>");
    });

});
