var api_start = "https://api.cryptonator.com/api/full/";

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


            