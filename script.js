function main(){
    $.ajax({
        url: "https://flynn.boolean.careers/exercises/api/random/mail",
        method: 'GET',
        success: function(data) {
            const res = data.response;
            const target = $('#list');
            target.append('<li>' + res + '</li>')
            console.log(res)
        },
        error: function() {
            console.log('error');
        }
    });
}

function printer(){
    
    for(let i=0; i<10;i++){
        main()
    }
}

function addClickListener() {
    const btn = $('#btn');
    btn.click(printer);

} 


function init(){
    addClickListener()
}


document.addEventListener('DOMContentLoaded', init);