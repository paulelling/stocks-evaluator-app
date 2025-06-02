using Microsoft.EntityFrameworkCore;
using stocks_evaluator_app.Server.Models;
using stocks_evaluator_app.Server.Performance;
using stocks_evaluator_app.Server.Repository;
using stocks_evaluator_app.Server.ThirdParty;
using stocks_evaluator_app.Server.Utility;

namespace stocks_evaluator_app.Server.Service
{
    public class StockService : DbContext
    {
        private TableExceptionLog logging;
        private DataTypeCheck dataTypeCheck;

        public StockService(DbContextOptions<StockService> options) : base(options)
        {
            logging = new TableExceptionLog();
            dataTypeCheck = new DataTypeCheck();
        }

        public Stock GetStock(String ticker)
        {
            Stock stock = new Stock(ticker);

            try
            {
                var finnhub = new Finnhub();
                var financialModelingPrep = new FinancialModelingPrep();

                stock = finnhub.GetStockData(ticker);
                var stockProfile = finnhub.GetStockProfile(ticker);
                stock.Name = stockProfile.Name;
                var stockPrice = financialModelingPrep.GetStockData(ticker);
                stock.Price = stockPrice.Price;

                var balanceSheet = financialModelingPrep.GetBalanceSheet(ticker);
                stock.BalanceSheet = balanceSheet;

                var incomeStatement = financialModelingPrep.GetIncomeStatement(ticker);
                stock.IncomeStatement = incomeStatement;

                var cashFlowStatement = financialModelingPrep.GetCashFlowStatement(ticker);
                stock.CashFlowStatement = cashFlowStatement;

                var cashFlow = setCashFlowCalculations(cashFlowStatement, incomeStatement);
                stock.QualityOfIncomeRatio = cashFlow.QualityOfIncomeRatio;

                var liquidity = setLiquidityCalculations(balanceSheet);
                stock.CurrentRatio = liquidity.CurrentRatio;
                stock.CashRatio = liquidity.CashRatio;

                var financialLeverage = setFinancialLeverageCalculations(balanceSheet);
                stock.NetAssetValue = financialLeverage.NetAssetValue;
                stock.TotalDebtRatio = financialLeverage.TotalDebtRatio;
                stock.DebtEquityRatio = financialLeverage.DebtEquityRatio;
                stock.EquityMultiplier = financialLeverage.EquityMultiplier;
                stock.FinancialLeverageRatio = financialLeverage.FinancialLeverageRatio;
                stock.LongTermDebtRatio = financialLeverage.LongTermDebtRatio;

                var profitability = setProfitabilityCalculations(balanceSheet, incomeStatement);
                stock.ReturnOnAssets = profitability.ReturnOnAssets;
                stock.ReturnOnEquity = profitability.ReturnOnEquity;

                var marketValue = setMarketValueCalculations(incomeStatement, stock.EarningsPerShare, stock.Price);
                stock.SharesOutstanding = marketValue.SharesOutstanding;
                stock.EarningsYield = marketValue.EarningsYield;
                stock.PriceEarningsRatio = marketValue.PriceEarningsRatio;
            }
            catch (Exception e)
            {
                logging.LogException(e.Message, dataTypeCheck.NullCheck(e.StackTrace));
            }

            return stock;
        }

        private CashFlow setCashFlowCalculations(CashFlowStatement cashFlowStatement, IncomeStatement incomeStatement)
        {
            CashFlow cashFlow = new CashFlow();
            double operatingCashFlow = Convert.ToDouble(cashFlowStatement.OperatingCashFlow);
            double netIncome = Convert.ToDouble(incomeStatement.NetIncome);
            cashFlow.QualityOfIncomeRatio = cashFlow.CalculateQualityOfIncomeRatio(operatingCashFlow, netIncome);
            return cashFlow;
        }

        private Liquidity setLiquidityCalculations(BalanceSheet balanceSheet)
        {
            Liquidity liquidity = new Liquidity();
            double currentAssets = Convert.ToDouble(balanceSheet.CurrentAssets);
            double currentLiabilities = Convert.ToDouble(balanceSheet.CurrentLiabilities);
            liquidity.CurrentRatio = liquidity.CalculateCurrentRatio(currentAssets, currentLiabilities);
            liquidity.CashRatio = liquidity.CalculateCashRatio(Convert.ToDouble(balanceSheet.TotalCash), currentLiabilities);
            return liquidity;
        }

        private FinancialLeverage setFinancialLeverageCalculations(BalanceSheet balanceSheet)
        {
            FinancialLeverage financialLeverage = new FinancialLeverage();
            double currentAssets = Convert.ToDouble(balanceSheet.CurrentAssets);
            double currentLiabilities = Convert.ToDouble(balanceSheet.CurrentLiabilities);
            double totalEquity = Convert.ToDouble(balanceSheet.TotalEquity);
            double totalDebt = Convert.ToDouble(balanceSheet.TotalDebt);
            double ownerEquity = Convert.ToDouble(balanceSheet.OwnerEquity);
            double longTermDebt = Convert.ToDouble(balanceSheet.LongTermDebt);
            financialLeverage.NetAssetValue = financialLeverage.CalculateNetAssetValue(currentAssets, currentLiabilities);
            financialLeverage.TotalDebtRatio = financialLeverage.CalculateTotalDebtRatio(currentAssets, totalEquity);
            financialLeverage.DebtEquityRatio = financialLeverage.CalculateDebtEquityRatio(totalDebt, totalEquity);
            financialLeverage.EquityMultiplier = financialLeverage.CalculateEquityMultiplier(totalDebt, totalEquity);
            financialLeverage.FinancialLeverageRatio = financialLeverage.CalculateFinancialLeverageRatio(totalDebt, totalEquity);
            financialLeverage.LongTermDebtRatio = financialLeverage.CalculateLongTermDebtRatio(longTermDebt, ownerEquity);
            return financialLeverage;
        }

        private Profitability setProfitabilityCalculations(BalanceSheet balanceSheet, IncomeStatement incomeStatement)
        {
            Profitability profitability = new Profitability();
            double netIncome = Convert.ToDouble(incomeStatement.NetIncome);
            double currentAssets = Convert.ToDouble(balanceSheet.CurrentAssets);
            profitability.ReturnOnAssets = profitability.CalculateReturnOnAssets(netIncome, currentAssets);
            profitability.ReturnOnEquity = profitability.CalculateReturnOnEquity(netIncome, Convert.ToDouble(balanceSheet.TotalEquity));
            return profitability;
        }

        private MarketValue setMarketValueCalculations(IncomeStatement incomeStatement, string earningsPerShare, string price)
        {
            MarketValue marketValue = new MarketValue();
            double netIncome = Convert.ToDouble(incomeStatement.NetIncome);
            double earningsPerShareValue = Convert.ToDouble(earningsPerShare);
            double priceValue = Convert.ToDouble(price);
            marketValue.SharesOutstanding = marketValue.CalculateSharesOutstanding(netIncome, earningsPerShareValue);
            marketValue.EarningsYield = marketValue.CalculateEarningsYield(earningsPerShareValue, priceValue);
            marketValue.PriceEarningsRatio = marketValue.CalculatePriceEarningsRatio(priceValue, earningsPerShareValue);
            return marketValue;
        }
    }
}
