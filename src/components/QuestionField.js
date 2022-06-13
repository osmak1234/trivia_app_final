import { useState, useEffect } from "react";

export const QuestionField = () => {
  useEffect(() => {
    FetchQuestion();
  }, []);

  const [qanda, updateQanda] = useState([]);

  const [question, setQuestion] = useState();
  const [correctAnswer, setCorrectAnswer] = useState();
  const [incorrectAnswer1, setIncorrectAnswer1] = useState();
  const [incorrectAnswer2, setIncorrectAnswer2] = useState();
  const [incorrectAnswer3, setIncorrectAnswer3] = useState();
  const [corAns, setcorAns] = useState();

  const Button = () => {
    return (
      <button className="btn_right" onClick={FetchQuestion}>
        Next Question
      </button>
    );
  };

  async function FetchQuestion() {
    document.getElementById("paragrapf").innerHTML = "";

    if (isTrue) {
      //disable button1
      document.getElementById("button1").disabled = false;
      if (isTrue) {
        document.getElementById("button2").disabled = false;
      }
      if (isTrue) {
        document.getElementById("button3").disabled = false;
      }
      if (isTrue) {
        document.getElementById("button4").disabled = false;
      }
    }

    var theQuestion = await fetch(
      "https://the-trivia-api.com/api/questions?limit=1&region=CZ"
    )
      .then((response) => response.json())
      .then((data) => (theQuestion = data));
    console.log(theQuestion);
    console.log(correctAnswer);
    console.log(incorrectAnswer1);
    console.log(incorrectAnswer2);
    console.log(incorrectAnswer3);

    updateQanda([
      theQuestion[0].correctAnswer,
      theQuestion[0].incorrectAnswers[0],
      theQuestion[0].incorrectAnswers[1],
      theQuestion[0].incorrectAnswers[2],
    ]);

    console.log(qanda);
    setcorAns(theQuestion[0].correctAnswer); //correct answer

    setQuestion(theQuestion[0].question);
    setCorrectAnswer(theQuestion[0].correctAnswer);
    setIncorrectAnswer1(theQuestion[0].incorrectAnswers[0]);
    setIncorrectAnswer2(theQuestion[0].incorrectAnswers[1]);
    setIncorrectAnswer3(theQuestion[0].incorrectAnswers[2]);

    //randomise array
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

  const isTrue = true;

  function onClick1() {
    //if statement
    if (corAns === qanda[0]) {
      document.getElementById("button1").style.backgroundColor = "green";

      if (isTrue) {
        //disable button1
        document.getElementById("button1").disabled = true;
        if (isTrue) {
          document.getElementById("button2").disabled = true;
        }
        if (isTrue) {
          document.getElementById("button3").disabled = true;
        }
        if (isTrue) {
          document.getElementById("button4").disabled = true;
        }
      }
    } else {
      document.getElementById("button1").style.backgroundColor = "red";
      if (isTrue) {
        //disable button1
        document.getElementById("button1").disabled = true;
        if (isTrue) {
          document.getElementById("button2").disabled = true;
        }
        if (isTrue) {
          document.getElementById("button3").disabled = true;
        }
        if (isTrue) {
          document.getElementById("button4").disabled = true;
        }
        if (isTrue) {
          document.getElementById("paragrapf").innerHTML = corAns;
        }
      }
    }
  }
  function onClick2() {
    //if statement
    if (corAns === qanda[1]) {
      document.getElementById("button2").style.backgroundColor = "green";
      if (isTrue) {
        //disable button1
        document.getElementById("button1").disabled = true;
        if (isTrue) {
          document.getElementById("button2").disabled = true;
        }
        if (isTrue) {
          document.getElementById("button3").disabled = true;
        }
        if (isTrue) {
          document.getElementById("button4").disabled = true;
        }
      }
    } else {
      document.getElementById("button2").style.backgroundColor = "red";
      if (isTrue) {
        //disable button1
        document.getElementById("button1").disabled = true;
        if (isTrue) {
          document.getElementById("button2").disabled = true;
        }
        if (isTrue) {
          document.getElementById("button3").disabled = true;
        }
        if (isTrue) {
          document.getElementById("button4").disabled = true;
        }
        if (isTrue) {
          document.getElementById("paragrapf").innerHTML = corAns;
        }
      }
    }
  }
  function onClick3() {
    //if statement
    if (corAns === qanda[2]) {
      document.getElementById("button3").style.backgroundColor = "green";
      if (isTrue) {
        //disable button1
        document.getElementById("button1").disabled = true;
        if (isTrue) {
          document.getElementById("button2").disabled = true;
        }
        if (isTrue) {
          document.getElementById("button3").disabled = true;
        }
        if (isTrue) {
          document.getElementById("button4").disabled = true;
        }
      }
    } else {
      document.getElementById("button3").style.backgroundColor = "red";
      if (isTrue) {
        //disable button1
        document.getElementById("button1").disabled = true;
        if (isTrue) {
          document.getElementById("button2").disabled = true;
        }
        if (isTrue) {
          document.getElementById("button3").disabled = true;
        }
        if (isTrue) {
          document.getElementById("button4").disabled = true;
        }
        if (isTrue) {
          document.getElementById("paragrapf").innerHTML = corAns;
        }
      }
    }
  }
  function onClick4() {
    //if statement
    if (corAns === qanda[3]) {
      document.getElementById("button4").style.backgroundColor = "green";
      if (isTrue) {
        //disable button1
        document.getElementById("button1").disabled = true;
        if (isTrue) {
          document.getElementById("button2").disabled = true;
        }
        if (isTrue) {
          document.getElementById("button3").disabled = true;
        }
        if (isTrue) {
          document.getElementById("button4").disabled = true;
        }
      }
    } else {
      document.getElementById("button4").style.backgroundColor = "red";
      if (isTrue) {
        //disable button1
        document.getElementById("button1").disabled = true;
        if (isTrue) {
          document.getElementById("button2").disabled = true;
        }
        if (isTrue) {
          document.getElementById("button3").disabled = true;
        }
        if (isTrue) {
          document.getElementById("button4").disabled = true;
        }
        if (isTrue) {
          document.getElementById("paragrapf").innerHTML = corAns;
        }
      }
    }
  }

  let correct = true;

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

      <h1 className="header">{question}</h1>

      <Button1
        color={correct ? "green" : "red"}
        onClick={onClick1}
        className="btn-block"
      >
        {qanda[0]}
      </Button1>
      <Button2
        color={correct ? "green" : "red"}
        onClick={onClick2}
        className="btn-block"
      >
        {qanda[1]}
      </Button2>
      <Button3
        color={correct ? "red" : "green"}
        onClick={onClick3}
        className="btn-block"
      >
        {qanda[2]}
      </Button3>
      <Button4
        color={correct ? "red" : "green"}
        onClick={onClick4}
        className="btn-block"
      >
        {qanda[3]}
      </Button4>
      <p id="paragrapf"></p>
    </div>
  );
};
