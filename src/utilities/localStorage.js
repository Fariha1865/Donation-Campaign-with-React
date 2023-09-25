
function getFromLocalStorage(){

    const allDonations =JSON.parse(localStorage.getItem('Donations'));
    if(allDonations)
    {
        return allDonations;
    }else{
        return [];
    }

}

function addToLocalStorage(id){

    const addedDonations = getFromLocalStorage();
    console.log(addedDonations)
    const donated = addedDonations?.find(item=>parseInt(item)===id);
    if(!donated)
    {
        addedDonations.push(id);
        localStorage.setItem('Donations',JSON.stringify(addedDonations))
    }
    
}

export {getFromLocalStorage,addToLocalStorage}