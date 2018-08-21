<!DOCTYPE html>
<html lang="en" ng-app="">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<title>JOb Order</title>
<script type="text/javascript" src="dwr/interface/AjaxController.js"></script>
<script type="text/javascript" src="dwr/engine.js"></script>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- Bootstrap -->
  
  <link href="css/customefonts.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/simple-line-icons.min.css" rel="stylesheet">
<script src="js/3.1.1jquery.min.js"></script>
<script src="js/angular.js"></script>
<script src="js/angular-resource.js"></script>
<link href="css/datepicker.css" type="text/css" rel="stylesheet">
  <link href="css/datatable.css" rel="stylesheet">
<link rel="stylesheet" href="css/bootstrap-select.min.css">
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
button{
font-size:small !important;
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
        <li><a href="dashboard.mm"><i class="md md-dashboard"></i>dashboard</a> </li>
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
                                            <span class="caption-subject font-dark bold uppercase text-muted page-title-alt"> <h4 class="page-title">Edit Job Order</h4></span>
                                        </div>
                                       <div class="actions">
                                      
                                             <a class="btn btn-circle btn-icon-only btn-default" href="javascript:saveBeforeJobOrderDet()" id="saveBtnOfJobOrd" data-toggle="tooltip" title="Update">
                                                <i class="icon-doc"></i>
                                            </a>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" id="resrOut" data-toggle="tooltip" title="Print">
                                                <i class="icon-printer"></i>
                                                </a>
                                                <c:choose><c:when test="${ExstJobHdrEdit[9] eq '1'}">
                                         <a class="btn btn-circlesuc btn-icon-only btn-default" href="javascript:void(0)" data-toggle="confirmation" data-popout="true"  title="Issued Authorization">
                                                <i class="icon-shield"></i>
                                            </a></c:when><c:otherwise>  <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" data-toggle="confirmation" data-popout="true"  title="Issued Authorization">
                                                <i class="icon-shield"></i>
                                            </a></c:otherwise> </c:choose>
                                               <a class="btn btn-circle btn-icon-only btn-default" id="getExstJCDETAIL" href="javascript:getjobcardDetail()" data-toggle="tooltip" title="Exst Isued Wgt Dtls">
                                                <i class="icon-cloud-download"></i>
                                            </a>
                                           
                                              
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:delExistJobHdrDetailRecInDb(this)" data-toggle="tooltip" title="Delete!">
                                                <i class="icon-trash"></i> </a>
                                                <a class="btn btn-circle btn-icon-only btn-default" href="joborder.mm" id="resrOut" data-toggle="tooltip" title="Existing">
                                                <i class="icon-logout"></i>
                                            </a>
                                           
                                        </div>
                                          <div class="actions">
                                          <c:choose><c:when test="${ExstJobHdrEdit[9] eq '1'}">
                                          <div class="alert alert-warning" >Job Order Is AuthenticationMode</div>
                                          </c:when></c:choose>
                                        <span id="savesuccessRes"></span> </div>
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
                                 <select class="selectpicker" id="cmycdOfJobOrd" data-live-search="true">
                                  <option value="">Select Company</option>
                                <c:forEach var="ExistCom" items="${ExistComDet}">
                                <c:choose><c:when test="${ExstJobHdrEdit[11] eq ExistCom.cm_cmy_cd}">
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
                                <label class="control-label">DepartMent</label>
                                </div>
                                <div class="col-md-4">
                            <select class="selectpicker"  data-live-search="true" id="dptCdOfJobOrd">
                         <option value="">Select DepartMent</option>
                     
										 <c:forEach var="ExistDpt" items="${ExistDptDet}">
					<c:choose><c:when test="${ExstJobHdrEdit[1] eq ExistDpt.dm_dpt_cd}">  <option value="${ExistDpt.dm_dpt_cd}" selected="selected">${ExistDpt.dm_dpt_nm}</option></c:when> 
							<c:otherwise>  <option value="${ExistDpt.dm_dpt_cd}">${ExistDpt.dm_dpt_nm}</option></c:otherwise></c:choose> 	
										  </c:forEach>
                        </select>
                                </div> 
                                
                                </div>
                                <div class="form-group">
                                  <input type="hidden" id="isdauthVal" value="0">
                                  <input type="hidden" id="ExstJobNoChk" value='${ExstJobNoChk}'>
                                    <div class="col-md-2">
                                <label class="control-label">Job Order No</label>
                                </div>
                                <div class="col-md-4">
                                 <input type="text" class="form-control input-sm" placeholder="Document No" value="${ExstJobHdrEdit[0]}" id="docNoOfJobOrd" readonly="readonly">
                                </div>
                              <%--   --%>
                                <div class="col-md-2">
                                <label class="control-label">Process Type  <i class="glyphicon glyphicon-filter" aria-hidden="true"></i></label>
                                </div>
                                <div class="col-md-4" ng-init="processType='${ExstJobHdrEdit[2]}'">
                               <select  id="processTypeOfJobOrd" class="form-control" ng-model="processType" disabled="disabled" selector="${ExstJobHdrEdit[2]}">
                              <option value="InhouseBomMaking">In House Bom Making</option>
                          <option value="JobCardMaking">Job Card Making</option>
                            <option value="BalBomMaking">Balance Bom Issue</option>
                               <option value="ReJob Card">ReJob Card</option>
                          
                       
                        </select>
                                </div>
                             
                                <input type="hidden" id="priIdOfJobHdr" value="${ExstJobHdrEdit[10]}">
                                <input type="hidden" id="crtIdOfJobHdr" value="${ExstJobHdrEdit[8]}">
                                <input type="hidden" id="crtDtOfJobHdr" value="${ExstJobHdrEdit[7]}">
                                <input type="hidden" id="issAuthOfJobHdr" value="${ExstJobHdrEdit[9]}">
                                  <input type="hidden" id="issAuthOfJobHdr" value="${ExstJobHdrEdit[9]}">
                                    <input type="hidden" id="ExstOrdNOJHd" value='${ExstOrdNOJHd}'>
                                        <input type="hidden" id="ExsitOrdTypes" value='${ExsitOrdTypes}'>
                                        <input type="hidden" id="ExstJbOrdHdrDtlStr" value='${ExstJbOrdHdrDtlStr}'>
                                      
                                 
                                </div>
                                <div class="form-group">
                                 <div class="col-md-2">
                                <label class="control-label">Target Date  <i class="glyphicon glyphicon-filter" aria-hidden="true"></i></label>
                                </div>
                                <div class="col-md-4">
                                   <select class="selectpicker" id="tghtDtOfJobOrd" data-live-search="true">
                                  </select>
                                </div>
                               <div class="col-md-2">
                                <label class="control-label">Pdt.Dpt <i class="glyphicon glyphicon-filter" aria-hidden="true"></i></label>
                                </div>
                                <div class="col-md-4">
                            <select class="selectpicker"  data-live-search="true" id="pdtdptCdOfJobOrd" multiple  data-actions-box="true" data-size="5">
                         <option value="">Select PdtDepartMent</option>
									 <c:forEach var="addOrdDpt" items="${addOrdDet}">
                            <option value="${addOrdDpt[5]}">${addOrdDpt[2]}</option>
                          </c:forEach> 
                        </select>
                                </div>
                                
                                 
                                </div>
                                <div class="form-group">
                                 <div class="col-md-2">
                                <label class="control-label">Ctgy Type  <i class="glyphicon glyphicon-filter" aria-hidden="true"></i></label>
                                </div>
                                <div class="col-md-4">
                               <select class="selectpicker" multiple id="ctgyTypOfJobOrd"   data-actions-box="true" data-size="5" data-live-search="true">
  									<option value="">Select Order</option>
							 <c:forEach var="addOrdCtgy" items="${addOrdDet}">
                            <option value="${addOrdCtgy[1]}">${addOrdCtgy[1]}</option>
                          </c:forEach>                              
								</select>
                                </div>
                                 <div class="col-md-2">
                                <label class="control-label">J.O No  <i class="glyphicon glyphicon-filter" aria-hidden="true"></i></label>
                                </div>
                                <div class="col-md-4">
                               <select class="selectpicker" data-live-search="true" id="ordNoOfJobOrd" multiple  data-actions-box="true" data-size="5" >
                            <option value=""> Select OrderNo</option>
                          <c:forEach var="addOrdNo" items="${addOrdDet}">
                            <option value="${addOrdNo[0]}">${addOrdNo[0]}</option>
                          </c:forEach>
                        </select>
                                </div>
                               
                                </div>
                                 <input type="hidden" id="ExstBomDetailbyStr" value='${ExstBomDetailbyStr}'>
                                <div class="form-group">
                                  <div class="col-md-2">
                                <label class="control-label">Pdt Type  <i class="glyphicon glyphicon-filter" aria-hidden="true"></i></label>
                                </div>
                                <div class="col-md-4">
                                <select class="selectpicker" id="pdtTypOfJobOrd"  data-live-search="true" multiple  data-actions-box="true" data-size="5">
                                <option value=""> Select Product Type</option>	
                                 <c:forEach var="addOrdTyp" items="${addOrdDet}">
                            <option value="${addOrdTyp[3]}">${addOrdTyp[3]}</option>
                          </c:forEach>
                                </select>
                                </div>
                                 <div class="col-md-2">
                                <label class="control-label">Wax No  <i class="glyphicon glyphicon-filter" aria-hidden="true"></i></label>
                                </div>
                                <div class="col-md-4">
                               <select class="selectpicker" data-live-search="true" id="waxNoOfJobOrd" multiple  data-actions-box="true" data-size="5" >
                           <option value=""> Select Wax No</option>
                          <c:forEach var="ExistWaxNo" items="${ExistWaxNoDet}">
                            <option value="${ExistWaxNo}">${ExistWaxNo}</option>
                          </c:forEach>
                        </select>
                                </div>
                               
                                <%--  <div class="col-md-2">
                                <label class="control-label">Tree No</label>
                                </div>
                                <div class="col-md-4">
                                <select class=" selectpicker" id="treeNoOfJobOrd" data-live-search="true" multiple  data-actions-box="true" data-size="5">
                                <option value=""> Select Tree No</option>
                               	 <c:forEach var="addOrdTyp" items="${addOrdDet}">
                            <option value="${addOrdTyp[3]}">${addOrdTyp[3]}</option>
                          </c:forEach>
                                </select>
                                </div> --%>
                                </div>
                                </div>
                                <div class="col-md-4">
                                <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Total Qty</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Total Qty" id="WgtOfJobOrd" value="${ExstJobHdrEdit[3]}">
                                </div>
                                </div>
                                <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Total Wgt</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Total Wgt" id="totPrtyOfJobOrd" value="${ExstJobHdrEdit[5]}">
                                </div>
                                </div>
                                	<div class="form-group bomIssuedInDirectJob">
                                 <div class="col-md-6">
                                <label class="control-label">Bom Issue</label>
                                </div>
                                <div class="col-md-6">
                                    <button class="btn btn-primary" type="button" id="reqrdBomDtals" style="width: -webkit-fill-available;">Pdts.Required Bom Detail</button>
                                </div>
                                </div>
								<div class="form-group bomIssuedInDirectJob">
                                 <div class="col-md-6">
                                <label class="control-label">Mold Type</label>
                                </div>
                                <div class="col-md-6">
                                <select class="selectpicker" id="moldtyppOfJbcrd" boxvalue="${ExstJobHdrEdit[12]}" multiple>
                                <option value="With Mold">With Mold</option>
                                 <option value="Without Mold">Without Mold</option>
                                </select>
                                </div>
                                
                                </div>
                                 <div class="form-group">
                                <div class="col-md-6">
                                <label class="control-label">Order Date</label>
                                </div><div class="col-md-6">
                                <input type="text" class="form-control input-sm dateTimePick" disabled placeholder="date/time" id="docDtOfJobOrd" value="${ExstJobHdrEdit[13]}">
                                </div>
                                </div> 
                                  <c:choose><c:when test="${ExstJobHdrEdit[2] eq 'JobCardMaking' or ExstJobHdrEdit[2] eq'ReJob Card'}">
                                <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">NG/STONE ISSUE</label>
                                </div>
                                <div class="col-md-6">
                                    <button class="btn btn-primary" type="button" id="reqrdStnDtals" style="width: -webkit-fill-available;">REQUIRED NON_GOLD</button>
                                </div>
                                </div>
                                </c:when></c:choose>
                                <%--  <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Issued Weight</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Issued Weight" id="IssWgtOfJobOrd" value="${ExstJobHdrEdit[4]}">
                                </div>
                                </div>
                                <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Issued Purity</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Issued Purity" id="IssPrtyOfJobOrd" value="${ExstJobHdrEdit[6]}">
                                </div>
                                </div> --%>
                                
                                </div>
                                
                                </div>
                                
                                
                                
                                
                                <div class="form-group">
                                <div class="table-responsive">
              <table class="table table-bordered table-striped" id="myTable">
    <thead>
      <tr>
      <th class="chcktbl">
      <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"  data-toggle="tooltip" title="Select All">
                                                        <input type="checkbox" class="checkboxes parentCheckBox" value="1" onchange="selectBoxHandlerInAddJobOrd(this)">
                                                        <span></span>
                                                    </label>
      </th>
     <c:choose><c:when test="${ExstJobHdrEdit[2] eq 'InhouseBomMaking'}">
      <!-- <th>OrdNo<input class="form-control input-sm searcher"></th>
      <th>Pdt.Cd<input class="form-control input-sm searcher"></th>
      <th>Ctgy<input class="form-control input-sm searcher"></th>
      <th>Dept<input class="form-control input-sm searcher"></th>
      <th>Ord.Typ<input class="form-control input-sm searcher"></th>
       <th>Tgt.Dt<input class="form-control input-sm searcher"></th>
        <th>Dsgn.No<input class="form-control input-sm searcher"></th>
        <th style="display:none">Qty<input class="form-control input-sm searcher"></th>
         <th>Pdt.Typ<input class="form-control input-sm searcher"></th>
           <th>Bom.Nm<input class="form-control input-sm searcher"></th>
           <th>Bom.Typ<input class="form-control input-sm searcher"></th>
           <th>Bom.Qty<input class="form-control input-sm  searcher"></th> -->
            <th>J.O No<input class="form-control input-sm searcher"></th> 
           <th>Pdt.cd<input class="form-control input-sm searcher"></th>
            <th>Ctgy<input class="form-control input-sm searcher"></th> 
            <th>Dept<input class="form-control input-sm searcher"></th> 
            <th>Ord.Typ<input class="form-control input-sm searcher"></th> 
            <th>Tgt.Dt<input class="form-control input-sm searcher"></th>
             <th>Dgn.No<input class="form-control input-sm searcher"></th> 
             <th>Qty<input class="form-control input-sm searcher"></th> 
             <th>Pdt.Typ<input class="form-control input-sm searcher"></th> 
               <th>Prty<input class="form-control input-sm searcher"></th> 
           </c:when><c:when test="${ExstJobHdrEdit[2] eq 'JobCardMaking' or ExstJobHdrEdit[2] eq 'ReJob Card'}">
           <th>J.O No<input class="form-control input-sm searcher"></th> 
           <th>Pdt.cd<input class="form-control input-sm searcher"></th>
             <th>Tree / Nill<input class="form-control input-sm searcher"></th>
            <th>Ctgy<input class="form-control input-sm searcher"></th> 
            <th>Dept<input class="form-control input-sm searcher"></th> 
            <th>Ord.Typ<input class="form-control input-sm searcher"></th> 
            <th>Tgt.Dt<input class="form-control input-sm searcher"></th>
             <th>Dgn.No<input class="form-control input-sm searcher"></th> 
             <th>Qty<input class="form-control input-sm searcher"></th> 
             <th>Pdt.Typ<input class="form-control input-sm searcher"></th> 
               <th>Prty<input class="form-control input-sm searcher"></th> 
           </c:when> 
           <c:when test="${ExstJobHdrEdit[2] eq 'BalBomMaking'}">
             <th style="display:none">Job.Card.No<input class="form-control input-sm searcher"></th> 
            <th>Bom.Nm<input class="form-control input-sm searcher"></th> 
            <th>Bom.Sz<input class="form-control input-sm searcher"></th>
              <th>BomWrk.Typ<input class="form-control input-sm searcher"></th> 
              <th>Bom.Typ<input class="form-control input-sm searcher"></th> 
             <th>Req.Qty<input class="form-control input-sm searcher"></th> 
             <th>Stk.Qty<input class="form-control input-sm searcher"></th>
              <th>Rcvd.Qty<input class="form-control input-sm searcher"></th>
              <th>Rcvd.Wgt<input class="form-control input-sm searcher"></th>
               <th>Bal.Qty<input class="form-control input-sm searcher"></th>
                 <th>Prty<input class="form-control input-sm searcher"></th> 
           </c:when>
           <c:otherwise>
            <th>Job.Card.No<input class="form-control input-sm searcher"></th> 
            <th>Bom.Nm<input class="form-control input-sm searcher"></th> 
            <th>Bom.Sz<input class="form-control input-sm searcher"></th>
             <th>BomWrk.Typ<input class="form-control input-sm searcher"></th> 
              <th>Bom.Typ<input class="form-control input-sm searcher"></th> 
             <th>Req.Qty<input class="form-control input-sm searcher"></th> 
             <th>Stk.Qty<input class="form-control input-sm searcher"></th>
              <th>Rcvd.Qty<input class="form-control input-sm searcher"></th>
              <th>Rcvd.Wgt<input class="form-control input-sm searcher"></th>
               <th>Bal.Qty<input class="form-control input-sm searcher"></th>
                 <th>Prty<input class="form-control input-sm searcher"></th> 
           </c:otherwise>
           </c:choose>
      </tr>
    </thead>
   <c:choose><c:when test="${ExstJobHdrEdit[9] ne '1'}">
    <tbody id="myTbodyJob">
 </tbody></c:when></c:choose>
 <tbody id="myTbodyJobExsit" style="border: aliceblue;">
 <c:forEach var="ExsitJobDet" items="${ExsitJobDetEdit}">
   <c:choose><c:when test="${ExstJobHdrEdit[2] eq 'InhouseBomMaking'}">
<%--  <tr  style="background-color: #5fbeaa;">
 <td> <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"  data-toggle="tooltip" title="Select All">
                                                        <input type="checkbox" class="checkboxes childCheckBoxExst" value="${ExsitJobDet[9]}" id="${ExsitJobDet[8]}">
                                                        <span></span>
                                                    </label></td>
 <td>${ExsitJobDet[0]}</td>
 <td>${ExsitJobDet[1]}</td>
 <td>${ExsitJobDet[2]}</td>
 <td>${ExsitJobDet[3]}</td>
 <td>${ExsitJobDet[4]}</td>
 <td>${ExsitJobDet[5]}</td>
 <td>${ExsitJobDet[6]}</td>
 <td style="display:none">${ExsitJobDet[7]}</td>
  <td>${ExsitJobDet[10]}</td>
    <td>${ExsitJobDet[11]}</td>
      <td>${ExsitJobDet[12]}</td>
        <td>${ExsitJobDet[7]}</td>
 </tr> --%>
 <tr  style="background-color: #5fbeaa;">
 <td> <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"  data-toggle="tooltip" >
                                                        <input type="checkbox" class="checkboxes childCheckBoxExst" value="${ExsitJobDet[9]}" id="${ExsitJobDet[8]}">
                                                        <span></span>
                                                    </label></td>
 <td>${ExsitJobDet[0]}</td>
 <td class="pdtInfo" title="${ExsitJobDet[12]}">${ExsitJobDet[1]}</td>
 <td>${ExsitJobDet[2]}</td>
 <td>${ExsitJobDet[3]}</td>
 <td>${ExsitJobDet[4]}</td>
 <td>${ExsitJobDet[5]}</td>
 <td>${ExsitJobDet[6]}</td>
 <td>${ExsitJobDet[7]}</td>
         <td>${ExsitJobDet[10]}</td>
         <td>${ExsitJobDet[11]}</td>
 </tr>
 </c:when>
 <c:when test="${ExstJobHdrEdit[2] eq 'JobCardMaking' or ExstJobHdrEdit[2] eq 'ReJob Card'}">
 <tr  style="background-color: #5fbeaa;">
 <td> <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"  data-toggle="tooltip" >
                                                        <input type="checkbox" class="checkboxes childCheckBoxExst" value="${ExsitJobDet[9]}" id="${ExsitJobDet[8]}">
                                                        <span></span>
                                                    </label></td>
 <td>${ExsitJobDet[0]}</td>
 <td class="pdtInfo" title="${ExsitJobDet[13]}">${ExsitJobDet[1]}</td>
 <td><select class="form-control treeornill input-sm"><option value="">${ExsitJobDet[11]}</option></select></td>
 <td>${ExsitJobDet[2]}</td>
 <td>${ExsitJobDet[3]}</td>
 <td>${ExsitJobDet[4]}</td>
 <td>${ExsitJobDet[5]}</td>
 <td>${ExsitJobDet[6]}</td>
<td>${ExsitJobDet[7]}</td>
         <td>${ExsitJobDet[10]}</td>
           <td>${ExsitJobDet[12]}</td>
 </tr>
 </c:when>
 <c:when test="${ExstJobHdrEdit[2] eq 'BalBomMaking'}"> 
 <tr  style="background-color: #5fbeaa;">
 <td> <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"  data-toggle="tooltip" >
                                                        <input type="checkbox" class="checkboxes childCheckBoxExst" value="${ExsitJobDet[9]}" id="${ExsitJobDet[8]}">
                                                        <span></span>
                                                    </label></td>
 <td style="display:none">${ExsitJobDet[0]}</td>
 <td>${ExsitJobDet[2]}</td>
 <td>${ExsitJobDet[3]}</td>
 <td>${ExsitJobDet[4]}</td>
  <td>${ExsitJobDet[10]}</td>
 <td>${ExsitJobDet[5]}</td>
 <td></td>
  <td>${ExsitJobDet[7]}</td>
 <td>${ExsitJobDet[9]}</td>
 <td></td>
 <td>${ExsitJobDet[6]}</td>
 </tr> </c:when>
 <c:otherwise>
  <tr  style="background-color: #5fbeaa;">
 <td> <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"  data-toggle="tooltip" >
                                                        <input type="checkbox" class="checkboxes childCheckBoxExst" value="${ExsitJobDet[9]}" id="${ExsitJobDet[8]}">
                                                        <span></span>
                                                    </label></td>

 <td >${ExsitJobDet[0]}</td>
 <td>${ExsitJobDet[2]}</td>
 <td>${ExsitJobDet[3]}</td>
 <td>${ExsitJobDet[4]}</td>
  <td>${ExsitJobDet[4]}</td>
 <td>${ExsitJobDet[5]}</td>
 <td>${ExsitJobDet[6]}</td>
  <td>${ExsitJobDet[7]}</td>
  <td>${ExsitJobDet[9]}</td>
 <td>${ExsitJobDet[6]}</td>
 <td></td>
 <td></td>
 </tr>
 </c:otherwise>
 </c:choose>
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
<div class="modal fade in" id="myModal" role="dialog">
    <div class="modal-dialog modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">X</button>
          <h4 class="modal-title"><small>Issue Bom Details</small></h4>
        </div>
        <div class="modal-body">
        <div class="form-group">
                                <div class="table-responsive">
              <table class="table table-bordered table-striped" id="myBomTable">
    <thead>
    <tr>
<th><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="" data-original-title="Select All">
                                                        <input type="checkbox" class="checkboxes parentbomCheckBox" value="1">
                                                        <span></span>
                                                      </label><th>BomName<input class="form-control input-sm"></th><th>BomType<input class="form-control input-sm"></th><th>BomSize<input class="form-control input-sm"></th><th>BomQty<input class="form-control input-sm"></th><th>IssQty<input class="form-control input-sm"></th></tr>
    </thead>
    <tbody id="bomMetalDetailTbody">
   </tbody>  
    </table></div></div>
                        
   
          
        </div>
        <div class="modal-footer">
         <button type="button" class="btn btn-primary" id="PrintInIsuedBom">Print</button>
         <button type="button" class="btn btn-primary" id="ExportInIsuedBom">Export</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
          
        </div>
      </div>
    </div>
  </div>
  
  <!-- Bom Metal Detail in PopPup -->
<div class="modal fade in" id="treenillpopup" role="dialog">
    <div class="modal-dialog modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">X</button>
          <h4 class="modal-title"><small>Exist Issue Wgt Details</small></h4>
        </div>
        <div class="modal-body">
        <table class="table table-bordered table-striped"> <thead> <tr><th>Trees</th><th>IssMetalWgt</th></tr> </thead> <tbody id="treeboxtbody"></tbody>
<tfoot><tr><th style=" text-align: right; ">Bom Wgt</th><th><input class="form-control" type="number" id="bomWgt"></th></tr></tfoot> </table>
  </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade in" id="myModalStone" role="dialog">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">X</button>
          <h4 class="modal-title"><small>Issue Stone Details</small></h4>
        </div>
        <div class="modal-body">
        <div class="form-group">
                                <div class="table-responsive">
              <table class="table table-bordered table-striped" id="myStoneTable">
    <thead>
    <tr>
<th><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="" data-original-title="Select All">
                                                        <input type="checkbox" class="checkboxes parentCheckBoxStn" value="1">
                                                        <span></span>
                                                      </label><th>StnCd<input class="form-control input-sm"></th><th>Stn Nm<input class="form-control input-sm"></th><th>Stn Clr<input class="form-control input-sm"></th><th>Stn Shpe<input class="form-control input-sm"></th><th>Stn Sz<input class="form-control input-sm"></th><th>Req Qty<input class="form-control input-sm"></th><th>Stk Qty<input class="form-control input-sm"></th><th>Isd Qty<input class="form-control input-sm"></th><th>Bal Qty<input class="form-control input-sm"></th></tr>
    </thead>
    <tbody id="stnMetalDetailTbody">
   </tbody>  
    </table></div></div>
                        
   
          
        </div>
        <div class="modal-footer">
       	 <button type="button" class="btn btn-success" id="SaveInIsuedStn">Save</button>
       	  <button type="button" class="btn btn-success" id="SaveAuthInIsuedStn">Auth&Save</button>
         <button type="button" class="btn btn-primary" id="PrintInIsuedStn">Print</button>
         <button type="button" class="btn btn-primary" id="ExportInIsuedStn">Export</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
          
        </div>
      </div>
    </div>
  </div>
    <!-- PRODUCT VIEW  -->
       <div class="modal fade" id="productView" role="dialog">
    <div class="modal-dialog modal-lg">
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
<script src="js/jquery.min.js"></script> 
<!-- Include all compiled plugins (below), or include individual files as needed --> 
<script src="js/bootstrap.min.js"></script>
<script src="js/datepicker.js" type="text/javascript"></script>
<script src="js/bootstrap-select.min.js"></script>
 <script src="js/bootstrap-confirmation.min.js"></script>
  <script src="js/datatableSMR.js"></script>
     <script>
	 $(function() {
		 if($("#issAuthOfJobHdr").val()=="1"){
			$(".wrapper input:not(.searcher,:checkbox),select,#reqrdBomDtals").prop("disabled",true); 
			$(".wrapper a:not(.actions a:last,#getExstJCDETAIL)").addClass("disabled");
		 }
		 if($("#ExstOrdNOJHd").val()!=""){
			 $("#ordNoOfJobOrd").val(eval($("#ExstOrdNOJHd").val()));
		 }
		 if($("#ExsitOrdTypes").val()!=""){
			 $("#ordTypOfJobOrd").val(eval($("#ExsitOrdTypes").val()));
		 }
});
	 
</script>  
        <script>
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});
</script>
<script>
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
	$("table").delegate('.pdtInfo','click',function(){
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
	});
		
$(document).ready(function(){
	var table = $('#myTable').DataTable({
		   "aLengthMenu": [ [10, 25,50, -1], [10, 25,50, "All"] ],
		   "iDisplayLength": -1,
		   columnDefs:[{ type: 'date-dd-mmm-yyyy', targets: 6}]
		});
	table.columns().eq( 0 ).each( function ( colIdx ) {
	    $( 'input:not(:checkbox)', table.column( colIdx ).header() ).on( 'keyup change', function () {
	        table
	            .column( colIdx )
	            .search( this.value )
	            .draw();
	    } );});
});
$("[multiple]").avoidDubOption();


function getTobdyStn(){
	var tbody='<table class="table table-bordered table-striped"><thead><tr><th colspan="5">JobCard No</th><th colspan="5">'+$("#docNoOfJobOrd").val()+'</th></tr>'
	+'<tr><th colspan="5">Dep Nm</th><th colspan="5">'+$("#pdtdptCdOfJobOrd option:selected").text()+'</th></tr><tr><th>Stn Cd</th><th>Stn Nm</th><th>Stn Clr</th><th>Stn Shp</th><th>Stn Sz</th><th>Req Qty</th><th>Stk Qty</th><th>Isd Qty</th><th>Bal Qty</th></tr>';
	+'</thead><tbody>';
	$("#myStoneTable tbody tr").toArray().forEach(tr=>{
		var td=$(tr).find("td");
		var one=td[1].innerHTML;two=td[2].innerHTML,thre=td[3].innerHTML,four=td[4].innerHTML,five=td[5].innerHTML,six=td[6].innerHTML,svn=td[7].innerHTML,nine=td[9].innerHTML,egt=$(tr).find(".isdQtyStn").val()
		tbody+='<tr><td>'+one+'</td><td>'+two+'</td><td>'+thre+'</td><td>'+four+'</td><td>'+five+'</td><td>'+six+'</td><td>'+svn+'</td><td>'+egt+'</td><td>'+nine+'</td></tr>';	
	})
	tbody+='</tbody></table>';
	return tbody;
}


function getTobdy(){
	var tbody='<table class="table table-bordered table-striped"><thead><tr><th colspan="3">JobCard No</th><th colspan="3">'+$("#docNoOfJobOrd").val()+'</th></tr>'
	+'<tr><th colspan="3">Dep Nm</th><th colspan="3">'+$("#pdtdptCdOfJobOrd option:selected").text()+'</th></tr><tr><th>BomName</th><th>BomType</th><th>BomSize</th><th>Req.Qty</th><th>RcvdQty</th><th>BalQty</th></tr>';
	+'</thead><tbody>';
	var sum4=0,sum5=0,sum6=0;
	$("#myBomTable tbody tr").toArray().forEach(tr=>{
		var td=$(tr).find("td");
		var alw=$(tr).find(":checkbox:checked").length,one=td[1].innerHTML;two=td[2].innerHTML,thre=td[3].innerHTML,four=td[4].innerHTML,five=$(tr).find(".isswgtofbomperjbcd").val()
		var six=(Number(four)-Number(five))||0;
		if(alw){
			sum4+=Number(four)||0;sum5+=Number(five)||0;sum6+=Number(six)||0;
			tbody+='<tr><td>'+one+'</td><td>'+two+'</td><td>'+thre+'</td><td>'+four+'</td><td>'+five+'</td><td>'+six+'</td></tr>';	
		}
	})
	tbody+='<tr><td colspan="3">Totals</td><td>'+sum4+'</td><td>'+sum5+'</td><td>'+sum6+'</td></tr></tbody></table>';
	return tbody;
}

$("#ExportInIsuedStn").click(function(){
var tbody= getTobdyStn();
	tableToExcel(tbody,'ISSUED MOLD DETAIL');
});
$("#ExportInIsuedBom").click(function(){
var tbody= getTobdy();
	tableToExcel(tbody,'INOUT BOM');
})


$("#PrintInIsuedStn").click(function(){
	var tbody= getTobdyStn();
	printFun(tbody);
});

$("#PrintInIsuedBom").click(function(){
	var tbody= getTobdy();
	printFun(tbody);
})
function printFun(tbody){
	var frame1 = document.createElement('iframe');
    frame1.name = "frame1";
    frame1.style.position = "absolute";
    frame1.style.top = "-1000000px";
    document.body.appendChild(frame1);
    var frameDoc = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument.document ? frame1.contentDocument.document : frame1.contentDocument;
    frameDoc.document.open();
    frameDoc.document.write('<html><title>ISSUED BOM DETAIL</title><head>');
    frameDoc.document
        .write('<link rel="stylesheet" href="css/bootstrap.min.css"><link href="css/customefonts.css" rel="stylesheet"><style> .table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th { padding-bottom: 0px !important; padding-top: 0px !important; } th { text-align: left; font-weight: 500 !important; } .table{    font-family: "Montserrat", sans-serif !important;}</style>');
    frameDoc.document.write('</head><body>');
    frameDoc.document.write(tbody);
    frameDoc.document.write('</body></html>');
    frameDoc.document.close();
    setTimeout(function() {
        window.frames["frame1"].focus();
        window.frames["frame1"].print();
        document.body.removeChild(frame1);
    }, 500);

}
</script>
<script src="js/editjoborder.js"></script>
<script type="text/javascript">

function getjobcardDetail(){
	var qry="select jcd_bom_wgt,joh_tot_wgt,joh_tree1_no,joh_tree2_no,joh_tree3_no,joh_tree1_wgt,joh_tree2_wgt,joh_tree3_wgt from job_card_dtl where jcd_doc_no='"+$("#docNoOfJobOrd").val()+"'"
	AjaxController.getBomDataByProductId(qry,(data)=>{
		var html='';
		if(data&&data.length){
			var bom=data[0][0]||'',tot=data[0][1]||'';
			var html='';
			if(data[0][2])
			html+='<tr><td style=" text-align: right; " >'+data[0][2]+'</td><td><input type="number" class="form-control" value="'+data[0][5]+'" disabled></td></tr> ';
			if(data[0][3])
				html+='<tr><td style=" text-align: right; " >'+data[0][3]+'</td><td><input type="number" class="form-control"  value="'+data[0][6]+'" disabled></td></tr> ';
			if(data[0][4])
			html+='<tr><td style=" text-align: right; ">'+data[0][4]+'</td><td><input type="number" class="form-control" value="'+data[0][7]+'" disabled></td></tr> ';
					
			$("#bomWgt").prop("disabled",true).val(bom);
			$("#treeboxtbody").html(html);
			$("#treenillpopup").modal('show');
		}
		
	});
	
	}
	
	

$(function(){
	setTimeout(function(){
		var trfTyp=$("#processTypeOfJobOrd").val();
	if(trfTyp!='BalBomMaking'){
	var pdtDpt=new Set(),ctgyTyp=new Set(),pdtTyp=new Set(),ordNo=new Set();
$(".childCheckBoxExst").toArray().forEach(s=>{
	s=$(s).closest("tr");
	if(trfTyp=='JobCardMaking'||trfTyp=='ReJob Card'){
		var ctgyy=$(s).find("td:eq(4)").html(),pdtTypp=$(s).find("td:eq(10)").html(),
		ordNoo=$(s).find("td:eq(1)").html(),pdtDptt=$(s).find("td:eq(5)").html();		
	}
	else{
	var ctgyy=$(s).find("td:eq(3)").html(),pdtTypp=$(s).find("td:eq(9)").html(),
	ordNoo=$(s).find("td:eq(1)").html(),pdtDptt=$(s).find("td:eq(4)").html();
	}
	if(ctgyy)ctgyTyp.add('<option selected>'+ctgyy+'</option>');
	if(pdtTypp)pdtTyp.add('<option selected>'+pdtTypp+'</option>');
	if(ordNoo)ordNo.add('<option selected>'+ordNoo+'</option>');
	if(pdtDptt)pdtDpt.add('<option selected>'+pdtDptt+'</option>');
});
var molds=$("#moldtyppOfJbcrd");molds.val(molds.attr("boxvalue").split(","));
$("#ctgyTypOfJobOrd").append([...ctgyTyp]);$("#pdtTypOfJobOrd").append([...pdtTyp]);$("#ordNoOfJobOrd").append([...ordNo]);
$("#pdtdptCdOfJobOrd").append([...pdtDpt]);
$(".selectpicker").selectpicker("refresh");
	}
	},100);
	
});
</script>
</body>
</html>