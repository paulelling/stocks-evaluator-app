namespace stocks_evaluator_app.Server.Models
{
    public class Stock
    {
        private string ticker;
        private string name;
        private string price;
        private string fiftyTwoWeekHigh;
        private string fiftyTwoWeekHighDate;
        private string fiftyTwoWeekLow;
        private string fiftyTwoWeekLowDate;
        private string dividendPerShare;
        private string assetTurnover;
        private string beta;
        private string earningsPerShare;
        private string grossMargin;
        private string inventoryTurnover;
        private string longTermDebtPerEquity;
        private string marketCapitalization;
        private string operatingMargin;
        private string quickRatio;
        private string receivablesTurnover;
        private BalanceSheet balanceSheet;
        private IncomeStatement incomeStatement;
        private CashFlowStatement cashFlowStatement;
        private double qualityOfIncomeRatio;
        private double currentRatio;
        private double cashRatio;
        private double netAssetValue;
        private double totalDebtRatio;
        private double debtEquityRatio;
        private double equityMultiplier;
        private double financialLeverageRatio;
        private double longTermDebtRatio;
        private double returnOnAssets;
        private double returnOnEquity;
        private double sharesOutstanding;
        private double earningsYield;
        private double priceEarningsRatio;

        public Stock() { }

        public Stock(string ticker)
        {
            this.ticker = ticker;
        }

        public string Ticker
        {
            get { return ticker; }
            set { ticker = value; }
        }

        public string Name
        {
            get { return name; }
            set { name = value; }
        }

        public string Price
        {
            get { return price; }
            set { price = value; }
        }

        public string FiftyTwoWeekHigh
        {
            get { return fiftyTwoWeekHigh; }
            set { fiftyTwoWeekHigh = value; }
        }

        public string FiftyTwoWeekHighDate
        {
            get { return fiftyTwoWeekHighDate; }
            set { fiftyTwoWeekHighDate = value; }
        }

        public string FiftyTwoWeekLow
        {
            get { return fiftyTwoWeekLow; }
            set { fiftyTwoWeekLow = value; }
        }

        public string FiftyTwoWeekLowDate
        {
            get { return fiftyTwoWeekLowDate; }
            set { fiftyTwoWeekLowDate = value; }
        }

        public string DividendPerShare
        {
            get { return dividendPerShare; }
            set { dividendPerShare = value; }
        }

        public string AssetTurnover
        {
            get { return assetTurnover; }
            set { assetTurnover = value; }
        }

        public string Beta
        {
            get { return beta; }
            set { beta = value; }
        }

        public string EarningsPerShare
        {
            get { return earningsPerShare; }
            set { earningsPerShare = value; }
        }

        public string GrossMargin
        {
            get { return grossMargin; }
            set { grossMargin = value; }
        }

        public string InventoryTurnover
        {
            get { return inventoryTurnover; }
            set { inventoryTurnover = value; }
        }

        public string LongTermDebtPerEquity
        {
            get { return longTermDebtPerEquity; }
            set { longTermDebtPerEquity = value; }
        }

        public string MarketCapitalization
        {
            get { return marketCapitalization; }
            set { marketCapitalization = value; }
        }

        public string OperatingMargin
        {
            get { return operatingMargin; }
            set { operatingMargin = value; }
        }

        public string QuickRatio
        {
            get { return quickRatio; }
            set { quickRatio = value; }
        }

        public string ReceivablesTurnover
        {
            get { return receivablesTurnover; }
            set { receivablesTurnover = value; }
        }

        public BalanceSheet BalanceSheet
        {
            get { return balanceSheet; }
            set { balanceSheet = value; }
        }

        public IncomeStatement IncomeStatement
        {
            get { return incomeStatement; }
            set { incomeStatement = value; }
        }

        public CashFlowStatement CashFlowStatement
        {
            get { return cashFlowStatement; }
            set { cashFlowStatement = value; }
        }

        public double QualityOfIncomeRatio
        {
            get { return qualityOfIncomeRatio; }
            set { qualityOfIncomeRatio = value; }
        }

        public double CurrentRatio
        {
            get { return currentRatio; }
            set { currentRatio = value; }
        }

        public double CashRatio
        {
            get { return cashRatio; }
            set { cashRatio = value; }
        }

        public double NetAssetValue
        {
            get { return netAssetValue; }
            set { netAssetValue = value; }
        }

        public double TotalDebtRatio
        {
            get { return totalDebtRatio; }
            set { totalDebtRatio = value; }
        }

        public double DebtEquityRatio
        {
            get { return debtEquityRatio; }
            set { debtEquityRatio = value; }
        }

        public double EquityMultiplier
        {
            get { return equityMultiplier; }
            set { equityMultiplier = value; }
        }

        public double FinancialLeverageRatio
        {
            get { return financialLeverageRatio; }
            set { financialLeverageRatio = value; }
        }

        public double LongTermDebtRatio
        {
            get { return longTermDebtRatio; }
            set { longTermDebtRatio = value; }
        }

        public double ReturnOnAssets
        {
            get { return returnOnAssets; }
            set { returnOnAssets = value; }
        }

        public double ReturnOnEquity
        {
            get { return returnOnEquity; }
            set { returnOnEquity = value; }
        }

        public double SharesOutstanding
        {
            get { return sharesOutstanding; }
            set { sharesOutstanding = value; }
        }

        public double EarningsYield
        {
            get { return earningsYield; }
            set { earningsYield = value; }
        }

        public double PriceEarningsRatio
        {
            get { return priceEarningsRatio; }
            set { priceEarningsRatio = value; }
        }
    }
}
