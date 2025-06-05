import { BrowserRouter, Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="header">
            <div className="headerLeft">
                <div className="title">
                    <Link to="/StockRequest" className="headerLink">Stocks Evaluator</Link>
                </div>
            </div>
            <div className="headerRight">
                <div className="menu">
                    <div>
                        <Link to="/StockRequest" className="headerLink">Search</Link>
                    </div>
                    <div>
                        &nbsp;&nbsp;&nbsp;
                    </div>
                    <div>
                        <Link to="/Guide" className="headerLink">Guide</Link>
                    </div>
                    <div>
                        &nbsp;&nbsp;&nbsp;
                    </div>
                    <div>
                        Support
                    </div>
                </div>
                <div className="settings">
                    <img src="/GearBlack.png" alt="Settings" height="25px" width="25px"></img>
                </div>
            </div>
        </div>
    )
}