const employees =[
      {
        "id": "1",
        "name": "Govarthini G",
        "email": "govarthini.se23@bitsathy.ac.in",
        "department": "B.E-ISE",
        "DOB": "04-01-2006",
        "phone": "9877654332"
      },
    ];
    const details=employee.map((user)=>({
      id: parseInt(user.id)  ,     
       Name:user.name,
        email: user.email,
        department:user.department ,
        DOB:parseInt(user.DOB),
        phone: parseInt(user.phone)
      }
  ));
  console.log(details);