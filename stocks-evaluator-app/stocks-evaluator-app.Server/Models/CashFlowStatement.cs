namespace stocks_evaluator_app.Server.Models
{
    public class CashFlowStatement
    {
        private string ticker;
        private string date;
        private string operatingCashFlow;
        private string taxes;
        private string changeInNetWorkingCapital;
        private string inventory;

        public CashFlowStatement() { }

        public CashFlowStatement(string ticker)
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

        public string OperatingCashFlow
        {
            get { return operatingCashFlow; }
            set { operatingCashFlow = value; }
        }

        public string Taxes
        {
            get { return taxes; }
            set { taxes = value; }
        }

        public string ChangeInNetWorkingCapital
        {
            get { return changeInNetWorkingCapital; }
            set { changeInNetWorkingCapital = value; }
        }

        public string Inventory
        {
            get { return inventory; }
            set { inventory = value; }
        }
    }
}
