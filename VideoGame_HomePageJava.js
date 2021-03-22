var api_start = "https://api.cryptonator.com/api/full/";

    function refreshPage(){
        window.location.reload();
    } 

    function coinSearch(){
        var input = document.getElementById("search").value;
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
            document.getElementById("volume").innerHTML = (JSON.stringify(response.ticker.volume));
        });
        }

    

       function gamezzzzSearch(){

        $.ajax({
            url: "http://api.giantbomb.com/search/",
            dataType: "jsonp",
            jsonp: 'json_callback',
            data: {
                api_key: '[11e4c24e09ce88184c2a27cf78ef08c6b38344bf]',
                query: getElementById("submit"),
                format: 'jsonp',
                field_list: 'name'
            },
            success: function(res) {
                console.log(res);
            }
        });
       }