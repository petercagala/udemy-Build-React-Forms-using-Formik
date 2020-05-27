import React from 'react';
import DropList from './DropList';
import {withFormik} from 'formik';

const formikWraper = withFormik({
        mapPropsToValues: () => (
            {
                userName: '',
                email: '',
                topics: []
            }
        ),
    }
);

const options = [
    {
        value: "Art",
        label: "Art",
    },
    {
        value: "Sport",
        label: "Sport",
    },
    {
        value: "Technology",
        label: "Technology",
    },
    {
        value: "Machine learning",
        label: "Machine learning",
    },
    {
        value: "Science",
        label: "Science",
    },
];

const _SignupForm = (props) => {

    const {
        values,
        handleChange,
        handleBlur,
        setFieldValue,
        setFieldTouched,
    } = props;

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
                    value={values.userName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={"Enter Username"}
                    className={"form-control"}
                />
            </div>
            <div className={"form-group"}>
                <label>Email:</label>
                <input
                    name={"email"}
                    type={"email"}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={"Enter your email"}
                    className={"form-control"}
                />
            </div>

            <div className={"form-group"}>
                <label>Favourite topics</label>
                <DropList
                    value={values.topics}
                    onChange={setFieldValue}
                    onBlur={setFieldTouched}
                    options={options}
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

const SignupForm = formikWraper(_SignupForm);
export default SignupForm;