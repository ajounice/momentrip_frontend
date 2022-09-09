class auth {
  constructor() {
    this.authenticated = false;
  }

  login(callback) {
    this.authenticated = true;
    this.isAdmin = false;
    callback();
  }

  logout(callback) {
    this.authenticated = false;
    this.isAdmin = false;
    callback();
  }

  isAuthenticated() {
    return this.authenticated;
  }

  isAdmin() {
    return this.isAdmin;
  }
}

export default new auth();