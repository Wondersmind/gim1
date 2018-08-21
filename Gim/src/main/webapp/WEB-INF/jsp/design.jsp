<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Design</title>

<script type="text/javascript" src="dwr/interface/AjaxController.js"></script>
<script type="text/javascript" src="dwr/engine.js"></script>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
    <!-- Bootstrap -->
    <link href="css/customefonts.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">

    <link href="css/simple-line-icons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/font-awesome.min.css">
     <link rel="stylesheet" href="css/font-awesome.min.css">
     <link href="css/w2ui.min.css" rel="stylesheet">

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
   <style>.btn.btn-circlesuc {border-radius: 50px !important; background: #5fbeaa !important; border-color: #ccc !important;  color: #333 !important;}

.btn-circle:hover {
	border-radius: 50px;
	background: #e6e6e6 !important;
	border-color: #ccc !important;
	color: #333 !important;
}
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

.gal-item .box{
	overflow: hidden;
    height: 33px;
    padding: inherit;
}

.w2ui-grid .w2ui-grid-body table .w2ui-col-number {
 
    height: 36px;
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
              <li class="hidden-xs"> <a href="javascript:toggleFullScreen(document.body)" id="btn-fullscreen" class="waves-effect waves-light"><i class="icon-size-fullscreen"></i></a> </li>
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
        <li class="dropdown mega-dropdown active"> <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown">Masters</a>
              
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
             <li class="emplactive"><a href="design.mm" class="emplactive">Design</a></li>
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
                      <div class="caption"> <i class="icon-social-dribbble font-dark hide"></i> <span class="caption-subject font-dark bold uppercase text-muted page-title-alt">
                        <h4 class="page-title">Design Master</h4>
                        </span> </div>
                      <div class="actions"> 
                        <a class="btn btn-circle btn-icon-only btn-default" href="importdesign.mm" data-toggle="tooltip" title="Import">
                                                <i class="icon-cloud-download"></i>
                                            </a>
                      <a class="btn btn-circle btn-icon-only btn-default" href="adddesign.mm"> <i class="icon-plus"></i> </a> 
                                        <a class="btn btn-circle btn-icon-only btn-default" href="javascript:;" id="exporttableDetail" data-toggle="tooltip" title="Export"> <i class="icon-cloud-upload"></i> </a> 
                  </div>
                  <div class="actions">
                                         <c:choose><c:when test="${SaveDesignEditResult eq true}">
                 <span id="finalSaveDesinAlert" style="color:green"><div class="alert alert-success">Updated Successfully</div></span>
                    </c:when><c:otherwise> <span id="finalSaveDesinAlert"></span></c:otherwise>
                    </c:choose></div>
                    </div>
              </div>
                 	
                  <div class="table-responsive" id="myTable">
                  <div>
            <p style="margin-left: 36%;" class="loadClass" id="LoadName"><b>Loading Please Wait...</b></p>
                    <div class="loader loadClass" style="" id="loader" >
					</div>
					</div>
               <%--  <table class="table table-bordered" id="myTable">
                      <thead>
                    <tr>
                          <th>Cmy.Nm</th>
                    <th>Pdt.Cd</th><!-- 
                          <th>Prdt Name</th> -->
                          <th>Dgn.No</th>
                          <th>Ctgy</th>
                          <th>Dpt</th>
                          <th>Dsgn.Sz</th>
                          <th>Sdt.Wgt</th>
                          <th>Min.Wgt</th>
                          <th>Max.Wgt</th>
                        <!--   <th>Image</th> -->
                          <th>Carat</th>
                         
                          <th>Manage</th>
                        </tr>
                  </thead>
                      <tbody>
                <c:forEach var="ExistDesign" items="${ExistDesignDetail}">
                    <tr>
                          <td>${ExistDesign[0]}</td>
                          <td>${ExistDesign[1]}</td>
                          <td>${ExistDesign[2]}</td>
                          <td>${ExistDesign[3]}</td>
                          <td>${ExistDesign[4]}</td>
                          <td>${ExistDesign[5]}</td>
                          <td>${ExistDesign[6]}</td>
                          <td>${ExistDesign[8]}</td>
                          <td>${ExistDesign[9]}</td>
                          <td>${ExistDesign[11]}</td>
                           <td>${ExistDesign[10]}</td>
                          <td>${ExistDesign[12]}</td>
                         <td class="text-right">
										<button type="button" class="btn btn-xs btn-default btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Edit row"  onclick="editDesignMstRec(${ExistDesign[14]})"><i class="fa fa-pencil"></i></button>
										<!--<button type="button" class="btn btn-xs btn-default btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Copy row"><i class="fa fa-copy"></i></button>-->
										<button type="button" class="btn btn-xs btn-danger btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Delete row" onclick="delDesignMstRec(${ExistDesign[14]},this)"><i class="fa fa-trash-o"></i></button>
									</td>
                        </tr>
                        </c:forEach>
                  </tbody>
                    </table> --%>
                    <script>
                  var tables='${ExistDesignDetail}'
                	  </script>
              </div>
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
<script src="js/w2ui.min.js"></script>
<script>
$(document).ready(function(){
	if(tables){
		tables=tables.replace(/\\/ig,"/");
		var res=eval(tables);
		 if(res !=null && res.length>0){
			 res.forEach((obj,index)=> obj['recid']=index);
			 var tempStorage=res;
				$("#myTable").html('<div id="grid" style="width: 100%; height: 500px;"></div>');
				var columns=[    
				                        { field: '0', caption: 'Cmy Name',type:'text',size: '120px' , sortable: true},
				                        { field: '1', caption: 'Pdct Cd',type:'text',size: '220px', sortable: true},
				                        { field: '11', caption: 'Img',type:'text',size: '70px', sortable: true,
				                        	  render: function (record, index, column_index) {
					                            	 var html = '<div class="gal-container">  <div class="col-md-12 col-sm-12 co-xs-12 gal-item">   <div class="box"> <a href="javascript:void(0)" data-toggle="modal" data-target="#img'+record[1]+'">  <img src="showImageUrl.mm?path='+record[11]+'" class="img-responsive" style=" min-width: 100px; max-width: 100px; height: 30px; margin-left: -78px; border-radius: 1px; "></a> <div class="modal fade" id="img'+record[1]+'" tabindex="-1" role="dialog"> <div class="modal-dialog" role="document"> <div class="modal-content"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">X</span></button>  <div class="modal-body"> <img src="showImageUrl.mm?path='+record[11]+'" class="img-responsive"></div> </div> </div> </div> </div></div></div>';
					                              return html;
					                            } },
				                        { field: '3',caption:'Dgn No',type:'text', sortable: true},
				                        { field: '4', caption: 'Ctgy',type:'text', sortable: true},
				                        { field: '5', caption: 'Dpt',type:'text',size: '120px', sortable: true},
				                        { field: '6',caption: 'Dgn.Sz',type:'text', sortable: true},
				                        { field: '8', caption: 'Std.Wgt',type:'float', sortable: true},
				                        { field: '9', caption: 'Min.Wgt',type:'float', sortable: true},
				                        { field: '10', caption: 'Max.Wgt',type:'float', sortable: true},
				                        { field: '12', caption: 'Carat',type:'text', sortable: true},
				                       { field: '18', caption: 'Action',type:'text',
				                            render: function (record, index, column_index) {
				                            	 var html = '<button type="button" ${LoginDet.em_emp_typ} class="btn btn-xs btn-default btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Edit row" onclick="editDesignMstRec(\''+record[14]+'\')"><i class="fa fa-pencil"></i></button>'
				                                +'&nbsp;<button type="button" ${LoginDet.em_emp_typ} class="btn btn-xs btn-danger btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Delete row" onclick="delDesignMstRec(\''+record[14]+'\',this)"><i class="fa fa-trash-o"></i></button>';
				                              
				                            	return html;
				                            } 
				                        }
				                    ];
				updateTitleAndremoveCompanyName(columns,res[0]);				
				if(w2ui.hasOwnProperty('grid')){
					  w2ui['grid'].destroy();
					}
			    $('#grid').w2grid({ 
			        name: 'grid', 
			        show: {
			        	toolbarSave: true,
			        	lineNumbers: true,
			            header     : false,
			            toolbar    : true,
			            footer     : true
			        }, 
			        reorderColumns: true,
			        columns: columns,
			        recordHeight:30,
			        searches: columns,
			        onExpand: function (event) {
			            $('#'+event.box_id).html('<div style="padding: 10px; height: 100px">Expanded content</div>');
			        },	       
			        records:res
			    }); 
			  }
	}
	else{
		$("#myTable").html('<div class="alert alert-primary" style=" background: #004274; color: white; text-align: center; font-size: large; ">...No Data Found...</div>')
	}
    $('[data-toggle="tooltip"]').tooltip(); 
});
</script>

<script>
$(function(){
	var settTime=setTimeout(resetSpan, 3000);
	$('#Showind').hide();	
$('#resrOut').click(function (){
$('#Showind').toggle();	
});
});
function resetSpan(){
	$("#finalSaveDesinAlert").html("");
}

</script>
<script src="js/masterController.js"></script>
<script src="js/body.js"></script>
</body>
</html>