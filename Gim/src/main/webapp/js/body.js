function updateTitleAndremoveCompanyName(columns,record){
	/*var cmyindex,template='<div class="col-md-8" style="text-align: center;text-transform: uppercase;"><h4><kbd style="font-size:20px">Marijo Designs</kbd></h4></div>';*/
	var cmyindex,template='<div class="col-md-8" style="text-align: center;text-transform: uppercase;"><h4><kbd style="font-size:20px;">{cmyName}</kbd></h4></div>';
	if(columns && (cmyindex=columns.findIndex(a=>/^(cmy)/ig.test(a.caption)))>=0){
		$(".caption").after(template.replace(/{cmy\w+}/,record[columns[cmyindex].field]));
		columns.splice(cmyindex,1);
	}else{
		$(".caption").after(template.replace(/{cmy\w+}/g,cmyDtl.cm_cmy_nm));
	}
}

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