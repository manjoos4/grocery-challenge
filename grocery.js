function makelist()
{
    var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function(){
    
    if(this.readyState==4 && this.status == 200){
        
    
        var response=JSON.parse( this.responseText);
        
       var list=response.grocery;
    
       document.getElementById("table_list").removeAttribute("hidden","true");
                   var table=document.getElementById("mytable");
                   var i;
                   for( i=0; i<list.length;i++)
                   {
                       var row=`<tr>
                                   <td>${list[i].SlNo}</td>
                                   <td>${list[i].ItemName}</td>
                                   <td>${list[i].Quantity}</td>
                                   <td>${list[i].Unit}</td>
                                   <td>${list[i].Department}</td>
                                   <td>${list[i].Notes}</td>
                               </tr>`
                       table.innerHTML +=row;
                   }
       
               }
               
           }
           xhttp.open("GET","grocery.json",true);
           xhttp.send();
       
       }
       