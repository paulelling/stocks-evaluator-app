namespace stocks_evaluator_app.Server.Utility
{
    public class RegularExpressions
    {
        public bool IsValidTicker(string ticker)
        {
            // A valid ticker is 1-5 uppercase letters, optionally followed by a period and 1-3 uppercase letters (for example, "AAPL", "GOOGL", "MSFT.OQ")
            var pattern = @"^[A-Z]{1,5}(\.[A-Z]{1,3})?$";
            return System.Text.RegularExpressions.Regex.IsMatch(ticker, pattern);
        }
    }
}
