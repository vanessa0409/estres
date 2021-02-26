let a = prompt("Primer numero");
parseInt(a);
let b = prompt("Segundo numero");
parseInt(b);
if (b != 0)
{
	c = a/b;
	document.writeln("El resultado de esta division es " + c);
}
else if(b == 0)
{
	document.writeln("No se puede dividir entre 0");
}
