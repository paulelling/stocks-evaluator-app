namespace stocks_evaluator_app.Server.Models
{
    public class BalanceSheet
    {
        private string ticker;
        private string date;
        private string currentAssets;
        private string currentLiabilities;
        private string totalCash;
        private string totalDebt;
        private string totalEquity;
        private string ownerEquity;
        private string longTermDebt;
        private string inventory;
        private string accountsReceivable;

        public BalanceSheet() { }

        public BalanceSheet(string ticker)
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

        public string CurrentAssets
        {
            get { return currentAssets; }
            set { currentAssets = value; }
        }

        public string CurrentLiabilities
        {
            get { return currentLiabilities; }
            set { currentLiabilities = value; }
        }

        public string TotalCash
        {
            get { return totalCash; }
            set { totalCash = value; }
        }

        public string TotalDebt
        {
            get { return totalDebt; }
            set { totalDebt = value; }
        }

        public string TotalEquity
        {
            get { return totalEquity; }
            set { totalEquity = value; }
        }

        public string OwnerEquity
        {
            get { return ownerEquity; }
            set { ownerEquity = value; }
        }

        public string LongTermDebt
        {
            get { return longTermDebt; }
            set { longTermDebt = value; }
        }

        public string Inventory
        {
            get { return inventory; }
            set { inventory = value; }
        }

        public string AccountsReceivable
        {
            get { return accountsReceivable; }
            set { accountsReceivable = value; }
        }
    }
}
