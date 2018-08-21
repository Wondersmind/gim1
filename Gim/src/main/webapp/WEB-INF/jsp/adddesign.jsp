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
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <script src="js/3.1.1jquery.min.js"></script>
    <link href="css/simple-line-icons.min.css" rel="stylesheet">
    <link href="css/datepicker.css" type="text/css" rel="stylesheet">
<script src="js/datepicker.js" type="text/javascript"></script>
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet">
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="css/bootstrap-select.min.css">
 <link rel="stylesheet" href="css/jquery-ui.css">
<!-- Latest compiled and minified JavaScript -->
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
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
.nav-tabs {
    border-bottom: 1px solid #e7ecf1 !important;
}
.nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover {
    color: #555 !important;
    cursor: default;
    background-color: #fff !important;
    border: 1px solid #e7ecf1 !important;
    border-bottom-color: transparent !important;
    border-top-left-radius: 2px !important;
    border-top-right-radius: 2px !important;
}
.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {
	padding-bottom: 1px !important;
	padding-top: 1px !important;
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
        <li class="dropdown mega-dropdown active">
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
                        <h4 class="page-title">Add Design</h4>
                        </span> </div>
                     <div class="actions">
                     <a class="btn btn-circle btn-icon-only btn-default" id="resrOut" data-toggle="tooltip" title="New">
                                                <i class="icon-plus"></i>
                                            </a>
                                             <a class="btn btn-circle btn-icon-only btn-default" href="javascript:adddesignProduct()" id="saveButtonInDesignPro" data-toggle="tooltip" title="Save">
                                                <i class="icon-doc"></i>
                                            </a>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" id="resrOut" data-toggle="tooltip" title="Print">
                                                <i class="icon-printer"></i>
                                                </a>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" data-toggle="tooltip" title="Authorization">
                                                <i class="icon-shield"></i>
                                            </a>
                                          
                                            <a class="btn btn-circle btn-icon-only btn-default" href="adddesign.mm" data-toggle="tooltip" title="Delete!">
                                                <i class="icon-trash"></i> </a>
                                                <a class="btn btn-circle btn-icon-only btn-default" href="design.mm" id="resrOut" data-toggle="tooltip" title="Existing">
                                                <i class="icon-logout"></i>
                                            </a>
                                           
                                        </div>
                                          <div class="actions">
                                         <c:choose><c:when test="${SaveDesignResult eq true}">
                 <span id="finalSaveDesinAlert" style="color:green"><div class="alert alert-success">Saved Successfully</div></span>
                    </c:when><c:otherwise> <span id="finalSaveDesinAlert"></span></c:otherwise>
                    </c:choose></div>
                    </div>
              </div>
                  <form class="form-horizontal" onsubmit="return false">
                    <button style="display:none" type="submit" id="submitterDesignForm"></button>
                  <div class="form-group">
                                 <div class="col-md-2">
                                <label class="control-label">Company Name</label>
                                </div>
                                <div class="col-md-10">
                                <select class="form-control" required="required" id="companyCode">
                               <option value="">Select Company</option>
                              <c:forEach var="ExistCom" items="${ExistComDet}">
                               <option value="${ExistCom.cm_cmy_cd}">${ExistCom.cm_cmy_nm}</option>
                               </c:forEach>
                                </select>
                                </div>
                                </div>
                <div class="form-group">
                      <div class="col-md-2">
                    <label class="control-label">Product Code</label>
                  </div>
                      <div class="col-md-4">
                    <input type="text" class="form-control" placeholder="Product Code" required="required" id="productCode" value="${DgnPdtCdAutoGnId}">
                  </div>
                      <div class="col-md-2">
                    <label class="control-label">Product Name</label>
                  </div>
                      <div class="col-md-4">
                    <input type="text" class="form-control" placeholder="Product Name" id="productName">
                  </div>
                    </div>
                <div class="form-group">
                      <div class="col-md-2">
                    <label class="control-label">Design No</label>
                  </div>
                      <div class="col-md-4">
                    <input type="text"  class="form-control" placeholder="Design No" required="required" id="designNo">
                  </div>
                      <div class="col-md-2">
                    <label class="control-label">Category</label>
                  </div>
                      <div class="col-md-4">
                    <input type="text" class="form-control" placeholder="Category" id="categoryName">
                  </div>
                    </div>
                <div class="form-group">
                      <div class="col-md-2">
                    <label class="control-label">Department</label>
                  </div>
                      <div class="col-md-4">
                   <select class="form-control" required="required" id="departMentCd">
                        	 <option value="">Select DepartMent</option>
										 <c:forEach var="ExistDpt" items="${ExistDptDet}">
										  <option value="${ExistDpt.dm_dpt_cd}">${ExistDpt.dm_dpt_nm}</option>
										  </c:forEach>
                        </select>
                  </div>
                      <div class="col-md-2">
                    <label class="control-label">Type Of Product</label>
                  </div>
                      <div class="col-md-4">
                   <input type="text" class="form-control" placeholder="Type Of Product" id="typeOfProduct">
                  </div>
                    </div>
                <div class="form-group">
                      <div class="col-md-2">
                    <label class="control-label">Design Size</label>
                  </div>
                      <div class="col-md-4">
                    <input type="text" class="form-control" placeholder="Design Size" id="designSize">
                  </div>
                      <div class="col-md-2">
                    <label class="control-label">UOM</label>
                  </div>
                      <div class="col-md-4">
                       <select class="form-control" id="uomCode">
                        	 <option value="">Select Uom</option>
										 <c:forEach var="ExistUom" items="${ExistUomDet}">
										  <option value="${ExistUom.um_uom_cd}">${ExistUom.um_uom_nm}</option>
										  </c:forEach>
                        </select>
                  </div>
                    </div>
                <div class="form-group">
                      <div class="col-md-2">
                    <label class="control-label">Standard Weight</label>
                  </div>
                      <div class="col-md-4">
                    <input  type="number" step="any" class="form-control" placeholder="Standard Weight" id="stdWeigth">
                  </div>
                      <div class="col-md-2">
                    <label class="control-label">Min-Weight</label>
                  </div>
                      <div class="col-md-4">
                    <input  type="number" step="any" class="form-control" placeholder="Min-Weight" id="minWieght">
                  </div>
                    </div>
                <div class="form-group">
                      <div class="col-md-2">
                    <label class="control-label">Max-Weight</label>
                  </div>
                      <div class="col-md-4">
                    <input  type="number" step="any" class="form-control" placeholder="Max-Weight" id="maxWeigth">
                  </div>
                      <div class="col-md-2">
                    <label class="control-label">Image</label>
                  </div>
                      <div class="col-md-4">
                   <div class="input-group image-preview">
                <input type="text" class="form-control image-preview-filename"> <!-- don't give a name === doesn't send on POST/GET -->
                <span class="input-group-btn">
                    <!-- image-preview-clear button -->
                    <button type="button" class="btn btn-danger image-preview-clear" style="display:none;" id="closepreviw">
                        <span class="glyphicon glyphicon-remove" ></span> Clear
                    </button>
                    <!-- image-preview-input -->
                    <div class="btn btn-default image-preview-input">
                        <span class="glyphicon glyphicon-picture"></span>
                        <span class="image-preview-input-title">Choose Image</span>
                        <input type="file" id="fileImage" accept="image/png, image/jpeg, image/gif" name="input-file-preview"/> <!-- rename it -->
                    </div>
                </span>
                
            </div><!-- /input-group image-preview [TO HERE]--> 
                  </div>
                    </div>
                <div class="form-group">
                  <div class="col-md-2">
                    <label class="control-label">Carat</label>
                  </div>
                      <div class="col-md-4">
                    <input  type="text" step="any" class="form-control" placeholder="Carat" id="caratDgn">
                  </div>
                      <div class="col-md-2">
                    <label class="control-label">Vendor</label>
                  </div>
                      <div class="col-md-4">
                          <select class="selectpicker" id="vendorCd" data-size="5" data-actions-box="true">
                          <option value="">Select Vendor</option>   
                     <c:forEach var="ExistVn" items="${ExistVnDet}">
										  <option value="${ExistVn.vcm_vnct_cd}">${ExistVn.vcm_vnct_nm}</option>
										  </c:forEach>
										  </select>
                  </div>
                    
                    </div>
                <div class="form-group">
                <div class="col-md-2">
                    <label class="control-label">Another 1</label>
                  </div>
                      <div class="col-md-4">
                    <input type="text" class="form-control" placeholder="Another 1" id="ohter1Nm">
                  </div>
                      <div class="col-md-2">
                    <label class="control-label">Seller</label>
                  </div>
                      <div class="col-md-4">
                 
 					<select class="selectpicker"  data-size="5" data-actions-box="true" id="selerOfDgn"> 
 					<option value="">Select Seller</option>   
										 <c:forEach var="ExistCst" items="${ExistCstDet}">
										  <option value="${ExistCst.vcm_vnct_cd}">${ExistCst.vcm_vnct_nm}</option>
										  </c:forEach>
										  </select>
		</div>
                    </div>
                    <div class="form-group">
                     <div class="col-md-2">
                    <label class="control-label">Another 2</label>
                  </div>
                      <div class="col-md-4">
                   <input type="text" class="form-control" placeholder="Another 2" id="ohter2Nm">
                  </div>
                    </div>
                    <div class="form-group frmbtm">
                    <ul class="nav nav-tabs">
  <li class="active"><a data-toggle="tab" href="#home">Non-Gold</a></li>
  <li><a data-toggle="tab" href="#menu1">BOM</a></li>
  <li><a data-toggle="tab" href="#menu2">Mold</a></li>
    <li><a data-toggle="tab" href="#menu3">Costing</a></li>
</ul>
<div class="tab-content ">
  <div id="home" class="tab-pane fade in active bmtb">
    <div class="col-md-12 bmtb">
     <div class="col-md-4">
                        <input type="text" autocomplete="off"class="form-control" id="srchInNonGold" placeholder="Search by Code/Non-Gold Name" 	onkeydown="if(event.keyCode==13) prfomNonGold()"
											onkeypress=" return getAllNonGoldProduct(event,this.value)">
                      </div>
                  <div class="col-md-4">
                        <input type="text" class="form-control nonGoldChanger" placeholder="Non-Gold Name" id="nonGoldName" >
                      </div>
                  <div class="col-md-4">
                        <input type="text" class="form-control nonGoldChanger" placeholder="Shape" id="nonGoldShape">
                      </div>
                </div>
                 <div class="col-md-12 bmtb">
                  <div class="col-md-4">
                 <input type="text" class="form-control nonGoldChanger" placeholder="Colour" id="nonGoldColor">
                      </div>
                      <div class="col-md-4">
                        <input type="text" class="form-control nonGoldChanger" placeholder="Size" id="nonGoldSize">
                      </div>
                  <div class="col-md-4">
                        <input  type="number" step="any" class="form-control" placeholder="Stone Pcs" id="nonGoldPcs">
                      </div>
                 </div>
                 <div class="col-md-12 bmtb">
                  <div class="col-md-5">
                      </div>
                      <div class="col-md-1">
                       <button class="button button-5 button-5a icon-cart" onclick="addNonGoldForDesing(this)" type="button">Add</button>
                      </div>
                  <div class="col-md-5">
                   <span id="successResultInGold"></span>
                      </div>
                 </div>
                <div class="col-md-12">
                <div class="table-responsive">
                <table class="table table-bordered">
                <thead>
                <tr>
                <th>Non-Gold Code</th>
                <th>Non-Gold Name</th>
                <th>Non-Gold Shape</th>
                <th>Non-Gold Color</th>
                <th>Non-Gold Size</th>
                <th>Non-Gold Piece</th>
                 <th>Action</th>
                </tr>
                </thead>
                <tbody id="NonGoldTable">
                <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
                </tbody>
                </table>
                </div>
                </div>
  </div>
  <div id="menu1" class="tab-pane fade bmtb">
    <div class="col-md-12 bmtb">
     <div class="col-md-4">
                        <input type="text" autocomplete="off" class="form-control" placeholder="Search by Code/Bom Name" id="srchInBomBox" onkeydown="if(event.keyCode==13) prfomBom()"
											onkeypress=" return getAllBomProduct(event,this.value)">
                      </div>
                  <div class="col-md-4">
                       <input type="text" class="form-control bomChanger" placeholder="BOM Name" id="bomName">
                      </div>
                  <div class="col-md-4">
                        <input type="text" class="form-control bomChanger" placeholder="WIP BOM" id="bomWip">
                      </div>
                </div>
                <div class="col-md-12 bmtb">
                <div class="col-md-4">
                 <input type="text" class="form-control bomChanger" placeholder="BOM Size" id="bomSize">
                      </div>
                      <div class="col-md-4">
                        <input type="text" class="form-control bomChanger" placeholder="BOM Type" id="bomType"> 
                      </div>
                  <div class="col-md-4">
                        <input  type="number" step="any" class="form-control" placeholder="BOM Pcs" id="bomPcs">
                      </div>
                </div>
                <div class="col-md-12 bmtb">
                  <div class="col-md-5">
                      </div>
                      <div class="col-md-1">
                       <button class="button button-5 button-5a icon-cart" onclick="addBomForDesing(this)" type="button">Add</button>
                      </div>
                  <div class="col-md-5">
                   <span id="successResultInBom"></span>
                      </div>
                 </div>
                <div class="col-md-12">
                <div class="table-responsive">
                <table class="table table-bordered">
                <thead>
                <tr>
                <th>Bom Code</th>
                <th>Bom Name</th>
                <th>Bom WIP</th>
                <th>Bom Size</th>
                <th>Bom Type</th>
                <th>Bom Piece</th>
                 <th>Action</th>     
                </tr>
                </thead>
                <tbody id="bomTable">
                <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
                </tbody>
                </table>
                </div>
                </div>
  </div>
  <div id="menu2" class="tab-pane fade bmtb">
    <div class="col-md-12 bmtb">
    <div class="col-md-4">
                        <input type="text" class="form-control" autocomplete="off" placeholder="Search by Code/Mold Name" id="srchInMold" onkeydown="if(event.keyCode==13) prfomMold()"
											onkeypress=" return getAllMoldProduct(event,this.value)">
                      </div>
     <div class="col-md-4">
                         <input  type="text"  class="form-control moldChanger" placeholder="Mold Description" id="moldDcrs">
                      </div>
                  <div class="col-md-4">
                        <input  type="number" step="any" class="form-control" placeholder="Mold Pcs" id="moldPcs">
                      </div>
                </div>
                <div class="col-md-12 bmtb">
                  <div class="col-md-5">
                      </div>
                      <div class="col-md-1">
                       <button class="button button-5 button-5a icon-cart" onclick="addMoldForDesing()" type="button">Add</button>
                      </div>
                  <div class="col-md-5">
                  <span id="successResultInMold"></span>
                      </div>
                 </div>
                <div class="col-md-12">
                <div class="table-responsive">
                <table class="table table-bordered">
                <thead>
                <tr>
                <th>Mold Code</th>
                <th>Mold Name</th>
                <th>Mold Piece</th>
                <th>Action</th>
                </tr>
                </thead>
                <tbody id="moldTable">
                <tr>
                <td></td>
                <td></td>
                <td></td>
                  <td></td>
                </tr>
                </tbody>
                </table>
                </div>
                </div>
  </div>
  
  
  
  
  
  
  <div id="menu3" class="tab-pane fade bmtb">
    <div class="col-md-12 bmtb">
    <div class="col-md-3">
                        <input  type="number" step="any" class="form-control castChanger" placeholder="Labour Charge" id="lbChge">
                      </div>
                      
        <div class="col-md-3">
                        <input  type="number" step="any" class="form-control castChanger" placeholder="Stone Charge" id="stnChge">
                      </div>
                      
       <!--  <div class="col-md-4">
                        <input  type="number" step="any" class="form-control castChanger" placeholder="Making Charge" id="mkChge">
              </div>   -->                              
               <div class="col-md-3">
                        <input  type="number" step="any" class="form-control castChanger" placeholder="Development Charge" id="dptChge">
                 </div>  
                  <div class="col-md-1">
                       <button class="button button-5 button-5a icon-cart" type="button" onclick="addCastingForDesing()">Add</button>
                      </div>
                   <div class="col-md-2">
                  <span id="successResultInCast"></span>
                      </div>     
                </div>
               
                <div class="col-md-12">
                <div class="table-responsive">
                <table class="table table-bordered">
                <thead>
                <tr>
                <th>Labour Charge</th>
                <th>Stone Charge</th>
                <th>Development Charge</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody id="castingTable">
                <tr>
                <td></td>
                <td></td>
                <td></td>
                  <td></td>
                   <td></td>
                  <td></td>
                </tr>
                </tbody>
                </table>
                </div>
                </div>
  </div>
  
  
  
  
  
</div>
                    </div>
                    <!--<div class="form-group">
                    <div class="col-md-1"></div>
                                <div class="col-md-2">
                                <button class="btn-change7">Save Data</button>
                                </div>
                                </div>-->
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
  <script src="js/jquery-ui.js"></script>
<script>
 $(function() {
$('#closepreviw').click(function(){ 
  $(this).css("display",'none');  
  $(".image-preview-filename").val("");
   $("#fileImage").val("");
  $(".image-preview-input-title").attr("placeholder", "Choose Image Here");

});
});
$(function() {
    // Create the close button
    var closebtn = $('<button/>', {
        type:"button",
        text: 'x',
        id: 'close-preview',
        style: 'font-size: initial;',
    });
    closebtn.attr("class","");

    // Clear event
    $('.image-preview-clear').click(function(){
        $('.image-preview').attr("data-content","").popover('hide');
        $('.image-preview-filename').val("");
        $('.image-preview-clear').hide();
        $('.image-preview-input input:file').val("");
        $(".image-preview-input-title").text("Browse"); 
    }); 
    // Create the preview image
    $(".image-preview-input input:file").change(function (){     
        var img = $('<img/>', {
            id: 'dynamic',
            width:250,
            height:200
        });      
        var file = this.files[0];
        var reader = new FileReader();
        // Set preview image into the popover data-content
        reader.onload = function (e) {
            $(".image-preview-input-title").text("Change Image");
            $(".image-preview-clear").show();
            $(".image-preview-filename").val(file.name);
        }        
        reader.readAsDataURL(file);
    });  
});
</script>
 <script>
$(document).ready(function(){
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
$("input").not("#srchInMold,#srchInBom,#srchInNonGold").on("keydown",function(event){
	if(event.keyCode==13)
	return false;
});

});
function resetSpan(){
	$("#finalSaveDesinAlert").html("");
}
	
 $("form").submit(function(e){
	 
	 saveaddedProDesignControl();
  });	


</script>

<script src="js/masterController.js"></script>
</body>
</html>