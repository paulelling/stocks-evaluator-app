export default function Test() {
    var response = fetch('stock?ticker=AAPL')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById("TickerLabel").innerHTML = data["ticker"];
            document.getElementById("NameLabel").innerHTML = data["name"];
            document.getElementById("PriceLabel").innerHTML = data["price"];
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    return (
        <div>
            <p>
                Ticker: <label id="TickerLabel"></label>
                <br />
                Name: <label id="NameLabel"></label>
                <br />
                Price: <label id="PriceLabel"></label>
            </p>
        </div>
    );
}