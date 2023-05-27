$.ajax({

    url : 'http://www.omdbapi.com/?apikey=4066cb5d&s=batman',
    success : function(data){
   let movie = data.Search;
   let card = '';
   
   movie.forEach(m=> {
       card += `<div class="con-content"><div class="gambar"><img src="${m.Poster}"></div><div class="content"><p><span class="nama">${m.Title}</span></p><p><span class="title> ${m.Year}</span></p><p> <span class="harga">${m.imdbID}</span></p></div></div>`;
       
   });
   
   $('.container').html(card)
   
   
   
    }
   
   
   
   });
   
   
   $('#search-btn').on('click',function(){
   
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
   
  
   $.each(movie,function(i,data){
   $('.container').html('<div class="con-content"><div class="gambar"><img src="'+data.Poster+'"></div><div class="content"><p><span class="nama">'+ data.Title+'</span></p><p><span class="title"></span></p><p> <span class="harga">RP '+data.Year+'</span></p></div>')
   
   
   
   
   
   
   })
   

   
   
   } 


   
   }
   
   });
   });
   