import { TextField, Stack, Button } from "@mui/material";
import "./App.css";
import { useState } from "react";

function App() {
  const [interest, setInterest] = useState(0);
  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [year, setYear] = useState(0);

  const [invalidPrinciple, setinvalidPrinciple] = useState(false);
  const [invalidrate, setinvalidRate] = useState(false);
  const [invalidyear, setinvalidyear] = useState(false);

  const validateInput = (inputTag) => {
    console.log(inputTag, typeof inputTag);
    const { name, value } = inputTag;
    console.log(value, name);
    //regular experssion / validating
    // (!!) is for change value to boolean
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    console.log(!!value.match(/^\d*.?\d+$/));

    if (name === "principle") {
      setPrinciple(value);
      setinvalidPrinciple(!value.match(/^\d+(\.\d+)?$/));
      if (!!value.match(/^\d*\.?\d+$/)) {
      } else {
        setinvalidPrinciple(true);
      }
    } else if (name === "rate") {
      setRate(value);
      setinvalidRate(!value.match(/^\d+(\.\d+)?$/));
      if (!!value.match(/^\d+(\.\d+)?$/)) {
      } else {
        setinvalidRate(true);
      }
    } else if (name === "year") {
      setYear(value);
      setinvalidyear(!value.match(/^\d+$/));
      if (!!value.match(/^\d+$/)) {
      } else {
        setinvalidyear(true);
      }
    }
  };

  // calculate interest
  const handleCalculate=(e)=>{
    e.preventDefault()
    if(principle && rate && year){
      setInterest(principle*rate*year/100)
    }else{
      alert("All fields are requiered please fill all")
    }
  }
  // reset
  const handleReset=()=>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setinvalidPrinciple(false)
    setinvalidRate(false)
    setinvalidyear(false)
  }

  return (
    <>
      <div
        style={{ width: "100%", minHeight: "100vh" }}
        className="d-flex justify-content-center align-items-center bg-dark"
      >
        <div className="bg-light p-5 rounded">
          <h3>Simple interest Calculator</h3>
          <p>Calculate Simple interest</p>
          <div className="bg-warning  p-5 rounded text-center">
            <h1>₹ {interest}</h1>
            <p>Total simple interest</p>
          </div>
          <form className="mt-5">
            <div className="mb-3">
              <TextField
              value={principle || ""}
                name="principle"
                onChange={(e) => validateInput(e.target)}
                className="w-100"
                id="outlined-principle"
                label="Amount"
                variant="outlined"
              />
            </div>
            {invalidPrinciple && (
              <p className="text-danger fw-bolder mb-2">
                *Invalid Principle Amount
              </p>
            )}
            <div className="mb-3">
              <TextField
              value={rate || ""}
                name="rate"
                onChange={(e) => validateInput(e.target)}
                className="w-100"
                id="outlined-rate"
                label="Rate"
                variant="outlined"
              />
            </div>
            {invalidrate && (
              <p className="text-danger fw-bolder mb-2">*Invalid Rate </p>
            )}
            <div className="mb-3">
              <TextField
              value={year || ""}
                name="year"
                onChange={(e) => validateInput(e.target)}
                className="w-100"
                id="outlined-year"
                label="Time period(Yr)"
                variant="outlined"
              />
            </div>
            {invalidyear && (
              <p className="text-danger fw-bolder mb-2">*Invalid year </p>
            )}

            {/* button */}
            <Stack className="pt-3" direction="row" spacing={2}>
              <Button type="submit" onClick={handleCalculate} disabled={invalidPrinciple || invalidrate || invalidyear } className="bg-dark w-50 rounded" variant="contained">
                Calculate
              </Button>
              <Button
                className=" w-50 border border-dark rounded text-dark"
                variant="outlined"
                onClick={handleReset}
              >
                Reset
              </Button>
            </Stack>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;