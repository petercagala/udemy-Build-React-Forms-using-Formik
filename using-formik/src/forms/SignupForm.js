import React from 'react';

const signupForm = () => {
    return (
        <form className={"p-5"}>
            <h1>
                Sign up Form
            </h1>
            <div className={"form-group"}>
                <label>User Name</label>
                <input
                    name={"userName"}
                    type={"text"}
                    placeholder={"Enter Username"}
                    className={"form-control"}
                />
            </div>
            <div className={"form-group"}>
                <label>Email:</label>
                <input
                    name={"email"}
                    type={"email"}
                    placeholder={"Enter your email"}
                    className={"form-control"}
                />
            </div>
            <span className={"pr-1"}>
                <button className={"btn btn-secondary"}>Reset</button>
            </span>
            <span className={"pr-1"}>
                <button type={"submit"} className={"btn btn-primary"}>Submit</button>
            </span>
        </form>
    );
};

export default signupForm;