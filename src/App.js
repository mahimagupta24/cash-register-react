import React, { useState } from "react";

export default function App() {
  const [output, setOutput] = useState("");
  var [noOfNotes, setNoOfNotes] = useState({
    2000: 0,
    500: 0,
    100: 0,
    20: 0,
    10: 0,
    5: 0,
    1: 0
  });
  const notes = [2000, 500, 100, 20, 10, 5, 1];

  var billAmount = "";
  var cashGiven = "";

  function calculateChange(returnedAmount) {
    let updatedNoOfNotes = {};
    for (let note of notes) {
      let change = Math.trunc(returnedAmount / note);//quotient
      returnedAmount = returnedAmount % note;//remainder
      updatedNoOfNotes[note] = change;
    }
    console.log(updatedNoOfNotes);

    setNoOfNotes(updatedNoOfNotes);
  }
  // for (let i = 0; i < noOfNotes.length; i++) {
  //   let note = Math.trunc(returnedAmount / noOfNotes[i]);
  //   returnedAmount = returnedAmount % noOfNotes[i];
  //   notes.push(note);
  //   //noOfNotes[key]= note;
  //   console.log(notes);
  // }

  return (
    <div>
      <h1> cash register</h1>
      <label> bill amount </label>
      <input type="number" onChange={billHandler} />
      <label> cash given</label>
      <input type="number" onChange={cashHandler} />
      <button onClick={calculateCash}> click </button>
      <p>{output}</p>
      <table>
        <caption>Return change</caption>
        <tr>
          <th>no of notes</th>
          <td>{noOfNotes[2000]}</td>
          <td>{noOfNotes[500]}</td>
          <td>{noOfNotes[100]}</td>
          <td>{noOfNotes[20]}</td>
          <td>{noOfNotes[10]}</td>
          <td>{noOfNotes[5]}</td>
          <td>{noOfNotes[1]}</td>
        </tr>
        <th>notes</th>
        {notes.map((note) => (
          <td>{note}</td>
        ))}
      </table>
    </div>
  );

  function billHandler(e) {
    billAmount = e.target.value;
    // console.log(billAmount);
  }
  function cashHandler(e) {
    cashGiven = e.target.value;
    // console.log(cashGiven);
  }
  function calculateCash() {
    if (Number(billAmount) > Number(cashGiven)) {
      setOutput("Do u wanna wash plates?");
    } else if (Number(billAmount) === Number(cashGiven)) {
      setOutput("thanks for paying exact amount");
    } else {
      let returnedAmount = Number(cashGiven) - Number(billAmount);
      // console.log(returnedAmount);
      calculateChange(returnedAmount);
      // setNoOfNotes(noOfNotes);
    }
  }
}
