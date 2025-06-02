export default function StockResponse({ ticker }) {
    ticker = ticker.toUpperCase();

    function setLabelValue(labelId, value) {
        document.getElementById(labelId).innerHTML = value;
    }

    var response = fetch('stock?ticker=' + ticker)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setLabelValue("TickerLabel", data["ticker"]);
            setLabelValue("NameLabel", data["name"]);
            setLabelValue("PriceLabel", data["price"]);
            setLabelValue("FiftyTwoWeekLowLabel", data["fiftyTwoWeekLow"]);
            setLabelValue("FiftyTwoWeekHighLabel", data["fiftyTwoWeekHigh"]);
            setLabelValue("MarketCapitalizationLabel", data["marketCapitalization"]);
            setLabelValue("SharesOutstandingLabel", data["sharesOutstanding"]);
            setLabelValue("EarningsPerShareLabel", data["earningsPerShare"]);
            setLabelValue("DividendPerShareLabel", data["dividendPerShare"]);
            setLabelValue("BetaLabel", data["beta"]);
            setLabelValue("PERatioLabel", data["priceEarningsRatio"]);
            setLabelValue("EarningsYieldLabel", data["earningsYield"]);
            setLabelValue("GrossMarginLabel", data["grossMargin"]);
            setLabelValue("OperatingMarginLabel", data["operatingMargin"]);
            setLabelValue("AssetTurnoverLabel", data["assetTurnover"]);
            setLabelValue("InventoryTurnoverLabel", data["inventoryTurnover"]);
            setLabelValue("ReceivablesTurnoverLabel", data["receivablesTurnover"]);
            setLabelValue("QuickRatioLabel", data["quickRatio"]);

            setLabelValue("BalanceSheetDateLabel", data["balanceSheet"]["date"]);
            setLabelValue("CurrentAssetsLabel", data["balanceSheet"]["currentAssets"]);
            setLabelValue("CurrentLiabilitiesLabel", data["balanceSheet"]["currentLiabilities"]);
            setLabelValue("TotalCashLabel", data["balanceSheet"]["totalCash"]);
            setLabelValue("TotalDebtLabel", data["balanceSheet"]["totalDebt"]);
            setLabelValue("TotalEquityLabel", data["balanceSheet"]["totalEquity"]);
            setLabelValue("OwnersEquityLabel", data["balanceSheet"]["ownerEquity"]);
            setLabelValue("LongTermDebt", data["balanceSheet"]["longTermDebt"]);
            setLabelValue("BalanceSheetInventoryLabel", data["balanceSheet"]["inventory"]);
            setLabelValue("AccountsReceivableLabel", data["balanceSheet"]["accountsReceivable"]);

            setLabelValue("IncomeStatementDateLabel", data["incomeStatement"]["date"]);
            setLabelValue("EBITLabel", data["incomeStatement"]["ebit"]);
            setLabelValue("EBITDALabel", data["incomeStatement"]["ebitda"]);
            setLabelValue("DepreciationAndAmortizationLabel", data["incomeStatement"]["depreciationAndAmortization"]);
            setLabelValue("NetIncomeLabel", data["incomeStatement"]["netIncome"]);
            setLabelValue("OperatingIncomeLabel", data["incomeStatement"]["operatingIncome"]);

            setLabelValue("CashFlowStatementDate", data["cashFlowStatement"]["date"]);
            setLabelValue("OperatingCashFlow", data["cashFlowStatement"]["operatingCashFlow"]);
            setLabelValue("Taxes", data["cashFlowStatement"]["taxes"]);
            setLabelValue("ChangeInNetWorkingCapital", data["cashFlowStatement"]["changeInNetWorkingCapital"]);
            setLabelValue("CashFlowStatementInventory", data["cashFlowStatement"]["inventory"]);
            setLabelValue("QualityOfIncomeRatio", data["qualityOfIncomeRatio"]);

            setLabelValue("CurrentRatioLabel", data["currentRatio"]);
            setLabelValue("CashRatioLabel", data["cashRatio"]);

            setLabelValue("NetAssetValueLabel", data["netAssetValue"]);
            setLabelValue("TotalDebtRatioLabel", data["totalDebtRatio"]);
            setLabelValue("DebtEquityRatioLabel", data["debtEquityRatio"]);
            setLabelValue("EquityMultiplierLabel", data["equityMultiplier"]);
            setLabelValue("FinancialLeverageRatioLabel", data["financialLeverageRatio"]);
            setLabelValue("LongTermDebtRatioLabel", data["longTermDebtRatio"]);

            setLabelValue("ReturnOnAssetsLabel", data["returnOnAssets"]);
            setLabelValue("ReturnOnEquityLabel", data["returnOnEquity"]);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    return (
        <div>
            <div className='response'>
                <div className='dataPresentation'>
                    <label id="NameLabel"></label>
                    &nbsp;
                    (<label id="TickerLabel"></label>)
                    <br />
                    <br />
                    <div className='dataLayout'>
                        <div>
                            <label>Price</label>
                        </div>
                        <div>
                            <label id="PriceLabel"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>52 Week Range</label>
                        </div>
                        <div>
                            <label id="FiftyTwoWeekLowLabel"></label>
                            &nbsp;
                            -
                            &nbsp;
                            <label id="FiftyTwoWeekHighLabel"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Market Capitalization</label>
                        </div>
                        <div>
                            <label id="MarketCapitalizationLabel"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Shares Outstanding</label>
                        </div>
                        <div>
                            <label id="SharesOutstandingLabel"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Earnings Per Share</label>
                        </div>
                        <div>
                            <label id="EarningsPerShareLabel"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Dividend Per Share</label>
                        </div>
                        <div>
                            <label id="DividendPerShareLabel"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Beta</label>
                        </div>
                        <div>
                            <label id="BetaLabel"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>P/E Ratio</label>
                        </div>
                        <div>
                            <label id="PERatioLabel"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Earnings Yield</label>
                        </div>
                        <div>
                            <label id="EarningsYieldLabel"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Gross Margin</label>
                        </div>
                        <div>
                            <label id="GrossMarginLabel"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Operating Margin</label>
                        </div>
                        <div>
                            <label id="OperatingMarginLabel"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Asset Turnover</label>
                        </div>
                        <div>
                            <label id="AssetTurnoverLabel"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Inventory Turnover</label>
                        </div>
                        <div>
                            <label id="InventoryTurnoverLabel"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Receivables Turnover</label>
                        </div>
                        <div>
                            <label id="ReceivablesTurnoverLabel"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Quick Ratio</label>
                        </div>
                        <div>
                            <label id="QuickRatioLabel"></label>
                        </div>
                    </div>
                </div>
            </div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div className='response'>
                <div className='dataPresentation'>
                    <label>Balance Sheet</label>
                    <br />
                    <br />
                    <div className='dataLayout'>
                        <div>
                            <label>Date</label>
                        </div>
                        <div>
                            <label id="BalanceSheetDateLabel"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Current Assets</label>
                        </div>
                        <div>
                            <label id="CurrentAssetsLabel"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Current Liabilities</label>
                        </div>
                        <div>
                            <label id="CurrentLiabilitiesLabel"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Total Cash</label>
                        </div>
                        <div>
                            <label id="TotalCashLabel"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Total Debt</label>
                        </div>
                        <div>
                            <label id="TotalDebtLabel"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Total Equity</label>
                        </div>
                        <div>
                            <label id="TotalEquityLabel"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Owners' Equity</label>
                        </div>
                        <div>
                            <label id="OwnersEquityLabel"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Long-Term Debt</label>
                        </div>
                        <div>
                            <label id="LongTermDebt"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Inventory</label>
                        </div>
                        <div>
                            <label id="BalanceSheetInventoryLabel"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Accounts Receivable</label>
                        </div>
                        <div>
                            <label id="AccountsReceivableLabel"></label>
                        </div>
                    </div>
                </div>
            </div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div className='response'>
                <div className='dataPresentation'>
                    <label>Income Statement</label>
                    <br />
                    <br />
                    <div className='dataLayout'>
                        <div>
                            <label>Date</label>
                        </div>
                        <div>
                            <label id="IncomeStatementDateLabel"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>EBIT</label>
                        </div>
                        <div>
                            <label id="EBITLabel"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>EBITDA</label>
                        </div>
                        <div>
                            <label id="EBITDALabel"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Depreciation and Amortization</label>
                        </div>
                        <div>
                            <label id="DepreciationAndAmortizationLabel"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Net Income</label>
                        </div>
                        <div>
                            <label id="NetIncomeLabel"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Operating Income</label>
                        </div>
                        <div>
                            <label id="OperatingIncomeLabel"></label>
                        </div>
                    </div>
                </div>
            </div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div className='response'>
                <div className='dataPresentation'>
                    <label>Cash Flow Statement</label>
                    <br />
                    <br />
                    <div className='dataLayout'>
                        <div>
                            <label>Date</label>
                        </div>
                        <div>
                            <label id="CashFlowStatementDate"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Operating Cash Flow</label>
                        </div>
                        <div>
                            <label id="OperatingCashFlow"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Taxes</label>
                        </div>
                        <div>
                            <label id="Taxes"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Change in Net Working Capital</label>
                        </div>
                        <div>
                            <label id="ChangeInNetWorkingCapital"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Inventory</label>
                        </div>
                        <div>
                            <label id="CashFlowStatementInventory"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Quality of Income Ratio</label>
                        </div>
                        <div>
                            <label id="QualityOfIncomeRatio"></label>
                        </div>
                    </div>
                </div>
            </div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div className='response'>
                <div className='dataPresentation'>
                    <label>Liquidity</label>
                    <br />
                    <br />
                    <div className='dataLayout'>
                        <div>
                            <label>Current Ratio</label>
                        </div>
                        <div>
                            <label id="CurrentRatioLabel"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Cash Ratio</label>
                        </div>
                        <div>
                            <label id="CashRatioLabel"></label>
                        </div>
                    </div>
                </div>
            </div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div className='response'>
                <div className='dataPresentation'>
                    <label>Financial Leverage</label>
                    <br />
                    <br />
                    <div className='dataLayout'>
                        <div>
                            <label>Net Asset Value</label>
                        </div>
                        <div>
                            <label id="NetAssetValueLabel"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Total Debt Ratio</label>
                        </div>
                        <div>
                            <label id="TotalDebtRatioLabel"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Debt Equity Ratio</label>
                        </div>
                        <div>
                            <label id="DebtEquityRatioLabel"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Equity Multiplier</label>
                        </div>
                        <div>
                            <label id="EquityMultiplierLabel"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Financial Leverage Ratio</label>
                        </div>
                        <div>
                            <label id="FinancialLeverageRatioLabel"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Long-Term Debt Ratio</label>
                        </div>
                        <div>
                            <label id="LongTermDebtRatioLabel"></label>
                        </div>
                    </div>
                </div>
            </div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div className='response'>
                <div className='dataPresentation'>
                    <label>Profitability</label>
                    <br />
                    <br />
                    <div className='dataLayout'>
                        <div>
                            <label>Return on Assets</label>
                        </div>
                        <div>
                            <label id="ReturnOnAssetsLabel"></label>
                        </div>
                    </div>
                    <div className='dataLayout'>
                        <div>
                            <label>Return on Equity</label>
                        </div>
                        <div>
                            <label id="ReturnOnEquityLabel"></label>
                        </div>
                    </div>
                </div>
            </div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
        </div>
    )
}