<!DOCTYPE html>
<html lang="en" ng-app="">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<title>Casting</title>
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
<script src="js/angular.js"></script>
<script src="js/angular-resource.js"></script>
<link href="css/datepicker.css" type="text/css" rel="stylesheet">
<link rel="stylesheet" href="css/bootstrap-select.min.css">
 <link href="css/w2ui.min.css" rel="stylesheet">
<link rel="stylesheet" href="css/font-awesome.min.css">
   <style>.btn.btn-circlesuc {border-radius: 50px !important; background: #5fbeaa !important; border-color: #ccc !important;  color: #333 !important;}
	
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
.btn-success {
    color: #fff;
    background-color: #20b2aa !important;
    border-color: #4cae4c;
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
                                            <span class="caption-subject font-dark bold uppercase text-muted page-title-alt"> <h4 class="page-title">Alloy Master</h4></span>
                                        </div>
                                       <div class="actions">
                                     <a class="btn btn-circle btn-icon-only btn-default" href="javascript:saveAlloyMstRec()" id="saveButton" data-toggle="tooltip" title="Save">
                                                <i class="icon-doc"></i>
                                            </a>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" id="resrOut" data-toggle="tooltip" title="Print">
                                                <i class="icon-printer"></i>
                                                </a>
                                        
                                                <a class="btn btn-circle btn-icon-only btn-default" href="dashboard.mm" id="resrOut" data-toggle="tooltip" title="Existing">
                                                <i class="icon-logout"></i>
                                            </a>
                                              <a class="btn btn-circle btn-icon-only btn-default" href="javascript:;" id="exporttableDetail" data-toggle="tooltip" title="Export"> <i class="icon-cloud-upload"></i> </a>
                                        </div>
                                          <div class="actions">
                                           <c:choose><c:when test="${SaveAlyMstResult eq true}">
                 <span id="finalSaveDesinAlert" style="color:green"><div class="alert alert-success">Saved Successfully</div></span>
                    </c:when><c:when test="${UpdtAlyMstResult eq true}">  <span id="finalSaveDesinAlert" style="color:green"><div class="alert alert-success">Updated Successfully</div></span></c:when>
                    <c:otherwise> <span id="finalSaveDesinAlert"></span></c:otherwise>
                    </c:choose>
                                          <span id="savesuccessRes"></span></div>
                                    </div>
                                    
                                </div>
                                <form class="form-horizontal">
                                <div class="row">
                                
                                <div class="col-md-2"></div>
                                
                                                                <div class="col-md-8">
                                
                                 <div class="table-responsive">          
  <table class="table table-bordered table-striped">
    <thead>
      
      <tr>
          <th colspan="2">Code:</th><th colspan="3" id="PriIdOfaloy">${AlyCdDet}</th>
      </tr>
      
      <tr>
        <th colspan="2">Name:</th><th colspan="3"><input type="text" class="form-control" placeholder="Enter Name" id="nameOfAlloy"></th>
      </tr>
       <tr>
        <th colspan="2">Description:</th><th colspan="3"><textarea class="form-control" placeholder="Enter Description" id="descOfAlloy"></textarea></th>
      </tr>
      <tr>
        <th colspan="2"><input type="text" class="form-control catgyBoxinAly" placeholder="Enter Category"></th>
        <th colspan="2"><input type="number" class="form-control valBoxinAly" placeholder="Enter Value (Max=100%)"  ></th><th><button class='button button-5 button-5a icon-cart' onclick="onclickSaveInalyDetail()">SAVE</button></th>
      </tr>
      
    </thead>
    <tbody id="Alytbody">
      	
    </tbody>
  </table>
  </div>
  </div>
  <div class="col-md-2">
  </div>
  </div>
                                
                                
                                
                                
                                <div class="form-group">
                                  <div class="table-responsive" id="myTable">
                <div>
            <p style="margin-left: 36%;" class="loadClass" id="LoadName"><b>Loading Please Wait...</b></p>
                    <div class="loader loadClass" style="" id="loader" >
					</div>
					</div>
              <script type="text/javascript">
          	var tables='${ExsitAloyMstDetail}';
              </script>
            <%--   <table class="table table-bordered table-striped" id="myTable">
    <thead>
      <tr>
     
      <td>Code</td>
        <td>Name</td>
         <td>Ctgy1</td>
      <td>Val1</td>
       <td>Ctgy2</td>
      <td>Val2</td>
          <td>Ctgy3</td>
      <td>Val3</td>
        <td>Ctgy4</td>
      <td>Val4</td>
        <td>Ctgy5</td>
      <td>Val5</td>
        <td>Ctgy6</td>
      <td>Val6</td>
        <td>Ctgy7</td>
      <td>Val7</td>
      <td>Action</td>
      </tr>
    </thead>
    <tbody>
    
   <c:forEach var="ExsitAloyMst" items="${ExsitAloyMstDetail}">
      <tr>
        <td>${ExsitAloyMst.am_aly_cd}</td>
        <td>${ExsitAloyMst.am_aly_nm}</td>
         <td>${ExsitAloyMst.am_aly_ctgy1}</td>
      <td>${ExsitAloyMst.am_aly_val1}</td>
       <td>${ExsitAloyMst.am_aly_ctgy2}</td>
      <td>${ExsitAloyMst.am_aly_val2}</td>
         <td>${ExsitAloyMst.am_aly_ctgy3}</td>
      <td>${ExsitAloyMst.am_aly_val3}</td>
       <td>${ExsitAloyMst.am_aly_ctgy4}</td>
      <td>${ExsitAloyMst.am_aly_val4}</td>
        <td>${ExsitAloyMst.am_aly_ctgy5}</td>
      <td>${ExsitAloyMst.am_aly_val5}</td>
        <td>${ExsitAloyMst.am_aly_ctgy6}</td>
      <td>${ExsitAloyMst.am_aly_val6}</td>
         <td>${ExsitAloyMst.am_aly_ctgy7}</td>
      <td>${ExsitAloyMst.am_aly_val7}</td>
      
        <td>
        <button type="button" class="btn btn-xs btn-success btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Edit row" onclick="editAlloyMstRecFromDb(${ExsitAloyMst.am_id})"><i class="fa fa-pencil"></i></button>
        <button type="button" class="btn btn-xs btn-danger btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Delete row"  onclick="delAlloyMstRecFromDb(${ExsitAloyMst.am_id},this)"><i class="fa fa-trash-o"></i></button></td></td>

                                                     
      </tr>
      </c:forEach>
       </tbody>
  </table> --%>
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
				              { field: 'am_aly_cd', caption: 'Dcmnt No',type:'text', sortable: true},
				              { field: 'am_aly_nm', caption: 'Name',type:'text',sortable: true}, 
					             { field: 'am_aly_ctgy1', caption: 'Ctgy1',type:'text', sortable: true},
			                    { field: 'am_aly_val1',caption:'Val1',type:'text', sortable: true},
		                        { field: 'am_aly_ctgy2', caption: 'Ctgy2',type:'text', sortable: true},
		                        { field: 'am_aly_val2', caption: 'Val2',type:'text', sortable: true},
		                        { field: 'am_aly_ctgy3', caption: 'Ctgy3',type:'text',sortable: true}, 
					             { field: 'am_aly_val3', caption: 'Val3',type:'text', sortable: true},
					             { field: 'am_aly_ctgy4', caption: 'Ctgy4',type:'text',sortable: true}, 
					             { field: 'am_aly_val4', caption: 'Val4',type:'text', sortable: true},
					             { field: 'am_aly_ctgy5', caption: 'Ctgy5',type:'text',sortable: true}, 
					             { field: 'am_aly_val5', caption: 'Val5',type:'text', sortable: true},
					             { field: 'am_aly_ctgy6', caption: 'Ctgy6',type:'text',sortable: true}, 
					             { field: 'am_aly_val6', caption: 'Val6',type:'text', sortable: true},
					             { field: 'am_aly_ctgy75', caption: 'Ctgy7',type:'text',sortable: true}, 
					             { field: 'am_aly_val7', caption: 'Val7',type:'text', sortable: true},
			                   { field: '8', caption: 'Action',type:'text',
				                            render: function (record, index, column_index) {
				                            	var html='<button type="button" ${LoginDet.em_emp_typ} class="btn btn-xs btn-success btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Edit row"  onclick="editAlloyMstRecFromDb(\''+record.am_id+'\')"><i class="fa fa-pencil"></i></button>'
				                            		+'&nbsp;<button type="button" ${LoginDet.em_emp_typ} class="btn btn-xs btn-danger btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Delete row" onclick="delAlloyMstRecFromDb(\''+record.am_id+'\',this)"><i class="fa fa-trash-o"></i></button>';
													
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
});
function resetSpan(){
	$("#finalSaveDesinAlert").html("");
}


window.cmycode='${LoginDet.em_cmy_cd}'||'10000';
window.cmyDtl=JSON.parse('${cmyDtl}');
</script>
<script src="js/alloyMaster.js"></script>
<script src="js/body.js"></script>
</body>
</html>