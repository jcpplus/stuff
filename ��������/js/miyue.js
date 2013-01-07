$(function() {
	//顶部栏目
	$("#mycard_li,#layer_mycard").hover(
	function() {
		$("#mycard_li").addClass("on");
		$("#mycard_li i").addClass("ico01");
		$("#layer_mycard").show();
	},
	function() {
		$("#mycard_li").removeClass("on");
		$("#mycard_li i").removeClass("ico01");
		$("#layer_mycard").hide();
	})
	$("#dh_li,#layer_dh").hover(
	function() {
		$("#dh_li").addClass("on");
		$("#dh_li i").addClass("ico01");
		$("#layer_dh").show();
	},
	function() {
		$("#dh_li").removeClass("on");
		$("#dh_li i").removeClass("ico01");
		$("#layer_dh").hide();
	})

	//主题介绍
	$(".show_list dl").hover(
	function() {
		$(this).addClass("hover");
	},
	function() {
		$(this).removeClass("hover");
	})

	$(".show_list dl").click(
	function() {
		$(this).siblings().removeClass("curr").end().addClass("curr");
	})

    $(".subject_list li .list_con").hover(
    function() {
        $(this).addClass("onhover");
    },
    function() {
        $(this).removeClass("onhover");
    })
	
	$(".s_v_boxlist li dl").hover(
	function(){
		$(this).addClass("hover").find(".converBg").show();
	},
	function(){
		$(this).removeClass("hover").find(".converBg").hide();
	});
	
	$(".zp_list li").hover(
		
		function(){
			$(this).addClass("onhover");
		},
		function(){
			$(this).removeClass("onhover");
		}
	)

	/*焦点图*/
	 $("#KinSlideshow").KinSlideshow({
		 moveStyle:"left",
		 intervalTime:"5",
		 mouseEvent:"mouseover",
		 isHasTitleBar:false,	
		 isHasBtn:true,
		 
		 btn:{btn_bgColor:"#ffffff",btn_bgHoverColor:"#e74d7a",
			  btn_fontColor:"#e74d7a",btn_fontHoverColor:"#ffffff",btn_fontFamily:"Verdana",
			  btn_borderHoverColor:"#e74d7a",btn_bgAlpha:1}			
        });
	$("#KinSlideshow1").KinSlideshow({
		 moveStyle:"left",
		 intervalTime:"5",
		 mouseEvent:"mouseover",
		titleBar:{titleBar_height:28,titleBar_bgColor:"#000000",titleBar_alpha:0.5},
		 titleFont:{TitleFont_size:16,TitleFont_color:"#FFFFFF",TitleFont_weight:"700"},
		 isHasBtn:true,
		 btn:{btn_bgColor:"#2b74b8",btn_bgHoverColor:"#ffffff",
			  btn_fontColor:"#ffffff",btn_fontHoverColor:"#000000",btn_fontFamily:"Verdana",
			  btn_borderHoverColor:"#ffffff",btn_bgAlpha:1}			
        });
	/*主题介绍部分的导航*/
   var $tit = $(".toggle_btn li");
   var $cont = $("#subject_bx .show_list");
   var $an = $("current").index() +1 ;
   $cont.eq($an).show().siblings().hide();
   $tit.click(function(){
	var $tit_index = $(this).index();
	$(this).addClass("current").siblings().removeClass("current");
	$cont.eq($tit_index).show().siblings().hide();
   })
   
   	$("li .list_con").click(
	function() {
		$(".list_con").removeClass("current")
		$(this).addClass("current");
	});
		
	/*瀑布流*/
    $('.zp_list').masonry({
        itemSelector:'.zp_list li',
        columnWidth:240
    });
})