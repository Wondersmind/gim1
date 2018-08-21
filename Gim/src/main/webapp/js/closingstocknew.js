function showthedepartmentdetails(){
	var cmycd=document.getElementById("cmycd").value;
	AjaxController.getthisRecords(cmycd,"STKWITHPRTY",result)
}
function result(result){
	var res="";
	if(result!=null){
		for (var i = 0; i < result.length; i++) {
			res+='<tr>'
				/*+'<td class=""><label class="control-label lbl" >'+result[i][0]+'</label></td>'*/
				+'<td class=""><label class="control-label lbl" >'+result[i][1]+'</label></td>'
				+'<td class=""><label class="control-label lbl" >'+result[i][2]+'</label></td>'
				+'<td class=""><label class="control-label lbl" >'+result[i][4]+'</label></td>'
				+'<td class=""><label class="control-label lbl" >'+result[i][3]+'</label></td>'
				+'<td class=""><label class="control-label lbl" >'+result[i][5]+'</label></td>'
				+'<td class=""><label class="control-label lbl" >'+result[i][13]+'</label></td>'
				
				
				/*+'<td class=""><label class="control-label lbl" >'+result[i][5]+'</label></td>'
				+'<td class=""><label class="control-label lbl" >'+result[i][6]+'</label></td>'
				+'<td class=""><label class="control-label lbl" >'+result[i][7]+'</label></td>'
				+'<td class=""><label class="control-label lbl" >'+result[i][8]+'</label></td>'
				+'<td class=""><label class="control-label lbl" >'+result[i][9]+'</label></td>'
				+'<td class=""><label class="control-label lbl" >'+result[i][10]+'</label></td>'
				+'<td class=""><label class="control-label lbl" >'+result[i][11]+'</label></td>'
				+'<td class=""><label class="control-label lbl" >'+result[i][12]+'</label></td>'
				+'<td class=""><label class="control-label lbl" >'+result[i][13]+'</label></td>'
				+'<td class=""><label class="control-label lbl" >'+result[i][14]+'</label></td>'
				+'<td class=""><label class="control-label lbl" >'+result[i][15]+'</label></td>'
				+'<td class=""><label class="control-label lbl" >'+result[i][16]+'</label></td>'
				+'<td class=""><label class="control-label lbl" >'+result[i][17]+'</label></td>'
				+'<td class=""><label class="control-label lbl" >'+result[i][18]+'</label></td>'
				+'<td class=""><label class="control-label lbl" >'+result[i][19]+'</label></td>'*/
				+'</tr>';
		}
	}

	
	
	document.getElementById("recordsbody").innerHTML=res;
}