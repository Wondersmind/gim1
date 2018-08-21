<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<title>cloingstock</title>
<script type="text/javascript" src="dwr/interface/AjaxController.js"></script>
<script type="text/javascript" src="dwr/engine.js"></script>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- Bootstrap -->
 <link href="css/customefonts.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/themify-icons.css" rel="stylesheet">
<link href="css/simple-line-icons.min.css" rel="stylesheet">
<link href="js/reportdashboard/blue-theme.css" rel="stylesheet">
<link rel="stylesheet" href="css/font-awesome.min.css">
<link rel="stylesheet" href="css/bootstrap-select.min.css">
<!-- Resources -->
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
   <style>.btn.btn-circlesuc {border-radius: 50px !important; background: #5fbeaa !important; border-color: #ccc !important;  color: #333 !important;}
    .ti-user:before {
    content: "\e602";
}
    </style>
    <!-- Styles -->
<style>
#chartdiv {
	width	: 100%;
	height	: 500px;
}	
.ag-theme-fresh .ag-header {
    background-color: #004274 !important;
    color: #ffffff !important;
    font: 400 14px "Helvetica Neue", sans-serif;
    background-image: none !important;
}

.col-lg-3{
min-width:25%;
}
.row {
    margin-right: -15px;
    margin-left:0px !important; 
}

.panel-body {
    padding: 0px;
}

.npdn{
    padding: 2px;
}		

.boxtab {
    background: #fff;
    box-shadow: 3px 2px 2px 2px #ddd;
    text-align: center;
    border-radius: 1px;
    min-height: 200px;
    margin-bottom: 0%;
}

.well{
background:#fff;
margin-bottom: 0px;
}

.pdnf{
   padding: 3px;
    border: 2px solid #004274;
}
.ag-theme-fresh .ag-selection-checkbox span, .ag-theme-fresh .ag-group-expanded span, .ag-theme-fresh .ag-group-contracted span {
    margin-right: 2px !important;
}
.ag-theme-fresh .ag-cell {
    line-height: 23px;
    padding-left: 12px;
    padding-right: 12px;
    border: 1px solid transparent;
    padding-left: 4px;
    padding-right: 2px;
    padding: 0px !important;
}
				.ag-theme-fresh .ag-cell-no-focus {
    border-right: 1px dotted silver;
    text-align: left !important;
}
.ag-theme-fresh .ag-header-cell {
    border-right: 1px solid darkgrey;
    box-sizing: border-box;
    text-align: left;
    padding: 0px;
}
</style>
</head>
<body>
<header id="topnav">
  <div class="topbar-main">
    <div class="container-fluid">
      <div class="menu-extras">
        <ul class="nav navbar-nav navbar-right pull-right">
          
          <li class="dropdown navbar-c-items"> <a href="javascript:void(0)" data-target="#" class="dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-expanded="false"> <i class="icon-bell"></i> <span class="badge badge-xs badge-danger">3</span> </a>
            <ul class="dropdown-menu dropdown-menu-lg">
              <li class="notifi-title"><span class="label label-default pull-right">New 3</span>Notification</li>
              <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 230px;">
                <li class="list-group slimscroll-noti notification-list" style="overflow: hidden; width: auto; height: 230px;"> 
                  <!-- list item--> 
                  <a href="javascript:void(0);" class="list-group-item">
                  <div class="media">
                    <div class="pull-left p-r-10"> <em class="fa fa-diamond noti-primary"></em> </div>
                    <div class="media-body">
                      <h5 class="media-heading">A new order has been placed A new order has been placed</h5>
                      <p class="m-0"> <small>There are new settings available</small> </p>
                    </div>
                  </div>
                  </a> 
                  
                  <!-- list item--> 
                  <a href="javascript:void(0);" class="list-group-item">
                  <div class="media">
                    <div class="pull-left p-r-10"> <em class="fa fa-cog noti-warning"></em> </div>
                    <div class="media-body">
                      <h5 class="media-heading">New settings</h5>
                      <p class="m-0"> <small>There are new settings available</small> </p>
                    </div>
                  </div>
                  </a> 
                  
                  <!-- list item--> 
                  <a href="javascript:void(0);" class="list-group-item">
                  <div class="media">
                    <div class="pull-left p-r-10"> <em class="fa fa-bell-o noti-custom"></em> </div>
                    <div class="media-body">
                      <h5 class="media-heading">Updates</h5>
                      <p class="m-0"> <small>There are <span class="text-primary font-600">2</span> new updates available</small> </p>
                    </div>
                  </div>
                  </a> 
                  
                  <!-- list item--> 
                  <a href="javascript:void(0);" class="list-group-item">
                  <div class="media">
                    <div class="pull-left p-r-10"> <em class="fa fa-user-plus noti-pink"></em> </div>
                    <div class="media-body">
                      <h5 class="media-heading">New user registered</h5>
                      <p class="m-0"> <small>You have 10 unread messages</small> </p>
                    </div>
                  </div>
                  </a> 
                  
                  <!-- list item--> 
                  <a href="javascript:void(0);" class="list-group-item">
                  <div class="media">
                    <div class="pull-left p-r-10"> <em class="fa fa-diamond noti-primary"></em> </div>
                    <div class="media-body">
                      <h5 class="media-heading">A new order has been placed A new order has been placed</h5>
                      <p class="m-0"> <small>There are new settings available</small> </p>
                    </div>
                  </div>
                  </a> 
                  
                  <!-- list item--> 
                  <a href="javascript:void(0);" class="list-group-item">
                  <div class="media">
                    <div class="pull-left p-r-10"> <em class="fa fa-cog noti-warning"></em> </div>
                    <div class="media-body">
                      <h5 class="media-heading">New settings</h5>
                      <p class="m-0"> <small>There are new settings available</small> </p>
                    </div>
                  </div>
                  </a> </li>
                <div class="slimScrollBar" style="background: rgb(152, 166, 173) none repeat scroll 0% 0%; width: 5px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px;"></div>
                <div class="slimScrollRail" style="width: 5px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51) none repeat scroll 0% 0%; opacity: 0.2; z-index: 90; right: 1px;"></div>
              </div>
              <li> <a href="javascript:void(0);" class="list-group-item text-right"> <small class="font-600">See all notifications</small> </a> </li>
            </ul>
          </li>
          <li class="hidden-xs">
                                    <a href="javascript:toggleFullScreen(document.body)" id="btn-fullscreen" class="waves-effect waves-light"><i class="icon-size-fullscreen"></i></a>
                                </li>
          <li class="dropdown navbar-c-items"> <a href="" class="dropdown-toggle waves-effect waves-light profile" data-toggle="dropdown" aria-expanded="false"><img src="images/avatar-1.jpg" alt="user-img" class="img img-circle"> </a>
            <ul class="dropdown-menu">
              <li><a href="javascript:void(0)"><i class="icon-user"></i> ${LoginDet.em_emp_eml}</a></li>
              <li><a href="authentication.mm"><i class="ti-settings text-custom m-r-10"></i> Settings</a></li>
              <li><a href="javascript:void(0)"><i class="ti-lock text-custom m-r-10"></i> Lock screen</a></li>
              <li class="divider"></li>
              <li><a href="javascript:vlogut()"><i class="icon-lock"></i> Logout</a></li>
            </ul>
          </li>
        </ul>
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-3"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
          <a class="navbar-brand" href="javascript:void(0)"> MARIJO DESIGNS</a> </div>
      </div>
    </div>
  </div>
  <!-- Second navbar for search -->
  <nav class="navbar navbar-inverse navbar-custom"> 
    <!-- Brand and toggle get grouped for better mobile display --> 
    
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="navbar-collapse-3">
      <ul class="nav navbar-nav navbar-left">
        <li ><a href="dashboard.mm"><i class="md md-dashboard"></i>dashboard</a> </li>
        <li class="dropdown mega-dropdown">
          <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown">Masters</a>

          <ul class="dropdown-menu mega-dropdown-menu row dropwdth">
            <li class="col-sm-6">
              <ul>
              <li><a href="company.mm">Company</a></li>
              <li><a href="department.mm">Department</a></li>
                <li><a href="employeemaster.mm">Employee</a></li>
           
            <li><a href="bom.mm">BOM</a></li>
            <li><a href="uom.mm">Uom</a></li>
               <li><a href="daywiseprice.mm">Day Wise Price</a></li>
                 <li><a href="alloymaster.mm">Alloy</a></li><li><a href="carat.mm">Carat</a></li>
              </ul>
            </li>
            <li class="col-sm-6">
              <ul>
              <li><a href="store.mm">Location</a></li>
               <li><a href="process.mm">Process</a></li>
              <li><a href="vendor.mm">Vendor/Customer</a></li>
            <li><a href="stone.mm">Stone/ Non Gold</a></li>
            <li><a href="mold.mm">Mold</a></li>
             <li><a href="design.mm">Design</a></li>
            <li><a href="rawmetrial.mm">Raw materials</a></li><li><a href="inoutbom.mm">IN&OUT Bom</a></li>
              </ul>
            </li>
          </ul>

        </li>
        
       <li class="dropdown"><a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown"><i class="md md-layers"></i>Planning</a>
         <ul class="dropdown-menu" role="menu">
            <li><a href="order.mm">Order</a></li>
            <li><a href="joborder.mm">Job Order</a></li>
           
            <li><a href="wax.mm">Wax</a></li>
            <li><a href="treegenerator.mm">Tree Generator</a></li>
          </ul>
        </li>
        <li class="dropdown"> <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown"><i class="md md-class"></i>GC</a>
         <ul class="dropdown-menu">
            <li><a href="inward.mm">Inward</a></li>
           <li><a href="alloying.mm">Alloying</a></li><li><a href="casting.mm">Casting</a></li>
          </ul>
        </li>
        <li class="dropdown"> <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown"><i class="md md-pages"></i>Process</a>
        <ul class="dropdown-menu multi-level">
            <li><a href="internaltransfer.mm">Internal Transfer</a></li>
                <li><a href="finishproducts.mm">Finished Products</a></li> 
            <li><a href="directmainprocess.mm">Dirct Main Process</a></li><li><a href="mainprocess.mm">Main Process</a></li><li><a href="subprocess.mm">Sub Process</a></li>
            <li><a href="dc.mm">DC</a></li> <li><a href="recover.mm">Recovery Process</a></li>
          </ul>
          
        </li>
        
            <li class="dropdown"> <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="md md-pages"></i>Reports</a> <ul class="dropdown-menu multi-level"> <li><a href="closingstock.mm">CLOSING STOCK</a></li><li><a href="getallreports.mm">REPORTS</a></li>   </ul> </li><li class="navbar-c-items">
            <form role="search" onsubmit="return false" class="navbar-left app-search pull-left hidden-xs">
              <input placeholder="Quick Search Item" class="form-control" type="text">
              <a href="javascript:void(0)" ></a>
              
            </form>
          </li>
        
      </ul>
    </div>
    <!-- /.navbar-collapse --> 
  </nav>
  <!-- /.navbar --> 
</header>
<div class="wrapper">
  <div class="container-fluid">
   
    <div class="row">
      <div class="col-md-12 col-lg-12">
     <div class="row" id="post-review-box" style="margin-top: 12px; height: auto; border-top: 1px solid rgb(246, 246, 246); padding: 9px 5px 5px;">
										<div class="col-md-12">
											<form accept-charset="UTF-8" action="" method="post">
												<div class="form-horizontal" id="insetElmnt1"><div class="form-group">
												<div class="row">
												<label class="control-label col-md-1" style="text-align:right;">Company:</label>
												<div class="col-md-2 autofillData">
												  <select class="selectpicker" data-live-search="true" id="ohd_cmy_cd">
                                        <c:forEach var="ExistCom" items="${ExistComDet}">
									                               <option value="${ExistCom.cm_cmy_cd}">${ExistCom.cm_cmy_nm}</option>
									                               </c:forEach>
													</select>			
												</div>
												<label class="control-label col-md-1" style="text-align:right;">Dept:</label>
												<div class="col-md-2 autofillData">
												 <select class="selectpicker" multiple data-live-search="true" id="iwdDptcd">
 								  			<option value="">Select DepartMent</option>
										 <c:forEach var="ExistDpt" items="${ExistDptDet}">
										  <option value="${ExistDpt.dm_dpt_cd}">${ExistDpt.dm_dpt_nm}</option>
										  </c:forEach>
</select>
												</div>
												<label class="control-label col-md-1" style="text-align:right;">Purity:</label>
												<div class="col-md-2 autofillDataMultiple" >
												<select class="selectpicker prtyFiler" multiple data-selected-text-format="count>1" data-actions-box="true" data-size="5" data-live-search="true" >
												</select>
												</div>
												<div class="col-md-1">
												<button class="btn btn-primary" id="printWhole" type="button" >Print</button>
												</div>
												</div>
												</div>
												<div class="form-group">
												<div class="row">
												<label class="control-label col-md-1"  style="text-align:right;">Worker:</label>
												<div class="col-md-2 dateParent">
												<select class="selectpicker" multiple>
												<option>Select Worker</option>
												</select>
												</div>
												
												<label class="control-label col-md-1" style="text-align:right;">Header:</label>
												<div class="col-md-2 dateParent">
												<select class="selectpicker headerfilter" data-actions-box="true" data-size="5" multiple data-live-search="true">
												<option value="">Select Header</option>
												<option value="myGrid">ORDER'S CURRENT STATUS DETAIL</option>
												<option value="myGridBomStock">BOM STOCK DETAIL</option>
												<option value="myGridStockPrty">DEPARTMENT STOCK WITH PUIRTY</option>
												<option value="myGridStockNONPrty">DEPARTMENT STOCK NON PUIRTY</option>
												<option value="myGridCMYWRK">COMPANY WORKERS STOCK DETAIL</option>
												<option value="myGridOUTWRK">OUTSIDE WORKER STOCK DETAIL</option>
												<option value="myGridWRKNP">WORKER STOCK NON PUIRTY</option>	
												<option value="myGridCLOSESTK">DEPARTMENT CLOSE STOCK</option>
												<option value="myGridLOSSTK">LOSS AND EXCESS STOCK</option>
												<option value="myGridPHYSTK">PHYSICAL STOCK DETAIL</option>
												<option value="myGridORDPTCH">ORDER BATCH AND DISPATCH DETAIL</option>
												</select>
												</div>
												<label class="control-label col-md-1" style="text-align:right;">Date:</label>
												<div class="col-md-2 dateParent">
												<input class="form-control dynamicInputs1"  placeholder="Enter Date">
												</div>
												<div class="col-md-1">
												<button class="btn btn-primary" onclick="saveColumnState()" type="button" >Save</button>
												</div>
												</div>
												</div>
												</div>
											</form>
										</div>
									</div>
									</div> 
       </div>
       <div class="row pdnf">
      <div class="col-md-12 col-lg-12" style="padding:0px;">
           	<div id="myGrid" style="height: 300px; border: 2px solid #004274;" class="ag-theme-fresh"></div>
         </div>
    </div>
       <div class="well container-fluid" style="padding: 1px;text-align: center;border-radius: 1px;">
       
       <h4><span style="
    border: 2px solid #00427485;
    font-weight: bold;
">MARIJO CLOSING STOCK DETAIL'S</span></h4>
       
       </div>
       
       
       <div class="col-md-12 wholestyler" style="padding:0px;margin-bottom:1%;">
       
       <div class="col-md-4 pdnf"> 
       
       <div class="boxtab"> 
       <span>BOM STOCK DETAIL</span>
         	<div id="myGridBomStock" style="height: 960px;" class="ag-theme-fresh"></div>
       </div> 
       
       </div>
       
       <div class="col-md-4 pdnf"> 
       
       <div class="boxtab"> 
       <span>DEPARTMENT STOCK_WITH PRTY DETAIL</span>
      <div id="myGridStockPrty" style="height: 300px;" class="ag-theme-fresh"></div>
       </div>  
       
       </div>
        <div class="col-md-4 pdnf"> 
       
       <div class="boxtab"> 
         <span>LOSS STOCK DETAIL</span>
       <div id="myGridLOSSTK" style="height: 300px;" class="ag-theme-fresh"></div>
      </div> 
       
       </div>
       
       
       
       
       <div class="col-md-4 pdnf"> 
       
       <div class="boxtab"> 
          <span>CMY WORKER STOCK DETAIL</span>
      <div id="myGridCMYWRK" style="height: 300px;" class="ag-theme-fresh"></div>
     
       </div> 
       
       </div>
       
       
       <div class="col-md-4 pdnf"> 
       
       <div class="boxtab"> 
         <span>OUTSIDE WORKER STOCK DETAIL</span>
       <div id="myGridOUTWRK" style="height: 300px;" class="ag-theme-fresh"></div>
      </div> 
       
       </div>
      <div class="col-md-4 pdnf">
       
       <div class="boxtab"> 
          <span>DEPARTMENT STOCK_WITH NONPRTY DETAIL</span>
      <div id="myGridStockNONPrty" style="height: 300px;" class="ag-theme-fresh"></div>
     
       </div>  
       
       </div>
       <div class="col-md-4 pdnf"> 
       
       <div class="boxtab"> 
         <span>WORKER NONPRTY STOCK DETAIL</span>
       <div id="myGridWRKNP" style="height: 300px;" class="ag-theme-fresh"></div>
      </div> 
       
       </div>
       
        <div class="col-md-12 pdnf"> 
       
       <div class="boxtab"> 
         <span>DPTMENT CLOSE STOCK DETAIL</span>
        <div id="myGridCLOSESTK" style="height: 300px;" class="ag-theme-fresh"></div>
     
       </div> 
       
       </div>
       
       
       
       <div class="col-md-6 pdnf"> 
       
       <div class="boxtab"> 
         <span>PHYSICAL STOCK DETAIL</span>
       <div id="myGridPHYSTK" style="height: 300px;" class="ag-theme-fresh"></div>
       </div> 
       
       </div>
       
       
       <div class="col-md-6 pdnf"> 
       
       <div class="boxtab"> 
         <span>ORDER PATCH DETAIL</span>
       <div id="myGridORDPTCH" style="height: 300px;" class="ag-theme-fresh"></div>
       </div> 
       
       </div>
       
       
       
       </div>
       
       
       
    </div>
  </div>
</div>




<!-- jQuery (necessary for Bootstrap's JavaScript plugins) --> 
<script src="js/jquery.min.js"></script> 
<!-- Include all compiled plugins (below), or include individual files as needed --> 

<script src="js/bootstrap-select.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/reports/ag-grid-enterprise.js"></script>
<script src="js/reports/closingstocks.js"></script>

<script type="text/javascript">
var cmy='${LoginDet.em_cmy_cd}';
try{
window.reportDetail='${ReportDtlJSON}'||'[]';
reportDetail=reportDetail.replace(/](")|(")\[/g,(s)=>{
		if(s=='"['){
		return "'["
		}
		else{
		return "]'"
		}
		});
reportDetail=eval(reportDetail);	
}
catch(e)
{
console.log(e);
	}
window.prtyList='${prtyListJson}'||'[]';
window.orderDtlData='${DashBoadDataTableJSON}'||'[]';
window.bomDtlData='${exstbomStkTableJSON}'||"[]"
window.dprStckWithPrty='${exstDptStkWithPrtyTableJSON}'||"[]";
window.dprStckWithOutPrty='${exstDptStkWithOutPrtyTableJSON}'||"[]";
window.cmyWrkStk='${exstCmyWrkWithPrtyTableJSON}'||"[]";
window.outWrkStk='${exstOutSideWrkWithPrtyTableJSON}'||"[]";
window.WrkStkNP='${exstWrkNonPrtyTableJSON}'||"[]";
window.closeDptStk='${exstDptClseStkTableJSON}'||"[]";
window.phyStkDpt="[]";
window.ordDISPTCH="[]";
window.LOSSTK='${exstLossStkTableJSON}'||"[]";
function toggleFullScreen(elem) {
    // ## The below if statement seems to work better ## if ((document.fullScreenElement && document.fullScreenElement !== null) || (document.msfullscreenElement && document.msfullscreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
        if (elem.requestFullScreen) {
            elem.requestFullScreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
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
    function vlogut(){
    window.location.href='<c:url value="j_spring_security_logout"/>';
    }
 $(function(){
	if(prtyList){
	prtyList=eval(prtyList).reduce((old,opt)=>{old.push("<option>"+opt+"</option>"); return old},[]);
	$(".prtyFiler").html(prtyList).selectpicker("refresh");
	}
 })
</script>
</body>
</html>