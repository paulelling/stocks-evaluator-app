using Microsoft.AspNetCore.Mvc;
using stocks_evaluator_app.Server.Models;
using stocks_evaluator_app.Server.Service;

namespace stocks_evaluator_app.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StockController : ControllerBase
    {
        private StockService stockService;

        public StockController(StockService stockService)
        {
            this.stockService = stockService;
        }

        [HttpGet(Name = "GetStock")]
        public Stock Get(string ticker)
        {
            var stock = stockService.GetStock(ticker);
            return stock;
        }
    }
}
