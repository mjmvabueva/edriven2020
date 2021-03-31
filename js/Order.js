var viewItem = document.getElementById('viewItem')
var viewOrders = document.querySelectorAll('#viewOrder')
var ORview = document.getElementById('ORview')
var cstmerView = document.getElementById('cstmerView')
var itemView1 = document.getElementById('itemView1')
var itemView2 = document.getElementById('itemView2')
var itemView3 = document.getElementById('itemView3')
var itemView4 = document.getElementById('itemView4')
var pView1 = document.getElementById('pView1')
var pView2 = document.getElementById('pView2')
var pView3 = document.getElementById('pView3')
var pView4 = document.getElementById('pView4')
var vQty1 = document.getElementById('vQty1')
var vQty2 = document.getElementById('vQty2')
var vQty3 = document.getElementById('vQty3')
var vQty4 = document.getElementById('vQty4')
var SBtl1 = document.getElementById('SBtl1')
var SBtl2 = document.getElementById('SBtl2')
var SBtl3 = document.getElementById('SBtl3')
var SBtl4 = document.getElementById('SBtl4')
var exit = document.getElementById('exit')
var data = JSON.parse(localStorage.getItem("customers"))
var nItems = [itemView1, itemView2, itemView3, itemView4]
var costItem = [pView1, pView2, pView3, pView4]
var nQty = [vQty1, vQty2, vQty3, vQty4]
var nSBttl = [SBtl1, SBtl2, SBtl3, SBtl4]
var orderNum;
var itemBody = document.getElementById('itemBody')

viewItem.addEventListener("hidden.bs.modal",function(){
    itemBody.innerHTML = ''
})
viewOrders.forEach(function(viewOrder){
    viewOrder.addEventListener('click', function(e){
        console.log(e.target)
        orderNum = e.target.parentElement.parentElement.firstElementChild.nextElementSibling.innerText //CATCH ORDER NUMBER THAT IS CLICKED
        for(var i = 0; i < data.length; i++){
            if(data[i]['ORNumber'] == orderNum){    
                ORview.value = data[i]['ORNumber']
                cstmerView.value = data[i]['name']
                for(var ii = 0; ii < data[i]['items'].length; ii++){
                    console.log(nItems[ii])
                    if(data[i]['items'][ii]['name'] != ''){
                        var rect = document.createElement("div")
                        rect.className = "rect"
                        rect.style.width = "150px"
                        rect.style.backgroundColor = "transparent"
                        rect.style.border = "2px"
                        var image = document.createElement("img")
                        image.src = data[i]['items'][ii]['thumbnail']
                        image.style.paddingTop = "20px"
                        image.style.height = "150px"
                        image.style.width = "150px"
                        var rectBody = document.createElement("div")
                        rectBody.className = "rect-body"
                        var rectTitle = document.createElement("h6")
                        rectTitle.className = "rect-title"
                        var rectTxtNode = document.createTextNode(data[i]["items"][ii]["name"])
                        rectTitle.appendChild(rectTxtNode)
                        var rectPrice = document.createElement("p")
                        rectPrice.className = "rect-text"
                        var priceTxtNode = document.createTextNode("Price: "+data[i]["items"][ii]["price"])
                        
                        rectPrice.appendChild(priceTxtNode)
                        var rectQty = document.createElement("p")
                        rectQty.className = "rect-text"
                        var qtyTxtNode = document.createTextNode("Quantity: "+data[i]["items"][ii]["qty"])
                        rectQty.appendChild(qtyTxtNode)

                        rectBody.appendChild(rectTitle)
                        rectBody.appendChild(rectPrice)
                        rectBody.appendChild(rectQty)
                        rect.appendChild(image)
                        rect.appendChild(rectBody)
                        itemBody.appendChild(rect)
                    }
                }
            }
        }
    })
})