/*

*****************************************************************************
               DBS211 Project– Final Submission 
              -----------------------------------
               Members Name          Student ID#   
              -----------------------------------
               Hao Yang              154336218 
               Wing Lo               109191213
               Zhi-Fen Li            168833218 
               James Jin             126463215 
              -----------------------------------


Section : DBS211NGG
Date : 2022/12/5
*****************************************************************************
*/
#define _CRT_SECURE_NO_WARNINGS
#include<iostream>
#include<cstring>
#include<occi.h>

using oracle::occi::Environment;
using oracle::occi::Connection;
using namespace oracle::occi;
using namespace std;

//struct Employee
//{
//   int employeeNumber;
//   string lastName;
//   string firstName;
//   string email;
//   string phone;
//   string extension;
//   string reportsTo;
//   string jobTitle;
//   string city;
//};

struct Employee 
{ 
   int employeeNumber =0; 
   char lastName[50]{};
   char firstName[50]{};
   char email[100]{};
   char phone[50]{};
   char extension[10]{};
   char reportsTo[100]{};
   char jobTitle[50]{};
   char city[50]{};
   string officeCode;
   int reportsTo_num = 0;
};

int menu(void);
int findEmployee(Connection*conn, int employeeNumber, struct Employee* emp);
void displayEmployee(Connection*conn, struct Employee emp);
void displayAllEmployees(Connection*conn);
void insertEmployee(Connection* conn, struct Employee emp);
void updateEmployee(Connection* conn, int employeeNumber);
void deleteEmployee(Connection* conn, int employeeNumber);

int main(void) {
   //OCCI Variables
   Environment* env = nullptr;
   Connection* conn = nullptr;
   //User Variables
   string str;
   string usr = "dbs211_223ngg18"; // this is your login assigned to you
   string pass = "15822047"; // this is your password assigned to you
   string srv = "myoracle12c.senecacollege.ca:1521/oracle12c";

   //try-catch statements to handle any errors as a result of a connection failure
   try {
      env = Environment::createEnvironment(Environment::DEFAULT);
      conn = env->createConnection(usr, pass, srv); //create a connection to the Oracle server
      cout << "Connection is Successful!" << endl;
      cout << "-----------------------------------" << endl;
      cout << " Members Name  " << "  Student ID#  " << endl;
      cout << "-----------------------------------" << endl;
      cout << " Hao Yang      " << "  154336218" << endl;
      cout << " Wing Lo       " << "  109191213" << endl;
      cout << " Zhi-Fen Li    " << "  168833218" << endl;
      cout << " James Jin     " << "  126463215" << endl << endl;

      //Statement* stmt = conn->createStatement(); // call method createStatement() to create an statement object
      struct Employee employee = {};

      int option;
      int number;
      bool flag = false;
      do
      {
         option = menu();

         switch (option)
         {
         case 1:
            // find employee
            cout << "Enter Employee Number: ";
            cin >> number;
            if (!cin)
            {
               cout << "Invalid entry, please enter numbers: ";
               cin.clear();
               cin.ignore(1000, '\n');
               cin >> number;
               cin.ignore(1000, '\n');
            }
            if (findEmployee(conn, number, &employee) == 1)
            {
                  // displays employee info
               displayEmployee(conn, employee);
            }
            else
            {
               cout << "Employee " << number << " does not exist.\n" << endl;
            }
            
            break;
         case 2:
            // employees report
            displayAllEmployees(conn);
            break;
         case 3:
         //   // add employee
            insertEmployee(conn, employee);
            break;

         case 4:
         //   // update employee
            cout << "Employee Number: ";
            cin >> number;
            updateEmployee(conn, number);
            break;

         case 5:
         //   // remove employee
            cout << "Employee Number: ";
            cin >> number;
            deleteEmployee(conn, number);
            break;

         case 0:
            // exit the program
            flag = true;
         }
      } while (flag == false);
      
      



      //conn->terminateStatement(stmt); //Terminate a statement before closing the connection
      env->terminateConnection(conn); //close and terminate the connection
      Environment::terminateEnvironment(env); //environment scope ends
   }

   catch (SQLException& sqlExcp) {
      cout << "Check the Error code:" << endl;
      cout << sqlExcp.getErrorCode() << ": " << sqlExcp.getMessage();
   }
   return 0;

}



// displays the menu options and returns user selection option.
int menu(void)
{
   cout << "********************* HR Menu *********************" << endl;

   cout << "1) Find Employee" << endl;
   cout << "2) Employees Report" << endl;
   cout << "3) Add Employee" << endl;
   cout << "4) Update Employee" << endl;
   cout << "5) Remove Employee" << endl;
   cout << "0) Exit" << endl;
   cout << "Enter an option (0-5): ";

   int choice;
   char newline;
   bool done;
   do
   {
      cin >> choice;
      newline = cin.get();
      if (cin.fail() || newline != '\n')
      {
         done = false;
         cin.clear();
         cin.ignore(1000, '\n');
         cout << "Invalid. Enter an option from 0 to 5: ";
      }
      else
      {
         done = choice >= 0 && choice <= 5;
         if (!done)
         {
            cout << "Invalid. Enter an option from 0 to 5: ";
         }
      }
   } while (!done);
   return choice;
}


// returns 1 if employee exists and then stores their information, otherwise returns 0.
int findEmployee(Connection* conn, int employeeNumber, struct Employee* emp)
{
   int ret;
   Statement* stmt = conn->createStatement(); // call method createStatement() to create an statement object
   // store the result set
   ResultSet* rs = stmt->executeQuery("SELECT e.employeenumber, e.lastname, e.firstname, e.email, o.phone, e.extension, m.firstname || ' ' || m.lastname AS \"reportsTo\", e.jobtitle, o.city FROM employees e FULL OUTER JOIN employees m ON e.reportsto = m.employeenumber JOIN offices o ON e.officecode = o.officecode WHERE e.employeenumber=" + to_string(employeeNumber));

   if (!rs->next()) //next() is used to fetch the data,one row will be fetched from the result set if exists.
   {  //check if the result is empty or not, if the result set is empty display and set ret to 0
      ret = 0;  
   }
   else
   {  //if the result set in not empty
      // store employee info in Employee employeeNumber
      emp->employeeNumber = rs->getInt(1);
      // store employee information into string
      string lastName = rs->getString(2);
      string firstName = rs->getString(3);
      string email = rs->getString(4);
      string phone = rs->getString(5);
      string extension = rs->getString(6);
      string reportsTo = rs->getString(7);
      string jobTitle = rs->getString(8);
      string city = rs->getString(9);

      //copy the content of string to char array of Employee variables.
      strcpy(emp->lastName, lastName.c_str());
      strcpy(emp->firstName, firstName.c_str());
      strcpy(emp->email, email.c_str());
      strcpy(emp->phone, phone.c_str());
      strcpy(emp->extension, extension.c_str());
      strcpy(emp->reportsTo, reportsTo.c_str());
      strcpy(emp->jobTitle, jobTitle.c_str());
      strcpy(emp->city, city.c_str());
   
      ret = 1;
   }
   conn->terminateStatement(stmt); //Terminate a statement before closing the connection

   return ret;
}


// displays employee information
void displayEmployee(Connection* conn, struct Employee emp)
{
   cout << endl;
   cout << "-------------- Employee Information -------------" << endl;
   cout << "employeeNumber = ";
   cout << emp.employeeNumber << endl;
   cout << "lastName = ";
   cout << emp.lastName << endl;
   cout << "firstName = ";
   cout << emp.firstName << endl;
   cout << "email = ";
   cout << emp.email<< endl;
   cout << "phone = ";
   cout << emp.phone << endl;
   cout << "extension = ";
   cout << emp.extension << endl;
   cout << "reportsTo = ";
   cout << emp.reportsTo << endl;
   cout << "Job Title = ";
   cout << emp.jobTitle << endl;
   cout << "city = ";
   cout << emp.city << endl << endl;

}

// displays all employees' information if exists
void displayAllEmployees(Connection* conn)
{
   Statement* stmt = conn->createStatement(); // call method createStatement() to create an statement object
   // store the result set
   ResultSet* rs = stmt->executeQuery("SELECT e.employeenumber AS E, e.firstname ||' '||e.lastname AS \"Employee Name\", e.email, o.phone, e.extension AS \"Ext\", m.firstname || ' ' || m.lastname AS \"Manager\" FROM employees e FULL OUTER JOIN employees m ON e.reportsto = m.employeenumber JOIN offices o ON e.officecode = o.officecode ORDER BY e.officecode, e.employeenumber");

   if (!rs->next())//next() is used to fetch the data,one row will be fetched from the result set if exists.
   {
      //check if the result is empty or not, if the result set is empty display and print out the message
     
      cout << "There is no employees' information to be displayed." << endl;
   }
   else
   {
      //if the result set in not empty, print the Employee information
      cout << endl;
      cout.setf(ios::left);
      cout.width(9);
      cout << "E";
      cout.width(18);
      cout << "Employee Name";
      cout.width(35);
      cout << "Email";
      cout.width(18);
      cout << "Phone";
      cout.width(11);
      cout << "Ext";
      cout << "Manager" << endl;


      cout << "------   ---------------   ---------------------------------  ----------------  ---------  -----------------" << endl;
      do
      {
         cout.setf(ios::left);
         cout.width(9);
         cout << rs->getInt(1);
         cout.width(18);
         cout << rs->getString(2);
         cout.width(35);
         cout << rs->getString(3);
         cout.width(18);
         cout << rs->getString(4);
         cout.width(11);
         cout << rs->getString(5);
         cout << rs->getString(6) << endl;

      } while (rs->next());
      cout << endl;
   }
   conn->terminateStatement(stmt); //Terminate a statement before closing the connection
}


// insert information from emp to the employees table
void insertEmployee(Connection* conn, struct Employee emp)
{
   // gets new employeennumber from user first  and stores the values in emp.employeeNumber
   char jobtitle[50];
   cout << endl;
   cout << "-----------------------------------------------" << endl;
   cout << "       Add New Employee Information  " << endl;
   cout << "-----------------------------------------------" << endl;
   cout << "Employee Number: ";
   cin >> emp.employeeNumber;

   // then check if emp.employeeNumber exist in employees table or not
   if (findEmployee(conn, emp.employeeNumber, &emp))
   {
      //if emp.employeeNumber is exist in employees table , print the message
      cout << endl;
      cout << "An employee with the same employee number exists." << endl;
   }
   else
   {
      //if emp.employeeNumber is not exist in employees table then get the rest of information from user.
      cout << "Last Name: ";
      cin >> emp.lastName;
      cout << "First Name: ";
      cin >> emp.firstName;
      cout << "Email: ";
      cin >> emp.email;
      cout << "extension: ";
      cin >> emp.extension;
      cin.ignore();
      cout << "Job Title: ";
      cin.getline(jobtitle, 50, '\n');
      strcpy(emp.jobTitle, jobtitle);
      cout << "City: "; 
      cin >> emp.city;
      emp.officeCode = '1';
      emp.reportsTo_num = 1002;

   //if (findEmployee(conn, emp.employeeNumber, &emp))
   //{
   //   cout << endl;
   //   cout << "An employee with the same employee number exists." << endl;
   //}
   


      Statement* stmt = conn->createStatement();
      stmt->setSQL("INSERT INTO employees VALUES(:1,:2,:3,:4,:5,:6,:7,:8)");

      // insert one row
      stmt->setInt(1, emp.employeeNumber);
      stmt->setString(2, emp.lastName);
      stmt->setString(3, emp.firstName);
      stmt->setString(4, emp.extension);
      stmt->setString(5, emp.email);
      stmt->setString(6, emp.officeCode);
      stmt->setInt(7, emp.reportsTo_num);
      stmt->setString(8, emp.jobTitle);
     // stmt->setString(7, emp.city);
     


      stmt->executeUpdate();
      conn->commit();
      conn->terminateStatement(stmt);

      cout << endl;
      cout << "The new employee is added successfully." << endl;
   }
}

void updateEmployee(Connection* conn, int employeeNumber)
{
   struct Employee temp;
   string extension;
   // if employee exists, display name and get user to enter new extension
   // then update extension in the employees table
   if (findEmployee(conn, employeeNumber, &temp))
   {
      cout << "Upatedate the imformation of: " << employeeNumber << endl;
      cout << "First Name: " << temp.firstName << endl;
      cout << "Last Name: " << temp.lastName << endl;
      cout << "New Extension: ";
      cin >> extension;

      Statement* stmt = conn->createStatement();
      stmt->setSQL("UPDATE employees SET extension=:1 WHERE employeenumber=:2");

      stmt->setString(1, extension);
      stmt->setInt(2, employeeNumber);

      stmt->executeUpdate();
      conn->commit();
      conn->terminateStatement(stmt);

      cout << endl;
      cout << "The extension of employee: " << employeeNumber << " is successfully updated to "<< extension << endl;
   }
   else
   {
      cout << endl;
      cout << "The employee: " << employeeNumber << " does not exist." << endl;
   }
}



// deletes a row with employeeNumber from employees table if exists
void deleteEmployee(Connection* conn, int employeeNumber)
{
   struct Employee temp;
   if (findEmployee(conn, employeeNumber, &temp))
   {
      Statement* stmt = conn->createStatement();
      stmt->setSQL("DELETE FROM employees WHERE employeenumber=:1");

      stmt->setInt(1, employeeNumber);
      stmt->executeUpdate();
      conn->commit();
      conn->terminateStatement(stmt);

      cout << endl;
      cout << "The employee: "<< employeeNumber <<" is deleted" << endl;
   }
   else
   {
      cout << endl;
      cout << "The employee: " << employeeNumber << " does not exist." << endl;
   }
}
