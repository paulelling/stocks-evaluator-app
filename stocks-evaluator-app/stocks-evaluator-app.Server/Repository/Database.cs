using Microsoft.Data.SqlClient;
using stocks_evaluator_app.Server.Utility;
using System.Data;

namespace stocks_evaluator_app.Server.Repository
{
    public class Database
    {
        private string connectionString;
        private Logging logging;

        public Database()
        {
            var appSettingsHelper = new AppSettingsHelper();
            connectionString = appSettingsHelper.GetAppSetting("ConnectionString");
            logging = new Logging();
        }

        public void ExecuteStoredProcedure(string storedProcedureName, params SqlParameter[] parameters)
        {
            try
            {
                using (var connection = new SqlConnection(connectionString))
                {
                    using (var command = new SqlCommand(storedProcedureName, connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;
                        command.Parameters.AddRange(parameters);

                        connection.Open();
                        command.ExecuteNonQuery();
                    }
                }
            }
            catch (Exception ex)
            {
                logging.Write(ex.Message);
            }
        }
    }
}
