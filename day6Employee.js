let employee=[];
function addEmp(id,name,salary=true){
    employee.push({id,name,salary});
    console.log("employee added",employee);
}
addEmp(1,"vikashini",20000)
addEmp(2,"hari",3000)
addEmp(3,"john",40)

function updateEmp(id,newdetail){
    const emp=employee.find(e=>e.id === id)
    if(emp){
        Object.assign(emp,newdetail);
        console.log("updated",employee)
        }
    else{
        console.log("employee not found")
    }    
}
updateEmp(3, {name:"joe"});

function removeEmp(id){
 const index=employee.findIndex((e) => e.id===id);
if(index !== -1){
    employee.splice(index,id)
    console.log("employee removed",employee)
}else{
    console.log("employee not found");
}
}
removeEmp(1)

function totalsalary(){
    const total=employee.reduce((sum,emp)=>sum+emp.salary,0);
    console.log("total salary is",total);
}
totalsalary()


