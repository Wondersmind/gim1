<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<title>Casting</title>
<script type="text/javascript" src="dwr/interface/AjaxController.js"></script>
<script type="text/javascript" src="dwr/engine.js"></script>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- Bootstrap -->
  
  <link href="css/customefonts.css" rel="stylesheet">
<link href="css/customefonts.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/simple-line-icons.min.css" rel="stylesheet">
<script src="js/3.1.1jquery.min.js"></script>
<link href="css/datepicker.css" type="text/css" rel="stylesheet">
<link rel="stylesheet" href="css/bootstrap-select.min.css">
  <link href="css/datatable.css" rel="stylesheet">
  <link href="css/bootstrap-datetimepicker.min.css" type="text/css" rel="stylesheet">
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
.CurrentRecShower{
   background-color: #91c79c !important;
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
                                            <span class="caption-subject font-dark bold uppercase text-muted page-title-alt"> <h4 class="page-title">Add Casting</h4></span>
                                        </div>
                                     
                                       <div class="actions">
                                       <a class="btn btn-circle btn-icon-only btn-default" id="resrOut" data-toggle="tooltip" title="New">
                                                <i class="icon-plus"></i>
                                            </a>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:beforesavingValidate()" id="saveBtnInCast" data-toggle="tooltip" title="Save">
                                                <i class="icon-doc"></i>
                                            </a>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" id="resrOut" data-toggle="tooltip" title="Print">
                                                <i class="icon-printer"></i>
                                                </a>
                                             <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" data-toggle="confirmation" data-popout="true"  title="Issued Authorization">
                                                <i class="icon-shield"></i>
                                            </a>
                                            <!--  <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" data-toggle="confirmation1" data-popout="true"  title="Recieved Authorization">
                                                <i class="icon-shield"></i>
                                            </a> -->
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" data-toggle="tooltip" title="Import">
                                                <i class="icon-cloud-download"></i>
                                            </a>
                                            
                                              
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:;" data-toggle="tooltip" title="Delete!">
                                                <i class="icon-trash"></i></a>
                                                <a class="btn btn-circle btn-icon-only btn-default" href="casting.mm" id="resrOut" data-toggle="tooltip" title="Existing">
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
                                 <select class="selectpicker" data-live-search="true" id="cmyCdofCst">
 <option value="">Select Company</option>
									                              <c:forEach var="ExistCom" items="${ExistComDet}">
									                           <option value="${ExistCom.cm_cmy_cd}">${ExistCom.cm_cmy_nm}</option>
									                               </c:forEach>
</select>
   <input type="hidden" id="isdauthVal" value="0">
      <input type="hidden" id="rcvdauthVal" value="0">
    <input type="hidden" id="docNoExstForChk" value='${docNoExst}'>
      <input type="hidden" id="exstStkIssCst" value='${exstStkIssCst}'>
        <input type="hidden" id="SpclStkObjString" value='${SpclStkObjString}'>
    
       <input type="hidden" id="stkForIswgtDtlString" value=''>
    <input type="hidden" id="StkLmtOfEMployee" value="">
                                </div>
                                <div class="col-md-2">
                                <label class="control-label">Location</label>
                                </div>
                                <div class="col-md-4">
                                 <select class="selectpicker" data-live-search="true" id="strCdofCst">
   <option value="">Select Location</option>
							  <c:forEach var="ExistStr" items="${ExistStrDet}">
							 <option value="${ExistStr.sm_str_cd}">${ExistStr.sm_str_nm}</option>
								</c:forEach>
</select>
                                </div>
                                </div>
                                <div class="form-group">
                                  <div class="col-md-2">
                                    <label class="control-label">Casting No</label>
                                </div>
                                <div class="col-md-4">
                                <input type="text" class="form-control input-sm" placeholder="Document No" value="${AutoIdOfCstCd}" id="docNoOfCst"> 
                                </div>
                                 <div class="col-md-2">
                                <label class="control-label">Date/Time</label>
                                </div>
                                <div class="col-md-4">
                               <input type="text" id="dateInCasting" class="form-control dateTimePick"  disabled="disabled">
                                </div>
                               
                                </div>
                                <div class="form-group">
                                 <div class="col-md-2">
                                <label class="control-label">Worker</label>
                                </div>
                                <div class="col-md-4">
                                <input type="hidden" class="form-control input-sm" id="cstTpeOfCst" value="Tree Pending">
                                 <select class="selectpicker" data-live-search="true" id="wrkCdOfCst">
                                 <option value="">Select Worker</option>
                              <c:forEach var="DeptWrk" items="${DeptWrker}">
                               <option value="${DeptWrk[0]}">${DeptWrk[1]}</option>
                               </c:forEach>
                               </select>
                                </div>
                                
                                    <div class="col-md-2">
                                <label class="control-label">Department</label>
                                </div>
                                <div class="col-md-4">
                                 <select class="selectpicker" ${LoginDet.em_emp_typ} data-live-search="true" data-actions-box="true"  id="dptCdInCst">
 					  <option value="">Select DepartMent</option>
										 <c:forEach var="ExistDpt" items="${ExistDptDet}">
										  <option value="${ExistDpt.dm_dpt_cd}">${ExistDpt.dm_dpt_nm}</option>
										  </c:forEach>
</select>
                                </div>
                              
                              
                                </div>
                                
                                <div class="form-group">
                                <div class="col-md-2">
                                 <label class="control-label">Target Date <i class="glyphicon glyphicon-filter" aria-hidden="true"></i></label>
                                
                                </div>
                                <div class="col-md-4">
                                  <select  class="selectpicker" id="trgtDtInCst" data-live-search="true">
                                <option>Select Target Date </option>
                                </select>
                                </div>
                                 <div class="col-md-2">
                                <label class="control-label">Tree No <i class="glyphicon glyphicon-filter" aria-hidden="true"></i></label>
                                </div>
                                <div class="col-md-4">
                                   <select class="selectpicker" data-size="5" data-live-search="true" data-actions-box="true" multiple id="treeNoInCst">
                          	</select>
									                               
                                </div>
                              
                               
                                
                                </div>
                                
                                  <div class="form-group">
                                <div class="col-md-2">
                                <label class="control-label">Category <i class="glyphicon glyphicon-filter" aria-hidden="true"></i></label>
                                </div>
                                <div class="col-md-4">
                         	<select class="selectpicker" data-live-search="true" data-size="5" id="wrkCtgyOfCst" multiple data-actions-box="true" data-size="4">
                                <option value="">Select Category</option>
									                            <%--   <c:forEach var="exsitCate" items="${exsitCateCary}">
									                               <option value="${exsitCate}">${exsitCate}</option>
									                               </c:forEach>--%></select> 
                                </div>
                                      
                                     <div class="col-md-2">
                                <label class="control-label">Exp Prty <i class="glyphicon glyphicon-filter" aria-hidden="true"></i></label>
                                </div>
                                <div class="col-md-4">
                                   <select class="selectpicker" data-size="5" data-live-search="true" data-actions-box="true" multiple id="expPrtFlterInCst">
                          	</select>
									                               
                                </div>  
                                      
                                      
                                 </div>
                                </div>
                                <div class="col-md-4">
                                <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Total Issue Wt</label>
                                </div>
                                <div class="col-md-6">
                                <input type="number" class="form-control input-sm" placeholder="Issued Wt"  id="totissWgtOfCst">
                                </div>
                                </div>
                                <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Product Wt</label>
                                </div>
                                <div class="col-md-6">
                                <input type="number" class="form-control input-sm" placeholder="Product Wt" id="totpdtWgtOfCst" step="0.001">
                                </div>
                                </div>
                                <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Running Wt</label>
                                </div>
                                <div class="col-md-6">
                                <input type="number" class="form-control input-sm" placeholder="Running Wt" id="totrunWgtOfCst">
                                </div>
                                </div>
                                <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Balance Wt</label>
                                </div>
                                <div class="col-md-6">
                                <input type="number" class="form-control input-sm" placeholder="Balance Wgt" id="totPndingWgtCst">
                                </div>
                                </div>
                           
                                </div>
                                
                                </div>
                                
                                
                                <div class="row exstinfoShpwer" style="text-align: center;">
    							
    							
    							</div>
                                
                                <div class="form-group">
                                <div class="table-responsive">
              <table class="table table-bordered table-striped" id="myTable">
    <thead>
      <tr>
      <th class="chcktbl">
      <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"  data-toggle="tooltip" title="Select All">
                                                        <input type="checkbox" class="checkboxes parentCheckBox" value="1" onclick="selectBoxHandlerInAddTree(this)">
                                                        <span></span>
                                                    </label>
      </th>
      <th>Target Date <input class="form-control input-sm"></th>
      <th>Category <input class="form-control input-sm"></th>      
      <th>DPT <input class="form-control input-sm"></th>
      <th>Pdt Qty <input class="form-control input-sm"></th>      
      <th>TreeNo <input class="form-control input-sm"></th>
      <th>Expecetd Purity <input class="form-control input-sm"></th>
      <th>Required Wt <input class="form-control input-sm"></th>
      <th>Issued Wt <input class="form-control input-sm"></th>
      <th>Product Wt <input class="form-control input-sm"></th>
      <th>Runner Weight <input class="form-control input-sm"></th>
      <th>Testing Sample <input class="form-control input-sm"></th>
      <th>Powder Metal <input class="form-control input-sm"></th>
      <th>Tree Purity <input class="form-control input-sm"></th>
        
      </tr>
    </thead>

    <tbody id="castngTable">
   <c:forEach var="ExtTreHdrDtl" items="${ExistTreHdrDtl}">
      <tr value="${ExtTreHdrDtl[8]}" carat="${ExtTreHdrDtl[10]}" style="background-color:${ExtTreHdrDtl[12]}">
      <td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                                        <input type="checkbox" class="checkboxes childCheckBox" id="${ExtTreHdrDtl[6]}" value="${ExtTreHdrDtl[7]}">
                                                        <span></span>
                                                    </label></td>
        <td>${ExtTreHdrDtl[0]}</td>
        <td>${ExtTreHdrDtl[1]}</td>
        <td>${ExtTreHdrDtl[2]}</td>
        <td class="pdtQtyIssCal">${ExtTreHdrDtl[3]}/${ExtTreHdrDtl[11]}</td>
        <td>${ExtTreHdrDtl[4]}</td>
        <td>${ExtTreHdrDtl[9]}</td>
         <td><script type="text/javascript">document.write((+'${ExtTreHdrDtl[5]}'||0).toFixed(2))</script> </td>
        <td><input type="number" class="form-control issWgtInPdtQty" readonly style="width: 100px;"></td>
        <td><input type="number" class="form-control pdtWgtOfCst" style="width: 100px;"  onkeyup="sumOfweightInCastCal()" onchange="sumOfweightInCastCal()"></td>
        <td ><input type="number" class="form-control runWgtOfCst" style="width: 100px;" onkeyup="sumOfweightInCastCal()" onchange="sumOfweightInCastCal()"></td>
        <td ><input type="number" class="form-control smplWgtOfCst" readonly style="width: 100px;" onclick="openModelOfTestSample(this)" onkeyup="balanceWgtcalCulation(this)" onchange="sumOfweightInCastCal()"></td>
        <td><input type="number" class="form-control pwdrMtlOfCst" style="width: 100px;"  onkeyup="sumOfweightInCastCal()" onchange="sumOfweightInCastCal()"></td>
        <td><input type="number" class="form-control trePrtyOfCst" readonly style="width: 100px;"  onkeyup="balanceWgtcalCulation(this)" onchange="balanceWgtcalCulation(this)"></td>
		<td style="display:none"><input type="hidden" id="${ExtTreHdrDtl[4]}" value=""></td>
      </tr>
      </c:forEach>
      
    </tbody>
       <div class="modal fade" id="myModalSample" role="dialog">
    <div class="modal-dialog modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"><small>Testing Samples</small></h4>
        </div>
        <div class="modal-body" >
          
          <div class="form-group">
                                 <div class="col-md-2">
                                 <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                                        <input type="checkbox" tst_smpl_one="">
                                                        <span></span>
                                                    </label>
                                <label class="control-label">TA1</label>
                                </div>
                                <div class="col-md-4">
                                <input type="number" class="form-control input-sm" placeholder="TA1" id="ta1Smpl">
                                </div>
                                 <div class="col-md-2">
                                 <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                                        <input type="checkbox" tst_smpl_two="">
                                                        <span></span>
                                                    </label>
                                <label class="control-label">TA2</label>
                                </div>
                                <div class="col-md-4">
                                <input type="number" class="form-control input-sm" placeholder="TA2" id="ta2Smpl">
                                </div>
                                </div>
                                
            <div class="form-group">
                                 <div class="col-md-2">
                                 <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                                        <input type="checkbox" tst_smpl_three="">
                                                        <span></span>
                                                    </label>
                                <label class="control-label">TB1</label>
                                </div>
                                <div class="col-md-4">
                                <input type="number" class="form-control input-sm" placeholder="TB1" id="tb1Smpl">
                                </div>
                                 <div class="col-md-2">
                                 <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                                        <input type="checkbox" tst_smpl_four="">
                                                        <span></span>
                                                    </label>
                                <label class="control-label">TB2</label>
                                </div>
                                <div class="col-md-4">
                                <input type="number" class="form-control input-sm" placeholder="TB2" id="tb2Smpl">
                                </div>
                                </div>                     
                         <div class="form-group">
                                <div class="col-md-5"></div>
                                <div class="col-md-2">
                                <button class="btn-change7" type="button" onclick="saveTheJsonInTr()">Save </button>
                                </div>
                                </div>
          
        </div>
        <div class="modal-footer fooderAlert">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
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
<span id="spanINModel"></span>
<!--      <div class="modal fade" id="myModal" role="dialog">
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
    <tr><th></th><th>TrnsType</th><th>Item Type</th><th>Item Code</th><th>Stk Prty</th><th>Stk Wgt</th><th>Iss Wgt</th></tr>
    </thead>
    <tbody id="isedWhtOfcStng">
 </tbody>  
    </table></div></div>
                        
   
          
        </div>
        <div class="modal-footer">
         <button type="button" class="btn btn-success" onclick="saveIssueWgtCntlr()">Save</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
          
        </div>
      </div>
    </div>
  </div> -->

</div>
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
  
  
<span id="treerunnerpopup"></span>

  
  
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) --> 
<script src="js/jquery.min.js"></script> 
<!-- Include all compiled plugins (below), or include individual files as needed --> 
<script src="js/bootstrap.min.js"></script>
<script src="js/datepicker.js" type="text/javascript"></script>
<script src="js/bootstrap-select.min.js"></script>
 <script src="js/bootstrap-confirmation.min.js"></script>
 <script src="js/lodash.min.js"></script>
 
  <script src="js/bootstrap-datetimepicker.min.js"></script>
    <script src="js/datatableSMR.js"></script>
     <script>
     $("#myTable script").remove();
     window.companyStore='${CompanyStoreByUsr}';
     [companysCd,storeCd,depty]=companyStore.split("-");
     if(companysCd)$("#cmyCdofCst").val(companysCd);
     if(storeCd)$("#strCdofCst").val(storeCd);
     if(depty)$("#dptCdInCst").val(depty.split(",")[0]);
	 $(function() {
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
	$('#Showind').hide();	$(".issuWgtByStk").prop("disabled",true);
$('#resrOut').click(function (){
$('#Showind').toggle();	
});
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
	$('[data-toggle=confirmation1]').confirmation({
		  rootSelector: '[data-toggle=confirmation1]',
		onConfirm : function() {$('[data-toggle=confirmation1]').addClass("btn-circlesuc");
		$('[data-toggle=confirmation]').addClass("btn-circlesuc");  $("#rcvdauthVal").val("1");$("#isdauthVal").val("1");
			},
		onCancel : function() {$('[data-toggle=confirmation1]').removeClass("btn-circlesuc");
				$("#rcvdauthVal").val("0");
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
	        $(".parentCheckBox").prop("checked",false);
	        sumOfweightInCastCal();
	    } );});
});

var empDtl=JSON.parse('${empDtl}');
</script>
<script src="js/castingController.js"></script>
<script src="js/addeditdetailPage.js"></script>
</body>
</html>