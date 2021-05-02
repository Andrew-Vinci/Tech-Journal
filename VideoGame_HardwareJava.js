var api_start  = "https://api.coinlore.net/api/ticker/?id=90";
var api_start2 = "https://api.coinlore.net/api/ticker/?id=80";
var api_start3 = "https://api.coinlore.net/api/ticker/?id=2710";
var api_start4 = "https://api.coinlore.net/api/ticker/?id=58";
var api_start5 = "https://api.coinlore.net/api/ticker/?id=2";


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

            function coinDisplay3(){
                fetch(api_start3)
                .then(data => {
                    return data.json();
                })
                .then(response => {
                    console.log(response);
                    console.log(JSON.stringify(response[0].name));
                    document.getElementById("name3").innerHTML = (JSON.stringify(response[0].name));
                    console.log(JSON.stringify(response[0].price_usd));
                    document.getElementById("price3").innerHTML = (JSON.stringify(response[0].price_usd));
                    console.log(JSON.stringify(response[0].market_cap_usd));
                    document.getElementById("marketCap3").innerHTML = (JSON.stringify(response[0].market_cap_usd));
                    console.log(JSON.stringify(response[0].percent_change_1h));
                    document.getElementById("hourChange3").innerHTML = (JSON.stringify(response[0].percent_change_1h));
                    console.log(JSON.stringify(response[0].percent_change_7d));
                    document.getElementById("weekChange3").innerHTML = (JSON.stringify(response[0].percent_change_7d));
                });
                };


                
            function coinDisplay4(){
                fetch(api_start4)
                .then(data => {
                    return data.json();
                })
                .then(response => {
                    console.log(response);
                    console.log(JSON.stringify(response[0].name));
                    document.getElementById("name4").innerHTML = (JSON.stringify(response[0].name));
                    console.log(JSON.stringify(response[0].price_usd));
                    document.getElementById("price4").innerHTML = (JSON.stringify(response[0].price_usd));
                    console.log(JSON.stringify(response[0].market_cap_usd));
                    document.getElementById("marketCap4").innerHTML = (JSON.stringify(response[0].market_cap_usd));
                    console.log(JSON.stringify(response[0].percent_change_1h));
                    document.getElementById("hourChange4").innerHTML = (JSON.stringify(response[0].percent_change_1h));
                    console.log(JSON.stringify(response[0].percent_change_7d));
                    document.getElementById("weekChange4").innerHTML = (JSON.stringify(response[0].percent_change_7d));
                });
                };

                function coinDisplay5(){
                    fetch(api_start5)
                    .then(data => {
                        return data.json();
                    })
                    .then(response => {
                        console.log(response);
                        console.log(JSON.stringify(response[0].name));
                        document.getElementById("name5").innerHTML = (JSON.stringify(response[0].name));
                        console.log(JSON.stringify(response[0].price_usd));
                        document.getElementById("price5").innerHTML = (JSON.stringify(response[0].price_usd));
                        console.log(JSON.stringify(response[0].market_cap_usd));
                        document.getElementById("marketCap5").innerHTML = (JSON.stringify(response[0].market_cap_usd));
                        console.log(JSON.stringify(response[0].percent_change_1h));
                        document.getElementById("hourChange5").innerHTML = (JSON.stringify(response[0].percent_change_1h));
                        console.log(JSON.stringify(response[0].percent_change_7d));
                        document.getElementById("weekChange5").innerHTML = (JSON.stringify(response[0].percent_change_7d));
                    });
                    };
        

        