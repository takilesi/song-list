export default function QuizComponent() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showScore, setShowScore] = useState(false);
    const [haveAnswered, setHaveAnswered] = useState(false);
    const [score, setScore] = useState(0);
  
    const QuestionList = [{
      image: "https://img.icons8.com/ios-glyphs/120/000000/image.png",
      options: [
        { Answertext: "Brazil", IsitCorrect: true },
        { Answertext: "Germany", IsitCorrect: false },
        { Answertext: "Oman", IsitCorrect: false },
        { Answertext: "Russia", IsitCorrect: false },
      ],
    },
    {
      image: "https://img.icons8.com/ios-glyphs/120/000000/image.png",
      options: [
        { Answertext: "USA", IsitCorrect: false },
        { Answertext: "Saudi Arabia", IsitCorrect: false },
        { Answertext: "India", IsitCorrect: true },
        { Answertext: "Sirilanka", IsitCorrect: false },
      ],
    }]
  
    const AnsweredQuestion = (IsitCorrect) => {
      setHaveAnswered(true)
      const nextQuestion = currentQuestion + 1;
  
      if (IsitCorrect) {
        setScore(score + 1)
      }
      setTimeout(() => {
        if (nextQuestion < QuestionList.length) {
          setCurrentQuestion(nextQuestion)
        } else {
          setShowScore(true)
        }
        setHaveAnswered(false)
      }, 1000)
    }
  
    return (
      <div>
        <div id="show-score">
          {showScore ?
            <div className="score-section">
              {`You scored ${score} out of ${QuestionList.length}`}
            </div>
  
            : <></>
          }
        </div>
  
        <div>
          <img src={QuestionList[currentQuestion].image} />
        </div>
  
        <div id="question-heading">
          <h1>Pick The Right Country's Flag</h1>
        </div>
  
        <div id="question-option">
          {QuestionList[currentQuestion].options.map((option, index) => {
            return (
              <QuestionOption
                key={index}
                parentFunction={AnsweredQuestion}
                correctness={option.IsitCorrect}
                defaultClass="question-option-paragraph text-white font-bold py-2 px-4 rounded"
                colors={{
                  default: "blue",
                  good: "green",
                  bad: "red"
                }}
                haveAnswered={haveAnswered}
                text={option.Answertext}
              >
              </QuestionOption>
            );
          })}
        </div>
  
  
      </div>
    )
  }
  
  function QuestionOption(props) {
    const [myColor, setMyColor] = useState(props.colors.default)
  
    const changeColor = () => {
      if (props.correctness) {
        setMyColor(props.colors.good)
      }
      else {
        setMyColor(props.colors.bad)
      }
    }
  
    useEffect(() => {
      if (!props.haveAnswered) {
        setMyColor(props.colors.default)
      }
    }, [props.haveAnswered])
  
    return (
      <button
        className={`${props.defaultClass} bg-${myColor}-500 hover:bg-${myColor}-700`}
        onClick={() => {
          props.parentFunction(props.correctness)
          changeColor()
        }}
      >
        {props.text}
      </button>
    )
  }