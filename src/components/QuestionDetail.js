import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function QuestionDetail() {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState('');

  useEffect(() => {
    const fetchQuestion = async () => {
      const response = await axios.get(`http://localhost:5000/questions/${id}`);
      setQuestion(response.data);
    };
    const fetchAnswers = async () => {
      const response = await axios.get(`http://localhost:5000/answers/${id}`);
      setAnswers(response.data);
    };
    fetchQuestion();
    fetchAnswers();
  }, [id]);

  const handleAnswerSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/answers', {
        content: newAnswer,
        author: 'author_id', // Replace with actual author ID
        question: id,
      });
      setAnswers([...answers, response.data]);
      setNewAnswer('');
    } catch (error) {
      console.error(error);
    }
  };

  if (!question) return <div>Loading...</div>;

  return (
    <div>
      <h2>{question.title}</h2>
      <p>{question.description}</p>
      <h3>Answers</h3>
      <ul>
        {answers.map((answer) => (
          <li key={answer._id}>{answer.content}</li>
        ))}
      </ul>
      <form onSubmit={handleAnswerSubmit}>
        <textarea value={newAnswer} onChange={(e) => setNewAnswer(e.target.value)} required />
        <button type="submit">Submit Answer</button>
      </form>
    </div>
  );
}

export default QuestionDetail;