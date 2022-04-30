function createtable(r,c){
    let table=document.createElement('table');
    let tbody=document.createElement('tbody');

    for(let i=0;i<r;i++){
        row=document.createElement('tr');
        for(let j=0;j<c;j++){
            col=document.createElement('td');
            row.appendChild(col);
        }
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
    return table;
}

function create(){
    let rows=document.querySelector('#rows').value;
    let columns=document.querySelector('#columns').value;
    let tablecontainer=document.querySelector('#tablecontainer');
    let table=createtable(rows,columns);
    table.classList.add('table');
    table.classList.add('table-bordered');
    table.classList.add('border-primary');
    tablecontainer.appendChild(table);
    

}




