using stocks_evaluator_app.Server.Models;
using stocks_evaluator_app.Server.Repository;
using stocks_evaluator_app.Server.Utility;

namespace stocks_evaluator_app.Server.ThirdParty
{
    public class FinancialModelingPrep
    {
        private string apiKey;
        private AppSettingsHelper appSettingsHelper;
        private TableExceptionLog logging;
        private DataTypeCheck dataTypeCheck;

        public FinancialModelingPrep()
        {
            appSettingsHelper = new AppSettingsHelper();
            apiKey = appSettingsHelper.GetAppSetting("FinancialModelingPrepApiKey");
            logging = new TableExceptionLog();
            dataTypeCheck = new DataTypeCheck();
        }

        public Stock GetStockData(string ticker)
        {
            Stock stock = new Stock(ticker);
            try
            {
                var apiCall = new ApiCall();
                var dataObject = apiCall.MakeCallForJacksonResponse($"https://financialmodelingprep.com/api/v3/profile/{ticker}?apikey={apiKey}");

                if (dataObject != null && dataObject.Count > 0)
                {
                    var price = dataTypeCheck.NullCheck(dataObject.GetValue("price"));
                    stock.Price = price.Replace("{", "").Replace("}", "");
                }
            }
            catch (Exception e)
            {
                logging.LogException(e.Message, dataTypeCheck.NullCheck(e.StackTrace));
            }
            return stock;
        }

        public BalanceSheet GetBalanceSheet(string ticker)
        {
            BalanceSheet balanceSheet = new BalanceSheet(ticker);
            try
            {
                var apiCall = new ApiCall();
                var dataObject = apiCall.MakeCallForJacksonResponseArray("https://financialmodelingprep.com/stable/balance-sheet-statement?symbol=" + ticker + "&apikey=" + apiKey);

                if (dataObject != null && dataObject.Count > 0)
                {
                    balanceSheet.Date = dataTypeCheck.NullCheck(dataObject.GetValue("date"));
                    balanceSheet.CurrentAssets = dataTypeCheck.NullCheck(dataObject.GetValue("totalCurrentAssets"));
                    balanceSheet.CurrentLiabilities = dataTypeCheck.NullCheck(dataObject.GetValue("totalCurrentLiabilities"));
                    balanceSheet.TotalCash = dataTypeCheck.NullCheck(dataObject.GetValue("cashAndCashEquivalents"));
                    balanceSheet.TotalDebt = dataTypeCheck.NullCheck(dataObject.GetValue("totalDebt"));
                    balanceSheet.TotalEquity = dataTypeCheck.NullCheck(dataObject.GetValue("totalEquity"));
                    balanceSheet.OwnerEquity = dataTypeCheck.NullCheck(dataObject.GetValue("totalStockholdersEquity"));
                    balanceSheet.LongTermDebt = dataTypeCheck.NullCheck(dataObject.GetValue("longTermDebt"));
                    balanceSheet.Inventory = dataTypeCheck.NullCheck(dataObject.GetValue("inventory"));
                    balanceSheet.AccountsReceivable = dataTypeCheck.NullCheck(dataObject.GetValue("accountsReceivables"));
                }
            }
            catch (Exception e)
            {
                logging.LogException(e.Message, dataTypeCheck.NullCheck(e.StackTrace));
            }
            return balanceSheet;
        }

        public IncomeStatement GetIncomeStatement(string ticker)
        {
            IncomeStatement incomeStatement = new IncomeStatement(ticker);
            try
            {
                var apiCall = new ApiCall();
                var dataObject = apiCall.MakeCallForJacksonResponseArray("https://financialmodelingprep.com/stable/income-statement?symbol=" + ticker + "&apikey=" + apiKey);
                if (dataObject != null && dataObject.Count > 0)
                {
                    incomeStatement.Date = dataTypeCheck.NullCheck(dataObject.GetValue("date"));
                    incomeStatement.Ebit = dataTypeCheck.NullCheck(dataObject.GetValue("ebit"));
                    incomeStatement.Ebitda = dataTypeCheck.NullCheck(dataObject.GetValue("ebitda"));
                    incomeStatement.DepreciationAndAmortization = dataTypeCheck.NullCheck(dataObject.GetValue("depreciationAndAmortization"));
                    incomeStatement.NetIncome = dataTypeCheck.NullCheck(dataObject.GetValue("netIncome"));
                    incomeStatement.OperatingIncome = dataTypeCheck.NullCheck(dataObject.GetValue("operatingIncome"));
                }
            }
            catch (Exception e)
            {
                logging.LogException(e.Message, dataTypeCheck.NullCheck(e.StackTrace));
            }
            return incomeStatement;
        }

        public CashFlowStatement GetCashFlowStatement(string ticker)
        {
            CashFlowStatement cashFlowStatement = new CashFlowStatement(ticker);
            try
            {
                var apiCall = new ApiCall();
                var dataObject = apiCall.MakeCallForJacksonResponseArray("https://financialmodelingprep.com/stable/cash-flow-statement?symbol=" + ticker + "&apikey=" + apiKey);
                if (dataObject != null && dataObject.Count > 0)
                {
                    cashFlowStatement.Date = dataTypeCheck.NullCheck(dataObject.GetValue("date"));
                    cashFlowStatement.OperatingCashFlow = dataTypeCheck.NullCheck(dataObject.GetValue("operatingCashFlow"));
                    cashFlowStatement.Taxes = dataTypeCheck.NullCheck(dataObject.GetValue("incomeTaxesPaid"));
                    cashFlowStatement.ChangeInNetWorkingCapital = dataTypeCheck.NullCheck(dataObject.GetValue("changeInWorkingCapital"));
                    cashFlowStatement.Inventory = dataTypeCheck.NullCheck(dataObject.GetValue("inventory"));
                }
            }
            catch (Exception e)
            {
                logging.LogException(e.Message, dataTypeCheck.NullCheck(e.StackTrace));
            }
            return cashFlowStatement;
        }
    }
}
