var x=new Date(),dateTime=$('.dateTimePick'),hours=x.getHours();hours=hours>12 ?hours-12:hours;
dateTime.datetimepicker({
	 'format':"dd-M-yy h:ii"
 }).datetimepicker('setDate',new Date(x.getFullYear(),x.getMonth(),x.getDate(),hours,x.getMinutes()));
if(empDtl && empDtl.em_emp_typ!="Admin")
	dateTime.attr("disabled",true);
function toggleFullScreen(elem) {
    // ## The below if statement seems to work better ## if ((document.fullScreenElement && document.fullScreenElement !== null) || (document.msfullscreenElement && document.msfullscreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
        if (elem.requestFullScreen) {
            elem.requestFullScreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullScreen) {
        	document.documentElement.webkitRequestFullScreen()
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}


function getPurityColor(prty){
	if(caratList && caratList.length){
		var caratobj=caratList.find((a)=>(+a.crtm_carat_prty).toFixed(2)==(+prty).toFixed(2))	
		style=caratobj && 'style="background-color:'+caratobj.crtm_carat_clr+' !important"' || '';
		return style;
	}return '';
}