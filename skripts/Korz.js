window.addEventListener('load', e =>{
    let database = JSON.parse(localStorage.getItem("data"));
    document.getElementById('clear').onclick = function (){
        for(let i=0; i<document.getElementsByClassName('korz_item').length; i=i+1){
            if(database[i].inkorz){
                database[i].inkorz = false;
                database[i].kol = 1;
                localStorage.setItem("data",JSON.stringify(database));
            }
        }
        Update(database);
    };
    Update(database);
});

function Update(database){
    let vsego = 0;
    for(let i=0; i<document.getElementsByClassName('korz_item').length; i=i+1){
        if(!database[i].inkorz){
            document.getElementsByClassName('korz_item').item(i).style = "display:none"
        }
        else{
            vsego = vsego + database[i].zena * database[i].kol;
            document.getElementsByClassName('korz_item').item(i).style = "display:block"
            document.getElementsByClassName('kol').item(i).style = "display:block"
        }
        document.getElementsByClassName('name_tov').item(i).textContent = database[i].name;
        document.getElementsByClassName('name_tov').item(i).onclick = function (){
            location.href="../"+database[i].SRC;
        }
        document.getElementsByClassName('zena').item(i).textContent = database[i].zena.toString()+"₽";
        document.getElementsByClassName('kolich').item(i).textContent = database[i].kol;
        document.getElementsByClassName('btn_pl').item(i).onclick = function (){
            if(database[i].inkorz){
                database[i].kol = database[i].kol + 1;
                localStorage.setItem("data",JSON.stringify(database));
                Update(database);
            }
        };
        document.getElementsByClassName('btn_mn').item(i).onclick = function (){
            if(database[i].inkorz){
                if(database[i].kol === 1){
                    database[i].inkorz = false;
                }
                else{
                    database[i].kol = database[i].kol - 1;
                }
                localStorage.setItem("data",JSON.stringify(database));
                Update(database);
            }
        };
    }
    document.getElementsByClassName("Vsego").item(0).textContent = "Всего: "+ String(vsego) +"₽";
}