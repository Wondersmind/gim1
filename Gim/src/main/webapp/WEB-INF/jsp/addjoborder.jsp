<!DOCTYPE html>
<html lang="en">
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
<link rel="stylesheet" href="css/font-awesome.min.css">
<link href="css/datepicker.css" type="text/css" rel="stylesheet">
   <link href="css/datatable.css" rel="stylesheet">
<link rel="stylesheet" href="css/bootstrap-select.min.css">
<link href="css/bootstrap-datetimepicker.min.css" type="text/css" rel="stylesheet">

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
.NILL{
border: 1px solid red !important;
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
                                            <span class="caption-subject font-dark bold uppercase text-muted page-title-alt"> <h4 class="page-title">Add Job Order</h4></span>
                                        </div>
                                       <div class="actions">
                                      
                                             <a class="btn btn-circle btn-icon-only btn-default" href="javascript:saveBeforeJobOrderDet()" id="saveBtnOfJobOrd" data-toggle="tooltip" title="Save">
                                                <i class="icon-doc"></i>
                                            </a>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" id="resrOut" data-toggle="tooltip" title="Print">
                                                <i class="icon-printer"></i>
                                                </a>
                                         <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" data-toggle="confirmation" data-popout="true"  title="Issued Authorization">
                                                <i class="icon-shield"></i>
                                            </a>
                                      
                                              
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:;" data-toggle="tooltip" title="Delete!">
                                                <i class="icon-trash"></i> </a>
                                                <a class="btn btn-circle btn-icon-only btn-default" href="joborder.mm" id="resrOut" data-toggle="tooltip" title="Existing">
                                                <i class="icon-logout"></i>
                                            </a>
                                           
                                        </div>
                                          <div class="actions">
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
                                 <option value="${ExistCom.cm_cmy_cd}">${ExistCom.cm_cmy_nm}</option>
                                 </c:forEach>
                                 </select>
                                </div>
                                   <div class="col-md-2">
                                <label class="control-label">DepartMent</label>
                                </div>
                                <div class="col-md-4">
                            <select class="selectpicker" ${LoginDet.em_emp_typ} data-live-search="true" id="dptCdOfJobOrd">
                         <option value="">Select DepartMent</option>
										 <c:forEach var="ExistDpt" items="${ExistDptDet}">
										  <option value="${ExistDpt.dm_dpt_cd}">${ExistDpt.dm_dpt_nm}</option>
										  </c:forEach>
                        </select>
                                </div>
                                
                                </div>
                                <div class="form-group">
                                  <input type="hidden" id="isdauthVal" value="0">
                                  <input type="hidden" id="ExstJobNoChk" value='${ExstJobNoChk}'>
                                    <input type="hidden" id='ExstStkInJobCrdIseStr' value='${ExstStkInJobCrdIseStr}'>
                                    <input type="hidden" id='ExstStkInJobCrdRcvdStr' value='${ExstStkInJobCrdRcvdStr}'>
                               
                                <div class="col-md-2">
                                <label class="control-label">Job Order No</label>
                                </div>
                                <div class="col-md-4">
                                 <input type="text" class="form-control input-sm" placeholder="Document No" value="${jobCdAutoGnId}" id="docNoOfJobOrd">
                                </div>
                                 <div class="col-md-2">
                                <label class="control-label">Process Type  <i class="glyphicon glyphicon-filter" aria-hidden="true"></i></label>
                                </div>
                                <div class="col-md-4">
                               <select  id="processTypeOfJobOrd" class="form-control">
                                <option value="">Select Process Type</option>
                            <option value="InhouseBomMaking">In House Bom Making</option>
                          <option value="JobCardMaking">Job Card Making</option>
                         <option value="BalBomMaking">Balance Bom Issue</option>
                          <option value="ReJob Card">ReJob Card</option>
                        </select>
                                </div>
                                
                                </div>
                                <div class="form-group">
                                 <div class="col-md-2">
                                <label class="control-label">Target Date <i class="glyphicon glyphicon-filter" aria-hidden="true"></i></label>
                                </div>
                                <div class="col-md-4">
                                  <select class="selectpicker" id="tghtDtOfJobOrd" data-live-search="true">
                                  </select>
                                </div>
                             
                               <div class="col-md-2">
                                <label class="control-label">Pdt.Dpt  <i class="glyphicon glyphicon-filter" aria-hidden="true"></i></label>
                                </div>
                                <div class="col-md-4">
                            <select class="selectpicker"  data-live-search="true" id="pdtdptCdOfJobOrd" multiple data-selected-text-format="count > 3" data-actions-box="true" data-size="5">
                         <option value="">Select PdtDepartMent</option>
									 <c:forEach var="addOrdDpt" items="${addOrdDet}">
                            <option value="${addOrdDpt[5]}">${addOrdDpt[2]}</option>
                          </c:forEach> 
                        </select>
                                </div>
                               
                                 <input type="hidden" id="dateOfTrgt" value='${OrdTrgtDtStr}'>
                                </div>
                                <div class="form-group">
                                  <div class="col-md-2">
                                <label class="control-label">Ctgy Type  <i class="glyphicon glyphicon-filter" aria-hidden="true"></i></label>
                                </div>
                                <div class="col-md-4">
                               <select class="selectpicker" multiple id="ctgyTypOfJobOrd" data-selected-text-format="count > 3" data-actions-box="true" data-size="5" data-live-search="true">
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
                               <select class="selectpicker" data-live-search="true" id="ordNoOfJobOrd" multiple data-selected-text-format="count > 3" data-actions-box="true" data-size="5" >
                           <option value=""> Select OrderNo</option>
                          <c:forEach var="addOrdNo" items="${addOrdDet}">
                            <option value="${addOrdNo[0]}">${addOrdNo[0]}</option>
                          </c:forEach>
                        </select>
                                </div>
                             
                                </div>
                                <div class="form-group">
                                    <div class="col-md-2">
                                <label class="control-label">Pdt Type  <i class="glyphicon glyphicon-filter" aria-hidden="true"></i></label>
                                </div>
                                <div class="col-md-4">
                                <select class=" selectpicker" id="pdtTypOfJobOrd" data-live-search="true" multiple data-selected-text-format="count > 3" data-actions-box="true" data-size="5">
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
                               <select class="selectpicker" data-live-search="true" id="waxNoOfJobOrd" multiple data-selected-text-format="count > 3" data-actions-box="true" data-size="5" >
                           <option value=""> Select Wax No</option>
                          <c:forEach var="ExistWaxNo" items="${ExistWaxNoDet}">
                            <option value="${ExistWaxNo}">${ExistWaxNo}</option>
                          </c:forEach>
                        </select>
                                </div>
                                <input type="hidden" id="ExstBomDetailbyStr" value='${ExstBomDetailbyStr}'>
                                
                                <%--  <div class="col-md-2">
                                <label class="control-label">Tree No</label>
                                </div>
                                <div class="col-md-4">
                                <select class=" selectpicker" id="treeNoOfJobOrd" data-live-search="true" multiple data-selected-text-format="count > 3" data-actions-box="true" data-size="5">
                                <option value=""> Select Tree No</option>
                               	 <c:forEach var="addOrdTyp" items="${addOrdDet}">
                            <option value="${addOrdTyp[3]}">${addOrdTyp[3]}</option>
                          </c:forEach>
                                </select>
                                </div> --%>
                                </div>
                                   <div class="form-group">
                                    <div class="col-md-2">
                                <label class="control-label">Order Type  <i class="glyphicon glyphicon-filter" aria-hidden="true"></i></label>
                                </div>
                                <div class="col-md-4">
                                <select class=" selectpicker" id="ordTypOfJobOrd" data-live-search="true" multiple data-selected-text-format="count > 3" data-actions-box="true" data-size="5">
                                <option value=""> Select Order Type</option>
                              
                                </select>
                                </div>
                                 <div class="col-md-2">
                                <label class="control-label">Pdt Prty  <i class="glyphicon glyphicon-filter" aria-hidden="true"></i></label>
                                </div>
                                <div class="col-md-4">
                                <select class=" selectpicker" id="ordPrtyOfJobOrd" data-live-search="true" data-selected-text-format="count > 3" data-actions-box="true" data-size="5">
                                <option value=""> Select Prty</option>
                              
                                </select>
                                </div>
                                
                                </div>
                                </div>
                                <div class="col-md-4">
                                <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Total Qty</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text"  class="form-control input-sm" placeholder="Total Qty" id="WgtOfJobOrd">
                                </div>
                                </div>
                                <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Total Wgt</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Total Wgt" id="totPrtyOfJobOrd">
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
                                <select class="selectpicker" id="moldtyppOfJbcrd" multiple>
                                <option selected>With Mold</option>
                                 <option>Without Mold</option>
                                </select>
                                </div>
                                </div>
                                <div class="form-group">
                                <div class="col-md-6">
                                <label class="control-label">Order Date</label>
                                </div><div class="col-md-6">
                                <input type="text" class="form-control input-sm dateTimePick" placeholder="date/time" id="docDtOfJobOrd" disabled="disabled">
                                </div>
                                </div> 
                                <div class="form-group treeNoIsdJobCd">
                                <div class="col-md-6">
                                <label class="control-label">Tree No  <i class="glyphicon glyphicon-filter" aria-hidden="true"></i></label>
                                </div>
                                <div class="col-md-6">
                               <select class="selectpicker" data-live-search="true" id="TreeNoOfJobOrd" multiple data-selected-text-format="count > 3" data-actions-box="true" data-size="5" >
                          
                        </select>
                                </div>
                                </div>
                                <!--  <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Issued Weight</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Issued Weight" id="IssWgtOfJobOrd">
                                </div>
                                </div>
                                <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Issued Purity</label>
                                </div>
                                <div class="col-md-6">
                                <input type="text" class="form-control input-sm" placeholder="Issued Purity" id="IssPrtyOfJobOrd">
                                </div>
                                </div> -->
                                
                                </div>
                                
                                </div>
                                
                                
                                
                                
                                <div class="form-group">
                                <div class="table-responsive">
              <table class="table table-bordered table-striped" id="myTable">
    <thead id="thOfJobCard">
      <tr>
      <th class="chcktbl">
      <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"  data-toggle="tooltip" title="Select All">
                                                        <input type="checkbox" class="checkboxes parentCheckBox" value="1" onchange="selectBoxHandlerInAddJobOrd(this)">
                                                        <span></span>
                                                    </label>
      </th>
      <th>J.O No<input class="form-control input-sm"></th>
      <th>Pdt.cd<input class="form-control input-sm"></th>
      <th>Ctgy<input class="form-control input-sm"></th>
      <th>Dept<input class="form-control input-sm"></th>
      <th>Ord.Typ<input class="form-control input-sm"></th>
       <th>Tgt.Dt<input class="form-control input-sm"></th>
        <th>Dgn.No<input class="form-control input-sm"></th>
        <th style="display:none">Qty<input class="form-control input-sm"></th>
           <th>Pdt.Typ<input class="form-control input-sm"></th>
           <th>Bom.Nm<input class="form-control input-sm"></th>
            <th>BomWrk.Typ<input class="form-control input-sm"></th>
           <th>Bom.Typ<input class="form-control input-sm"></th>
           <th>Bom.Qty<input class="form-control input-sm"></th>
      </tr>
    </thead>
    <tbody id="myTbodyJob">
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
          <h4 class="modal-title"><small>Issue Bom Details</small></h4>
        </div>
        <div class="modal-body">
        <div class="form-group">
                                <div class="table-responsive">
              <table class="table table-bordered table-striped" id="myBomTable">
    <thead>
    <tr>
<th><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline" data-toggle="tooltip" title="" data-original-title="Select All">
                                                        <input type="checkbox" class="checkboxes parentbomCheckBox" value="1" checked>
                                                        <span></span>
                                                    </label><th>BomName<input class="form-control input-sm"></th><th>BomWrkType<input class="form-control input-sm"></th><th>BomType<input class="form-control input-sm"></th><th>BomSize<input class="form-control input-sm"></th><th>BomQty<input class="form-control input-sm"></th><th>IssQty<input class="form-control input-sm"></th></tr>
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
<!-- end -->
<!-- Bom Metal Detail in PopPup -->
<div class="modal fade in" id="treenillpopup" role="dialog">
    <div class="modal-dialog modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">X</button>
          <h4 class="modal-title"><small>Issue Wgt Details</small></h4>
        </div>
        <div class="modal-body">
        <table class="table table-bordered table-striped"> <thead> <tr><th>Trees</th><th>IssMetalWgt</th></tr> </thead> <tbody id="treeboxtbody"></tbody>
<tfoot><tr><th style=" text-align: right; ">Bom Wgt</th><th><input class="form-control" type="number" id="bomWgt"></th></tr></tfoot> </table>
  </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-success" onclick="saveJobOrderDet()">Save</button>
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
  
  
<!-- end -->
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) --> 

<!-- Include all compiled plugins (below), or include individual files as needed --> 
<script src="js/jquery.min.js"></script> 
<!-- Include all compiled plugins (below), or include individual files as needed --> 
<script src="js/bootstrap.min.js"></script>
<script src="js/datepicker.js" type="text/javascript"></script>
<script src="js/bootstrap-select.min.js"></script>
 <script src="js/bootstrap-confirmation.min.js"></script>
  <script src="js/bootstrap-datetimepicker.min.js"></script>
 
    <script src="js/datatableSMR.js"></script>
     <script>
     function available(date) {
       	var yearNow=(new Date().getFullYear()+"").substring(0,2),mnths=["RL","Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
       	var dateofAvailable=$("#dateOfTrgt").val()||'[]';
       	dateofAvailable=eval(dateofAvailable);
       	var availableDates=dateofAvailable.map(d=>{
       	 var dTble=d[4].split("-");
       	 if(dTble.length>2)
       		 return ~~dTble[0]+"-"+mnths.indexOf(dTble[1])+"-"+yearNow+dTble[2];
       	 });
        var dmy = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear();
    	if ($.inArray(dmy, availableDates) != -1) {
       	   console.log(dmy);
            return true;
          } else {
            return false;
          }
        }
        $(function() {
   		 
       $(".datepicker").datepicker({ beforeShowDay: available ,todayHighlight: false});
   });
</script>  
        <script>
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});
</script>
<script>
window.adminId='${LoginDet.em_emp_id}'
window.treeList=eval('${ExstTree}'||'[]');
window.treeAlwJobList=eval('${AlwOfTreeinJob}'||'[]');
window.companyStore='${CompanyStoreByUsr}';
[companysCd,storeCd,depty]=companyStore.split("-");
if(companysCd)$("#cmycdOfJobOrd").val(companysCd);
if(storeCd)$("#dptCdOfJobOrd").val(storeCd);
if(depty)$("#dptCdOfJobOrd").val(depty.split(",")[0]);
$(function(){
	$('#Showind').hide();
})
	
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
		   "iDisplayLength": -1
		});
	table.columns().eq( 0 ).each( function ( colIdx ) {
	    $( ':text', table.column( colIdx ).header() ).on( 'keyup change', function () {
	        table
	            .column( colIdx )
	            .search( this.value )
	            .draw();
	    } );});
});

	$("[multiple]").avoidDubOption();
	
	function getTobdy(){
		var tbody='<table class="table table-bordered table-striped"><thead><tr><th colspan="3">JobCard No</th><th colspan="4">'+$("#docNoOfJobOrd").val()+'</th></tr>'
		+'<tr><th colspan="3">Dep Nm</th><th colspan="4">'+$("#pdtdptCdOfJobOrd option:selected").text()+'</th></tr><tr><th>BomName</th><th>BomSize</th><th>BomType</th><th>BomWrkType</th><th>Req.Qty</th><th>RcvdQty</th><th>BalQty</th></tr>';
		+'</thead><tbody>';
		var sum4=0,sum5=0,sum6=0;
		$("#myBomTable tbody tr").toArray().forEach(tr=>{
			var td=$(tr).find("td");
			var alw=$(tr).find(":checkbox:checked").length,two=td[4].innerHTML,one=td[1].innerHTML;four=td[2].innerHTML,thre=td[3].innerHTML,five=td[5].innerHTML,rcvd=$(tr).find(".isswgtofbomperjbcd").val()
			var six=(Number(five)-Number(rcvd))||0;
			if(alw){
				sum4+=Number(four)||0;sum5+=Number(five)||0;sum6+=Number(six)||0;
				tbody+='<tr><td>'+one+'</td><td>'+two+'</td><td>'+thre+'</td><td>'+four+'</td><td>'+five+'</td><td>'+rcvd+'</td><td>'+six+'</td></tr>';	
			}
		})
		tbody+='<tr><td colspan="4">Totals</td><td>'+sum5+'</td><td>'+sum4+'</td><td>'+sum6+'</td></tr></tbody></table>';
		return tbody;
	}
	
	$("#ExportInIsuedBom").click(function(){
	var tbody= getTobdy();
		tableToExcel(tbody,'INOUT BOM');
	})
	
	$("#PrintInIsuedBom").click(function(){
		var tbody= getTobdy();
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

	})
</script>

<script src="js/addjobOrder.js"></script>
<script type="text/javascript">
var trnTypList=eval('${trnTypList}'||'[]');trnTypList.unshift('');
$("#processTypeOfJobOrd").html(trnTypList.map((a)=>$("#processTypeOfJobOrd option[value='"+a+"']")));
$("#processTypeOfJobOrd").val("");
var empDtl=JSON.parse('${empDtl}');
var caratList=JSON.parse('${caratList}');
</script>
<input type="hidden" value="${employee}" id="empid"> 
<script src="js/addeditdetailPage.js"></script>
</body>
</html>