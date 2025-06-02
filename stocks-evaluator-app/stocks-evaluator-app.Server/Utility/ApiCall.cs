using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using stocks_evaluator_app.Server.Repository;

namespace stocks_evaluator_app.Server.Utility
{
    public class ApiCall
    {
        private TableExceptionLog logging;
        private DataTypeCheck dataTypeCheck;

        public ApiCall()
        {
            logging = new TableExceptionLog();
            dataTypeCheck = new DataTypeCheck();
        }

        public JObject MakeCall(string uri)
        {
            var dataObject = new JObject();

            try
            {
                var client = new HttpClient();
                client.BaseAddress = new Uri(uri);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));

                var response = client.GetAsync("").Result;

                if (response.IsSuccessStatusCode)
                {
                    var data = response.Content.ReadAsStringAsync().Result;
                    dataObject = (JObject)JsonConvert.DeserializeObject(data);
                }
            }
            catch (Exception e)
            {
                logging.LogException(e.Message, dataTypeCheck.NullCheck(e.StackTrace));
            }

            return dataObject;
        }

        public JObject MakeCallForJacksonResponse(string uri)
        {
            var dataObject = new JObject();

            try
            {
                var client = new HttpClient();
                client.BaseAddress = new Uri(uri);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));

                var response = client.GetAsync("").Result;

                if (response.IsSuccessStatusCode)
                {
                    var data = response.Content.ReadAsStringAsync().Result;
                    data = data.Substring(1, data.Length - 2);
                    dataObject = (JObject)JsonConvert.DeserializeObject(data);
                }
            }
            catch (Exception e)
            {
                logging.LogException(e.Message, dataTypeCheck.NullCheck(e.StackTrace));
            }

            return dataObject;
        }

        public JObject MakeCallForJacksonResponseArray(string uri)
        {
            var dataObject = new JObject();

            try
            {
                var client = new HttpClient();
                client.BaseAddress = new Uri(uri);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));

                var response = client.GetAsync("").Result;

                if (response.IsSuccessStatusCode)
                {
                    var data = response.Content.ReadAsStringAsync().Result;
                    data = data.Substring(2, data.Length - 3);
                    data = data.Substring(0, data.IndexOf("}") + 1);
                    dataObject = (JObject)JsonConvert.DeserializeObject(data);
                }
            }
            catch (Exception e)
            {
                logging.LogException(e.Message, dataTypeCheck.NullCheck(e.StackTrace));
            }

            return dataObject;
        }
    }
}
