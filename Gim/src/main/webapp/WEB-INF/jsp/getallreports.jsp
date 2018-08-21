<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>All Reports</title>
<script type="text/javascript" src="dwr/interface/AjaxController.js"></script>
<script type="text/javascript" src="dwr/engine.js"></script>
<script type="text/javascript" src="js/getallreports.js"></script>
   <link href="css/customefonts.css" rel="stylesheet">
<link href="css/customefonts.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/simple-line-icons.min.css" rel="stylesheet">
<script src="js/3.1.1jquery.min.js"></script>



<style>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #dddddd;
}

.table>thead>tr>th {
    vertical-align: bottom;
    border-bottom: 2px solid #ddd;
    background: #004274 !important;
    color: #fff;
}

.table-responsive {
    min-height: .01%;
    overflow-x: auto;
    width: 100%;
    margin-top: 15px;
}

input {
    color: black;
}

.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {
    padding: 3px 3px;
    line-height: 1.42857143;
    vertical-align: bottom;
}

label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 4px;
    font-weight: 700;
    font-size: 13px;
}

.col-md-6 {
    text-align: left;
}

body {
    background: #ffffff !important;
    box-shadow: -2px 3px 25px rgba(0, 0, 0, 0.02);
    color: #797979 !important;
}
#topnav .topbar-main .nav > li > a {
    padding: 8px 15px;
    position: relative;
    background: transparent !important;
}

.modal-content {
    box-shadow: 0 5px 15px transparent;
}

</style>

</head>
	<body onload="reports();getWorkerWiseReport();getWorkerWiseReportOutSideWorker();getPurityLoss();getClosingStockReports();getClosingStockReports();">
<!-- 	<body onload="getClosingStockReports()"> -->

<div class="wrapper">
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
              <li><a href="javascript:vlogut()"><i class="icon-lock"></i> Logout</a></li>
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
        <li class="active"><a href="dashboard.mm"><i class="md md-dashboard"></i>dashboard</a> </li>
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
               <li><a href="daywiseprice.mm">Day Wise Price</a></li>
                 <li><a href="alloymaster.mm">Alloy</a></li><li><a href="carat.mm">Carat</a></li>
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
       
            <li class="dropdown"> <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="md md-pages"></i>Reports</a> <ul class="dropdown-menu multi-level">
             <li><a href="closingstock.mm">CLOSING STOCK</a></li><li><a href="getallreports.mm">REPORTS</a></li>   
              
             </ul> </li><li class="navbar-c-items">
            <form role="search" onsubmit="return false" class="navbar-left app-search pull-left hidden-xs">
	              <input placeholder="Quick Search Item" class="form-control" type="text">
	              <a href="javascript:void(0)" ></a>
            </form>
          </li>
        
      </ul>
    </div>
    <!-- /.navbar-collapse --> 
  </nav>
  <!-- /.navbar --> 
</header>


		<input type="hidden" id="cmycd" value="${cmycd}">
			<div class="container-fluid">
			
			<div class="container" style="text-align: center;">
			
			
			<label>Department :</label>	<input type='text' id="dept"  onkeyup="searchInReports()" placeholder="department"/>
				
			<label>Purity :</label>	<input type='text' id="prty" onkeyup="searchInReports()" placeholder="purity"/>
				
			<label>worker :</label>	<input type='text' id="wrkr" onkeyup="searchInReports()" placeholder="worker"/>
			
			
			</div>
			
				
					<div class="container-fluid">
					<h2 style="text-align:center;">WORKER STOCK </h2>
						<div class="col-md-6">
							<h4 style="text-align:center;">COMPANY WORKER <button class="btn btn-primary btn-sm pull-right ">Export company Worker</button></h4>
							<div class="table-responsive">
								<table class="table table-bordered">
									<thead>
										<tr>
											<th>Sl.No</th>
											<th style="width: 90px;">Dept  </th>
											<th> Emp </th>
											<th>WorkType</th>
											<th>Process</th>
											<th>Purity</th>
											<th>Bal Wt</th>
											<th>Bal PG</th>
										</tr>
									</thead>
									<tbody id="workerrecords"></tbody>
								</table>
							</div>
						</div>
						<div class="col-md-6">	
						<h4 style="text-align:center;">OUTSIDE WORKER <button class="btn btn-primary btn-sm pull-right ">Export outside Worker</button></h4>
							<div class="table-responsive">
								<table class="table table-bordered">
									<thead>
										<tr>
											<th>Sl.No</th>
											<th style="width: 90px;"> Dept  </th>
											<th>Emp </th>
											<th>WorkType</th>
											<th>Process</th>
											<th>Purity</th>
											<th>Bal Wt</th>
											<th>Bal PG</th>
										</tr>
									</thead>
									<tbody id="outsideworkerrecords"></tbody>
								</table>
							</div>
						</div>
					</div>
					<div class="container">
					<div>
						<div class="col-md-6">
							<h2>LOCKER STOCK <a href="dashboard.mm"><button class="btn btn-primary btn-sm pull-right">Back</button></a><button class="btn btn-primary btn-sm pull-right " id="exportlocker" onclick="ExportRecords('Locker')">Export</button></h2>
							<div class="table-responsive" >
								<table class="table table-bordered">
									<thead>
										<tr>
											<th>Sl.No</th>
											<th><br>&nbsp;Dept &nbsp;</th>
											<th>Type</th>
											<th>Purity</th>
											<th>Bal Wt</th>
											<th>Bal PG</th>
										</tr>
									</thead>
									<tbody id="allrecords"></tbody>
								</table>
							</div>
						</div>
						<div class="col-md-6">
							<h2 style="text-align:center;">PurityLoss <button class="btn btn-primary btn-sm pull-right ">Export Prty Loss</button></h2>
								<div class="table-responsive">
									<table class="table table-bordered">
										<thead>
											<tr>
												<th>Sl.No</th>
												<th><br>&nbsp;Dept &nbsp;</th>
												<th>Expt Prty</th>
												<th>Prty Loss</th>
												<th>Bal PG</th>
											</tr>
										</thead>
										<tbody id="purityloss"></tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
					<h4 style="text-align:center;">CLOSING STOCK<button class="btn btn-primary btn-sm pull-right ">EXPORT  CLOSING STOCK</button></h4>
					<div class="table-responsive">
						<table class="table table-bordered">
							<thead>
								<tr>
									<th>Sl.No</th>
									<th>Dept</th>
									<th>Purity</th>
									<th>Bal Wt</th>
									<th>Bal PG</th>
								</tr>
							</thead>
							<tbody id="closingstockrecords"></tbody>
						</table>
					</div>
				</div>
				</div>
				
		<button type="button" id="load" class="btn btn-info btn-lg" data-toggle="modal" data-backdrop="static" data-target="#myModal" style="display: none;">Open Modal</button>
								<div class="modal fade" id="myModal" role="dialog" 	style="background: transparent;outline:none;">
									<div class="modal-dialog" style="background: transparent;">
										<div class="modal-content"	style="background: transparent; border: 0px;">
											<div class="modal-body"	style="display: block; text-align: center;">
												<div style="display: inline-block; text-align: center;">
													<img src="images/loader.gif"	class="img-responsive center-block" style="width: 100%;transform: scaleX(-1);margin-top: 20%;">
												</div>
												<div><span id="spantag" style="text-align: center;color: #fff;margin-top: 5%;font-size: 20px;"></span></div>
											</div>
										</div>
									</div>
								</div>
				
			<!-- jQuery (necessary for Bootstrap's JavaScript plugins) --> 
			<script src="js/jquery.min.js"></script> 
			<script src="js/bootstrap.min.js"></script>
			<script src="js/reportdashboard/ag-grid-enterprise.js"></script>
			<script src="js/reportdashboard/dashboardController.js"></script>
			<script src="js/w2ui.min.js"></script>				
			</body>
		</html>
