
let input = document.querySelector("#task") // input dona erişiliyor 
let list = document.querySelector("#list") // list dona erişiliyor 

/****************Get input data********************/
input.addEventListener("change", e => getValue(e));

function getValue(e) {
  newTask = e.target.value;
}
/****************************************************************/

function newElement(){

    if(newTask != "")
    {   

        /**************yeni liste elemanı oluşturuluyor*******************/
        const newLi = document.createElement("li");  
        const closeBtn = document.createElement("span");
        /****************************************************************/

        newLi.appendChild(document.createTextNode(newTask)); // Eklenen text listeye yazdırılıyor
        
        closeBtn.classList.add("close");   // liste silme fonksiyınu sınıfları ekleniyor
        closeBtn.innerText = "x";
         
        closeBtn.addEventListener("click", (event) => { 
            newLi.remove() // ilgili liste siliniyor
        }) 

        newLi.onclick = () => { // ilgili liste check sınıf rutuni
            newLi.classList.contains("checked") ? newLi.classList.remove("checked") : newLi.classList.add("checked");
          };
    
        newLi.appendChild(closeBtn);
        list.appendChild(newLi)

        // Ekrana listenin eklendiği bilgisi yazdırılıyor
        $('#liveToastAdd').toast('show');
          
        input.value = ""
        newTask = ""
    }
    else
    {
        // Ekrana hata mesajı yazdırılıyor
        $('#liveToastErr').toast('show');
    }
}