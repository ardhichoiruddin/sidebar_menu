
let count = 0;

function toggleSidebar(){
    count++

    const element = document.getElementById('sidebar');

    if(count % 2 == 1){
        element.classList.add('active');
    }
    
    else{
        element.classList.remove('active');
    }
    
}