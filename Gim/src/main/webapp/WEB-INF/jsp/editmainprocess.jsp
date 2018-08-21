<!DOCTYPE html>
<html lang="en" ng-app="">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<title>Main Process</title>
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
    </style>
<script type="text/javascript">

	window.subProcessList=['<option value="" selected disabled>Select Process</option>'];
 	var subProcessListStr='${DptSubPrcsJS}';
 	if(subProcessListStr){
 		eval(subProcessListStr).map(prcs=>{
 			window.subProcessList.push('<option value="'+prcs[0]+'">'+prcs[1]+'</option>');
 		});
 	}
</script>
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) --> 
<script src="js/jquery.min.js"></script> 
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
                                            <span class="caption-subject font-dark bold uppercase text-muted page-title-alt"> <h4 class="page-title">Add Main Process</h4></span>
                                        </div>
                                       
                                         <div class="actions">
                                      <a class="btn btn-circle btn-icon-only btn-default" href="javascript:beforesavingValidate()" id="resrOut" data-toggle="tooltip" title="Update">
                                                <i class="icon-doc"></i>
                                            </a>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" id="resrOut" data-toggle="tooltip" title="Print">
                                                <i class="icon-printer"></i>
                                                </a>
                                          <c:choose><c:when test="${ExstMnHdrEdt.mph_iss_auth eq true}">   
                                            <a class="btn btn-circlesuc btn-icon-only btn-default disabled" href="javascript:void(0)" data-toggle="confirmation" data-popout="true" data-placement="top" title="Issued Authorization">
                                                <i class="icon-shield"></i>
                                            </a></c:when>
                                            <c:otherwise>
                                              <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" data-toggle="confirmation" data-popout="true" data-placement="top" title="Issued Authorization">
                                                <i class="icon-shield"></i>
                                            </a>
                                            </c:otherwise>
                                            </c:choose>
                                             <c:choose><c:when test="${ExstMnHdrEdt.mph_iss_auth eq true}">
                                             <c:choose><c:when test="${ExstMnHdrEdt.mph_rcvd_auth eq true}">
                                             <a class="btn btn-circlesuc btn-icon-only btn-default disabled" href="javascript:void(0)" data-toggle="confirmation" data-placement="top" data-popout="true"  title="Received Authorization">
                                                <i class="icon-shield"></i>
                                            </a>
                                            </c:when><c:otherwise>
                                              <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" data-toggle="confirmation1" data-placement="top" data-popout="true"  title="Received Authorization">
                                                <i class="icon-shield"></i>
                                            </a>
                                            </c:otherwise> </c:choose>
                                            </c:when> </c:choose>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="mainprocess.mm" id="ExstButton" data-toggle="tooltip" title="Existing">
                                                <i class="icon-logout"></i>
                                            </a>
                                        </div>
                                        <div class="actions">
                                        
                                        <span id="mainPrcsErrorShower"></span>
                                           <c:choose><c:when test="${ExstMnHdrEdt.mph_rcvd_auth eq true}">
                                           <div class="alert alert-warning">MainProcess Is AuthenticationMode</div></c:when></c:choose>
                                        </div>
                                    </div>
                                    
                                </div>
                                   <input type="hidden" id="createdId" value="${ExstMnHdrEdt.mph_crt_id}">
                                      <input type="hidden" id="createdDate" value="${ExstMnHdrEdt.mph_crt_dt}">
                                  <input type="hidden" id="primaryId" value="${ExstMnHdrEdt.mph_id}">
                                <input type="hidden" id="issAuthExst" value="${ExstMnHdrEdt.mph_iss_auth}">
                                 <input type="hidden" id="rcvdAuthExst" value="${ExstMnHdrEdt.mph_rcvd_auth}">
                                <form class="form-horizontal">
                                <div class="row">
                                <div class="col-md-8">
                                 <div class="form-group">
                                 <div class="col-md-2">
                                    <input type="hidden" id="StkLmtOfEMployee" value="">
                                <label class="control-label">Company</label>
                                </div>
                                <div class="col-md-4">
                               <select  class="selectpicker" data-live-search="true" data-size="5" id="fromCmpnyOfMainPrcs">
                                <option value="">Select Company</option>
										<c:forEach var="ExistDpt" items="${ExistCmyDet}">
											 <c:choose><c:when test="${ExstMnHdrEdt.mph_cmy_cd eq ExistDpt.cm_cmy_cd}">
											<option value="${ExistDpt.cm_cmy_cd}" selected>${ExistDpt.cm_cmy_nm}</option>
											</c:when>
											<c:otherwise>
											<option value="${ExistDpt.cm_cmy_cd}">${ExistDpt.cm_cmy_nm}</option>
											</c:otherwise>
											</c:choose>
										 </c:forEach>
                               </select>
                                </div>
                                   <div class="col-md-2">
                               <label class="control-label">Location</label>
                                </div>
                               <div class="col-md-4">
                                 <select class="selectpicker" data-live-search="true"  data-size="7" id="strCdOfMainProcsTmp">
						<option value="">Select Location</option>
							  <c:forEach var="ExistStr" items="${ExistStrDet}">
								<c:choose>
								<c:when test="${ExstMnHdrEdt.mph_str_cd eq ExistStr.sm_str_cd}">
								 <option value="${ExistStr.sm_str_cd}" selected="selected">${ExistStr.sm_str_nm}</option>
								 </c:when>
								 <c:otherwise>
								  <option value="${ExistStr.sm_str_cd}">${ExistStr.sm_str_nm}</option>
								 </c:otherwise>
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
                                <input type="text" class="form-control input-sm" placeholder="DC Number" id="dcNumberINMainPrcs" value="${ExstMnHdrEdt.mph_doc_no}">
                                                                </div>
                                                                  <div class="col-md-2">
                                <label class="control-label">Date/Time</label>
                                </div>
                                <div class="col-md-4">
                                <input type="text" class="form-control input-sm" placeholder="Date/Time" disabled value="${ExstMnHdrEdt.mph_doc_dt}" id="dateINMainPrcs">
                                                                </div>
                                                  
                                </div>
                                 <div class="form-group">
                                 <div class="col-md-2">
                                    <input type="hidden" id="StkLmtOfEMployee" value="">
                                <label class="control-label">From Dept</label>
                                </div>
                                <div class="col-md-4">
                               <select  class="selectpicker" data-live-search="true" data-size="5" id="fromDptOfMainPrcs">
                                <option value="">Select DepartMent</option>
										 <c:forEach var="ExistDpt" items="${ExistDptDet}">
										 <c:choose><c:when test="${ExstMnHdrEdt.mph_frm_dpt eq ExistDpt.dm_dpt_cd}">
										  <option value="${ExistDpt.dm_dpt_cd}" selected="selected">${ExistDpt.dm_dpt_nm}</option></c:when>
										  <c:otherwise>  <option value="${ExistDpt.dm_dpt_cd}">${ExistDpt.dm_dpt_nm}</option></c:otherwise>
										 </c:choose> </c:forEach>
                               </select>
                                </div>
                                <div class="col-md-2">
                                <label class="control-label">Type</label>
                                </div>
                                <div class="col-md-4" ng-init="employeeTypes='${ExstMnHdrEdt.mph_wrk_typ}'">
                                <select class="form-control input-sm" id="employeeTypes" ng-model="employeeTypes">
                                <option value="">Select Type</option>
                                <option value="ComWrker">company worker</option>
                                <option value="OutSideWrker">Outside job worker</option>
                                </select>
                                </div>
                                
                                </div>
                                <div class="form-group">
                                  <div class="col-md-2">
                                <label class="control-label">Worker Name</label>
                                </div>
                              
                                  <div class="col-md-4" id="wrkerInSide">
                              <select class="selectpicker" data-live-search="true" data-size="7" id="wrkCdOfMainPrcs">
 							<option value="">Select Worker</option>
                               <c:forEach var="ExistWrk" items="${ExistWrkDet}">
                               <c:choose><c:when test="${ExstMnHdrEdt.mph_wrk_cd eq ExistWrk.em_emp_id}">
                                   <option value="${ExistWrk.em_emp_id}" selected="selected">${ExistWrk.em_emp_nm}</option>
                               </c:when> <c:otherwise>
                                   <option value="${ExistWrk.em_emp_id}">${ExistWrk.em_emp_nm}</option>
                               </c:otherwise> </c:choose>
                           
                               </c:forEach>    </select>   
                                </div>
                                   <div class="col-md-4" id="wrkerOutSide">
                                  
                          <select class="selectpicker" id="wrkCdOfMainPrcs"  data-size="7" data-actions-box="true">
                           <option value="">Select Vendor</option>
                     <c:forEach var="ExistVn" items="${ExistVnDet}">
                     <c:choose><c:when test="${ExstMnHdrEdt.mph_wrk_cd eq ExistVn.vcm_vnct_cd}">
                       <option value="${ExistVn.vcm_vnct_cd}" selected="selected">${ExistVn.vcm_vnct_nm}</option>
                      </c:when>
                      <c:otherwise> <option value="${ExistVn.vcm_vnct_cd}">${ExistVn.vcm_vnct_nm}</option></c:otherwise>
                      </c:choose> 
										 
										  </c:forEach>
										  </select>
                  </div>
                            <div class="col-md-2">
                                <label class="control-label">Process</label>
                                </div>
                                <div class="col-md-4">
                                <select class="selectpicker"  data-live-search="true" data-size="5" id="prcsCdOfMain">
                                 <option value="">Select Process</option>
                                 
                               <c:forEach var="ExstPrsDt" items="${ExstPrcsDet}">
                                 <option value="${ExstPrsDt.pm_prcs_cd}">${ExstPrsDt.pm_prcs_nm}</option>
                             <c:choose><c:when test="${ExstMnHdrEdt.mph_prcs_typ eq ExstPrsDt.pm_prcs_cd}">
                                 <option value="${ExstPrsDt.pm_prcs_cd}" selected="selected">${ExstPrsDt.pm_prcs_nm}</option>
                               </c:when>
                               <c:otherwise>
                               
                               </c:otherwise>
                                </c:choose> 
                             
                               </c:forEach>
                                </select>
                                </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-md-2">
                                <label class="control-label">Balance Stock</label>
                                </div>
                                <div class="col-md-4">
                                <input type="text" class="form-control input-sm" placeholder="Balance of Stock" id="balStkOfMainPrcs">
                                 </div>
                                
                                <input type="hidden" id="isauthVal" value="0"> <input type="hidden" id="rcvdauthVal" value="0">
                                <input type="hidden" id="ExstStkInJobCrdRcvdStr" value='${ExstStkInJobCrdRcvdStr}'> 
                                 <input type="hidden" id="ExstStkInSubPrcsIssedStr" value='${ExstStkInSubPrcsIssedStr}'> 
                                   <input type="hidden" id="ExstStkInSubPrcsRcvdStr" value='${ExstStkInSubPrcsRcvdStr}'>
                                    <input type="hidden" id="CompanyStoreDet" value='${CompanyStoreDet}'> 
                                   <div class="col-md-2">
                                <label class="control-label">Target Date <i class="glyphicon glyphicon-filter" aria-hidden="true"></i></label>
                                </div>
                                <div class="col-md-4">
                               <select class="selectpicker" id="trgtDtOfMainPrcs">
                               <option value="">Select Target Date</option>
                               </select>
                                </div>
                                </div>
                                <div class="form-group">
                                 <div class="col-md-2">
                                <label class="control-label">Job Card No <i class="glyphicon glyphicon-filter" aria-hidden="true"></i></label>
                                </div>
                                <div class="col-md-4">
                                <select class="selectpicker" data-live-search="true" data-size="7" multiple data-actions-box="true" id="jbCardOfSubPrcs">
 							<option value="">Select Job Card No</option>
                               <c:forEach var="ExistJobOrdNo" items="${ExistJobOrderNo}">
                               <option value="${ExistJobOrdNo.joh_doc_no}">${ExistJobOrdNo.joh_doc_no}</option>
                               </c:forEach>    </select>   
                                </div>
                                <div class="col-md-2">
                                <label class="control-label">Pending J.No <i class="glyphicon glyphicon-filter" aria-hidden="true"></i></label>
                                </div>
                                <div class="col-md-4">
                              
                               <select class="selectpicker" data-live-search="true" data-size="7" multiple data-actions-box="true" id="treNoOfSubPrcs">
 							<option value="">Select Tree  No</option>
                               <c:forEach var="ExtTreNoInHdr" items="${ExstTreeNoInHdr}">
                               <option value="${ExtTreNoInHdr.tgh_doc_no}">${ExtTreNoInHdr.tgh_doc_no}</option>
                               </c:forEach>    </select>         
                                </div>
                                    
                                </div>
                               
                                </div>
                                <div class="col-md-4">
                                <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Isd Wgt</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Metal Weight" id="metalWeight" value="${ExstMnHdrEdt.mph_mtl_wgt}">
                                </div>
                                </div>
                                <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Rcvd Wgt</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Receieved Wgt" id="isdMtlWgtOfMainPrcs" value="${ExstMnHdrEdt.mph_rcvd_wgt}">
                                </div>
                                </div>
                                <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Bal Wgt</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Bal Wgt" id="balwgtOfMainPrcs" value="${ExstMnHdrEdt.mph_bal_wgt}">
                                </div>
                                </div>
                                 <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Balance Pdt</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Balance of Products">
                                </div>
                                </div>
                                </div>
                                </div>
                                
                                
                                
                                
                                <div class="form-group">
                                <div class="table-responsive">
              <table class="table table-bordered table-striped" id="myTableTable">
    <thead>
      <tr>
       <th class="chcktbl">
      <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"  data-toggle="tooltip" title="Select All">
                                                        <input type="checkbox" class="checkboxes parentCheckBox" value="1">
                                                        <span></span>
                                                    </label>
      </th>
 	 <th>Tgt.Dt<input class="form-control input-sm search"></th>
      <th>JbCd.No<input class="form-control input-sm search"></th>
        <th>Prty<input class="form-control input-sm search"></th>
       <th>Ctgy<input class="form-control input-sm search"></th>
      <th>Qty<input class="form-control input-sm search"></th>
      <th>Wgt<input class="form-control input-sm search"></th>
       <th>Reqd.BOM<input class="form-control input-sm search"></th>
      <th>BOM.Wgt<input class="form-control input-sm search"> </th>
     	<th>Tot Ised Wgt<input class="form-control input-sm search"> </th>
      <th>Rtn Smi Fnsh Pdt<input class="form-control input-sm search"> </th>
      	<th>Rtn Scrp Mtl<input class="form-control input-sm search"> </th>
       <th>Sub Prcs Ised<input class="form-control input-sm search"> </th>
        <th>Sub Prcs<input class="form-control input-sm search"> </th>
        <th>Sub Prcs Rcvd<input class="form-control input-sm search"> </th>
     	<th>Bal.Wgt<input class="form-control input-sm search"></th>
            
            
        
      </tr>
    </thead>
   <c:choose><c:when test="${ExstMnHdrEdt.mph_iss_auth eq false}">
    <tbody id="newTrForTable">

    </tbody></c:when></c:choose>
       <tbody style="border: aliceblue;" id="ExstTbodyTrs">
    <c:forEach var="exstJbTree" items="${ExstMainPrcsHdrDtlEdt}">     
    <c:choose><c:when test="${exstJbTree[12] eq '1'}">
      <tr balancebom="${exstJbTree[18]}" class="danger">
       <td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> 
     <input type="checkbox" class="checkboxes childCheckBox" disabled mphdid="${exstJbTree[13]}" value="${exstJbTree[14]}"> <span></span> </label></td>
			
    </c:when><c:otherwise>    
     <tr style="background-color: #5fbeaa;color: black;" balancebom="${exstJbTree[18]}">
      <td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> 
     <input type="checkbox" class="checkboxes childCheckBox" mphdid="${exstJbTree[13]}" value="${exstJbTree[14]}"> <span></span> </label></td>
			
     </c:otherwise> </c:choose> 
    <td class="trgtDtTr">${exstJbTree[0]}</td>
					<td class="jobCrdNoTr">${exstJbTree[1]}</td>
					<td class="prtyOfTr">${exstJbTree[19]}</td>
					<td class="ctgyNoTr">${exstJbTree[2]}</td>
					<td class="qtyTr">${exstJbTree[3]}</td><td class="wgtOfTr">${exstJbTree[4]}</td>
					<td id="rqrdBomjofbcd" jobcardno="${exstJbTree[1]}">${exstJbTree[5]}</td>
					<c:choose>
					<c:when test="${exstJbTree[11] eq '0'}">
					<td><input type="number" class="form-control isdBomwgtofTr" value="${exstJbTree[6]}"></td>
					<td><input type="number" class="form-control isdStkWgtTr" value="${exstJbTree[7]}" old="${exstJbTree[7]}"></td>
					</c:when>
					<c:otherwise>
					<td><input type="number" class="form-control isdBomwgtofTr" disabled="disabled" value="${exstJbTree[6]}"></td>
					<td><input type="number" class="form-control isdStkWgtTr" disabled="disabled" value="${exstJbTree[7]}" old="${exstJbTree[7]}"></td>
					</c:otherwise>
					</c:choose>
					<td><input type="number" class="form-control semiFinsPdtTr"  placeholder="${exstJbTree[8]}" jobcardno="${exstJbTree[1]}" data-toggle="updaterMain" data-placement="top" data-original-title="Update..?" data-popout="true"  old="${exstJbTree[8]}"></td>
					<td><input type="number" class="form-control srcpMtlTr" placeholder="${exstJbTree[9]}" old="${exstJbTree[9]}" data-toggle="updaterMain" data-placement="top" data-original-title="Update..?" data-popout="true"></td>
					<td><input type="number" class="form-control subPrcsisdTr" placeholder="${exstJbTree[20]}" value="" data-toggle="updaterMain" data-placement="top" data-original-title="Update..?" data-popout="true"></td>
			<td><select class="form-control subPrcsTr" subPrcsExst="${exstJbTree[15]}" ><script>
			subProcessList.find((data,i)=>{
				if($(data).attr("value")=="${exstJbTree[15]}"){
					subProcessList[i]=$(data).attr("selected","selected")[0].outerHTML;
					return true;
				}
			})
			document.write(subProcessList);
			</script></select></td><td>
			<input type="number" class="form-control subPrcsrcvdTr" disabled="disabled" value="" data-toggle="updaterMain" data-placement="top" data-original-title="Update..?" data-popout="true"></td>
					<td><input type="text" class="form-control balwgtTr" value="${exstJbTree[10]}" readonly="true"></td>                     
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



<!-- Bom Metal Detail in PopPup -->
<div class="modal fade in" id="myModal" role="dialog">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">X</button>
          <h4 class="modal-title"><small>Issued Bom Details</small></h4>
        </div>
        <div class="modal-body">
        <div class="form-group">
                                <div class="table-responsive">
              <table class="table table-bordered table-striped" id="myBomTable">
    <thead id="theadofbommaainprcs">
    <tr><th><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"><input type="checkbox" class="checkboxes parentBomCheckBox" ><span></span></label></th><th>BomName</th><th>BomWrk.Type</th><th>BomType</th><th>BomSize</th><th>Req.Bom</th><th>Stk.Bom</th><th>Rcvd.Bom</th><th>Rcvd.Wgt</th><th>Bal.Bom</th></tr>
    </thead>
    <tbody id="bomMetalDetailTbody">
   </tbody>  
    </table></div></div>
                        
   
          
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-success" id="savebomtoTheDtailList" >Save</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
          
        </div>
      </div>
    </div>
  </div>
  
  <!-- Rtn Fnsh Pdt Detail Bom  -->
  
  
<!-- Bom Metal Detail in PopPup -->
<div class="modal fade in" id="myModalRtnFnsh" role="dialog" data-backdrop="static">
    <div class="modal-dialog modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">X</button>
          <h4 class="modal-title"><small>Issued Bom Details</small></h4>
        </div>
        <div class="modal-body">
        <div class="form-group">
                                <div class="table-responsive">
              <table class="table table-bordered table-striped" id="myBomTable">
    <thead>
    <tr>
	<th>BomName</th><th>BomType</th><th>BomSize</th><th>BomQty</th><th>Rjct.Qty</th><th>Remarks</th></tr>
    </thead>
    <tbody id="bomMetalDetailTbodyRtnFnsh">
   </tbody>  
    </table></div></div>
                        
   
          
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
         <button type="button" class="btn btn-success" id="saveOfbomDetailToTheRecord">Save</button>  
        </div>
      </div>
    </div>
  </div>

<!-- Include all compiled plugins (below), or include individual files as needed --> 
<script src="js/bootstrap.min.js"></script>
<script src="js/datepicker.js" type="text/javascript"></script>
   <script src="js/bootstrap-confirmation.min.js"></script>
   <script src="js/angular.js"></script>
<script src="js/angular-resource.js"></script>
   <script src="js/datatableSMR.js"></script>
   <script src="js/bootstrap-select.min.js"></script>
     <script>
 $(function() {
    window.datpicker='${CurrentDate}';
});
 window.adminId='${LoginDet.em_emp_id}';
 </script>
    <script>
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});
</script>
<script>

$(function(){
if($("#issAuthExst").val()=="true"&&$("#rcvdAuthExst").val()=="true"){
$(".panel-body select:not(#ExstTbodyTrs select),.panel-body :checkbox").attr("disabled","disabled");	
$(".panel-body input:not(.search)").prop("readonly",true);
$(".panel-body a:not(#ExstButton)").addClass("disabled");	
}
else if($("#issAuthExst").val()=="true"&&$("#rcvdAuthExst").val()=="false"){
	$(".col-md-8 input,.col-md-8 select").attr("disabled","disabled");$(".delweter").addClass("disabled");	
}
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
					$("#isauthVal").val("1");
				},
			onCancel : function() {$('[data-toggle=confirmation]').removeClass("btn-circlesuc");
					$("#isauthVal").val("0");
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
  
	    $("[data-toggle=updaterMain]").confirmation({
			  rootSelector: '[data-toggle=confirmation1]',
				onConfirm : function(evt,ths) {
					UpdateController(ths);
					},
				onCancel : function() {
						
					}
				});
	    $("[data-toggle=updaterMain]").click(function(){
	    	if(!$(this).hasClass("subPrcsTr"))
	    	this.select();
	    	});
	});

 	$(document).ready(function(){
		var table = $('#myTableTable').DataTable({
			   "aLengthMenu": [ [10, 25,50, -1], [10, 25,50, "All"] ],
			   "iDisplayLength": -1,
			   columnDefs:[{ type: 'date-dd-mmm-yyyy', targets: 1}]
			});
		table.columns().eq( 0 ).each( function ( colIdx ) {
		    $( 'input:not(:checkbox)', table.column( colIdx ).header() ).on( 'keyup change', function () {
		        table
		            .column( colIdx )
		            .search( this.value )
		            .draw();
		    } );});
	});  
 	var jobCard=new Set();
 	$("#ExstTbodyTrs tr").toArray().forEach((tr)=>{
 		jobCard.add('<option selected>'+$(tr).find("td:eq(2)").html()+'</option>');
 	})
 	$("#jbCardOfSubPrcs").html([...jobCard]).selectpicker();
 	$("#myTableTable .danger").toArray().forEach((tr)=>{
 	$(tr).find("input,select").prop("disabled",true);	
 	})
 	
</script>

<script src="js/editmainprocess.js"></script>

</body>
</html>