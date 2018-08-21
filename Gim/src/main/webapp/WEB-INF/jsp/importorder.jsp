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
    <link href="css/style.css" rel="stylesheet">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/simple-line-icons.min.css" rel="stylesheet">
    <script src="js/3.1.1jquery.min.js"></script>
  
    <link href="css/bootstrap-toggle.min.css" rel="stylesheet">
    
<link rel="stylesheet" href="css/bootstrap-select.min.css">
    <link href="css/w2ui.min.css" rel="stylesheet">
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
.btn-default.active, .btn-default:active, .open>.dropdown-toggle.btn-default {
	background-color: #e6e6e6 !important;
	border-color: #ebeff2 !important;
}
.toggle-off.btn {
	padding-left: 24px !important;
}
.btn-default {
	background-color: #fff !important;
	border: 1px solid #ebeff2 !important;
}
.btn-default:hover {
	background-color: #e6e6e6 !important;
}
.btn-primary {
	color: #fff;
	background-color: #004274;
	border-color: #004274;
}
.bnbgclr {
	color:#fff;
	background-color: #5fbeaa !important;
	border: 1px solid #5fbeaa !important;
	display: inline-block;
	padding: 4px 10px !important;
	margin-bottom: 0;
	font-size: 14px;
	font-weight: 400;
	line-height: 1.42857143;
	text-align: center;
	white-space: nowrap;
	vertical-align: middle;
	-ms-touch-action: manipulation;
	touch-action: manipulation;
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	background-image: none;
	border: 1px solid transparent;
	border-radius: 2px !important;
	outline: none !important;
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
        <li class="dropdown mega-dropdown"> <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown">Masters</a>
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
               <li ><a href="design.mm">Design</a></li>
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
                        <h4 class="page-title">Import Orders</h4>
                        </span> </div>
                          
                                       <div class="actions">
                                       
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" data-toggle="confirmation" data-popout="true"  title="Authorization">
                                                <i class="icon-shield"></i>
                                            </a>
                                            <a class="btn btn-circle btn-icon-only btn-default sa" href="javascript:saveaddImportOrder()" id="resrOut" data-toggle="tooltip" title="Save">
                                                <i class="icon-doc"></i>
                                            </a>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:;" data-toggle="tooltip" title="Delete">
                                                <i class="icon-trash"></i>
                                            </a>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="order.mm"  data-toggle="tooltip" title="Existings"> <i class="icon-logout"></i> </a> 
                                               <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" id="exporttableDetail" data-toggle="tooltip" title="" data-original-title="Export">
                                                <i class="icon-cloud-upload"></i>
                                                </a>
                                            </div>
                    <div class="actions">
                          
                 <span id="successResult" style="color:green"></span>
                  
                    </div>
              </div>
                  <form class="form-horizontal" onsubmit="return false">
         <input type="hidden" id="isauthVal" value="0">
           <input type="hidden" id="ExstBtchNoVal" value='${ExstBtchNoInOrd}'>
        
                <div class="form-group">
                      <div class="col-md-1">
                    <label class="control-label">Customer</label>
                  </div>
                   <div class="col-md-3">
                    <select class="selectpicker" id="customercode" data-live-search="true" data-actions-box="true" data-size="5"> 
                         <option value="">Select Customer</option>
                        <c:forEach var="ExistCst" items="${ExistCstDet}">
									                               <option value="${ExistCst.vcm_vnct_cd}">${ExistCst.vcm_vnct_nm}</option>
									                               </c:forEach>
					</select>
                  </div>
                      <div class="col-md-4">
                    <div class="input-group image-preview">
                          <input type="text" class="form-control image-preview-filename input-sm" placeholder="Choose XLSX File Here.." autofocus="autofocus">
                          <!-- don't give a name === doesn't send on POST/GET --> 
                          <span class="input-group-btn"> 
                      <!-- image-preview-clear button -->
                      <button type="button" class="btn btn-danger image-preview-clear" style="display:none;" id="closepreviw"> <span class="glyphicon glyphicon-remove" ></span> Clear </button>
                      <!-- image-preview-input -->
                      <div class="image-preview-input bnbgclr"> <span class="glyphicon glyphicon-file"></span> <span class="image-preview-input-title">Choose File</span>
                            <input type="file" accept="xlsx,xls" name="mm_file" id="files">
                            <!-- rename it --> 
                          </div>
                      </span> </div>
                    <!-- /input-group image-preview [TO HERE]--> 
                  </div>
                   <div class="col-md-2">
                    <button class="btn-change7" type="button" onclick="htmlLOader(this)">Load Data</button>
                  </div>
                   
                  <div class="col-md-2">
                 <span id="loadingInfo"></span>
                  </div>
                 
                    </div>
          <div class="form-group"> <div class="col-md-12"><label></label>
                </div></div>
          <div class="form-group">
     <div class="table-responsive" id="myTable">
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
<script src="js/bootstrap-toggle.min.js"></script>
<script src="js/xlsx.full.min.js"></script>
<script src="js/w2ui.min.js"></script>
  <script src="js/bootstrap-confirmation.min.js"></script>
    <script src="js/modernizer.js"></script>
    
<script src="js/bootstrap-select.min.js"></script>
<!--    <script type="text/javascript">
  $(function(){
	  

   Modernizr.load({
	   test: Modernizr.webgl,
	   yep : 'js/importOrder.js', /* JavaScript 3D Library */
	   nope: 'js/importOrder.js' /*  */
	 });
  });
   </script> -->
<script>
  $(function() {
    $('#toggle-two').bootstrapToggle({
      on: 'Enabled',
      off: 'Disabled'
    });
  })
</script> 
 <script>
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});
</script>
<script>

$(function(){
	$('.btn-change7').addClass("Disabled");
	$('.btn-change7').prop("disabled",true);

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

</script>
 
    <script>
 $(function() {
$('#closepreviw').click(function(){ 
  $(this).css("display",'none');  
  JsonData=undefined;
	$('.btn-change7').addClass("Disabled");
	$('.btn-change7').prop("disabled",true);
	if(w2ui.hasOwnProperty('grid')){
		  w2ui['grid'].destroy();
		}
  $(".image-preview-filename").val("");
  $(".image-preview-input-title").attr("placeholder","Choose XLSX File Here..");

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
        $(".image-preview-input-title").text("Choose XLSX File Here.."); 
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
            $(".image-preview-input-title").text("Choose File");
            $(".image-preview-clear").show();
            $(".image-preview-filename").val(file.name);
        }        
        reader.readAsDataURL(file);
    });  
});
$("#exporttableDetail").click(function(){
	$("[name='myTable_length']").val(-1),$("[name='myTable_length']").change();
	var tbody='<table class="table table-bordered table-stripped"><thead>'+$("thead").html()+'</thead><tbody>'+$("tbody").html()+'</tbody></table>';
	tableToExcel(tbody,'INOUT BOM');
	})

</script>
<script src="js/importOrder.js"></script>
</body>
</html>