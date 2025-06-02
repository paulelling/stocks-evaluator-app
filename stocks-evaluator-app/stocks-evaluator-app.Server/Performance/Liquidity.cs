namespace stocks_evaluator_app.Server.Performance
{
    public class Liquidity
    {
        private double currentRatio;
        private double cashRatio;

        public Liquidity() { }

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

        public double CalculateCurrentRatio(double currentAssets, double currentLiabilities)
        {
            if (currentLiabilities == 0)
            {
                return 0;
            }
            return currentAssets / currentLiabilities;
        }

        public double CalculateCashRatio(double totalCash, double currentLiabilities)
        {
            if (currentLiabilities == 0)
            {
                return 0;
            }
            return totalCash / currentLiabilities;
        }
    }
}
