import React from 'react';
import DropList from './DropList';
import {withFormik, ErrorMessage, Field, Form} from 'formik';
import * as Yup from 'yup';
import Error from './Error';

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
        validationSchema: Yup.object().shape({
            userName: Yup.string().required('Please, enter a user name'),
            email: Yup.string()
                .email('Please, enter a valid email-adress')
                .required('Please, enter your email'),
            topics: Yup.array()
                .min(3, 'Please, select minimal 3 items')
                .of(Yup.object().shape({
                    value: Yup.string().required(),
                    label: Yup.string().required(),
                })),

        }),
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
        // handleChange,
        // handleBlur,
        setFieldValue,
        setFieldTouched,
        // handleSubmit,
        handleReset,
        isSubmitting,
        dirty, // the current values are diffrent from the initial values
    } = props;

    return (
        <Form
            className={"p-5"}
            // onSubmit={handleSubmit} pri zmene <form> na <Form> z formiku mozeme toto vyhodit
        >
            <h1>
                Sign up Form
            </h1>
            <div className={"form-group"}>
                <label>User Name</label>
                <Field
                    name={"userName"}
                    type={"text"}
                    // value={values.userName}
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    placeholder={"Enter Username"}
                    className={"form-control"}
                />
                <ErrorMessage
                    component={Error}
                    name={"userName"}
                />
            </div>
            <div className={"form-group"}>
                <label>Email:</label>
                <Field
                    name={"email"}
                    type={"email"}
                    // value={values.email}
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    placeholder={"Enter your email"}
                    className={"form-control"}
                />
                <ErrorMessage
                    component={Error}
                    name={"email"}
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
                <ErrorMessage
                    component={Error}
                    name={"topics"}
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
        </Form>
    );
};

const SignupForm = formikWraper(_SignupForm);
export default SignupForm;