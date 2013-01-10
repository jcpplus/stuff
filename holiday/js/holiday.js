// JavaScript Document

//景点简介
$(function(){
    var Jleng= $("#h_info").html();
	if(Jleng==null)
		return;
	if(Jleng.length>52){
		$("#h_info").html(Jleng.substring(0,52));
		} else{
			$("#h_more").hide();
			return;
		}
	
	$("#h_more").click(function(){
		if($("#h_more span").html()=="展开"){
			$("#h_info").html(Jleng);
			$("#h_more span").html("收起")
			$("#h_more i").attr("class","up");
			}else{
			$("#h_info").html(Jleng.substring(0,52));
			$("#h_more i").removeClass("up");
			$("#h_more span").html("展开");	
		}
	 })
	 
});

//搜索
$(function(){
   $("#show_chk,#search_close").click(function(e){
       e.stopPropagation();
	   $("#show_search").toggle();
	   if($("#show_search").is(":visible")){
		   $("#show_chk").css("border-bottom","0");
		   $("#show_chk").css("margin-bottom","3px");
		   $("#search_ico").addClass("sub_icon_on");
		}else{
		   $("#show_chk").css("border-bottom","3px solid #35abff");
		   $("#show_chk").css("margin-bottom","0");
		   $("#search_ico").removeClass("sub_icon_on");			
			
			}
	 })
	 
	 $("#show_search").click(function(e){
		  e.stopPropagation();
		$("#show_search").show(); 
		$("#show_chk").css("border-bottom","0");
		$("#show_chk").css("margin-bottom","3px");
		$("#search_ico").addClass("sub_icon_on");			
	 })	
	
	 
	 $("body").click(function(){
		$("#show_search").hide(); 
		$("#show_chk").css("border-bottom","3px solid #35abff");
		$("#show_chk").css("margin-bottom","0");
        $("#search_ico").removeClass("sub_icon_on");	
	 })
});
