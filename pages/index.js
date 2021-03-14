import Head from 'next/head'
import styles from '../styles/Home.module.css'
// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from 'react';

export default function Home() {
  const [questions, setQuestions] = useState([
    "Hi, What's your name?",
    "What's your favorite City?",
  ]);
  const [answers, setAnswers] = useState({
    userName: "",
    city: "",
    selection: ""
  })
  const [submitInfoName, setSubmitInfoName] = useState("")
  const [submitInfoCity, setSubmitInfoCity] = useState("")
  const [submitInfoSelection, setSubmitInfoSelection] = useState("")
  const [count, setCount] = useState(0)

  const handleChange = (e) => {
    console.log(e.target.name)
    setAnswers((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmitName = (e) => {
    e.preventDefault();
    const answer = answers.userName
    setSubmitInfoName(answer);
  };

  const handleSubmitCity = (e) => {
    e.preventDefault();
    const answer = answers.city;
    setSubmitInfoCity(answer);
  };

  const handleSubmitSelection = (e) => {
    e.preventDefault();
    const answer = answers.selection;
    setSubmitInfoSelection(answer);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Hudello FE Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Hudello FE Challenge</h1>

        <Form onSubmit={handleSubmitName}>
          <Form.Group>
            <Form.Label>Hi, What's your name?</Form.Label>
            <p>{submitInfoName}</p>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="userName"
              value={answers.userName}
              onChange={handleChange}
            />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>

        <Form onSubmit={handleSubmitCity}>
          <Form.Group>
            <Form.Label>What's your favorite City?</Form.Label>
            <p>{submitInfoCity}</p>
            <Form.Control
              type="text"
              placeholder="Enter favorite city"
              name="city"
              value={answers.city}
              onChange={handleChange}
            />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
        <Form onSubmit={handleSubmitSelection}>
          <Form.Group>
            <Form.Label>Which animal do you like best?</Form.Label>
            <p>
              {submitInfoSelection === "Select One" ? "" : submitInfoSelection}
            </p>
            <Form.Control as="select" name="selection" onChange={handleChange}>
              <option>Select One</option>
              <option value="Cat">Cat</option>
              <option value="Dog">Dog</option>
              <option value="Bird">Bird</option>
            </Form.Control>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </main>
    </div>
  );
}
