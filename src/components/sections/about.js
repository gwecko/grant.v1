import React, { useState } from "react";
import styled from "styled-components";

const StyledAbout = styled.section`
  h2 {
    margin-top: 80px;
  }

  h3 {
    padding: 10px 0;
    margin-top: 30px;
    font-size: 1.5rem;
    display: inline-flex;
    transition: color 0.2s;
    &:hover {
      cursor: pointer;
      color: var(--red);
      transition: color 0s;
    }
  }

  button {
    background: none;
    color: var(--white);
    font-size: initial;
    font-family: inherit;
    text-align: inherit;
  }

  span {
    display: inline-flex;
    color: var(--red);
    height: min-content;
    margin-right: 10px;
    transition: 0.2s ease-out;
  }

  .rotate {
    transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    transition: 0.2s;
  }

  p {
    padding: 0;
    margin: 0;
    display: block;
  }

  mark {
    color: inherit;
    background-color: var(--darkGreen);
  }

  .show-answer {
    margin: 10px 0px 0px 0px;
    padding: 0px 0px 0px 10px;
    border-left: 3px solid var(--green);
    // 'max-height' must be in pixels; otherwise it stops being animated.
    // the <div> will not exceed the its needed height, meaning it
    // won't actually be 1000px or whatever we set it to.
    max-height: 1000px;
    transition: max-height 0.3s cubic-bezier(0.33, 0, 0.68, 0);
    overflow: hidden;
    position: relative;
  }

  .hide-answer {
    margin: 10px 0px 0px 0px;
    padding: 0px 0px 0px 10px;
    border-left: 3px solid var(--green);
    max-height: 0;
    transition: max-height 0.3s cubic-bezier(0, 0.55, 0.45, 1);
    overflow: hidden;
    position: relative;
  }

  h4 {
    padding-bottom: 15px;
    font-size: 1.1rem;
  }

  @media screen and (max-width: 768px) {
    padding: 10px;
  }

  #line-through {
    text-decoration: line-through;
    color: var(--white);
  }
`;

const AboutSection = () => {
  /* 
        array of question & answer objects
        the 'hidden' property is necessary for the collapse feature
    */
  const questionsAndAnswers = [
    {
      question: "Who is Grant?",
      answer: "Software developer looking to provide value to you.",
      answer_ext: (
        <div>
          <p>
            I'm self-taught in software development (applied), while having
            formal education in computer science (academic).
            <br />
            <br />I graduated from <mark>The Ohio State University</mark> with a
            degree in communication technology & a minor in computer science. I
            had a fantastic professor that brought out a dormant interest in UX.
            <br />
            <br />
            Towards the end of college, I began self-teaching software
            development via online courses. Soon after, I coded my own projects.
          </p>
        </div>
      ),
      hidden: true,
    },
    {
      question: "What motivates Grant?",
      answer:
        "An obsession in providing value to others, for which software is the vehicle.",
      answer_ext: (
        <div>
          <p>
            Software development is what I keep returning to, and I've given up
            on acting like there's anywhere else I want to start despite
            setbacks:
          </p>
          <br />
          <ul>
            <li>
              - In high school, my petition to have a computer science class
              failed
            </li>
            <li>
              - In college, I was rejected from the computer science major
            </li>
            <li>
              - Still in college, Covid was counterproductive in acquiring an
              internship
            </li>
          </ul>
          <br />
          <p>
            The{" "}
            <mark>
              scalability & reachability of software is immensely inspiring
            </mark>{" "}
            to me, and I'm confident I'll make that{" "}
            <mark>positive difference</mark> by sticking on this path.
          </p>
        </div>
      ),
      hidden: true,
    },
    {
      question: "What technologies does he use?",
      answer:
        "Anything that expands his sphere of knowledge, or anything that the task requires.",
      answer_ext: (
        <div>
          <p>
            Lame answer: <mark>JavaScript and Java mostly.</mark>
            <br />
            In my <a href="/#projects">Projects</a> section are the integral
            tech for each project. This site was an opportunity to foray into
            React and GraphQL.
            <br />
            <br />
            If I see a website or app I really like, I'll find out what it was
            built with and learn at least some of it.
          </p>
        </div>
      ),
      hidden: true,
    },
    {
      question: "What are his professional goals?",
      answer:
        "Develop alongside a group of individuals with experience greater than my own to create impactful software.",
      answer_ext: (
        <div>
          <p>
            Software development is especially geared toward{" "}
            <mark>
              collaboration which I'll take advantage of in a full-time position
            </mark>
            .
            <br />
            <br />
            The barista at one of my favorite coffeeshops is also practicing
            software development. Talking with{" "}
            <a href="https://www.alexisquintuna.com">him</a> is a great way to
            expand my sphere of knowledge. We're able bring our different
            backgrounds to use in collaborating.
            <br />
            <br />
            Down the line, I'll take the experience I gain from a corporate
            environment to help me{" "}
            <mark>
              implement emerging technologies for underprivileged peoples
            </mark>
            .
          </p>
        </div>
      ),
      hidden: true,
    },
    {
      question: "Tell me more about Grant!",
      answer: <p>Ohio native, big family, bartender, motorcycle, big plans.</p>,
      answer_ext: (
        <div>
          <p>
            I'm big on personal development. A couple of my favorite tenets are:
          </p>
          <ul>
            <li>- lead by example</li>
            <li>- everyone knows something that I don't</li>
            <li>- I cannot lose if I do not quit</li>
          </ul>
          <br />
          <p>
            Back in late summer of '21 I bought a used{" "}
            <a href="https://www.motorcycle.com/specs/kawasaki/on-off-road/2012/klr/650.html">
              Kawasaki KLR
            </a>{" "}
            that I've been able to make use of in some cross-state roadtrips.
            <br />
            <br />
            My idea of success is having control over my time and helping
            others—especially those less fortunate than me, to live improved
            lives.
          </p>
        </div>
      ),
      hidden: true,
    },
  ];

  // stateful Q&A array to be updated
  const [qaList, setqaList] = useState(questionsAndAnswers);

  /* 
        The lesson I learned here is that the page is rendered
        once upon load, and only things which are 'stateful'—
        meaning they implement the 'useState' hook, are
        re-rendered. I had a "working" solution for a while
        because the console.log would show updated info, but
        the page wouldn't display it. It wasn't until I set
        the 'className' ternary operator to the 'stateful' 
        variable that I got a TRUE working solution.
        
        This function re-renders the whole array. I couldn't
        find a better solution and the most helpful posting
        suggested that this is the proper way to do it.
    
        What's going on:
        1. takes 'key' from corresponding button
        2. maps through whole array, if they key matches index,
           then that item is updated
        3. updates the state of the array, which is re-rendered
    */
  function handleClick(key) {
    const newqaList = qaList.map((singleQuestion, i) => {
      if (key === i) {
        const updatedQuestion = {
          ...singleQuestion,
          hidden: !singleQuestion.hidden,
        };
        return updatedQuestion;
      }
      return singleQuestion;
    });
    setqaList(newqaList);
  }

  // function handleMouseEnter(key) {
  //   qaList[key].hidden = true;
  //   handleClick(key);
  // }

  // dynamic question & answer list
  const displayedQAList = qaList.map((qAndA, i) => {
    return (
      <div>
        {/* the question div; clicked to show collapsable answer */}
        <button
          key={i}
          onClick={() => handleClick(i)}
          onKeyDown={() => handleClick(i)}
          // onMouseEnter={() => handleMouseEnter(i)}
        >
          <h3>
            <span className={qaList[i].hidden ? "" : "rotate"}>&gt; </span>
            {qAndA.question}
          </h3>
        </button>

        {/* the answer div to the question div above  */}
        <div
          key={i}
          className={qaList[i].hidden ? "hide-answer" : "show-answer"}
        >
          <h4>{qAndA.answer}</h4>
          <div>{qAndA.answer_ext}</div>
        </div>
      </div>
    );
  });

  return (
    <StyledAbout id="about">
      <h2>About me</h2>
      {displayedQAList}
    </StyledAbout>
  );
};

export default AboutSection;
