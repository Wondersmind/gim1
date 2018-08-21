<!DOCTYPE html>
<html lang="en" ng-app="">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<title>Casting</title>
<script type="text/javascript" src="dwr/interface/AjaxController.js"></script>
<script type="text/javascript" src="dwr/engine.js"></script>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- Bootstrap -->
  
  <link href="css/customefonts.css" rel="stylesheet">
<link href="css/customefonts.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/simple-line-icons.min.css" rel="stylesheet">
<script src="js/3.1.1jquery.min.js"></script>
<script src="js/angular.js"></script>
<script src="js/angular-resource.js"></script>
<link href="css/datepicker.css" type="text/css" rel="stylesheet">
<link rel="stylesheet" href="css/bootstrap-select.min.css">
  <link href="css/datatable.css" rel="stylesheet">
<link rel="stylesheet" href="css/font-awesome.min.css">
   <style>.btn.btn-circlesuc {border-radius: 50px !important; background: #5fbeaa !important; border-color: #ccc !important;  color: #333 !important;}
	
.btn-circle:hover { 
	border-radius: 50px;
    background: #e6e6e6 !important;
    border-color: #ccc !important;
    color: #333 !important;
}
.btn-default {
    background-color: #fff !important;
        border: 1px solid #ebeff2 !important;
		    color: #333 !important;
}
.btn-default:hover {
    background-color: #e6e6e6 !important;
}
.btn-primary {
    color: #fff;
    background-color: #004274;
    border-color: #004274;
}
.bootstrap-select:not([class*=col-]):not([class*=form-control]):not(.input-group-btn) {
    width: 100%;
}
.bs-placeholder {
	    background: #fff !important;
    height: 32px !important;
    padding: 1px 12px !important;
    border: 1px solid #e7ecf1 !important;
    border-radius: 0px !important;
    font-family: "Open Sans",sans-serif;
    -webkit-box-shadow: initial;
    box-shadow: initial;
    color: #555 !important;
}
.btn-default, .btn-default:hover, .btn-default:focus, .btn-default:active, .btn-default.active, .btn-default.focus, .btn-default:active, .btn-default:focus, .btn-default:hover, .open > .dropdown-toggle.btn-default {
    background-color: #fff !important;
    border: 1px solid #e7ecf1 !important;
}
.inptgrp {
	    border-bottom-right-radius: 0px !important;
    border-top-right-radius: 0px !important;
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
              <li><a href="j_spring_security_logout"><i class="icon-lock"></i> Logout</a></li>
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
        <li><a href="dashboard.mm"><i class="md md-dashboard"></i>Dashboard</a> </li>
        <li class="dropdown mega-dropdown active">
          <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown">Masters</a>

          <ul class="dropdown-menu mega-dropdown-menu row dropwdth">
                       <li class="col-sm-6">
              <ul>
              <li><a href="company.mm">Company</a></li>
              <li><a href="department.mm">Department</a></li>
                <li><a href="employeemaster.mm">Employee</a></li>
           
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
        </li>
        <li class="dropdown"> <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="md md-pages"></i>Reports</a> <ul class="dropdown-menu multi-level"> <li><a href="closingstock.mm">CLOSING STOCK</a></li><li><a href="getallreports.mm">REPORTS</a></li>   </ul> </li><li class="navbar-c-items">
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
                                            <span class="caption-subject font-dark bold uppercase text-muted page-title-alt"> <h4 class="page-title">Edit Alloy Master</h4></span>
                                        </div>
                                       <div class="actions">
                                     <a class="btn btn-circle btn-icon-only btn-default" href="javascript:saveAlloyMstRec()" id="saveButton" data-toggle="tooltip" title="Update">
                                                <i class="icon-doc"></i>
                                            </a>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" id="resrOut" data-toggle="tooltip" title="Print">
                                                <i class="icon-printer"></i>
                                                </a>
                                           <a class="btn btn-circle btn-icon-only btn-default" href="javascript:;" data-toggle="tooltip" title="Delete!">
                                                <i class="icon-trash"></i></a>
                                                <a class="btn btn-circle btn-icon-only btn-default" href="alloymaster.mm" id="resrOut" data-toggle="tooltip" title="Existing">
                                                <i class="icon-logout"></i>
                                            </a>
                                        </div>
                                          <div class="actions">
                                          <span id="savesuccessRes"></span></div>
                                    </div>
                                    
                                </div>
                                <form class="form-horizontal" onsubmit="return false">
                                <div class="row">
                                <input type="hidden" id="prikeyOfAlyMst" value="${ExistAlyOnly.am_id}">
                                      <input type="hidden" id="crtIdOfAlyMst" value="${ExistAlyOnly.am_id}">
                                            <input type="hidden" id="crtDtOfAlyMst" value="${ExistAlyOnly.am_id}">
                                <div class="col-md-2"></div>
                                
                                                                <div class="col-md-8">
                                
                                 <div class="table-responsive">          
  <table class="table table-bordered table-striped">
    <thead>
      
      <tr>
          <th colspan="2">Code:</th><th colspan="3" id="PriIdOfaloy">${ExistAlyOnly.am_aly_cd}</th>
      </tr>
      <tr>
        <th colspan="2">Name:</th><th colspan="3"><input type="text" class="form-control" placeholder="Enter Name" id="nameOfAlloy" value="${ExistAlyOnly.am_aly_nm}"></th>
      </tr>
       <tr>
        <th colspan="2">Description:</th><th colspan="3"><textarea class="form-control" placeholder="Enter Description" id="descOfAlloy">${ExistAlyOnly.am_aly_des}</textarea></th>
      </tr>
      <tr>
        <th colspan="2"><input type="text" class="form-control catgyBoxinAly" placeholder="Enter Category"></th>
        <th colspan="2"><input type="number" class="form-control valBoxinAly" placeholder="Enter Value (Max=100%)"  ></th><th><button class='button button-5 button-5a icon-cart' onclick="onClickOfEditAlyMstRec()">SAVE</button></th>
      </tr>
      
    </thead>
    <tbody id="Alytbody">
 
    </tbody>
    <tbody style="border: aliceblue;" id="AlytbodyExist">
    <tr style="background-color: #5fbeaa;color: white;"><td colspan="2">${ExistAlyOnly.am_aly_ctgy1}</td>  <td colspan="2">${ExistAlyOnly.am_aly_val1}</td><td>	<button type="button" class="btn btn-xs btn-default btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Delete row"  onclick="delAlloyMstRecExst(this)"><i class="fa fa-trash-o"></i></button></td></tr>
     <tr style="background-color: #5fbeaa;color: white;"><td colspan="2">${ExistAlyOnly.am_aly_ctgy2}</td>  <td colspan="2">${ExistAlyOnly.am_aly_val2}</td><td>	<button type="button" class="btn btn-xs btn-default btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Delete row"  onclick="delAlloyMstRecExst(this)"><i class="fa fa-trash-o"></i></button></td></tr>
     <tr style="background-color: #5fbeaa;color: white;"><td colspan="2">${ExistAlyOnly.am_aly_ctgy3}</td>  <td colspan="2">${ExistAlyOnly.am_aly_val3}</td><td>	<button type="button" class="btn btn-xs btn-default btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Delete row"  onclick="delAlloyMstRecExst(this)"><i class="fa fa-trash-o"></i></button></td></tr>
     <tr style="background-color: #5fbeaa;color: white;"><td colspan="2">${ExistAlyOnly.am_aly_ctgy4}</td>  <td colspan="2">${ExistAlyOnly.am_aly_val4}</td><td>	<button type="button" class="btn btn-xs btn-default btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Delete row"  onclick="delAlloyMstRecExst(this)"><i class="fa fa-trash-o"></i></button></td></tr>
     <tr style="background-color: #5fbeaa;color: white;"><td colspan="2">${ExistAlyOnly.am_aly_ctgy5}</td>  <td colspan="2">${ExistAlyOnly.am_aly_val5}</td><td>	<button type="button" class="btn btn-xs btn-default btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Delete row"  onclick="delAlloyMstRecExst(this)"><i class="fa fa-trash-o"></i></button></td></tr>
     <tr style="background-color: #5fbeaa;color: white;"><td colspan="2">${ExistAlyOnly.am_aly_ctgy6}</td>  <td colspan="2">${ExistAlyOnly.am_aly_val6}</td><td>	<button type="button" class="btn btn-xs btn-default btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Delete row"  onclick="delAlloyMstRecExst(this)"><i class="fa fa-trash-o"></i></button></td></tr>
     <tr style="background-color: #5fbeaa;color: white;"><td colspan="2">${ExistAlyOnly.am_aly_ctgy7}</td>  <td colspan="2">${ExistAlyOnly.am_aly_val7}</td><td>	<button type="button" class="btn btn-xs btn-default btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Delete row"  onclick="delAlloyMstRecExst(this)"><i class="fa fa-trash-o"></i></button></td></tr>
   
    </tbody>
  </table>
  </div>
  </div>
  <div class="col-md-2">
  </div>
  </div>
                                
                                
                                
 
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

<script src="js/datepicker.js" type="text/javascript"></script>
<script src="js/datatable.js"></script>
   <script>
	 $(function() {
    $(".datepicker").datepicker();
});
</script>  
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
});
function resetSpan(){
	$("#finalSaveDesinAlert").html("");
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
    $(function (){
    	$("#AlytbodyExist tr").each(function(){
    	$(this)["0"].cells[0].innerHTML==""?$(this).remove():"";
    	})
    	if($("#AlytbodyExist tr").size()==7){
    		$(".catgyBoxinAly,.valBoxinAly").prop("readonly",true);
    	}
    });
</script>
<script src="js/editalloyMaster.js"></script>
</body>
</html>