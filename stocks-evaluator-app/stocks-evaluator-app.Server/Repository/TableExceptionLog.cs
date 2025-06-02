using Microsoft.Data.SqlClient;

namespace stocks_evaluator_app.Server.Repository
{
    public class TableExceptionLog
    {
        private Database database;

        public TableExceptionLog()
        {
            database = new Database();
        }

        public void LogException(string exception, string stackTrace)
        {
            var parameters = new SqlParameter[]
            {
                new SqlParameter("@Exception", exception),
                new SqlParameter("@StackTrace", stackTrace)
            };
            database.ExecuteStoredProcedure("ExceptionLogInsert", parameters);
        }
    }
}
