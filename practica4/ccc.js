function mayor(hola,adios,hambre)
{
	hola = parseInt(prompt("Primer Numero"));
	adios = parseInt(prompt("Segundo Numero"));
	hambre = parseInt(prompt("Tercer Numero"));

	u = Math.max(hola,adios,hambre);
	return u;
}
mayor();
document.writeln("El mayor es " + u);


