import { Button } from "@mui/material";

function NumberCounter() {
  function handleClick() {
    alert("Event1");
  }
  return (
    <div>
      <Button variant="text" onClick={handleClick}>Button1</Button> <br />

      <Button variant="contained" onClick={() => {
        alert("Event2");
      }}>Button2</Button> <br />

      <Button variant="outlined" onClick={handleClick}>Button3</Button> <br />
    </div>
  );
}

export default NumberCounter;