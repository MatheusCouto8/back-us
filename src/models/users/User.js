class User {
  constructor({ name, email, password }) {
    this.id = this.generateId();
    this.name = name;
    this.email = email;
    this.password = password;
}

generateId(id) {
    return Math.floor(Math.random() * 1000000);
  }
}

export default User;