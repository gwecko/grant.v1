import React, { useState } from 'react';
import styled from 'styled-components';


const StyledAbout = styled.section`
    h2{
        margin-top: 80px;
    }
    
    h3{
        padding-top: 20px;
        display: inline-block;
        &:before{
            content: '> ';
            color: var(--red);

        }
        @media (max-width: 600px){
            
        }
    }

    p{
        padding: 0;
        margin: 0;
        display: inline-block;
    }

    details{
        transition: .3s;
    }

    button{
        display: inline-block;
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
`

const AboutSection = () => {
    
    // array of question & answer objects
    const questionsAndAnswers = [
        {
            question: "Who are you?",
            answer: "Self-taught web developer with academic CS background.",
            answer_ext: `I graduated from The Ohio State University with a degree in Communication Technology and a minor
                        in Computer Science. I've since taught myself
                        the ins and outs of web development, mostly
                        through Udemy and "browsing the docs".`,
            hidden: true
        },
        {
            question: "What got you here?",
            answer: "An obsession in website design and digital experiences.",
            answer_ext: `I had a rough start into the world of programming... text text text text textt text textt txt etx tetextx ttxtex`,
            hidden: true
        },
        {
            question: "What technologies do you work with?",
            answer: "Javascript, React, node.js, Mongo",
            answer_ext: ``,
            hidden: true
        },
        {
            question: "Anything else?",
            answer: "I have demonstrated use with Express, C, Bootstrap, Gatsby, and API integration.",
            answer_ext: ``,
            hidden: true
        },
        {
            question: "What are your goals?",
            answer: "Develop alongside a group of individuals with experience greater than my own.",
            answer_ext: ``,
            hidden: true
        },
        {
            question: "Who are you, really?",
            answer: "Ohio native with an enthusiasm for tall women.",
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
    
    const displayedQAList = qaList.map((qAndA, i) => {
        return (
            <div className='answer'>
                <h3>{qAndA.question}</h3>
                <button
                    key={i}
                    onClick={() => handleClick(i)}>expand
                </button>
                <p>{qAndA.answer}</p>
                <div
                    key={i}
                    className={qaList[i].hidden ? 'hide-answer' : 'show-answer'}>
                    <p>{qAndA.answer_ext}</p>
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