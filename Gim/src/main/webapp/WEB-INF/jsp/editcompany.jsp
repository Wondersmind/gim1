<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<title>Company</title>

<script type="text/javascript" src="dwr/interface/AjaxController.js"></script>
<script type="text/javascript" src="dwr/engine.js"></script>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- Bootstrap -->
<link href="css/customefonts.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/simple-line-icons.min.css" rel="stylesheet">
<link href="css/datepicker.css" type="text/css" rel="stylesheet">

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

<style>
.btn-circle:hover {
	border-radius: 50px;
	background: #e6e6e6 !important;
	border-color: #ccc !important;
	color: #333 !important;
}
.alert-box {
    color:#555;
    border-radius:10px;
    font-family:Tahoma,Geneva,Arial,sans-serif;font-size:11px;
    padding:10px 10px 10px 36px;
    margin:10px;
}

.error {
    background:#ffecec url('images/error.png') no-repeat 10px 50%;
    border:1px solid #f5aca6;
}
.success {
    background:#e9ffd9 url('images/success.png') no-repeat 10px 50%;
    border:1px solid #a6ca8a;
}
.warning {
    background:#fff8c4 url('images/warning.png') no-repeat 10px 50%;
    border:1px solid #f2c779;
}
.notice {
    background:#e3f7fc url('images/notice.png') no-repeat 10px 50%;
    border:1px solid #8ed9f6;
}
.alert-box span {
    font-weight:bold;
    text-transform:uppercase;
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
                <li class="emplactive"><a href="company.mm" class="emplactive">Company</a></li>
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
                  <div class="caption"> <i class="icon-social-dribbble font-dark hide"></i> <span class="caption-subject font-dark bold uppercase text-muted page-title-alt">
                    <h4 class="page-title">Edit Company</h4>
                    </span>
                     </div>
                     
                  <div class="actions"> 
                  <a class="btn btn-circle btn-icon-only btn-default" href="javascript:saveaddCompanyEdit()" id="resrOut" data-toggle="tooltip" title="Save">
                                                <i class="icon-doc"></i></a>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:;" data-toggle="tooltip" title="Delete">
                                                <i class="icon-trash"></i>
                                            </a>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="company.mm" id="resrOut" data-toggle="tooltip" title="Existings"> <i class="icon-logout"></i> </a>
                   </div>
                   
              </div>
              <form class="form-horizontal" action="savecompanyEdit.mm" method="post" >
                <div class="form-group">
                  <div class="col-md-2">
                    <label class="control-label">Code</label>
                  </div>
                  <div class="col-md-10">
                    <input type="text" class="form-control" placeholder="Code" required="required" name="cm_cmy_cd" value="${ExistCmyDtl.cm_cmy_cd}" readonly="readonly">
                  <input type="hidden" name="cm_id" value="${ExistCmyDtl.cm_id}">
                     <input type="hidden" name="cm_cmy_crt_dt" value="${ExistCmyDtl.cm_cmy_crt_dt}">
                     <input type="hidden" name="cm_cmy_crt_id" value="${ExistCmyDtl.cm_cmy_crt_id}">
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-2">
                    <label class="control-label">Company Name</label>
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" placeholder="Name" required="required" name="cm_cmy_nm"  value="${ExistCmyDtl.cm_cmy_nm}">
                  </div>
                  <div class="col-md-2">
                    <label class="control-label">Altr Company Name</label>
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" placeholder="Name" name="cm_alt_cmy_nm"  value="${ExistCmyDtl.cm_alt_cmy_nm}">
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-2">
                    <label class="control-label">Register Name 1</label>
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" placeholder="Register Name 1" name="cm_rgst_nm1" value="${ExistCmyDtl.cm_rgst_nm1}">
                  </div>
                  <div class="col-md-2">
                    <label class="control-label">Register Number 1</label>
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" placeholder="Register Number 1" name="cm_alt_rgst_nm1" value="${ExistCmyDtl.cm_alt_rgst_nm1}">
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-2">
                    <label class="control-label">Register Name 2</label>
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" placeholder="Register Name 2" name="cm_rgst_nm2" value="${ExistCmyDtl.cm_rgst_nm2}">
                  </div>
                  <div class="col-md-2">
                    <label class="control-label">Register Number 2</label>
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" placeholder="Register Number 2" name="cm_alt_rgst_nm2" value="${ExistCmyDtl.cm_alt_rgst_nm2}">
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-2">
                    <label class="control-label">Register Name 3</label>
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" placeholder="Register Name 3" name="cm_rgst_nm3" value="${ExistCmyDtl.cm_rgst_nm3}">
                  </div>
                  <div class="col-md-2">
                    <label class="control-label">Register Number 3</label>
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" placeholder="Register Number 3" name="cm_alt_rgst_nm3" value="${ExistCmyDtl.cm_alt_rgst_nm3}">
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-2">
                    <label class="control-label">Address 1</label>
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" placeholder="Address 1" name="cm_cmy_ads1" value="${ExistCmyDtl.cm_cmy_ads1}">
                  </div>
                  <div class="col-md-2">
                    <label class="control-label">Address 2</label>
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" placeholder="Address 2" name="cm_cmy_ads2" value="${ExistCmyDtl.cm_cmy_ads2}">
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-2">
                    <label class="control-label">City</label>
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" placeholder="City" name="cm_cmy_cty" value="${ExistCmyDtl.cm_cmy_cty}">
                  </div>
                  <div class="col-md-2">
                    <label class="control-label">State</label>
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" placeholder="State" name="cm_cmy_st" value="${ExistCmyDtl.cm_cmy_st}">
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-2">
                    <label class="control-label">Country</label>
                  </div>
                  <div class="col-md-4">
                    <select class="form-control" name="cm_cmy_cy" value="${ExistCmyDtl.cm_cmy_cy}" >
                      <option></option>
                      <option></option>
                      <option></option>
                    </select>
                  </div>
                  <div class="col-md-2">
                    <label class="control-label">Currency</label>
                  </div>
                  <div class="col-md-4">
                    <select class="form-control" name="cm_cmy_cny" value="${ExistCmyDtl.cm_cmy_cny}">
                      <option></option>
                      <option></option>
                      <option></option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-2">
                    <label class="control-label">Pin Code</label>
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" placeholder="Pin Code" name="cm_cmy_pin_cd" maxlength="6" minlength="6" value="${ExistCmyDtl.cm_cmy_pin_cd}" onkeypress='return event.charCode >= 48 && event.charCode <= 57'>
                  </div>
                  <div class="col-md-2">
                    <label class="control-label">Phone Number</label>
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" placeholder="Phone Number" name="cm_cmy_ph_no" maxlength="15" minlength="6" value="${ExistCmyDtl.cm_cmy_ph_no}" onkeypress='return event.charCode >= 48 && event.charCode <= 57' >
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-2">
                    <label class="control-label">Mobile Number</label>
                  </div>
                  <div class="col-md-4">
                    <input type="number"  class="form-control" placeholder="Mobile Number" name="cm_cmy_mob_no" maxlength="10" minlength="10" value="${ExistCmyDtl.cm_cmy_mob_no}" onkeypress='return event.charCode >= 48 && event.charCode <= 57' >
                  </div>
                  <div class="col-md-2">
                    <label class="control-label">Email</label>
                  </div>
                  <div class="col-md-4">
                    <input type="email" class="form-control" placeholder="Email" name="cm_cmy_eml" value="${ExistCmyDtl.cm_cmy_eml}">
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-2">
                    <label class="control-label">Website</label>
                  </div>
                  <div class="col-md-10">
                    <input type="text" class="form-control" placeholder="Website" name="cm_cmy_web" value="${ExistCmyDtl.cm_cmy_web}">
                  </div>
                </div>
                <button style="display:none" type="submit" id="submitterCompanyEditForm"></button>
                <!--<div class="form-group">
                  <div class="col-md-2"></div>
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

<script src="js/datepicker.js" type="text/javascript"></script>
<script src="js/masterController.js"></script>
<script>


$(function(){
	$('#Showind').hide();	
$('#resrOut').click(function (){
$('#Showind').toggle();	
});
})


</script>

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
</body>
</html>