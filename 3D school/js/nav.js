$(document).ready(function () {
    /********/
    $(".item").mouseenter(function () {
        $(this).children().find("h3").addClass("h3_hover");
        $(this).children(".i_mc").show();
    }).mouseleave(function () {
        $(this).children().find("h3").removeClass("h3_hover");
        $(this).children(".i_mc").hide();
    });
    /********/
    $(".i_mc").mouseenter(function () {
        $(this).parents(".item").children().find("h3").addClass("h3_hover");
        $(this).show();
    }).mouseleave(function () {
        $(this).parents(".item").children().find("h3").removeClass("h3_hover");
        $(this).hide();
    });
    /********/
    $(".i_close").click(function () {
        $(".i_mc").parents(".item").children().find("h3").removeClass("h3_hover");
        $(".i_mc").hide();
    });
	/*tabs 选项卡*/
$(document).ready(function() {
	jQuery.jqtab = function(tabtit,tab_conbox,shijian) {
		$(tab_conbox).find("li").hide();
		$(tabtit).find("li:first").addClass("thistab").show(); 
		$(tab_conbox).find("li:first").show();
	
		$(tabtit).find("li").bind(shijian,function(){
		  $(this).addClass("thistab").siblings("li").removeClass("thistab"); 
			var activeindex = $(tabtit).find("li").index(this);
			$(tab_conbox).children().eq(activeindex).show().siblings().hide();
			return false;
		});	
	};
	/*调用方法如下：*/
	/*$.jqtab("#tabs","#tab_conbox","click"); 点击*/
	$.jqtab("#tabs2","#tab_conbox2","mouseenter");/*滑动*/
});
});