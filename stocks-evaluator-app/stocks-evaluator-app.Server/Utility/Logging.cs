namespace stocks_evaluator_app.Server.Utility
{
    public class Logging
    {
        private string logFile;

        public Logging()
        {
            var appSettingsHelper = new AppSettingsHelper();
            logFile = appSettingsHelper.GetAppSetting("LogFile");
        }

        public void Write(string message)
        {
            try
            {
                File.WriteAllText(logFile, message);
            }
            catch (Exception e)
            {
                throw new Exception("Error writing to log file: " + e.Message);
            }
        }
    }
}
