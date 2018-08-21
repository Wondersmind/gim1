<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<title>dashboard</title>
<script type="text/javascript" src="dwr/interface/AjaxController.js"></script>
<script type="text/javascript" src="dwr/engine.js"></script>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- Bootstrap -->
 <link href="css/customefonts.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/themify-icons.css" rel="stylesheet">
<link href="css/simple-line-icons.min.css" rel="stylesheet">
<link href="js/reportdashboard/blue-theme.css" rel="stylesheet">
<link rel="stylesheet" href="css/font-awesome.min.css">
<!-- Resources -->
<script src="https://www.amcharts.com/lib/3/amcharts.js"></script>
<script src="https://www.amcharts.com/lib/3/serial.js"></script>
<script src="https://www.amcharts.com/lib/3/themes/light.js"></script>
<script src="https://www.amcharts.com/lib/3/plugins/export/export.min.js"></script>
<link rel="stylesheet" href="https://www.amcharts.com/lib/3/plugins/export/export.css" type="text/css" media="all" />
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
   <style>.btn.btn-circlesuc {border-radius: 50px !important; background: #5fbeaa !important; border-color: #ccc !important;  color: #333 !important;}
    .ti-user:before {
    content: "\e602";
}
    </style>
    <!-- Styles -->
<style>
#chartdiv {
	width	: 100%;
	height	: 500px;
}	
.ag-theme-fresh .ag-header {
    background-color: #004274 !important;
    color: #ffffff !important;
    font: 400 14px "Helvetica Neue", sans-serif;
    background-image: none !important;
}

.col-lg-3{
min-width:25%;
}
.row {
    margin-right: -15px;
    margin-left:0px !important; 
}

.panel-body {
    padding: 0px;
}

.npdn{
    padding: 2px;
}		
.ag-theme-fresh .ag-selection-checkbox span, .ag-theme-fresh .ag-group-expanded span, .ag-theme-fresh .ag-group-contracted span {
    margin-right: 2px !important;
}
.ag-theme-fresh .ag-cell {
    line-height: 23px;
    padding-left: 12px;
    padding-right: 12px;
    border: 1px solid transparent;
    padding-left: 4px;
    padding-right: 2px;
    padding: 0px !important;
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
<div class="wrapper">
  <div class="container-fluid">
    <div class="row">
       </div>
    <div class="row MainHdrOfDashRound" style=" display: inline-flex; overflow: auto; width: 100%; overflow-x: scroll; ">
         <c:forEach var="data" items="${DashBoadData}">
            <div class="col-md-6 col-lg-3">
        <div class="panel panel-default TopHeaderTag">
          <div class="panel-body">
            <div class="col-md-12 col-lg-12 npdn">
              <div class="row">
                <div class="col-md-4 npdn">
                <div class="box">
          <div class="box-icon rvne"> <h4 class="center-block img-responsive mrntp">${data[0]}</h4> </div>
        </div>
                </div>
                <div class="col-md-8">
                <div class="col-md-row nmrof" style="text-align: left; ">
               <span>TOT QTY&nbsp;&nbsp;&nbsp;: </span>
                <b><script>document.write(Math.round(+'${data[2]}'||0))</script></b>
                </div>
                <div class="col-md-row rvnu" style="text-align: left; ">
                 <span>STD WGT : </span>
                	<b><script>document.write((+'${data[1]}'||0).toFixed(2))</script></b>
                </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          </c:forEach>
     
    </div>
    <div class="row">
      <div class="col-md-12 col-lg-12">
        <div class="panel panel-default">
          <div class="panel-body">
            <div class="col-md-12 col-lg-12">
                    <div class="row"><div class="col-sm-6"></div><div class="col-sm-6"><div id="demo-datatables-2_filter" class="dataTables_filter"><label><input type="search" class="form-control input-sm wholesearchbox" placeholder="Search" aria-controls="demo-datatables-2"></label></div></div></div>
              <div class="table-responsive">
              	<div id="myGrid" style="height: 600px;" class="ag-theme-fresh"></div>
<!--               <table class="table table-bordered" style=" font-family: 'Montserrat', sans-serif !important; font-size: 13px !important; color: black !important; ">
    <thead>
      <tr>
      <th rowspan="2">DPT</th>
       <th rowspan="2">ORDER TYPE</th>
        <th rowspan="2">STATUS</th>
        <th rowspan="2">Name</th>
        
     <th colspan="7" class="tc">TARGET DATE</th>
  
    <th rowspan="2">Total</th>
        </tr>
         <tr>
      <th style="display: none;"></th>
       <th style="display: none;"></th>
        <th style="display: none;"></th>
        <th style="display: none;"></th>
        
     <th>1</th>
   <th>2</th>
    <th>3</th>
    <th>4</th>
    <th>5</th>
    <th>6</th>
    <th>7</th>
    <th style="display: none;"></th>
        <th style="display: none;"></th>
        
        <th style="display: none;"></th>
         <th style="display: none;"></th>
        </tr>
    </thead>
    
    
    
      <tbody>
        <tr>
            <td class="pvtRowLabel bldTd vam" rowspan="24">MS</td>
            <td class="pvtRowLabel bldTd vam" rowspan="6">MTO</td>
            <td class="pvtRowLabel bldTd vam" rowspan="3">WORKER NAME</td>
            <td class="pvtRowLabel bldTd" rowspan="1">Emp1</td>
            <td class="pvtRowLabel bldTd" rowspan="1" colspan="1">2</td>
            <td class="pvtVal row0 col0" id="1,BISK" data-value="null">1</td>
            <td class="pvtVal row0 col1" id="1,BRITANNIA" data-value="null">1</td>
            <td class="pvtVal row0 col2" id="1,MUNCH" data-value="1">1</td>
            <td class="pvtVal row0 col3" id="1,PARLE" data-value="null">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row0">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row0">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row0">1</td>
        </tr>
        
        <tr>
            <td class="pvtRowLabel bldTd" rowspan="1">Emp2</td>
            <td class="pvtRowLabel bldTd" rowspan="1">	1</td>
            <td class="pvtRowLabel bldTd" rowspan="1" colspan="1">2</td>
            <td class="pvtVal row1 col0" id="1,BISK" data-value="null">1</td>
            <td class="pvtVal row1 col1" id="1,BRITANNIA" data-value="null">1</td>
            <td class="pvtVal row1 col2" id="1,MUNCH" data-value="1">1</td>
            <td class="pvtVal row1 col3" id="1,PARLE" data-value="null">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row1">1</td>
                        <td class="pvtTotal rowTotal" data-value="1" data-for="row1">1</td>
        </tr>
         <tr>
            <td class="pvtRowLabel bldTd" rowspan="1">Emp3</td>
            <td class="pvtRowLabel bldTd" rowspan="1">1</td>
            <td class="pvtRowLabel bldTd" rowspan="1" colspan="1">2</td>
            <td class="pvtVal row1 col0" id="1,BISK" data-value="null">1</td>
            <td class="pvtVal row1 col1" id="1,BRITANNIA" data-value="null">1</td>
            <td class="pvtVal row1 col2" id="1,MUNCH" data-value="1">1</td>
            <td class="pvtVal row1 col3" id="1,PARLE" data-value="">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row1">1</td>
                        <td class="pvtTotal rowTotal" data-value="1" data-for="row1">1</td>
        </tr>
        <tr>
            <td class="pvtRowLabel bldTd" rowspan="1">CASTING</td>
            <td class="pvtRowLabel bldTd" rowspan="1" colspan="1">2</td>
            <td class="pvtVal row2 col0" id="1,BISK" data-value="null">1</td>
            <td class="pvtVal row2 col1" id="1,BRITANNIA" data-value="null">1</td>
            <td class="pvtVal row2 col2" id="1,MUNCH" data-value="1">1</td>
            <td class="pvtVal row2 col3" id="1,PARLE" data-value="null">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
        </tr>
         <tr>
            <td class="pvtRowLabel bldTd" rowspan="1">WAXING</td>
            <td class="pvtRowLabel bldTd" rowspan="1" colspan="1">2</td>
            <td class="pvtVal row2 col0" id="1,BISK" data-value="null">1</td>
            <td class="pvtVal row2 col1" id="1,BRITANNIA" data-value="null">1</td>
            <td class="pvtVal row2 col2" id="1,MUNCH" data-value="1">1</td>
            <td class="pvtVal row2 col3" id="1,PARLE" data-value="null">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
        </tr>
         <tr>
            <td class="pvtRowLabel bldTd" rowspan="1">REJECTION</td>
            <td class="pvtRowLabel bldTd" rowspan="1" colspan="1">2</td>
            <td class="pvtVal row2 col0" id="1,BISK" data-value="null">1</td>
            <td class="pvtVal row2 col1" id="1,BRITANNIA" data-value="null">1</td>
            <td class="pvtVal row2 col2" id="1,MUNCH" data-value="1">1</td>
            <td class="pvtVal row2 col3" id="1,PARLE" data-value="null">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
          <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>   
          <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
          <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>         
        </tr>
      
      
      
        <tr>

            <td class="pvtRowLabel bldTd vam" rowspan="6">MTBI</td>
            <td class="pvtRowLabel bldTd vam" rowspan="3">WORKER NAME</td>
            <td class="pvtRowLabel bldTd" rowspan="1">Emp1</td>
            <td class="pvtRowLabel bldTd" rowspan="1" colspan="1">2</td>
            <td class="pvtVal row0 col0" id="1,BISK" data-value="null">1</td>
            <td class="pvtVal row0 col1" id="1,BRITANNIA" data-value="null">1</td>
            <td class="pvtVal row0 col2" id="1,MUNCH" data-value="1">1</td>
            <td class="pvtVal row0 col3" id="1,PARLE" data-value="null">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row0">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row0">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row0">1</td>
        </tr>
        
        <tr>
            <td class="pvtRowLabel bldTd" rowspan="1">Emp2</td>
            <td class="pvtRowLabel bldTd" rowspan="1">1</td>
            <td class="pvtRowLabel bldTd" rowspan="1" colspan="1">2</td>
            <td class="pvtVal row1 col0" id="1,BISK" data-value="null">1</td>
            <td class="pvtVal row1 col1" id="1,BRITANNIA" data-value="null">1</td>
            <td class="pvtVal row1 col2" id="1,MUNCH" data-value="1">1</td>
            <td class="pvtVal row1 col3" id="1,PARLE" data-value="null">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row1">1</td>
                        <td class="pvtTotal rowTotal" data-value="1" data-for="row1">1</td>
        </tr>
         <tr>
            <td class="pvtRowLabel bldTd" rowspan="1">Emp3</td>
            <td class="pvtRowLabel bldTd" rowspan="1">1</td>
            <td class="pvtRowLabel bldTd" rowspan="1" colspan="1">2</td>
            <td class="pvtVal row1 col0" id="1,BISK" data-value="null">1</td>
            <td class="pvtVal row1 col1" id="1,BRITANNIA" data-value="null">1</td>
            <td class="pvtVal row1 col2" id="1,MUNCH" data-value="1">1</td>
            <td class="pvtVal row1 col3" id="1,PARLE" data-value="">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row1">1</td>
                        <td class="pvtTotal rowTotal" data-value="1" data-for="row1">1</td>
        </tr>
        <tr>
            <td class="pvtRowLabel bldTd" rowspan="1">CASTING</td>
            <td class="pvtRowLabel bldTd" rowspan="1" colspan="1">2</td>
            <td class="pvtVal row2 col0" id="1,BISK" data-value="null">1</td>
            <td class="pvtVal row2 col1" id="1,BRITANNIA" data-value="null">1</td>
            <td class="pvtVal row2 col2" id="1,MUNCH" data-value="1">1</td>
            <td class="pvtVal row2 col3" id="1,PARLE" data-value="null">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
        </tr>
         <tr>
            <td class="pvtRowLabel bldTd" rowspan="1">WAXING</td>
            <td class="pvtRowLabel bldTd" rowspan="1" colspan="1">2</td>
            <td class="pvtVal row2 col0" id="1,BISK" data-value="null">1</td>
            <td class="pvtVal row2 col1" id="1,BRITANNIA" data-value="null">1</td>
            <td class="pvtVal row2 col2" id="1,MUNCH" data-value="1">1</td>
            <td class="pvtVal row2 col3" id="1,PARLE" data-value="null">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
        </tr>
         <tr>
            <td class="pvtRowLabel bldTd" rowspan="1">REJECTION</td>
            <td class="pvtRowLabel bldTd" rowspan="1" colspan="1">2</td>
            <td class="pvtVal row2 col0" id="1,BISK" data-value="null">1</td>
            <td class="pvtVal row2 col1" id="1,BRITANNIA" data-value="null">1</td>
            <td class="pvtVal row2 col2" id="1,MUNCH" data-value="1">1</td>
            <td class="pvtVal row2 col3" id="1,PARLE" data-value="null">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
          <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>   
          <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
          <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>         
        </tr>
      
      
      
      
              <tr>

            <td class="pvtRowLabel bldTd vam" rowspan="6">MJD</td>
            <td class="pvtRowLabel bldTd vam" rowspan="3">WORKER NAME</td>
            <td class="pvtRowLabel bldTd" rowspan="1">Emp1</td>
            <td class="pvtRowLabel bldTd" rowspan="1" colspan="1">2</td>
            <td class="pvtVal row0 col0" id="1,BISK" data-value="null">1</td>
            <td class="pvtVal row0 col1" id="1,BRITANNIA" data-value="null">1</td>
            <td class="pvtVal row0 col2" id="1,MUNCH" data-value="1">1</td>
            <td class="pvtVal row0 col3" id="1,PARLE" data-value="null">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row0">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row0">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row0">1</td>
        </tr>
        
        <tr>
            <td class="pvtRowLabel bldTd" rowspan="1">Emp2</td>
            <td class="pvtRowLabel bldTd" rowspan="1">1</td>
            <td class="pvtRowLabel bldTd" rowspan="1" colspan="1">2</td>
            <td class="pvtVal row1 col0" id="1,BISK" data-value="null">1</td>
            <td class="pvtVal row1 col1" id="1,BRITANNIA" data-value="null">1</td>
            <td class="pvtVal row1 col2" id="1,MUNCH" data-value="1">1</td>
            <td class="pvtVal row1 col3" id="1,PARLE" data-value="null">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row1">1</td>
                        <td class="pvtTotal rowTotal" data-value="1" data-for="row1">1</td>
        </tr>
         <tr>
            <td class="pvtRowLabel bldTd" rowspan="1">Emp3</td>
            <td class="pvtRowLabel bldTd" rowspan="1">1</td>
            <td class="pvtRowLabel bldTd" rowspan="1" colspan="1">2</td>
            <td class="pvtVal row1 col0" id="1,BISK" data-value="null">1</td>
            <td class="pvtVal row1 col1" id="1,BRITANNIA" data-value="null">1</td>
            <td class="pvtVal row1 col2" id="1,MUNCH" data-value="1">1</td>
            <td class="pvtVal row1 col3" id="1,PARLE" data-value="">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row1">1</td>
                        <td class="pvtTotal rowTotal" data-value="1" data-for="row1">1</td>
        </tr>
        <tr>
            <td class="pvtRowLabel bldTd" rowspan="1">CASTING</td>
            <td class="pvtRowLabel bldTd" rowspan="1" colspan="1">2</td>
            <td class="pvtVal row2 col0" id="1,BISK" data-value="null">1</td>
            <td class="pvtVal row2 col1" id="1,BRITANNIA" data-value="null">1</td>
            <td class="pvtVal row2 col2" id="1,MUNCH" data-value="1">1</td>
            <td class="pvtVal row2 col3" id="1,PARLE" data-value="null">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
        </tr>
         <tr>
            <td class="pvtRowLabel bldTd" rowspan="1">WAXING</td>
            <td class="pvtRowLabel bldTd" rowspan="1" colspan="1">2</td>
            <td class="pvtVal row2 col0" id="1,BISK" data-value="null">1</td>
            <td class="pvtVal row2 col1" id="1,BRITANNIA" data-value="null">1</td>
            <td class="pvtVal row2 col2" id="1,MUNCH" data-value="1">1</td>
            <td class="pvtVal row2 col3" id="1,PARLE" data-value="null">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
        </tr>
         <tr>
            <td class="pvtRowLabel bldTd" rowspan="1">REJECTION</td>
            <td class="pvtRowLabel bldTd" rowspan="1" colspan="1">2</td>
            <td class="pvtVal row2 col0" id="1,BISK" data-value="null">1</td>
            <td class="pvtVal row2 col1" id="1,BRITANNIA" data-value="null">1</td>
            <td class="pvtVal row2 col2" id="1,MUNCH" data-value="1">1</td>
            <td class="pvtVal row2 col3" id="1,PARLE" data-value="null">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
          <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>   
          <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
          <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>         
        </tr>
      
      
      
      
      
      
        <tr>
            <td class="pvtTotalLabel bldTd" colspan="10">MS TOTAL QTY</td>
           
            <td class="pvtGrandTotal" data-value="3">Total qty</td>
        </tr>
        
                <tr>
            <td class="pvtTotalLabel bldTd" colspan="10">MS TOTAL WEIGHT</td>
           
            <td class="pvtGrandTotal" data-value="3">Total Weight</td>
        </tr>
        
    </tbody>
    
    
    
    
          <tbody style="border-top: 1px solid #ddd;">
        <tr>
            <td class="pvtRowLabel bldTd vam" rowspan="24">CAST</td>
            <td class="pvtRowLabel bldTd vam" rowspan="6">MTO</td>
            <td class="pvtRowLabel bldTd vam" rowspan="3">WORKER NAME</td>
            <td class="pvtRowLabel bldTd" rowspan="1">Emp1</td>
            <td class="pvtRowLabel bldTd" rowspan="1" colspan="1">2</td>
            <td class="pvtVal row0 col0" id="1,BISK" data-value="null">1</td>
            <td class="pvtVal row0 col1" id="1,BRITANNIA" data-value="null">1</td>
            <td class="pvtVal row0 col2" id="1,MUNCH" data-value="1">1</td>
            <td class="pvtVal row0 col3" id="1,PARLE" data-value="null">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row0">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row0">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row0">1</td>
        </tr>
        
        <tr>
            <td class="pvtRowLabel bldTd" rowspan="1">Emp2</td>
            <td class="pvtRowLabel bldTd" rowspan="1">	1</td>
            <td class="pvtRowLabel bldTd" rowspan="1" colspan="1">2</td>
            <td class="pvtVal row1 col0" id="1,BISK" data-value="null">1</td>
            <td class="pvtVal row1 col1" id="1,BRITANNIA" data-value="null">1</td>
            <td class="pvtVal row1 col2" id="1,MUNCH" data-value="1">1</td>
            <td class="pvtVal row1 col3" id="1,PARLE" data-value="null">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row1">1</td>
                        <td class="pvtTotal rowTotal" data-value="1" data-for="row1">1</td>
        </tr>
         <tr>
            <td class="pvtRowLabel bldTd" rowspan="1">Emp3</td>
            <td class="pvtRowLabel bldTd" rowspan="1">1</td>
            <td class="pvtRowLabel bldTd" rowspan="1" colspan="1">2</td>
            <td class="pvtVal row1 col0" id="1,BISK" data-value="null">1</td>
            <td class="pvtVal row1 col1" id="1,BRITANNIA" data-value="null">1</td>
            <td class="pvtVal row1 col2" id="1,MUNCH" data-value="1">1</td>
            <td class="pvtVal row1 col3" id="1,PARLE" data-value="">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row1">1</td>
                        <td class="pvtTotal rowTotal" data-value="1" data-for="row1">1</td>
        </tr>
        <tr>
            <td class="pvtRowLabel bldTd" rowspan="1">CASTING</td>
            <td class="pvtRowLabel bldTd" rowspan="1" colspan="1">2</td>
            <td class="pvtVal row2 col0" id="1,BISK" data-value="null">1</td>
            <td class="pvtVal row2 col1" id="1,BRITANNIA" data-value="null">1</td>
            <td class="pvtVal row2 col2" id="1,MUNCH" data-value="1">1</td>
            <td class="pvtVal row2 col3" id="1,PARLE" data-value="null">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
        </tr>
         <tr>
            <td class="pvtRowLabel bldTd" rowspan="1">WAXING</td>
            <td class="pvtRowLabel bldTd" rowspan="1" colspan="1">2</td>
            <td class="pvtVal row2 col0" id="1,BISK" data-value="null">1</td>
            <td class="pvtVal row2 col1" id="1,BRITANNIA" data-value="null">1</td>
            <td class="pvtVal row2 col2" id="1,MUNCH" data-value="1">1</td>
            <td class="pvtVal row2 col3" id="1,PARLE" data-value="null">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
        </tr>
         <tr>
            <td class="pvtRowLabel bldTd" rowspan="1">REJECTION</td>
            <td class="pvtRowLabel bldTd" rowspan="1" colspan="1">2</td>
            <td class="pvtVal row2 col0" id="1,BISK" data-value="null">1</td>
            <td class="pvtVal row2 col1" id="1,BRITANNIA" data-value="null">1</td>
            <td class="pvtVal row2 col2" id="1,MUNCH" data-value="1">1</td>
            <td class="pvtVal row2 col3" id="1,PARLE" data-value="null">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
          <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>   
          <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
          <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>         
        </tr>
      
      
      
        <tr>

            <td class="pvtRowLabel bldTd vam" rowspan="6">MTBI</td>
            <td class="pvtRowLabel bldTd vam" rowspan="3">WORKER NAME</td>
            <td class="pvtRowLabel bldTd" rowspan="1">Emp1</td>
            <td class="pvtRowLabel bldTd" rowspan="1" colspan="1">2</td>
            <td class="pvtVal row0 col0" id="1,BISK" data-value="null">1</td>
            <td class="pvtVal row0 col1" id="1,BRITANNIA" data-value="null">1</td>
            <td class="pvtVal row0 col2" id="1,MUNCH" data-value="1">1</td>
            <td class="pvtVal row0 col3" id="1,PARLE" data-value="null">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row0">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row0">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row0">1</td>
        </tr>
        
        <tr>
            <td class="pvtRowLabel bldTd" rowspan="1">Emp2</td>
            <td class="pvtRowLabel bldTd" rowspan="1">1</td>
            <td class="pvtRowLabel bldTd" rowspan="1" colspan="1">2</td>
            <td class="pvtVal row1 col0" id="1,BISK" data-value="null">1</td>
            <td class="pvtVal row1 col1" id="1,BRITANNIA" data-value="null">1</td>
            <td class="pvtVal row1 col2" id="1,MUNCH" data-value="1">1</td>
            <td class="pvtVal row1 col3" id="1,PARLE" data-value="null">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row1">1</td>
                        <td class="pvtTotal rowTotal" data-value="1" data-for="row1">1</td>
        </tr>
         <tr>
            <td class="pvtRowLabel bldTd" rowspan="1">Emp3</td>
            <td class="pvtRowLabel bldTd" rowspan="1">1</td>
            <td class="pvtRowLabel bldTd" rowspan="1" colspan="1">2</td>
            <td class="pvtVal row1 col0" id="1,BISK" data-value="null">1</td>
            <td class="pvtVal row1 col1" id="1,BRITANNIA" data-value="null">1</td>
            <td class="pvtVal row1 col2" id="1,MUNCH" data-value="1">1</td>
            <td class="pvtVal row1 col3" id="1,PARLE" data-value="">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row1">1</td>
                        <td class="pvtTotal rowTotal" data-value="1" data-for="row1">1</td>
        </tr>
        <tr>
            <td class="pvtRowLabel bldTd" rowspan="1">CASTING</td>
            <td class="pvtRowLabel bldTd" rowspan="1" colspan="1">2</td>
            <td class="pvtVal row2 col0" id="1,BISK" data-value="null">1</td>
            <td class="pvtVal row2 col1" id="1,BRITANNIA" data-value="null">1</td>
            <td class="pvtVal row2 col2" id="1,MUNCH" data-value="1">1</td>
            <td class="pvtVal row2 col3" id="1,PARLE" data-value="null">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
        </tr>
         <tr>
            <td class="pvtRowLabel bldTd" rowspan="1">WAXING</td>
            <td class="pvtRowLabel bldTd" rowspan="1" colspan="1">2</td>
            <td class="pvtVal row2 col0" id="1,BISK" data-value="null">1</td>
            <td class="pvtVal row2 col1" id="1,BRITANNIA" data-value="null">1</td>
            <td class="pvtVal row2 col2" id="1,MUNCH" data-value="1">1</td>
            <td class="pvtVal row2 col3" id="1,PARLE" data-value="null">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
        </tr>
         <tr>
            <td class="pvtRowLabel bldTd" rowspan="1">REJECTION</td>
            <td class="pvtRowLabel bldTd" rowspan="1" colspan="1">2</td>
            <td class="pvtVal row2 col0" id="1,BISK" data-value="null">1</td>
            <td class="pvtVal row2 col1" id="1,BRITANNIA" data-value="null">1</td>
            <td class="pvtVal row2 col2" id="1,MUNCH" data-value="1">1</td>
            <td class="pvtVal row2 col3" id="1,PARLE" data-value="null">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
          <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>   
          <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
          <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>         
        </tr>
      
      
      
      
              <tr>

            <td class="pvtRowLabel bldTd vam" rowspan="6">MJD</td>
            <td class="pvtRowLabel bldTd vam" rowspan="3">WORKER NAME</td>
            <td class="pvtRowLabel bldTd" rowspan="1">Emp1</td>
            <td class="pvtRowLabel bldTd" rowspan="1" colspan="1">2</td>
            <td class="pvtVal row0 col0" id="1,BISK" data-value="null">1</td>
            <td class="pvtVal row0 col1" id="1,BRITANNIA" data-value="null">1</td>
            <td class="pvtVal row0 col2" id="1,MUNCH" data-value="1">1</td>
            <td class="pvtVal row0 col3" id="1,PARLE" data-value="null">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row0">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row0">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row0">1</td>
        </tr>
        
        <tr>
            <td class="pvtRowLabel bldTd" rowspan="1">Emp2</td>
            <td class="pvtRowLabel bldTd" rowspan="1">1</td>
            <td class="pvtRowLabel bldTd" rowspan="1" colspan="1">2</td>
            <td class="pvtVal row1 col0" id="1,BISK" data-value="null">1</td>
            <td class="pvtVal row1 col1" id="1,BRITANNIA" data-value="null">1</td>
            <td class="pvtVal row1 col2" id="1,MUNCH" data-value="1">1</td>
            <td class="pvtVal row1 col3" id="1,PARLE" data-value="null">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row1">1</td>
                        <td class="pvtTotal rowTotal" data-value="1" data-for="row1">1</td>
        </tr>
         <tr>
            <td class="pvtRowLabel bldTd" rowspan="1">Emp3</td>
            <td class="pvtRowLabel bldTd" rowspan="1">1</td>
            <td class="pvtRowLabel bldTd" rowspan="1" colspan="1">2</td>
            <td class="pvtVal row1 col0" id="1,BISK" data-value="null">1</td>
            <td class="pvtVal row1 col1" id="1,BRITANNIA" data-value="null">1</td>
            <td class="pvtVal row1 col2" id="1,MUNCH" data-value="1">1</td>
            <td class="pvtVal row1 col3" id="1,PARLE" data-value="">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row1">1</td>
                        <td class="pvtTotal rowTotal" data-value="1" data-for="row1">1</td>
        </tr>
        <tr>
            <td class="pvtRowLabel bldTd" rowspan="1">CASTING</td>
            <td class="pvtRowLabel bldTd" rowspan="1" colspan="1">2</td>
            <td class="pvtVal row2 col0" id="1,BISK" data-value="null">1</td>
            <td class="pvtVal row2 col1" id="1,BRITANNIA" data-value="null">1</td>
            <td class="pvtVal row2 col2" id="1,MUNCH" data-value="1">1</td>
            <td class="pvtVal row2 col3" id="1,PARLE" data-value="null">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
        </tr>
         <tr>
            <td class="pvtRowLabel bldTd" rowspan="1">WAXING</td>
            <td class="pvtRowLabel bldTd" rowspan="1" colspan="1">2</td>
            <td class="pvtVal row2 col0" id="1,BISK" data-value="null">1</td>
            <td class="pvtVal row2 col1" id="1,BRITANNIA" data-value="null">1</td>
            <td class="pvtVal row2 col2" id="1,MUNCH" data-value="1">1</td>
            <td class="pvtVal row2 col3" id="1,PARLE" data-value="null">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
        </tr>
         <tr>
            <td class="pvtRowLabel bldTd" rowspan="1">REJECTION</td>
            <td class="pvtRowLabel bldTd" rowspan="1" colspan="1">2</td>
            <td class="pvtVal row2 col0" id="1,BISK" data-value="null">1</td>
            <td class="pvtVal row2 col1" id="1,BRITANNIA" data-value="null">1</td>
            <td class="pvtVal row2 col2" id="1,MUNCH" data-value="1">1</td>
            <td class="pvtVal row2 col3" id="1,PARLE" data-value="null">1</td>
            <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
          <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>   
          <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>
          <td class="pvtTotal rowTotal" data-value="1" data-for="row2">1</td>         
        </tr>
      
      
      
      
      
      
        <tr>
            <td class="pvtTotalLabel bldTd" colspan="10">CAST TOTAL QTY</td>
           
            <td class="pvtGrandTotal" data-value="3">Cast Total qty</td>
        </tr>
        
                <tr>
            <td class="pvtTotalLabel bldTd" colspan="10">CAST TOTAL WEIGHT</td>
           
            <td class="pvtGrandTotal" data-value="3">Cast Total Weight</td>
        </tr>
        
        
        <tr>
            <td class="pvtTotalLabel bldTd" colspan="10">MARIJO TOTAL QTY</td>
           
            <td class="pvtGrandTotal" data-value="3">Marijo Total qty</td>
        </tr>
        
                <tr>
            <td class="pvtTotalLabel bldTd" colspan="10">MARIJO TOTAL WEIGHT</td>
           
            <td class="pvtGrandTotal" data-value="3">Marijo Total Weight</td>
        </tr>
        
    </tbody>
    
    
    
  </table>
   -->
  
  
  
  
  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
    <div class="col-md-12 col-lg-12">
    <div class="panel panel-default">
          <div class="panel-body">
    <div id="chartdiv"></div>
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
<script src="js/reportdashboard/ag-grid-enterprise.js"></script>
<script src="js/reportdashboard/dashboardController.js"></script>
<script src="js/w2ui.min.js"></script>
<!-- Chart code -->
<script>
var chart = AmCharts.makeChart("chartdiv", {
    "type": "serial",
    "theme": "light",
    "legend": {
        "useGraphSettings": true
    },
    "dataProvider": [{
        "year": 1930,
        "italy": 1,
        "germany": 5,
        "uk": 3
    }, {
        "year": 1934,
        "italy": 1,
        "germany": 2,
        "uk": 6
    }, {
        "year": 1938,
        "italy": 2,
        "germany": 3,
        "uk": 1
    }, {
        "year": 1950,
        "italy": 3,
        "germany": 4,
        "uk": 1
    }, {
        "year": 1954,
        "italy": 5,
        "germany": 1,
        "uk": 2
    }, {
        "year": 1958,
        "italy": 3,
        "germany": 2,
        "uk": 1
    }, {
        "year": 1962,
        "italy": 1,
        "germany": 2,
        "uk": 3
    }, {
        "year": 1966,
        "italy": 2,
        "germany": 1,
        "uk": 5
    }, {
        "year": 1970,
        "italy": 3,
        "germany": 5,
        "uk": 2
    }, {
        "year": 1974,
        "italy": 4,
        "germany": 3,
        "uk": 6
    }, {
        "year": 1978,
        "italy": 1,
        "germany": 2,
        "uk": 4
    }],
    "valueAxes": [{
        "integersOnly": true,
        "maximum": 6,
        "minimum": 1,
        "reversed": true,
        "axisAlpha": 0,
        "dashLength": 5,
        "gridCount": 10,
        "position": "left",
        "title": "Place taken"
    }],
    "startDuration": 0.5,
    "graphs": [{
        "balloonText": "place taken by Italy in [[category]]: [[value]]",
        "bullet": "round",
        "hidden": true,
        "title": "Italy",
        "valueField": "italy",
		"fillAlphas": 0
    }, {
        "balloonText": "place taken by Germany in [[category]]: [[value]]",
        "bullet": "round",
        "title": "Germany",
        "valueField": "germany",
		"fillAlphas": 0
    }, {
        "balloonText": "place taken by UK in [[category]]: [[value]]",
        "bullet": "round",
        "title": "United Kingdom",
        "valueField": "uk",
		"fillAlphas": 0
    }],
    "chartCursor": {
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "year",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0,
        "fillAlpha": 0.05,
        "fillColor": "#000000",
        "gridAlpha": 0,
        "position": "top"
    },
    "export": {
    	"enabled": true,
        "position": "bottom-right"
     }
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
    function vlogut(){
    window.location.href='<c:url value="j_spring_security_logout"/>';
    }
    window.tableData='${DashBoadDataTableJSON}'||'[["TQ","MTBI",-33,"1","Worker_SM"],["TQ","MTO",-29,"1","Worker_SM"],["TQ","MTO",13,"1","LAXRAM"],["TQ","RMST",13,"1","LAXRAM"],["TQ","SWELLS",13,"1","LAXRAM"],["TQ","MTO",2,"1","UNKNOWN"],["TQ","CDGT",-48,"1","UNKNOWN"],["TQ","MTO",-132,"1","Worker_SM"],["TQ","MTBI",14,"1","LAXRAM"],["TQ","MTBI",4,"1","LAXRAM"],["TQ","RMST",18,"1","LAXRAM"],["TQ","MTO",4,"1","LAXRAM"],["TQ","SWELLS",4,"1","LAXRAM"],["MS","CDGT",-154,"1","UNKNOWN"],["TQ","MTO",-160,"1","Worker_SM"],["GP","RMST",18,"1","LAXRAM"],["TQ","MTBI",13,"1","LAXRAM"],["TQ","CDGT",-20,"1","UNKNOWN"],["TQ","MTBI",-43109,"1","Worker_SM"],["TQ","CDGT",-43109,"1","UNKNOWN"],["TQ","MTO",-48,"1","Worker_SM"],["TQ","MTBI",-43109,"1","Worker_SM"],["TQ","MTBI",-43109,"1","Worker_SM"],["TQ","MTO",-12,"1","Worker_SM"],["TQ","RMST",-57,"1","UNKNOWN"],["MS","MTO",-77,"1","Worker_SM"],["MS","CDGT",13,"1","LAXRAM"],["MS","RMST",-27,"1","UNKNOWN"],["MS","CDGT",-43109,"1","UNKNOWN"],["MS","MTBI",-43109,"1","Worker_SM"],["MS","MTBI",-43109,"1","Worker_SM"],["MS","MTBI",-43109,"1","Worker_SM"],["TQ","SWELLS",13,"1","LAXRAM"],["MS","MTO",13,"1","LAXRAM"],["MS","MTBI",-74,"1","Worker_SM"],["TQ","MTO",-34,"1","Worker_SM"],["TQ","CDGT",-88,"1","UNKNOWN"],["TQ","MTO",-51,"1","Worker_SM"],["TQ","CDGT",-43109,"1","UNKNOWN"],["TQ","MTBI",-43109,"1","Worker_SM"],["TQ","CDGT",-59,"1","UNKNOWN"],["TQ","MTBI",13,"1","LAXRAM"],["TQ","MTBI",13,"1","LAXRAM"],["TQ","MTBI",-43109,"1","Worker_SM"],["TQ","RMST",12,"1","LAXRAM"],["TQ","MTBI",-43109,"1","Worker_SM"],["TQ","MTBI",-43109,"1","Worker_SM"],["TQ","MTBI",-43109,"1","Worker_SM"],["TQ","MTBI",13,"1","LAXRAM"],["MS","MTO",-55,"1","UNKNOWN"],["MS","MTBI",-43109,"1","UNKNOWN"]]';
   $(function(){
	   
	   if($.trim($(".MainHdrOfDashRound").html())==''){
	    var dat='<div class="col-md-6 col-lg-3"> <div class="panel panel-default TopHeaderTag"> <div class="panel-body"> <div class="col-md-12 col-lg-12 npdn" > <div class="row"> <div class="col-md-4 npdn"> <div class="box"> <div class="box-icon rvne"> <h4 class="center-block img-responsive mrntp">CDGT</h4> </div> </div> </div> <div class="col-md-8"> <div class="col-md-row nmrof" style="text-align: left; "> <span>TOT QTY&nbsp;&nbsp;&nbsp;: </span> <b>8</b> </div> <div class="col-md-row rvnu" style="text-align: left; "> <span>STD WGT : </span> <b>143.72</b> </div> </div> </div> </div> </div> </div> </div><div class="col-md-6 col-lg-3"> <div class="panel panel-default TopHeaderTag"> <div class="panel-body"> <div class="col-md-12 col-lg-12 npdn"> <div class="row"> <div class="col-md-4 npdn"> <div class="box"> <div class="box-icon rvne"> <h4 class="center-block img-responsive mrntp">CDGT</h4> </div> </div> </div> <div class="col-md-8"> <div class="col-md-row nmrof" style="text-align: left; "> <span>TOT QTY&nbsp;&nbsp;&nbsp;: </span> <b>8</b> </div> <div class="col-md-row rvnu" style="text-align: left; "> <span>STD WGT : </span> <b>143.72</b> </div> </div> </div> </div> </div> </div> </div><div class="col-md-6 col-lg-3"> <div class="panel panel-default TopHeaderTag"> <div class="panel-body"> <div class="col-md-12 col-lg-12 npdn"> <div class="row"> <div class="col-md-4 npdn"> <div class="box"> <div class="box-icon rvne"> <h4 class="center-block img-responsive mrntp">CDGT</h4> </div> </div> </div> <div class="col-md-8"> <div class="col-md-row nmrof" style="text-align: left; "> <span>TOT QTY&nbsp;&nbsp;&nbsp;: </span> <b>8</b> </div> <div class="col-md-row rvnu" style="text-align: left; "> <span>STD WGT : </span> <b>143.72</b> </div> </div> </div> </div> </div> </div> </div><div class="col-md-6 col-lg-3"> <div class="panel panel-default TopHeaderTag"> <div class="panel-body"> <div class="col-md-12 col-lg-12 npdn"> <div class="row"> <div class="col-md-4 npdn"> <div class="box"> <div class="box-icon rvne"> <h4 class="center-block img-responsive mrntp">CDGT</h4> </div> </div> </div> <div class="col-md-8"> <div class="col-md-row nmrof" style="text-align: left; "> <span>TOT QTY&nbsp;&nbsp;&nbsp;: </span> <b>8</b> </div> <div class="col-md-row rvnu" style="text-align: left; "> <span>STD WGT : </span> <b>143.72</b> </div> </div> </div> </div> </div> </div> </div>';	
	     $(".MainHdrOfDashRound").html(dat);
	   }
   });
   

   var cmy='${LoginDet.em_cmy_cd}';

 
</script>
</body>
</html>