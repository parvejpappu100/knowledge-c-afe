import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight , faEquals } from '@fortawesome/free-solid-svg-icons'

const Question = () => {
    return (
        <div className='lg:container mx-auto my-7'>
            {/* first question */}
            <section className='bg-gray-200 p-4 rounded-3 my-3 rounded-3xl mx-2'>
                <h2 className='my-3 text-3xl font-semibold'> <FontAwesomeIcon icon={faArrowAltCircleRight} /> What is the difference between props and state?</h2>
                <p><FontAwesomeIcon icon={faEquals} /> <strong>Props :</strong> Props (short for "properties") are used to pass data from a parent component to a child component. They are read-only and cannot be modified by the child component. The parent component owns and controls the data, and passes it down to the child component as a prop.</p>
                <p><FontAwesomeIcon icon={faEquals} /> <strong>State :</strong> State is used to manage data within a component. It is owned and controlled by the component itself, and can be modified using the setState method. When the state of a component changes, React will automatically re-render the component.</p>
            </section>
            {/* Second Question */}
            <section className='bg-gray-200 p-4 rounded-3 my-3 rounded-3xl mx-2'>
                <h2 className='my-3 text-3xl font-semibold'> <FontAwesomeIcon icon={faArrowAltCircleRight} /> What does useEffect do other than load data?</h2>
                <p><FontAwesomeIcon icon={faEquals} /> <strong>Updating the document title:</strong> We can use the useEffect hook to update the document title based on the state of our component.</p>
                <p><FontAwesomeIcon icon={faEquals} /> <strong>Handling Events :</strong> We can use useEffect to attach event listeners to the document or window. </p>
                <p><FontAwesomeIcon icon={faEquals} /> <strong>Animations and transitions:</strong> We can use useEffect to trigger animations or transitions based on the state of our component.</p>
            </section>
            {/* Third Question */}
            <section className='bg-gray-200 p-4 rounded-3 my-3 rounded-3xl mx-2'>
                <h2 className='my-3 text-3xl font-semibold'> <FontAwesomeIcon icon={faArrowAltCircleRight} /> How does useState work?</h2>
                <p><FontAwesomeIcon icon={faEquals} /> <strong>useState :</strong> useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
            </section>
            {/* Fourth Question */}
            <section className='bg-gray-200 p-4 rounded-3 my-3 rounded-3xl mx-2'>
                <h2 className='my-3 text-3xl font-semibold'> <FontAwesomeIcon icon={faArrowAltCircleRight} /> How does react work?</h2>
                <p><FontAwesomeIcon icon={faEquals} /> <strong>React :</strong> ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </section>
        </div>
    );
};

export default Question;