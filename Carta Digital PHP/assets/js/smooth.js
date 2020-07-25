$('#bottom').on('click',function(e) {
    if(this.hash !== ""){
       e.preventDefault();
       const hash = this.hash;
        
        $(html,body).animate({
            scrollTop:$(hash).offset().top
        }, 900, function() {
            window.location.hash = hash;
        });
    }
});
$('#bottom').on('click',function(e) {
   
       e.preventDefault();
       const hash = this.hash;
        
        $('html,body').animate({
            scrollTop:$(hash).offset().top
        }, 900, function() {
            window.location.hash = hash;
        });
    
});