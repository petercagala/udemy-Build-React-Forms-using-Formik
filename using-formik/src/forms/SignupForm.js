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
        handleSubmit: (values, {setSubmitting}) => {
            const payload = {
                ...values,
                topics: values.topics.map(t => t.value)
            };

            setTimeout(() => {
                    alert(JSON.stringify(payload, null, 2));

                    setSubmitting(false);
                },
                3000
            )
        },
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
        handleSubmit,
        handleReset,
        isSubmitting,
        dirty, // the current values are diffrent from the initial values
    } = props;

    return (
        <form className={"p-5"} onSubmit={handleSubmit}>
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
                <button
                    className={"btn btn-secondary"}
                    disabled={!dirty || isSubmitting}
                    onClick={handleReset}
                >
                    Reset
                </button>
            </span>
            <span className={"pr-1"}>
                <button
                    type={"submit"}
                    className={"btn btn-primary"}
                    disabled={isSubmitting}
                >
                    Submit
                </button>
            </span>
        </form>
    );
};

const SignupForm = formikWraper(_SignupForm);
export default SignupForm;