{

start: {
  template: {
      "_id": "$emp_no",
      "birth_date": "$birth_date",
      "first_name": "$first_name",
      "last_name": "$last_name",
      "gender": "$gender",
      "hire_date": "$hire_date",
      "titles" : [ "@titlessection" ],
      "salaries": [ "@salariessection"],
      "depts": [ "@dept_empsection"],
    },
    source: {
        uri:  "jdbc:mysql://database-1.cb7xvxwyioz4.eu-west-3.rds.amazonaws.com:3306/employees",
        user: "admin",
        password: "admin-pass",
    },
    target : {
      mode: "insert",
      uri: "mongodb://localhost:27017",
      namespace: "test2.employees"
    },
  query: 'SELECT * FROM employees order by emp_no'
},


titlessection: {
  template: {
      "title": "$title",
      "from_date": "$from_date",
      "to_date": "$to_date"
    },
    query: 'SELECT * FROM titles order by emp_no',
  mergeon: "emp_no"
  },



salariessection:{
  template: {
      "salary": "$salary",
      "from_date": "$from_date",
      "to_date": "$to_date"
    },
    query: 'SELECT * FROM salaries order by emp_no',
 mergeon: "emp_no" 
},


dept_empsection:{
  template: {
      "department" : "@departmentssection",
      "from_date": "$from_date",
      "to_date": "$to_date"
    },
    query: 'SELECT * FROM dept_emp order by emp_no',
   mergeon: "emp_no" 
},

departmentssection: {
 template: {
      "_value": "$dept_name"
    },
    query: 'SELECT * FROM departments where dept_no=? ',
  params: [ "dept_no" ],
  cached: true
},



current_dept_empsection: {
  template: {
      "emp_no": "$emp_no",
      "dept_no": "$dept_no",
      "from_date": "$from_date",
      "to_date": "$to_date"
    },
    query: 'SELECT * FROM current_dept_emp ',
},

dept_emp_latest_datesection: { 
 template: {
      "emp_no": "$emp_no",
      "from_date": "$from_date",
      "to_date": "$to_date"
    },
    query: 'SELECT * FROM dept_emp_latest_date ',
},

dept_managersection:{
 template:{
      "emp_no": "$emp_no",
      "dept_no": "$dept_no",
      "from_date": "$from_date",
      "to_date": "$to_date"
    },
    query: 'SELECT * FROM dept_manager '
}
}
