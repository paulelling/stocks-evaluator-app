namespace stocks_evaluator_app.Server.Performance
{
    public class Profitability
    {
        private double returnOnAssets;
        private double returnOnEquity;

        public Profitability() { }

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

        public double CalculateReturnOnAssets(double netIncome, double totalAssets)
        {
            if (totalAssets == 0)
            {
                return 0;
            }
            return netIncome / totalAssets;
        }

        public double CalculateReturnOnEquity(double netIncome, double totalEquity)
        {
            if (totalEquity == 0)
            {
                return 0;
            }
            return netIncome / totalEquity;
        }
    }
}
