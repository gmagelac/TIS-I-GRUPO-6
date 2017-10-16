function realizaPesquisa(){
	// Faz a pesquisa usando a api do google
	var input = window.document.getElementById("texto-pesquisa-inf").value;
	var r_positivo = "melhor de " + input;
	var r_negativo = "o pior de " + input;
	
	document.getElementById("pesquisa-inf").style.display = 'none';
	document.getElementById("pesquisa-sup").style.display = '';
	document.getElementById("resultado-pesquisa").style.display = '';
	// pesquisa os resultados positivos
	$.get ("https://www.googleapis.com/customsearch/v1",
			{q:r_positivo, 
			key:"AIzaSyA92vJcSh-E1dHxejJ3cgXzjOTUVcnoGyo",
			dateRestrict: "d[60]",
			totalResults: 15,
			num: 10,
			cx:"003587410441159855628:djaidukkxos"},
			function( data ) {
				
				var html = "";
			      for (var i = 0; i < data.items.length; i++) {
			          var item = data.items[i];
			          var titulo = item.htmlTitle;
			          var snippet = item.htmlSnippet;
			          //  retira quebra de linha
			          snippet = snippet.replace(/<br>?\r?\n|\r/g, " ");
			          
			          html += "<div><div class='text-sm-left'><a  href='" + item.link + "'> " + titulo + "</a></div>";
			          html += snippet + "</div>";	    					          
			        }
			      document.getElementById("resultado-positivo").innerHTML = html;    							
			});		
		
	// pesquisa os resultados negativos
	$.get ("https://www.googleapis.com/customsearch/v1",
			{q:r_negativo, 
			key:"AIzaSyA92vJcSh-E1dHxejJ3cgXzjOTUVcnoGyo",
			dateRestrict: "d[60]",
			totalResults: 15,
			num: 10,
			cx:"003587410441159855628:djaidukkxos"},
			function( data ) {
				var  html = "";
			      for (var i = 0; i < data.items.length; i++) {
			          var item = data.items[i];
			          var titulo = item.htmlTitle;
			          var snippet = item.htmlSnippet;
			          // retira quebra de linha 
			          snippet = snippet.replace(/<br>?\r?\n|\r/g, " ");
			          html += "<div class='text-sm-left'><div class='text-sm-left'><a  href='" + item.link + "'> " + titulo + "</a></div>";
			          html += snippet + "</div>";	    					          
			        }
			      document.getElementById("resultado-negativo").innerHTML = html;  
			});
};	

 function initAutocomplete(id) {
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */(document.getElementById(id)),
        {types: ['geocode']});

    // When the user selects an address from the dropdown, populate the address
    // fields in the form.
    autocomplete.addListener('place_changed', fillInAddress);
  }

  function fillInAddress() {
    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();

  }
