import React from 'react';
import ReactToPdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
    
    return (
        <div className='w-5/6 mx-auto my-10 text-center h-[80vh]'>
            <ReactToPdf targetRef={ref} filename="Blog.pdf">
                {({ toPdf }) => (
                    <button className="btn btn-primary my-5" onClick={toPdf}>Download pdf</button>
                )}
            </ReactToPdf>
            <div ref={ref}>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Differences between uncontrolled and controlled components.
                    </div>
                    <div className="collapse-content">
                        <p>Uncontrolled components manage their own state, while controlled components rely on a parent component to manage their state. Uncontrolled components are simpler but offer less control, while controlled components are more complex but offer more control and consistency.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How to validate React props using PropTypes
                    </div>
                    <div className="collapse-content">
                        <p>React PropTypes is a validation library that allows you to define the type and shape of props passed to a component. Here are the steps to validate React props using PropTypes: <br />

                            1. Import the PropTypes library from the 'prop-types' package. <br />
                            2. Declare the PropTypes object as a static property of the component class. <br />
                            3. Define the type and shape of the props using the available PropTypes validators, such as string, number, array, object, etc. <br />
                            4. Pass the props to the component, and PropTypes will validate them according to the defined validators.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Difference between nodejs and express js.
                    </div>
                    <div className="collapse-content">
                        <p>Node.js is a runtime environment for running JavaScript on the server, while Express.js is a web framework built on top of Node.js for building web applications. Node.js provides low-level modules, while Express.js provides a higher-level API for building web applications and APIs.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is a custom hook, and why will you create a custom hook?
                    </div>
                    <div className="collapse-content">
                        <p>A custom hook in React is a reusable function that allows you to share stateful logic between components. You would create a custom hook when you need to share logic that manages state, side effects, or any other behavior across multiple components. Custom hooks can abstract complex logic and make code reuse easier and more efficient. For example, you could create a custom hook that handles data fetching logic and returns data and a loading state that can be shared by multiple components.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;