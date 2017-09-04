    var section = document.querySelectorAll('.blog-inner .blog-scroll-section .load-more .blog-content .headng');
    var textiie = document.querySelectorAll('.blog-inner .blog-scroll-section .load-more .blog-content .post-content');
    
   
    var requestURL = 'http://www.fuelscale.com/json/blog.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
      var blogCon = request.response;
      populateHeader(blogCon);
      
    }
    function populateHeader(jsonObj) {
      var bloge = jsonObj['blog'];  
      for (i=0;i<100;i++){
        var myH1 = document.createElement('h1');
        var myP = document.createElement('p');
        
        myH1.textContent= bloge[i].title;
        myP.textContent = bloge[i].content;
        section[i].appendChild(myH1);
        textiie[i].appendChild(myP);
       } 
    }