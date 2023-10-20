window.addEventListener('load', e =>{
    let database = JSON.parse(data);
    if(localStorage.getItem("data")){
        database = JSON.parse(localStorage.getItem("data"));
    }
    localStorage.setItem("data",JSON.stringify(database));

    for(let i=0; i<document.getElementsByClassName('tov_item').length; i=i+1){
        document.getElementsByClassName('name_tov').item(i).textContent = database[i].name;
        document.getElementsByClassName('zena').item(i).textContent = database[i].zena.toString()+"₽";
        document.getElementsByClassName('im_tov').item(i).src = database[i].images[1];
        if(!database[i].inkorz){
            document.getElementsByClassName('btn_buy').item(i).textContent = "Добавить в корзину";
        }
        else{
            document.getElementsByClassName('btn_buy').item(i).textContent = "Перейти в корзину";
        }
        document.getElementsByClassName('btn_buy').item(i).onclick = function (){
            if(!database[i].inkorz){
                database[i].inkorz = true;
                document.getElementsByClassName('btn_buy').item(i).textContent = "Перейти в корзину";
                localStorage.setItem("data",JSON.stringify(database));
            }
            else{
                location.href='html/Korzina.html';
            }
        };
    }
});