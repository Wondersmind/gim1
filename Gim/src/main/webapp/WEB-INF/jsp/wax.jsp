<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<title>Wax</title>
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
               <c:choose><c:when test="${WaxSaveRes eq true}">
                 <span id="successResult" style="color:green"><div class="alert alert-success" style="text-align: center;">Saved Successfully</div></span>
                    </c:when><c:when test="${WaxUpdateRes eq true}">
                 <span id="successResult" style="color:green"><div class="alert alert-success" style="text-align: center;">Updated Successfully</div></span>
                    </c:when><c:otherwise> <span id="successResult"></span></c:otherwise>
                    </c:choose>
                                    <div class="portlet-title">
                                        <div class="caption">
                                            <i class="icon-social-dribbble font-dark hide"></i>
                                            <span class="caption-subject font-dark bold uppercase text-muted page-title-alt"> <h4 class="page-title">Wax</h4></span>
                                        </div>
                                        <div class="actions">
                                          
                                            <a class="btn btn-circle btn-icon-only btn-default" href="addwax.mm">
                                                <i class="icon-plus"></i>
                                            </a>
                                                <a class="btn btn-circle btn-icon-only btn-default" href="javascript:void(0)" id="printWaxDetail" data-toggle="tooltip" title="Print">
                                                <i class="icon-printer"></i>
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
          	var tables='${exsitWaxDet}';
              </script>
                <%-- <table class="table table-bordered" id="myTable">
                      <thead>
                    <tr>
                    <th>Cmy Name</th>
                   	 <th>Dcmnt No</th>
                   	  <th>Wrk Name</th>
                   	 	 <th>Dsgn No</th>
                          <th>No Of Ords</th>
                          <th>No Of Pdts</th>
                          <th>Sum Of Qty</th>
                          <th>Sum Of StdWgts</th>
                          <th>Auth Sts</th>
                           <th>Action</th>
                        </tr>
                  </thead>
                      <tbody>
                   <c:forEach var="exsitWax" items="${exsitWaxDet}">
                    <tr>
                      <td>${exsitWax[9]}</td>
                          <td>${exsitWax[0]}</td>
                           <td>${exsitWax[8]}</td>
                          <td>${exsitWax[7]}</td>
                           <td>${exsitWax[1]}</td>
                          <td>${exsitWax[4]}</td>
                          <td>${exsitWax[2]}</td>
                          <td>${exsitWax[3]}</td>
                         <td>${exsitWax[6]}</td>
                         <td class="text-right">
                         <c:choose><c:when test="${exsitWax[6] eq '0'}">
										<button type="button" class="btn btn-xs btn-default btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Edit row" onclick="editwaxdetail(${exsitWax[5]})"><i class="fa fa-pencil"></i></button>
										<button type="button" class="btn btn-xs btn-danger btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Delete row" onclick="delWaxRecFromTable(${exsitWax[5]},'${exsitWax[0]}',this)"><i class="fa fa-trash-o"></i></button>
									</c:when>
									<c:otherwise>
									<button type="button" class="btn btn-xs btn-default btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Edit row" onclick="editwaxdetail(${exsitWax[5]})"><i class="fa fa-pencil"></i></button>
									<c:choose><c:when test="${exsitWax[10] eq '1'}">
                         				<button type="button" class="btn btn-xs btn-primary btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="JobCard Issued" onclick="jobOrderIssueINCstHdrRecDtl('${exsitWax[0]}',this)" ><i class="fa fa-shield"></i></button>	
									</c:when><c:otherwise>
                         				<button type="button" class="btn btn-xs btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Issue JobCard ?" onclick="jobOrderIssueINCstHdrRecDtl('${exsitWax[0]}',this)"><i class="fa fa-shield"></i></button>
                         				</c:otherwise> </c:choose>
									</c:otherwise>
									 </c:choose>
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
 <div id="myGridPrint" style="display:none;height: 500px;" class="ag-theme-fresh"></div>
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) --> 
<script src="js/jquery.min.js"></script> 
<!-- Include all compiled plugins (below), or include individual files as needed --> 
<script src="js/bootstrap.min.js"></script>
<script src="js/w2ui.min.js"></script>
 <script src="js/reportdashboard/ag-grid-enterprise.js"></script>
          <script src="js/customizeprinter.js"></script>
<script>
var cmyCDS='${LoginDet.em_cmy_cd}';
$(document).ready(function(){
	if(tables){
		tables=tables.replace(/\\/ig,"'/'")
		var res=eval(tables);
		 if(res !=null && res.length>0){
			 res.forEach((obj,index)=>{ obj['recid']=index
			obj[2]=(+obj[2]);	 
			 });
			 var tempStorage=res;
				$("#myTable").html('<div id="grid" style="width: 100%; height: 500px;"></div>');
				var columns=[
				             { field: '9', caption: 'Cmy Name',type:'text', sortable: true},
		                        { field: '0', caption: 'Dcmnt No',type:'text',sortable: true},
		                        { field: '11', caption: 'Dcmnt.DT',type:'text',sortable: true},
		                        { field: '8',caption:'Wrk Name',type:'text', sortable: true},
		                        { field: '7', caption: 'Dsgn No',type:'text', sortable: true},
		                        { field: '1', caption: 'No Of Ords',type:'float', sortable: true},
		                        { field: '4',caption: 'No Of Pdts',type:'float', sortable: true},
		                        { field: '2', caption: 'Sum Of Qty',type:'float', sortable: true},
		                        { field: '3', caption: 'Sum Of StdWgts',type:'float', sortable: true},
		                        { field: '14', caption: 'Dept',type:'text', sortable: true},
		                        { field: '15', caption: 'Carat',type:'text', sortable: true},
		                        { field: '6', caption: 'Auth Sts',type:'text', sortable: true},
		                        { field: '8', caption: 'Action',type:'text',
				                            render: function (record, index, column_index) {
				                            	var html='';
				                            	if(record[6]=='1'){
				                            	html='<button type="button" class="btn btn-xs btn-default btn-equal"  data-toggle="tooltip" data-placement="top" data-original-title="Edit row" onclick="editwaxdetail(\''+record[5]+'\')"><i class="fa fa-pencil"></i></button>';	
				                            	}
				                            	else{
				                            		html='<button type="button" class="btn btn-xs btn-default btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Edit row" onclick="editwaxdetail(\''+record[5]+'\')"><i class="fa fa-pencil"></i></button>'
				                            		+'<button type="button" class="btn btn-xs btn-danger btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Delete row" onclick="delWaxRecFromTable(\''+record[5]+'\',\''+record[0]+'\',this)"><i class="fa fa-trash-o"></i></button>';
													}
				                            
				                            	html+='&nbsp;<button type="button" class="btn btn-xs btn-info" data-toggle="tooltip" data-placement="top" data-original-title="Print" onclick="AfterSavingPrint(\''+record[0]+'\',\''+record[9]+'\',\''+record[8]+'\',\''+record[4]+'\',\''+record[2]+'\',\''+record[3]+'\')"><i class="icon-printer"></i></button>';
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


$("#printWaxDetail").on("click",function(){
	var docNo=$("#docNoWax").text();
	const qery=waxDetailPrint;
	AjaxController.getwaxDetailForPrint(qery,returnOfWaxDtls);
	function returnOfWaxDtls(res){
	var result='<table class="table table-bordered table stripped"><thead><tr><th style="text-align:center" colspan="6">Wax_Detail</th></tr>'
		+'<tr><th>WaxDocNo</th><th>WorkerName</th><th>ProductId</th><th>No.of.Prdcts</th><th>Qty</th><th>StdWgt</th></tr>'
		+'</thead><tbody>';
		if(res!=null){
			var reslength=res.length;
			for(var i=0;i<reslength;i++){
				result+='<tr><td>'+res[i][0]+'</td><td>'+res[i][1]+'</td><td>'+res[i][6]+'</td><td>'+res[i][2]+'</td><td>'
				+res[i][4]+'</td><td>'+res[i][5]+'</td></tr>';
			}
		}
		else{
			result+='<tr><td colspan="7" style="textalign:center">NO RECORDS FOUND</td></tr>';	
		}
		result+='</tbody></table>';
		   var frame1 = document.createElement('iframe');
	        frame1.name = "frame1";
	        frame1.style.position = "absolute";
	        frame1.style.top = "-1000000px";
	        document.body.appendChild(frame1);
	        var frameDoc = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument.document ? frame1.contentDocument.document : frame1.contentDocument;
	        frameDoc.document.open();
	        frameDoc.document.write('<html><head>');
	        frameDoc.document
	            .write('<link rel="stylesheet" href="css/bootstrap.min.css">');
	        frameDoc.document.write('</head><body>');
	        frameDoc.document.write(result);
	        frameDoc.document.write('</body></html>');
	        frameDoc.document.close();
	        setTimeout(function() {
	            window.frames["frame1"].focus();
	            window.frames["frame1"].print();
	            document.body.removeChild(frame1);
	        }, 500);
	}

});





	function jobOrderIssueINCstHdrRecDtl(id,ths){
	$(ths).closest("tr").css("background-color","lightskyblue");
	AjaxController.jobOrderIssueINCstHdrRecDtlAjax(id,retJobOrdIssCstHdr);
	function retJobOrdIssCstHdr(res){
		if(res=="success"){
			$(ths).closest("tr").css("background-color","");
			$(ths).removeClass("btn-default").addClass("btn-primary");
		}
	}	
}
function editwaxdetail(id){
	window.location.href="editwax.mm?wax_hdr_id="+id+"";
}

function delWaxRecFromTable(id,docno,ths){
	$(ths).closest("tr").css("background-color","orangered");
	AjaxController.delWaxRecFromTableAjax(id,docno,delResOfWaxHdr);
	function delResOfWaxHdr(res){
		if(res=="success"){
		$(ths).closest("tr").remove();	
		}
		else{
			$(ths).closest("tr").css("background-color","");	
		}
	}
}

function AfterSavingPrint(docNo,cmynm,wrknm,nofpdt,totpdtqty,stdwgt){
	const qery='select whd_doc_no,em_emp_nm,whd_pdt_cd,(select sum(cast(whd_pdt_qty as float)) from wax_hdr_dtl w where whd_doc_no=\''+docNo+'\' and w.whd_cmy_cd=\''+cmyCDS+'\' and w.whd_pdt_cd=dm_pdt_cd and whd_wax_sts=1) as qty,'
	+'dm_dgn_min_wt, dm_dgn_max_wt,dmm_mold_no,dmm_mold_pcs,(select top 1 whd_trgt_dt from wax_hdr_dtl w where w.whd_doc_no=wo.whd_doc_no and w.whd_cmy_cd=wo.whd_cmy_cd and whd_wax_sts=1 and whd_trgt_dt!=\'\' order by cast(whd_trgt_dt as date) asc) as trgtdt,(select top 1 dm_dpt_nm from dpt_mst where dm_dpt_cd=dm_dgn_dpt and dm_sts=1)as dptnm,(select top 1 ohd_ord_rmk from ord_hdr_dtl where ohd_id=whd_ord_prm_id) as rmk from wax_hdr_dtl wo left join dgn_mst on whd_pdt_cd=dm_pdt_cd and whd_cmy_cd=dm_cmy_cd left join emp_mst on'
		+' whd_wrkr_cd=em_emp_id left join dgn_mold_mst on whd_pdt_cd=dmm_dgn_no and dmm_cmy_cd=whd_cmy_cd where whd_doc_no=\''+docNo+'\' and  whd_cmy_cd=\''+cmyCDS+'\' and whd_wax_sts=1 and (dm_dgn_sts is null or dm_dgn_sts=1)';
	AjaxController.getwaxDetailForPrint(qery,returnOfWaxDtls);
	function returnOfWaxDtls(res){
		if(res!=null){
			var reslength=res.length,jsonList=[],colDefList,colstate=[{"colId":"ProductId","hide":false,"aggFunc":null,"width":25,"pivotIndex":null,"rowGroupIndex":1},{"colId":"Qty","hide":false,"aggFunc":null,"width":10,"pivotIndex":null,"rowGroupIndex":2},{"colId":"MinWgt","hide":false,"aggFunc":null,"width":10,"pivotIndex":null,"rowGroupIndex":3},{"colId":"MaxWgt","hide":false,"aggFunc":null,"width":54,"pivotIndex":null,"rowGroupIndex":4},{"colId":"MoldNo","hide":false,"aggFunc":null,"width":10,"pivotIndex":null,"rowGroupIndex":5},{"colId":"REMARK","hide":false,"aggFunc":null,"width":10,"pivotIndex":null,"rowGroupIndex":0},{"colId":"MoldQty","hide":false,"aggFunc":"sum","width":80,"pivotIndex":null,"rowGroupIndex":null}];
			var trgtDt='',pdtdpt=new Set();
			for(var i=0;i<reslength;i++){
				if(i==0){
				trgtDt=res[i][8]||'';
				}
				pdtdpt.add(res[i][9]||'');
				jsonList.push({REMARK:(res[i][10]||''),ProductId:res[i][2],Qty:Number(res[i][3])||0,MinWgt:Number(res[i][4])||0,MaxWgt:Number(res[i][5])||0,MoldNo:res[i][6],MoldQty:Number(res[i][7])||0})
			}
			colDefList=[{headerName: 'ProductId', field: 'ProductId', width: 160, enableRowGroup: true, enablePivot: true, enableValue: true},
			            {headerName: 'Qty', field: 'Qty', width: 50, enableRowGroup: true, enablePivot: true, enableValue: true},
			            {headerName: 'MinWgt', field: 'MinWgt', width: 80, enableRowGroup: true, enablePivot: true, enableValue: true},
			            {headerName: 'MaxWgt', field: 'MaxWgt', width: 80, enableRowGroup: true, enablePivot: true, enableValue: true},
			            {headerName: 'MoldNo', field: 'MoldNo', width: 200, enableRowGroup: true, enablePivot: true, enableValue: true},
			            {headerName: 'REMARK', field: 'REMARK', width: 300, enableRowGroup: true, enablePivot: true, enableValue: true},
			            {headerName: 'M.Qty', field: 'MoldQty', width: 50, enableRowGroup: true, enablePivot: true, enableValue: true}]
			var pivotObj=printInAggrid(jsonList,colDefList,colstate,totpdtqty);
			var result='<table class="table table-bordered table stripped" style="width:'+pivotObj.width+';margin-bottom: 0px;"><thead><tr style="height: 1px !important;"><th style="text-align:center" colspan="6">Wax_Order</th></tr>';
			result+='<tr style="height: 1px !important;"><th colspan="2">CmyName</th><th colspan="1">'+cmynm+'</th><th colspan="2">DocNo</th><th colspan="1">'+docNo+'</th></tr>';
			result+='<tr style="height: 1px !important;"><th colspan="2">Pdt Dept</th><th colspan="1">'+[...pdtdpt].join()+'</th><th colspan="2">Target Date</th><th colspan="1">'+trgtDt+'</th></tr>';
			result+='<tr style="height: 1px !important;"><th colspan="2">WorkName</th><th colspan="1">'+wrknm+'</th><th colspan="2">Tot.Pdt.Qty</th><th colspan="1">'+totpdtqty+'</th></tr>';
			result+='<tr style="height: 1px !important;"><th colspan="2">No.Of.Pdt</th><th colspan="1">'+nofpdt+'</th><th colspan="2">Sum.Of.StdWgt</th><th colspan="1">'+stdwgt+'</th></tr>';
			result+='</thead></table>';
			var frame1 = document.createElement('iframe');
	        frame1.name = "frame1";
	        frame1.style.position = "absolute";
	        frame1.style.top = "-1000000px";
	        document.body.appendChild(frame1);
	        var frameDoc = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument.document ? frame1.contentDocument.document : frame1.contentDocument;
	        frameDoc.document.open();
	        frameDoc.document.write('<html><head>');
	        frameDoc.document
	            .write('<link rel="stylesheet" href="css/bootstrap.min.css"><link rel="stylesheet" href="css/ag-grid.css"><link rel="stylesheet" href="css/ag-theme-fresh.css"><link href="css/customefonts.css" rel="stylesheet"><link rel="stylesheet" href="css/theme-fresh.css"><style>.ag-header-viewport { background: #fdb64b !important; font-size: 15px; color: black; } .ag-theme-fresh .ag-menu .ag-menu-option-active { background: #fdb64b; } .ag-theme-fresh .ag-column-select-panel .ag-column-select-column-group, .ag-theme-fresh .ag-column-select-panel .ag-column-select-column { height: 20px; line-height: 20px; width: max-content !important; } .ag-theme-fresh .ag-column-drop-vertical .ag-column-drop-cell { display: block; float: none; width: max-content; min-width: -webkit-fill-available; } .ag-theme-fresh .ag-header-cell-label .ag-header-cell-text { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: "Montserrat", sans-serif !important; } .ag-cell-value { font-family: "Montserrat", sans-serif !important; font-size: 13px !important; } .TotalRowGrp{ background: bisque !important; font-weight: bold !important; } .ag-layout-normal .ag-body-viewport { background: white !important; } .ag-theme-fresh .ag-status-bar { background: bisque !important; color: black !important; border: 1px solid #a9a9a9!important; display: flex; justify-content: flex-end; padding: 8px 16px; font-family: "Montserrat", sans-serif !important; } .ag-theme-fresh .ag-tool-panel .ag-column-select-panel { border-bottom: 1px solid darkgrey; padding: 4px 0; padding-bottom: 3px; max-height: 250px !important; overflow-y: auto !important; } .ag-tool-panel { width: 230px !important; } .ag-theme-fresh .ag-tool-panel .ag-column-drop { max-height: 110px !important; }.ag-cell,.ag-header-cell{ border: 1px solid #bbbbbb !important; }.ag-header-group-cell{border: 1px solid #bbbbbb !important; }.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th { padding: 8px; line-height:1.5 !important; vertical-align: top; border-top: 1px solid #ddd; } .table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th { padding-bottom: 0px !important; padding-top: 0px !important; } th { text-align: left; font-weight: 500 !important; } .table{    font-family: "Montserrat", sans-serif !important;}.ag-header-cell,.ag-cell{text-align: center !important;}</style>');
	        frameDoc.document.write('</head><body>');
	        frameDoc.document.write(result+pivotObj.html);
	        frameDoc.document.write('</body></html>');
	        frameDoc.document.close();
	        setTimeout(function() {
	            window.frames["frame1"].focus();
	            window.frames["frame1"].print();
	            document.body.removeChild(frame1);
	        }, 500);
	       
		}
	}
	
}

</script>
</body>
<script src="js/body.js"></script>
</html>