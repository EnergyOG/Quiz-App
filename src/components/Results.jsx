import { Award, Clock, RefreshCw, Target, Trophy } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { resetQuiz } from "../store/quizSlice";

function Results() {
  const dispatch = useDispatch();
  const { score, questions, answers, timeLeft } = useSelector(
    (state) => state.quiz
  );
  const totalQuestions = questions.length;
  const percentage = Math.round((score / totalQuestions) * 100);
  const timeUsed = 300 - timeLeft;
  const minuteUsed = Math.floor(timeUsed / 60);
  const secondUsed = timeUsed % 60;
  
  const handleReset = () =>{
    dispatch(resetQuiz())
  }
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-center">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-200 mb-6 shadow-md">
            <Trophy className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-600" />
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-800">
            Quiz Completed!
          </h1>
          <p className="text-lg sm:text-2xl font-semibold mb-6">
            Performance Message
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 rounded-xl">
            <div className="flex items-center justify-center mb-4">
              <Target className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-blue-800 mb-2">
              {score} / {totalQuestions}
            </div>
            <div className="text-blue-600 font-medium">Questions Correct</div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 sm:p-6 rounded-xl">
            <div className="flex items-center justify-center mb-4">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-purple-800 mb-2">
              {percentage}%
            </div>
            <div className="text-purple-600 font-medium">Score Percentage</div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 sm:p-6 rounded-xl">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-green-800 mb-2">
              {minuteUsed}:{secondUsed.toString().padStart(2, "0")}
            </div>
            <div className="text-green-600 font-medium">Time Used</div>
          </div>
        </div>

        {/* Question Review */}
        <div className="mb-8">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
            Question Review
          </h3>
          {/* Displaying Dynamic Questions */}
          <div className="grid gap-4 max-h-64 overflow-y-auto">
            {questions.map((question, index) => {
              const answer = answers.find((a) => a.questionId === question.id);
              const isCorrect = answer?.isCorrect ?? false;

              return (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 rounded-lg border-2 ${
                    isCorrect
                      ? "border-green-200 bg-green-50"
                      : "border-red-200 bg-red-50"
                  }`}
                >
                  <span className="text-sm font-medium text-gray-700">
                    Question {index + 1}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      isCorrect
                        ? "text-green-700 bg-green-100"
                        : "text-red-700 bg-red-100"
                    }`}
                  >
                    {isCorrect ? "Correct" : "Wrong"}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Button */}
          <button className="inline-flex items-center justify-center space-x-2 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-transform duration-200 ease-in shadow-lg font-medium sm:font-semibold text-sm sm:text-base md:text-lg cursor-pointer" 
          onClick={handleReset}
          >
            <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>Take Quiz Again</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Results;
