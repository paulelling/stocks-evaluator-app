namespace stocks_evaluator_app.Server.Performance
{
    public class CashFlow
    {
        private double qualityOfIncomeRatio;

        public CashFlow() { }

        public double QualityOfIncomeRatio
        {
            get { return qualityOfIncomeRatio; }
            set { qualityOfIncomeRatio = value; }
        }

        public double CalculateQualityOfIncomeRatio(double operatingCashFlow, double netIncome)
        {
            if (netIncome == 0)
            {
                return 0;
            }
            return operatingCashFlow / netIncome;
        }
    }
}
