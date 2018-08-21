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
    <link rel="stylesheet" href="css/font-awesome.min.css">
<script src="js/datepicker.js" type="text/javascript"></script>
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

.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {
    padding-bottom: 4px !important;
    padding-top: 2px !important;
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
                        <h4 class="page-title">Edit Design</h4>
                        </span> </div>
                     <div class="actions">
                     <a class="btn btn-circle btn-icon-only btn-default" id="resrOut" data-toggle="tooltip" title="New">
                                                <i class="icon-plus"></i>
                                            </a>
                                             <a class="btn btn-circle btn-icon-only btn-default" href="javascript:adddesignProductEdit()" id="resrOut" data-toggle="tooltip" title="Update">
                                                <i class="icon-doc"></i>
                                            </a>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" id="resrOut" data-toggle="tooltip" title="Print">
                                                <i class="icon-printer"></i>
                                                </a>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" data-toggle="tooltip" title="Authorization">
                                                <i class="icon-shield"></i>
                                            </a>
                                           <a class="btn btn-circle btn-icon-only btn-default" href="javascript:;" data-toggle="tooltip" title="Delete!">
                                                <i class="icon-trash"></i> </a>
                                                <a class="btn btn-circle btn-icon-only btn-default" href="design.mm" id="resrOut" data-toggle="tooltip" title="Existing">
                                                <i class="icon-logout"></i>
                                            </a>
                                           
                                        </div>
                                      <div class="actions"><span id="finalSaveDesinAlert"></span> </div>    
                    </div>
              </div>
                  <form class="form-horizontal" onsubmit="return false">
                    <button style="display:none" type="submit" id="submitterDesignEditForm"></button>
                    
                    <input type="hidden" id="sellIdExistDgn" value="${ExsitDgnEdit.dm_dgn_cust_cd}">
                  <input type="hidden" id="vendrIdExistDgn" value="${ExsitDgnEdit.dm_dgn_vn}">
                  <div class="form-group">
                                 <div class="col-md-2">
                                <label class="control-label">Company Name</label>
                                </div>
                                <div class="col-md-10">
                                <select class="form-control" required="required" id="companyCode">
                               <option value="">Select Company</option>
                              <c:forEach var="ExistCom" items="${ExistComDet}">
                           <c:choose><c:when test="${ExsitDgnEdit.dm_cmy_cd eq ExistCom.cm_cmy_cd}">  <option value="${ExistCom.cm_cmy_cd}" selected="selected">${ExistCom.cm_cmy_nm}</option></c:when>
                           <c:otherwise>  <option value="${ExistCom.cm_cmy_cd}">${ExistCom.cm_cmy_nm}</option></c:otherwise> </c:choose>
                             
                               </c:forEach>
                                </select>
                                </div>
                                </div>
                <div class="form-group">
                      <div class="col-md-2">
                    <label class="control-label">Product Code</label>
                  </div>
                      <div class="col-md-4">
                    <input type="text" class="form-control" placeholder="Product Code" id="productCode" value="${ExsitDgnEdit.dm_pdt_cd}" readonly="readonly">
                  </div>
                      <div class="col-md-2">
                    <label class="control-label">Product Name</label>
                  </div>
                      <div class="col-md-4">
                    <input type="text" class="form-control" placeholder="Product Name"  id="productName" value="${ExsitDgnEdit.dm_pdt_nm}">
                  </div>
                    </div>
                <div class="form-group">
                      <div class="col-md-2">
                    <label class="control-label">Design No</label>
                  </div>
                      <div class="col-md-4">
                       <input type="hidden" id="dgn_mst_id" value="${ExsitDgnEdit.dm_id}">
                         <input type="hidden" id="dm_dgn_crt_dt" value="${ExsitDgnEdit.dm_dgn_crt_dt}">
                           <input type="hidden" id="dm_dgn_crt_id" value="${ExsitDgnEdit.dm_dgn_crt_id}">
                    <input type="text"  class="form-control" placeholder="Design No" id="designNo" value="${ExsitDgnEdit.dm_dgn_no}" readonly="readonly">
                  </div>
                      <div class="col-md-2">
                    <label class="control-label">Category</label>
                  </div>
                      <div class="col-md-4">
                    <input type="text" class="form-control" placeholder="Category" id="categoryName" value="${ExsitDgnEdit.dm_dgn_ctgy}">
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
										 <c:choose><c:when test="${ExsitDgnEdit.dm_dgn_dpt eq ExistDpt.dm_dpt_cd}"> <option value="${ExistDpt.dm_dpt_cd}" selected="selected">${ExistDpt.dm_dpt_nm}</option></c:when>
										 <c:otherwise> <option value="${ExistDpt.dm_dpt_cd}">${ExistDpt.dm_dpt_nm}</option></c:otherwise> </c:choose>
										 
										  </c:forEach>
                        </select>
                  </div>
                      <div class="col-md-2">
                    <label class="control-label">Type Of Product</label>
                  </div>
                      <div class="col-md-4">
                   <input type="text" class="form-control" placeholder="Type Of Product" id="typeOfProduct" value="${ExsitDgnEdit.dm_dgn_typ}">
                  </div>
                    </div>
                <div class="form-group">
                      <div class="col-md-2">
                    <label class="control-label">Design Size</label>
                  </div>
                      <div class="col-md-4">
                    <input type="text" class="form-control" placeholder="Design Size" id="designSize" value="${ExsitDgnEdit.dm_dgn_sz}">
                  </div>
                      <div class="col-md-2">
                    <label class="control-label">UOM</label>
                  </div>
                      <div class="col-md-4">
                       <select class="form-control"  id="uomCode">
                        	 <option value="">Select Uom</option>
										 <c:forEach var="ExistUom" items="${ExistUomDet}">
										 <c:choose><c:when test="${ExsitDgnEdit.dm_dgn_uom eq ExistUom.um_uom_cd}"> <option value="${ExistUom.um_uom_cd}" selected="selected">${ExistUom.um_uom_nm}</option></c:when>
										 <c:otherwise> <option value="${ExistUom.um_uom_cd}">${ExistUom.um_uom_nm}</option></c:otherwise> </c:choose>
										 
										  </c:forEach>
                        </select>
                  </div>
                    </div>
                <div class="form-group">
                      <div class="col-md-2">
                    <label class="control-label">Standard Weight</label>
                  </div>
                      <div class="col-md-4">
                    <input  type="number" step="any" class="form-control" placeholder="Standard Weight" id="stdWeigth"  value="${ExsitDgnEdit.dm_dgn_std_wt}">
                  </div>
                      <div class="col-md-2">
                    <label class="control-label">Min-Weight</label>
                  </div>
                      <div class="col-md-4">
                    <input  type="number" step="any" min="0" class="form-control" placeholder="Min-Weight" id="minWieght" value="${ExsitDgnEdit.dm_dgn_min_wt}">
                  </div>
                    </div>
                <div class="form-group">
                      <div class="col-md-2">
                    <label class="control-label">Max-Weight</label>
                  </div>
                      <div class="col-md-4">
                    <input  type="number" step="any"  min="0" max="$('#minWieght').val()" class="form-control" placeholder="Max-Weight" id="maxWeigth" value="${ExsitDgnEdit.dm_dgn_max_wt}">
                  </div>
                      <div class="col-md-2">
                    <label class="control-label">Image</label>
                  </div>
                      <div class="col-md-4">
                   <div class="input-group image-preview">
                <input type="text" class="form-control image-preview-filename" id="dm_dgn_img" value="${ExsitDgnEdit.dm_dgn_img}"> <!-- don't give a name === doesn't send on POST/GET -->
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
                    <input  type="text" step="any" class="form-control" placeholder="Carat" id="caratDgn" value="${ExsitDgnEdit.dm_dgn_carat}">
                  </div>
                      <div class="col-md-2">
                    <label class="control-label">Vendor</label>
                  </div>
                      <div class="col-md-4">
                          <select class="selectpicker" id="vendorCd" data-size="5" data-actions-box="true">
                          <option value="">Select Seller</option>
                    			<c:forEach var="ExistVn" items="${ExistVnDet}">
										 <c:choose><c:when test="${ExsitDgnEdit.dm_dgn_vn eq ExistVn.vcm_vnct_cd}"> <option value="${ExistVn.vcm_vnct_cd}" selected="selected">${ExistVn.vcm_vnct_nm}</option></c:when>
										 <c:otherwise> <option value="${ExistVn.vcm_vnct_cd}">${ExistVn.vcm_vnct_nm}</option></c:otherwise> </c:choose>
										 
										  </c:forEach>
										  </select>
                  </div>
                    
                    </div>
                <div class="form-group">
                <div class="col-md-2">
                    <label class="control-label">Another 1</label>
                  </div>
                      <div class="col-md-4">
                    <input type="text" class="form-control" placeholder="Another 1" id="ohter1Nm" value="${ExsitDgnEdit.dm_oth1}">
                  </div>
                   <div class="col-md-2">
                    <label class="control-label">Seller</label>
                  </div>
                      <div class="col-md-4">
                 
 					<select class="selectpicker"  data-size="5" data-actions-box="true" id="selerOfDgn"> 
 					<option value="">Select Seller</option>
                   <c:forEach var="ExistCst" items="${ExistCstDet}">
                   
						 <c:choose><c:when test="${ExsitDgnEdit.dm_dgn_cust_cd eq ExistCst.vcm_vnct_cd}"> <option value="${ExistCst.vcm_vnct_cd}" selected="selected">${ExistCst.vcm_vnct_nm}</option></c:when>
										 <c:otherwise>  <option value="${ExistCst.vcm_vnct_cd}">${ExistCst.vcm_vnct_nm}</option></c:otherwise> </c:choose>
										  </c:forEach>
										  </select>
		</div>
                     
                    </div>
                     <div class="form-group">
                     <div class="col-md-2">
                    <label class="control-label">Another 2</label>
                  </div>
                      <div class="col-md-4">
                   <input type="text" class="form-control" placeholder="Another 2" id="ohter2Nm" value="${ExsitDgnEdit.dm_oth2}">
                  </div></div>
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
                       <button class="button button-5 button-5a icon-cart" onclick="addNonGoldForDesingEdit(this)" type="button">Add</button>
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
          
                </tbody>
  				<tbody style="border: aliceblue;">
               <c:forEach var="ExistDStn" items="${ExistDgnStn}">
                <tr  style="background-color: #5fbeaa;color: black;">
                <td>${ExistDStn[0]}</td>
                <td>${ExistDStn[1]}</td>
                <td>${ExistDStn[2]}</td>
                <td>${ExistDStn[3]}</td>
                <td>${ExistDStn[4]}</td>
                <td ondblclick="editDesignStnQtyMstRec(${ExistDStn[6]},this)">${ExistDStn[5]}</td>
                <td>
                	
                <button type="button" class="btn btn-xs btn-danger btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Delete row" onclick="delExistNonGoldfromDgn(${ExistDStn[6]}, this)"><i class="fa fa-trash-o"></i></button>
                
                </td>
                </tr>
                </c:forEach>
                </tbody>
                </table>
                </div>
                </div>
  </div>
  <div id="menu1" class="tab-pane fade bmtb">
    <div class="col-md-12 bmtb">
     <div class="col-md-4">
                        <input type="text" autocomplete="off" class="form-control" placeholder="Search by Code/Bom Name" id="srchInBomBox" onkeydown="if(event.keyCode==13) prfomBom()"
											onclick=" return getAllBomProduct(event,this.value)">
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
                       <button class="button button-5 button-5a icon-cart" onclick="addBomForDesingEdit(this)" type="button">Add</button>
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
               
                </tbody>
                <tbody style="border: aliceblue;">
               <c:forEach var="ExistDBom" items="${ExistDgnBom}">
                <tr  style="background-color: #5fbeaa;color: black;">
                <td>${ExistDBom[0]}</td>
                <td>${ExistDBom[1]}</td>
                <td>${ExistDBom[2]}</td>
                <td>${ExistDBom[3]}</td>
                <td>${ExistDBom[4]}</td>
                <td ondblclick="editDesignBomQtyMstRec(${ExistDBom[6]},this)">${ExistDBom[5]}</td>
                <td>
        
                <button type="button" class="btn btn-xs btn-danger btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Delete row" onclick="delExistBomfromDgn(${ExistDBom[6]},this)"><i class="fa fa-trash-o"></i></button></td>
                </tr>
                </c:forEach>
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
                         <input type="text"  class="form-control moldChanger" placeholder="Mold Description" id="moldDcrs">
                      </div>
                  <div class="col-md-4">
                        <input  type="number" step="any" class="form-control" placeholder="Mold Pcs" id="moldPcs">
                      </div>
                </div>
                <div class="col-md-12 bmtb">
                  <div class="col-md-5">
                      </div>
                      <div class="col-md-1">
                       <button class="button button-5 button-5a icon-cart" onclick="addMoldForDesingEdit()" type="button">Add</button>
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
                <th>Mold Description</th>
                <th>Mold Piece</th>
                <th>Action</th>
                </tr>
                </thead>
                <tbody id="moldTable">
              
                </tbody>
            <tbody style="border: aliceblue;">
                <c:forEach var="ExistDMold" items="${ExistDgnMold}">
                  <tr  style="background-color: #5fbeaa;color: black;">
              <td>${ExistDMold[0]}</td>
                <td>${ExistDMold[1]}</td>
                <td ondblclick="editDesignMoldQtyMstRec(${ExistDMold[3]},this)">${ExistDMold[2]}</td>
                  <td>
    
                  <button type="button" class="btn btn-xs btn-danger btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Delete row" onclick="delExistMoldfromDgn(${ExistDMold[3]},this)"><i class="fa fa-trash-o"></i></button></td>
                </tr>
                </c:forEach>
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
            <div class="col-md-3">
                        <input  type="number" step="any" class="form-control castChanger" placeholder="Development Charge" id="dptChge">
                 </div>
                 <div class="col-md-1">
                       <button class="btn btn-success" style="background-color: #5fbeaa;" type="button" onclick="addCastingForDesingEdit()">Update</button>
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
              <c:choose><c:when test="${ExistDgnCst[3] ne null}">
                <tr>
                <td>${ExistDgnCst[0]}</td>
                <td>${ExistDgnCst[1]}</td>
                  <td>${ExistDgnCst[2]}</td>
           <td>
            <button type="button" class="btn btn-xs btn-default btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Edit row"  onclick="editDesignCastQtyMstRec(this)"><i class="fa fa-pencil"></i></button>
           <button type="button" class="btn btn-xs btn-default btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Delete row" onclick="delExistCastfromDgn(${ExistDgnCst[3]},this)"><i class="fa fa-trash-o"></i></button></td>
                
                </tr>
                </c:when> </c:choose>
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
var vendrId=$("#vendrIdExistDgn").val(),selId=$("#sellIdExistDgn").val()
if(vendrId!=""){
	$("#vendorCd").val(vendrId.split(","));
}
if(selId!=""){
	$("#selerOfDgn").val(selId.split(","));
}
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

$("#stdWeigth,#lbChge").on("keyup change",function(){
	var mkcg=0;
	 $("#stdWeigth").val()!=""?mkcg+=Number($("#stdWeigth").val()):mkcg=0;
	 $("#lbChge").val()!=""?mkcg=Number(mkcg)+Number($("#lbChge").val()):Number(mkcg)+0;
	 $("#mkChge").val(mkcg);
 });
 $("#stnChge,#dptChge,#mkChge").on("keyup change",function(){
	 var totchg=0;
	 $("#stnChge").val()!=""?totchg+=Number($("#stnChge").val()):totchg=0;
	 $("#dptChge").val()!=""?totchg=Number(totchg)+Number($("#dptChge").val()):Number(totchg)+0;
	 $("#mkChge").val()!=""?totchg=Number(totchg)+Number($("#mkChge").val()):Number(totchg)+0;
	 $("#totChge").val(totchg);
 });
</script>
 <script>
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});
</script>
<script>


$(function(){
	$('#Showind').hide();	
$('#resrOut').click(function (){
$('#Showind').toggle();	
});
$("input").not("#srchInMold,#srchInBom,#srchInNonGold").on("keydown",function(event){
	if(event.keyCode==13)
	return false;
});
$("#minWieght,#maxWeigth").on("change",function(){
	var min=$("#minWieght").val(),max=$("#maxWeigth").val();
	if(min!=""&&max!=""){
		if(min>max){
			$("#finalSaveDesinAlert").html(("Enter Valid Minimum Amount").fontcolor("red"));
			$("#minWieght").val("");
			$("#minWieght").focus();
		}
		else{
			$("#finalSaveDesinAlert").html("");
		}
	}
	else{
		$("#finalSaveDesinAlert").html("");
	}
});
});
	
 $("form").submit(function(e){
	 saveaddedProDesignControlEdit();
  });	
	
</script>

<script src="js/masterController.js"></script>
</body>
</html>