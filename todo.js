// kapat butonu olusturup tum liste elemanlarina ekleme

var x = document.getElementsByTagName("LI") //Belirtilen etiket adıyla belgedeki tüm öğeleri al
var i 
for(i=0; i<x.length; i++) {

var span = document.createElement("SPAN") // span ogesi olusturduk
var txt = document.createTextNode("\u00D7") // metin olusturduk
span.className = "close" //sinif ayarlama
span.appendChild(txt) // li ye oge ekleme
x[i].appendChild(span)

}


// carpiya basinca kapanmasi

var close = document.getElementsByClassName("close") // belirtilen siniftaki tum ogeleri al
var i 
for(i=0; i<close.length; i++) {

close[i].onclick = function() { // click tiklamada meydana gelir

var div = this.parentElement // ????????????????
div.style.display = "none" // div ogesini gostermeyecek sekilde sonlandirdi

}

}


// uzerine tiklandiginda cizilmesi

var list = document.querySelector('ul') // ul ogesini aliyor
list.addEventListener('click', function(ev) { // tiklama ile bir sey ekleme

if(ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked') // divi checked sinifina dahil etmek
}

}, false)


// ekle dugmesi ile yeni liste ogesi olusturma

function newElement() {

var li = document.createElement("li")
var inputValue = document.getElementById("task").value 
var t = document.createTextNode(inputValue)
li.appendChild(t)
if(inputValue === '') {

alert("You must write something")

} else {

document.getElementById("list").appendChild(li)

}

document.getElementById("task").value = ""


var span = document.createElement("SPAN")
var txt = document.createTextNode("\u00D7")
span.className = "close"
span.appendChild(txt)
li.appendChild(span)

for(var i = 0; i < close.length; i++) {

close[i].onclick = function() {
    var div = this.parentElement
    div.style.display = "none"
}

}

}


