class block
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);
		 this.tint=255

	}
	display()
	{
			

			
			if (this.body.speed<3){
				var groundPos=this.body.position;		
			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
            fill("green");
            strokeWeight(3)
           stroke ("yellow");
		   rect(0,0,this.w, this.h);
			  }
			  else{
			  World .remove(world,this.body)
			  push ();
			  this.tinted=this.tinted-6
			  tint (255,this.tinted)
			  }
			
			pop()
			
	}

}