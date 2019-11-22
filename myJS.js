
 function blushFunc()
 {
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
     if(this.readyState==4 && this.status==200)
      {
        var obj=JSON.parse(this.responseText);
        console.log(obj);
        var res=" ";
       // var txt=" ";
        for(var i=0;i<obj.length;i++)
        {
          res=res+"<tr><td>"+obj[i].name+"<br></td><td>"+obj[i].price+"</td><td><br>"+obj[i].brand+"</td></tr><br><hr>";
          //txt=txt+"<tr><td>"+obj[i].price+"<td></tr>"+"<br>"

        }
         document.getElementById("blushy").innerHTML=res;
         //document.getElementById("blushy1").innerHTML=txt;
         
     }
    };
    xmlhttp.open("GET", "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush", true);
    xmlhttp.send();   
 }
 function eyelinerFunc()
 {
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
     if(this.readyState==4 && this.status==200)
      {
        var obj=JSON.parse(this.responseText);
        console.log(obj);
        var res=" ";
        
        for(var i=0;i<obj.length;i++)
        {
            res=res+"<tr><td>"+obj[i].name+"<br></td><td>"+obj[i].price+"</td><td><br>"+obj[i].brand+"</td></tr><br><hr>";
        }
         document.getElementById("liner").innerHTML=res;
         
     }
    };
    xmlhttp.open("GET", "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner", true);
    xmlhttp.send();   
 }
 function eyeshadowFunc()
 {
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
     if(this.readyState==4 && this.status==200)
      {
        var obj=JSON.parse(this.responseText);
        console.log(obj);
        var res=" ";
        for(var i=0;i<obj.length;i++)
        {
            res=res+"<tr><td>"+obj[i].name+"<br></td><td>"+obj[i].price+"</td><td><br>"+obj[i].brand+"</td></tr><br><hr>";
        }
         document.getElementById("shadow").innerHTML=res;
         
     }
    };
    xmlhttp.open("GET", "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow", true);
    xmlhttp.send();   
 }
 function foundationFunc()
 {
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
     if(this.readyState==4 && this.status==200)
      {
        var obj=JSON.parse(this.responseText);
        console.log(obj);
        var res=" ";
        for(var i=0;i<obj.length;i++)
        {
            res=res+"<tr><td>"+obj[i].name+"<br></td><td>"+obj[i].price+"</td><td><br>"+obj[i].brand+"</td></tr><br><hr>";
        }
         document.getElementById("foundation").innerHTML=res;
         
     }
    };
    xmlhttp.open("GET", "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation", true);
    xmlhttp.send();   
 }