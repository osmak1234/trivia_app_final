import { useState, useEffect } from "react";
import { Button } from "@mui/material";

export const QuestionField = () => {
  useEffect(() => {
    FetchQuestion();
  }, []);

  const [qanda, updateQanda] = useState([]);
  const [question, setQuestion] = useState();
  const [corAns, setcorAns] = useState();

  async function FetchQuestion() {
    document.getElementById("paragrapf").innerHTML = "";
    document.getElementById("button1").disabled = false;
    document.getElementById("button2").disabled = false;
    document.getElementById("button3").disabled = false;
    document.getElementById("button4").disabled = false;
    document.getElementById("button1").style.backgroundColor = "#000000";
    document.getElementById("button2").style.backgroundColor = "#000000";
    document.getElementById("button3").style.backgroundColor = "#000000";
    document.getElementById("button4").style.backgroundColor = "#000000";

    var theQuestion = await fetch(
      "https://the-trivia-api.com/api/questions?limit=1&region=CZ"
    )
      .then((response) => response.json())
      .then((data) => (theQuestion = data));

    setcorAns(theQuestion[0].correctAnswer); //correct answer

    setQuestion(theQuestion[0].question); //the question

    //shuffling of the answers
    var randomise = [
      theQuestion[0].correctAnswer,
      theQuestion[0].incorrectAnswers[0],
      theQuestion[0].incorrectAnswers[1],
      theQuestion[0].incorrectAnswers[2],
    ];
    randomise.sort(function () {
      return 0.5 - Math.random();
    });
    updateQanda(randomise);
  }

  function disableButtons() {
    document.getElementById("button1").disabled = true;
    document.getElementById("button2").disabled = true;
    document.getElementById("button3").disabled = true;
    document.getElementById("button4").disabled = true;
  }
  //change the button collor, passing in parameters
  function changeColor(color, button) {
    document.getElementById(button).style.backgroundColor = color;
  }

  function onClick1() {
    if (corAns === qanda[0]) {
      changeColor("green", "button1");
      disableButtons();
    } else {
      changeColor("red", "button1");
      disableButtons();

      document.getElementById("paragrapf").innerHTML = corAns;
    }
  }

  function onClick2() {
    if (corAns === qanda[1]) {
      changeColor("green", "button2");
      disableButtons();
    } else {
      changeColor("red", "button2");
      disableButtons();
      document.getElementById("paragrapf").innerHTML = corAns;
    }
  }
  function onClick3() {
    if (corAns === qanda[2]) {
      changeColor("green", "button3");
      disableButtons();
    } else {
      changeColor("red", "button3");
      disableButtons();
      document.getElementById("paragrapf").innerHTML = corAns;
    }
  }
  function onClick4() {
    if (corAns === qanda[3]) {
      changeColor("green", "button4");
      disableButtons();
    } else {
      changeColor("red", "button4");
      disableButtons();
      document.getElementById("paragrapf").innerHTML = corAns;
    }
  }

  return (
    <div className="container">
      <Button
        style={{
          size: "small",
          backgroundColor: "#000000",
          padding: "10px 10px",
          fontSize: "16px",

          fontFamily: "poppins",
        }}
        variant="contained"
        onClick={FetchQuestion}
      >
        Next Question
      </Button>

      <h1 className="header">{question}</h1>

      <Button
        onClick={onClick1}
        style={{
          size: "small",
          backgroundColor: "#000000",
          padding: "5px 5px",
          fontSize: "16px",
          margin: "3px",
          animation: "wave",
          width: "95%",

          fontFamily: "poppins",
        }}
        variant="contained"
        id="button1"
      >
        {qanda[0]}
      </Button>
      <Button
        onClick={onClick2}
        style={{
          size: "small",
          backgroundColor: "#000000",
          padding: "10px 10px",
          fontSize: "16px",
          margin: "3px",
          width: "95%",
          animation: "wave",

          fontFamily: "poppins",
        }}
        variant="contained"
        id="button2"
      >
        {qanda[1]}
      </Button>
      <Button
        onClick={onClick3}
        style={{
          size: "small",
          backgroundColor: "#000000",
          padding: "10px 10px",
          fontSize: "16px",
          margin: "3px",
          width: "95%",
          fontFamily: "poppins",
          animation: "wave",
        }}
        variant="contained"
        id="button3"
      >
        {qanda[2]}
      </Button>
      <Button
        onClick={onClick4}
        style={{
          size: "small",
          animation: "wave",
          backgroundColor: "#000000",
          padding: "10px 10px",
          margin: "3px",
          fontSize: "16px",
          width: "95%",
          fontFamily: "poppins",
          //hover animation of white wave for the buttons
          "&:hover": {
            animation: "wave",
            animationDuration: "1s",
            animationIterationCount: "infinite",
            animationDirection: "alternate",
            animationTimingFunction: "ease-in-out",
          },
        }}
        variant="contained"
        id="button4"
      >
        {qanda[3]}
      </Button>
      <p id="paragrapf"></p>
    </div>
  );
};
