window.addEventListener('load', e =>{
    let database = JSON.parse(localStorage.getItem("data"));
    document.getElementById('clear').onclick = function (){
        for(let i=0; i<document.getElementsByClassName('korz_item').length; i=i+1){
            if(database[i].inkorz){
                database[i].inkorz = false;
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
            vsego = vsego + database[i].zena;
            document.getElementsByClassName('korz_item').item(i).style = "display:block"
        }
        document.getElementsByClassName('name_tov').item(i).textContent = database[i].name;
    }
    document.getElementsByClassName("Vsego").item(0).textContent = "Всего: "+ String(vsego) +"₽";
}