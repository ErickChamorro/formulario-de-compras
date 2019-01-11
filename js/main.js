            function agregar(){
                var ii = document.getElementById("uno").value;  
                var i = document.getElementById("dos").value;               
                var i3 = document.getElementById("tres").value;     

                var r=i*i3;
                document.getElementById("row_add").onclick=function(){
                
                if(i==='0'||i3==='0'){
                    alert('La cantindad ni el precio pueden ser igual a 0');}
                else{
                    var x = document.getElementById("myTable").getElementsByTagName("tr").length;
                    addRow([x,ii,i,i3,r]);}
                    }

                ii.value="";    
                i.value=""; 
                i3.value="";
            }

            function addRow(dataArr){
                var tr=document.createElement('tr');
                var len=dataArr.length;
                for(var i=0;i<len;i++){
                    var td=document.createElement('td');
                    td.appendChild(document.createTextNode(dataArr[i]));
                    tr.appendChild(td);
                }
                document.getElementById('tbl_bdy').appendChild(tr);
                return true;
            }
            
            function isNumberKey(evt){
                var charCode = (evt.which) ? evt.which : evt.keyCode
                if (charCode > 31 && (charCode < 48 || charCode > 57)){
                    return false;
                    return true;
                }
    
            }

            function deleteRow() {
                var tt=document.getElementById("t").value;
 
                if(tt==='0'||tt===''){
                    alert('No puede borrar esta columna!');
                }
                else{
                    document.getElementById("myTable").deleteRow(tt); 
                }
 
           }

            function getAllRows(myTable){              
                tabla = document.getElementById("myTable");
                var total = 0;
                for(var i = 1; tabla.rows[i]; i++)
                total += Number(tabla.rows[i].cells[4].innerHTML);
                var num = '$' + total.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                var t = document.getElementById("total");
                t.value=num;
            }
            
            function borrarTodo(){          
                var ii = document.getElementById("uno");
                var i = document.getElementById("dos");         
                var i3 = document.getElementById("tres");
                var t = document.getElementById("total");   
                ii.value="";    
                i.value=""; 
                i3.value="";
                t.value=""; 
                window.location.reload();

            }