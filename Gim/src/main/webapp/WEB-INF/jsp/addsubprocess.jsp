<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<title>Sub Process</title>

<!-- Bootstrap -->

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

.exstinfoShpwer b{
    border: 1px solid #c3c3c3 !important;
    font-size: 16px;
    color: #004274;
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
                                            <span class="caption-subject font-dark bold uppercase text-muted page-title-alt"> <h4 class="page-title">Add Sub Process</h4></span>
                                        </div>
                                       
                                         <div class="actions">
                                      
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:beforesavingValidate()" id="saveButtonSupPrcs" data-toggle="tooltip" title="Save">
                                                <i class="icon-doc"></i>
                                            </a>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" id="resrOut" data-toggle="tooltip" title="Print">
                                                <i class="icon-printer"></i>
                                                </a>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" data-toggle="confirmation" data-popout="true"  title="Issued Authorization">
                                                <i class="icon-shield"></i>
                                            </a>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" data-toggle="tooltip" title="Import">
                                                <i class="icon-cloud-download"></i>
                                            </a>
                                            
                                              
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:;" data-toggle="tooltip" title="Delete!">
                                                <i class="icon-trash"></i>
                                            </a>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="subprocess.mm" id="resrOut" data-toggle="tooltip" title="Existing">
                                                <i class="icon-logout"></i>
                                            </a>
                                        </div>
                                           <div class="actions"><span id="saveSuccesRes"></span></div>
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
                                 <select class="selectpicker" data-live-search="true" id="cmyCdOfSupPrcs">
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
                                 <select class="selectpicker" data-live-search="true" id="strCdOfSupPrcs">
								  <option value="">Select Location</option>
							  <c:forEach var="ExistStr" items="${ExistStrDet}">
								 <option value="${ExistStr.sm_str_cd}">${ExistStr.sm_str_nm}</option>
								 </c:forEach>
									</select>
                                </div>
                                </div>
                                 <div class="form-group">
                                  <div class="col-md-2">
                                <label class="control-label">Document No</label>
                                </div>
                                <div class="col-md-4">
                                <input type="text" class="form-control input-sm" placeholder="Process Document No" value="${AutoIdForSubPrcs}" id="DocNoInSupPrcs">
                                </div>
                                <input type="hidden" id="isdauthVal" value="0"> 
                                  <input type="hidden" id="ExstStkInJobCrdRcvdStr" value='${ExstStkInJobCrdRcvdStr}'> 
                                   <input type="hidden" id="ExstStkInSubPrcsIssedStr" value='${ExstStkInSubPrcsIssedStr}'> 
                                 <input type="hidden" id="StkLmtOfEMployee" value="">
                                 <div class="col-md-2">
                                <label class="control-label">Date</label>
                                </div>
                                <div class="col-md-4" style=" text-align: left; ">
                                 <input type="text" class="form-control input-sm dateTimePick" placeholder="date/time" id="dateofSubProcess" disabled="disabled"> 
                                </div>
                                </div>
                                <div class="form-group">
                                  <div class="col-md-2">
                                <label class="control-label">From Deprt</label>
                                </div>
                                <div class="col-md-4">
                               <select class="selectpicker"  ${LoginDet.em_emp_typ}  data-live-search="true" id="dptCdOfSubPrcs">
										 <option value="">Select DepartMent</option>
										 <c:forEach var="ExistDpt" items="${ExistDptDet}">
										  <option value="${ExistDpt.dm_dpt_cd}">${ExistDpt.dm_dpt_nm}</option>
										 </c:forEach>
								</select>

                                </div>
                                
                                 <div class="col-md-2">
                                <label class="control-label">Process Type</label>
                                </div>
                                <div class="col-md-4">
                                <select class="selectpicker" id="prcsTypOfSubPrcs">
                                <option value="">Select Process</option>
                              <%--  <c:forEach var="ExstPrsDt" items="${ExstPrcsDet}">
                               <option value="${ExstPrsDt.pm_prcs_cd}">${ExstPrsDt.pm_prcs_nm}</option>
                               </c:forEach> --%>
                                <c:forEach var="DeptSb" items="${DptSubPrcs}">
                               <option value="${DeptSb[0]}">${DeptSb[1]}</option>
                               </c:forEach>
                                </select>
                                </div>
                                </div>
                                 <div class="form-group">
                                  <div class="col-md-2">
                                <label class="control-label">Worker Type</label>
                                </div>
                                <div class="col-md-10">
 							 <select class="form-control"  id="wrkTypOfDcPrcs">
 							 <option value="ComWrker">company worker</option>
<!--                                 <option value="OutSideWrker">Outside job worker</option> -->
                               </select>                          
 								</div></div>
                                <div class="form-group">
                                 <div class="col-md-2">
                                <label class="control-label">Worker Name</label>
                                </div>
                                <div class="col-md-4">
 							
                               
                               <span inworker>
                                <select class="selectpicker" data-live-search="true" data-size="7" id="wrkCdOfSubPrcs">
 							<option value="">Select Worker</option>
                              
                               <c:forEach var="DeptWrk" items="${DeptWrker}">
                               <option value="${DeptWrk[0]}">${DeptWrk[1]}</option>
                               </c:forEach>   </select> </span>
                                <span outworker>
                                <select  class="selectpicker" id="wrkCdOfSubPrcs"  data-live-search="true" data-size="7"> 
                                 <option value="">Select OutsideWorker</option>
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
                               <select class="selectpicker" id="targetDtOfSubPrcs">
                               </select>
                                </div>
                                </div>
                              
                        
                                </div>
                                <div class="col-md-4">
                                <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Total Issued Weight</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Total Issued Weight" id="isedtotWgtOfSubPrcs">
                                </div>
                                </div>
                                <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Total Received</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Total Received" id="rcvdtotWgtOfSubPrcs">
                                </div>
                                </div>
                             
                                <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Balance Wgt</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Balance Wgt" id="rbalWgtOfSubPrcs">
                                </div>
                                </div>
                                   <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Job Card No <i class="glyphicon glyphicon-filter" aria-hidden="true" data-original-title="" title=""></i></label>
                                </div>
                                <div class="col-md-6">
                              
                              <select class="selectpicker" data-live-search="true" data-size="7" multiple data-actions-box="true" id="jbCardOfSubPrcs">
 							<option value="">Select Job Card No</option>
                               <c:forEach var="ExistJobOrdNo" items="${ExistJobOrderNo}">
                               <option value="${ExistJobOrdNo.joh_doc_no}">${ExistJobOrdNo.joh_doc_no}</option>
                               </c:forEach>    </select>          
                                </div></div>
                                  <div class="form-group">
                                
                                 <div class="col-md-6">
                                <label class="control-label" id="MeltFilterPrty">TreeNo <i class="glyphicon glyphicon-filter" aria-hidden="true" data-original-title="" title=""></i></label>
                                </div>
                                <div class="col-md-6">
                             
                                <select class="selectpicker" data-live-search="true" data-size="7" multiple data-actions-box="true" id="treNoOfSubPrcs">
                               <c:forEach var="ExtTreNoInHdr" items="${ExstTreeNoInHdr}">
                               <option value="${ExtTreNoInHdr.tgh_doc_no}">${ExtTreNoInHdr.tgh_doc_no}</option>
                               </c:forEach>    </select>  
                                                                </div>
                                </div>
                                </div>
                                </div>
                                  <div class="row exstinfoShpwer" style="text-align: center;">
    							</div>
                                
                                
                                
                                <div class="form-group">
                                <div class="table-responsive">
              <table class="table table-bordered table-striped" id="myTableTable">
    <thead>
      <tr>
       <th class="chcktbl">
      <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"  data-toggle="tooltip" title="Select All">
                                                        <input type="checkbox" class="parentCheckBox checkboxes" value="1">
                                                        <span></span>
                                                    </label>
      </th>
      <th>Trns Type<input class="form-control input-sm"></th>
      <th>Trgt Dt<input class="form-control input-sm"></th>
      <th>Dept<input class="form-control input-sm"></th>
      <th>Ctgy<input class="form-control input-sm"></th>
      <th>Doc No<input class="form-control input-sm"></th>
       <th>Prty<input class="form-control input-sm"></th>
      <th>Qty<input class="form-control input-sm"></th>
      <th>Stk Wgt<input class="form-control input-sm"></th>
      <th>Isd Wgt<input class="form-control input-sm"></th>
       <th>Rcvd Wgt<input class="form-control input-sm"></th>
  		<th>Bal Wgt<input class="form-control input-sm"></th>
     
      </tr>
    </thead>
    <tbody id="tbodyOfTable">
      <c:forEach var="EstJbTreBth" items="${ExstJobTreeBoth}">
      <tr TrnsType="${EstJbTreBth[6]}">
      <td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                                        <input type="checkbox" trfCode="${EstJbTreBth[10]}" isdPrimyId="${EstJbTreBth[11]}" class="checkboxes childCheckBox" value="${EstJbTreBth[7]}">
                                                        <span></span>
                                                    </label></td>
        <td class="trnsctyp">${EstJbTreBth[6]}</td>                                             
       <td class="trgtDtOfTr">${EstJbTreBth[0]}</td>
        <td class="isdDeptOfTr">${EstJbTreBth[1]}</td>
        <td class="ctgyOfTr">${EstJbTreBth[2]}</td>
        <td class="docNoInTr">${EstJbTreBth[3]}</td>
         <td class="prtyInTr">${EstJbTreBth[12]}</td>
        <td class="qtyOfTr">${EstJbTreBth[4]}</td>
       <td class="stkWgtOfSubPrcs">${EstJbTreBth[8]}</td>
        <td><input type="number" class="form-control issWgtOfSubPrcs" max="${EstJbTreBth[8]}" value="${EstJbTreBth[8]}"> </td>
        <td><input type="number" class="form-control rcvdWgtOfSubPrcs" readonly></td> 
        <td class="balwgtOfSupPrcs"></td> 
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
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) --> 
<script src="js/jquery.min.js"></script> 
<!-- Include all compiled plugins (below), or include individual files as needed --> 
<script src="js/bootstrap.min.js"></script>
<script src="js/datepicker.js" type="text/javascript"></script>
 <script src="js/bootstrap-confirmation.min.js"></script>
 <script src="js/datatableSMR.js"></script>
    <script src="js/bootstrap-datetimepicker.min.js"></script>
    <script>
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
    window.companyStore='${CompanyStoreByUsr}';
 	[companysCd,storeCd,depty]=companyStore.split("-");
 	if(companysCd)$("#cmyCdOfSupPrcs").val(companysCd);
 	if(storeCd)$("#strCdOfSupPrcs").val(storeCd);
 	if(depty)$("#dptCdOfSubPrcs").val(depty.split(",")[0]);
 	  $('[outworker]').hide();
});
</script>

 <script src="js/bootstrap-select.min.js"></script>
<script>
var jobCard=new Set(),treeNo=new Set(),tgtDate=new Set(['<option value="">Select Target Date</option>']);
$("#myTableTable tbody tr").toArray().forEach((tr)=>{
	if($(tr).attr("trnstype")=='Casting Recieved')
		treeNo.add('<option>'+$(tr).find(".docNoInTr").html()+'</option>');
	else jobCard.add('<option>'+$(tr).find(".docNoInTr").html()+'</option>'); 
	if($(tr).find(".trgtDtOfTr").html())
	tgtDate.add('<option>'+$(tr).find(".trgtDtOfTr").html()+'</option>')
});
$("#targetDtOfSubPrcs").html([...tgtDate]);
	$("#jbCardOfSubPrcs").html([...jobCard]);
	$("#treNoOfSubPrcs").html([...treeNo]);
 
$(document).ready(function(){
	var table = $('#myTableTable').DataTable({
		   "aLengthMenu": [ [10, 25,50, -1], [10, 25,50, "All"] ],
		   "iDisplayLength": -1,
		   columnDefs:[{ type: 'date-dd-mmm-yyyy', targets: 2}]
		});
table.columns().eq( 0 ).each( function ( colIdx ) {
	    $( 'input:not(:checkbox)', table.column( colIdx ).header() ).on( 'keyup change', function () {
	        table
	            .column( colIdx )
	            .search( this.value )
	            .draw();
	    } );});
	    
 $('[data-toggle=confirmation]').confirmation({
		  rootSelector: '[data-toggle=confirmation]',
		onConfirm : function() {$('[data-toggle=confirmation]').addClass("btn-circlesuc");
				$("#isdauthVal").val("1");
			},
		onCancel : function() {$('[data-toggle=confirmation]').removeClass("btn-circlesuc");
				$("#isdauthVal").val("0");
			}
		});
});    

$("#wrkTypOfDcPrcs").change(function(){
	$('[inworker],[outworker]').toggle();
	});
var caratList=JSON.parse('${caratList}');	
var empDtl=JSON.parse('${empDtl}');
</script>
<script src="js/subprocess.js"></script>
<script src="js/addeditdetailPage.js"></script>
</body>
</html>