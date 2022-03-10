class Employee {
  constructor(name, id, email, role = "Employee") {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }

  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role;
  }
  generateHTMLCard(extra){
    return `
    <div class="card" style="
    width: 18rem;
    background-color: DodgerBlue;
    color: white;
    align-items: center;
    margin: 15px;
    border: 5px blue solid;
    border-radius: 20px;
  ">
        <div class="top">
            <h4>${this.name}</h4>
            <div>${this.role}</div>
        </div>
        <div class="bottom">
            <ul class = "randomList" style = "list-style: none; text-decoration: none; padding: 0">
                <li class="listItems" >ID: ${this.id}</li>
                <li class="listItems" ><a href="mailto:${this.email}" style="color:white">Email: ${this.email}</a></li>
                ${this.role === "Manager" ? 
                `<li class="listItems" >Office: ${extra}</li>` : 
                this.role === "Engineer" ? 
                `<li class="listItems" ><a href="https://github.com/${extra}" style="color:white">Github: ${extra}</a></li>` : 
                `<li class="listItems" >Alma Mater: ${extra}</li>`
            }
            </ul>
        </div>
    </div>`}

}
module.exports = Employee;