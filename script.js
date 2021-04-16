/* function main(){
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
 */







/* function main(){
    
    for(let i=0;i<10;i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            
            .then(function (response) {
                const result = response.data.response;
                const target = document.getElementById('list')
                 
                target.append(result)
    
                
                console.log(result);

                });
            }
        } */
            



 function main(){
    new Vue({
        el:'#app',
        data:{
            emails:[]
        },
        mounted(){
            this.axios()
        },

        methods:{
                    
            axios: function (){
                        for(let i=0;i<10;i++){

                        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                            
                            .then(response => {
                                const result = response.data.response;
        
                                this.emails.push(result)
                                console.log(result);
                                
                            })

                        }

            }

        }

                })
            }
            
                            
        
            
  
 
function init(){
    main()
}


document.addEventListener('DOMContentLoaded', init);