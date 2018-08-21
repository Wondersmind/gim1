<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<title>JOB CARD</title>

<script type="text/javascript" src="dwr/interface/AjaxController.js"></script>
<script type="text/javascript" src="dwr/engine.js"></script>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- Bootstrap -->
  
  <link href="css/customefonts.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/simple-line-icons.min.css" rel="stylesheet">
<script src="js/3.1.1jquery.min.js"></script>
<link href="css/datepicker.css" type="text/css" rel="stylesheet">
 <link href="css/w2ui.min.css" rel="stylesheet">
<link rel="stylesheet" href="css/bootstrap-select.min.css">
<link rel="stylesheet" href="css/font-awesome.min.css">
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

.txt{
text-align:left;
}
.col-md-4 {
    width: 23%;
}
</style>
      
<style id="HTMLCSS">

p {
    margin: 0 !important;
    font-size: 14px !important;
    line-height: 23px;
    letter-spacing: 1px;
}

.tct {
        text-align: center;
}
body {
    /* width: 612px;
        margin-left: 20px;
        padding:5px; */
 

}
/* .pagewth {
        width:595px;
        margin-left: 20px;
        padding:5px;
    font-family: Tw Cen MT Condensed !important;
    text-transform: uppercase;
} */
.padth {
    width: 75mm !important;
    margin-left: 0mm !important;
    height: 35mm;
}
.col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {
    float: left;
  }
  .col-md-12 {
    width: 100% !important;
  }
  .col-md-11 {
    width: 91.66666667%;
  }
  .col-md-10 {
    width: 83.33333333%;
  }
  .col-md-9 {
    width: 75%;
  }
  .col-md-8 {
    width: 66.66666667%;
  }
  .col-md-7 {
    width: 58.33333333%;
  }
  .col-md-6 {
  width: 50%;
    margin: 0px;
    margin-bottom: 16px;
    margin-top: 2px;
    margin-left: -29px;
    padding: 4px;
    /* margin-right: 0px; */
  }
  .col-md-5 {
    width: 41.66666667%;
  }
.col-md-4 {
    width: 33.333333%;
    height: 4.3cm;
    margin-top: 14px;
    margin-bottom: 20px;
}
  .col-md-3 {
    width: 48mm;
    height: 24mm;

  }
  .col-md-2 {
    width: 16.66666667%;
  }
  .col-md-1 {
    width: 8.33333333%;
  }
  .col-md-pull-12 {
    right: 100%;
  }
  .col-md-pull-11 {
    right: 91.66666667%;
  }
  .col-md-pull-10 {
    right: 83.33333333%;
  }
  .col-md-pull-9 {
    right: 75%;
  }
  .col-md-pull-8 {
    right: 66.66666667%;
  }
  .col-md-pull-7 {
    right: 58.33333333%;
  }
  .col-md-pull-6 {
    right: 50%;
  }
  .col-md-pull-5 {
    right: 41.66666667%;
  }
  .col-md-pull-4 {
    right: 33.33333333%;
  }
  .col-md-pull-3 {
    right: 25%;
  }
  .col-md-pull-2 {
    right: 16.66666667%;
  }
  .col-md-pull-1 {
    right: 8.33333333%;
  }
  .col-md-pull-0 {
    right: auto;
  }
  .col-md-push-12 {
    left: 100%;
  }
  .col-md-push-11 {
    left: 91.66666667%;
  }
  .col-md-push-10 {
    left: 83.33333333%;
  }
  .col-md-push-9 {
    left: 75%;
  }
  .col-md-push-8 {
    left: 66.66666667%;
  }
  .col-md-push-7 {
    left: 58.33333333%;
  }
  .col-md-push-6 {
    left: 50%;
  }
  .col-md-push-5 {
    left: 41.66666667%;
  }
  .col-md-push-4 {
    left: 33.33333333%;
  }
  .col-md-push-3 {
    left: 25%;
  }
  .col-md-push-2 {
    left: 16.66666667%;
  }
  .col-md-push-1 {
    left: 8.33333333%;
  }
  .col-md-push-0 {
    left: auto;
  }
  .col-md-offset-12 {
    margin-left: 100%;
  }
  .col-md-offset-11 {
    margin-left: 91.66666667%;
  }
  .col-md-offset-10 {
    margin-left: 83.33333333%;
  }
  .col-md-offset-9 {
    margin-left: 75%;
  }
  .col-md-offset-8 {
    margin-left: 66.66666667%;
  }
  .col-md-offset-7 {
    margin-left: 58.33333333%;
  }
  .col-md-offset-6 {
    margin-left: 50%;
  }
  .col-md-offset-5 {
    margin-left: 41.66666667%;
  }
  .col-md-offset-4 {
    margin-left: 33.33333333%;
  }
  .col-md-offset-3 {
    margin-left: 25%;
  }
  .col-md-offset-2 {
    margin-left: 16.66666667%;
  }
  .col-md-offset-1 {
    margin-left: 8.33333333%;
  }
  .col-md-offset-0 {
    margin-left: 0;
  }
  .img-responsive,
.thumbnail > img,
.thumbnail a > img,
.carousel-inner > .item > img,
.carousel-inner > .item > a > img {
  display: block;
  max-width: 100%;
  height: auto;
}
.img-rounded {
  border-radius: 6px;
}
.img-thumbnail {
  display: inline-block;
  max-width: 100%;
  height: auto;
  padding: 4px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-transition: all .2s ease-in-out;
       -o-transition: all .2s ease-in-out;
          transition: all .2s ease-in-out;
}
.img-circle {
  border-radius: 50%;
}
img {
  border: 0;
}
img {
    vertical-align: middle;
    display: block;
      width: 75px;
    height: 80px;
}
.txt {
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 10px !important;
}

.qty {
            line-height: 19px;
}
.prc {
            margin-top: -5px;
}
.imageSize{
    width: 100px;
    height: 50px;
}

.pull-right{
float: right;
    padding-right: 15px;
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
                                     <c:choose><c:when test="${SaveJobHdrResult eq true}">
                <span style="color:green" id="finalSaveDesinAlert"><div class="alert alert-success" style="text-align:center;">Saved Successfully</div></span>
                    </c:when><c:otherwise>  <a style="top: 5px;position: absolute;right: 0;" id="finalSaveDesinAlert" ></a></c:otherwise>
                    </c:choose>
                                    <div class="portlet-title">
                                        <div class="caption">
                                            <i class="icon-social-dribbble font-dark hide"></i>
                                            <span class="caption-subject font-dark bold uppercase text-muted page-title-alt"> <h4 class="page-title">Job Order</h4></span>
                                        </div>
                                        <div class="actions">
                                            <a class="btn btn-circle btn-icon-only btn-default" href="javascript:;" id="resrOut">
                                                <i class="icon-magnifier-remove"></i>
                                            </a>
                                            <a class="btn btn-circle btn-icon-only btn-default" href="addjoborder.mm">
                                                <i class="icon-plus"></i>
                                            </a>
                                           <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" id="exporttableDetail" data-toggle="tooltip" title="" data-original-title="Export">
                                                <i class="icon-cloud-upload"></i>
                                                </a>
                                            
                                        </div>
                                          <div class="actions">
                                        </div>
                                    </div>
                                    
                                </div>
                                
              <div class="table-responsive" id="myTable">
                 <div>
            <p style="margin-left: 36%;" class="loadClass" id="LoadName"><b>Loading Please Wait...</b></p>
                    <div class="loader loadClass" style="" id="loader" >
					</div>
					</div>
              <script type="text/javascript">
          	var tables='${ExstJobOrdHdr}';
              </script>
<%--               <table class="table table-bordered" id="myTable">
    <thead>
      <tr>
      <th>Doc.No</th>
       <th>Cmy.Nm</th>
        <th>Dpt.Nm</th>
        <th>Tot.Qty</th>
        <th>Prcs.Typ</th>
        <th>Mold.Typ</th>
        <th>Auth.Sts</th>
      	<th>Action</th>
      </tr>
    </thead>
  
    <tbody>
      <c:forEach var="ExstJobOrd" items="${ExstJobOrdHdr}">
      <tr>
        <td>${ExstJobOrd[0]}</td>
        <td>${ExstJobOrd[1]}</td>
          <td>${ExstJobOrd[6]}</td>
        <td>${ExstJobOrd[2]}</td>
        <td>${ExstJobOrd[3]}</td>
        <td>${ExstJobOrd[7]}</td>
      	<td>${ExstJobOrd[4]}</td>
       <td class="text-right">
       <c:choose><c:when test="${ExstJobOrd[4] eq '0'}">
										<button type="button" class="btn btn-xs btn-default btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Edit row" onclick="editJobOrderHderRec(${ExstJobOrd[5]})"><i class="fa fa-pencil"></i></button>
										<button type="button" class="btn btn-xs btn-danger btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Delete row" onclick="delJobOrderHderRec('${ExstJobOrd[0]}',this,'${ExstJobOrd[3]}')"><i class="fa fa-trash-o"></i></button>
									</c:when><c:otherwise>
									<button type="button" class="btn btn-xs btn-default btn-equal" style="width:50px" data-toggle="tooltip" data-placement="top" data-original-title="Edit row" onclick="editJobOrderHderRec(${ExstJobOrd[5]})"><i class="fa fa-pencil"></i></button>
									</c:otherwise> </c:choose></td>
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
			 res.forEach((obj,index)=> {
				 if(obj[3]=='BalBomMaking') { obj[8]=(+obj[9]||0).toFixed(2)}
				 obj[2]=(+obj[2])||0;
				 obj['recid']=index});
			 var tempStorage=res;
				$("#myTable").html('<div id="grid" style="width: 100%; height: 500px;"></div>');
				var columns=[
				              { field: '0', caption: 'DocNo',type:'text', sortable: true},
				              { field: '10', caption: 'Doc.DT',type:'text',sortable: true},
		                        { field: '1', caption: 'CmyName',type:'text',sortable: true},
		                        { field: '6',caption:'DptNm',type:'text', sortable: true},
		                        { field: '2', caption: 'TotQty',type:'text', sortable: true},
		                        { field: '8', caption: 'IsdWgt',type:'text', sortable: true},
		                        { field: '3', caption: 'PrcsTyp',type:'text', sortable: true},
		                        { field: '7',caption: 'MoldType',type:'text', sortable: true},
		                        { field: '4', caption: 'Auth.Sts',type:'text', sortable: true},
		                        { field: '9', caption: 'Action',type:'text',
				                            render: function (record, index, column_index) {
				                            	var html='';
				                            	if(record[4]=='1'){
				                            	html='<button type="button" style="width: 48px !important;" class="btn btn-xs btn-default btn-equal"  data-toggle="tooltip" data-placement="top" data-original-title="Edit row" onclick="editJobOrderHderRec(\''+record[5]+'\')"><i class="fa fa-pencil"></i></button>';	
				                            	}
				                            	else{
				                            		html='<button type="button" class="btn btn-xs btn-default btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Edit row" onclick="editJobOrderHderRec(\''+record[5]+'\')"><i class="fa fa-pencil"></i></button>'
				                            		+'<button type="button" class="btn btn-xs btn-danger btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Delete row" onclick="delJobOrderHderRec(\''+record[0]+'\',this,\''+record[3]+'\')"><i class="fa fa-trash-o"></i></button>';
													}
				                            	html+='&nbsp;&nbsp;<button type="button" class="btn btn-xs btn-info" data-toggle="tooltip" data-placement="top" data-original-title="Print" onclick="AfterSavingPrint(\''+record[3]+'\',\''+record[0]+'\',\''+record[1]+'\',\''+record[6]+'\',\''+record[8]+'\')"><i class="icon-printer"></i></button>';
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
function editJobOrderHderRec(id){
	window.location.href="editjoborder.mm?jb_hdr_id="+id+"";
}
function delJobOrderHderRec(id,ths,type){
	$(ths).closest("tr").css("background-color","orangered");
	AjaxController.delJobOrdHdrRecDtlAjax(id,type,returnResOfDelAlyHdr);
	function returnResOfDelAlyHdr(res){
		if(res=="success"){
			$(ths).closest("tr").remove();
		}
	}
}

function AfterSavingPrint(typ,docno,cmynm,dptnm,wgt){
	if(typ=='JobCardMaking')
	AfterSavingPrintFRONTSIDE(typ,docno,cmynm,dptnm,wgt);
	else
	InHouseBomPrinting(typ,docno,cmynm,dptnm);
}

function AfterSavingPrintBACKSIDE(typ,docno,cmynm,dptnm){
	if(typ=='JobCardMaking'){
		var qry="select johd_trgt_dt,johd_pdt_btch_no,johd_pdt_cd,(select top 1 concat([dm_dgn_min_wt],'-',dm_dgn_max_wt,'-',dm_dgn_std_wt) from dgn_mst where dm_pdt_cd=johd_pdt_cd and dm_dgn_sts=1),johd_ord_qty,johd_trgt_dt,(select top 1 dm_dpt_nm from dpt_mst where dm_dpt_cd=johd_pdt_dpt_cd and dm_sts=1) as dpt "+
		" from job_ord_hdr_dtl where johd_doc_no='"+docno+"' and johd_job_sts=1 order by (cast(johd_trgt_dt as date)) asc";
		AjaxController.getDataForPintoutJOBCARD(qry,(res)=>{
				if(res&&res.length){
					var date=res[0][5]||'';dptnm=res[0][6]||'';
					var html='<table class="table table-bordered"><thead><tr ><th style="text-align:center" colspan="9">JOBCARD BACKSIDE</th></tr>'
						+'<tr><th colspan="3">JOBCARD NO</th><th colspan="2">'+docno+'</th><th colspan="2">TARGET DATE</th><th colspan="2">'+date+'</th></tr>'
						+'<tr><th colspan="3">CMY NAME</th><th colspan="2">'+cmynm+'</th><th colspan="2">PDT DPT</th><th colspan="2">'+dptnm+'</th></tr>'
						+' <tr><th>S</br>No</th><th>Filing Wgt</th><th style=" min-width: 110px; ">Target</th><th>Batch</th><th>Qty</th><th style=" min-width: 165px; ">Min-Max</th><th>Products</th><th>Polish Wgt</th><th>Sign</th></tr></thead>';
						var totres=res.reduce((old,data,ind)=>{
							[min,max,std]=(""+(data[3]||"0-0-0")).split("-");
							data[1]=data[1]||'';
							old.qty+=(+data[4]||0);
							old.totstd+=(+std||0);
							html+='<tr><td>'+(ind+1)+'</td><td></td><td style=" min-width: 110px; ">'+data[0]+'</td><td>'+data[1]+'</td><td>'+data[4]+'</td><td style=" min-width: 165px; ">'+min+'-'+max+'</td><td>'+data[2]+'</td><td></td><td></td></tr>'	;	
						return old;
						},{qty:0,totstd:0});
						totres=totres||{qty:0,totstd:0};
						html+='<tr><td  colspan="4">TOTAL</td><td>'+totres.qty+'</td><td  colspan="2"></td><td></td><td></td></tr>';
						
				printer(html);
				
			}
			 var qry=" select johd_trgt_dt,johd_doc_no,dm_dgn_min_wt,dm_dgn_std_wt,dm_dgn_max_wt,johd_pdt_cd,dm_dgn_img,johd_pdt_btch_no,johd_ord_typ,(select top 1 dm_dpt_nm from dpt_mst where dm_dpt_cd=dm_dgn_dpt and dm_sts=1) as dptnm from job_ord_hdr_dtl left join dgn_mst on johd_pdt_cd=dm_pdt_cd and (dm_dgn_sts=1 or dm_dgn_sts is null) and johd_job_sts=1 where johd_doc_no='"+docno+"'"	
			AjaxController.getDataForPintoutJOBCARD(qry,(res)=>{
				if(res&&res.length){
				var html='';
				var html='<div class="col-md-12">';
				for(var i=0;i<res.length;i++)	{
					html+='<div class="col-md-4"><div class="col-md-12"><p class="txt" >TGT DT: '+res[i][0]+'</p><p class="txt">JCD NO: '
					+res[i][1]+'</p></div><div class="col-md-12 tct" style="position: absolute;margin: 0% 60% 0%;"><span class="barcodeTarget" id="barcodeTarget'
					+'" ><img src="showImageUrl.mm?path='+res[i][6]+'" width="100px" height="100px"/></span></div><div class="col-md-12 prc"><p class="txt">MIN_MAX: '
					+res[i][2]+'-'+res[i][3]+'</p> <p class="txt">PDT CD: '+res[i][5]+'</p></div><div class="col-md-12 prc"><p class="txt">BATCH NO:<b> '
					+res[i][7]+' </b>&nbsp; NON-GLD WGT:&nbsp;</p> <p class="txt">CROSS WGT: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; NET WGT: &nbsp; </p>'
					+'  <p class="txt">ORD TYP: '+res[i][8]+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; PDT DPT: &nbsp;'+res[i][9]+' </p></div></div>'; 
			}
			printer(html);
				}
			}); 
		});
	}
}

function AfterSavingPrintFRONTSIDE(typ,docno,cmynm,dptnm,wgt){
	if(typ=='JobCardMaking'){
		var qry="select johd_pdt_cd,johd_ord_qty,johd_trgt_dt,joh_wrk_typ,(case when joh_wrk_typ='OutSideWrker' then (select top 1 vcm_vnct_nm from vn_ct_mst where vcm_vnct_cd=joh_wrk_cd and vcm_vnct_sts=1) else (select top 1 em_emp_nm from emp_mst where em_emp_id=joh_wrk_cd and em_emp_sts=1) end) as wrknm,"
		+"joh_prcs_typ,joh_tot_wgt,jcd_bom_wgt,joh_tree1_wgt,joh_tree2_wgt,joh_tree3_wgt,joh_tree1_no,joh_tree2_no,joh_tree3_no,(select top 1 dm_dpt_nm from dpt_mst where dm_dpt_cd=johd_pdt_dpt_cd and dm_sts=1) as dpt "+
		" from job_ord_hdr_dtl left join job_card_dtl on johd_doc_no=jcd_doc_no and johd_dpt_cd=jcd_dpt_cd where johd_doc_no='"+docno+"' and johd_job_sts=1 order by (cast(johd_trgt_dt as date)) asc";
		AjaxController.getDataForPintoutJOBCARD(qry,(res)=>{
		if(res&&res.length){
			dptnm=res[0][14]||'';
			var date=res[0][2]||'',alloy='R1324',wrk=res[0][4]||'',wrktyp=res[0][3]||'',prcs=res[0][5]||'',totisdwgt=res[0][6]||'',bomwgt=res[0][7]||''
			,tree=[...new Set([(res[0][11]||''),(res[0][12]||''),(res[0][13]||'')])].join();
			var html='<table class="table table-bordered"><thead><tr><th style="text-align:center" colspan="22">JOBCARD/ISSUE SLIP</th></tr>'+
			'<tr><th colspan="2">JOBCARD NO</th><th colspan="2">'+docno+'</th><th colspan="2">TARGET DATE</th><th colspan="2">'+date+'</th><th colspan="2">'+
			'Tree No</th><th colspan="3">'+tree+'</th></tr><tr><th colspan="2">JOB ISD TO</th><th colspan="2">'+wrk+'</th><th colspan="2">PDT DPT</th><th colspan="2">'+dptnm+'</th>'
			+'<th colspan="2">Alloy No</th><th colspan="3">'+alloy+'</th></tr> '+
			'<tr><th rowspan="3" style=" vertical-align: middle; ">S.NO</th> <th colspan="5" style=" text-align: center; ">ISSUED TO WORKER </th><th colspan="5" style=" text-align: center; ">RECIEVED FROM WORKER</th><th  rowspan="3">REMARK</th></tr><tr><th>Item Desc</th><th>Qty</th><th>Unit</th><th>Weight</th> <th>Sign</th><th>Item Desc</th><th>Qty</th><th>Unit</th><th>Weight</th> <th>Sign</th></tr></thead><tbody>'
			for(var i=0;i<36;i++){
			if(i==0){
					var desc='JOBCARD';wgt=wgt||'';
				var len=res.length;
				}
				else{
					var len='';wgt='';
					var desc='';
				}
			html+='<tr><td>'+(i+1)+'</td><td>'+desc+'</td><td>'+len+'</td><td></td><td>'+wgt+'</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>'	;	
		};
		html+='</tbody></table>';
				printer(html);
				AfterSavingPrintBACKSIDE(typ,docno,cmynm,dptnm);
			}
		});
	}
}

function InHouseBomPrinting(typ,docno,cmynm,dptnm){
	var qry="select bid_job_crd_no,bm_bom_nm,bm_bom_sz,bm_bom_wip_typ,bid_tot_wgt,bid_iss_wgt,bid_bal_wgt,bid_bom_cd,bid_id,bm_bom_typ,bm_bom_wgt"
	+",bm_bom_qty,bid_rcvd_bom_wgt,(select top 1 concat(isnull(johd_trgt_dt,''),'*',isnull(convert(varchar (max),STUFF(( SELECT ',' + johd_ord_no FROM job_ord_hdr_dtl WHERE johd_doc_no = '"+docno+"' group by johd_ord_no FOR XML PATH('') ), 1, 1, '' )),''),'*',isnull((select top 1 dm_dpt_nm from dpt_mst where dm_dpt_cd=johd_pdt_dpt_cd and dm_sts=1),'')) from job_ord_hdr_dtl where johd_doc_no='"+docno+"' and johd_job_sts=1 and johd_trgt_dt!='' order by (cast(johd_trgt_dt as date)) asc) from bom_inhse_dtl left join bom_mst on bm_bom_cd=bid_bom_cd and bid_bal_prcs_typ='InhouseBomMaking' and bid_job_crd_no='"+docno+"' and (bm_bom_sts=1 or bm_bom_sts is null) order by bm_bom_nm,bm_bom_sz,bm_bom_wip_typ,bm_bom_typ";
	AjaxController.getDataForPintoutJOBCARD(qry,(data)=>{
		if(data&&data.length){
			[date,jo,dpt]=data[0][13]?data[0][13].split("*"):'';
			jo=jo||'';dpt=dpt||'';date||'';
			var html='<table class="table table-bordered"><thead><tr ><th style="text-align:center" colspan="8">BOM MAKING</th></tr>'
				+'<tr><th colspan="2">JOBCARD NO</th><th colspan="2">'+docno+'</th><th colspan="2">TARGET DATE</th><th colspan="2">'+date+'</th></tr>'
				+'<tr><th colspan="2">PDT DPT</th><th colspan="2">'+dpt+'</th><th colspan="2">DPT NAME</th><th colspan="2">'+dptnm+'</th></tr>'
				+'<tr><th colspan="2">JO NO</th><th colspan="6">'+jo+'</th></tr>'
				+' <tr><th>S.NO</th><th>Bom Name</th><th>BomSize</th><th>BomWrkType</th><th>BomTyp</th><th>QTY</th><th>Sign</th></tr></thead>';
			var x=0;
				var totres=data.reduce((old,data,ind)=>{
					if(data[1]){
					old.qty+=(+data[4]||0);
					html+='<tr><td>'+(++x)+'</td><td>'+data[1]+'</td><td>'+data[2]+'</td><td>'+data[3]+'</td><td>'+data[9]+'</td><td>'+data[4]+'</td><td></td></tr>'	;	
					}
					return old;
				},{qty:0,totstd:0});
				totres=totres||{qty:0,totstd:0};
				html+='<tr><td  colspan="5">TOTAL</td><td>'+totres.qty+'</td><td></td></tr>';
				
		printer(html);
		
	}
	})
}

function printer(html){
	var frame1 = document.createElement('iframe');
    frame1.name = "frame1";
    frame1.style.position = "absolute";
    frame1.style.top = "-1000000px";
    document.body.appendChild(frame1);
    var frameDoc = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument.document ? frame1.contentDocument.document : frame1.contentDocument;
    frameDoc.document.open();
    frameDoc.document.write('<html><head>');
    frameDoc.document
        .write('<link rel="stylesheet" href="css/bootstrap.min.css"><link href="css/customefonts.css" rel="stylesheet"><style> .table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th { padding-bottom: 0px !important; padding-top: 0px !important; } th { text-align: left; font-weight: 500 !important; } .table{    font-family: "Montserrat", sans-serif !important;}'+$("#HTMLCSS").text()+'div,span,p,b{   font-family: "Montserrat", sans-serif !important;}.col-md-4{width: 33.333333%; padding: 5px; margin-right: 0px; height: 4.65cm; border: 1px solid #ddd; margin-top: 0px; margin-bottom: 0px;}</style>');
    frameDoc.document.write('</head><body>');
    frameDoc.document.write(html);
    frameDoc.document.write('</body></html>');
    frameDoc.document.close();
    setTimeout(function() {
        window.frames["frame1"].focus();
        window.frames["frame1"].print();
        document.body.removeChild(frame1);
    }, 500);
}

function tempTest(){
	 var qry=" select johd_trgt_dt,johd_doc_no,dm_dgn_min_wt,dm_dgn_std_wt,dm_dgn_max_wt,johd_pdt_cd,dm_dgn_img,johd_pdt_btch_no from job_ord_hdr_dtl left join dgn_mst on johd_pdt_cd=dm_pdt_cd and (dm_dgn_sts=1 or dm_dgn_sts is null) and johd_job_sts=1 where johd_doc_no='10005'"	
			AjaxController.getDataForPintoutJOBCARD(qry,(res)=>{
				if(res&&res.length){
				var html='<div class="col-md-12">';
				for(var i=0;i<res.length;i++)	{
					html+='<div class="col-md-4"><div class="col-md-12"><p class="txt" >TGT DT: '+res[i][0]+'</p><p class="txt">JCD NO: '
					+res[i][1]+'</p></div><div class="col-md-12 tct" style="position: absolute;margin: 0% 60% 0%;"><span class="barcodeTarget" id="barcodeTarget'
					+'" ><img src="showImageUrl.mm?path='+res[i][6]+'" width="100px" height="100px"/></span></div><div class="col-md-12 prc"><p class="txt">MIN_MAX: '
					+res[i][2]+'-'+res[i][3]+'</p> <p class="txt">PDT CD: '+res[i][5]+'</p></div><div class="col-md-12 prc"><p class="txt">BATCH NO: '
					+res[i][7]+' &nbsp; NET WGT: &nbsp;</p> <p class="txt">CROSS WGT: &nbsp;&nbsp;&nbsp;&nbsp; NON-GLD WGT:&nbsp;</p></div></div>'; 
			}
				$("#myTable").html(html+'</div>')
			printer(html);
				}
			}); 
}
</script>
<script src="js/body.js"></script>
</body>
</html>