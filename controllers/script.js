function pesquisa () {
    $.get("https://access-database-covid19.herokuapp.com/cidades", function (data, status) {
        var busca = document.getElementById("txtBusca").value;
        var cidade;
        var casos;
        var mortes

        for(var i = 0; i < data.length; ++i){
            if(busca == data[i].nome){
                cidade = data[i].nome;
                casos = data[i].casos;
                mortes = data[i].mortes;
                i = data.length;
            }   
        }
        if(cidade != undefined){
        document.getElementById("resultado").innerHTML = "Cidade: " + cidade + "<br>Casos: " + casos + "<br>Mortes: " + mortes;
        }
        else{
        document.getElementById("resultado").innerHTML = "Cidade: " + "Não Reconhecida" + "<br>Casos: " + "<br>Mortes: ";
        }
    });
}

window.onload = function () {
    var mortes = {
        type: "bar",
        showInLegend: true,
        name: "Mortes",
        color: "red",
        dataPoints: null
    };

    var casos = {
        type: "bar",
        showInLegend: true,
        name: "Casos",
        color: "blue",
        dataPoints: null
    };

    $.get("https://access-database-covid19.herokuapp.com/", function (data, status) {
        var dataPointsMortes = [];
        var dataPointsCasos = [];
        for (var i = 0; i < data.length; ++i) {
            if(data[i].estado == "AC" || data[i].estado == "AM" || data[i].estado == "RR" || data[i].estado == "RO" || data[i].estado == "PA" || data[i].estado == "AP" || data[i].estado == "TO"){
              dataPointsMortes.unshift({ y: parseInt(data[i].totalmortes), label: data[i].estado });
              dataPointsCasos.unshift({ y: parseInt(data[i].totalcasos), label: data[i].estado });
            }  

        }
        mortes.dataPoints = dataPointsMortes
        casos.dataPoints = dataPointsCasos;

        var chart1 = new CanvasJS.Chart("chartContainer1", {
            animationEnabled: true,

            title: {
                text: "Norte"
            },
            axisX: {
                interval: 1
            },
            axisY2: {
                interlacedColor: "rgba(1,77,101,.2)",
                gridColor: "rgba(1,77,101,.1)",
                title: "Number of Companies"
            },
            data: [casos, mortes]
        });
        chart1.render();

        var dataPointsMortes = [];
        var dataPointsCasos = [];
        for (var i = 0; i < data.length; ++i) {
            if(data[i].estado == "MA" || data[i].estado == "PI" || data[i].estado == "CE" || data[i].estado == "RN" || data[i].estado == "PB" || data[i].estado == "AL" || data[i].estado == "SE" || data[i].estado == "BA"){
                dataPointsMortes.unshift({ y: parseInt(data[i].totalmortes), label: data[i].estado });
                dataPointsCasos.unshift({ y: parseInt(data[i].totalcasos), label: data[i].estado });
            }
        }
        mortes.dataPoints = dataPointsMortes
        casos.dataPoints = dataPointsCasos;

        var chart2 = new CanvasJS.Chart("chartContainer2", {
            animationEnabled: true,

            title: {
                text: "Nordeste"
            },
            axisX: {
                interval: 1
            },
            axisY2: {
                interlacedColor: "rgba(1,77,101,.2)",
                gridColor: "rgba(1,77,101,.1)",
                title: "Number of Companies"
            },
            data: [casos, mortes]
        });
        chart2.render();

        var dataPointsMortes = [];
        var dataPointsCasos = [];
        for (var i = 0; i < data.length; ++i) {
            if(data[i].estado == "MG" || data[i].estado == "SP" || data[i].estado == "ES" || data[i].estado == "RJ"){
                dataPointsMortes.unshift({ y: parseInt(data[i].totalmortes), label: data[i].estado });
                dataPointsCasos.unshift({ y: parseInt(data[i].totalcasos), label: data[i].estado });
            }
        }
        mortes.dataPoints = dataPointsMortes
        casos.dataPoints = dataPointsCasos;

        var chart3 = new CanvasJS.Chart("chartContainer3", {
            animationEnabled: true,

            title: {
                text: "Sudeste"
            },
            axisX: {
                interval: 1
            },
            axisY2: {
                interlacedColor: "rgba(1,77,101,.2)",
                gridColor: "rgba(1,77,101,.1)",
                title: "Number of Companies"
            },
            data: [casos, mortes]
        });
        chart3.render();

        var dataPointsMortes = [];
        var dataPointsCasos = [];
        for (var i = 0; i < data.length; ++i) {
            if(data[i].estado == "MT" || data[i].estado == "GO" || data[i].estado == "MS" || data[i].estado == "DF"){
                dataPointsMortes.unshift({ y: parseInt(data[i].totalmortes), label: data[i].estado });
                dataPointsCasos.unshift({ y: parseInt(data[i].totalcasos), label: data[i].estado });
            }
        }
        mortes.dataPoints = dataPointsMortes
        casos.dataPoints = dataPointsCasos;

        var chart4 = new CanvasJS.Chart("chartContainer4", {
            animationEnabled: true,

            title: {
                text: "Centro-Oeste"
            },
            axisX: {
                interval: 1
            },
            axisY2: {
                interlacedColor: "rgba(1,77,101,.2)",
                gridColor: "rgba(1,77,101,.1)",
                title: "Number of Companies"
            },
            data: [casos, mortes]
        });
        chart4.render();

        var dataPointsMortes = [];
        var dataPointsCasos = [];
        for (var i = 0; i < data.length; ++i) {
            if(data[i].estado == "PR" || data[i].estado == "SC" || data[i].estado == "RS"){
                dataPointsMortes.unshift({ y: parseInt(data[i].totalmortes), label: data[i].estado });
                dataPointsCasos.unshift({ y: parseInt(data[i].totalcasos), label: data[i].estado });
            }
        }
        mortes.dataPoints = dataPointsMortes
        casos.dataPoints = dataPointsCasos;

        var chart5 = new CanvasJS.Chart("chartContainer5", {
            animationEnabled: true,

            title: {
                text: "Sul"
            },
            axisX: {
                interval: 1
            },
            axisY2: {
                interlacedColor: "rgba(1,77,101,.2)",
                gridColor: "rgba(1,77,101,.1)",
                title: "Number of Companies"
            },
            data: [casos, mortes]
        });
        chart5.render();
    });
}
