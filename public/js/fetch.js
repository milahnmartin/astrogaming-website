let players = {}


fetch('http://localhost:3001/users')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        getplayer(data.Milahn);
        
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });


  let getplayer = (data) => {
    
   if (typeof data === 'object' && data !== null){
       console.log('We found someone that matches your search !');
   }else if(typeof data =='undefined'){
       console.log('We cant seem to find the person you are looking for...')
   }

  }

