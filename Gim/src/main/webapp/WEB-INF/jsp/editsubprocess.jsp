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
                                            <span class="caption-subject font-dark bold uppercase text-muted page-title-alt"> <h4 class="page-title">Edit Sub Process</h4></span>
                                        </div>
                                       
                                         <div class="actions">
                                      
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:beforesavingValidate()" id="saveButtonSupPrcs" data-toggle="tooltip" title="Save">
                                                <i class="icon-doc"></i>
                                            </a>
                                            <c:choose><c:when test="${SubPrcsHderInfo[10] eq '1'}">   
                                            <a class="btn btn-circlesuc btn-icon-only btn-default disabled" href="javascript:void(0)" data-toggle="confirmation" data-popout="true"  title="Issued Authorization">
                                                <i class="icon-shield"></i>
                                            </a></c:when>
                                            <c:otherwise>
                                              <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" data-toggle="confirmation" data-popout="true"  title="Issued Authorization">
                                                <i class="icon-shield"></i>
                                            </a>
                                            </c:otherwise>
                                            </c:choose>
                                             <c:choose><c:when test="${SubPrcsHderInfo[10] eq '1'}">
                                             <c:choose><c:when test="${SubPrcsHderInfo[11] eq '1'}">
                                             <a class="btn btn-circlesuc btn-icon-only btn-default disabled" data-placement="top" href="javascript:void(0)" data-toggle="confirmation" data-popout="true"  title="Received Authorization">
                                                <i class="icon-shield"></i>
                                            </a>
                                            </c:when><c:otherwise>
                                              <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" data-placement="top" data-toggle="confirmation1" data-popout="true"  title="Received Authorization">
                                                <i class="icon-shield"></i>
                                            </a>
                                            </c:otherwise> </c:choose>
                                            </c:when> </c:choose>
                                            <a class="btn btn-circle btn-icon-only btn-default" id="ExsitingBtn" href="subprocess.mm" id="resrOut" data-toggle="tooltip" title="Existing">
                                                <i class="icon-logout"></i>
                                            </a>
                                        </div>
                                           <div class="actions">
                                             <c:choose><c:when test="${SubPrcsHderInfo[11] eq '1'}">
                                           <div class="alert alert-warning">SubProcess Is AuthenticationMode</div></c:when></c:choose>
                                           <span id="saveSuccesRes"></span></div>
                                    </div>
                                    
                                </div>
                                <form class="form-horizontal">
                                <div class="row">
                                <div class="col-md-8 rightSideInput">
                                 <div class="form-group">
                                 <div class="col-md-2">
                                <label class="control-label">Company</label>
                                </div>
                                <div class="col-md-4">
                                 <select class="selectpicker" data-live-search="true" id="cmyCdOfSupPrcs">
                                    <option value="">Select Company</option>
									                              <c:forEach var="ExistCom" items="${ExistCmyDet}">
									                               <c:choose><c:when test="${SubPrcsHderInfo[4] eq ExistCom.cm_cmy_cd}">
									                               <option value="${ExistCom.cm_cmy_cd}" selected="selected">${ExistCom.cm_cmy_nm}</option>
									                              </c:when>
									                              <c:otherwise>
									                               <option value="${ExistCom.cm_cmy_cd}">${ExistCom.cm_cmy_nm}</option>
									                              </c:otherwise>
									                              </c:choose>
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
								 <c:choose><c:when test="${SubPrcsHderInfo[5] eq ExistStr.sm_str_cd}">
								 <option value="${ExistStr.sm_str_cd}" selected="selected">${ExistStr.sm_str_nm}</option>
								 </c:when><c:otherwise>
								  <option value="${ExistStr.sm_str_cd}">${ExistStr.sm_str_nm}</option>
								 </c:otherwise> </c:choose>
								 </c:forEach>
									</select>
                                </div>
                                </div>
                                 <div class="form-group">
                                  <div class="col-md-2">
                                <label class="control-label">Document No</label>
                                </div>
                                <div class="col-md-4">
                                <input type="text" class="form-control input-sm" placeholder="Process Document No" value="${SubPrcsHderInfo[0]}" id="DocNoInSupPrcs" disabled="disabled">
                                </div>
                                <input type="hidden" id="isdauthVal" value="0"> <input type="hidden" id="rcvdauthVal" value="0">
                                   <input type="hidden" id="ExstStkInJobCrdRcvdStr" value='${ExstStkInJobCrdRcvdStr}'> 
                                  <input type="hidden" id="ExstStkInSubPrcsRcvdStr" value='${ExstStkInSubPrcsRcvdStr}'> 
                                   <input type="hidden" id="ExstStkInSubPrcsIssedStr" value='${ExstStkInSubPrcsIssedStr}'> 
                                   <input type="hidden" id="ExstSupPrcsHdrDtlEdt" value='${ExstSupPrcsHdrDtlEdt}'> 
                                 <input type="hidden" id="StkLmtOfEMployee" value="">
                                 <input type="hidden" id="issedAuthOfExst" value="${SubPrcsHderInfo[10]}">
                                    <input type="hidden" id="rcvdAuthOfExst" value="${SubPrcsHderInfo[11]}">
                                      <input type="hidden" id="prmyIdOfExstSupPrcsHdr" value="${SubPrcsHderInfo[12]}">
                                    <input type="hidden" id="crtIdOfExstSupPrcsHdr" value="${SubPrcsHderInfo[13]}">
                                        <input type="hidden" id="crtDtOfExstSupPrcsHdr" value="${SubPrcsHderInfo[14]}">
                                 <div class="col-md-2">
                                <label class="control-label">Date</label>
                                </div>
                                <div class="col-md-4" style="text-align:left">
                                   <input type="text" class="form-control input-sm dateTimePick" placeholder="date/time" id="dateofSubProcess" value="${SubPrcsHderInfo[17]}" disabled>
                                </div>
                                </div>
                                <div class="form-group">
                                  <div class="col-md-2">
                                <label class="control-label">From Deprt</label>
                                </div>
                                <div class="col-md-4">
                               <select class="selectpicker"  data-live-search="true" id="dptCdOfSubPrcs">
										 <option value="">Select DepartMent</option>
										 <c:forEach var="ExistDpt" items="${ExistDptDet}">
										 <c:choose><c:when test="${SubPrcsHderInfo[2] eq ExistDpt.dm_dpt_cd}">
										  <option value="${ExistDpt.dm_dpt_cd}" selected="selected">${ExistDpt.dm_dpt_nm}</option></c:when>
										  <c:otherwise>  <option value="${ExistDpt.dm_dpt_cd}">${ExistDpt.dm_dpt_nm}</option></c:otherwise>
										 </c:choose> </c:forEach>
								</select>

                                </div>
                                
                                 <div class="col-md-2">
                                <label class="control-label">Process Type</label>
                                </div>
                                <div class="col-md-4">
                                <select class="selectpicker" id="prcsTypOfSubPrcs">
                                <option value="">Select Process</option>
                               <c:forEach var="ExstPrsDt" items="${ExstPrcsDet}">
                               <c:choose><c:when test="${SubPrcsHderInfo[3] eq ExstPrsDt.pm_prcs_cd}">
                               <option value="${ExstPrsDt.pm_prcs_cd}" selected="selected">${ExstPrsDt.pm_prcs_nm}</option>
                               </c:when><c:otherwise><option value="${ExstPrsDt.pm_prcs_cd}" >${ExstPrsDt.pm_prcs_nm}</option></c:otherwise> </c:choose>
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
                                <option value="OutSideWrker">Outside job worker</option>
                               </select>                          
 								</div></div>
 								  <script type="text/javascript">
                               window.wrkrsTyp='${SubPrcsHderInfo[16]}';window.wrkrsCd='${SubPrcsHderInfo[6]}';
                               document.getElementById("wrkTypOfDcPrcs").value=wrkrsTyp;
                               </script> 
 								
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
                                <div class="form-group">
                                 <div class="col-md-2">
                                <label class="control-label">Job Card No <i class="glyphicon glyphicon-filter" aria-hidden="true" data-original-title="" title=""></i></label>
                                </div>
                                <div class="col-md-4">
                              
                              <select class="selectpicker" data-live-search="true" data-size="7" multiple data-actions-box="true" id="jbCardOfSubPrcs">
 							<option value="">Select Job Card No</option>
                               <c:forEach var="ExistJobOrdNo" items="${ExistJobOrderNo}">
                               <option value="${ExistJobOrdNo.joh_doc_no}">${ExistJobOrdNo.joh_doc_no}</option>
                               </c:forEach>    </select>          
                                </div>
                                 <div class="col-md-2">
                                <label class="control-label">TreeNo <i class="glyphicon glyphicon-filter" aria-hidden="true" data-original-title="" title=""></i></label>
                                </div>
                                <div class="col-md-4">
                             
                                <select class="selectpicker" data-live-search="true" data-size="7" multiple data-actions-box="true" id="treNoOfSubPrcs">
 							<option value="">Select Job Card No</option>
                               <c:forEach var="ExtTreNoInHdr" items="${ExstTreeNoInHdr}">
                               <option value="${ExtTreNoInHdr.tgh_doc_no}">${ExtTreNoInHdr.tgh_doc_no}</option>
                               </c:forEach>    </select>  
                                                                </div>
                                </div>
                        
                                </div>
                                <div class="col-md-4">
                                <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Total Issued Weight</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Total Issued Weight" id="isedtotWgtOfSubPrcs" value="${SubPrcsHderInfo[8]}">
                                </div>
                                </div>
                                <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Total Received</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Total Received" id="rcvdtotWgtOfSubPrcs" value="${SubPrcsHderInfo[9]}">
                                </div>
                                </div>
                             
                                
                                <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Balance Wgt</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Balance Wgt" id="rbalWgtOfSubPrcs" value="${SubPrcsHderInfo[15]}">
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
                                                        <input type="checkbox" class="parentCheckBox checkboxes" value="1">
                                                        <span></span>
                                                    </label>
      </th>
     <c:choose>
     <c:when test="${IsMelting eq false}">
      <th>Trns Type<input class="form-control input-sm omitSrchr"></th>
      <th>Trgt Dt<input class="form-control input-sm omitSrchr"></th>
      <th>Dept<input class="form-control input-sm omitSrchr"></th>
      <th>Ctgy<input class="form-control input-sm omitSrchr"></th>
      <th>Doc No<input class="form-control input-sm omitSrchr"></th>
      <th>Prty<input class="form-control input-sm omitSrchr"></th>
      <th>Qty<input class="form-control input-sm omitSrchr"></th>
      <th>Stk Wgt<input class="form-control input-sm omitSrchr"></th>
      <th>Isd Wgt<input class="form-control input-sm omitSrchr"></th>
       <th>Rcvd Wgt<input class="form-control input-sm omitSrchr"></th>
  		<th>Bal Wgt<input class="form-control input-sm omitSrchr"></th>
     </c:when>
     <c:otherwise>
     <th>TRANS_TYP<input type="text" class="form-control"></th>
     <th>MTL_PRTY<input type="text" class="form-control"></th>
     <th>MTL_WGT<input type="text" class="form-control"></th>
     <th>ISD_WGT<input type="text" class="form-control"></th>
     <th>RCVD WGT<input type="text" class="form-control"></th>
     <th>SAMPLE<input type="text" class="form-control"></th>
     <th>PWDR MTL<input type="text" class="form-control"></th>
     <th>RCVD_PRTY<input type="text" class="form-control"></th>
     <th>BAL WGT<input type="text" class="form-control"></th>
     </c:otherwise>
     </c:choose>
         </tr>
    </thead>
      <tbody id="tbodyOfTableExist" style="border: aliceblue;">
     <c:choose> 
     <c:when test="${IsMelting eq false}">
      <c:forEach var="EstJbTreBth" items="${SubPrcsHderDtlInfo}">
      <c:choose><c:when test="${EstJbTreBth[11] eq '1'}">
        <tr TrnsType="${EstJbTreBth[0]}" class="danger">
        
      <td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                                        <input type="checkbox" isdDptCd="${EstJbTreBth[15]}" trfCode="${EstJbTreBth[14]}" createdDate="${EstJbTreBth[13]}" disabled="disabled" class="checkboxes childCheckBox" value="${EstJbTreBth[12]}">
                                                        <span></span>
                                                    </label></td>
       
      </c:when>
     <c:otherwise>
        <tr TrnsType="${EstJbTreBth[0]}" class="success">
        
      <td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                                        <input type="checkbox" isdDptCd="${EstJbTreBth[15]}" trfCode="${EstJbTreBth[14]}" createdDate="${EstJbTreBth[13]}" class="checkboxes childCheckBox" value="${EstJbTreBth[12]}">
                                                        <span></span>
                                                    </label></td>
       
     </c:otherwise>
       </c:choose>
     <td class="trnsctyp">${EstJbTreBth[0]}</td>                                             
       <td class="trgtDtOfTr">${EstJbTreBth[1]}</td>
        <td class="isdDeptOfTr">${EstJbTreBth[2]}</td>
        <td class="ctgyOfTr">${EstJbTreBth[3]}</td>
        <td class="docNoInTr">${EstJbTreBth[4]}</td>
         <td class="prtyInTr">${EstJbTreBth[16]}</td>
        <td class="qtyOfTr">${EstJbTreBth[5]}</td>
       <td class="stkWgtOfSubPrcs">${EstJbTreBth[6]}</td>
       <c:choose><c:when test="${EstJbTreBth[10] eq '1'}">
        <td><input type="number" class="form-control issWgtOfSubPrcs" max="${EstJbTreBth[7]}" value="${EstJbTreBth[7]}" disabled="disabled"> </td>
        </c:when><c:otherwise>
        <td><input type="number" class="form-control issWgtOfSubPrcs" max="${EstJbTreBth[7]}" value="${EstJbTreBth[7]}"> </td>
        </c:otherwise> </c:choose>
         <c:choose><c:when test="${EstJbTreBth[11] eq '1'}">
         <td><input type="number" class="form-control rcvdWgtOfSubPrcs" value="${EstJbTreBth[8]}" disabled="disabled"></td>  </c:when><c:otherwise>
          <td><input type="number" class="form-control rcvdWgtOfSubPrcs" value="${EstJbTreBth[8]}"></td> 
          </c:otherwise> </c:choose>
      
        <td class="balwgtOfSupPrcs">${EstJbTreBth[9]}</td> 
      </tr>
    
    </c:forEach>  
    </c:when>
    <c:otherwise>
    <c:forEach var="EstJbTreBth" items="${SubPrcsHderDtlInfo}"> 
    <tr isdauth="${EstJbTreBth[12]}" rcvdauth="${EstJbTreBth[13]}" supprimid="${EstJbTreBth[14]}"><td ><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"> <input type="checkbox" class="checkboxes  childCheckBox rcvdChk${EstJbTreBth[13]}" > 
    <span></span> </label></td>
    <td class="trfTypInMelt">${EstJbTreBth[0]}</td>
    <td class="prtyInMelt">${EstJbTreBth[1]}</td>
    <td class="exstMtlWgtInMelt">${EstJbTreBth[2]}</td>
    <td><input type="number" class="form-control isdWgtInMelt" readonly value="${EstJbTreBth[3]}"></td>
    <c:choose><c:when test="${EstJbTreBth[13] eq 0}">
    <td><input type="number" class="form-control rcvdMtlWgt" value="${EstJbTreBth[4]}" ></td></c:when><c:otherwise>
    <td><input type="number" class="form-control rcvdMtlWgt" readonly value="${EstJbTreBth[4]}" ></td>
    </c:otherwise> </c:choose>
    <td testsmpl='${EstJbTreBth[6]}'><input type="number" class="form-control tstSmpllInMelt" readonly value="${EstJbTreBth[5]}" ></td>
     <c:choose><c:when test="${EstJbTreBth[8] eq 0}">
    <td><input type="number" auth="${EstJbTreBth[8]}" class="form-control pwdrmtlInMelt" placeholder="${EstJbTreBth[7]}" ></td>
    </c:when>
    <c:otherwise>
     <td><input type="number" disabled auth="${EstJbTreBth[8]}" class="form-control pwdrmtlInMelt" value="${EstJbTreBth[7]}" ></td>
    </c:otherwise>
    </c:choose>
    <td><input type="number" class="form-control prtyTcvdInMelt" spmlprty='${EstJbTreBth[10]}' readonly value="${EstJbTreBth[9]}" ></td>
    <td><input type="number" class="form-control blwgtInMelt" value="${EstJbTreBth[11]}" readonly></td>
    </tr>
    </c:forEach>
    </c:otherwise>
     </c:choose>
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

<!-- TEST SAMPLES POPUP -->
  <div class="modal fade" id="myModalSample" role="dialog">
    <div class="modal-dialog modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"><small>Testing Samples</small></h4>
        </div>
        <div class="modal-body" >
          
          <div class="form-group row">
                                 <div class="col-md-2">
                                 <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                                        <input type="checkbox" tst_smpl_one>
                                                        <span></span>
                                                    </label>
                                <label class="control-label">M1</label>
                                </div>
                                <div class="col-md-4">
                                <input type="number" class="form-control input-sm" placeholder="TA1" id="ta1Smpl">
                                </div>
                                 <div class="col-md-2">
                                 <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                                        <input type="checkbox" tst_smpl_two>
                                                        <span></span>
                                                    </label>
                                <label class="control-label">M2</label>
                                </div>
                                <div class="col-md-4">
                                <input type="number" class="form-control input-sm" placeholder="TA2" id="ta2Smpl">
                                </div>
                                </div>
                                
            <div class="form-group row">
                                 <div class="col-md-2">
                                 <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                                        <input type="checkbox" tst_smpl_three>
                                                        <span></span>
                                                    </label>
                                <label class="control-label">M3</label>
                                </div>
                                <div class="col-md-4">
                                <input type="number" class="form-control input-sm" placeholder="TB1" id="tb1Smpl">
                                </div>
                                 <div class="col-md-2">
                                 <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                                        <input type="checkbox" tst_smpl_four>
                                                        <span></span>
                                                    </label>
                                <label class="control-label">M4</label>
                                </div>
                                <div class="col-md-4">
                                <input type="number" class="form-control input-sm" placeholder="TB2" id="tb2Smpl">
                                </div>
                                </div>                     
                         <div class="form-group row">
                                <div class="col-md-5"></div>
                                <div class="col-md-2">
                                <button class="btn-change7 btn-sm" type="button" onclick="saveTheJsonInTr()">Save </button>
                                </div>
                                </div>
          
        </div>
        <div class="modal-footer fooderAlert">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

<!-- END -->
<!-- Prty RCVD BOX -->
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
        <tr><td>TA1</td><td id="ta1tstIssedSmpe"></td><td><input type="number" class="form-control rtnPrtyies" id="ta1tstPrty" style="width:100px"></td></tr>
        <tr><td>TB1</td><td id="tb1tstIssedSmpe"></td><td><input type="number" class="form-control rtnPrtyies" id="tb1tstPrty" style="width:100px"></td></tr>
        <tr><td>TA2</td><td id="ta2tstIssedSmpe"></td><td><input type="number" class="form-control rtnPrtyies" id="ta2tstPrty" style="width:100px"></td></tr>
        <tr><td>TB2</td><td id="tb2tstIssedSmpe"></td><td><input style="width:100px" class="form-control rtnPrtyies" id="tb2tstPrty" type="number"></td></tr>
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
<!-- End -->

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) --> 
<script src="js/jquery.min.js"></script> 
<!-- Include all compiled plugins (below), or include individual files as needed --> 
<script src="js/bootstrap.min.js"></script>
<script src="js/datepicker.js" type="text/javascript"></script>
 <script src="js/bootstrap-confirmation.min.js"></script>
 <script src="js/datatableSMR.js"></script>
 <script src="js/bootstrap-select.min.js"></script>
     <script>
 $(function() {
    $(".datepicker").datepicker();
});</script>
    <script>
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
    if(wrkrsTyp=='OutSideWrker'){
		$('[outworker]').show();$('[inworker]').hide();
		$("[outworker] #wrkCdOfSubPrcs").val(wrkrsCd).selectpicker("refresh");
	}else{
		$('[outworker]').hide();$('[inworker]').show();
		$("[inworker] #wrkCdOfSubPrcs").val(wrkrsCd).selectpicker("refresh");
	}
});
</script>
<script>
 window.adminId='${LoginDet.em_emp_id}'
var jobCard=new Set(),treeNo=new Set();
$("#myTableTable tbody tr").toArray().forEach((tr)=>{
	var prcsnm=$("#prcsTypOfSubPrcs option:selected").text()
	if(prcsnm.search(/\melt/gi)==-1)
	 jobCard.add('<option selected>'+$(tr).find(".docNoInTr").html()+'</option>'); 
});
$("#jbCardOfSubPrcs").html([...jobCard]);
	$("#treNoOfSubPrcs").html([...treeNo]);
$(function(){
	if($("#issedAuthOfExst").val()=="1"){
		$(".rightSideInput input,.rightSideInput select").prop("disabled",true);$(".deleter").addClass("disabled");
	}	
	if($("#rcvdAuthOfExst").val()=="1"){
		$(".wrapper input:not(table input)").prop("disabled",true);
		$(".wrapper a:not(#ExsitingBtn)").addClass("disabled");
		$(".deleter").addClass("disabled");
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
$("#wrkTypOfDcPrcs").change(function(){
	$('[inworker],[outworker]').toggle();
	});
</script>
<script src="js/editsubprocess.js"></script>
<input type="hidden" id="loginid" value="${empDtls.em_emp_id}">
</body>
</html>