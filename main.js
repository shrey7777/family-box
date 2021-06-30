var family =["father.jpg","grandpa d.jpg","grandma.jpg","mother.jpg","shrey2.jpg","SISTER.jpg"];
var names =["SREEJITH","SHASHI","ASHA","SHIWALI","SHREY","AADYA"];
      var i = 0;
       
  function walk() {
    if (i > 5) {
      i = 0;}

    var updatei=family[i];
    var updaten=names[i];

    document.getElementById("miko").src=updatei;
    document.getElementById("ikol").innerHTML=updaten;
    i++;
    
    document.getElementById("audio").play();
  }