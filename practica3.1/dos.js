let ay = prompt("Numero uno");
let by = prompt("Numero dos");
if (ay > 0)
{
	document.writeln(a + " es positivo");
}
else if(ay < 0)
{
	document.writeln(ay + " es negativo");
}

if (by > 0)
{
	document.writeln(by + " es positivo");
}
else if(by < 0)
{
	document.writeln(by + " es negativo");
}

if(ay>0 && by>0)
{
  document.writeln("dos de dos positivos");
}
else if(ay >0 && by<0)
{
    document.writeln("uno de dos positivos");
}

else if(ay<0 && by<0)
{
  document.writeln("dos de dos negativos");
}