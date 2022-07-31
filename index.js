document.getElementById("btn1").onclick = function() { 
      if(document.querySelector('#Description').value.length === 0){
        alert("Please select a description")
      }else{
        document.getElementById("tasks").innerHTML 
        +=   `<div class ='tasks'>
        <span class ='title'>
      
            ${document.querySelector('#Description').value}
         
          
        </span>
        <button id="delete" class="button23"> Delete</button>
      
        </div>
      
        `;




        var current_tasks = document.querySelectorAll("#delete");
       
       
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
              
            }
           
        }
      }
    };

    
    
    
   var a = document.querySelectorAll(".drop").onclick.value;
   console.log(a);