<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<title>Edit DC</title>

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
   <link href="css/datatable.css" rel="stylesheet">

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
                                            <span class="caption-subject font-dark bold uppercase text-muted page-title-alt"> <h4 class="page-title">Edit DC</h4></span>
                                        </div>
                                       <div class="actions">
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:SaveFinalDcDetail()" id="saveButttonDc" data-toggle="tooltip" title="Save">
                                                <i class="icon-doc"></i>
                                            </a>
                                           <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" data-placement="top" data-toggle="confirmation" data-popout="true"  title="Issued Authorization">
                                                <i class="icon-shield"></i>
                                            </a>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="dc.mm" id="resrOut" data-toggle="tooltip" title="Existing">
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
                                 <select class="selectpicker" data-live-search="true" id="fromCmpnyOfDcPrcs" data-size="5">
 							 <option value="">Select Company</option>
										<c:forEach var="ExistDpt" items="${ExistCmyDet}">
										<c:choose><c:when test="${ExstDcHdr.dh_cmy_cd eq ExistDpt.cm_cmy_cd}">
											<option value="${ExistDpt.cm_cmy_cd}" selected="selected">${ExistDpt.cm_cmy_nm}</option>
										</c:when><c:otherwise>
											<option value="${ExistDpt.cm_cmy_cd}">${ExistDpt.cm_cmy_nm}</option>
										</c:otherwise> </c:choose>
										
										 </c:forEach>
</select>

                                </div>
                                <input type="hidden" id="isdauthVal" value="0">
                                <div class="col-md-2">
                                <label class="control-label">Location</label>
                                </div>
                                <div class="col-md-4">
                                 <select class="selectpicker" data-live-search="true" id="strCdOfDcProcsTmp" data-size="5">
 	<option value="">Select Location</option>
							  <c:forEach var="ExistStr" items="${ExistStrDet}">
							  <c:choose><c:when test="${ExstDcHdr.dh_str_cd eq ExistStr.sm_str_cd}">
							  <option selected="selected" value="${ExistStr.sm_str_cd}">${ExistStr.sm_str_nm}</option>
							  </c:when>
							  <c:otherwise> <option value="${ExistStr.sm_str_cd}">${ExistStr.sm_str_nm}</option></c:otherwise>
							  </c:choose>
								
								 </c:forEach>
							</select>
                                </div>
                                </div>
                                  <div class="form-group">
                                 <div class="col-md-2">
                                <label class="control-label">DC Number</label>
                                </div>
                                <div class="col-md-4">
                                <input type="text" class="form-control input-sm" placeholder="DC Number" id="dcNumberINDcPrcs" value="${ExstDcHdr.dh_isd_doc_no}">
                                                               </div>
                                                                  <div class="col-md-2">
                                <label class="control-label">Date/Time</label>
                                </div>
                                <div class="col-md-4">
                                <input type="text" class="form-control input-sm" placeholder="Date/Time" value="${ExstDcHdr.dh_isd_doc_dt}" id="dateINDcPrcs" disabled>
                                                                </div>
                                                  
                                </div>
                                <div class="form-group">
                                     <div class="col-md-2">
                                <label class="control-label">Department</label>
                                </div>
                                <div class="col-md-4">
                                <select class="selectpicker"  data-live-search="true" id="dptCdOfDcPrcs">
										 <option value="">Select DepartMent</option>
										 <c:forEach var="ExistDpt" items="${ExistDptDet}">
										 <c:choose><c:when test="${ExstDcHdr.dh_dpt_cd eq ExistDpt.dm_dpt_cd}">
										   <option value="${ExistDpt.dm_dpt_cd}" selected="selected">${ExistDpt.dm_dpt_nm}</option>
										 </c:when><c:otherwise>
										   <option value="${ExistDpt.dm_dpt_cd}">${ExistDpt.dm_dpt_nm}</option>
										 </c:otherwise> </c:choose>
										
										 </c:forEach>
								</select>
 </div> <div class="col-md-2">
                                <label class="control-label">Trans.Type <i class="glyphicon glyphicon-filter" aria-hidden="true" data-original-title="" title=""></i></label>
                                </div>
                                <div class="col-md-4">
                                <select class="selectpicker" id="trfTypOfDcPrcs">
                              <option value="ForIssue">For Issue</option>
                                 <option value="ForReturn">For Return</option>
                                <option value="ForSamplesIssue">For Samples Issue</option>
                                  <option value="ForSamplesReturn">For Samples Return</option>
                               </select>
                               <script type="text/javascript">
                               document.getElementById("trfTypOfDcPrcs").value="${ExstDcHdr.dh_trf_typ}";
                               </script>
                                </div>
                              
                                </div>
                                <div class="form-group">
                                  <div class="col-md-2">
                                <label class="control-label">Worker Type</label>
                                </div>
                                <div class="col-md-4">
 							 <select class="form-control"  id="wrkTypOfDcPrcs">
 							 <option value="ComWrker">company worker</option>
                                <option value="OutSideWrker">Outside job worker</option>
                               </select>
                               <script type="text/javascript">
                               window.wrkrsTyp='${ExstDcHdr.dh_wrk_typ}';window.wrkrsCd='${ExstDcHdr.dh_wrk_cd}';
                               document.getElementById("wrkTypOfDcPrcs").value=wrkrsTyp;
                               </script>                          
 								</div>
                                  <div class="col-md-2">
                                <label class="control-label">Worker Name</label>
                                </div>
                                <div class="col-md-4">
 							 <span inworker>
                                 <select class="selectpicker" data-live-search="true" data-size="7" id="wrkCdOfSubPrcs">
 							<option value="">Select CompanyWorker</option>
                               <c:forEach var="ExistWrk" items="${ExistWrkDet}">
                               <option value="${ExistWrk.em_emp_id}">${ExistWrk.em_emp_nm}</option>
                               </c:forEach>    </select></span>
                                <span outworker>
                                <select  class="selectpicker" id="wrkCdOfSubPrcs"  data-live-search="true" data-size="7"> 
                                 <option value="">Select OutsideWorker</option>
                     	<c:forEach var="ExistVn" items="${ExistVnDet}">
										  <option value="${ExistVn.vcm_vnct_cd}">${ExistVn.vcm_vnct_nm}</option>
										  </c:forEach>
                                </select>
 							       </span>                             
 								</div>
                                 
                                
                               
                                </div>
                                <div class="form-group">
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
                                <label class="control-label">Issued Wgt</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Issued Wgt" id="IsdWgtOfDc" value="${ExstDcHdr.dh_isd_wgt}">
                                </div>
                                </div>
                                <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Fnsh Wgt</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Fnsh Wgt" id="fnshWgtOfDc"  value="${ExstDcHdr.dh_fnsh_wgt}">
                                </div>
                                </div>
                                 <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Scrp Wgt</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Scrp Wgt" id="scrpWgtOfDc"  value="${ExstDcHdr.dh_scrp_wgt}">
                                </div>
                                </div>
                                 <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Rcvd Wgt</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Received Weight" id="rcvdWgtOfDc" value="${ExstDcHdr.dh_rcvd_wgt}">
                                </div>
                                </div>
                            <!--      <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">QTY</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" >
                                </div>
                                </div> -->
                                
                                
                               <!-- <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Exp Converted Purity</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Exp Converted Purity">
                                </div>
                                </div>-->
                                
                                
                                
                                
                                </div>
                                
                                </div>
                                
                                
                                
                                
                                <div class="form-group">
                                <div class="table-responsive">
              <table class="table table-bordered table-striped" id="tableofdc">
    <thead>
      <tr>
      <c:choose>
      <c:when test="${ExstDcHdr.dh_trf_typ eq 'ForReturn' or ExstDcHdr.dh_trf_typ eq 'ForIssue'}">
      <th class="chcktbl">
      <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"  data-toggle="tooltip" title="Select All">
                                                        <input type="checkbox" class="checkboxes parentCheckBox" value="1">
                                                        <span></span>
                                                    </label>
      </th>
     
        <th>TrfType<input class="form-control input-sm search"></th>
     <th>Trgt Date<input class="form-control input-sm search"></th>
      <th>JobCd/ Tree<input class="form-control input-sm search"></th>
       <th>Doc No<input class="form-control input-sm search"></th>
      <th>Prty<input class="form-control input-sm search"></th>
      <th>Qty<input class="form-control input-sm search"></th>
      <th>Wgt<input class="form-control input-sm search"></th>
     <th>Rqrd BOM <input class="form-control input-sm search"></th>
      <th>BOM Wgt<input class="form-control input-sm search"> </th>
       <th>Iss Wgt<input class="form-control input-sm search"> </th>
    	<c:choose><c:when test="${ExstDcHdr.dh_trf_typ eq 'ForReturn'}">
      <th>Fnsh / Rcvy Wgt<input class="form-control input-sm search"> </th>
      <th>Scrp / RmveRcvy Wgt<input class="form-control input-sm search"></th>
      <th>Semi Pdt<input class="form-control input-sm search"></th>
      <th>Rcvd Wgt<input class="form-control input-sm search"></th></c:when></c:choose>
       </c:when>
       <c:otherwise>
       <th class="chcktbl"> <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="Select All"> 
       <input type="checkbox" class="checkboxes parentCheckBox" value="1"> <span></span> </label> </th> <th>TrfType
       <input class="form-control input-sm search"></th> 
       <th>Doc No<input class="form-control input-sm search"></th> <th>Itm/ Tree
       <input class="form-control input-sm search"></th>
       <th>Smpl No
       <input class="form-control input-sm search"></th>
        <th>Qty<input class="form-control input-sm search"></th> <th>Isd Prty
       <input class="form-control input-sm search"></th>
       <th>Wgt<input class="form-control input-sm search"></th>
         <th>Isd Wgt<input class="form-control input-sm search"></th>
        <c:choose><c:when test="${ExstDcHdr.dh_trf_typ eq 'ForSamplesReturn'}">
       <th>MTL RCVD<input class="form-control input-sm search"> </th>   <th>RCVD PRTY<input class="form-control input-sm search"> <th>RCVD PG<input class="form-control input-sm search"> </th></th><th>TOT RCVD WGT<input class="form-control input-sm search"> </th> <th>BAL<input class="form-control input-sm search"> </th></c:when></c:choose>
       </c:otherwise>
       
      </c:choose>
   
      </tr>
     </thead>
    <tbody id="tbodyofdc">
    <c:forEach var="exstdc" items="${ExstDcDetail}">
  <c:choose>
  <c:when test="${exstdc[13] eq '1'}">
   <tr class="success" ${exstdc[0]}>
  </c:when>
  <c:when test="${exstdc[14] eq '1'}">
   <tr class="danger" ${exstdc[0]}>
  </c:when>
  <c:otherwise>
    <tr ${exstdc[0]}>
  </c:otherwise>
  </c:choose>
   <c:choose>
      <c:when test="${ExstDcHdr.dh_trf_typ eq 'ForReturn' or ExstDcHdr.dh_trf_typ eq 'ForIssue'}">
    <td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> <input type="checkbox" class="checkboxes childCheckBox" trftyf="${exstdc[0]}" dcprimid="${exstdc[15]}" value="${exstdc[11]}"> <span></span> </label></td> <td id="trftypoftr" style=" white-space: nowrap; ">${exstdc[0]}</td> 
	<td id="trgtdateoftr" >${exstdc[1]}</td> <td id="jbcdoftr">${exstdc[2]}</td> <td id="itmcdftr">${exstdc[3]}</td><td id="prtyftr">${exstdc[18]}</td> <td id="qtyoftr">${exstdc[4]}</td> <td id="wgtoftr">${exstdc[5]}</td> <td id="rqdbomoftr">${exstdc[6]}</td> <td id="bmwgtoftr">${exstdc[7]}</td>
	<td id="isdwgtoftr">${exstdc[8]}</td>
	<c:choose><c:when test="${ExstDcHdr.dh_trf_typ eq 'ForReturn'}">
	<td id="totfnsh">${exstdc[16]}</td><td id="totscrp">${exstdc[17]}</td> <td id="totsmipdt">${exstdc[21]}</td> <td id="totrcvd">${exstdc[9]}</td> 
	</c:when> </c:choose>
	</c:when>
	<c:otherwise>
	  <td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> <input type="checkbox" class="checkboxes childCheckBox" trftyf="${exstdc[0]}" dcprimid="${exstdc[15]}" value="${exstdc[11]}"> <span></span> </label></td> <td id="trftypoftr" style=" white-space: nowrap; ">${exstdc[0]}</td> 
	<td id="jbcdoftr">${exstdc[2]}</td> <td id="itmcdftr">${exstdc[3]}</td> <td id="smpnoftr">${exstdc[6]}</td> <td id="qtyoftr">${exstdc[4]}</td>  <td id="prtyoftr">${exstdc[18]}</td> 
	<td id="isdextwgtoftr">${exstdc[5]}</td>
	<td><input type="number" id="isdwgtoftr" isdsmpljsn='${exstdc[23]}' readonly value="${exstdc[8]}" class="form-control"></td>
	<c:choose><c:when test="${ExstDcHdr.dh_trf_typ eq 'ForSamplesReturn'}">
	<td ><input class="form-control"  id="mtlrcvdwgt" type="number" readonly="readonly" value="${exstdc[21]}"></td>
	<td ><input class="form-control" id="smprcvdprty" type="number" readonly="readonly" value="${exstdc[19]}"></td>
	<td ><input class="form-control" id="df" type="number" readonly="readonly" value="${exstdc[22]}"></td>
	<td ><input class="form-control" id="dfdef" type="number" readonly="readonly" value="${exstdc[9]}"></td>
	<td id="totrcvd">${exstdc[10]}</td> 
	</c:when> </c:choose>
	</c:otherwise>
	</c:choose>
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

<!-- Prty RCVD BOX -->
<div class="modal fade" id="sampleIssuerForDc" role="dialog">
    <div class="modal-dialog modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">X</button>
          <h4 class="modal-title"><small>SAMPLES ISSUED</small></h4>
        </div>
        <div class="modal-body">
          
          
                                
            <table class="table table-bordered table-stripped">
   <thead>
   <tr><th colspan="3">QTY</th><th colspan="2"><input class="form-control" type="number" id="qtyControllerDc"/></th></tr>
   <tr><th>ISDWGT</th><th>SMPNO</th><th>ISD SMPL</th><th>RCVD SMPL</th><th>RCVD PRTY</th></tr></thead>
    <tbody id="IsdSampleTbody">
    </tbody>
</table>     
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-success btn-sm" disabled id="saveDctestSmplIsud">Save</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
<!-- End -->
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) --> 
<script src="js/jquery.min.js"></script> 
<!-- Include all compiled plugins (below), or include individual files as needed --> 
<script src="js/bootstrap.min.js"></script>
<script src="js/datepicker.js" type="text/javascript"></script>
   <script src="js/bootstrap-confirmation.min.js"></script>
   
<script src="js/bootstrap-select.min.js"></script>
   <script src="js/datatableSMR.js"></script>
     <script src="js/editDcController.js"></script>
<script>
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
    window.isAuthExst="${ExstDcHdr.dh_iss_auth}";
    window.isPrimHdrId="${ExstDcHdr.dh_id}";
    if(isAuthExst=="true"){
    	$("form .row input,form .row select").prop("disabled",true);
    	$('[data-toggle="confirmation"],#saveButttonDc').addClass("btn-circlesuc disabled");
    }
    if(wrkrsTyp=='OutSideWrker'){
		$('[outworker]').show();$('[inworker]').hide();
		$("[outworker] #wrkCdOfSubPrcs").val(wrkrsCd).selectpicker("refresh");
	}else{
		$('[outworker]').hide();$('[inworker]').show();
		$("[inworker] #wrkCdOfSubPrcs").val(wrkrsCd).selectpicker("refresh");
	}
});
		
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
tablerefresh("tableofdc");
$('[data-toggle=confirmation]').confirmation({
	  rootSelector: '[data-toggle=confirmation]',
	onConfirm : function() {$('[data-toggle=confirmation]').addClass("btn-circlesuc");
			$("#isdauthVal").val("1");
		},
	onCancel : function() {$('[data-toggle=confirmation]').removeClass("btn-circlesuc");
			$("#isdauthVal").val("0");
		}
	});
	
	
	$("#wrkTypOfDcPrcs").change(function(){
	$('[inworker],[outworker]').toggle();
	});
</script>
</body>
</html>