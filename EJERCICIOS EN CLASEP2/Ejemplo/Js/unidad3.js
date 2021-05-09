	
	console.log("variable: " + variable );
	let variablelocal = 177n;

	console.log('Llamó la funcion mensage()! ' + variablelocal);
	alert("Heeey, me estás haciendo cosquillas");
	const obj = {
		first: 'Jane', // property
		last: 'Doe', // property
		getFullName() { // property (method)
			return this.first + ' ' + this.last;
		},
	};
	// Getting a property value
	
	// Setting a property value
	obj.first = 'Janey';
	// Calling the method
	if (obj.getFullName()== 'Janey Doe')
		console.log("Nombre es Janey Doe");
	else 
		console.log("No coinciden los datos");
	
	console.log('ab' + 'cd', Number('123'));
    function cambiarTexto() {
        let btn= document.getElementById("btnMensaje");
        btn.value="Cambiando el texto del boton ";
    
    }