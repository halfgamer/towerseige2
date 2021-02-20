class POLYGON
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
		 this.image=loadImage("images/octagon-removebg-preview.png")

	}
	display()
	{
			var groundPos=this.body.position;		
			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			fill(128,128,128)
			imageMode (CENTER)
			image(this.image,0,0,this.w, this.h);

			pop()
			
	}

}