
var addbtn = document.getElementById("addbtn")
var itemList = document.getElementById("to-do")

addbtn.addEventListener("click",addchild)
itemList.addEventListener("click",removeRow)

function removeRow(e){
    if(e.target.classList.value=="fa fa-times"){     
        e.target.parentNode.parentElement.remove()
    }else if(e.target.id == "cross"){      
             e.target.parentNode.remove()
             }
}


function addchild(){
   
    
    // setting the id to-do row
    let row = document.createElement("div")
    row.className = "row1"
    row.setAttribute("id","to-do-row")//+document.getElementById("to-do").childElementCount)
    let x = document.getElementById("to-do");
    x.appendChild(row)
    
    
    
    
    // stting the to-do text
    let h1div = document.createElement("div");
    
    console.log(h1div)
    
    h1div.className ="h1div";
    let h1 = document.createElement("h5");
    
    h1.innerHTML =document.getElementById("textInput").value;
    document.getElementById("textInput").value = "";
    h1div.appendChild(h1) 
    
    console.log(h1div)
    
    row.appendChild(h1div);
    let elemNum =document.getElementById("to-do").childElementCount;
    /*
    //setting the tick button
    let buttonTick = document.createElement("button");
    let tickspan = document.createElement("i");
    tickspan.classList.add("fa");
    tickspan.classList.add("fa-check");
    buttonTick.appendChild(tickspan);
    buttonTick.setAttribute("id","tick")//+document.getElementById("to-do").childElementCount)
    row.appendChild(buttonTick);
    */
    //setting the cross button
    let buttonCross = document.createElement("button");
    let crossspan = document.createElement("i");
    crossspan.classList.add("fa");
    crossspan.classList.add("fa-times");
    buttonCross.appendChild(crossspan);
    buttonCross.setAttribute("id","cross")//+document.getElementById("to-do").childElementCount)
    row.appendChild(buttonCross);

        
}





