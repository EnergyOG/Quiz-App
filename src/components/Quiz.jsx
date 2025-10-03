import QuizStart from "./QuizStart.jsx";
import Progressbar from "./Progressbar.jsx";
import Timer from "./Timer";
import Questions from "./Questions.jsx";
import Results from "./Results";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { sampleQuestions } from "../data/questions.js";
import { setQuestions } from "../store/quizSlice.js";

function Quiz() {
  const dispatch = useDispatch();

  // loading quiz
  useEffect(() => {
    dispatch(setQuestions(sampleQuestions));
  }, [dispatch]);

  const {
    questions,
    currentQuestionIndex,
    isQuizCompleted,
    isTimerActive,
    answers,
  } = useSelector((state) => state.quiz);

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading</p>
        </div>
      </div>
    );
  }

  // is completed quiz
  if (isQuizCompleted) {
    return (
      <div className="min-h-screen py-8 px-4 flex items-center justify-center">
        <Results />
      </div>
    );
  }

  // quiz start
  if (!isTimerActive && answers.length === 0) {
    console.log(questions);
    return (
      <div className="min-h-screen bg-gradient-to-br py-8 px-4">
        <QuizStart />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex-1">
              <Progressbar
                current={currentQuestionIndex + 1}
                total={questions.length}
              />
            </div>
            <div className="md:ml-6">
              <Timer />
            </div>
          </div>
        </div>
      </div>
      <Questions />
    </div>
  );
}

export default Quiz;
