let az = prompt("Primer numero");
parseInt(az);
let bz = prompt("Segundo numero");
parseInt(bz);
let cz = prompt("Tercer numero");
parseInt(cz);
if((az == bz) && (bz == cz))
{
	document.writeln("Son iguales todos");
}
else if(az > bz && az > cz)
{
	document.writeln(az + " Es el mayor");
}
else if(bz > az && bz > az)
{
	document.writeln(bz + " Es el mayor");
}
else if(cz > bz && cz > az)
{
	document.writeln(cz + " Es el mayor");
}