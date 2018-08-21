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
    <link rel="stylesheet" href="css/font-awesome.min.css">
 <link href="css/w2ui.min.css" rel="stylesheet">
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
                        <h4 class="page-title">Company Master</h4>
                        </span> </div>
                      <div class="actions"> <a class="btn btn-circle btn-icon-only btn-default" href="javascript:;" id="resrOut"> <i class="icon-magnifier-remove"></i> </a> <a class="btn btn-circle btn-icon-only btn-default" href="addcompany.mm"> <i class="icon-plus"></i> </a> 
                  <a class="btn btn-circle btn-icon-only btn-default" href="javascript:;" id="exporttableDetail" data-toggle="tooltip" title="Export"> <i class="icon-cloud-upload"></i> </a>
                  </div>
                  <div class="actions"> 
                    <c:choose><c:when test="${SaveCompanyEditResult eq true}">
                 <span id="successResult" style="color:green"><div class="alert alert-success">Updated Successfully</div></span>
                    </c:when><c:otherwise> <span id="successResult"></span></c:otherwise>
                    </c:choose></div>
                    </div>
              </div>
                 
                 <div class="table-responsive" id="myTable">
                <div>
            <p style="margin-left: 36%;" class="loadClass" id="LoadName"><b>Loading Please Wait...</b></p>
                    <div class="loader loadClass" style="" id="loader" >
					</div>
					</div>
              <script type="text/javascript">
          	var tables='${ExistComDet}';
              </script>
               <%--  <table class="table table-bordered" id="myTable">
                      <thead>
                    <tr>
                    <th>Code</th>
                          <th>Company Name</th>
                          <th>Address<br>
                        1</th>
                       <!--    <th>Address<br>
                        2</th> 
                          <th>City</th>
                          <th>State</th>-->
                        <!--   <th>Country</th>
                          <th>Currency</th>
                           --><th>Pin Code</th>
                          <th>Phn Number</th>
                          <th>Mob Number</th>
                          <th>Email</th>
                          <th>TIN<br>
                        No</th>
                          <th>Alt Cmy Name</th>
                          <th>Manage</th>
                        </tr>
                  </thead>
                      <tbody>
                   <c:forEach var="ExistCom" items="${ExistComDet}">
                    <tr>
                          <td>${ExistCom.cm_cmy_cd}</td>
                           <td>${ExistCom.cm_cmy_nm}</td>
                          <td>${ExistCom.cm_cmy_ads1}</td>
                          <td>${ExistCom.cm_cmy_ads2}</td>
                          <td>${ExistCom.cm_cmy_cty}</td>
                          <td>${ExistCom.cm_cmy_st}</td> --%><%-- 
                          <td>${ExistCom.cm_cmy_cy}</td>
                          <td>${ExistCom.cm_cmy_cny}</td>
                          <td>${ExistCom.cm_cmy_pin_cd}</td>
                          <td>${ExistCom.cm_cmy_ph_no}</td>
                          <td>${ExistCom.cm_cmy_mob_no}</td>
                          <td>${ExistCom.cm_cmy_eml}</td>
                          <td>${ExistCom.cm_id}</td>
                          <td>${ExistCom.cm_alt_cmy_nm}</td>
                          <!--<td><label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                                        <input type="checkbox" class="checkboxes" value="1">
                                                        <span></span>
                                                    </label></td>-->
                        <td class="text-right">
										<button type="button" class="btn btn-xs btn-default btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Edit row" onclick="editCompanyMstRec(${ExistCom.cm_id})"><i class="fa fa-pencil"></i></button>
										<!--<button type="button" class="btn btn-xs btn-default btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Copy row"><i class="fa fa-copy"></i></button>-->
										<button type="button" class="btn btn-xs btn-danger btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Delete row" onclick="delCompanyMstRec(${ExistCom.cm_id},this)"><i class="fa fa-trash-o"></i></button>
									</td>
                        </tr>
                        </c:forEach>
                  </tbody>
                    </table> --%>
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
		tables=tables.replace(/\\/ig,"'/'")
		var res=eval(tables);
		 if(res !=null && res.length>0){
			 res.forEach((obj,index)=> obj['recid']=index);
			 var tempStorage=res;
				$("#myTable").html('<div id="grid" style="width: 100%; height: 500px;"></div>');
				var columns=[
				             
				             { field: 'cm_cmy_cd', caption: 'Dcmnt No',type:'text', sortable: true},
		                        { field: 'cm_cmy_nm', caption: 'Cmy Name',type:'text',sortable: true},
		                        { field: 'cm_cmy_ads1',caption:'Address',type:'text', sortable: true},
		                        { field: 'cm_cmy_pin_cd', caption: 'Pin Code',type:'text', sortable: true},
		                        { field: 'cm_cmy_ph_no', caption: 'Phone Number',type:'float', sortable: true},
		                        { field: 'cm_cmy_mob_no',caption: 'Mob Number',type:'float', sortable: true},
		                        { field: 'cm_cmy_eml', caption: 'Email',type:'float', sortable: true},
		                        { field: 'cm_alt_cmy_nm', caption: 'Alter.Cmy.Name',type:'text', sortable: true},
		                        { field: '8', caption: 'Action',type:'text',
				                            render: function (record, index, column_index) {
				                            	var html='<button type="button" ${LoginDet.em_emp_typ} class="btn btn-xs btn-default btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Edit row" onclick="editCompanyMstRec(\''+record.cm_id+'\')"><i class="fa fa-pencil"></i></button>'
				                            		+'&nbsp;<button type="button" ${LoginDet.em_emp_typ} class="btn btn-xs btn-danger btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Delete row" onclick="delCompanyMstRec(\''+record.cm_id+'\',this)"><i class="fa fa-trash-o"></i></button>';
													
				                            	return html;
				                            } 
				                        }
				                    ];
			
				
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
		 w2ui['grid'].refresh();
		 
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
})

function resetSpan(){
	$("#successResult").html("");
}

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

</script>
 <script>
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});
</script>

<script src="js/masterController.js"></script>
</body>
</html>