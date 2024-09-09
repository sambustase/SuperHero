$(document).ready(function() {
    $('#buton').click(function() {   
        let buscar = $('#buscar').val();
            $.ajax({
                url: `https://superheroapi.com/api/4337988669af835bef168931174c965e/${buscar}`, 
                type: "GET",
                dataType: "json",
                success : function (datos){
                    $("#datosSuperHero").empty();
                    $("#datosSuperHero").append(`<div>
                            <img class="imagenHero" src="${datos.image.url}" alt="${datos.name}" width="200">
                        </div>
                        <div>
                            <h2>${datos.name}</strong></h2>
                            <p>Conexiones: ${datos.connections["group-affiliation"]} ${datos.connections["relatives"]}</p>
                            <hr>
                            <p>Ocupación: ${datos.work.occupation}</p>
                            <hr>
                            <p>Primera Aparicion: ${datos.biography["first-appearance"]}</p>
                            <hr>
                            <p>Altura: ${datos.appearance.height}</p>
                            <hr>
                            <p>Peso: ${datos.appearance.weight}</p>
                            <hr>
                            <p>Primera Aparicion: ${datos.biography.aliases}</p>
                        </div>`);
                },
                error: function (error){
                    console.log("Error al ingresar el valor:" , error);
                }
        });
    });
});    


$(document).ready(function() {
    $('#buton').click(function() {   
        let buscar = $('#buscar').val();
        $.ajax({
            url: `https://superheroapi.com/api.php/4337988669af835bef168931174c965e/${buscar}`, 
            type: "GET",
            dataType: "json",
            success: function(datos) {
                    // Datos para el gráfico
                    const dataPoints = Object.keys(datos.powerstats).map(key => ({
                        y: parseInt(datos.powerstats[key]),
                        label: key
                    }));  
                    
                    // Crear el gráfico de pastel
                    const chart = new CanvasJS.Chart("boxCanvas", {
                        animationEnabled: true,
                        title: {
                            text: `Estadisticas de Poder para  ${datos.name}`
                        },
                        data: [{
                            type: "pie",
                            startAngle: 240,
                            yValueFormatString: "##0\"%\"",
                            indexLabel: "{label} {y}",
                            dataPoints: dataPoints
                        }]
                    });
                    chart.render();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('Error fetching data:', textStatus, errorThrown);
                alert("Hubo un error al obtener los datos. Por favor, intenta de nuevo.");
            }
        });
    });
});
