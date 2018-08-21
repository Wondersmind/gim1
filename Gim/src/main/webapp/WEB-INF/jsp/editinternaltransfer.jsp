<!DOCTYPE html>
<html lang="en" ng-app="">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<title>Internal Transfer</title>
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
<link href="css/datepicker.css" type="text/css" rel="stylesheet">
<script src="js/angular.js"></script>
<script src="js/angular-resource.js"></script>
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
            <li><a href="bom.mm">BOM</a></li>
            <li><a href="uom.mm">Uom</a></li>
               <li><a href="daywiseprice.mm">Day Wise Price</a></li>   <li><a href="alloymaster.mm">Alloy</a></li><li><a href="carat.mm">Carat</a></li>
             
              </ul>
            </li>
            <li class="col-sm-6">
              <ul>
              <li><a href="store.mm">Location</a></li>
               <li><a href="process.mm">Process</a></li>
              <li><a href="vendor.mm">Vendor/Customers</a></li>
            <li><a href="stone.mm">Stone/ Non Gold</a></li>
            <li><a href="mold.mm">Mold</a></li>
             <li><a href="design.mm">Design</a></li>
            <li><a href="rawmetrial.mm">Raw materials</a></li><li><a href="inoutbom.mm">IN&OUT Bom</a></li>
              </ul>
            </li>
          </ul>

        </li>
        
        </li>    <li class="dropdown"><a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown"><i class="md md-layers"></i>Planning</a>
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
                                            <span class="caption-subject font-dark bold uppercase text-muted page-title-alt"> <h4 class="page-title">Edit Internal Transfer</h4></span>
                                        </div>
                                       <div class="actions">
                                   
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:saveInternalTrfHdr()" id="saveBtnInIntlTrf" data-toggle="tooltip" title="Update">
                                                <i class="icon-doc"></i>
                                            </a>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" id="resrOut" data-toggle="tooltip" title="Print">
                                                <i class="icon-printer"></i>
                                                </a>
                                                 <c:choose><c:when test="${ExstitnlfmHdrOnlyEdt[5] eq '1'}">
                                          <a class="btn btn-circlesuc btn-icon-only btn-default" href="javascript:void(0)" data-toggle="confirmation" data-popout="true"  title="Issued Authorization">
                                                <i class="icon-shield"></i>
                                            </a></c:when>
                                            <c:otherwise>  <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" data-toggle="confirmation" data-popout="true"  title="Issued Authorization">
                                                <i class="icon-shield"></i>
                                            </a></c:otherwise>
                                            </c:choose>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" data-toggle="tooltip" title="Import">
                                                <i class="icon-cloud-download"></i>
                                            </a>
                                            
                                              
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:deleteInternalTrfHdrDtlRec()" id="delBtnIdOfItnl" data-toggle="tooltip" title="Delete!">
                                                <i class="icon-trash"></i>
                                            </a>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="internaltransfer.mm" id="backtoback" data-toggle="tooltip" title="Existing">
                                                <i class="icon-logout"></i>
                                            </a>
                                        </div>
                                         <div class="actions">
                                         <span id="savesuccessRes"></span>
                                           <c:choose><c:when test="${ExstitnlfmHdrOnlyEdt[5] eq '1'}"><div class="alert alert-warning" >Internal Transfer Is Authentication Mode...</div> </c:when></c:choose>
                                         </div>
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
                                 <select class="selectpicker" data-live-search="true" id="cmyCdOfIntlTrf">
 	<option value="">Select Company</option>
									                              <c:forEach var="ExistCom" items="${ExistComDet}">
									                              <c:choose><c:when test="${ExstitnlfmHdrOnlyEdt[8] eq ExistCom.cm_cmy_cd}">
									                              <option value="${ExistCom.cm_cmy_cd}" selected="selected">${ExistCom.cm_cmy_nm}</option>
									                              </c:when><c:otherwise><option value="${ExistCom.cm_cmy_cd}">${ExistCom.cm_cmy_nm}</option></c:otherwise> </c:choose>
									                               </c:forEach>
</select>

                                </div>
                                <div class="col-md-2">
                                <label class="control-label">Location</label>
                                </div>
                                <div class="col-md-4">
                                 <select class="selectpicker" data-live-search="true" id="strCdOfItlTrf">
  <option value="">Select Location</option>
							  <c:forEach var="ExistStr" items="${ExistStrDet}">
							     <c:choose><c:when test="${ExstitnlfmHdrOnlyEdt[9] eq ExistStr.sm_str_cd}">
								 <option value="${ExistStr.sm_str_cd}" selected="selected">${ExistStr.sm_str_nm}</option></c:when>
								 <c:otherwise> <option value="${ExistStr.sm_str_cd}">${ExistStr.sm_str_nm}</option></c:otherwise>
								 </c:choose>
								 </c:forEach>
</select>
                                </div>
                                </div>
                                <div class="form-group">
                                 <div class="col-md-2">
                                <label class="control-label">InternalTrf No</label>
                                </div>
                                <div class="col-md-4">
                                       <input type="text" class="form-control" id="docNoOfIntTrf" placeholder="Document No" value="${ExstitnlfmHdrOnlyEdt[0]}" readonly="readonly">
  <input type="hidden" id="isdauthVal" value="0">
  <input type="hidden" id="ExstDocTrfCd" value='${ExstDocTrfCd}'>
   <input type="hidden" id="stkForIswgtDtlString" value='${stkForIswgtDtlString}'>
     <input type="hidden" id="ExsitStkDtlStr" value='${ExsitStkDtlStr}'>
     <input type="hidden" id="authChekForId" value="${ExstitnlfmHdrOnlyEdt[5]}">
     <input type="hidden" id="primIdOfIntlHdr" value="${ExstitnlfmHdrOnlyEdt[10]}">
          <input type="hidden" id="crtIdOfIntlHdr" value="${ExstitnlfmHdrOnlyEdt[11]}">
     <input type="hidden" id="ExxstIntlObj" value='${ExxstIntlObj}'>
     <input type="hidden" id="ExstIntlDetJson" value='${ExstIntlDetJson}'>
       <input type="hidden" id='ExstStkInJobCrdIseStr' value='${ExstStkInJobCrdIseStr}'>
         <input type="hidden" id='stkForIsuedIntTrf' value='${stkForIsuedIntTrf}'>
           <input type="hidden" id="ExstStkInInward" value='${ExstStkInInward}'>
           
   <input type="hidden" id="CstingstkForEdit" value='${CstingstkForEdit}'>
     <input type="hidden" id="IsuedJobCardMakingForEdit" value='${IsuedJobCardMakingForEdit}'>
                                </div>
                                <div class="col-md-2">
                                <label class="control-label">Date</label>
                                </div>
                                <div class="col-md-4" style="text-align: left;">
                                  <input type="text" class="form-control input-sm dateTimePick" id="crtDtOfIntlHdr" disabled placeholder="date/time">
                                </div>
                                </div>
                               
                                <div class="form-group">
                                 <div class="col-md-2">
                                <label class="control-label">From Depart</label>
                                </div>
                                <div class="col-md-4">
                              <select class="selectpicker" data-live-search="true" id="frmDptOfIntTrns">
   <option value="">Select DepartMent</option>
										 <c:forEach var="ExistDpt" items="${ExistDptDet}">
										 <c:choose><c:when test="${ExstitnlfmHdrOnlyEdt[2] eq ExistDpt.dm_dpt_cd}">
										  <option value="${ExistDpt.dm_dpt_cd}" selected="selected">${ExistDpt.dm_dpt_nm}</option></c:when>
										<c:otherwise> <option value="${ExistDpt.dm_dpt_cd}">${ExistDpt.dm_dpt_nm}</option></c:otherwise>
										   </c:choose>
										</c:forEach>
</select>
                                </div>
                                 <div class="col-md-2">
                                <label class="control-label">To Depart</label>
                                </div>
                                <div class="col-md-4">
                         <select class="selectpicker" data-live-search="true" id="toDptOfIntTrns">
   <option value="">Select DepartMent</option>
										 <c:forEach var="ExistDpt" items="${ExistDptDet}">
										 <c:choose><c:when test="${ExstitnlfmHdrOnlyEdt[3] eq ExistDpt.dm_dpt_cd}">
										  <option value="${ExistDpt.dm_dpt_cd}" selected="selected">${ExistDpt.dm_dpt_nm}</option></c:when>
										<c:otherwise> <option value="${ExistDpt.dm_dpt_cd}">${ExistDpt.dm_dpt_nm}</option></c:otherwise>
										   </c:choose>
										</c:forEach>
</select>
                                </div>
                                </div>
                                <div class="form-group">
                                <div class="col-md-2">
                                <label class="control-label">Transfer Type</label>
                                </div><input type="hidden" value='${ExstitnlfmHdrOnlyEdt[4]}' id="trfTypeForSelect">
                                
                                
                                
                                <div class="col-md-4" >
                                  <select class="form-control input-sm"  id="transTypeOfIntTrns" disabled="disabled">
                              	<option value="">Select Type</option>
                              	<option value="Tree No">Tree No</option>
                                <option value="JobCard">Job Card</option>
                                <option value="Direct">Direct</option>
                                 <option value="Bom">Bom</option>
                                  <option value="Finished Pdt">Finished Pdt</option>
                                </select>
                                </div>
                                 <div class="col-md-2">
                                <label class="control-label" id="docnotypeshower">DocumentNos </label><i class="glyphicon glyphicon-filter" aria-hidden="true"></i>
                                </div>
                                <div class="col-md-4">
                                   <select class=" selectpicker " id="filterOfIntTrns" multiple data-live-search="true" data-actions-box="true">
                              
                                </select>
                                </div>
                                </div>
                                <div class="form-group">
                                
                                <c:choose>
                                 <c:when test="${ExstitnlfmHdrOnlyEdt[4] eq 'Bom'}">
                                 <div class="col-md-2">
                                <label class="control-label">Bom Wt</label>
                                </div>
                                <div class="col-md-4">
                                <input type="text" class="form-control input-sm" placeholder="Total Wt" id="bomWgtCalculator" value="${ExstitnlfmHdrOnlyEdt[12]}"> 
                                </div>
                                </c:when>
                                <c:otherwise>
                               <%--   <div class="col-md-2 pdtDptInjbCdHde">
                                <label class="control-label">Pdt.Dept <i class="glyphicon glyphicon-filter" aria-hidden="true"></i></label>
                                </div>
                                <div class="col-md-4 pdtDptInjbCdHde">
                                   <select class=" selectpicker" id="filterOfPdtDeptInJobCd" multiple data-live-search="true" data-actions-box="true">
                                   <option value="">Select Pdt.Department</option>
                                   <c:forEach var="pdtdpt" items="${pdtdptInJbcd}">
                                   <option value="${pdtdpt[0]}">${pdtdpt[1]}</option>
                                   </c:forEach>
                              	 </select>
                                </div> --%>
                                </c:otherwise></c:choose>
                                </div>
                                </div>
                                <div class="col-md-4">
                                <div class="form-group">
                                 <div class="col-md-6">
                               <c:choose>
                               <c:when test="${ExstitnlfmHdrOnlyEdt[4] eq 'Bom' or ExstitnlfmHdrOnlyEdt[4] eq 'Finished Pdt'}"> <label class="control-label">Total Qty</label>
                               </c:when><c:otherwise>
                                <label class="control-label">Total Wt</label>
                               </c:otherwise>
                               </c:choose>
                               
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Total Wt" id="totWgtOfIntTrns" value="${ExstitnlfmHdrOnlyEdt[7]}">
                                </div>
                                </div>
                                <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Issue Wt</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Issue Wt" id="totissWgtOfIntTrns" value="${ExstitnlfmHdrOnlyEdt[6]}">
                                </div>
                                </div>
                                <div class="form-group customersoption">
                                 <div class="col-md-6">
                                <label class="control-label">Customer</label>
                                </div>
                                <div class="col-md-6">
                                <select class="selectpicker" data-size="5" data-live-search="true" id="ohd_cst_cd">
 										 <option value="">Select Customer</option>
									                              <c:forEach var="ExistCst" items="${ExistCstDet}">
									                              <c:choose>
									                              <c:when test="${ExstitnlfmHdrOnlyEdt[13] eq ExistCst.vcm_vnct_cd}">
									                               <option selected value="${ExistCst.vcm_vnct_cd}">${ExistCst.vcm_vnct_nm}</option>
									                               </c:when>
									                               <c:otherwise>
									                                <option value="${ExistCst.vcm_vnct_cd}">${ExistCst.vcm_vnct_nm}</option>
									                               </c:otherwise>
									                              </c:choose>
									                               </c:forEach>
								</select>
                                </div></div>
                           
                                </div>
                                
                                </div>
                                
                                
                                
                                
                                <div class="form-group">
                                <div class="table-responsive">
              <table class="table table-bordered table-striped" id="myTable">
    <thead id="TheadBody">
      <c:choose><c:when test="${ExstitnlfmHdrOnlyEdt[4] eq 'Tree No'}">
       <tr><th class="chcktbl">  <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"  data-toggle="tooltip" title="Select All">
	<input type="checkbox" class="checkboxes parentCheckBox" value="1" onchange="selectBoxHandlerInAddInternal(this)"> <span></span> </label> </th><th>Transaction Type<input class="form-control input-sm seacrher"></th><th>Tree No<input class="form-control input-sm seacrher"></th> <th>Total Wt<input class="form-control input-sm seacrher"></th><th>Issued Wt<input class="form-control input-sm seacrher"></th> <th>Issued Prty<input class="form-control input-sm seacrher"></th><th>Target Date<input class="form-control input-sm seacrher"></th>
	</tr>
     </c:when><c:when test="${ExstitnlfmHdrOnlyEdt[4] eq 'JobCard'}">
      <tr>
      <th class="chcktbl">  <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"  data-toggle="tooltip" title="Select All">
	<input type="checkbox" class="checkboxes parentCheckBox" value="1" onchange="selectBoxHandlerInAddInternal(this)"> <span></span> </label><th>Transaction.Type<input class="form-control input-sm seacrher"></th><th>JobCardNo<input class="form-control input-sm seacrher"></th><th>Dept.Nm<input class="form-control input-sm seacrher"></th> <th>Total Wt<input class="form-control input-sm seacrher"></th><th>Isd.Wgt<input class="form-control input-sm seacrher"></th><th>Tgt.Dt<input class="form-control input-sm seacrher"></th>
	<th>Qty<input class="form-control input-sm seacrher"></th><th>Prty<input class="form-control input-sm seacrher"></th>
	</tr>
      </c:when>
      <c:when test="${ExstitnlfmHdrOnlyEdt[4] eq 'Bom'}">
     <tr> <th class="chcktbl"> <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="Select All"> <input type="checkbox" class="checkboxes parentCheckBox" value="1" onchange="selectBoxHandlerInAddInternal(this)"> <span></span> </label> </th>  <th>Bom.Nm<input class="form-control input-sm seacrher"></th> <th>Bom.Sz<input class="form-control input-sm seacrher"></th> <th>BomWrk.Typ<input class="form-control input-sm seacrher"></th><th>Bom.Typ<input class="form-control input-sm seacrher"></th><th>Stk.Qty<input class="form-control input-sm seacrher"></th> <th>Isd.Qty<input class="form-control input-sm seacrher"></th><th>Isd.Wgt<input class="form-control input-sm seacrher"></th> <th>Bal.Qty<input class="form-control input-sm seacrher"></th> <th>Prty<input class="form-control input-sm seacrher"></th> </tr>
      </c:when>
      <c:when  test="${ExstitnlfmHdrOnlyEdt[4] eq 'Finished Pdt'}">
       <th class="chcktbl"> <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="Select All"> <input type="checkbox" class="checkboxes parentCheckBox" value="1" onchange="selectBoxHandlerInAddInternal(this)"> <span></span> </label> </th>  <th>DC.NO<input class="form-control input-sm seacrher"></th> <th>TRGT DT<input class="form-control input-sm seacrher"></th> <th>PDT CD<input class="form-control input-sm seacrher"></th> <th>WRK NM<input class="form-control input-sm seacrher"></th><th>ORD TYP<input class="form-control input-sm seacrher"></th> <th>CTGY<input class="form-control input-sm seacrher"></th> <th>ORD PRTY<input class="form-control input-sm seacrher"></th><th>ORD QTY<input class="form-control input-sm seacrher"></th> <th>BTCH NO<input class="form-control input-sm seacrher"></th> <th>ACPT /RJCT<input class="form-control input-sm seacrher"></th><th>WGT<input class="form-control input-sm seacrher"></th>
 <th>RMRK<input class="form-control input-sm seacrher"></th>      </c:when>
      <c:otherwise>
      <tr><th class="chcktbl">  <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"  data-toggle="tooltip" title="Select All">
	<input type="checkbox" class="checkboxes parentCheckBox" value="1" onchange="selectBoxHandlerInAddInternal(this)"> <span></span> </label> </th><th>Transaction Type<input class="form-control input-sm seacrher"></th><th>Item Type<input class="form-control input-sm seacrher seacrher"></th><th>Item Code<input class="form-control input-sm seacrher"></th> <th>Total Wt<input class="form-control input-sm seacrher"></th><th>Issued Wt<input class="form-control input-sm seacrher"></th> <th>Issued Prty<input class="form-control input-sm seacrher"></th><th>Target Date<input class="form-control input-sm seacrher"></th>
	</tr>
      </c:otherwise></c:choose>
    </thead>
       <c:choose><c:when test="${ExstitnlfmHdrOnlyEdt[5] ne '1'}">
	<tbody id="IntTansTable">
   </tbody></c:when></c:choose>
      <tbody id="myTableExist" style="border: aliceblue;">
   <c:choose><c:when test="${ExstitnlfmHdrOnlyEdt[4] eq 'Tree No'}">
     <c:forEach var="ExtiDtlEdit" items="${ExstitnlTrfmHdrDtlEdit}">
	 <c:choose><c:when  test="${ExtiDtlEdit[1] ne null}">
	 <tr  style="background-color: #5fbeaa !important;" > <td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"  >
	   <c:choose><c:when test="${ExtiDtlEdit[6] eq '1'}"><input type="checkbox" class="checkboxes childCheckBox" value="${ExtiDtlEdit[7]}" id="${ExtiDtlEdit[8]}" onchange="childCkeckBoxChecked()" disabled="disabled"> 
	   </c:when><c:otherwise><input type="checkbox" class="checkboxes childCheckBox" value="${ExtiDtlEdit[7]}" id="${ExtiDtlEdit[8]}" onchange="childCkeckBoxChecked()" > </c:otherwise> </c:choose><span></span> </label></td><td>${ExtiDtlEdit[0]}</td><td>${ExtiDtlEdit[1]}</td>
	<c:choose><c:when test="${ExtiDtlEdit[6] eq '1'}">
	<td>${ExtiDtlEdit[9]}</td>
	<td><input type="number" step="0.01" class="form-control smplIssWgtOfCst" style=""   value="${ExtiDtlEdit[2]}" readonly="readonly"></td>
	</c:when><c:otherwise><td>${ExtiDtlEdit[9]}</td>
	<td><input type="number" step="0.01" class="form-control smplIssWgtOfCst" style=""   value="${ExtiDtlEdit[2]}"></td>
	</c:otherwise> </c:choose>
	
	<td class="itemPurityNew">${ExtiDtlEdit[5]}</td>
	<td>${ExtiDtlEdit[3]}</td></tr>
	 </c:when> </c:choose>
	</c:forEach> </c:when>
	 <c:when test="${ExstitnlfmHdrOnlyEdt[4] eq 'JobCard'}">
	  <c:forEach var="ExtiDtlEdit" items="${ExstitnlTrfmHdrDtlEdit}">
	<c:choose><c:when test="${ExtiDtlEdit[8] eq '1'}"><tr class="warning" dptcd="${ExtiDtlEdit[10]}" > <td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" >
		<input type="checkbox" class="checkboxes childCheckBox" pdtdeptcd="${ExtiDtlEdit[10]}" disabled primidofintf="${ExtiDtlEdit[7]}" value="${ExtiDtlEdit[9]}"  onchange="childCkeckBoxChecked()"> <span></span> </label></td><td class="treeNoOfIntTrfCls">${ExtiDtlEdit[0]}</td><td class="OrdNoOfIntTrfCls">${ExtiDtlEdit[1]}</td><td class="pdtCdOfIntTrfCls">${ExtiDtlEdit[2]}</td><td class="OrderTypOfIntTrfCls">${ExtiDtlEdit[3]}</td>
		<td class="QtyOfIntTrfCls"><input class="form-control" id="isdWgtOfJbCdInIntf" value="${ExtiDtlEdit[4]}"></td><td class="QtyOfIntTrfCls">${ExtiDtlEdit[5]}</td><td class="stdWgtsOfIntTrfCls"><script>document.write(Math.round('${ExtiDtlEdit[6]}'||0))</script></td><td>${ExtiDtlEdit[11]}</td></tr></c:when>
		
		<c:otherwise>
	<tr style="background-color: #5fbeaa !important;" dptcd="${ExtiDtlEdit[10]}" > <td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" >
		<input type="checkbox" class="checkboxes childCheckBox" pdtdeptcd="${ExtiDtlEdit[10]}" primidofintf="${ExtiDtlEdit[7]}" value="${ExtiDtlEdit[9]}" onchange="childCkeckBoxChecked()"> <span></span> </label></td><td class="treeNoOfIntTrfCls">${ExtiDtlEdit[0]}</td><td class="OrdNoOfIntTrfCls">${ExtiDtlEdit[1]}</td><td class="pdtCdOfIntTrfCls">${ExtiDtlEdit[2]}</td><td class="OrderTypOfIntTrfCls">${ExtiDtlEdit[3]}</td>
		<td class="QtyOfIntTrfCls"><input class="form-control"  id="isdWgtOfJbCdInIntf" value="${ExtiDtlEdit[4]}"></td><td class="QtyOfIntTrfCls">${ExtiDtlEdit[5]}</td><td class="stdWgtsOfIntTrfCls"><script>document.write(Math.round('${ExtiDtlEdit[6]}'||0))</script></td><td>${ExtiDtlEdit[11]}</td></tr>
	</c:otherwise> </c:choose> 
	 
	 
	
	</c:forEach>
	 </c:when>
	  <c:when test="${ExstitnlfmHdrOnlyEdt[4] eq 'Bom'}">
	  <c:forEach var="ExtiDtlEdit" items="${ExstitnlTrfmHdrDtlEdit}">
	<tr value="" role="row" class="odd"><td class="sorting_1"><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
	<input type="checkbox" class="checkboxes childCheckBox" id="2" value="10009" oldrcvdwgt="0" onchange="childCkeckBoxChecked()"><span></span></label></td>
	<td>${ExtiDtlEdit[0]}</td>
	<td>${ExtiDtlEdit[1]}</td>
	<td>${ExtiDtlEdit[2]}</td>
	<td>${ExtiDtlEdit[3]}</td>
	<td class="rcvdbomqty">${ExtiDtlEdit[4]}</td>
	<td><input type="number" class="form-control issqtyinbalbom" value="${ExtiDtlEdit[5]}"></td>
	<td><input type="number" class="form-control isswgtinbalbom" value="${ExtiDtlEdit[6]}"></td>
	<td><script>var bal=((+'${ExtiDtlEdit[4]}'||0)-(+'${ExtiDtlEdit[5]}'||0)) ;document.write(bal);</script></td>
		<td class="bomprty" >${ExtiDtlEdit[7]}</td>
	</tr>

	</c:forEach>
	 </c:when>
	 <c:when test="${ExstitnlfmHdrOnlyEdt[4] eq 'Finished Pdt'}">
	  <c:forEach var="ExtiDtlEdit" items="${ExstitnlTrfmHdrDtlEdit}">
	 <tr value="" role="row" class="odd"><td class="sorting_1"><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
	<input type="checkbox" class="checkboxes childCheckBox"  onchange="childCkeckBoxChecked()"><span></span></label></td>
	<td class="fnshpdtdocno">${ExtiDtlEdit[0]}</td><td class="fnshpdttgrtdt">${ExtiDtlEdit[1]}</td><td class="pdtCd">${ExtiDtlEdit[10]}</td><td class="fnshpdtwrknm">${ExtiDtlEdit[2]}</td><td class="fnshpdtqrdtyp">${ExtiDtlEdit[3]}</td><td class="fnshpdtctgy">${ExtiDtlEdit[4]}</td><td class="fnshpdtprty">${ExtiDtlEdit[5]}</td><td class="pdtqtyOffnsh">${ExtiDtlEdit[6]}</td><td class="pdtBtchCd">${ExtiDtlEdit[12]}</td><td class="fnshpdtacpttyp">${ExtiDtlEdit[7]}</td><td class="pdtwgtOffnsh">${ExtiDtlEdit[8]}</td>
<td class="rmrk">${ExtiDtlEdit[11]}</td>	</tr> 
	  </c:forEach>
	 </c:when>
	 <c:otherwise>
	    <c:forEach var="ExtiDtlEdit" items="${ExstitnlTrfmHdrDtlEdit}">
	 <tr  style="background-color: #5fbeaa !important;" > <td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"  >
	   <c:choose><c:when test="${ExtiDtlEdit[6] eq '1'}"><input type="checkbox" class="checkboxes childCheckBox" value="${ExtiDtlEdit[7]}" id="${ExtiDtlEdit[8]}" onchange="childCkeckBoxChecked()" disabled="disabled"> 
	   </c:when><c:otherwise><input type="checkbox" class="checkboxes childCheckBox" value="${ExtiDtlEdit[7]}" id="${ExtiDtlEdit[8]}" onchange="childCkeckBoxChecked()" > </c:otherwise> </c:choose><span></span> </label></td><td>${ExtiDtlEdit[0]}</td><td>${ExtiDtlEdit[4]}</td><td>${ExtiDtlEdit[1]}</td>
	<c:choose><c:when test="${ExtiDtlEdit[6] eq '1'}">
	<td>${ExtiDtlEdit[9]}</td>
	<td><input type="number" step="0.01" class="form-control smplIssWgtOfCst" style=""   max="${ExtiDtlEdit[9]}" value="${ExtiDtlEdit[2]}" readonly="readonly"></td>
	</c:when><c:otherwise><td>${ExtiDtlEdit[9]}</td>
	<td><input type="number" step="0.01" class="form-control smplIssWgtOfCst" style=""   max="${ExtiDtlEdit[10]}" value="${ExtiDtlEdit[2]}"></td>
	</c:otherwise> </c:choose>
	
	<td>${ExtiDtlEdit[5]}</td>
	<td>${ExtiDtlEdit[3]}</td></tr></c:forEach>
	 </c:otherwise> </c:choose>
		          
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

     <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"><small>Issued Weigt</small></h4>
        </div>
        <div class="modal-body">
        <div class="form-group">
                                <div class="table-responsive">
              <table class="table table-bordered table-striped">
    <thead>
    <tr><th></th><th>Trn Type</th><th>Item Type</th><th>Stk Wgt</th><th>Iss Wgt</th></tr>
    </thead>
    <tbody>
     <c:forEach var="stkFor" items="${stkForIswgtDtl}">
     <tr>
     <td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                                        <input type="checkbox" class="checkboxes chkBoxInIswgt" value="${stkFor.stm_id}">
                                                        <span></span>
                                                    </label></td>
     <td>Alloy</td>
      <td>${stkFor.stm_stk_itm_typ}</td>
      <td>${stkFor.stm_rcvd_stk_wgt}</td>
      <td><input type="number" step="0.01" max="${stkFor.stm_rcvd_stk_wgt}" value="${stkFor.stm_rcvd_stk_wgt}" class="form-control issuWgtByStk" style="" ></td>
     </tr>
     </c:forEach>
    </tbody>  
    </table></div></div>
                        
   
          
        </div>
        <div class="modal-footer">
         <button type="button" class="btn btn-success" onclick="saveIseWgtHndl()">Save</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          
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
 <script src="js/bootstrap-confirmation.min.js"></script>
     <script src="js/datatableSMR.js"></script>
     <script>
     $(function() {
		 if($("#authChekForId").val()=="1"){
				$(".wrapper :input:not(.seacrher),.wrapper a:not(#backtoback)").attr("disabled",true);
				$(".wrapper a:not(#backtoback)").addClass("disabled");
			}
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
			})
	});
	
$(document).ready(function(){
	var optiosn={
			   "aLengthMenu": [ [10, 25,50, -1], [10, 25,50, "All"] ],
			   "iDisplayLength": -1,
			   columnDefs:[{ type: 'date-dd-mmm-yyyy', targets: 6}]
			};
	if($('#myTable thead th:eq(7)').text()=='Target Date'){
		optiosn.columnDefs=[{ type: 'date-dd-mmm-yyyy', targets: 7}]
	}
	var table = $('#myTable').DataTable(optiosn);
	table.columns().eq( 0 ).each( function ( colIdx ) {
	    $( 'input:not(:checkbox)', table.column( colIdx ).header() ).on( 'keyup change', function () {
	        table
	            .column( colIdx )
	            .search( this.value )
	            .draw();
	    } );});
});
$(function (){
	var trfTyp=$("#trfTypeForSelect").val();
	$("#docnotypeshower").html(trfTyp);
	$("#transTypeOfIntTrns").val(trfTyp); 
	var arryDoc=new Set(),dptPdtCd=new Set();
	$("#myTableExist tr").toArray().forEach(s=>{
		var td=$(s).find("td");
		arryDoc.add('<option selected>'+$(td[2]).html()+'</option>');
		dptPdtCd.add('<option selected value="'+$(s).attr("dptcd")+'">'+$(td[3]).html()+'</option>');
	});
	$("#filterOfIntTrns").html([...arryDoc]).selectpicker("refresh");
	
	$("#filterOfPdtDeptInJobCd").html([...dptPdtCd]).selectpicker("refresh");
});

var hdrOObj=JSON.parse('${ExxstIntlObj}');
$("#crtDtOfIntlHdr").val(hdrOObj.ith_doc_dt||hdrOObj.ith_crt_dt)

</script>
<script src="js/editinternal.js"></script>
</body>
</html>