import React, { useState } from 'react';
import styled from 'styled-components';



const StyledAbout = styled.section`
    h2{
        margin-top: 80px;
    }
    
    h3{
        padding: 10px 0;
        margin-top: 30px;
        display: inline-flex;
        transition: color .2s;
        &:hover{
            cursor: pointer;
            color: var(--red);
            transition: color 0s;
        }
    }

    button{
        background: none;
        color: var(--white);
        font-size: initial;
        font-family: inherit;
        text-align: inherit;
    }

    span{
        display: inline-flex;
        color: var(--red);
        height: min-content;
        margin-right: 10px;
        transition: .2s ease-out;
    }

    .rotate{
        transform: rotate(90deg);
        -webkit-transform: rotate(90deg);
        transition: .2s;
    }

    p{
        padding: 0;
        margin: 0;
        display: block;
    }

    .show-answer{
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
    
    .hide-answer{
        margin: 10px 0px 0px 0px;
        padding: 0px 0px 0px 10px;
        border-left: 3px solid var(--green);
        max-height: 0;
        transition: max-height 0.3s cubic-bezier(0, 0.55, 0.45, 1);
        overflow: hidden;
        position: relative;
    }

    @media screen and (max-width: 768px) {
            padding: 10px;
    }

    #line-through{
        text-decoration: line-through;
        color: var(--white);
    }
`

const AboutSection = () => {
    
    /* 
        array of question & answer objects
        the 'hidden' property is necessary for the collapse feature
    */
    const questionsAndAnswers = [
        {
            question: "Who are you?",
            answer: "Web developer, self-taught on top of academic foundation.",
            answer_ext: <p>I graduated from The Ohio State University with a degree in 
                Communication Technology and a minor in Computer Science.<br/><br/>I've
                since taught myself the ins and outs of web development, mostly 
                 through Udemy, seeing what others do, and browsing documentation.
                </p>,
            hidden: true
        },
        {
            question: "What got you here?",
            answer: "An obsession in website design and digital experiences.",
            answer_ext: <p>I had zero coding experience going into college.<br/><br/>After my intro 
                to C++ class, things fell apart. During my software 1 class, my 
                laptop had to be sent away for repairs and I didn't seek the help I
                 needed. One of the few times I went to seek help, I accidentally
                knocked over a shelf of my professor's office. And I finished that 
                course with an F.<br/><br/>But I loved to learn about how all the systems we
                use function, and I wanted to create my own pieces of software. So
                here I am.<br/><br/>And I haven't knocked over any shelves since.
                </p>,
            hidden: true
        },
        {
            question: "What technologies do you work with?",
            answer: "Javascript, React, Gatsby, node.js, and Mongo",
            answer_ext: <p>In my <a href='/#projects'>Projects</a> section I list the integral tech for each project. 
                I liked the JS-React-Gatsby stack used to build this site so I'm
                going to continue with those for now.<br/><br/>However, if I see a website I really like, 
                I'll find out what makes it spin and learn that.
                </p>,
            hidden: true
        },
        {
            question: "What are your goals?",
            answer: "Develop alongside a group of individuals with experience greater than my own.",
            answer_ext: <p>I understand the value of collaboration and bouncing off peers for ideas.<br/><br/>
                At one of the coffee places I frequent, the barista is also learning web
                development. I can look forward to asking each other what we've been working on and
                finding solutions. Wherever I work, I would like to find more of that collaboration.
                <br/><br/>Eventually, I'd like to be able to do 5x what I can do now in a fraction of
                the time.
                </p>,
            hidden: true
        },
        {
            question: "Who are you, really?",
            answer: <p>Ohio native with an enthusiasm for <span id='line-through'>tall women</span>my uncle Dave!!</p>,
            answer_ext: ``,
            hidden: true
        },
    ]
    
    // stores whole array as a state (which can be updated)
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
                }
                return updatedQuestion;
            }
            return singleQuestion;
        });
        setqaList(newqaList);
    }
    
    // dynamic question & answer list
    const displayedQAList = qaList.map((qAndA, i) => {
        return (
            <div>
                {/* the question; clicked to show collapsable answer */}
                <button
                    key={i}
                    onClick={() => handleClick(i)}
                    onKeyDown={() => handleClick(i)}>
                    <h3>
                        <span className={qaList[i].hidden ? '' : 'rotate'}>&gt; </span>
                        {qAndA.question}
                    </h3>
                </button>
                
                {/* short answer */}
                <p>{qAndA.answer}</p>
                
                {/* extended answer, ~~collapses~~ */}
                <div
                    key={i}
                    className={qaList[i].hidden ? 'hide-answer' : 'show-answer'}>
                    <div>{qAndA.answer_ext}</div>
                </div>
            </div>
        )
    })

    return (
        <StyledAbout id='about'>
            <h2>About me</h2>
            {displayedQAList}   
        </StyledAbout>
    )
};

export default AboutSection;