using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace ProFitPrueba.Model
{
    public class Repository
    {
        private String connectionString;

        public Repository()
        {
            connectionString = @"Persist Security Info=False;Integrated Security=SSPI;Initial Catalog=FitProDBtesting; Data Source=localhost; Connection Timeout=100000;";

        }
        public IDbConnection Connection
        {
            get
            {
                return new SqlConnection(connectionString);
            }
        }
        public void Add(model m)
        {
            using(IDbConnection dbConnection = Connection)
            {
                string sQuery = @"INSERT INTO [dbo].[Users]([Name],[Email],[Notes]) VALUES (@Name,@Email,@Notes)";
                dbConnection.Open();
                dbConnection.Execute(sQuery, m);

            }
        }
        public IEnumerable<model> GetAll()
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sQuery = @"SELECT * FROM [dbo].[Users]";
                dbConnection.Open();
                return dbConnection.Query<model>(sQuery); 

            }
        }
        ]
        public void DeleteById(int id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sQuery = @"DELETE FROM [dbo].[Users] where [Id]=@Id";
                dbConnection.Open();
                dbConnection.Execute(sQuery, new { Id = id });

            }
        }
    }
}
