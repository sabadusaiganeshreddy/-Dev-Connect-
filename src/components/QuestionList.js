import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await axios.get('http://localhost:5000/questions');
      setQuestions(response.data);
    };
    fetchQuestions();
  }, []);

  return (
    <div>
      <h2>Questions</h2>
      <ul>
        {questions.map((question) => (
          <li key={question._id}>
            <Link to={`/questions/${question._id}`}>{question.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionList;