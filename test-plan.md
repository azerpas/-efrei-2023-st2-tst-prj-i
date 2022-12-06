- Commit c1aefcac148967c35d27f16f356816d9a8e8ef4f marks the start of v1.0.3 testing
- Commit a7546b91e2d64c3ba5a1fd42e1bd30afa84462f6 marks the start of v1.0.2 testing

| N° | Entity        | Date | Description                                                            | Expected result                                                               | Validated                                  |
| -- | ------------- | ---- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------ |
| 1  | Employee      |   1670320285470   | Create an employee                                                     | We should find this same employee in the list of employees.                   | Yes                                        |
| 2  | Employee      |   1670320440524   | Input should be filtering types (numeric, letters, special characters) | Number input should not accept strings                                        | No (Zip code field accept negative values) |
| 3  | Employee      |   1670320549776   | Form should be expecting required inputs                               | The form should not create the entity if a required input is empty yet.       | Yes                                        |
| 4  | Employee      |   1670320624961   | Server should check for unique field (email)                           | Using the same email twice should result in an error                          | No (should not be accepted)                |
| 5  | Employee      |   1670320844232   | Data should be saved according to form fields                          | When listing employees after a creation, data should be the same as the given |  Yes                                          |
| 6  | Employee      |   1670321414810   | Should be able to be promoted as manager                               | Employee appears as manager                                                   | Yes                                        |
| 7  | Employee      |   1670321437027   | Should be able to be added to a team                                   | Employee should appear in team members list                                   | Yes                                        |
| 8  | Employee      |   1670321586696   | Should be able to be deleted                                           | Employee should be removed from employee list                                 | Yes                                          |
| 9  | Employee      |   1670321647081   | Shouldn’t be able to modify employee contract                          | Contract property should be locked to modifications                           |  No: the contract readonly date property can be modified if we modify the HTML                                          |
| 10 | Team   |   1670322200609   | Create a team                                                                 | We should find this same team in the list of teams                            |   Yes                                         |
| 11 | Team          |   1670322191425   | Form should be expecting required input                                | The form should not create the entity if a required input is empty yet        |  No                                           |
| 12 | Team      |   1670322187792   |   Get All Team                                                             | Should display the list of all the teams                          |          Yes                                  |
| 13 | Team,Employee |   1670322182975   | Delete a team                                                          | The team should be deleted from the list.                                     |   Yes                                         |
| 14 | Team          |   1670321991355   | Delete a team                                                          | Every employees of the team should not have this team anymore.                |  No, the employee belonging to the team is getting deleted also                                          |
| 15 | Employe,Team  |  1670322646784   | Delete an employee                                                     | The employee should be removed from its team                             |    Yes                                        |
| 16 | Team          |      | Reset database                                                         | List of team should be empty and display “No employees yet”                   |                                            |
| 17 | Employee      |      | Reset database                                                         | List of employee should be empty                                              |                                            |
| 18 | Team   |   1670323142594   | Create a team with space character " "                                        | We shouldn't get Server Error 500                           |   No (Fail with Server Error 500)                  |
| 19 | Employee  |   1670323175045   |   Check Delete Response            |      Name and email should be display when deleting an employee                             |   Yes                                         |
| 20 | Employee | 1670321175222 | Updating employee address | Fields should be updated on update | No: the address line 2 keeps getting replaced by address line 1 |
| 21 | Employee | 1670321758517 | Employee should have none or 1 team | display one or no team | Yes |

## Questions / specs not explicit : 

- An employee can be a part of severals teams ? No

- A team can contain various managers ?

- An employee that is manager can be a manager for other teams ? 

 
