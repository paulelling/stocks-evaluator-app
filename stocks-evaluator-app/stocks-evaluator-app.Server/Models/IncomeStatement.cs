namespace stocks_evaluator_app.Server.Models
{
    public class IncomeStatement
    {
        private string ticker;
        private string date;
        private string ebit;
        private string ebitda;
        private string depreciationAndAmortization;
        private string netIncome;
        private string operatingIncome;

        public IncomeStatement() { }

        public IncomeStatement(string ticker)
        {
            this.ticker = ticker;
        }

        public string Ticker
        {
            get { return ticker; }
            set { ticker = value; }
        }

        public string Date
        {
            get { return date; }
            set { date = value; }
        }

        public string Ebit
        {
            get { return ebit; }
            set { ebit = value; }
        }

        public string Ebitda
        {
            get { return ebitda; }
            set { ebitda = value; }
        }

        public string DepreciationAndAmortization
        {
            get { return depreciationAndAmortization; }
            set { depreciationAndAmortization = value; }
        }

        public string NetIncome
        {
            get { return netIncome; }
            set { netIncome = value; }
        }

        public string OperatingIncome
        {
            get { return operatingIncome; }
            set { operatingIncome = value; }
        }
    }
}
