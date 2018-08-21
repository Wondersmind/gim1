<!DOCTYPE html>
<html lang="en" ng-app="">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<title>Edit Alloying</title>
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
<link href="css/bootstrap-datetimepicker.min.css" type="text/css" rel="stylesheet">

<link rel="stylesheet" href="css/bootstrap-select.min.css">
 <link href="css/datatable.css" rel="stylesheet">
<!-- Latest compiled and minified JavaScript -->

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    
   <style>.btn.btn-circlesuc {border-radius: 50px !important; background: #5fbeaa !important; border-color: #ccc !important;  color: #333 !important;}
  
.popover 
{
    top: -28px;
    left: 245px;
    display: block;
    width: 168px;
}
.popover-title {
    padding: 8px 14px;
    margin: 0;
    font-size: 14px;
    background-color: rgba(139, 195, 74, 0.12);
    border-bottom: 1px solid #ebebeb;
    border-radius: 5px 5px 0 0;
}

.btn-circle:hover { 
	border-radius: 50px;
    background: #e6e6e6 !important;
    border-color: #ccc !important;
    color: #333 !important;
}
.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {
    padding-bottom: 1px !important;
    padding-top: 1px !important;
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
    border-radius: 2px !important;
    font-family: "Open Sans",sans-serif;
    -webkit-box-shadow: inset 0 0px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 0px 1px rgba(0,0,0,.075);
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
        <script>
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});
</script>
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
                                            <span class="caption-subject font-dark bold uppercase text-muted page-title-alt"> <h4 class="page-title">Edit Alloying</h4></span>
                                        </div>
                                       <div class="actions">
                                       <a class="btn btn-circle btn-icon-only btn-default" href="javascript:beforesavingValidate()" id="saveButtonAly" data-toggle="tooltip" title="Update">
                                                <i class="icon-doc"></i>
                                            </a>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" id="resrOut" data-toggle="tooltip" title="Print">
                                                <i class="icon-printer"></i>
                                                </a>
                                                <c:choose><c:when test="${ExstAlyHdrOnly[4] eq '1'}">
                                          <a class="btn btn-circlesuc btn-icon-only btn-default disabled" href="javascript:void(0)" data-toggle="confirmation" data-popout="true"  title="Issued Authorization">
                                                <i class="icon-shield"></i>
                                            </a></c:when><c:otherwise>
                                             <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" data-toggle="confirmation" data-popout="true"  title="Issued Authorization">
                                                <i class="icon-shield"></i>
                                            </a>
                                            </c:otherwise> </c:choose>
                                               <c:choose><c:when test="${ExstAlyHdrOnly[4] eq '1'}">
                                             <c:choose><c:when test="${ExstAlyHdrOnly[5] eq '1'}">
                                          <a class="btn btn-circlesuc btn-icon-only btn-default disabled" href="javascript:void(0)" data-toggle="confirmation1" data-popout="true"  title="Received Authorization">
                                                <i class="icon-shield"></i>
                                            </a></c:when><c:otherwise>
                                             <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" data-toggle="confirmation1" data-popout="true"  title="Received Authorization">
                                                <i class="icon-shield"></i>
                                            </a>
                                            </c:otherwise> </c:choose></c:when></c:choose>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" data-toggle="tooltip" title="Import">
                                                <i class="icon-cloud-download"></i>
                                            </a>
                                            
                                              <c:choose><c:when test="${ExstAlyHdrOnly[4] eq '1'}"> 
                                            <a class="btn btn-circle btn-icon-only btn-default disabled" href="javascript:;" data-toggle="tooltip" title="Delete!">
                                                <i class="icon-trash"></i>
                                            </a></c:when><c:otherwise>
                                             <a class="btn btn-circle btn-icon-only btn-default" href="javascript:;" data-toggle="tooltip" title="Delete!">
                                                <i class="icon-trash"></i>
                                            </a>
                                            </c:otherwise> </c:choose>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="alloying.mm" id="resrOut" data-toggle="tooltip" title="Existing">
                                                <i class="icon-logout"></i>
                                            </a>
                                        </div>
                                            <div class="actions">
                                        <span id="savesuccessRes"></span> </div>
                                    </div>
                                    
                                </div>
                                
                                      
        <div class="modal fade" id="myPrtySample" role="dialog">
    <div class="modal-dialog modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">×</button>
          <h4 class="modal-title"><small>Purity Samples</small></h4>
        </div>
        <div class="modal-body">
          
          
                                
            <table class="table table-bordered table-stripped">
    <thead><tr><th>Type</th><th>IssWgt</th><th>Prty</th></tr></thead>
    <tbody>
        <tr><td>ALA1</td><td id="ta1tstIssedSmpe"></td><td><input type="number" class="form-control rtnPrtyies" id="ta1tstPrty" style="width:100px"></td></tr>
        <tr><td>ALB1</td><td id="tb1tstIssedSmpe"></td><td><input type="number" class="form-control rtnPrtyies" id="tb1tstPrty" style="width:100px"></td></tr>
        <tr><td>ALA2</td><td id="ta2tstIssedSmpe"></td><td><input type="number" class="form-control rtnPrtyies" id="ta2tstPrty" style="width:100px"></td></tr>
        <tr><td>ALB2</td><td id="tb2tstIssedSmpe"></td><td><input style="width:100px" class="form-control rtnPrtyies" id="tb2tstPrty" type="number"></td></tr>
    </tbody>
</table>     
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-success btn-sm" onclick="saveprityForBox(this)">Save</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
        
        
                                
                                <form class="form-horizontal">
                                <div class="row">
                                <div class="col-md-8 isudAuthRestriction" >
                                <div class="form-group">
                                 <div class="col-md-2">
                                   <input type="hidden" id="ExstStkInInward" value='${ExstStkInInward}'>
                                   <input type="hidden" id="StkLmtOfEMployee" value="${StkLmtOfEMployee}">
                                  <input type="hidden" id="ExstAlyRcvdStk" value='${ExstAlyRcvdStk}'>
                                  <input type="hidden" id="ExstAlyIsdStk" value='${ExstAlyIsdStk}'>
                                 <input type="hidden" id="authRevdAuthForId" value="${ExstAlyHdrOnly[5]}">
                                  <input type="hidden" id="authIssAuthForId" value="${ExstAlyHdrOnly[4]}">
                                  <input type="hidden" id="pryIdOfExst" value="${ExstAlyHdrOnly[8]}">
                                    <input type="hidden" id="crtIdOfExst" value="${ExstAlyHdrOnly[6]}">
                                      <input type="hidden" id="crtDtOfExst" value="${ExstAlyHdrOnly[7]}">
                                      <input type="hidden" id="ExtDptFoEdt" value='${ExtDptForEdt}'>
                                <label class="control-label">Company</label>
                                </div>
                                <input type="hidden" id="isdauthVal" value="${ExstAlyHdrOnly[4]}">
                                  <input type="hidden" id="rcvdauthVal" value="${ExstAlyHdrOnly[5]}">
                                <div class="col-md-4">
                                 <select class="selectpicker" data-live-search="true" id="alyCmyCd">
 										 <option value="">Select Company</option>
									                              <c:forEach var="ExistCom" items="${ExistComDet}">
									                              <c:choose><c:when test="${ExistCom.cm_cmy_cd eq ExstAlyHdrOnly[10]}"> <option value="${ExistCom.cm_cmy_cd}" selected="selected">${ExistCom.cm_cmy_nm}</option></c:when>
									                               <c:otherwise><option value="${ExistCom.cm_cmy_cd}">${ExistCom.cm_cmy_nm}</option></c:otherwise> </c:choose>
									                               </c:forEach>
</select>
<input type="hidden" id="AlyMstExtDet" value='${ExistAlyMst}'>
                                </div>
                                <div class="col-md-2">
                                <label class="control-label">Location</label>
                                </div>
                                <div class="col-md-4" >
                                 <select class="selectpicker" data-live-search="true" id="alyStrCd" >
  <option value="">Select Location</option>
							  <c:forEach var="ExistStr" items="${ExistStrDet}">
							  <c:choose><c:when test="${ExistStr.sm_str_cd eq ExstAlyHdrOnly[11]}"> <option value="${ExistStr.sm_str_cd}" selected="selected">${ExistStr.sm_str_nm}</option></c:when>
							  <c:otherwise> <option value="${ExistStr.sm_str_cd}">${ExistStr.sm_str_nm}</option></c:otherwise> </c:choose>
								
								 </c:forEach>
</select>
                                </div>
                                </div>
                                   <div class="form-group">
                                 <div class="col-md-2">
                                <label class="control-label">Alloy Number</label>
                                </div>
                                <div class="col-md-4">
                                <input type="text" class="form-control input-sm" placeholder="Alloy Number"  id="alyAlyCd" value="${ExstAlyHdrOnly[0]}" disabled="disabled">
                                </div>
                                 <div class="col-md-2">
                                <label class="control-label">Date / Time</label>
                                </div>
                                <div class="col-md-4">
                                <input type="text" class="form-control input-sm dateTimePick" placeholder="date/time" value="${ExstAlyHdrOnly[16]}" disabled>
                                </div>
                                </div>
                               <div class="form-group">
                                 <div class="col-md-2">
                                <label class="control-label">Alloy Type <i class="glyphicon glyphicon-filter" aria-hidden="true"></i></label>
                                </div>
                                <div class="col-md-4" ng-init="alyTyp='${ExstAlyHdrOnly[9]}'">
                                <select class="form-control" onchange="alyTypeBaseAdd(this)" id="alyTypeBase" ng-model="alyTyp">
  <option>Select Alloy Type</option>
  <option value="100">Inward</option>
  <option>BOM</option>
  <option>OutSide Process</option>
</select>
                                </div>
                                 <div class="col-md-2">
                                <label class="control-label">Department  <i class="glyphicon glyphicon-filter" aria-hidden="true"></i></label>
                                </div>
                                <div class="col-md-4">
                               <select class="selectpicker" data-live-search="true" id="dptOfInwrdRec" multiple  data-selected-text-format="count > 3"  data-actions-box="true" >
  								 <option value="">Select DepartMent</option>
										 <c:forEach var="ExistDpt" items="${ExistDptDet}">
										  <option value="${ExistDpt.dm_dpt_cd}">${ExistDpt.dm_dpt_nm}</option>
										  </c:forEach>
</select>
                                </div>
                                </div>
                                <div class="form-group">
                                 <div class="col-md-2">
                                <label class="control-label">Worker</label>
                                </div>
                                <div class="col-md-4">
<select class="selectpicker" data-live-search="true" data-size="7" id="alyWrkCd" >
                          <option value="">Select Worker</option>
                               <c:forEach var="ExistWrk" items="${ExistWrkDet}">
                               <c:choose><c:when test="${ExistWrk.em_emp_id eq ExstAlyHdrOnly[12]}"> <option value="${ExistWrk.em_emp_id}" selected="selected">${ExistWrk.em_emp_nm}</option></c:when>
                               <c:otherwise> <option value="${ExistWrk.em_emp_id}">${ExistWrk.em_emp_nm}</option></c:otherwise> </c:choose>
                              
                               </c:forEach>
                        </select></div>
                           <div class="col-md-2">
                                <label class="control-label">Expected Purity</label>
                                </div>
                                <div class="col-md-4">
                                <input type="text" class="form-control input-sm" placeholder="Expected Purity" id="exptPrtyOfAly" value="${ExstAlyHdrOnly[13]}">
                                </div>
                                </div>
                                
                                
                                </div>
                                <div class="col-md-4">
                             
                                 <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Issued Wt</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Issued Wt" id="isdWgtOfAly" value="${ExstAlyHdrOnly[15]}">
                                </div>
                                </div>
                                <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Received Wt</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Received Wt"  id="rcvdWgtOfAly" value="${ExstAlyHdrOnly[1]}">
                                </div>
                                </div>
                                  <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Bal Wt</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Balance Wt" id="balWgtOfAly" value="${ExstAlyHdrOnly[14]}">
                                </div>
                                </div>
                                
                              
                                <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Converted Wt</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Exp Converted Wt" id="exptCnvtWgtOfAly" value="${ExstAlyHdrOnly[3]}">
                                </div>
                                </div>
                                  <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Received Purity</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Received Purity" id="rcvdPrtyOfAly" value="${ExstAlyHdrOnly[2]}">
                                </div>
                                </div>
                            </div>
                                
                                </div>
                                
                                
                                
                                
                                <div class="form-group">
                                <div class="table-responsive">
              <table class="table table-bordered table-striped" id="myTable">
    <thead>
      <tr>
      <th class="chcktbl">
      <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"  data-toggle="tooltip" title="Select All">
                                                        <input type="checkbox" class="checkboxes parentCheckBox" onchange="selectBoxHandlerInAddTree(this)">
                                                        <span></span>
                                                    </label>
      </th>
      <th>Pdt.Id<input class="form-control input-sm searcher"></th>
       <th>Name<input class="form-control input-sm searcher"></th>
       <th>Mtl.Wt<input class="form-control input-sm searcher"></th>
       <th>Mtl.Pty<input class="form-control input-sm searcher"></th>
        <th>Aly.Typ<input class="form-control input-sm searcher"></th>
          <th>Iss.Mtl.Wgt<input class="form-control input-sm searcher"></th>
            <th>Cnvt.Prty<input class="form-control input-sm searcher"></th>
       <th>Exp.Prty<input class="form-control input-sm searcher"></th>
     
       <th>Prty.Los<input class="form-control input-sm searcher"></th>
      
       <th>Iss.Aly<input class="form-control input-sm searcher"></th>
       <th>Rcvd.Wgt<input class="form-control input-sm searcher"></th>
       <th>Test.Smpl<input class="form-control input-sm searcher"></th>
         <th>Dst.Mtl<input class="form-control input-sm searcher"></th>
       <th>Bal<input class="form-control input-sm searcher"></th>

        <th>Rcvd.Prty<input class="form-control input-sm searcher"></th>

      </tr>
    </thead>
      <div class="modal fade" id="myModalSample" role="dialog">
    <div class="modal-dialog modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"><small>Testing Samples</small></h4>
        </div>
        <div class="modal-body" >
          
          <div class="form-group">
                                 <div class="col-md-2">
                                 <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                                        <input type="checkbox" tst_smpl_one>
                                                        <span></span>
                                                    </label>
                                <label class="control-label">ALA1</label>
                                </div>
                                <div class="col-md-4">
                                <input type="number" class="form-control input-sm" placeholder="TA1" id="ta1Smpl">
                                </div>
                                 <div class="col-md-2">
                                  <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                                        <input type="checkbox"tst_smpl_two>
                                                        <span></span>
                                                    </label>
                                <label class="control-label">ALA2</label>
                                </div>
                                <div class="col-md-4">
                                <input type="number" class="form-control input-sm" placeholder="TA2" id="ta2Smpl">
                                </div>
                                </div>
                                
            <div class="form-group">
                                 <div class="col-md-2">
                                  <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                                        <input type="checkbox" tst_smpl_three>
                                                        <span></span>
                                                    </label>
                                <label class="control-label">ALB1</label>
                                </div>
                                <div class="col-md-4">
                                <input type="number" class="form-control input-sm" placeholder="TB1" id="tb1Smpl">
                                </div>
                                 <div class="col-md-2">
                                  <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                                        <input type="checkbox" tst_smpl_four>
                                                        <span></span>
                                                    </label>
                                <label class="control-label">ALB2</label>
                                </div>
                                <div class="col-md-4">
                                <input type="number" class="form-control input-sm" placeholder="TB2" id="tb2Smpl">
                                </div>
                                </div>                     
                         <div class="form-group">
                                <div class="col-md-5"></div>
                                <div class="col-md-2">
                                  <c:choose><c:when test="${ExstAlyHdrOnly[5] eq '1'}">
                                <button class="btn-change7" type="button" onclick="saveTheJsonInTr()">Save </button>
                                </c:when><c:otherwise> <button class="btn-change7" type="button" onclick="saveTheJsonInTr()">Save </button></c:otherwise> </c:choose>
                                </div>
                                </div>
          
        </div>
        <div class="modal-footer fooderAlert">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>  
      <div class="modal fade" id="myModal1" role="dialog">
    <div class="modal-dialog modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"><small>Issued Weight</small></h4>
        </div>
        <div class="modal-body" id="CatWithValDisModel">
          
          <div class="form-group">
                                 <div class="col-md-2">
                                <label class="control-label">A1</label>
                                </div>
                                <div class="col-md-4">
                                <input type="text" class="form-control input-sm" placeholder="T1">
                                </div>
                                 <div class="col-md-2">
                                <label class="control-label">A2</label>
                                </div>
                                <div class="col-md-4">
                                <input type="text" class="form-control input-sm" placeholder="T2">
                                </div>
                                </div>
                                
            <div class="form-group">
                                 <div class="col-md-2">
                                <label class="control-label">AA1</label>
                                </div>
                                <div class="col-md-4">
                                <input type="text" class="form-control input-sm" placeholder="TA1">
                                </div>
                                 <div class="col-md-2">
                                <label class="control-label">AA2</label>
                                </div>
                                <div class="col-md-4">
                                <input type="text" class="form-control input-sm" placeholder="TA2">
                                </div>
                                </div>                     
                                
                    <!--           <div class="form-group">
                                <div class="col-md-3"></div>
                                <div class="col-md-2">
                                <button class="btn-change7 btn-sm">Save Data</button>
                                </div>
                                </div> -->
          
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>
     <c:choose><c:when test="${ExstAlyHdrOnly[4] ne '1'}"> 
    <tbody id="myTbodyAly">

    </tbody></c:when></c:choose>
    <tbody id="myTableExist" style="border: aliceblue;">
     <c:forEach var="ExstAlyHdrDe" items="${ExstAlyHdrDetlsEdit}">
     
     <c:choose>
     <c:when test="${ExstAlyHdrDe[13] eq '0' and ExstAlyHdrDe[14] eq '0'}">
    <tr  style="background-color: #5fbeaa;color: white;" exstbalstk="${ExstAlyHdrDe[30]}">
    
   
      <td id="${ExstAlyHdrDe[19]}" value="${ExstAlyHdrDe[18]}"><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                                        <input type="checkbox" class="checkboxes childCheckBox alreadys" id="${ExstAlyHdrDe[15]}" value="${ExstAlyHdrDe[16]}" title="${ExstAlyHdrDe[17]}">
                                                        <span></span>
                                                    </label></td>
        <td>${ExstAlyHdrDe[0]}</td>
        <td>${ExstAlyHdrDe[1]}</td>
        <c:choose><c:when test="${ExstAlyHdrDe[20] ne ''}">
        <td>${ExstAlyHdrDe[20]}</td></c:when><c:otherwise><td>${ExstAlyHdrDe[2]}</td></c:otherwise> </c:choose>
        <td class="metlOrgPrty">${ExstAlyHdrDe[3]}</td>
         <td><select class="selectpicker" data-live-search="true" data-width="70x" data-container="body">
        <option value="">Nothing Selected</option>
        <c:forEach var="ExistAly" items="${ExstAlyDetForShw}">
        <c:choose><c:when test="${ExistAly.am_aly_cd eq ExstAlyHdrDe[7]}"> <option value="${ExistAly.am_aly_cd}" selected="selected">${ExistAly.am_aly_nm}</option></c:when> 
      <c:otherwise> <option value="${ExistAly.am_aly_cd}">${ExistAly.am_aly_nm}</option></c:otherwise></c:choose>
        </c:forEach></select></td>
             <td><input type="number" class="form-control issuedMtelWght"  value="${ExstAlyHdrDe[8]}"></td>
             <td><input type="number" class="form-control covertedPrtys"  value="${ExstAlyHdrDe[5]}"></td>
        <td class="regrdPrtyOfMtl"><input type="number" class="form-control expectedprtyofaly" value="${ExstAlyHdrDe[4]}"></td>
        
        <td class="purtyLossOfMetal">${ExstAlyHdrDe[6]}</td>
       
         <td onclick="myModelOfShowForEachRowExst(this)" class="issuessWgtOfAly">${ExstAlyHdrDe[26]}</td>
        <td><input type="number" class="form-control rcvdWgtOdMtl"   value="${ExstAlyHdrDe[9]}"></td>
      <c:choose><c:when test="${ExstAlyHdrDe[22] ne '' and ExstAlyHdrDe[23] ne '' and ExstAlyHdrDe[24] ne '' and ExstAlyHdrDe[25] ne ''}">
        <td id='{"aphd_tst_smp1":"${ExstAlyHdrDe[22]}","aphd_tst_smp2":"${ExstAlyHdrDe[23]}","aphd_tst_smp3":"${ExstAlyHdrDe[24]}","aphd_tst_smp4":"${ExstAlyHdrDe[25]}"}'><input type="number" readonly aphd_isd_tst_smp='${ExstAlyHdrDe[29]}' class="form-control testSmplMtl"  onclick="openModelOfTestSample(this)"  value="${ExstAlyHdrDe[21]}"></td>
       </c:when><c:otherwise>
          <td id='{"aphd_tst_smp1":0,"aphd_tst_smp2":0,"aphd_tst_smp3":0,"aphd_tst_smp4":0}'><input type="number" readonly class="form-control testSmplMtl" aphd_isd_tst_smp='${ExstAlyHdrDe[29]}' onclick="openModelOfTestSample(this)"   value="${ExstAlyHdrDe[21]}"></td>
       </c:otherwise> </c:choose>
         <td><input type="number" class="form-control dustSmplMtl"  value="${ExstAlyHdrDe[27]}"> </td>
        <td>${ExstAlyHdrDe[11]} </td>
       <td id='${ExstAlyHdrDe[28]}'><input type="number" readonly class="form-control"  value="${ExstAlyHdrDe[12]}"  onclick="issPrtyCal(this)"></td>
</tr>
</c:when>
     <c:when test="${ExstAlyHdrDe[14] eq '0' and ExstAlyHdrDe[13] eq '1'}">
    <tr  style="background-color: #5fbeaa;color: white;"  exstbalstk="${ExstAlyHdrDe[30]}">
    
   
      <td id="${ExstAlyHdrDe[19]}" value="${ExstAlyHdrDe[18]}"><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                                        <input type="checkbox" class="checkboxes childCheckBox alreadys" id="${ExstAlyHdrDe[15]}" value="${ExstAlyHdrDe[16]}" title="${ExstAlyHdrDe[17]}">
                                                        <span></span>
                                                    </label></td>
        <td>${ExstAlyHdrDe[0]}</td>
        <td>${ExstAlyHdrDe[1]}</td>
        <td>${ExstAlyHdrDe[2]}</td>
        <td>${ExstAlyHdrDe[3]}</td>
          <td><select class="selectpicker" data-live-search="true" data-width="70px" data-container="body" disabled="disabled">
        <option value="">Nothing Selected</option>
        <c:forEach var="ExistAly" items="${ExstAlyDetForShw}">
        <c:choose><c:when test="${ExistAly.am_aly_cd eq ExstAlyHdrDe[7]}"> <option value="${ExistAly.am_aly_cd}" selected="selected">${ExistAly.am_aly_nm}</option></c:when> 
      <c:otherwise> <option value="${ExistAly.am_aly_cd}">${ExistAly.am_aly_nm}</option></c:otherwise></c:choose>
        </c:forEach></select></td>
            <td><input type="number" class="form-control issuedMtelWght"  value="${ExstAlyHdrDe[8]}" disabled></td>
       
        <td><input type="number" class="form-control covertedPrtys" value="${ExstAlyHdrDe[5]}" disabled></td>
         <td><input type="number" class="form-control expectedprtyofaly" value="${ExstAlyHdrDe[4]}" disabled></td>
        <td>${ExstAlyHdrDe[6]}</td>
      
           <td onclick="myModelOfShowForEachRowExst(this)" class="issuessWgtOfAly">${ExstAlyHdrDe[26]}</td>
        <td><input type="number" class="form-control rcvdWgtOdMtl"  value="${ExstAlyHdrDe[9]}"></td>
        
       
        <c:choose><c:when test="${ExstAlyHdrDe[22] ne '' and ExstAlyHdrDe[23] ne '' and ExstAlyHdrDe[24] ne '' and ExstAlyHdrDe[25] ne ''}">
        <td id='{"aphd_tst_smp1":"${ExstAlyHdrDe[22]}","aphd_tst_smp2":"${ExstAlyHdrDe[23]}","aphd_tst_smp3":"${ExstAlyHdrDe[24]}","aphd_tst_smp4":"${ExstAlyHdrDe[25]}"}'><input readonly type="number" class="form-control testSmplMtl" aphd_isd_tst_smp='${ExstAlyHdrDe[29]}' onclick="openModelOfTestSample(this)"   value="${ExstAlyHdrDe[21]}"></td>
       </c:when><c:otherwise>
          <td id='{"aphd_tst_smp1":0,"aphd_tst_smp2":0,"aphd_tst_smp3":0,"aphd_tst_smp4":0}'><input type="number" class="form-control testSmplMtl" readonly aphd_isd_tst_smp='${ExstAlyHdrDe[29]}' onclick="openModelOfTestSample(this)"  value="${ExstAlyHdrDe[21]}"></td>
       </c:otherwise> </c:choose>
         <td><input type="number" class="form-control dustSmplMtl"  value="${ExstAlyHdrDe[27]}"> </td>
        <td>${ExstAlyHdrDe[11]} </td>
       <td id='${ExstAlyHdrDe[28]}'><input type="number" class="form-control" readonly  value="${ExstAlyHdrDe[12]}"  onclick="issPrtyCal(this)"></td>
</tr>
</c:when><c:when test="${ExstAlyHdrDe[14] eq '1' and ExstAlyHdrDe[13] eq '1'}">
<c:choose><c:when test="${ExstAlyHdrDe[4] < ExstAlyHdrDe[12]}"> <tr  exstbalstk="${ExstAlyHdrDe[30]}" style="background-color: rgb(190, 95, 95);color: white;" class="RecvedTr"></c:when> 
<c:otherwise><tr  exstbalstk="${ExstAlyHdrDe[30]}" style="background-color: #5fbeaa;color: white;" class="RecvedTr"></c:otherwise></c:choose>
    
   
      <td id="${ExstAlyHdrDe[19]}" value="${ExstAlyHdrDe[18]}"><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                                        <input type="checkbox" class="checkboxes childCheckBox alreadys" id="${ExstAlyHdrDe[15]}" value="${ExstAlyHdrDe[16]}" title="${ExstAlyHdrDe[17]}" disabled="disabled">
                                                        <span></span>
                                                    </label></td>
        <td>${ExstAlyHdrDe[0]}</td>
        <td>${ExstAlyHdrDe[1]}</td>
        <td>${ExstAlyHdrDe[2]}</td>
        <td>${ExstAlyHdrDe[3]}</td>
        <td><select class="selectpicker" data-live-search="true" data-width="70px" data-container="body" disabled="disabled">
        <option value="">Nothing Selected</option>
        <c:forEach var="ExistAly" items="${ExstAlyDetForShw}">
        <c:choose><c:when test="${ExistAly.am_aly_cd eq ExstAlyHdrDe[7]}"> <option value="${ExistAly.am_aly_cd}" selected="selected">${ExistAly.am_aly_nm}</option></c:when> 
      <c:otherwise> <option value="${ExistAly.am_aly_cd}">${ExistAly.am_aly_nm}</option></c:otherwise></c:choose>
        </c:forEach></select></td>
         <td><input type="number" class="form-control issuedMtelWght"  value="${ExstAlyHdrDe[8]}" readonly></td>
        
        <td class="covertedPrtys">${ExstAlyHdrDe[5]}</td>
        <td class="expectedprtyofaly">${ExstAlyHdrDe[4]}</td>
        <td>${ExstAlyHdrDe[6]}</td>
      <td onclick="myModelOfShowForEachRowExst(this)" class="issuessWgtOfAly">${ExstAlyHdrDe[26]}</td>
        <td class="rcvdWgtOdMtl">${ExstAlyHdrDe[9]}</td>
        <c:choose><c:when test="${ExstAlyHdrDe[22] ne '' and ExstAlyHdrDe[23] ne '' and ExstAlyHdrDe[24] ne '' and ExstAlyHdrDe[25] ne ''}">
        <td class="testSmplMtl" readonly aphd_isd_tst_smp='${ExstAlyHdrDe[29]}' id='{"aphd_tst_smp1":"${ExstAlyHdrDe[22]}","aphd_tst_smp2":"${ExstAlyHdrDe[23]}","aphd_tst_smp3":"${ExstAlyHdrDe[24]}","aphd_tst_smp4":"${ExstAlyHdrDe[25]}"}' onclick="openModelOfTestSample(this)">${ExstAlyHdrDe[21]}</td>
       </c:when><c:otherwise>
          <td  class="testSmplMtl" readonly aphd_isd_tst_smp='${ExstAlyHdrDe[29]}' id='{"aphd_tst_smp1":0,"aphd_tst_smp2":0,"aphd_tst_smp3":0,"aphd_tst_smp4":0}' onclick="openModelOfTestSample(this)">${ExstAlyHdrDe[21]}</td>
       </c:otherwise> </c:choose>
        <td class="dustSmplMtl">${ExstAlyHdrDe[27]}</td>
        <td>${ExstAlyHdrDe[11]} </td>
       <td id='${ExstAlyHdrDe[28]}'><input type="number" readonly class="form-control avoiderInput"  value="${ExstAlyHdrDe[12]}"  onclick="issPrtyCal(this)" onchangeFunction="${ExstAlyHdrDe[16]}"></td>
</tr>
</c:when> </c:choose>
</c:forEach>
    </tbody>
  </table>
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
<script src="js/datepicker.js" type="text/javascript"></script>
<script src="js/bootstrap-select.min.js"></script>
<script src="js/bootstrap-datetimepicker.min.js"></script>
 <script src="js/bootstrap-confirmation.min.js"></script>
    <script src="js/datatableSMR.js"></script>
 <script>
	 $(function() {
    $(".datepicker").datepicker();
     $('.dateTimePick').datetimepicker();
     if($("#authRevdAuthForId").val()=="1"){
	 	$(".wrapper :input:not(.searcher,.avoiderInput,.modal input,.modal button,:checkbox),.wrapper a:not(.actions a:last)").attr("disabled",true);
			$(".wrapper a:not(.actions a:last,.modal a)").addClass("disabled");
		}
     if($("#authIssAuthForId").val()=="1"){
    $(".isudAuthRestriction :input").attr("disabled",true);
    	
     }
});
</script>  
<script>


$(function(){
	if($("#ExtDptFoEdt").val()!=""){
		$("#dptOfInwrdRec").val(eval($("#ExtDptFoEdt").val()));
	}
	$('#Showind').hide();	
$('#resrOut').click(function (){
$('#Showind').toggle();	
});
})
	
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
$(function() {
	$('[data-toggle=confirmation]').confirmation({
		  rootSelector: '[data-toggle=confirmation]',
		onConfirm : function() {$('[data-toggle=confirmation]').addClass("btn-circlesuc");
				$("#isdauthVal").val("1");
			},
		onCancel : function() {$('[data-toggle=confirmation]').removeClass("btn-circlesuc");
				$("#isdauthVal").val("0");
			}
		});
	$('[data-toggle=confirmation1]').confirmation({
		  rootSelector: '[data-toggle=confirmation1]',
		onConfirm : function() {$('[data-toggle=confirmation1]').addClass("btn-circlesuc");
			  $("#rcvdauthVal").val("1");
			},
		onCancel : function() {$('[data-toggle=confirmation1]').removeClass("btn-circlesuc");
				$("#rcvdauthVal").val("0");
			}
		});
});

$(document).ready(function(){
	var table = $('#myTable').DataTable({
		   "aLengthMenu": [ [10, 25,50, -1], [10, 25,50, "All"] ],
		   "iDisplayLength": -1
		});
	table.columns().eq( 0 ).each( function ( colIdx ) {
	    $( 'input:not(:checkbox)', table.column( colIdx ).header() ).on( 'keyup change', function () {
	        table
	            .column( colIdx )
	            .search( this.value )
	            .draw();
	    } );});
});
window.adMinID='${AdminName}';
$("#dptOfInwrdRec").val($(".alreadys:eq(0)").attr("title")).selectpicker("refresh");
</script>
<script src="js/editAlloyProcess.js"></script>
</body>
</html>