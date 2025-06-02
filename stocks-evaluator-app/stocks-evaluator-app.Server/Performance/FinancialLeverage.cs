namespace stocks_evaluator_app.Server.Performance
{
    public class FinancialLeverage
    {
        private double netAssetValue;
        private double totalDebtRatio;
        private double debtEquityRatio;
        private double equityMultiplier;
        private double financialLeverageRatio;
        private double longTermDebtRatio;

        public FinancialLeverage() { }

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

        public double CalculateNetAssetValue(double assets, double liabilities)
        {
            return assets - liabilities;
        }

        public double CalculateTotalDebtRatio(double totalAssets, double totalEquity)
        {
            if (totalAssets == 0)
            {
                return 0;
            }
            return (totalAssets - totalEquity) / totalAssets;
        }

        public double CalculateDebtEquityRatio(double totalDebt, double totalEquity)
        {
            if (totalEquity == 0)
            {
                return 0;
            }
            return totalDebt / totalEquity;
        }

        public double CalculateEquityMultiplier(double totalAssets, double totalEquity)
        {
            if (totalEquity == 0)
            {
                return 0;
            }
            return totalAssets / totalEquity;
        }

        public double CalculateFinancialLeverageRatio(double totalAssets, double ownersEquity)
        {
            if (ownersEquity == 0)
            {
                return 0;
            }
            return totalAssets / ownersEquity;
        }

        public double CalculateLongTermDebtRatio(double longTermDebt, double totalEquity)
        {
            if (totalEquity == 0)
            {
                return 0;
            }
            return longTermDebt / totalEquity;
        }
    }
}
