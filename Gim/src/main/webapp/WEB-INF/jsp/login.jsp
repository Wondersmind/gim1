<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="Dashboard">
    <meta name="keyword" content="Dashboard, Bootstrap, Admin, Template, Theme, Responsive, Fluid, Retina">
<script type="text/javascript" src="dwr/interface/AjaxController.js"></script>
<script type="text/javascript" src="dwr/engine.js"></script>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
    <title>Marijo-Login</title>

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom styles for this template -->
    <link href="css/stylelogin.css" rel="stylesheet">
  <link href="css/customefonts.css" rel="stylesheet">
    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
<style type="text/css">
input,button,a,label,h2{
 font-family:'Montserrat', sans-serif !important;

}
input,label,div {
color: black !important;
}
</style>
  </head>

  <body>

      <!-- **********************************************************************************************************************************************************
      MAIN CONTENT
      *********************************************************************************************************************************************************** -->

	  <div id="login-page">
	  	<div class="container-fluid">
	  	
		      <form class="form-login" onsubmit="return loginValrptTol()"  method="post">
		        <h2 class="form-login-heading">MARIJO</h2>
		        <div class="login-wrap">
		            <input  class="form-control" placeholder="User Email"  id="Email1" required="required">
		            <br>
		            <input type="password" class="form-control" placeholder="User Password" id="password1" required="required">
		            
		           <span class="pull-left" style="margin-left: 2em;">
							<label class="checkbox"> <input type="checkbox" id="chkedId"> Remember me </label> </span>
		            
		                <span class="pull-right">
		                   <label class="checkbox"> <a data-toggle="modal" href="login.html#myModal"> Forgot Password?</a></label>
		
		                </span>
		            
		            <button class="btn btn-theme btn-block" href="dashboard.html" type="submit"><i class="fa fa-lock"></i> SIGN IN</button>
		  <br>  <span id="logInEror"></span>
		           
		           
		          <!--  <hr>  <div class="login-social-link centered">
		            <p>or you can sign in via your social network</p>
		                <button class="btn btn-facebook" type="submit"><i class="fa fa-facebook"></i> Facebook</button>
		                <button class="btn btn-twitter" type="submit"><i class="fa fa-twitter"></i> Twitter</button>
		            </div> -->
		           
		
		        </div>
		
		          <!-- Modal -->
		          <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="myModal" class="modal fade">
		              <div class="modal-dialog">
		                  <div class="modal-content">
		                      <div class="modal-header">
		                          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
		                          <h4 class="modal-title">Forgot Password ?</h4>
		                      </div>
		                      <div class="modal-body">
		                          <p>Enter your e-mail address below to reset your password.</p>
		                          <input type="text" name="email" placeholder="Email" autocomplete="off" class="form-control placeholder-no-fix">
		
		                      </div>
		                      <div class="modal-footer">
		                          <button data-dismiss="modal" class="btn btn-default" type="button">Cancel</button>
		                          <button class="btn btn-theme" type="button">Submit</button>
		                      </div>
		                  </div>
		              </div>
		          </div>
		          <!-- modal -->
		
		      </form>	  	
	  	
	  	</div>
	  </div>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) --> 
<script src="js/jquery.min.js"></script> 
<!-- Include all compiled plugins (below), or include individual files as needed --> 
<script src="js/bootstrap.min.js"></script> 
    <!--BACKSTRETCH-->
    
    <!-- You can use an image of whatever size. This script will stretch to fit in any screen size.-->
    <script type="text/javascript" src="js/jquery.backstretch.min.js"></script>
    <script>
        $.backstretch("images/login.jpg", {speed: 500});
    </script>

<script type="text/javascript">
$(function (){
	AjaxController.getUserLoginCookie(displayCookie);
});
function displayCookie(value) {
if (value != null) {
  	 	$("#Email1").val(value);
  	 	$("#password1").focus();
		$("#chkedId").attr('checked',true);
	}
else{
	$("#Email1").focus();
}
}


function loginValrptTol(){
	var Email=$("#Email1").val(),password=$("#password1").val();
	
		AjaxController.checkEmailandPasswordGIMLogin(Email,password,ChkRes);
		function ChkRes(res){
			if(res=="error"){
			$("#logInEror").html('<div class="alert alert-danger">Email Or Password Invalid Try Another</div>');
			$("#Email1").select();
			$("#Email1").css({"border-color":"#c2775f"});
			$("#password1").css({"border-color":"#c2775f"});
			$("#myAlertS").hide(0);
				return false;	
			}
			else if(res=="notActive"){
			$("#logInEror").html('<div class="alert alert-danger">Sorry!.. Your Account Not Activated</div>');
			$("#Email1").select();
			$("#Email1").css({"border-color":"#c2775f"});
			$("#password1").css({"border-color":"#c2775f"});
			$("#myAlertS").hide(0);
				return false;
			
			}
			else{
				if(Email!=""&&password!=""){
					if($('#chkedId')[0].checked==true){
						AjaxController.userLoginWithcookie(Email, password);
					}
					else{
						AjaxController.userRemovecookie(Email, password);
					}
				$("#logInEror").html('<div class="alert alert-info">Connecting Please Wait....</div>');
			setTimeout(function(){
				window.location.href="dashboard.mm";
			}, 50);
				
				
			}
		}
	}
	return false;
}


</script>
  </body>
</html>
