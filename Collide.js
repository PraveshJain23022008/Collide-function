function collide(){
    if(Mrect.x-Frect.x<Mrect.width/2+Frect.width/2
        && Frect.x-Mrect.x<Mrect.width/2+Frect.width/2
        && Mrect.y-Frect.y<Mrect.width/2+Frect.width/2
        && Frect.y-Mrect.y<Mrect.width/2+Frect.width/2)
      {
        Mrect.shapeColor="red";
        Frect.shapeColor="blue";
      }else{
        Frect.shapeColor="green";
        Mrect.shapeColor="green";
      }
}