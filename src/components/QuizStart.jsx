import { BookOpen, Play, Clock, Trophy } from "lucide-react";
import { useDispatch } from "react-redux";
import { startQuiz } from "../store/quizSlice.js";

function QuizStart() {
  const dispatch = useDispatch();

  const handleStartQuiz = () => {
    dispatch(startQuiz());
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mx-auto mb-6">
            <BookOpen className="w-12 h-12 text-blue-700" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            HTML <span className="font-light text-gray-500">|</span> CSS{" "}
            <span className="font-light text-gray-500">|</span> JavaScript Quiz
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Test your knowledge of HTML, CSS, and JavaScript with multiple-choice
            questions and see how well you know the fundamentals!
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mb-10">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl min-h-[150px] flex flex-col justify-center">
            <div className="flex items-center justify-center mb-3">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-blue-800">20</div>
            <p className="text-gray-700">Questions</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl min-h-[150px] flex flex-col justify-center">
            <div className="flex items-center justify-center mb-3">
              <Clock className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-purple-600">5:00</div>
            <p className="text-gray-700">Minutes</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl min-h-[150px] flex flex-col justify-center">
            <div className="flex items-center justify-center mb-3">
              <Trophy className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-green-800">100%</div>
            <p className="text-gray-700">Max Score</p>
          </div>
        </div>

        {/* Rules */}
        <div className="bg-gray-50 p-6 rounded-xl max-w-2xl w-full mb-10 text-left">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Quiz Rules</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex">
              <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                1
              </span>
              Each question has multiple choice answers
            </li>
            <li className="flex">
              <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                2
              </span>
              You have 5 minutes to complete all questions
            </li>
            <li className="flex">
              <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                3
              </span>
              Once you select an answer, you'll see the explanation
            </li>
            <li className="flex">
              <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                4
              </span>
              You can navigate back to previous questions
            </li>
          </ul>
        </div>

        {/* Button */}
        <div className="relative">
          <button
            onClick={handleStartQuiz}
            className="inline-flex items-center space-x-3 py-4 px-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-lg font-semibold text-lg cursor-pointer 
            transform transition-transform duration-200 ease-in hover:scale-105 hover:from-blue-600 hover:to-purple-700"
          >
            <Play size={24} />
            <span>Start Quiz</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizStart;
