$(function(){
    //Cached selectors
    var jokeButton = $('#joke-button');
    var jokeResetButton = $('#joke-reset-button');
    var jokesList = $('#jokes-list');
    var reaction = $('#reaction');
    var jokeLoader = $('#joke-loader');
  
    
    jokeLoader.hide();
    jokeResetButton.hide();
  
    //Events
    jokeButton.on('click', function(e){
      //Do the magic here
      var randomJoke ='';
      var ramdomAnswer = {};

      getJoke()
      .then( res=>{
        randomJoke= res;
        return getAnswer();


        })
  
      .then( res=>{
        randomAnswer =res;
        renderJoke(randomJoke, ramdomAnswer. img);
      
    })
  
    jokeResetButton.on('click', function(){
      
    });
    
  }