import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'; 
import Header from './Header';
import StockRequest from './components/StockRequest';
import Guide from './components/Guide';

function App() {    
    return (
        <div className="content">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<StockRequest />} />
                    <Route path="/StockRequest" element={<StockRequest />} />
                    <Route path="/Guide" element={<Guide />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </BrowserRouter>
        </div>
    );     
}

export default App;