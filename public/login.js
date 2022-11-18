//import { useState, useContext } from "react";
//import userContext from "./context";
 function Login() {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  const [display, setDisplay] = useState(true);
  //let customer = useContext(userContext);
  function handle(){
    console.log(name,email,password);
    const url = `/account/create//${email}/${password}`;
    (async () =>{
      var res = await fetch(url);
      var data = await res.json();
      console.log(data);
    })();
    props.setShow(false);
  };
  function validation(check, label) {
    if (!check) {
      setResult("Error: " + label);
      alert("Please enter " + label);
      return false;
    }
    if (label === "password" && password.length < 8) {
      setResult("Error: " + label);
      alert("Please enter minimum 8 characters");
      return false;
    }
    if (label === "email") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
      }
    }
    return true;
  }
  function handleCreate() {
    console.log(email, password);
    if (!validation(email, "email")) return;
    if (!validation(password, "password")) return;
      if (data === setEmail) {
        if (data === setPassword) {
          alert("LOGIN SUCCESSFULLY");
        }
      }
    setDisplay(false);
    handle();
    alert("Successfully login");
  }
  function clearForm() {
    setEmail("");
    setPassword("");
    setDisplay(true);
  }

  return (
    <>
      <div className="container mt-5" id="form">
        {display ? (
          <>
            <div className="login">
              <center id="loginwholedesign">
                <div id="loginheader">Login Account</div>
                <div class="card-body">
                  <form onSubmit={handleCreate}>
                    <div className="form-group">
                      <label id="labellEA">EMAIL ADDRESS </label>
                      <input
                        type="email"
                        name="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Username or Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                      />
                    </div>
                    <div class="mb-3">
                      <label id="labellpw">PASSWORD</label>
                      <input
                        type="password"
                        name="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.currentTarget.value)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="submitlogin"
                      disabled={!email && !password}
                      onClick={handleCreate}
                    >
                      SUBMIT
                    </button>
                  </form>
                </div>
              </center>
            </div>
          </>
        ) : (
          <>
            <h5 id="loginsucess">Successfully Logged in.</h5>
            <button type="submit" className="loginanother" onClick={clearForm}>
              LOGIN another account
            </button>
          </>
        )}
      </div>
    </>
  );
}
