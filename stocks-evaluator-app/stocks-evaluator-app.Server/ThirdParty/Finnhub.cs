using stocks_evaluator_app.Server.Models;
using stocks_evaluator_app.Server.Repository;
using stocks_evaluator_app.Server.Utility;

namespace stocks_evaluator_app.Server.ThirdParty
{
    public class Finnhub
    {
        private string token;
        private AppSettingsHelper appSettingsHelper;
        private TableExceptionLog logging;
        private DataTypeCheck dataTypeCheck;

        public Finnhub()
        {
            appSettingsHelper = new AppSettingsHelper();
            token = appSettingsHelper.GetAppSetting("FinnhubToken");
            logging = new TableExceptionLog();
            dataTypeCheck = new DataTypeCheck();
        }

        public Stock GetStockData(string ticker)
        {
            Stock stock = new Stock(ticker);

            try
            {
                var apiCall = new ApiCall();
                var dataObject = apiCall.MakeCall("https://finnhub.io/api/v1/stock/metric?symbol=" + ticker + "&metric=all&token=" + token);
                var metric = dataObject["metric"];

                if (metric != null)
                {
                    stock.FiftyTwoWeekHigh = dataTypeCheck.NullCheck(metric["52WeekHigh"]);
                    stock.FiftyTwoWeekHighDate = dataTypeCheck.NullCheck(metric["52WeekHighDate"]);
                    stock.FiftyTwoWeekLow = dataTypeCheck.NullCheck(metric["52WeekLow"]);
                    stock.FiftyTwoWeekLowDate = dataTypeCheck.NullCheck(metric["52WeekLowDate"]);
                    stock.DividendPerShare = dataTypeCheck.NullCheck(dataTypeCheck.NullCheck(metric["dividendPerShareTTM"]));
                    stock.AssetTurnover = dataTypeCheck.NullCheck(metric["assetTurnoverTTM"]);
                    stock.Beta = dataTypeCheck.NullCheck(metric["beta"]);
                    stock.EarningsPerShare = dataTypeCheck.NullCheck(metric["ebitdPerShareTTM"]);
                    stock.GrossMargin = dataTypeCheck.NullCheck(metric["grossMarginTTM"]);
                    stock.InventoryTurnover = dataTypeCheck.NullCheck(metric["inventoryTurnoverTTM"]);
                    stock.LongTermDebtPerEquity = dataTypeCheck.NullCheck(metric["longTermDebt/equityQuarterly"]);
                    stock.MarketCapitalization = dataTypeCheck.NullCheck(metric["marketCapitalization"]);
                    stock.OperatingMargin = dataTypeCheck.NullCheck(metric["netProfitMarginTTM"]);
                    stock.QuickRatio = dataTypeCheck.NullCheck(metric["quickRatioQuarterly"]);
                    stock.ReceivablesTurnover = dataTypeCheck.NullCheck(metric["receivablesTurnoverTTM"]);
                }
            }
            catch (Exception e)
            {
                logging.LogException(e.Message, dataTypeCheck.NullCheck(e.StackTrace));
            }

            return stock;
        }

        public Stock GetStockProfile(string ticker)
        {
            Stock stock = new Stock(ticker);

            try
            {
                var apiCall = new ApiCall();
                var dataObject = apiCall.MakeCall("https://finnhub.io/api/v1/stock/profile2?symbol=" + ticker + "&metric=all&token=" + token);
                var name = dataObject["name"];

                stock.Name = dataTypeCheck.NullCheck(name);
            }
            catch (Exception e)
            {
                logging.LogException(e.Message, dataTypeCheck.NullCheck(e.StackTrace));
            }

            return stock;
        }
    }
}
