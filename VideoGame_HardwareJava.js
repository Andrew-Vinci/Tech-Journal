var api_start  = "https://api.coinlore.net/api/ticker/?id=90";
var api_start2 = "https://api.coinlore.net/api/ticker/?id=80";

    function refreshPage(){
        window.location.reload();
    } 

    function coinDisplay(){
        fetch(api_start)
        .then(data => {
            return data.json();
        })
        .then(response => {
            console.log(response);
            console.log(JSON.stringify(response[0].name));
            document.getElementById("name").innerHTML = (JSON.stringify(response[0].name));
            console.log(JSON.stringify(response[0].price_usd));
            document.getElementById("price").innerHTML = (JSON.stringify(response[0].price_usd));
            console.log(JSON.stringify(response[0].market_cap_usd));
            document.getElementById("marketCap").innerHTML = (JSON.stringify(response[0].market_cap_usd));
            console.log(JSON.stringify(response[0].percent_change_1h));
            document.getElementById("hourChange").innerHTML = (JSON.stringify(response[0].percent_change_1h));
            console.log(JSON.stringify(response[0].percent_change_7d));
            document.getElementById("weekChange").innerHTML = (JSON.stringify(response[0].percent_change_7d));
        });
        };

        function coinDisplay2(){
            fetch(api_start2)
            .then(data => {
                return data.json();
            })
            .then(response => {
                console.log(response);
                console.log(JSON.stringify(response[0].name));
                document.getElementById("name2").innerHTML = (JSON.stringify(response[0].name));
                console.log(JSON.stringify(response[0].price_usd));
                document.getElementById("price2").innerHTML = (JSON.stringify(response[0].price_usd));
                console.log(JSON.stringify(response[0].market_cap_usd));
                document.getElementById("marketCap2").innerHTML = (JSON.stringify(response[0].market_cap_usd));
                console.log(JSON.stringify(response[0].percent_change_1h));
                document.getElementById("hourChange2").innerHTML = (JSON.stringify(response[0].percent_change_1h));
                console.log(JSON.stringify(response[0].percent_change_7d));
                document.getElementById("weekChange2").innerHTML = (JSON.stringify(response[0].percent_change_7d));
            });
            };
        

        