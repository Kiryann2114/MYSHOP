window.addEventListener('load', e =>{
    let database = JSON.parse(localStorage.getItem("dataGlav"));
    localStorage.setItem("dataKorz",localStorage.getItem("dataGlav"))
    for(let i=0; i<document.getElementsByClassName('korz_item').length; i=i+1){
        if(!database[i].inkorz){
            document.getElementsByClassName('korz_item').item(i).style = "display:none"
        }
        else{
            document.getElementsByClassName('korz_item').item(i).style = "display:block"
        }
        document.getElementsByClassName('name_tov').item(i).textContent = database[i].name;
    }
});