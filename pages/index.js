import { useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


export default function Home() {
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
    setCount(count + 1);
  };

  const handleSubmitCity = (e) => {
    e.preventDefault();
    const answer = answers.city;
    setSubmitInfoCity(answer);
    setCount(count + 1);
  };

  const handleSubmitSelection = (e) => {
    e.preventDefault();
    const answer = answers.selection;
    setSubmitInfoSelection(answer);
    setCount(count + 1);
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
            <div className={count === 0 ? styles.show : styles.hide}>
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
            </div>
          </Form.Group>
        </Form>

        <Form onSubmit={handleSubmitCity}>
          <Form.Group>
            <Form.Label className={count >= 1 ? styles.show : styles.hide}>
              What's your favorite City?
            </Form.Label>
            <p>{submitInfoCity}</p>
            {
              <div className={count === 1 ? styles.show : styles.hide}>
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
              </div>
            }
          </Form.Group>
        </Form>
        <Form onSubmit={handleSubmitSelection}>
          <Form.Group>
            <Form.Label className={count >= 2 ? styles.show : styles.hide}>
              Which animal do you like best?
            </Form.Label>
            <p>
              {submitInfoSelection === "Select One" ? "" : submitInfoSelection}
            </p>
            {
              <div className={count === 2 ? styles.show : styles.hide}>
                <Form.Control
                  as="select"
                  name="selection"
                  onChange={handleChange}
                >
                  <option>Select One</option>
                  <option value="Cat">Cat</option>
                  <option value="Dog">Dog</option>
                  <option value="Bird">Bird</option>
                </Form.Control>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            }
          </Form.Group>
        </Form>
      </main>
    </div>
  );
}
