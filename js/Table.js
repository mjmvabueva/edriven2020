var displayTable = document.getElementById('displayTable')
var tableBody = displayTable.firstElementChild //NEEDED TO DISPLAY CONTENT
var object = null
var piece = null

if(data != null){
    for(var i = 0; i < data.length; i++){
        object = data[i]
        piece = Object.getOwnPropertyNames(object)//['ORNumber', 'name', 'items', 'total']
        var tr = document.createElement('tr')
        var checker = true
        for(var ii = 0; ii < piece.length; ii++){
            var td = document.createElement('td')
            td.scope = 'row'
            if(ii == 0 && checker){ //FOR # COLUMN IN TABLE
                var tdTextNode = document.createTextNode(i + 1)
                td.appendChild(tdTextNode)
                tr.appendChild(td)
                tableBody.appendChild(tr)
                ii--
                checker = false
            }
            else{
                td.className = 'txtInfo'
                if(ii == piece.length - 1){ //FOR ACTION COLUMN IN TABLE

                    var btn = document.createElement("BUTTON");
                    btn.setAttribute('data-bs-target', '#viewItem')
                    btn.innerHTML = "View";    
                    btn.className = "btn btn-light mb-2" 
                    btn.id = "viewOrder"              
                    document.body.appendChild(btn);
                    btn.setAttribute('data-bs-toggle', 'modal')
                    td.appendChild(btn)
                    tr.appendChild(td)
                    tableBody.appendChild(tr)  

                }

                else if(ii == piece.length - 2){ //FOR TOTAL COLUMN IN TABLE
                    var result = data[i][piece[piece.length - 1]]
                    var tdTextNode = document.createTextNode(result.toFixed(2))
                    td.appendChild(tdTextNode)
                    tr.appendChild(td)
                    tableBody.appendChild(tr)                     
                }

                else{ //FOR ORDER # AND CUSTOMER NAME COLUMNS IN TABLE
                    var tdTextNode = document.createTextNode(data[i][piece[ii]])
                    td.appendChild(tdTextNode)
                    tr.appendChild(td)
                    tableBody.appendChild(tr)                    
                }
            }
        }
    }
}