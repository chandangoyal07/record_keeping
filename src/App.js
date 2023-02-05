import "./App.css";
import Header from "./Components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
// import Fields from "./Components/Fields";   context api karenge tab hum is tarah se bhi khel sakte hain
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  //  state mein is tarike se objects rakh sakte hai
  const [data, setData] = useState([]);

  // spread operator ka use karke naye objects kaise dalen
  const addData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };
  // agar state mein ek array hai toh is tarah se remove karenge
  const removeItem = (index) => {
    let arr = data;
    arr.splice(index , 1);
    setData([...arr]);
  }

  return (
    <div className="App">
      <Header />
      {/* Form */}
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            value={name}

            //  input field mein jo bhi koi likhega hum is tarah se lenge
            onChange={(event) => setName(event.target.value)}
            id="outlined-basic"
            label="Name" 
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button onClick={addData} color={"success"} variant="contained">
            <AddIcon />
          </Button>
        </Stack>
      </div>

      {/* Data */}
      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
      </div>
      {data.map((element, index) => {
        return (
          <div key={index} className="data_val">
            <h4>{element.name}</h4>
            <h4>{element.email}</h4>
            <Button onClick={() => removeItem(index)} variant="contained" color="error">
              <DeleteOutlineIcon />
            </Button>
          </div>
        );
      })}
    </div>
  );
}
export default App;
