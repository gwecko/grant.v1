import React, { useState } from 'react';
import styled from 'styled-components';



const StyledAbout = styled.section`
    h2{
        margin-top: 80px;
    }
    
    h3{
        padding: 10px 0;
        margin-top: 30px;
        font-size: 1.5rem;
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

    mark{
        color: inherit;
        background-color: var(--darkGreen);
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

    h4{
        padding-bottom: 15px;
        font-size: 1.1rem;
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
            question: "Who is Grant?",
            answer: "Web developer, self-taught on top of academic CS foundation.",
            answer_ext: <p>I graduated from <mark>The Ohio State University</mark> with a degree in 
                Communication Technology and a minor in Computer Science.
                <br /><br />
                I've since taught myself the ins and outs of web development, <mark>mostly 
                    through project-based learing</mark>, Udemy, seeing what others do, and browsing documentation.
                </p>,
            hidden: true
        },
        {
            question: "What motivates Grant?",
            answer: "An obsession in website design and digital experiences.",
            answer_ext: <p>I had <mark>zero coding experience</mark> going into college.
                <br/><br/>
                After my intro 
                to C++ class, things fell apart. During my software 1 class, my 
                laptop had to be sent away for repairs and I didn't seek the help I 
                needed. One of the few times I went to seek help, I accidentally
                knocked over a shelf of my professor's office. And I finished that 
                course <mark>with an F</mark>.
                <br/><br/>
                But I <mark>loved to learn how</mark> the systems we
                use function, and I wanted to <mark>create my own pieces of software</mark>. So
                here I am.
                <br/><br/>
                And I haven't knocked over any shelves since.
                </p>,
            hidden: true
        },
        {
            question: "What technologies does he use to create?",
            answer: "Most recently Javascript, React, Gatsby, node.js, and Express",
            answer_ext: <p>In my <a href='/#projects'>Projects</a> section I list the integral tech for each project. 
                I liked the <mark>JS-React-Gatsby-GraphQL</mark> stack used to build this site so I'm
                going to continue with those for now.
                <br/><br/>
                However, if I see a website or app I really like, 
                I may find out what makes it spin and learn that in order to make my own version.
                <br/><br/>
                In an academic setting, I've worked with <mark> Java, C, and briefly Python</mark>. Experienced with HTML/CSS.
                </p>,
            hidden: true
        },
        {
            question: "What are his professional goals?",
            answer: "Develop alongside a group of individuals with experience greater than my own to create impactful software.",
            answer_ext: <p>I understand the value of <mark>collaboration for solutions and creativity</mark>.
                <br /><br />
                At one of the coffee places I frequent, the barista is also learning web
                development. Going there, I can look forward to discussing with <a href='https://www.alexisquintuna.com'>Alex Quintuna</a> what we've been working on and
                finding solutions. Even with different backgrounds, we have similar interests. Wherever I work, I would like to find more of that collaboration.
                <br /><br />
                I want to do <mark>5x what I'm able to now in a fraction of the time</mark>.
                </p>,
            hidden: true
        },
        {
            question: "Tell me more about Grant!",
            answer: <p>Ohio native who grew up in a big family with lots of animals.</p>,
            answer_ext: <p><mark>As a kid I dreamt of
                being an architect</mark>—teachers would take polaroids of the many designs of wood block structures I built
                in preschool. That career interest went away, but has <mark>resurfaced in the appreciation
                    for design of digital experiences.</mark> <br /><br />One of my favorite things to do is <mark>ask for feedback</mark> on
                my projects, like when my uncle said a (finished) version of this site was "bland". He was right! <mark>And I'm working to make it less bland.</mark>
                <br /><br /> Beyond that, I love to ride and travel on my motorcycle, sweat in the gym,
                and spend time behind the bar providing others with a good time.
                </p>,
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
    
    function handleMouseEnter(key) {
        qaList[key].hidden = true;
        handleClick(key);
    }
    
    // dynamic question & answer list
    const displayedQAList = qaList.map((qAndA, i) => {
        return (
            <div>
                {/* the question; clicked to show collapsable answer */}
                <button
                    key={i}
                    onClick={() => handleClick(i)}
                    onKeyDown={() => handleClick(i)}
                    onMouseEnter={() => handleMouseEnter(i)}
                >
                    <h3>
                        <span className={qaList[i].hidden ? '' : 'rotate'}>&gt; </span>
                        {qAndA.question}
                    </h3>
                </button>
                
                {/* ~~collapses~~ */}
                <div
                    key={i}
                    className={qaList[i].hidden ? 'hide-answer' : 'show-answer'}>
                    {/* short answer */}
                    <h4>{qAndA.answer}</h4>
                    {/* extended answer */}
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