<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<title>Employee</title>

<script type="text/javascript" src="dwr/interface/AjaxController.js"></script>
<script type="text/javascript" src="dwr/engine.js"></script>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- Bootstrap -->
<link href="css/customefonts.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/simple-line-icons.min.css" rel="stylesheet">
<link href="css/simple-line-icons.min.css" rel="stylesheet">
<link rel="stylesheet" href="css/font-awesome.min.css">
    <script src="js/3.1.1jquery.min.js"></script>
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="css/bootstrap-select.min.css">

<!-- Latest compiled and minified JavaScript -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
   <style>.btn.btn-circlesuc {border-radius: 50px !important; background: #5fbeaa !important; border-color: #ccc !important;  color: #333 !important;}
.btn-circle:hover { 
	border-radius: 50px;
    background: #e6e6e6 !important;
    border-color: #ccc !important;
    color: #333 !important;
}
.bootstrap-select:not([class*=col-]):not([class*=form-control]):not(.input-group-btn) {
    width: 100%;
}
.bs-placeholder {
	    background: #fff !important;
    height: 32px !important;
    padding: 1px 12px !important;
    border: 1px solid #e7ecf1 !important;
    border-radius: 2px !important;
    font-family: "Open Sans",sans-serif;
    -webkit-box-shadow: inset 0 0px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 0px 1px rgba(0,0,0,.075);
    color: #555 !important;
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
              <li><a href="<c:url value="j_spring_security_logout"/>"><i class="icon-lock"></i> Logout</a></li>
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
        <li><a href="dashboard.mm"><i class="md md-dashboard"></i>dashboard</a> </li>
        <li class="dropdown mega-dropdown active">
          <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown">Masters</a>

          <ul class="dropdown-menu mega-dropdown-menu row dropwdth">
            <li class="col-sm-6">
              <ul>
              <li><a href="company.mm">Company</a></li>
              <li><a href="department.mm">Department</a></li> 
              <li class="emplactive"><a href="employeemaster.mm" class="emplactive">Employee</a></li>
           
            <li><a href="bom.mm">BOM</a></li>
            <li><a href="uom.mm">Uom</a></li>
               <li><a href="daywiseprice.mm">Day Wise Price</a></li>   <li><a href="alloymaster.mm">Alloy</a></li><li><a href="carat.mm">Carat</a></li>
             
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
        </li>        <li class="dropdown"> <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="md md-pages"></i>Reports</a> <ul class="dropdown-menu multi-level"> <li><a href="closingstock.mm">CLOSING STOCK</a></li><li><a href="getallreports.mm">REPORTS</a></li>   </ul> </li><li class="navbar-c-items">
               <form role="search" onsubmit="return false" class="navbar-left app-search pull-left hidden-xs">
              <input placeholder="Quick menu" class="form-control" type="text">
              <a href=""><i class="icon-magnifier-remove"></i></a>
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
        <div class="panel panel-default">
          <div class="panel-body">
            <div class="col-md-12 col-lg-12">
            <div class="portlet light bordered">
                                    <div class="portlet-title">
                                        <div class="caption">
                                            <i class="icon-social-dribbble font-dark hide"></i>
                                            <span class="caption-subject font-dark bold uppercase text-muted page-title-alt"> <h4 class="page-title">Add Employee</h4></span>
                                        </div>
                                      <div class="actions">
                                            
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:saveaddEmp()" id="saveOfEmplBtn" data-toggle="tooltip" title="Save">
                                                <i class="icon-doc"></i></a>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:clrInputForAll()" data-toggle="tooltip" title="Delete">
                                                <i class="icon-trash"></i>
                                            </a>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="employeemaster.mm" id="resrOut" data-toggle="tooltip" title="Existings">
                                                <i class="icon-logout"></i>
                                            </a>
                                        </div>
                                         <div class="actions">
                                         <c:choose><c:when test="${SaveEmpResult eq true}">
                 <span id="successResult" style="color:green"><div class="alert alert-success">Saved Successfully</div></span>
                    </c:when><c:otherwise> <span id="successResult"></span></c:otherwise>
                    </c:choose></div>
                                    </div>
                                    </div>
                                    
                                </div>
                                <form class="form-horizontal" action="saveEmp.mm" method="post">
                                <div class="form-group">
                                <input type="hidden" id="ExstMobNoEmp" value='${ExstMobNoEmp}'>
                                  <input type="hidden" id="ExstEmlNoEmp" value='${ExstEmlNoEmp}'>
                                 <div class="col-md-2">
                                <label class="control-label">Company Name</label>
                                </div>
                                <div class="col-md-4">
                                <select class="form-control" name="em_cmy_cd" required="required">
                                <option value="">Select Company</option>
                              <c:forEach var="ExistCom" items="${ExistComDet}">
                               <option value="${ExistCom.cm_cmy_cd}">${ExistCom.cm_cmy_nm}</option>
                               </c:forEach>
                                </select>
                                </div>
                                <div class="col-md-2">
                                <label class="control-label">Location Name</label>
                                </div>
                                <div class="col-md-4">
                                <select class="form-control" name="em_str_cd" required="required">
                                <option value="">Select Location</option>
                                <c:forEach var="ExistStr" items="${ExistStrDet}">
										  <option value="${ExistStr.sm_str_cd}">${ExistStr.sm_str_nm}</option>
										  </c:forEach>
                                </select>
                                </div>
                                </div>
                                <div class="form-group">
                                 <div class="col-md-2">
                                <label class="control-label">Department</label>
                                </div>
                                <div class="col-md-10">
                                <select class="selectpicker" data-live-search="true" multiple data-selected-text-format="count > 3" name="em_dpt_cd" data-actions-box="true" required="required">
 	 							 <c:forEach var="ExistDpt" items="${ExistDptDet}">
										  <option value="${ExistDpt.dm_dpt_cd}">${ExistDpt.dm_dpt_nm}</option>
										  </c:forEach>
</select>

                                </div>
                                </div>
                                <div class="form-group">
                                 <div class="col-md-2">
                                <label class="control-label">Name</label>
                                </div>
                                <div class="col-md-10">
                                <input type="text" class="form-control" placeholder="Name" name="em_emp_nm" required="required">
                                </div>
                                </div>
                                <div class="form-group">
                                 <div class="col-md-2">
                                <label class="control-label">Mobile Number</label>
                                </div>
                                <div class="col-md-10">
                                <input type="text" class="form-control" placeholder="Mobile Number" name="em_emp_mob" minlength="10" maxlength="10" onkeypress='return event.charCode >= 48 && event.charCode <= 57' >
                                </div>
                                </div>
                                <div class="form-group">
                                 <div class="col-md-2">
                                <label class="control-label">Email</label>
                                </div>
                                <div class="col-md-10">
                                <input type="email" class="form-control" placeholder="Email" name="em_emp_eml" required="required">
                                </div>
                                </div>
                                <div class="form-group">
                                 <div class="col-md-2">
                                <label class="control-label">Login</label>
                                </div>
                                <div class="col-md-10">
                                <input type="text" class="form-control" placeholder="Login" name="em_emp_login_nm" required="required">
                                </div>
                                </div>
                                <div class="form-group">
                                 <div class="col-md-2">
                                <label class="control-label">Password</label>
                                </div>
                                <div class="col-md-10">
                                <input type="password" class="form-control" placeholder="Password" name="em_emp_login_pwd" required="required" minlentgh="6">
                                </div>
                                </div>
                                <div class="form-group">
                                  <div class="col-md-2">
                                <label class="control-label">Type</label>
                                </div>
                                <div class="col-md-10">
                                <select class="form-control" name="em_emp_typ" required="required">
                                <option value="">Select Type</option>
                                <option>Employee</option>
                                <option>Worker</option>
                                <option>Admin</option>
                                </select>
                                </div>
                                </div>
                                <div class="form-group">
                                 <div class="col-md-2">
                                <label class="control-label">Allowed Qty</label>
                                </div>
                                <div class="col-md-10">
                                <input type="text" class="form-control" placeholder="Allowed Qty" name="em_emp_alw_qty">
                                </div>
                                </div>
                                <button style="display:none" type="submit" id="submitterEmpForm"></button>
                              
                                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) --> 
<script src="js/jquery.min.js"></script> 
<!-- Include all compiled plugins (below), or include individual files as needed --> 
<script src="js/bootstrap.min.js"></script>

<script src="js/bootstrap-select.min.js"></script>
        <script>
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});
</script>
<script>
$(function(){
	var settTime=setTimeout(resetSpan, 3000);
	$('#Showind').hide();	
$('#resrOut').click(function (){
$('#Showind').toggle();	
});
})
$("form").submit(function(event){
	var emlExst=$('input[name=em_emp_eml]').val(),mobExst=$('input[name=em_emp_mob]').val();
	if($('#ExstEmlNoEmp').val()!=""&&emlExst!=""){
		var emlEmp=eval($('#ExstEmlNoEmp').val());
		if($.inArray(emlExst,emlEmp)>-1){
			event.preventDefault();
			$("#successResult").html('<div class="alert alert-danger" id="successfnlME21215">Email Already Used..</div>');$("#successfnlME21215").fadeOut(3500);
			return false;
		}
	}
	if($('#ExstMobNoEmp').val()!=""&&mobExst!=""){
		var mobEmp=eval($('#ExstMobNoEmp').val());
		if($.inArray(mobExst,mobEmp)>-1){
			event.preventDefault();
			$("#successResult").html('<div class="alert alert-danger" id="successfnlME21115">MobileNo Already Used..</div>');$("#successfnlME21115").fadeOut(3500);
			return false;
		}
	}
	$("#saveOfEmplBtn").addClass("disabled");$("#saveOfEmplBtn").prop("disabled",true);
});
function resetSpan(){
	$("#successResult").html("");
}
function clrInputForAll(){
	$("input,select").val("");
	 $('.selectpicker').selectpicker('refresh');
	$("#successResult").html('<div class="alert alert-success" id="successfnl21215">All Field Cleared..</div>');$("#successfnl21215").fadeOut(3500);
}
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
</script>
<script src="js/masterController.js"></script>
</body>
</html>