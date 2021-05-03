var api_start = "https://api.cryptonator.com/api/full/";
var api_start_new  = "https://api.coinlore.net/api/ticker/?id=90";
var api_start_new2  = "https://api.coinlore.net/api/ticker/?id=80";

    function refreshPage(){
        window.location.reload();
    } 

    function coinSearch(){
        var input = document.getElementById("search1").value;
        fetch(api_start + input)
        .then(data => {
            return data.json();
        })
        .then(response => {
   
            console.log(response);
            console.log(JSON.stringify(response.ticker.price));
            document.getElementById("price").innerHTML = (JSON.stringify(response.ticker.price));
            console.log(JSON.stringify(response.ticker.base));
            document.getElementById("name").innerHTML = (JSON.stringify(response.ticker.base));
            console.log(JSON.stringify(response.ticker.target));
            document.getElementById("currency").innerHTML = (JSON.stringify(response.ticker.target));
            console.log(JSON.stringify(response.ticker.volume));
            document.getElementById("volume").innerHTML = (JSON.stringify(response.ticker.volume))


        });
        }


        function coinSearch2(){
            var input = document.getElementById("search2").value;
            fetch(api_start + input)
            .then(data => {
                return data.json();
            })
            .then(response => {

                console.log(response);
                console.log(JSON.stringify(response.ticker.price));
                document.getElementById("price2").innerHTML = (JSON.stringify(response.ticker.price));
                console.log(JSON.stringify(response.ticker.base));
                document.getElementById("name2").innerHTML = (JSON.stringify(response.ticker.base));
                console.log(JSON.stringify(response.ticker.target));
                document.getElementById("currency2").innerHTML = (JSON.stringify(response.ticker.target));
                console.log(JSON.stringify(response.ticker.volume));
                document.getElementById("volume2").innerHTML = (JSON.stringify(response.ticker.volume));
    
    
            });
            }

            
    function coinLookUp(){
        var input = document.getElementById("search3").value;
        fetch(api_start + input)
        .then(data => {
            return data.json();
        })
        .then(response => {
            console.log(response);
            console.log(JSON.stringify(response.ticker.price));
            document.getElementById("price3").innerHTML = (JSON.stringify(response.ticker.price));
            console.log(JSON.stringify(response.ticker.base));
            document.getElementById("name3").innerHTML = (JSON.stringify(response.ticker.base));
            console.log(JSON.stringify(response.ticker.target));
            document.getElementById("currency3").innerHTML = (JSON.stringify(response.ticker.target));
            console.log(JSON.stringify(response.ticker.volume));
            document.getElementById("volume3").innerHTML = (JSON.stringify(response.ticker.volume));
        });
        }

        function coinDisplayNew(){
            fetch(api_start_new)
            .then(data => {
                return data.json();
            })
            .then(response => {
                console.log(response);
                console.log(JSON.stringify(response[0].name));
                document.getElementById("name1").innerHTML = (JSON.stringify(response[0].name));
                console.log(JSON.stringify(response[0].price_usd));
                document.getElementById("price1").innerHTML = (JSON.stringify(response[0].price_usd));
                console.log(JSON.stringify(response[0].market_cap_usd));
                document.getElementById("marketCap").innerHTML = (JSON.stringify(response[0].market_cap_usd));
                console.log(JSON.stringify(response[0].percent_change_1h));
                document.getElementById("hourChange").innerHTML = (JSON.stringify(response[0].percent_change_1h));
                console.log(JSON.stringify(response[0].percent_change_7d));
                document.getElementById("weekChange").innerHTML = (JSON.stringify(response[0].percent_change_7d));
            });
            };

            function coinDisplayNew2(){
                fetch(api_start_new2)
                .then(data => {
                    return data.json();
                })
                .then(response => {
                    console.log(response);
                    console.log(JSON.stringify(response[0].name));
                    document.getElementById("name21").innerHTML = (JSON.stringify(response[0].name));
                    console.log(JSON.stringify(response[0].price_usd));
                    document.getElementById("price21").innerHTML = (JSON.stringify(response[0].price_usd));
                    console.log(JSON.stringify(response[0].market_cap_usd));
                    document.getElementById("marketCap2").innerHTML = (JSON.stringify(response[0].market_cap_usd));
                    console.log(JSON.stringify(response[0].percent_change_1h));
                    document.getElementById("hourChange2").innerHTML = (JSON.stringify(response[0].percent_change_1h));
                    console.log(JSON.stringify(response[0].percent_change_7d));
                    document.getElementById("weekChange2").innerHTML = (JSON.stringify(response[0].percent_change_7d));
                });
                };


            