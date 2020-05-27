import React from 'react';
import {Formik} from 'formik';

const SimpleForm = () => {

    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
            }}
            onSubmit={(values) => {
                console.log("form values");
                console.log(values);
            }
            }
            validate={validationFunction}
        >
            {
                ({
                     handleSubmit,
                     handleChange,
                     values,
                     errors,
                     handleBlur, // s touto funkciou sa vyhodnoti napr. validate,
                     // aj ked do pola nic nenapises, len z neho odides
                     touched
                 }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type={"text"}
                            name={"firstName"}
                            onChange={handleChange}
                            value={values.firstName}
                            placeholder={"Enter your firstName"}
                            onBlur={handleBlur}
                        />
                        <input
                            type={"text"}
                            name={"lastName"}
                            onChange={handleChange}
                            value={values.lastName}
                            placeholder={"Enter your lastName"}
                            onBlur={handleBlur}
                        />

                        <button>Submit</button>

                        {
                            errors.firstName && (
                                <div style={{color: 'red'}}>
                                    {errors.firstName}
                                </div>
                            )
                        }
                        {
                            errors.lastName && (
                                <div style={{color: 'blue'}}>
                                    {errors.lastName}
                                </div>
                            )
                        }
                    </form>
                )
            }
        </Formik>
    );
}

const validationFunction = (values) => {
    console.log("cagalpte validationFunction");
    console.log(values);

    let errorsObject = {};

    if (!values.firstName) {
        errorsObject.firstName = "Please, enter firstName";
    }

    if (!values.lastName) {
        errorsObject.lastName = "Please, enter lastName";
    }

    return errorsObject;
}

export default SimpleForm;