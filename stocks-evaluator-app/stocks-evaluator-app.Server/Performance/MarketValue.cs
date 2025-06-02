namespace stocks_evaluator_app.Server.Performance
{
    public class MarketValue
    {
        private double sharesOutstanding;
        private double earningsYield;
        private double priceEarningsRatio;

        public MarketValue() { }

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

        public double CalculateSharesOutstanding(double netIncome, double earningsPerShare)
        {
            if (earningsPerShare == 0)
            {
                return 0;
            }
            return netIncome / earningsPerShare;
        }

        public double CalculateEarningsYield(double earningsPerShare, double price)
        {
            if (price == 0)
            {
                return 0;
            }
            return earningsPerShare / price;
        }

        public double CalculatePriceEarningsRatio(double price, double earningsPerShare)
        {
            if (earningsPerShare == 0)
            {
                return 0;
            }
            return price / earningsPerShare;
        }
    }
}
