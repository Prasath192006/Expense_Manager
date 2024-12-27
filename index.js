let money = 0;
let category=["income","fuel","food"];
let income=0.00;
let expense = 0.00;
let count=0;

function display(){

    let dropeDown = document.getElementById("DropDown");
    let selectElement = document.createElement("select");
    
    selectElement.id = "Category";

    category.forEach((name=>{
        let option = document.createElement("option");
        option.textContent=name.toUpperCase();
        option.value = name;

        selectElement.appendChild(option);
    }))

    dropeDown.innerHTML="";
    dropeDown.appendChild(selectElement);

}

function Add_cat(){
    let new_cat = prompt("Enter category","");
    if(!(new_cat == null)){
    if(new_cat ==""){
        alert("Enter a valid Category");
    }
    else if(category.includes(new_cat.toLowerCase())){
        alert("Already in Category");
    }
    else{
        category.unshift(new_cat.toLowerCase());
        alert("Added successfully!!");       
    }
    display();
}
    
    
}

function update_history(sno,category,amount,date,time){

    let tab = document.getElementById("history_table");
    
     tr=document.createElement("tr");
     console.log(sno)

    td=document.createElement("td");
    td.innerHTML=sno;
    tr.appendChild(td);

    td=document.createElement("td");
    td.innerHTML=date;
    tr.appendChild(td);

    td=document.createElement("td");
    td.innerHTML=time;
    tr.appendChild(td);

    td=document.createElement("td");
    td.innerHTML=category;
    tr.appendChild(td);

    td=document.createElement("td");
    td.innerHTML=amount;
    tr.appendChild(td);
    
    tab.appendChild(tr);

}

function update_inc_exp(){
    let inc = document.getElementById("tot_inc");
    let exp = document.getElementById("tot_exp");
    inc.innerHTML=income;
    exp.innerHTML=expense;
}

function modify(){
    let cat = document.getElementById("Category").value;
    let current = document.getElementById("curr_value");
    let amt = document.getElementById("value").value; 
    let udate= document.getElementById('date').value;
    if(!isNaN(parseFloat(amt)) && !(udate === null || udate === '')){
        if(cat === "income"){
            money = money + parseFloat(amt); 
            income=(Number(income)+Number(amt)).toFixed(2);
           }
           else{    
            money = money - parseFloat(amt);
            expense=(Number(expense)+Number(amt)).toFixed(2);  
           }
           money = (money); 
           current.innerHTML=money.toFixed(2);
        
           //update history
           count++;
           let sno=count;
           let category= cat.toUpperCase();
           let amount;
           if(cat === "income")
               amount = money +"&#x2191;";
           else{
               amount = money +"&#x2193;";
           }
           let date = new Date();
           let res_date = udate;
           let time = date.toLocaleTimeString();
           update_history(sno,category,amount,res_date,time);

           update_inc_exp();
    }
    else{
        if(isNaN(parseFloat(amt))){
            alert("Please Enter the Amount");
        }
        else
        alert("Please Enter the Date");
        
    }
    
}


function hist(){
    let his_tab = document.getElementById("his_dis");
    his_tab.style.display="block";

}
function go_back(){
    let his_tab = document.getElementById("his_dis");
    his_tab.style.display="none";

}


window.onload = display;
