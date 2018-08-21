////////////////////////////////add CateGory And Value Handler/////////////////////////////
var cateHandler={};
$(function (){
	$(".valBoxinAly").on("keypress",function(e){
		if(e.keyCode==13){
			onclickSaveInalyDetail();
		}
	});
})

function onclickSaveInalyDetail(){
	var cat=$(".catgyBoxinAly").val(),val=$(".valBoxinAly").val();
	$(".catgyBoxinAly").closest("th").css("background-color","white");
	$(".valBoxinAly").closest("th").css("background-color","white");
	if(cat!=""&&val!=""&&Number(val)<=100&&Number(val)!=0){ 
		if(cateHandler!=null&&cateHandler!=undefined){
			delete cateHandler[cat];
		var sumFin=Number(val);
		$.each(cateHandler,function(key,val){
			return sumFin+=Number(val);
		});}
		if(sumFin<=100){
			cateHandler[cat]=val;
	dispalyCatRes();$(".catgyBoxinAly").val("");$(".valBoxinAly").val("");
	$(".catgyBoxinAly").focus();
	if($("#Alytbody tr").size()==7){
	$(".catgyBoxinAly,.valBoxinAly").prop("readonly",true);}
	}
		else{
			$(".valBoxinAly").closest("th").css("background-color","rgba(248, 69, 3, 0.61)");
			$(".valBoxinAly").focus();	$(".valBoxinAly").select();	$(".valBoxinAly").val(100-(Number(sumFin)-Number(val)));
		}
	}

	else{
		if(cat==""){
			$(".catgyBoxinAly").focus();	
			$(".catgyBoxinAly").closest("th").css("background-color","rgba(248, 69, 3, 0.61)");
		}
		else if(val==""){
			$(".valBoxinAly").closest("th").css("background-color","rgba(248, 69, 3, 0.61)");
			$(".valBoxinAly").focus();	
		}
		else if(Number(val)>100){
			$(".valBoxinAly").closest("th").css("background-color","rgba(248, 69, 3, 0.61)");
			$(".valBoxinAly").focus();	$(".valBoxinAly").select();
		}
		else{
			$(".valBoxinAly").closest("th").css("background-color","rgba(248, 69, 3, 0.61)");
			$(".valBoxinAly").focus();	$(".valBoxinAly").val("");	
		}
	}
}
function dispalyCatRes(){
var result='';
	$.each(cateHandler,function(cat,val){
	result+='<tr><td colspan="2">'+cat+'</td>  <td colspan="2">'+val+'</td><td>	<button type="button" class="btn btn-xs btn-default btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Edit row" onclick="editAlloyMstRec(\''+cat+'\',\''+val+'\')">'
		+'<i class="fa fa-pencil"></i></button><button type="button" class="btn btn-xs btn-default btn-equal" data-toggle="tooltip" data-placement="top" data-original-title="Delete row"  onclick="delAlloyMstRec(\''+cat+'\',this)"><i class="fa fa-trash-o"></i></button></td></tr>';	
	});
	$("#Alytbody").html(result);
	   $('[data-toggle="tooltip"]').tooltip(); 
}

function delAlloyMstRec(key,ths){
	delete cateHandler[key];
	$(ths).closest("tr").css("background-color","redorange");
	$(ths).closest("tr").remove();
	if($("#Alytbody tr").size()<7){
		$(".catgyBoxinAly,.valBoxinAly").prop("readonly",false);}
		}
function editAlloyMstRec(key,val){
	$(".catgyBoxinAly").val(key);$(".valBoxinAly").val(val);
	$(".catgyBoxinAly").select();$(".catgyBoxinAly").focus();
}
function saveAlloyMstRec(){ 
	var namealy=$("#nameOfAlloy").val(),siz=$("#Alytbody tr").size();
	if(namealy!=""&&siz>0){
	$("#saveButton").addClass("disabled");
	$("#savesuccessRes").html('<div class="alert alert-info" id="hidealySuc13"> Saving Please Wait ....</div>');$("#hidealySuc13").fadeOut(3000);
	var cnt=0,cat1="",cat2="",cat3="",cat4="",cat5="",cat6="",cat7="",val1="",val2="",val3="",val4="",val5="",val6="",val7="";
	var alycd=$("#PriIdOfaloy").html(),desAly=$("#descOfAlloy").val();
	$.each(cateHandler,function(cat,val){
		if(cnt==0){cat1=cat;val1=val};
		if(cnt==1){cat2=cat;val2=val};
		if(cnt==2){cat3=cat;val3=val};
		if(cnt==3){cat4=cat;val4=val};
		if(cnt==4){cat5=cat;val5=val};
		if(cnt==5){cat6=cat;val6=val};
		if(cnt==6){cat7=cat;val7=val};
		cnt++;
	});
	var alyMst={am_cmy_cd:cmycode,am_aly_cd:alycd,am_aly_nm:namealy,am_aly_des:desAly,am_aly_ctgy1:cat1,am_aly_ctgy2:cat2,am_aly_ctgy3:cat3,am_aly_ctgy4:cat4,am_aly_ctgy5:cat5,am_aly_ctgy6:cat6,am_aly_ctgy7:cat7,
			am_aly_val1:val1,am_aly_val2:val2,am_aly_val3:val3,am_aly_val4:val4,am_aly_val5:val5,am_aly_val6:val6,am_aly_val7:val7,am_aly_sts:true};
	AjaxController.saveAlloyMsaterDtailsinAjax(JSON.stringify(alyMst),false,resOfsucAly);
	}
	else{
		if(siz==0){
			$("#savesuccessRes").html('<div class="alert alert-danger" id="hidealySuc3"> Add Category Please ....</div>');$("#hidealySuc3").fadeOut(3000);
		}
		else{
			$("#savesuccessRes").html('<div class="alert alert-danger" id="hidealySuc4"> Enter Name Please ....</div>');$("#hidealySuc4").fadeOut(3000);	
			$("#nameOfAlloy").focus();
		}
	}
}

function resOfsucAly(res){
	if(res=="success"){
		window.location.href="alloymaster.mm";
	}
}

function editAlloyMstRecFromDb(id){
	window.location.href="editalloymaster.mm?aly_cd="+id+"";
}

function delAlloyMstRecFromDb(id,ths){
	$(ths).closest("tr").css("background-color","redorange");
	AjaxController.delAlloyMstRecFromDbAjax(id,retDelResAly);
	function retDelResAly(res){
		if(res=="success"){
			$(ths).closest("tr").remove();	
		}
	}
}