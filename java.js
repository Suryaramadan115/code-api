$.ajax({

    url : 'http://www.omdbapi.com/?apikey=4066cb5d&s=batman',
    success : function(data){
   let movie = data.Search;
   let card = '';
   
   movie.forEach(m=> {
       card += `<div class="con-content"><div class="gambar"><img src="${m.Poster}"></div><div class="content"><p><span class="nama">${m.Title}</span></p><p><span class="title> ${m.Year}</span></p><p> <span class="harga"></span></p></div></div>`;
       
   });
   
   $('.container').html(card)
   
   
   
    }
   
   
   
   });
   

function search(){
    $.ajax({
        url:' http://www.omdbapi.com',
        type : 'get',
        dataType:'json',
        data :{
            'apikey':'4066cb5d',
            's' : $('#search-input').val()
        },
        
        success: function(hasil){
        if(hasil.Response == "True"){
        let movie = hasil.Search;
        
       $('.container').html('')
        $.each(movie,function(i,data){
        $('.container').html('<div class="con-content"><div class="gambar"><img src="'+data.Poster+'"></div><div class="content"><p><span class="nama">'+ data.Title+'</span></p><p><span class="title"></span></p><p> <span class="harga">'+data.Year+'</span></p><p><a href="#" class="modd" data-id="'+ data.imdbID+'">detail</a></p></div>')
        
        
        
        
        
        
        })
        $('#search-input').val('')
        
     
        
        
        }


        
     
     
        
        }
        
        });
}
   
   $('#search-btn').on('click',function(){
    search();
   

   });
   
   $('#search-input').on('keyup',function(e){

if(e.keyCode === 13){
    search();
}


   });

let conmodal = document.querySelector('.con-modal');
let container =document.querySelector('.container');
let close =document.querySelector('.close')
let content =document.querySelector('.content')


conmodal.addEventListener('click', function(e){

if(e.target.className =="close")
e.target.parentElement.style.display ="none";


})
function modlist(){
container.addEventListener('click', function(e){
if(e.target.className=="modd")
conmodal.style.display="grid";

})
}


$('.container').on('click','.modd', function(){

$.ajax({

url :'http://www.omdbapi.com',
get :'get',
dataType:'json',
data :{
    "apikey" : "4066cb5d",
      "i"   : $(this).data('id')
},
success : function(hasil){

    if(hasil.Response =="True"){
        


        $('.con-modal').html(`<div class="con-modal"><span class="close">x</span><div class="satu"><p><span><B>Name:</B>`+hasil.Title+`</span></p><p><span><b>Tahun</b>`+hasil.Year+`</span></p><p><span><B> Rate:</B>`+ hasil.Rated+`</span></p><p><span><DURATION:><b>duration : </b>`+hasil.Runtime+`</span></p></div><div class="dua"><p>  <span><b>direction:</b>`+hasil.Director+`</span> </p> <p>  <span><b>writer:</b>`+hasil.Writer+`</span> </p><p>  <span><b>Actor:</b>`+hasil.Actors+`</span> </p><p>  <span><b>Plot:</b>`+hasil.Plot+`</span> </p><>  <span><b>Award:</b> `+hasil.Awards+`</span>  </div><div class="tiga"><img src="`+hasil.Poster+`"></div></div>`)


  




    }

}





})


})