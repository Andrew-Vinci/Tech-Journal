var api_start  = "https://min-api.cryptocompare.com/data/v2/news/?lang=EN";

    function refreshPage(){
        window.location.reload();
    } 

    function newsDisplay(){
        fetch(api_start)
        .then(data => {
            return data.json();
        })
        .then(response => {
            /*News Article 1*/

            console.log(response);
            console.log(response.Data[0]);
            console.log(response.Data[0].title);
            document.getElementById("newsTitle").innerHTML = (JSON.stringify(response.Data[0].title));

            console.log(response);
            console.log(response.Data[0]);
            console.log(response.Data[0].body);
            document.getElementById("body").innerHTML = (JSON.stringify(response.Data[0].body));

            console.log(response);
            console.log(response.Data[0]);
            console.log(response.Data[0].url);
            document.getElementById("url").innerHTML = (JSON.stringify(response.Data[0].url));

            /*News Article 2*/

            console.log(response);
            console.log(response.Data[1]);
            console.log(response.Data[1].title);
            document.getElementById("newsTitle2").innerHTML = (JSON.stringify(response.Data[1].title));

            console.log(response);
            console.log(response.Data[1]);
            console.log(response.Data[1].body);
            document.getElementById("body2").innerHTML = (JSON.stringify(response.Data[1].body));

            console.log(response);
            console.log(response.Data[1]);
            console.log(response.Data[1].url);
            document.getElementById("url2").innerHTML = (JSON.stringify(response.Data[1].url));

            /*News Article 3*/

            console.log(response);
            console.log(response.Data[2]);
            console.log(response.Data[2].title);
            document.getElementById("newsTitle3").innerHTML = (JSON.stringify(response.Data[2].title));

            console.log(response);
            console.log(response.Data[2]);
            console.log(response.Data[2].body);
            document.getElementById("body3").innerHTML = (JSON.stringify(response.Data[2].body));

            console.log(response);
            console.log(response.Data[2]);
            console.log(response.Data[2].url);
            document.getElementById("url3").innerHTML = (JSON.stringify(response.Data[2].url));

            /*News Article 4*/

            console.log(response);
            console.log(response.Data[3]);
            console.log(response.Data[3].title);
            document.getElementById("newsTitle4").innerHTML = (JSON.stringify(response.Data[3].title));

            console.log(response);
            console.log(response.Data[3]);
            console.log(response.Data[3].body);
            document.getElementById("body4").innerHTML = (JSON.stringify(response.Data[3].body));

            console.log(response);
            console.log(response.Data[3]);
            console.log(response.Data[3].url);
            document.getElementById("url4").innerHTML = (JSON.stringify(response.Data[3].url));

        });
        };