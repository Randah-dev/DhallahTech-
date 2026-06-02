const { v4 :  ID } = require ("uuid"); 

class Account {
  constructor(account) {
    this.id        = ID();
    this.firstName = account.firstName;
    this.lastName  = account.lastName;
    this.email     = account.email;
    this.password  = account.password;
    this.phone     = account.phone;
    this.role      = account.role;
  }
}

class Customer extends Account {
  constructor(customer) {
    super(customer);
    this.role = 'CUSTOMER'; 
    this.isPhoneVerified = false; 
  }
}

class Officer extends Account {
  constructor(officer) {
    super(officer);
    this.role     = 'OFFICER'; 

  }
}

class Admin extends Account {
  constructor(admin) {
    super(admin);
    this.role = 'ADMIN'; 
  }
}

class Guest {
  constructor(guest) {
    this.guestID   = ID();      
    this.phone     = guest.phone;        
    this.isPhoneVerified  = false; 
  }
}

module.exports = { Account, Customer, Officer, Admin, Guest }; 
