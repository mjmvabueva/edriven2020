var input, input1;
input = prompt("Month 1-12")
input1 = prompt("Start Day 1-7")
function Calendar(element, month, day) {
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    let m = ''
    if (month == 1){
        m = 'JANUARY'
    }
    else if (month == 2){
        m = 'FEBRUARY'
    }    
    else if (month == 3){
        m = 'MARCH'
    }
    else if (month == 4){ 
        m = 'APRIL'
    }    
    else if (month == 5){
        m = 'MAY'
    }    
    else if (month == 6){
        m = 'JUNE'
    }    
    else if (month == 7){
        m = 'JULY'
    }    
    else if (month == 8){
        m = 'AUGUST'
    }    
    else if (month == 9){
        m = 'SEPTEMBER'
    }    
    else if (month == 10){
        m = 'OCTOBER'
    }    
    else if (month == 11){
        m = 'NOVEMBER'
    }    
    else if (month == 12){
        m = 'DECEMBER'
    }    
    else {
        m = "Invalid Input"
    }

    let cdr = `<table>
    <tr>
    <td colspan = "7" align = "center" id="month">${m}</tr></td>
    <tr>
    <th>SUN</th><th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th>SAT</th>
    </tr>`
    
    
    let week = 0
    let calD = 1
    let count = 1

    if(month > 12 || day > 7){
    element.innerHTML = ("<h1>Invalid Input</h1>")
}
    else if(month == 0 || day == 0)
    element.innerHTML = ("<h1>Invalid Input</h1>")
    else{
        if(days[month-1] == 31){
            if(day >= 6){
                for (let i = 0; i < 42; i++) {
                    if (week == 0) {
                        cdr += '<tr>'
                    }
                    if (count <= day - 1) {
                        cdr += "<td></td>"
                        count++
                    }
                    else if (calD > days[month - 1])
                        cdr += "<td></td>"
                    else {
                        if (calD <= days[month - 1]) {
                            cdr += `<td>${calD}</td>`
                            calD++
                        }
                        else
                            cdr += "<td></td>"
                    }
                    if (week == 6) {
                        cdr += '</tr>'
                        week = 0
                    }
                    else {
                        week++
                    }
                }
            }
            else{
                for (let i = 0; i < 35; i++) {
                    if (week == 0) {
                        cdr += '<tr>'
                    }
            
                    if (count <= day - 1) {
                        cdr += "<td></td>"
                        count++
                    }
                    else if (calD > days[month - 1])
                        cdr += "<td></td>"
                    else {
                        if (calD <= days[month - 1]) {
                            cdr += `<td>${calD}</td>`
                            calD++
                        }
                        else
                            cdr += "<td></td>"
                    }
                    if (week == 6) {
                        cdr += '</tr>'
                        week = 0
                    }
                    else {
                        week++
                    }
                }
            }   
        }else if(days == 28){
            if(day >= 6){
            for (let i = 0; i < 35; i++) {
                if (week == 0) {
                    cdr += '<tr>'
                }
                if (count <= day - 1) {
                    cdr += "<td></td>"
                    count++
                }
                else if (calD > days)
                    cdr += "<td></td>"
                else {
                    if (calD <= days) {
                        cdr += `<td>${calD}</td>`
                        calD++
                    }
                    else
                        cdr += "<td></td>"
                }
                if (week == 6) {
                    cdr += '</tr>'
                    week = 0
                }
                else {
                    week++
                }
            }
        }else{
            for (let i = 0; i < 35; i++) {
                if (week == 0) {
                    cdr += '<tr>'
                }
                if (count <= day - 1) {
                    cdr += "<td></td>"
                    count++
                }
                else if (calD > days[month - 1])
                    cdr += "<td></td>"
                else {
                    if (calD <= days[month - 1]) {
                        cdr += `<td>${calD}</td>`
                        calD++
                    }
                    else
                        cdr += "<td></td>"
                }
                if (week == 6) {
                    cdr += '</tr>'
                    week = 0
                }
                else {
                    week++
                }
            }
        }
        }else{
            if(day > 7){
                for (let i = 0; i < 42; i++) {
                    if (week == 0) {
                        cdr += '<tr>'
                    }
                    if (count <= day - 1) {
                        cdr += "<td></td>"
                        count++
                    }
                    else if (calD > days[month - 1])
                        cdr += "<td></td>"
                    else {
                        if (calD <= days[month - 1]) {
                            cdr += `<td>${calD}</td>`
                            calD++
                        }
                        else
                            cdr += "<td></td>"
                    }
                    if (week == 6) {
                        cdr += '</tr>'
                        week = 0
                    }
                    else {
                        week++
                    }
                }
            }else{
                for (let i = 0; i < 35; i++) {
                    if (week == 0) {
                        cdr += '<tr>'
                    }
                    if (count <= day - 1) {
                        cdr += "<td></td>"
                        count++
                    }
                    else if (calD > days[month - 1])
                        cdr += "<td></td>"
                    else {
                        if (calD <= days[month - 1]) {
                            cdr += `<td>${calD}</td>`
                            calD++
                        }
                        else
                            cdr += "<td></td>"
                    }
            
                    if (week == 6) {
                        cdr += '</tr>'
                        week = 0
                    }
                    else {
                        week++
                    }
                }
            }
        }
        cdr += '</table>'
        element.innerHTML = cdr;
        }
    }
Calendar(tabs, input, input1)
