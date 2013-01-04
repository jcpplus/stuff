// JavaScript Document

//选项卡
    function ShowTabs(a,b,c){
		var i;
        for (i = 1; i <= b; i++) {
            if (i == a) {
               	document.getElementById("tit" + c + i).className = "on";                
				document.getElementById("txt" + c + i).style.display = "block";
            }
            else {
                document.getElementById("tit" + c + i).className = "";                
				document.getElementById("txt" + c + i).style.display = "none";
            }
        }
    }
	

