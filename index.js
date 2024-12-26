let money = 0;
let category=["income","fuel","food"];
let income=0.00;
let expense = 0.00;
let count=0;
function nullifyobj(){
    return history = {
        sno:null,
        date:null,
        time:null,
        category:null,
        amount:null
    }
}

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
    if(new_cat === null || new_cat ==""){
        alert("Enter a valid Category");
    }
    else if(category.includes(new_cat.toLowerCase())){
        alert("Already in Category");
    }
    else{
        category.push(new_cat.toLowerCase());
        alert("Added successfully!!");       
    }
    display();
    
}

function update_history(his){

    let tab = document.getElementById("history_table");
    
     tr=document.createElement("tr");

    td=document.createElement("td");
    td.innerHTML=his.sno;
    tr.appendChild(td);

    td=document.createElement("td");
    td.innerHTML=his.date;
    tr.appendChild(td);

    td=document.createElement("td");
    td.innerHTML=his.time;
    tr.appendChild(td);

    td=document.createElement("td");
    td.innerHTML=his.category;
    tr.appendChild(td);

    td=document.createElement("td");
    td.innerHTML=his.amount;
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
    if(!isNaN(parseFloat(amt))){
        if(cat === "income"){
            money = money + parseFloat(amt); 
            income=(Number(income)+Number(amt)).toFixed(2);  
            console.log(income);
           }
           else{    
            money = money - parseFloat(amt);
            expense=(Number(expense)+Number(amt)).toFixed(2);  
           }
           money = (money); 
           current.innerHTML=money.toFixed(2);
        
           //update history
           let obj = nullifyobj();
           count++;
           obj.sno=count;
           obj.category= cat.toUpperCase();
        
           if(cat === "income")
           obj.amount = money +"&#x2191;";
           else{
            obj.amount = money +"&#x2193;";
           }
           let date = new Date();
           obj.date = date.toLocaleDateString();
           obj.time = date.toLocaleTimeString();
           update_history(obj);

           update_inc_exp();
    }
    else{
        alert("Please Enter the Amount");
    }
    
}



window.onload = display;