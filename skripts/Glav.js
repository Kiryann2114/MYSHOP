window.addEventListener('load', e =>{
    let database = JSON.parse(data);
    if(localStorage.getItem("data")){
        database = JSON.parse(localStorage.getItem("data"));
    }
    localStorage.setItem("data",JSON.stringify(database));

    for(let i=0; i<document.getElementsByClassName('tov_item').length; i=i+1){
        document.getElementsByClassName('name_tov').item(i).textContent = database[i].name;
        document.getElementsByClassName('zena').item(i).textContent = database[i].zena.toString()+"₽";
        document.getElementsByClassName('kolich').item(i).textContent = database[i].kol;
        document.getElementsByClassName('im_tov').item(i).src = database[i].images[1];
        if(!database[i].inkorz){
            document.getElementsByClassName('btn_buy').item(i).textContent = "Добавить в корзину";
            document.getElementsByClassName('kol').item(i).style = "display:block"
        }
        else{
            document.getElementsByClassName('btn_buy').item(i).textContent = "Перейти в корзину";
            document.getElementsByClassName('kol').item(i).style = "display:none"
        }
        document.getElementsByClassName('btn_buy').item(i).onclick = function (){
            if(!database[i].inkorz){
                database[i].inkorz = true;
                document.getElementsByClassName('btn_buy').item(i).textContent = "Перейти в корзину";
                document.getElementsByClassName('kol').item(i).style = "display:none"
                localStorage.setItem("data",JSON.stringify(database));
            }
            else{
                location.href='html/Korzina.html';
            }
        };
        document.getElementsByClassName('btn_pl').item(i).onclick = function (){
            database[i].kol = database[i].kol + 1;
            document.getElementsByClassName('kolich').item(i).textContent = database[i].kol;
            localStorage.setItem("data",JSON.stringify(database));
        };
        document.getElementsByClassName('btn_mn').item(i).onclick = function (){
            if(database[i].kol !== 1){
                database[i].kol = database[i].kol - 1;
            }
            document.getElementsByClassName('kolich').item(i).textContent = database[i].kol;
            localStorage.setItem("data",JSON.stringify(database));
        };
    }
});