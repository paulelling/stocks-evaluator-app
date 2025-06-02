import { useState } from "react"
import StockResponse from "./StockResponse";

export default function StockRequest() {
    var reNumbers = new RegExp("[0,1,2,3,4,5,6,7,8,9]");
    var reExtraneous = new RegExp("[`,¬,¦,!,\",£,$,€,%,&,*,=,{,},;,:,#,~,|,<,>,.,-,_,?]");

    function hasNumbers(str) {
        try {
            var bolText = false;

            if (reNumbers.test(str) == true) { bolText = true; }
            else { bolText = false; }

            return bolText;
        }
        catch (exception) {
            return false;
        }
    }

    function hasPunctuation(str) {
        try {
            var bolValid = false;

            if (reExtraneous.test(str) == true) { bolValid = true; }
            else { bolValid = false; }

            return bolValid;
        }
        catch (exception) {
            return false;
        }
    }

    const [showResponse, setShowReponse] = useState(false);

    var ticker = "";

    function searchStock() {
        ticker = document.getElementById("tickerTextBox").value;

        if (ticker === "") {
            document.getElementById("ErrorLabel").innerHTML = "Enter a ticker symbol";
            setShowReponse(false);
        }
        else if (hasNumbers(ticker) || hasPunctuation(ticker)) {
            document.getElementById("ErrorLabel").innerHTML = "Invalid ticker symbol entered"
            setShowReponse(false);
        }
        else {
            document.getElementById("ErrorLabel").innerHTML = "";
            setShowReponse(!showResponse);
        }
    }

    return (
        <div className="form">
            <input type="text" id="tickerTextBox" placeholder="Enter Stock Ticker"></input>
            &nbsp;&nbsp;
            <button className="searchButton" onClick={searchStock}>Search</button>
            <br />
            <br />
            <label id="ErrorLabel"></label>
            {showResponse && <StockResponse ticker={document.getElementById("tickerTextBox").value}></StockResponse>}
        </div>
    )
}