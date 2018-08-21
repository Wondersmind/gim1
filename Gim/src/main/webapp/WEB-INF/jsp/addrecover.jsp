<!DOCTYPE html>
<%@page import="java.util.Date"%>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<title>Recover Process</title>
<script type="text/javascript" src="dwr/interface/AjaxController.js"></script>
<script type="text/javascript" src="dwr/engine.js"></script>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- Bootstrap -->


  
  <link href="css/customefonts.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/simple-line-icons.min.css" rel="stylesheet">
<link href="css/themify-icons.css" rel="stylesheet">
<link href="css/datepicker.css" type="text/css" rel="stylesheet">

<link rel="stylesheet" href="css/bootstrap-select.min.css">

<link rel="stylesheet" href="css/font-awesome.min.css">
<link href="css/bootstrap-datetimepicker.min.css" type="text/css" rel="stylesheet">
   <link href="css/datatable.css" rel="stylesheet">
   <link rel="stylesheet" href="css/jquery-ui.css">
  
<link href="css/bootstrap-toggle.min.css" rel="stylesheet"> 
   <link href="css/bootstrap-datetimepicker.min.css" type="text/css" rel="stylesheet">
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <style type="text/css">
        .scrollableTable tbody {
            display: block;
            height:50px;
            overflow-y:auto;
        }
        .scrollableTable tr {
            display: block;
        }
    </style>
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


.ui-autocomplete {
	cursor: pointer;
	overflow-y: auto;
	height: 150px;
	width: 150px;
	border: 1px solid #ccc;
	overflow: auto;
	background-color: white;
	font-size: 14px;
	z-index: 999999999999999999 !important;
	box-shadow: 0px 0px 10px #ddd;
}


.ui-autocomplete {
	cursor: pointer;
	height: 120px;
	height: 150px;
	width: 180px;
	border: 1px solid #ccc;
	overflow: auto;
	font-size: 13px;
	padding: 5px;
	font-family: 'Open Sans', sans-serif;
}

.table-bordered>tbody>tr>td, .table-bordered>tbody>tr>th, .table-bordered>tfoot>tr>td, .table-bordered>tfoot>tr>th, .table-bordered>thead>tr>td, .table-bordered>thead>tr>th {
    border: 1px solid #aca7a7 !important;
}
.daterangepicker_input{
display:none;
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
                                            <span class="caption-subject font-dark bold uppercase text-muted page-title-alt"> <h4 class="page-title">Add Recover Process</h4></span>
                                        </div>
                                       
                                         <div class="actions">
                                       <a class="btn btn-circle btn-icon-only btn-default" href="javascript:beforesavingValidate()" id="saveBtnInIntlTrf" data-toggle="tooltip" title="Save">
                                                <i class="icon-doc"></i>
                                            </a>
                                           <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" data-toggle="confirmation" data-popout="true" data-placement="top" title="Authorization">
                                                <i class="icon-shield"></i>
                                            </a>
                                           <a class="btn btn-circle btn-icon-only btn-default" href="recover.mm" id="resrOut" data-toggle="tooltip" title="Existing">
                                                <i class="icon-logout"></i>
                                            </a>
                                        </div>
                                        <div class="actions">
                                        
                                        <span id="saveSuccesRes"></span>
                                        
                                        </div>
                                    </div>
                                    
                                </div>
                                <form class="form-horizontal" onsubmit="return authenticationChecker(event);">
                                <div class="row">
                                <div class="col-md-8">
                                                                 <div class="form-group">
                                 <div class="col-md-2">
                               <label class="control-label">Company</label>
                                </div>
                                <div class="col-md-4">
                               <select  class="selectpicker" data-live-search="true" data-size="5" id="cmyCdOfRcvyProcs">
                                <option value="">Select Company</option>
										  <c:forEach var="ExistDpt" items="${ExistCmyDet}">
											<option value="${ExistDpt.cm_cmy_cd}">${ExistDpt.cm_cmy_nm}</option>
										 </c:forEach>
                               </select>
                                </div>
                                 <div class="col-md-2">
                               <label class="control-label">Location</label>
                                </div>
                               <div class="col-md-4">
                                 <select class="selectpicker" data-live-search="true"  data-size="7" id="strCdOfRcvyProcs">
						<option value="">Select Location</option>
							  <c:forEach var="ExistStr" items="${ExistStrDet}">
								 <option value="${ExistStr.sm_str_cd}">${ExistStr.sm_str_nm}</option>
								 </c:forEach>
							</select>
                                </div>
                                </div>
                                <div class="form-group">
                                  <div class="col-md-2">
                                <label class="control-label">DC Number</label>
                                </div>
                                <div class="col-md-4">
                                <input type="text" class="form-control input-sm" placeholder="DC Number" id="dcNumberINRcvyPrcs" value="${AutoIdForRcvyPrcs}">
                                                                </div>
                                                                 <div class="col-md-2">
                                <label class="control-label">Date/Time</label>
                                </div>
                                <div class="col-md-4">
                                <input type="text" class="form-control input-sm dateTimePick" placeholder="Date/Time"  id="dateINMainPrcs" disabled="disabled">
                                                                </div>
                                </div>
                                 <div class="form-group">
                                 <div class="col-md-2">
                                    <input type="hidden" id="StkLmtOfEMployee" value="">
                                <label class="control-label">From Dept</label>
                                </div>
                                <div class="col-md-4">
                               <select  class="selectpicker"  ${LoginDet.em_emp_typ}  data-live-search="true" data-size="5" id="fromDptOfRcvyPrcs">
                                <option value="">Select DepartMent</option>
										 <c:forEach var="ExistDpt" items="${ExistDptDet}">
										  <option value="${ExistDpt.dm_dpt_cd}">${ExistDpt.dm_dpt_nm}</option>
										 </c:forEach>
                               </select>
                                </div>
                                <div class="col-md-2">
                                <label class="control-label">Worker Type</label>
                                </div>
                                <div class="col-md-4">
 							 <select class="form-control"  id="wrkTypOfDcPrcs">
 							 <option value="ComWrker">company worker</option>
                                <option value="OutSideWrker">Outside job worker</option>
                               </select>                          
 								</div>
                                
                                </div>
                                <div class="form-group">
                                  <div class="col-md-2">
                                <label class="control-label">Worker Name</label>
                                </div>
                              
                                  <div class="col-md-4" >
                         <span inworker>
                                 <select class="selectpicker" data-live-search="true" data-size="7" id="wrkCdOfRcvyPrcs">
 							<option value="">Select CompanyWorker</option>
                               <%-- <c:forEach var="ExistWrk" items="${ExistWrkDet}">
                               <option value="${ExistWrk.em_emp_id}">${ExistWrk.em_emp_nm}</option>
                               </c:forEach> --%>
                               <c:forEach var="DeptWrk" items="${DeptWrker}">
                               <option value="${DeptWrk[0]}">${DeptWrk[1]}</option>
                               </c:forEach>  </select></span>
                                <span outworker>
                                <select  class="selectpicker" id="wrkCdOfRcvyPrcs"  data-live-search="true" data-size="7"> 
                                 <option value="">Select OutsideWorker</option>
                     <%-- 	<c:forEach var="ExistVn" items="${ExistVnDet}">
										  <option value="${ExistVn.vcm_vnct_cd}">${ExistVn.vcm_vnct_nm}</option>
										  </c:forEach> --%>
										   <c:forEach var="DeptVn" items="${DeptVndr}">
                               <option value="${DeptVn[0]}">${DeptVn[1]}</option>
                               </c:forEach>
                                </select>
 							       </span> 
                                </div>
                            
                            <div class="col-md-2">
                                <label class="control-label">Start-End Date <i class="glyphicon glyphicon-filter" aria-hidden="true" data-original-title="" title="" aria-describedby="tooltip871496"></i></label>
                                </div>
                                <div class="col-md-4">
                               <select class="selectpicker" data-live-search="true" data-size="5" data-actions-box="true" id="strtoEndDate" multiple>
                               
                                </select>
                                </div>
                                 
                                </div>
                                
                                <div class="form-group">
                                    <div class="col-md-2">
                                <label class="control-label">Bal Recovery</label>
                                </div>
                                <div class="col-md-4">
                                <input type="text" class="form-control input-sm" placeholder="Balance of Stock" id="balStkOfMainPrcs">
                                 </div>
                                  <div class="col-md-2">
                                <label class="control-label">Description <i class="glyphicon glyphicon-filter" aria-hidden="true" data-original-title="" title="" aria-describedby="tooltip871496"></i></label>
                                </div>
                                <div class="col-md-4">
                                <select class="selectpicker" data-live-search="true" data-actions-box="true" data-size="5" id="dscrOfRecovry" multiple>
                               </select>
                                </div>
                                </div>
                         
                                </div>
                                
                                <input type="hidden" id="isauthVal" value="0" >
                                <div class="col-md-4">
                                <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Tot Pure Gold</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Tot Rcvy Bal" id="metalWeight">
                                </div>
                                </div>
                             
                               <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Tot Rcvy Mtl</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Tot Rcvy Mtl" id="rrcvdMtlWgt">
                                </div>
                                </div>
                                  <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Tot Bal</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Tot Bal" id="totalbalwgt">
                                </div>
                                </div>
                                   <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">IS TAKEN BY GC</label>
                                </div>
                                <div class="col-md-6" style="text-align:left">
                                <input type="checkbox" id="istaknbygc" data-toggle="toggle" data-offstyle="danger" data-on="TAKEN" data-off="NOT TAKEN"  class="form-control" >
                                
                                </div>
                                </div>
                                <div class="form-group">
                                
                                <div class="col-md-12">
                                <label class="control-label"></label>
                                </div>
                                </div>
                                  <div class="form-group">
                                
                                <div class="col-md-12">
                                 <span id="mainPrcsErrorShowerSavedTemp"></span>
                                </div>
                                </div>
                                
                                </div>
                                </div>
                                
                                
                                
                                
                                <div class="form-group">
                                <div class="table-responsive">
              <table class="table table-bordered table-striped" id="recoveryTable">
    <thead>
      <tr>
       <th class="chcktbl">
      <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"  data-toggle="tooltip" title="Select All">
                                                        <input type="checkbox" class="checkboxes parentCheckBox" value="1">
                                                        <span></span>
                                                    </label>
      </th>
      <th>Dpt Nm<input class="form-control input-sm search"></th>
      <th>Wrk Nm<input class="form-control input-sm search"></th>
      <th>Desc<input class="form-control input-sm search"></th>
      <th>Rcvy PG<input class="form-control input-sm search"></th>
       <th>Rcvy Bal<input class="form-control input-sm search"></th>
      <th>Rqd Prty<input class="form-control input-sm search"></th>
      <th>Start Dt<input class="form-control input-sm search"></th>
      <th>End Dt<input class="form-control input-sm search"> </th>
      <th>Rcvr<input class="form-control input-sm search"></th>
      <th>Rcvy Mtl<input class="form-control input-sm search"> </th>
    
      <th>Mtl Prty<input class="form-control input-sm search"> </th>
        <th>Rcvd PG<input class="form-control input-sm search"> </th>
          <th>Bal PG<input class="form-control input-sm search"> </th>
      
      <th>Conv To Rqd Wgt<input class="form-control input-sm search"> </th>
      <th>Rmrk<input class="form-control input-sm search"></th> 
       <th>Net Loss<input class="form-control input-sm search"></th> 
         <th>Rmve Rcvy<input class="form-control input-sm search"></th> 
      </tr>
    </thead>
    <tbody id="newAddRecInTbdy">
  
    </tbody>
       <div class="modal fade" id="loginModel" role="dialog">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header" style=" padding: 12px; text-align: center; background: #004274; ">
          <button type="button" class="close btn btn-sm" style=" background: red;color: white; " data-dismiss="modal">X</button>
          <h4 class="modal-title"><b style=" color: #fff; ">EMPLOYEE LOGIN</b></h4>
        </div>
        <div class="modal-body" >
          <div class="login-wrap">
		            <input type="text" class="form-control" placeholder="User Email" id="Email1" required="required">
		            <br>
		            <input type="password" class="form-control" placeholder="User Password" id="password1" required="required">
		            
		           <br>
		            
		            <button class="btn btn-primary btn-block" type="submit"><i class="fa fa-lock"></i> SIGN IN</button>
		  <br>  <span id="logInEror"></span>
		           
		           
		          <!--  <hr>  <div class="login-social-link centered">
		            <p>or you can sign in via your social network</p>
		                <button class="btn btn-facebook" type="submit"><i class="fa fa-facebook"></i> Facebook</button>
		                <button class="btn btn-twitter" type="submit"><i class="fa fa-twitter"></i> Twitter</button>
		            </div> -->
		           
		
		        </div>
          
        </div>
       
      </div>
    </div>
  </div>
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
   <script src="js/bootstrap-confirmation.min.js"></script>
   <script src="js/bootstrap-select.min.js"></script>
   <script src="js/datatableSMR.js"></script>
    <script src="js/jquery-ui.js"></script>
    
<script src="js/bootstrap-toggle.min.js"></script>
 <script src="js/bootstrap-datetimepicker.min.js"></script>
     <script>
 $(function() {
    $(".datepicker").datepicker();
});</script>
    <script>
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});
</script>
<script>

    
   $(function() {
	   $('[outworker]').hide();
	   $('[data-toggle=confirmation]').confirmation({
			  rootSelector: '[data-toggle=confirmation]',
			onConfirm : function() {$('[data-toggle=confirmation]').addClass("btn-circlesuc");
					$("#isauthVal").val("1");
				},
			onCancel : function() {$('[data-toggle=confirmation]').removeClass("btn-circlesuc");
					$("#isauthVal").val("0");
				}
			});
	});


 	//[companyCd,storeCd]=$("#CompanyStoreDet").val().split("-");
//	$("#cmyCdOfMainProcsTmp").val(companyCd);
window.companyStore='${CompanyStoreByUsr}';
window.adminId=('${LoginDet.em_emp_id}'||'10000');
window.EmpTYp=('${LoginDet.em_emp_typ}'||'Admin');
[companysCd,storeCd,depty]=companyStore.split("-");
if(companysCd)$("#cmyCdOfRcvyProcs").val(companysCd);
if(storeCd)$("#strCdOfRcvyProcs").val(storeCd);
if(depty)$("#fromDptOfRcvyPrcs").val(depty.split(",")[0]);
</script>

<script type="text/javascript">
tablerefresh("recoveryTable");
$("#wrkTypOfDcPrcs").change(function(){
	$('[inworker],[outworker]').toggle();
	});
$('#toggle-two').bootstrapToggle();	
var empDtl=JSON.parse('${empDtl}');
</script>
<script type="text/javascript" src="js/addRecoverController.js"></script>
<script src="js/addeditdetailPage.js"></script>
</body>
</html>