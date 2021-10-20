

function resumen()
{
    var cat = document.getElementById("Categorías").value;

    var cant = document.getElementById("Cantidad").value;
    
    var precioticket = 200

    var uno = 0.2

    var dos = 0.5

    var tres = 0.2
    
    
    if(cat == 1) 
    {
        var resultado = (precioticket*cant*uno);
    }

    else if (cat == 2)
    {
        var resultado = (precioticket*cant*dos);
    } 
    else
    {
        var resultado = (precioticket*cant*tres);
    } 

    document.getElementById("total").innerHTML = resultado  ;
    
}