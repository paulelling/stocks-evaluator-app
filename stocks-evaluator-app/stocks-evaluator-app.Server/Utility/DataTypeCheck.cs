namespace stocks_evaluator_app.Server.Utility
{
    public class DataTypeCheck
    {
        public DataTypeCheck() { }

        public string NullCheck(object value)
        {
            if (value == null)
                return "";
            return value.ToString();
        }
    }
}
