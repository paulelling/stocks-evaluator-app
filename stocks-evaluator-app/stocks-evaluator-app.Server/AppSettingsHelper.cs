using stocks_evaluator_app.Server.Utility;

namespace stocks_evaluator_app.Server
{
    public interface IAppSettingsHelper
    {
        string GetAppSetting(string key);
    }

    public class AppSettingsHelper : IAppSettingsHelper
    {
        private readonly IConfiguration configuration;

        public AppSettingsHelper()
        {
            configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();
        }

        public string GetAppSetting(string key)
        {
            var dataTypeCheck = new DataTypeCheck();
            return dataTypeCheck.NullCheck(configuration[key]);
        }
    }
}
