import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function StockResponse({ ticker }) {
    ticker = ticker.toUpperCase();

    function setLabelValue(labelId, value) {
        document.getElementById(labelId).innerHTML = value;
    }

    function formatWithDecimals(x) {
        return parseFloat(x).toFixed(2).toLocaleString();
    }

    const [chartOptions, setChartOptions] = useState({
        series: [{ data: [] }] // Initialize with empty data
    });

    useEffect(() => {

        var response = fetch('stock?ticker=' + ticker)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setLabelValue("TickerLabel", data["ticker"]);

                if (data["name"] === "") {
                    setLabelValue("responseStatusLabel", "Invalid ticker symbol entered");
                    document.getElementById("responseDiv").classList.add("hideDiv");
                }
                else {
                    setLabelValue("NameLabel", data["name"]);
                    setLabelValue("PriceLabel", formatWithDecimals(data["price"]));
                    setLabelValue("FiftyTwoWeekLowLabel", formatWithDecimals(data["fiftyTwoWeekLow"]));
                    setLabelValue("FiftyTwoWeekHighLabel", formatWithDecimals(data["fiftyTwoWeekHigh"]));
                    setLabelValue("FiftyTwoWeekLowDateLabel", data["fiftyTwoWeekLowDate"]);
                    setLabelValue("FiftyTwoWeekHighDateLabel", data["fiftyTwoWeekHighDate"]);
                    setLabelValue("MarketCapitalizationLabel", formatWithDecimals(data["marketCapitalization"]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    setLabelValue("SharesOutstandingLabel", formatWithDecimals(data["sharesOutstanding"]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    setLabelValue("EarningsPerShareLabel", formatWithDecimals(data["earningsPerShare"]));
                    setLabelValue("DividendPerShareLabel", formatWithDecimals(data["dividendPerShare"]));
                    setLabelValue("BetaLabel", formatWithDecimals(data["beta"]));
                    setLabelValue("PERatioLabel", formatWithDecimals(data["priceEarningsRatio"]));
                    setLabelValue("EarningsYieldLabel", formatWithDecimals(data["earningsYield"]));
                    setLabelValue("GrossMarginLabel", formatWithDecimals(data["grossMargin"]));
                    setLabelValue("OperatingMarginLabel", formatWithDecimals(data["operatingMargin"]));
                    setLabelValue("AssetTurnoverLabel", formatWithDecimals(data["assetTurnover"]));
                    setLabelValue("InventoryTurnoverLabel", formatWithDecimals(data["inventoryTurnover"]));
                    setLabelValue("ReceivablesTurnoverLabel", formatWithDecimals(data["receivablesTurnover"]));
                    setLabelValue("QuickRatioLabel", formatWithDecimals(data["quickRatio"]));

                    setLabelValue("BalanceSheetDateLabel", data["balanceSheet"]["date"]);
                    setLabelValue("CurrentAssetsLabel", data["balanceSheet"]["currentAssets"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    setLabelValue("CurrentLiabilitiesLabel", data["balanceSheet"]["currentLiabilities"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    setLabelValue("TotalCashLabel", data["balanceSheet"]["totalCash"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    setLabelValue("TotalDebtLabel", data["balanceSheet"]["totalDebt"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    setLabelValue("TotalEquityLabel", data["balanceSheet"]["totalEquity"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    setLabelValue("OwnersEquityLabel", data["balanceSheet"]["ownerEquity"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    setLabelValue("LongTermDebt", data["balanceSheet"]["longTermDebt"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    setLabelValue("BalanceSheetInventoryLabel", data["balanceSheet"]["inventory"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    setLabelValue("AccountsReceivableLabel", data["balanceSheet"]["accountsReceivable"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

                    setLabelValue("IncomeStatementDateLabel", data["incomeStatement"]["date"]);
                    setLabelValue("EBITLabel", data["incomeStatement"]["ebit"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    setLabelValue("EBITDALabel", data["incomeStatement"]["ebitda"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    setLabelValue("DepreciationAndAmortizationLabel", data["incomeStatement"]["depreciationAndAmortization"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    setLabelValue("NetIncomeLabel", data["incomeStatement"]["netIncome"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    setLabelValue("OperatingIncomeLabel", data["incomeStatement"]["operatingIncome"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

                    setLabelValue("CashFlowStatementDate", data["cashFlowStatement"]["date"]);
                    setLabelValue("OperatingCashFlow", data["cashFlowStatement"]["operatingCashFlow"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    setLabelValue("Taxes", data["cashFlowStatement"]["taxes"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    setLabelValue("ChangeInNetWorkingCapital", data["cashFlowStatement"]["changeInNetWorkingCapital"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    setLabelValue("CashFlowStatementInventory", data["cashFlowStatement"]["inventory"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    setLabelValue("QualityOfIncomeRatio", formatWithDecimals(data["qualityOfIncomeRatio"]));

                    setLabelValue("CurrentRatioLabel", formatWithDecimals(data["currentRatio"]));
                    setLabelValue("CashRatioLabel", formatWithDecimals(data["cashRatio"]));

                    setLabelValue("NetAssetValueLabel", data["netAssetValue"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    setLabelValue("TotalDebtRatioLabel", formatWithDecimals(data["totalDebtRatio"]));
                    setLabelValue("DebtEquityRatioLabel", formatWithDecimals(data["debtEquityRatio"]));
                    setLabelValue("EquityMultiplierLabel", formatWithDecimals(data["equityMultiplier"]));
                    setLabelValue("FinancialLeverageRatioLabel", formatWithDecimals(data["financialLeverageRatio"]));
                    setLabelValue("LongTermDebtRatioLabel", formatWithDecimals(data["longTermDebtRatio"]));

                    setLabelValue("ReturnOnAssetsLabel", formatWithDecimals(data["returnOnAssets"]));
                    setLabelValue("ReturnOnEquityLabel", formatWithDecimals(data["returnOnEquity"]));

                    var fiftyTwoWeekLow = formatWithDecimals(data["fiftyTwoWeekLow"]);
                    var fiftyTwoWeekHigh = formatWithDecimals(data["fiftyTwoWeekHigh"]);
                    var fiftyTwoWeekLowDate = data["fiftyTwoWeekLowDate"];
                    var fiftyTwoWeekHighDate = data["fiftyTwoWeekHighDate"];

                    var fiftyTwoWeekHighDateObject = new Date(fiftyTwoWeekHighDate);
                    var fiftyTwoWeekLowDateObject = new Date(fiftyTwoWeekLowDate);

                    var firstDate;
                    var secondDate;

                    var firstPrice;
                    var secondPrice;

                    if (fiftyTwoWeekHighDateObject > fiftyTwoWeekLowDateObject) {
                        firstDate = fiftyTwoWeekLowDate;
                        firstPrice = Number(fiftyTwoWeekLow);
                        secondDate = fiftyTwoWeekHighDate;
                        secondPrice = Number(fiftyTwoWeekHigh);
                    }
                    else if (fiftyTwoWeekLowDateObject > fiftyTwoWeekHighDateObject) {
                        firstDate = fiftyTwoWeekHighDate;
                        firstPrice = Number(fiftyTwoWeekHigh);
                        secondDate = fiftyTwoWeekLowDate;
                        secondPrice = Number(fiftyTwoWeekLow);
                    }

                    setChartOptions(prevState => ({
                        ...prevState,
                        series: [{ name: "Price", data: [firstPrice, secondPrice] }], // Set the fetched data
                        xAxis: [{ categories: [firstDate, secondDate] }], // Set the fetched data]
                        title: { text: "52-Week Price Swing" },
                        yAxis: {
                            title: {
                                text: 'Price'
                            }
                        }
                    }));
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

    }, []);


    return (
        <div>
            <div id="responseStatusDiv">
                <label id="responseStatusLabel"></label>
            </div>
            <div id="responseDiv">
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
                                <label>52 Week Low Date</label>
                            </div>
                            <div>
                                <label id="FiftyTwoWeekLowDateLabel"></label>
                            </div>
                        </div>
                        <div className='dataLayout'>
                            <div>
                                <label>52 Week High Date</label>
                            </div>
                            <div>
                                <label id="FiftyTwoWeekHighDateLabel"></label>
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
                    <HighchartsReact highcharts={Highcharts} options={chartOptions}></HighchartsReact>
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
            </div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
        </div>
    )
}