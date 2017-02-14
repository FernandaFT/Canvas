function draw(){
    var canvas = document.getElementById('roseWind'); 
	ctx= canvas.getContext("2d"); 
	ctx.lineWidth = 2;
	ctx.strokeStyle = '#000';
//circulo
   ctx.beginPath();
   ctx.arc(150,150,50,0,2*Math.PI);
   ctx.fillStyle = 'rgb(0,255,0)';
   ctx.fill();
   ctx.closePath();
//Texto (N)
   ctx.beginPath();
   ctx.fillText('N', 160, 10);
   ctx.closePath();
//Texto (O)
   ctx.beginPath();
   ctx.fillText('O', 1, 165);
   ctx.closePath();
//Texto (E)
   ctx.beginPath();
   ctx.fillText('E', 290, 165);
   ctx.closePath();
//Texto (S)
   ctx.beginPath();
   ctx.fillText('S', 160, 299);
   ctx.closePath();

 //EJEX
	ctx.beginPath(); 
	ctx.moveTo(150,0); 
	ctx.lineTo(150,300);
	ctx.stroke(); 
	ctx.closePath();

//EJE Y
	ctx.beginPath(); 
	ctx.moveTo(0,150);
	ctx.lineTo(300,150);
	ctx.stroke();
	ctx.closePath();

 }