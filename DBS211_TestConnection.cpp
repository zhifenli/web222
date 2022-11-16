#include <iostream>
#include <occi.h>

using oracle::occi::Connection;
using oracle::occi::Environment;
using namespace oracle::occi;
using namespace std;

Environment *env = nullptr;
Connection *conn = nullptr;

void connect()
{
   string str;
   string usr = "dbs211_223ngg36"; // this is your login assigned to you
   string pass = "33851591";       // this is your password assigned to you
   string srv = "myoracle12c.senecacollege.ca:1521/oracle12c";

   try
   {
      env = Environment::createEnvironment(Environment::DEFAULT);
      conn = env->createConnection(usr, pass, srv);
      cout << "Connection is Successful!" << endl;
      cout << "Members Name  "
           << "Student ID#  " << endl;
      cout << "Hao Yang      "
           << "154336218" << endl;
      cout << "Wing Lo       "
           << " " << endl;
      cout << "ZhiFen Li    "
           << "168833218 " << endl;
      cout << "James         "
           << " " << endl
           << endl;
   }
   catch (SQLException &sqlExcp)
   {
      cout << sqlExcp.getErrorCode() << ": " << sqlExcp.getMessage();
   }
}

void disconnect()
{
   try
   {
      conn->terminateStatement(stmt); // no
      env->terminateConnection(conn);
      Environment::terminateEnvironment(env);
   }
   catch (SQLException &sqlExcp)
   {
      cout << sqlExcp.getErrorCode() << ": " << sqlExcp.getMessage();
   }
}

void findEmployee()
{
   Statement *stmt = conn->createStatement();
   int num, i = 0;
   int numbers[50] = {0};
   int flag = 0;
   ResultSet *rs = stmt->executeQuery("SELECT * FROM employees WHERE employeenumber");
   while (rs->next())
   {
      int temp = rs->getInt();
      numbers[i] = temp;
      i++;
   }

   while (flag != 0)
   {
      std::cout << std::endl
                << "Enter the employee number you want to find: ";
      cin num;
      if (!cin)
      {
         std::cout << "Please enter a number:" << std::endl;
         while (getchar() != '\n')
            ;
         std::cin.clear;
      }
      else
      {
         for (i = 0; i < 50; i++)
         {
            if (numbers[i] == num)
            {
               flag = 0;
            }
            if (flag = 1)
            {
               std::cout << "Employee " << num << "does not exist." << std::endl;
               while (getchar() != '\n')
                  ;
               std::cin.clear;
            }
         }
      }
   }
}

void displayEmployee()
{
   Statement *stmt = conn->createStatement();
   ResultSet *rs = stmt->executeQuery("SELECT * FROM employees WHERE employeenumber");

   cout << "The employee is:" << endl;
   std::cout.width(20);
   std::cout.setf(ios::left);
   cout << "Employee number";
   std::cout.width(15);
   std::cout.setf(ios::left);
   cout << "Lastname";
   std::cout.width(15);
   std::cout.setf(ios::left);
   cout << "Firstname";
   std::cout.width(15);
   std::cout.setf(ios::left);
   cout << "extension";
   std::cout.width(35);
   std::cout.setf(ios::left);
   cout << "Email";
   std::cout.width(15);
   std::cout.setf(ios::left);
   cout << "Office Code";
   std::cout.width(20);
   std::cout.setf(ios::left);
   cout << "Reports to";
   std::cout.width(20);
   std::cout.setf(ios::left);
   cout << "Job Title" << endl;
   std::cout.unsetf(ios::left);
   std::cout.width(155)
           std::cout.fill('-')
               std::cout
       << "-" << std::endl;
   while (rs->next())
   {
      int employeenumber = rs->getInt(1);
      string lastname = rs->getString(2);
      string firstname = rs->getString(3);
      string extension = rs->getString(4);
      string email = rs->getString(5);
      int officecode = rs->getInt(6);
      int reportsto = rs->getInt(7);
      string jobtitle = rs->getString(8);

      std::cout.width(20);
      std::cout.setf(ios::left);
      cout << employeenumber;
      std::cout.width(15);
      std::cout.setf(ios::left);
      cout << lastname;
      std::cout.width(15);
      std::cout.setf(ios::left);
      cout << firstname;
      std::cout.width(15);
      std::cout.setf(ios::left);
      cout << extension;
      std::cout.width(35);
      std::cout.setf(ios::left);
      cout << email;
      std::cout.width(15);
      std::cout.setf(ios::left);
      cout << officecode;
      std::cout.width(20);
      std::cout.setf(ios::left);
      cout << reportsto;
      std::cout.width(20);
      std::cout.setf(ios::left);
      cout << jobtitle << endl;
      std::cout.unsetf(ios::left);
   }
}

void insertEmployee()
{
   Statement *stmt = conn->createStatement();
   int num, i = 0;
   int numbers[50] = {0};
   int flag = 0;
   ResultSet *rs = stmt->executeQuery("SELECT * FROM employees WHERE employeenumber");
   while (rs->next())
   {
      int temp = rs->getInt();
      numbers[i] = temp;
      i++;
   }
   while (flag != 0)
   {
      std::cout << endl
                << "Please enter the employee number you want to add: ";
      cin num;

      if (!cin)
      {
         std::cout << "Please enter a number" << endl;
         while (getchar() != '\n')

            std::cin.clear;
      }
      else
      {
         int j = 0;
         for (i = 0; i < 50; i++)
         {
            if (numbers[i] == num)
            {
               j = 1;
               std::cout << "An employee with the same employee number exists ";
               while (getchar() != '\n')

                  std::cin.clear();
            }
            if (j == 0)
            {
               flag = 0;
               while (getchar() != '\n')
                  std::cin.clear();
            }
         }
      }
   }
   //******************?insert officecode

   string lastname, firstname, extension, email, jobtitle, city;
   std::cout << endl
             << "Please enter the employee's firstname: ";
   std::getline(std::cin, firstname);
   std::cin.clear();

   std::cout << endl
             << "Please enter the employee's lastname: ";
   std::getline(std::cin, lastname);
   std::cin.clear();

   std::cout << endl
             << "Please enter the employee's extension: ";
   std::getline(std::cin, extension);
   std::cin.clear();

   std::cout << endl
             << "Please enter the employee's email: ";
   std::getline(std::cin, email);
   std::cin.clear();

   std::cout << endl
             << "Please enter the employee's job title: ";
   std::getline(std::cin, jobtitle);
   std::cin.clear();

   std::cout << endl
             << "Please enter the employee's city: ";
   std::getline(std::cin, city);
   std::cin.clear();

   if (!cin)
   {
      std::cout << "Please enter a number" << endl;
      while (getchar() != '\n')

         std::cin.clear;
   }

   string sqlStmt = "INSERT INTO employees VALUES (:a, :b, :c, :d, :e, 1, 1002, :h)"; ///####### don't have city
   stmt = conn->createStatement(sqlStmt);
   try
   {
      stmt->setInt(1, num);
      stmt->setString(2, lastname);
      stmt->setString(3, firstname);
      stmt->setString(4, exteq);
      stmt->setString(5, email);
      stmt->setString(6, city);
      stmt->setString(7, jobtitle);

      stmt->excuteUpdate();
      cout << "insert - success" << endl;
   }
   catch (SQLException ex)
   {
      cout << "Exception thrown for insert" << endl;
      cout << "Error number:" << ex.getErrorCode() << endl;
      cout << ex.getMessage() << endl;
   }
}

void updateEmployee()
{
   Statement *stmt = conn->createStatement();
   int num, i = 0;
   int numbers[50] = {0};
   int flag = 0;
   ResultSet *rs = stmt->executeQuery("SELECT * FROM employees WHERE employeenumber");
   while (rs->next())
   {
      int temp = rs->getInt();
      numbers[i] = temp;
      i++;
   }
   while (flag != 0)
   {
      std::cout << endl
                << "Please enter the employee number you want to Update: ";
      cin num;

      if (!cin)
      {
         std::cout << "Please enter a number" << endl;
         while (getchar() != '\n')

            std::cin.clear;
      }
      else
      {
         for (i = 0; i < 50; i++)
         {
            if (numbers[i] == num)
            {
               flag = 1;
               std::cout << "An employee with the same employee number exists ";
               while (getchar() != '\n')
                  std::cin.clear();
            }
            if (flag == 1)
            {
               std::cout << "Employee does not exist. " << endl;
               while (getchar() != '\n')
                  std::cin.clear();
            }
         }
         string ext;

         std::cout << "Please enter the employee's a new extention: ";
         std::getline(cin, ext);
         cin.clear();
         if (!cin)
         {
            std::cout << "Please enter a number" << endl;
            while (getchar() != '\n')

               std::cin.clear;
         }
         string sqlStmt = ("UPDATE EMPLOYEES SET EXTENSION = :x WHERE EMPLOYEENUMBER = :y");
         stmt = conn->createStatement(sqlStmt);
         try
         {
            stmt->setString(1, ext);
            stmt->setString(2, num);

            stmt->excuteUpdate();
            cout << "Update - success" << endl;
         }
         catch (SQLException ex)
         {
            cout << "Exception thrown for updateRow" << endl;
            cout << "Error number:" << ex.getErrorCode() << endl;
            cout << ex.getMessage() << endl;
         }
      }
   }
}

void deleteEmployee(){
   
}

int main(void)
{

   return 0;
}