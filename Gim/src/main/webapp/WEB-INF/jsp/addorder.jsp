<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<title>Order</title>
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
<link rel="stylesheet" href="css/bootstrap-select.min.css">
<link rel="stylesheet" href="css/jquery-ui.css">
<link href="css/bootstrap-datetimepicker.min.css" type="text/css" rel="stylesheet">

<!-- Latest compiled and minified JavaScript -->
   <link href="css/datatable.css" rel="stylesheet">
<!-- Magnific Popup core CSS file -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
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
.mngbtn {
	background-color: #5fbeaa !important;
    border: 1px solid #5fbeaa !important;
	color:#fff !important;
}
.mngbtn:hover, .mngbtn:focus, .mngbtn:active, .open > .dropdown-toggle.mngbtn {
	    background-color: #5fbeaa !important;
    	border: 1px solid #5fbeaa !important;
}
.gal-item{
	overflow: hidden;
}
.gal-item .box{
	overflow: hidden;
    height: 33px;
    padding: inherit;
}
.box img{
	height: 100%;
	width: 100%;
	object-fit:cover;
	-o-object-fit:cover;
}
.gal-item a:focus{
	outline: none;
}
.gal-item a:after{
	content:"\e003";
	font-family: 'Glyphicons Halflings';
	opacity: 0;
	background-color: rgba(0, 0, 0, 0.75);
	position: absolute;
	right: 6px;
	left: 6px;
	top: 0px;
	bottom: 0px;
	text-align: center;
    line-height: 350px;
    font-size: 30px;
    color: #fff;
    -webkit-transition: all 0.5s ease-in-out 0s;
    -moz-transition: all 0.5s ease-in-out 0s;
    transition: all 0.5s ease-in-out 0s;
}
.gal-item a:hover:after{
	opacity: 1;
}
.modal-open .gal-container .modal{
	background-color: rgba(0,0,0,0.4);
}
.modal-open .gal-item .modal-body{
	padding: 0px;
}
.modal-open .gal-item button.close{
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: #f05050;
    opacity: 1;
    color: #fff;
    z-index: 999;
    right: -12px;
    top: -12px;
    border-radius: 50%;
    font-size: 15px;
    border: 2px solid #fff;
    line-height: 25px;
    -webkit-box-shadow: 0 0 1px 1px rgba(0,0,0,0.35);
	box-shadow: 0 0 1px 1px rgba(0,0,0,0.35);
}
.modal-open .gal-item button.close:focus{
	outline: none;
}
.modal-open .gal-item button.close span{
	position: relative;
	top: -3px;
	font-weight: lighter;
	text-shadow:none;
}
.gal-container .modal-dialogue{
	width: 80%;
}
.gal-container .description{
	position: relative;
	height: 40px;
	top: -40px;
	padding: 10px 25px;
	background-color: #5fbeaa;
	color: #fff;
	text-align: left;
	    font-family: 'Open Sans', sans-serif;
}
.gal-container .description h4{
	margin:0px;
	font-size: 15px;
	font-weight: 300;
	line-height: 20px;
}
.gal-container .modal.fade .modal-dialog {
    -webkit-transform: scale(0.1);
    -moz-transform: scale(0.1);
    -ms-transform: scale(0.1);
    transform: scale(0.1);
    top: 100px;
    opacity: 0;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
}

.gal-container .modal.fade.in .modal-dialog {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    -webkit-transform: translate3d(0, -100px, 0);
    transform: translate3d(0, -100px, 0);
    opacity: 1;
}
@media (min-width: 768px) {
.gal-container .modal-dialog {
    width: 55%;
    margin: 50 auto;
}
}
@media (max-width: 768px) {
    .gal-container .modal-content{
        height:250px;
    }
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
	font-family: 'Open Sans', sans-serif;
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
            <div class="portlet light bordered">
                                    <div class="portlet-title">
                                        <div class="caption">
                                            <i class="icon-social-dribbble font-dark hide"></i>
                                            <span class="caption-subject font-dark bold uppercase text-muted page-title-alt"> <h4 class="page-title">Add Order</h4></span>
                                        </div>
                                       <div class="actions">
                                       <a class="btn btn-circle btn-icon-only btn-default" href="wax.mm" id="resrOut" data-toggle="tooltip" title="New">
                                                <i class="icon-plus"></i>
                                            </a>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:saveaddImportOrder()" id="saveButtonTotOrder" data-toggle="tooltip" title="Save">
                                                <i class="icon-doc"></i>
                                            </a>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" id="resrOut" data-toggle="tooltip" title="Print">
                                                <i class="icon-printer"></i>
                                                </a>
										 <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" data-toggle="confirmation" data-popout="true"  title="Authorization">
                                                <i class="icon-shield"></i>
                                            </a>
                                                                                         
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:delrecFromOdrArray()" data-toggle="tooltip" title="Delete!">
                                                <i class="icon-trash"></i>
                                            </a>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="order.mm" id="resrOut" data-toggle="tooltip" title="Exit">
                                                <i class="icon-logout"></i>
                                            </a>
                                            
                                        </div>
                                          <div class="actions">
                                        <span id="orderFinalsavePro"></span></div>
                                    </div>
                                    
                                </div>
                                <form class="form-horizontal">
                                <div class="row">
                                <div class="col-md-8">
                                <div class="form-group">
                                 <div class="col-md-2">
                                 <input type="hidden" id="isauthVal" value="0">
                                 <input type="hidden" id="prowithOrdCmp" value='${CompareUseProWthOrd}'> 
                                 
                                <label class="control-label">Company</label>
                                </div>
                                <div class="col-md-4">
                                 <select class="selectpicker" data-live-search="true" id="ohd_cmy_cd">
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
                                 <select class="selectpicker" data-live-search="true" id="ohd_str_cd">
								  <option value="">Select Location</option>
							  <c:forEach var="ExistStr" items="${ExistStrDet}">
								 <option value="${ExistStr.sm_str_cd}">${ExistStr.sm_str_nm}</option>
								 </c:forEach>
									</select>
                                </div>
                                </div>
                                  <div class="form-group">
                                 <div class="col-md-2">
                                <label class="control-label">Order NO</label>
                                </div>
                                <div class="col-md-4">
                                <input type="text" class="form-control input-sm" placeholder="Order NO" value="${ExistOrdId}" id="ohd_ord_no">
                                </div>
                                 <div class="col-md-2">
                                <label class="control-label">Order Date</label>
                                </div>
                                <div class="col-md-4">
                                <input type="text" class="form-control input-sm dateTimePick" placeholder="date/time" id="ohd_ord_dt" disabled="disabled">
                                </div>
                                </div>
                                <div class="form-group">
                                 <div class="col-md-2">
                                <label class="control-label">Customer</label>
                                </div>
                                <div class="col-md-4">
                                <select class="selectpicker" data-live-search="true" id="ohd_cst_cd">
 										 <option value="">Select Customer</option>
									                              <c:forEach var="ExistCst" items="${ExistCstDet}">
									                               <option value="${ExistCst.vcm_vnct_cd}">${ExistCst.vcm_vnct_nm}</option>
									                               </c:forEach>
								</select>
                                </div>
                                  <div class="col-md-2">
                                <label class="control-label">Order Type</label>
                                </div>
                                <div class="col-md-4">
                                <select class="selectpicker"  id="ohd_ord_typ">
  								<option value="">Select Order</option>
							<c:forEach var="ExstOrder" items="${ExstOrderType}">
							<option>${ExstOrder}</option>
							</c:forEach>                            
								</select>
                                </div>
                                </div>
                              
                                <div class="form-group">
                                 <div class="col-md-2">
                                <label class="control-label">Add ItemCode</label>
                                </div>
                                <div class="col-md-10">
                                <div class="input-group">
  <input type="text" class="form-control inptgrp" aria-describedby="basic-addon2" id="srchInDesignPro" autocomplete="off" placeholder="Search by PdtCode/Name/Degin No" onkeydown="if(event.keyCode==13) prfomDgnProAdd()"
											onkeyup="getAllDesignProduct(event,this.value)">
 <span class="input-group-addon ingrdon" id="basic-addon2" onclick="prfomDgnProAdd()"><i class="icon-plus"></i></span>
</div>
                                </div>
                                                                 <!--<div class="col-md-2">
                                <label class="control-label">JO Date</label>
                                </div>
                                <div class="col-md-4">
                                 <input type="text" class="form-control datepicker" placeholder="JO Date">
                                </div>-->
                                </div>
                                </div>
                                <div class="col-md-4">
                                <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">No Of Products</label>
                                </div>
                                <div class="col-md-6">
                                <input type="number" min="0" value="1" class="form-control input-sm" placeholder="No Of Products" id="ohd_ord_no_itm">
                                </div>
                                 
                                </div>
                                <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Sum Of Qty</label>
                                </div>
                                <div class="col-md-6">
                                <input type="number" min="0" class="form-control input-sm" placeholder="Sum Of Qty" id="ohd_ord_qty">
                                </div>
                                </div>
                                <div class="form-group">
                                 <div class="col-md-6">
                                <label class="control-label">Sum Of Standard</label>
                                </div>
                                <div class="col-md-6">
                                <input type="number" min="0" class="form-control input-sm" placeholder="Sum Of Standard" id="ohd_ord_std_wt">
                                </div>
                                </div>
                                
                                 <div class="form-group">
                                 <div class="col-md-12" style="text-align:  left;"><span id="orderAddSuccSpan"></span></div></div>
                                </div>
                                </div>
                                
                                
                                
                                
                                <div class="form-group">
                                <div class="table-responsive">
              <table class="table table-striped table-bordered" id="myTable">
    <thead>
      <tr>
       <th class="chcktbl">
      <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"  data-toggle="tooltip" title="Select All" >
                                                        <input type="checkbox" class="checkboxes prntChkBox" value="1" onchange="selectBoxHandlerInAddOrder(this)">
                                                        <span></span>
                                                    </label>
      </th>
      <th>Order Id <input class="form-control input-sm"></th>
       <th> TargetDate<input class="form-control input-sm"> </th>
        <th>Order Type<input class="form-control input-sm"></th>
         <th>Batch No<input class="form-control input-sm"></th>
       <th>ProductCode<input class="form-control input-sm"></th>
        <th>Qty<input class="form-control input-sm"></th>
        <th>JO No<input class="form-control input-sm"></th>
        <th>JO Date<input class="form-control input-sm"></th>
        <th>StdWT(g)<input class="form-control input-sm"></th>
        <th>Remarks<input class="form-control input-sm"></th>
           <th>Image<input class="form-control input-sm"></th>
      </tr>
      
    </thead>
    <tbody id="orderTableTbody">

<!--       <tr>
       <td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                                        <input type="checkbox" class="checkboxes" value="1">
                                                        <span></span>
                                                    </label></td>
        <td>July</td>
        <td>Dooley</td>
        <td>July</td>
        <td>Dooley</td>
        <td>July</td>
        <td>Dooley</td>
        <td>July</td>
        <td>Dooley</td>
        <td>July</td>
        <td>Dooley</td>
        <td>July</td>
        <td>Dooley</td>
        <td>July</td>
        <td>Dooley</td>
        <td>July</td>
        <td>Dooley</td>
        <td>July</td>
        <td>Dooley</td>
        <td>July</td>
        <td>Dooley</td>
        <td>July</td>
        <td>Dooley</td>
        <td>Dooley</td>
        <td>July</td>
        <td>Dooley</td>
        <td>July</td>
        <td>Dooley</td>
         <td>
         <div class="gal-container">
    <div class="col-md-12 col-sm-12 co-xs-12 gal-item">
      <div class="box">
        <a href="javascript:void(0)" data-toggle="modal" data-target="#1">
         <img src="images/pro3.jpg" class="img-responsive">
        </a>
        <div class="modal fade" id="1" tabindex="-1" role="dialog">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
              <div class="modal-body">
               <img src="images/pro3.jpg" class="img-responsive">
              </div>
                <div class="col-md-12 description">
                  <h4>This is the first one on my Gallery</h4>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </div>
         </td>
        
        <td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                                        <input type="checkbox" class="checkboxes" value="1">
                                                        <span></span>
                                                    </label></td>
                                                     
      </tr> -->
      
      
      
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
<script src="js/bootstrap-select.min.js"></script>
<script src="js/datepicker.js" type="text/javascript"></script>
  <script src="js/jquery-ui.js"></script>
   <script src="js/bootstrap-confirmation.min.js"></script>
   <script src="js/datatableSMR.js"></script>
  <script src="js/bootstrap-datetimepicker.min.js"></script>
       <script>
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});
</script>
<script>
	 $(function() {
    $(".datepicker").datepicker();
});
</script>
<script>


$(function(){
	$('#Showind').hide();	
$('#resrOut').click(function (){
$('#Showind').toggle();	
});
})
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
		   "iDisplayLength": -1
		});
	table.columns().eq( 0 ).each( function ( colIdx ) {
	    $( 'input:not(:checkbox)', table.column( colIdx ).header() ).on( 'keyup change', function () {
	        table
	            .column( colIdx )
	            .search( this.value )
	            .draw();
	    } );});
});
window.companyStore='${CompanyStoreDet}';
[companysCd,storeCd]=companyStore.split("-");
if(companysCd)$("#ohd_cmy_cd").val(companysCd);
if(storeCd)$("#ohd_str_cd").val(storeCd);
$("#ohd_cmy_cd,#ohd_str_cd").selectpicker("refresh");
var empDtl=JSON.parse('${empDtl}');
</script>
<script src="js/planingController.js"></script>
<script src="js/addeditdetailPage.js"></script>
</body>
</html>