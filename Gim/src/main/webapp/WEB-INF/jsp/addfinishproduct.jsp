<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<title>Add Finished Product</title>
<script type="text/javascript" src="dwr/interface/AjaxController.js"></script>
<script type="text/javascript" src="dwr/engine.js"></script>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
  
  <link href="css/customefonts.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/simple-line-icons.min.css" rel="stylesheet">
<link href="css/themify-icons.css" rel="stylesheet">
<link href="css/datepicker.css" type="text/css" rel="stylesheet">

<link rel="stylesheet" href="css/bootstrap-select.min.css">
<link href="css/bootstrap-datetimepicker.min.css" type="text/css" rel="stylesheet">

<link rel="stylesheet" href="css/font-awesome.min.css">
   <link href="css/datatable.css" rel="stylesheet">
<link rel="stylesheet" href="css/jquery-ui.css">
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
	font-family: 'Montserrat', sans-serif !important;
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
            <li><a href="customer.mm">Customer</a></li>
            <li><a href="bom.mm">BOM</a></li>
            <li><a href="uom.mm">Uom</a></li>
               <li><a href="daywiseprice.mm">Day Wise Price</a></li>   <li><a href="alloymaster.mm">Alloy</a></li><li><a href="carat.mm">Carat</a></li>
             
              </ul>
            </li>
            <li class="col-sm-6">
              <ul>
              <li><a href="store.mm">Location</a></li>
               <li><a href="process.mm">Process</a></li>
              <li><a href="vendor.mm">Vendor</a></li>
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
                                            <span class="caption-subject font-dark bold uppercase text-muted page-title-alt"> <h4 class="page-title">Add Finish Product</h4></span>
                                        </div>
                                       <div class="actions">
                                       <a class="btn btn-circle btn-icon-only btn-default" href="javascript:saveFinalFinishProduct()" id="saveButttonFnsh" data-toggle="tooltip" title="Save">
                                                <i class="icon-doc"></i>
                                            </a>
                                           <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" data-placement="top" data-toggle=confirmation data-toggle="tooltip" title="Authorization">
                                                <i class="icon-shield"></i>
                                            </a>
                                               <a class="btn btn-circle btn-icon-only btn-default" href="finishproducts.mm" id="resrOut" data-toggle="tooltip" title="Existing">
                                                <i class="icon-logout"></i>
                                            </a>
                                           
                                        </div>
                                          <div class="actions" id="saveSuccesRes"></div>
                                    </div>
                                    
                                </div>
                                <form class="form-horizontal">
                                <div class="row">
                                <div class="col-md-8">
                              <div class="form-group">
                                 <div class="col-md-2">
                                <label class="control-label">Company</label>
                                </div>
                                <div class="col-md-4">
                                 <select class="selectpicker" data-live-search="true" id="cmyCdOfFnshPrcs">
                                    <option value="">Select Company</option>
									                              <c:forEach var="ExistCom" items="${ExistCmyDet}">
									                               <option value="${ExistCom.cm_cmy_cd}">${ExistCom.cm_cmy_nm}</option>
									                               </c:forEach>
</select>

                                </div>
                                <div class="col-md-2">
                                <label class="control-label">Location</label>
                                </div>
                                <div class="col-md-4">
                                 <select class="selectpicker" data-live-search="true" id="strCdOfFnshPrcs">
								  <option value="">Select Location</option>
							  <c:forEach var="ExistStr" items="${ExistStrDet}">
								 <option value="${ExistStr.sm_str_cd}">${ExistStr.sm_str_nm}</option>
								 </c:forEach>
									</select>
                                </div>
                                </div>  <div class="form-group">
                                  <div class="col-md-2">
                                <label class="control-label">Document No</label>
                                </div>
                                <div class="col-md-4">
                                <input type="text" class="form-control input-sm" placeholder="Process Document No" value="${AutoIdForSubPrcs}" id="DocNoInFnshPrcs">
                                </div>
                                <input type="hidden" id="isdauthVal" value="0"> 
                                 <div class="col-md-2">
                                <label class="control-label">Date</label>
                                </div>
                                <div class="col-md-4" style=" text-align: left; ">
                                  <input type="text" class="form-control input-sm dateTimePick" id="dateofFnshProcess" placeholder="date/time" disabled="disabled">
                                </div>
                                </div>
                               <div class="form-group">
                                  <div class="col-md-2">
                                <label class="control-label">From Deprt</label>
                                </div>
                                <div class="col-md-4">
                               <select class="selectpicker"  ${LoginDet.em_emp_typ} data-live-search="true" id="dptCdOfFinshPrcs">
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
                                
                                 <input type="hidden" id="isdauthVal" value="0">
                                <div class="form-group">
                                 <div class="col-md-2">
                                <label class="control-label">Worker Name</label>
                                </div>
                                <div class="col-md-4">
 							 <span inworker>
                                <select class="selectpicker" data-live-search="true" data-size="7" id="wrkCdOfFnshPrcs">
 							<option value="">Select Worker</option>
                                <%-- <c:forEach var="ExistWrk" items="${ExistWrkDet}">
                               <option value="${ExistWrk.em_emp_id}">${ExistWrk.em_emp_nm}</option>
                               </c:forEach> --%>
                               <c:forEach var="DeptWrk" items="${DeptWrker}">
                               <option value="${DeptWrk[0]}">${DeptWrk[1]}</option>
                               </c:forEach>   </select> </span>
                                <span outworker>
                                <select  class="selectpicker" id="wrkCdOfFnshPrcs"  data-live-search="true" data-size="7"> 
                                 <option value="">Select OutsideWorker</option>
                    <%--  	<c:forEach var="ExistVn" items="${ExistVnDet}">
										  <option value="${ExistVn.vcm_vnct_cd}">${ExistVn.vcm_vnct_nm}</option>
										  </c:forEach> --%>
										   <c:forEach var="DeptVn" items="${DeptVndr}">
                               <option value="${DeptVn[0]}">${DeptVn[1]}</option>
                               </c:forEach>
                                </select>
 							       </span>                        
 								</div>
                                 <div class="col-md-2">
                                <label class="control-label">Target Date <i class="glyphicon glyphicon-filter" aria-hidden="true" data-original-title="" title=""></i></label>
                                </div>
                                <div class="col-md-4">
                               <select class="selectpicker" id="targetDtOfFnshPrcs">
                               </select>
                                </div>
                                
                                </div>
                                
                                
                                <div class="form-group">
                                 <div class="col-md-2">
                                <label class="control-label">Job Card No <i class="glyphicon glyphicon-filter" aria-hidden="true" data-original-title="" title=""></i></label>
                                </div>
                                 <div class="col-md-4">
                               <select class="selectpicker" id="jbcrdnoOfFnshPrcs" multiple="multiple" data-live-search="true" data-actions-box="true" data-size="6">
                               </select>
                                </div>
                                 <div class="col-md-2">
                                <label class="control-label">Product Code <i class="glyphicon glyphicon-filter" aria-hidden="true" data-original-title="" title=""></i></label>
                                </div>
                                <div class="col-md-4">
                               <select class="selectpicker" id="pdtcdDtOfSubFnshPrcs" multiple="multiple" data-live-search="true" data-actions-box="true" data-size="6">
                               </select>
                                </div>
                                
                                </div>
                                <div class="form-group">
                                 <div class="col-md-2">
                                <label class="control-label">Jo No <i class="glyphicon glyphicon-filter" aria-hidden="true" data-original-title="" title=""></i></label>
                                </div>
                                <div class="col-md-4">
                               <select class="selectpicker" id="JonoDtOfSubFnshPrcs" multiple="multiple" data-live-search="true" data-actions-box="true" data-size="6">
                               </select>
                                </div>
                                  <div class="col-md-2">
                                <label class="control-label">Bacth No <i class="glyphicon glyphicon-filter" aria-hidden="true" data-original-title="" title=""></i></label>
                                </div>
                                <div class="col-md-4">
                               <select class="selectpicker" id="batchNoFnshPrcs" data-live-search="true" data-actions-box="true" data-size="6">
                               </select>
                                </div>
                                </div>
                                
                                
                                
                                
                                </div>
                                <div class="col-md-4">
                                
                                <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Qty</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Qty" id="totqtyofFinsh">
                                </div>
                                </div>
                                <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Weight</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Weight" id="totwgtofFinsh">
                                </div>
                                </div>
                                <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Tot Acpt</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Total Accepted" id="totacptofFinsh">
                                </div>
                                </div>
                                  <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Tot Rcjt</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Total Rejected" id="totrjctdofFinsh">
                                </div>
                                </div>
                                </div>
                                 
                                
                                </div>
                                
                                
                                
                                
                                <div class="form-group">
                                <div class="table-responsive">
              <table class="table table-bordered table-striped" id="tableoffinsh">
    <thead>
      <tr>
      <th class="chcktbl">
      <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"  data-toggle="tooltip" title="Select All">
                                                        <input type="checkbox" class="checkboxes parentCheckBox" value="1">
                                                        <span></span>
                                                    </label>
      </th>
      <th>Tgt Date<input class="form-control input-sm search"></th>
      <th>Pdt Cd<input class="form-control input-sm search"></th>
      <th>Jo No<input class="form-control input-sm search"></th>
      <th>Order Typ<input class="form-control input-sm search"></th>
      <th>Ctgy<input class="form-control input-sm search"></th>
      <th>Prty<input class="form-control input-sm search"></th>
      <th>Qty<input class="form-control input-sm search"></th>
      <th>Batch NO<input class="form-control input-sm search"></th>
      <th>Acc/Rjt<input class="form-control input-sm search"></th>
      <th>Wgt<input class="form-control input-sm search"></th>
      <th>Remark</th>
        <th></th>
      </tr>
    </thead>
    <tbody id="tbodyoffinsh">
    <c:forEach var="fnsh" items="${listForFnsh}">
   <tr jobCard="${fnsh[6]}">
        <td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                                        <input type="checkbox" class="checkboxes childCheckBox" value="${fnsh[8]}">
                                                        <span></span>
                                                    </label></td>
        <td id="trgtDateoftr">${fnsh[0]}</td>
		<td id="pdtCdoftr">${fnsh[1]}</td>
        <td id="JobCardNooftr">${fnsh[2]}</td>
        <td id="OrdertypeOfTr">${fnsh[3]}</td>
        <td id="ctgyoftr">${fnsh[4]}</td>
        <td id="prtyoftr">${fnsh[5]}</td> 
         <td id="qtyoftr">${fnsh[7]}</td> 
        <td >
        <select id="rjctoracpt" class="form-control">
        <option>Accept</option>
        <option>Reject</option>
        </select>
        </td>
        <td><input type="number" class="form-control" id="rjctoracptwgt" readonly></input></td>
        <td><input type="text" class="form-control remarksofrject" style="width: 350px;" readonly="readonly"></input></td>
     </tr>
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


<!--Boppup  -->
   <!-- PRODUCT VIEW  -->
       <div class="modal fade" id="productView" role="dialog">
    <div class="modal-dialog modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">X</button>
          <h4 class="modal-title">Product Detail Header</h4>
        </div>
      <div class="modal-body">
                  
                    <table class="pull-left col-md-6" style=" text-align: left; font-weight: bold; ">
                         <tbody>
                          
                             <tr>
                                 <td class="h6"><strong>PRODUCT CODE</strong></td>
                                 <td> </td>
                                 <td class="PofCD">02051</td>
                             </tr>
                             
                             <tr>
                                 <td class="h6"><strong>PRODUCT DESIGN</strong></td>
                                 <td> </td>
                                 <td class="PofDgnNO">descrição do produto</td>
                             </tr>
                             
                             <tr>
                                 <td class="h6"><strong>PRODUCT DEPT</strong></td>
                                 <td> </td>
                                 <td class="PofDpt">Marca do produto</td>
                             </tr>
                             
                             <tr>
                                 <td class="h6"><strong>PRODUCT SIZE</strong></td>
                                 <td> </td>
                                 <td class="PofSz">0230316</td>
                             </tr>
                             
                             <tr>
                                 <td class="h6"><strong>PRODUCT CATEGORY</strong></td>
                                 <td> </td>
                                 <td class="PofCtgy">032165</td>
                             </tr>
                             
                               

                             <tr>
                                 <td class="h6"><strong>PRODUCT TYPE</strong></td>
                                 <td> </td>
                                 <td class="PofTyp">50</td>
                             </tr>                            

                             <tr>
                                 <td class="h6"><strong>PRODUCT MIN_MAX WGT</strong></td>
                                 <td> </td>
                                 <td class="PofMinMax">50</td>
                             </tr>

                             <tr>
                                 <td class="h6"><strong>PRODUCT STD WGT</strong></td>
                                 <td> </td>
                                 <td class="PofStdWgt">R$ 35,00</td>
                             </tr> 
                            <tr>
                                 <td class="h6"><strong>PRODUCT CARAT</strong></td>
                                 <td> </td>
                                 <td class="PofCart">R$ 35,00</td>
                             </tr>
                            
                         </tbody>
                    </table>
                             
                         
                    <div class="col-md-6" id="PofImgViewer"> 
                        
                    </div>
                    
                    <div class="clearfix"></div>
                   <p class="open_info hide">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                  </div>
                  <div class="modal-body"><h4>REMARK OF ORDER</h4><span id="remarkContainer">NO REMARKS AVAILABLE</span></div>
                  
                  
                  <div class="container" style="width: 100% !important;">
  <ul class="nav nav-tabs">
    <li class="active" id="bomCt"><a data-toggle="tab" href="#home">BOM</a></li>
    <li id="moldCt"><a data-toggle="tab" href="#menu1">MOLD</a></li>
    <li id="stnCt"><a data-toggle="tab" href="#menu2">NON/GOLD</a></li>
  </ul>

  <div class="tab-content">
    <div id="home" class="tab-pane fade in active">
      <div class="table-responsive">
                <table class="table table-bordered">
                <thead>
               <tr> <th>BomCode</th> <th>Name</th> <th>WipTyp</th> <th>Size</th> <th>Typ</th> <th>Qty</th> </tr>
                </thead>
                <tbody id="bomTable">
               
                </tbody>
               
                </table>
                </div>
                </div>
    <div id="menu1" class="tab-pane fade">
    <div class="table-responsive">
                <table class="table table-bordered">
                <thead>
                <tr> <th>Mold No</th> <th>Desc</th> <th>Qty</th> </tr>
                </thead>
                <tbody id="moldTable">
              
                </tbody>
           
                </table>
                </div>
                </div>
    <div id="menu2" class="tab-pane fade">
     <div class="table-responsive">
                <table class="table table-bordered">
                <thead>
              <tr> <th>StnCd</th> <th>Name</th> <th>Shape</th> <th>Color</th> <th>Size</th> <th>Qty</th> </tr>
                </thead>
                <tbody id="NonGoldTable">
          
                </tbody>
  				  </table>
                </div>
                </div>
   
  </div>
</div>
                  
                  
                  
                  
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  
   <div class="modal fade" id="myModalSample" role="dialog">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"><small>Net Weight Calculation</small></h4>
        </div>
        <div class="modal-body" >
          
          <div class="form-group row">
                                 <div class="col-md-2">
                                 <label class="control-label">Cross Wgt</label>
                                </div>
                                <div class="col-md-4">
                                <input type="number" class="form-control input-sm" placeholder="Cross Wgt" id="crosswgtoftr">
                                </div>
                                 <div class="col-md-2">
                                <label class="control-label">Non Gold Wgt</label>
                                </div>
                                <div class="col-md-4">
                                <input type="number" class="form-control input-sm" placeholder="Non Gold Wgt" readonly id="nongoldwgtoftr">
                                </div>
                                </div>
                                
            <div class="form-group row">
                                 <div class="col-md-2">
                               <label class="control-label">Net Wgt</label>
                                </div>
                                <div class="col-md-4">
                                <input type="number" class="form-control input-sm" placeholder="Net Wgt" id="netwgtOfTr">
                                </div>
                                  <div class="col-md-2">
                                <button class="btn-change7" type="button" onclick="saveTheJsonInTr()">Save </button>
                                </div>
                                </div>                     
                         <div class="form-group">
                                <div class="col-md-5"></div>
                              
                                </div>
          <div class="table-responsive" style=" margin: 1%; ">
                <table class="table table-bordered">
                <thead>
              <tr><th><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"><input type="checkbox" class="checkboxes ParentStonBox"><span></span></label></th> <th>StnCd</th> <th>Name</th> <th>Shape</th> <th>Color</th> <th>Size</th> <th>STD QTY</th><th>ISD QTY</th><th>Wgt</th> </tr>
                </thead>
                <tbody id="StoneWithPdtTable"></tbody>
  				  </table>
                </div>
        </div>
        <div class="modal-footer fooderAlert">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
<!-- end -->
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) --> 
<script src="js/jquery.min.js"></script> 
<!-- Include all compiled plugins (below), or include individual files as needed --> 
<script src="js/bootstrap.min.js"></script>
<script src="js/datepicker.js" type="text/javascript"></script>
 <script src="js/bootstrap-confirmation.min.js"></script>
 <script src="js/datatableSMR.js"></script>
  <script src="js/bootstrap-datetimepicker.min.js"></script>
  <script src="js/jquery-ui.js"></script>
<script type="text/javascript">
window.companyStore='${CompanyStoreByUsr}';
	[companysCd,storeCd,depty]=companyStore.split("-");
	if(companysCd)$("#cmyCdOfFnshPrcs").val(companysCd);
	if(storeCd)$("#strCdOfFnshPrcs").val(storeCd);
	if(depty)$("#dptCdOfFinshPrcs").val(depty.split(",")[0]);
	var data=$("#tbodyoffinsh tr").toArray().reduce((old,tr)=>{
		old.targetDtOfFnshPrcs.add('<option>'+$(tr).find("#trgtDateoftr").html()+'</option>');
		old.jbcrdnoOfFnshPrcs.add('<option>'+$(tr).attr("jobcard")+'</option>');
		old.pdtcdDtOfSubFnshPrcs.add('<option>'+$(tr).find("#pdtCdoftr").html()+'</option>');
		old.JonoDtOfSubFnshPrcs.add('<option>'+$(tr).find("#JobCardNooftr").html()+'</option>');
		return old;
	},{targetDtOfFnshPrcs:new Set(['<option value="">Select Target Date</option>']),jbcrdnoOfFnshPrcs:new Set(),pdtcdDtOfSubFnshPrcs:new Set(),JonoDtOfSubFnshPrcs:new Set()});
	$.each(data,(key,val)=>{
		$("#"+key).html([...val]);
	});
	
	
	$(function(){
		$("table").delegate('#pdtCdoftr','click',function(){
			showProductDetail(this);var title=this.title;
			if(title){
				var HTML='<div class="pull-left col-md-6"><p>'+title+'</p></div>';
				if(title.search(/\image/ig)>-1){
					var imgpath=title.match(/\w*(.jpg|.png|.bmp|.jpeg)/ig)
					if(imgpath){imgpath=imgpath[0]
					var img='showImageUrl.mm?path=C:\\completed items\\'+imgpath ;
					HTML+='<div class="col-md-6" id="PofImgViewer"><img src="'+img+'" style="height: 160px;width: 280px;" alt="teste" class="img-thumbnail">  </div>';
				}
				}
				$("#remarkContainer").html(HTML);	
			}
			else{
				$("#remarkContainer").html("NO REMAEKS ARE AVAILABLE");		
			}
		}); 
	})
</script>

 <script src="js/bootstrap-select.min.js"></script>

<script>
tablerefresh("tableoffinsh");

$('[data-toggle=confirmation]').confirmation({
	  rootSelector: '[data-toggle=confirmation]',
	onConfirm : function() {$('[data-toggle=confirmation]').addClass("btn-circlesuc");
			$("#isdauthVal").val("1");
		},
	onCancel : function() {$('[data-toggle=confirmation]').removeClass("btn-circlesuc");
			$("#isdauthVal").val("0");
		}
	});
$('[outworker]').hide();
$("#wrkTypOfDcPrcs").change(function(){
	$('[inworker],[outworker]').toggle();
	});
	
function printer(html){
	var frame1 = document.createElement('iframe');
    frame1.name = "frame1";
    frame1.style.position = "absolute";
    frame1.style.top = "-1000000px";
    document.body.appendChild(frame1);
    var frameDoc = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument.document ? frame1.contentDocument.document : frame1.contentDocument;
    frameDoc.document.open();
    frameDoc.document.write('<html><head>');
    frameDoc.document
        .write('<link rel="stylesheet" href="css/bootstrap.min.css"><link href="css/customefonts.css" rel="stylesheet"><style> .table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th { padding-bottom: 0px !important; padding-top: 0px !important; } th { text-align: left; font-weight: 500 !important; } .table{    font-family: "Montserrat", sans-serif !important;} <style id="HTMLCSS"> p { margin: 0 !important; font-size: 14px !important; line-height: 23px; letter-spacing: 1px; } .tct { text-align: center; } body { /* width: 612px; margin-left: 20px; padding:5px; */ } /* .pagewth { width:595px; margin-left: 20px; padding:5px; font-family: Tw Cen MT Condensed !important; text-transform: uppercase; } */ .padth { width: 75mm !important; margin-left: 0mm !important; height: 35mm; } .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 { float: left; } .col-md-12 { width: 100% !important; } .col-md-11 { width: 91.66666667%; } .col-md-10 { width: 83.33333333%; } .col-md-9 { width: 75%; } .col-md-8 { width: 66.66666667%; } .col-md-7 { width: 58.33333333%; } .col-md-6 { width: 50%; margin: 0px; margin-bottom: 16px; margin-top: 2px; margin-left: -29px; padding: 4px; /* margin-right: 0px; */ } .col-md-5 { width: 41.66666667%; } .col-md-4 { width: 33.333333%; height: 4cm; margin-top: 14px; margin-bottom: 20px; } .col-md-3 { width: 48mm; height: 24mm; } .col-md-2 { width: 16.66666667%; } .col-md-1 { width: 8.33333333%; } .col-md-pull-12 { right: 100%; } .col-md-pull-11 { right: 91.66666667%; } .col-md-pull-10 { right: 83.33333333%; } .col-md-pull-9 { right: 75%; } .col-md-pull-8 { right: 66.66666667%; } .col-md-pull-7 { right: 58.33333333%; } .col-md-pull-6 { right: 50%; } .col-md-pull-5 { right: 41.66666667%; } .col-md-pull-4 { right: 33.33333333%; } .col-md-pull-3 { right: 25%; } .col-md-pull-2 { right: 16.66666667%; } .col-md-pull-1 { right: 8.33333333%; } .col-md-pull-0 { right: auto; } .col-md-push-12 { left: 100%; } .col-md-push-11 { left: 91.66666667%; } .col-md-push-10 { left: 83.33333333%; } .col-md-push-9 { left: 75%; } .col-md-push-8 { left: 66.66666667%; } .col-md-push-7 { left: 58.33333333%; } .col-md-push-6 { left: 50%; } .col-md-push-5 { left: 41.66666667%; } .col-md-push-4 { left: 33.33333333%; } .col-md-push-3 { left: 25%; } .col-md-push-2 { left: 16.66666667%; } .col-md-push-1 { left: 8.33333333%; } .col-md-push-0 { left: auto; } .col-md-offset-12 { margin-left: 100%; } .col-md-offset-11 { margin-left: 91.66666667%; } .col-md-offset-10 { margin-left: 83.33333333%; } .col-md-offset-9 { margin-left: 75%; } .col-md-offset-8 { margin-left: 66.66666667%; } .col-md-offset-7 { margin-left: 58.33333333%; } .col-md-offset-6 { margin-left: 50%; } .col-md-offset-5 { margin-left: 41.66666667%; } .col-md-offset-4 { margin-left: 33.33333333%; } .col-md-offset-3 { margin-left: 25%; } .col-md-offset-2 { margin-left: 16.66666667%; } .col-md-offset-1 { margin-left: 8.33333333%; } .col-md-offset-0 { margin-left: 0; } .img-responsive, .thumbnail > img, .thumbnail a > img, .carousel-inner > .item > img, .carousel-inner > .item > a > img { display: block; max-width: 100%; height: auto; } .img-rounded { border-radius: 6px; } .img-thumbnail { display: inline-block; max-width: 100%; height: auto; padding: 4px; line-height: 1.42857143; background-color: #fff; border: 1px solid #ddd; border-radius: 4px; -webkit-transition: all .2s ease-in-out; -o-transition: all .2s ease-in-out; transition: all .2s ease-in-out; } .img-circle { border-radius: 50%; } img { border: 0; } img { vertical-align: middle; display: block; width: 75px; height: 80px; } .txt { text-align: left; overflow: hidden; text-overflow: ellipsis; font-size: 10px !important; } .qty { line-height: 19px; } .prc { margin-top: -5px; } .imageSize{ width: 100px; height: 50px; } .pull-right{ float: right; padding-right: 15px; } div,span,p,b{   font-family: "Montserrat", sans-serif !important;}.col-md-4{width: 33.333333%; padding: 5px; margin-right: 0px; height: 4.2cm; border: 1px solid #ddd; margin-top: 0px; margin-bottom: 0px;}</style>');
    frameDoc.document.write('</head><body>');
    frameDoc.document.write(html);
    frameDoc.document.write('</body></html>');
    frameDoc.document.close();
    setTimeout(function() {
        window.frames["frame1"].focus();
        window.frames["frame1"].print();
        document.body.removeChild(frame1);
    }, 500);
}
	
var caratList=JSON.parse('${caratList}');	
var empDtl=JSON.parse('${empDtl}');
</script>
<script type="text/javascript" src="js/addfinishpdtController.js"></script>
<script src="js/addeditdetailPage.js"></script>
</body>
</html>