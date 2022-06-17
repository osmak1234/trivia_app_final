import { useState, useEffect } from "react";

export const QuestionField = () => {
  useEffect(() => {
    FetchQuestion();
  }, []);

  const [ansCounter, setAnsCounter] = useState(-1);
  const [qanda, updateQanda] = useState([]);
  const [question, setQuestion] = useState();
  const [corAns, setcorAns] = useState();
  const [corCounter, setCorCounter] = useState(0);
  const [inCorCounter, setInCorCounter] = useState(0);

  const Button = () => {
    return (
      <button className="btn_right" onClick={FetchQuestion}>
        Next Question
      </button>
    );
  };

  async function FetchQuestion() {
    document.getElementById("paragrapf").innerHTML = "";
    document.getElementById(
      "button1",
      "button2",
      "button3",
      "button4"
    ).disabled = false;

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

    setAnsCounter(ansCounter + 1);
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
      setCorCounter(corCounter + 1);
    } else {
      changeColor("red", "button1");
      disableButtons();
      setInCorCounter(inCorCounter + 1);

      document.getElementById("paragrapf").innerHTML = corAns;
    }
  }
  function onClick2() {
    if (corAns === qanda[1]) {
      changeColor("green", "button2");
      disableButtons();
      setCorCounter(corCounter + 1);
    } else {
      changeColor("red", "button2");
      disableButtons();
      setInCorCounter(inCorCounter + 1);
      document.getElementById("paragrapf").innerHTML = corAns;
    }
  }
  function onClick3() {
    if (corAns === qanda[2]) {
      changeColor("green", "button3");
      disableButtons();
      setCorCounter(corCounter + 1);
    } else {
      changeColor("red", "button3");
      disableButtons();
      setInCorCounter(inCorCounter + 1);
      document.getElementById("paragrapf").innerHTML = corAns;
    }
  }
  function onClick4() {
    if (corAns === qanda[3]) {
      changeColor("green", "button4");
      disableButtons();
      setCorCounter(corCounter + 1);
    } else {
      changeColor("red", "button4");
      disableButtons();
      setInCorCounter(inCorCounter + 1);
      document.getElementById("paragrapf").innerHTML = corAns;
    }
  }

  const Button1 = () => {
    return (
      <button onClick={onClick1} className="btn-block" id="button1">
        {qanda[0]}
      </button>
    );
  };

  const Button2 = () => {
    return (
      <button onClick={onClick2} id="button2" className="btn-block">
        {qanda[1]}
      </button>
    );
  };

  const Button3 = () => {
    return (
      <button onClick={onClick3} id="button3" className="btn-block">
        {qanda[2]}
      </button>
    );
  };

  const Button4 = () => {
    return (
      <button onClick={onClick4} id="button4" className="btn-block">
        {qanda[3]}
      </button>
    );
  };

  return (
    <div className="container">
      <Button />
      <div className="row">
        <p>You answered {ansCounter} totaly.</p>
      </div>

      <h1 className="header">{question}</h1>

      <Button1 onClick={onClick1} className="btn-block">
        {qanda[0]}
      </Button1>
      <Button2 onClick={onClick2} className="btn-block">
        {qanda[1]}
      </Button2>
      <Button3 onClick={onClick3} className="btn-block">
        {qanda[2]}
      </Button3>
      <Button4 onClick={onClick4} className="btn-block">
        {qanda[3]}
      </Button4>
      <p id="paragrapf"></p>
    </div>
  );
};
