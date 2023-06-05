import React, { useState } from "react";

function RegistrationForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`ФИО: ${fullName}\nТелефон: ${phone}\nEmail: ${email}`);
    alert(`ФИО: ${fullName}\nТелефон: ${phone}\nEmail: ${email}`);
  };

  return (
      <form onSubmit={handleSubmit} className="registration-form">
        <h2>Регистрация</h2>
        <label>
          ФИО:
          <input
              type="text"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Телефон:
          <input
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Зарегистрироваться</button>
      </form>
  );
}

export default RegistrationForm;







































// import React from "react";
//
// export default class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ""}
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit= this.handleSubmit.bind(this)
//   }
//   handleChange(event) {
//     this.setState({value: event.target.value})
//   }
//   handleSubmit(event) {
//     alert("Default message:" + this.state.value)
//     event.preventDefault()
//   }
//   render() {
//     return(
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name:
//             <input type="text" value={this.state.value} onChange={this.handleChange}/>
//           </label>
//           <input type="submit" value="Send message"/>
//         </form>
//     )
//   }
// }
//
//
// // export default NameForm;
