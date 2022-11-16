var myData=[{user:"James", address:"123 Keele St. Toronto, ON."},{user: "Mary", address: "92 apple Ave. Hamilton, On"},{user: "Loil", address: "111 Neew St.burlington, ON"}];

window.onload = function(){
    var container = document.querySelector("#outputTable");
    var myRows= "";
    for(e of myData){
        myRows += "<tr>" + "<td>"+e.user+"</td>" +"<td>"+e.address+"</td>"+"</th>"
    }
    container.innerHTML+=myRows;
}