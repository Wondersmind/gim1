<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<title>Wax</title>
<script type="text/javascript" src="dwr/interface/AjaxController.js"></script>
<script type="text/javascript" src="dwr/engine.js"></script>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- Bootstrap -->
  
  <link href="css/customefonts.css" rel="stylesheet">
<link href="css/customefonts.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/simple-line-icons.min.css" rel="stylesheet">
<link href="css/themify-icons.css" rel="stylesheet">
<script src="js/3.1.1jquery.min.js"></script>
<link href="css/datepicker.css" type="text/css" rel="stylesheet">
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

[yes],[YES] td{
background-color: #7db0d6 !important;
}

.input-sm {
    height: 27px !important;
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
              <li><a href="<c:url value="j_spring_security_logout"/>"><i class="icon-lock"></i> Logout</a></li>
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
            <div class="portlet light bordered ">
                                    <div class="portlet-title">
                                        <div class="caption">
                                            <i class="icon-social-dribbble font-dark hide"></i>
                                            <span class="caption-subject font-dark bold uppercase text-muted page-title-alt"> <h4 class="page-title">Edit Wax</h4></span>
                                        </div>
                                       <div class="actions">
                                        <a class="btn btn-circle btn-icon-only btn-default" href="addwax.mm" id="resrOut" data-toggle="tooltip" title="New">
                                                <i class="icon-plus"></i>
                                            </a>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:totalfinalsaveWaxOrderUpdate()" id="updateWaxButton" data-toggle="tooltip" title="Update">
                                                <i class="icon-doc"></i>
                                            </a>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" id="printWaxDetail" data-toggle="tooltip" title="Print">
                                                <i class="icon-printer"></i>
                                                </a>
                                                <c:choose><c:when test="${edtWaxFulDet[11] eq '1'}">
											<a class="btn btn-circlesuc btn-icon-only btn-default" href="javascript:void(0)" data-toggle="confirmation" data-popout="true"  title="Authorization">
                                                <i class="icon-shield"></i>
                                            </a>           </c:when><c:otherwise>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" data-toggle="confirmation" data-popout="true"  title="Authorization">
                                                <i class="icon-shield"></i>
                                            </a>       
                                            </c:otherwise></c:choose>                                
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:deleteExistWaxHdrRec()" data-toggle="tooltip" title="Delete!">
                                                <i class="icon-trash"></i>
                                            </a>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="wax.mm" id="resrOut" data-toggle="tooltip" title="Exit">
                                                <i class="icon-logout"></i>
                                            </a>
                                        </div>
                                         <div class="actions">
                                 <span id="successResult" style="color:green"></span>
                                     <c:choose><c:when test="${edtWaxFulDet[11] eq '1'}"><div class="alert alert-warning" >Wax Is Authentication Mode...</div> </c:when></c:choose>
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
                                 <select class="selectpicker" data-live-search="true" id="companyCdWax">
   <option value="">Select Company</option>
									                              <c:forEach var="ExistCom" items="${ExistCmyDet}">
									                               <c:choose><c:when test="${edtWaxFulDet[6] eq ExistCom.cm_cmy_cd}">  <option value="${ExistCom.cm_cmy_cd}" selected="selected">${ExistCom.cm_cmy_nm}</option></c:when> 
									                               <c:otherwise> <option value="${ExistCom.cm_cmy_cd}">${ExistCom.cm_cmy_nm}</option></c:otherwise></c:choose>
									                              
									                               </c:forEach>
</select>

                                </div>
                                <div class="col-md-2">
                                <label class="control-label">Location</label>
                                </div>
                                <div class="col-md-4">
                                 <select class="selectpicker" data-live-search="true" id="storeCdWax"> 
 <option value="">Select Location</option>
							  <c:forEach var="ExistStr" items="${ExistStrDet}">
								<c:choose><c:when test="${edtWaxFulDet[7] eq ExistStr.sm_str_cd}"> <option value="${ExistStr.sm_str_cd}" selected="selected">${ExistStr.sm_str_nm}</option></c:when>
								<c:otherwise> <option value="${ExistStr.sm_str_cd}">${ExistStr.sm_str_nm}</option></c:otherwise>
								 </c:choose>
								
								 </c:forEach>
</select>
                                </div>
                                </div>
                                <div class="form-group">
                                 <div class="col-md-2">
                                <label class="control-label">Wax No</label>
                                </div>
                                <div class="col-md-4" style="text-align: left;">
                                 <label class="control-label dcment" id="docNoWax">${edtWaxFulDet[0]}</label>
<input type="hidden" id="primKeyOfWaxHdr" value="${edtWaxFulDet[9]}"><input type="hidden" id="crtIdfWaxHdr" value="${edtWaxFulDet[10]}">
<input type="hidden" id="crtDtWaxHdr" value="${edtWaxFulDet[1]}">
  <input type="hidden" id="isauthVal" value="0">
  <input type="hidden" id="authChekForId" value="${edtWaxFulDet[11]}">
                                </div>
                                <div class="col-md-2" >
                                <label class="control-label">Date</label>
                                </div>
                                <div class="col-md-4" style="text-align: left;">
                                   <input type="text" class="form-control input-sm dateTimePick" disabled placeholder="date/time" id="docDtOfJobOrd" value="${edtWaxFulDet[21]}">
                                </div>
                                </div>
                               
                                <div class="form-group">
                                 <div class="col-md-2">
                                <label class="control-label">Target Date  <i class="glyphicon glyphicon-filter" aria-hidden="true"></i></label>
                                </div>
                                <div class="col-md-4">
                                <input type="text" class="form-control input-sm datepicker" placeholder="Target Date" id="trgtdtId">
                                </div>
                                 <div class="col-md-2">
                                <label class="control-label">Pdt.Dpt  <i class="glyphicon glyphicon-filter" aria-hidden="true"></i></label>
                                </div>
                                <div class="col-md-4">
                               <select class="selectpicker"  data-live-search="true"  multiple data-selected-text-format="count > 3" data-actions-box="true" id="dptCdWax">
                        <option value="">Select DepartMent</option>
										 <c:forEach var="ExistDpt" items="${ExistDptDet}">
										  <option value="${ExistDpt.dm_dpt_cd}">${ExistDpt.dm_dpt_nm}</option>
										  </c:forEach>
                        </select>
                                </div>
                                </div>
                                <div class="form-group">
                                 <div class="col-md-2">
                                <label class="control-label">J.O No  <i class="glyphicon glyphicon-filter" aria-hidden="true"></i></label>
                                </div>
                                <div class="col-md-4">
                                <input type="hidden" value='${editOrdNoDet}' id="ordNoDropDownList">
                                 <input type="hidden" value='${edtDptDet}' id="depNoDropDownList">
                                
                                <select class="selectpicker" data-live-search="true"  multiple data-selected-text-format="count > 3" data-actions-box="true" data-size="7" id="orderNoId">
                           <option value=""> Select OrderNo</option>
                          <c:forEach var="addOrdNo" items="${addOrdNoDet}">
                            <option value="${addOrdNo}">${addOrdNo}</option>
                          </c:forEach>
                        </select>
                                </div>
                             <div class="col-md-2">
                                <label class="control-label">Order Type  <i class="glyphicon glyphicon-filter" aria-hidden="true"></i></label>
                                </div>
                                <div class="col-md-4">
                               <select class="selectpicker" id="ohdtypWax" multiple>
  								<option value="">Select Order</option>
							                             
								</select>
                                </div>
                                </div>
                                  <div class="form-group">
                                  <div class="col-md-2">
                                <label class="control-label">Ctgy  <i class="glyphicon glyphicon-filter" aria-hidden="true"></i></label>
                                </div>
                                <div class="col-md-4">
                               <select class="selectpicker" multiple data-actions-box="true" data-live-search="true" id="ctgyOfWax">
                             </select>
                                </div>
                                       <div class="col-md-2">
                                <label class="control-label">Woker</label>
                                </div>
                                <div class="col-md-4">
                               <select class="selectpicker" data-live-search="true" id="workCdWax">
                               <option value="">Select Worker</option>
                               <c:forEach var="ExistWrk" items="${ExistWrkDet}">
                              <c:choose><c:when test="${edtWaxFulDet[8] eq ExistWrk.em_emp_id}">    <option value="${ExistWrk.em_emp_id}" selected="selected">${ExistWrk.em_emp_nm}</option></c:when>
                              <c:otherwise>
                               <option value="${ExistWrk.em_emp_id}">${ExistWrk.em_emp_nm}</option></c:otherwise>
                                </c:choose>
                               </c:forEach>
                               </select>
                                </div>
                                </div>
                                </div>
                                <div class="col-md-4">
                                <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Issued Qty</label>
                                </div>
                                <div class="col-md-6">
                                <input type="number" step="any" class="form-control input-sm" placeholder="Issued Qty" id="noOfQtyWax" value="${edtWaxFulDet[2]}">
                                </div>
                                </div>
                                <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">No of Orders</label>
                                </div>
                                <div class="col-md-6">
                                <input type="number" step="any" class="form-control input-sm" placeholder="No of Orders" id="noOfOrdWax" value="${edtWaxFulDet[3]}">
                                </div>
                                </div>
                                <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Sum Of StdWeight</label>
                                </div>
                                <div class="col-md-6">
                                <input type="number" step="any" class="form-control input-sm" placeholder="Standard Weight" id="sumOfStdWgtWax" value="${edtWaxFulDet[4]}">
                                </div>
                                </div>
                                <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">No of Product</label>
                                </div>
                                <div class="col-md-6">
                                <input type="number" step="any" class="form-control input-sm" placeholder="No of Product" id="sumOfNoPdts" value="${edtWaxFulDet[5]}">
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
                                                        <input type="checkbox" class="checkboxes parentCheckBox" value="1" onchange="selectBoxHandlerInAddOrder(this)">
                                                        <span></span>
                                                    </label>
      </th>
      <th>Target Date<input class="form-control input-sm searcher"></th>
       <th>Produtct Id<input class="form-control input-sm searcher"></th>
               <th>Qty<input class="form-control input-sm searcher"></th>
        <th>Size<input class="form-control input-sm searcher"></th>
               <th>Category<input class="form-control input-sm searcher"></th>
               <th>StWeight<input class="form-control input-sm searcher"></th>
               <th>StWeight*Qty<input class="form-control input-sm searcher"></th>
        <th>Order Type</th>
      </tr>
    </thead>
      <c:choose><c:when test="${edtWaxFulDet[11] ne '1'}">
      <tbody id="myTbody">
    <c:forEach var="addWaxOrd" items="${addWaxOrdDet}">
      <tr joNo="${addWaxOrd[10]}" dptName="${addWaxOrd[11]}">
      <td value="${addWaxOrd[8]}"><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                                        <input type="checkbox" class="checkboxes childCheckBox" value="${addWaxOrd[6]}" id="${addWaxOrd[7]}">
                                                        <span></span>
                                                    </label></td>
        <td>${addWaxOrd[2]}</td>
        <td class="pdtInfo">${addWaxOrd[3]}</td>
        <td class="sumQty">${addWaxOrd[4]}</td>
         <td>${addWaxOrd[0]}</td>
        <td>${addWaxOrd[1]}</td>
        <td>${addWaxOrd[5]}</td>
        <c:choose><c:when test="${addWaxOrd[4] ne 0}"> <td class="sumStdWgt">${addWaxOrd[5]*addWaxOrd[4]}</td></c:when>
        <c:otherwise><td class="sumStdWgt">${addWaxOrd[5]}</td></c:otherwise>
         </c:choose>
         <td>${addWaxOrd[9]}</td>      
                                                     
      </tr>
    </c:forEach>
    </tbody></c:when></c:choose>
    <tbody id="myTbodyExist" style="border: aliceblue;">
    <c:forEach var="exstWaxFor" items="${exstWaxForEdit}">
    <c:choose><c:when test="${exstWaxFor[9] eq '0'}">
      <tr ${exstWaxFor[13]} style="background-color: #5fbeaa !important;color: white;" joNo="${exstWaxFor[11]}" dptName="${exstWaxFor[12]}">
    </c:when><c:otherwise>
     <tr class="warning" ${exstWaxFor[13]} joNo="${exstWaxFor[11]}" dptName="${exstWaxFor[12]}">
    </c:otherwise></c:choose>
    
      <td value="${exstWaxFor[3]}"><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"><c:choose><c:when test="${exstWaxFor[9] eq '1'}">
       <input type="checkbox" disabled class="checkboxes childCheckBoxExist" value="${exstWaxFor[0]}" id="${exstWaxFor[8]}" > 
      </c:when><c:otherwise><input type="checkbox" class="checkboxes childCheckBoxExist" value="${exstWaxFor[0]}" id="${exstWaxFor[8]}" ></c:otherwise> </c:choose>
                                                        
                                                        <span></span>
                                                    </label></td>
        <td>${exstWaxFor[1]}</td>
        <td class="pdtInfo">${exstWaxFor[2]}</td>
        <td class="sumQty">${exstWaxFor[4]}</td>
         <td>${exstWaxFor[6]}</td>
        <td>${exstWaxFor[7]}</td>
        <td>${exstWaxFor[5]}</td>
        <c:choose><c:when test="${exstWaxFor[4] ne 0}"> <td class="sumStdWgt">${exstWaxFor[5]*exstWaxFor[4]}</td></c:when>
        <c:otherwise><td class="sumStdWgt">${exstWaxFor[5]}</td></c:otherwise>
         </c:choose>
       <td>${exstWaxFor[10]}</td>          
                                                     
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
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) --> 
<script src="js/jquery.min.js"></script> 
<!-- Include all compiled plugins (below), or include individual files as needed --> 
<script src="js/bootstrap.min.js"></script>

<script src="js/datepicker.js" type="text/javascript"></script>
<script src="js/bootstrap-select.min.js"></script>
   <script src="js/bootstrap-confirmation.min.js"></script>
         <script src="js/datatableSMR.js"></script>
          <script src="js/aes.js"></script>
    <script>
$(document).ready(function(){
	if($("#authChekForId").val()=="1"){
		$(".wrapper :input:not(.searcher),.wrapper a:not(.actions a:last,#printWaxDetail)").attr("disabled",true);
		$(".wrapper a:not(.actions a:last,#printWaxDetail)").addClass("disabled");
	}
    $('[data-toggle="tooltip"]').tooltip(); 
    $("table").delegate('.pdtInfo','click',showProductDetail);  
});
</script>
     <script>
     function available(date) {
     	var yearNow=(new Date().getFullYear()+"").substring(0,2),mnths=["RL","Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
     	  var availableDates=$("tbody tr td:nth-child(2)").toArray().map(d=>{
     	 var dTble=$(d).text().split("-");
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


$(function(){
/* 	if($("#ordNoDropDownList").val()!=""){
	var arry=eval($("#ordNoDropDownList").val());
	$("#orderNoId").val(arry);
	}
	if($("#depNoDropDownList").val()!=""){
		var drp=eval($("#depNoDropDownList").val());
	$("#dptCdWax").val(drp);
	} */
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
				$("#isauthVal").val("1");
			},
		onCancel : function() {$('[data-toggle=confirmation]').removeClass("btn-circlesuc");
				$("#isauthVal").val("0");
			}
		});
});   
$(document).ready(function(){
	var table = $('#myTable').DataTable({
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
</script>
<script src="js/editWaxController.js"></script>
</body>
</html>