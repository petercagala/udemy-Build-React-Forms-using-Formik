import React from 'react';
import {Formik, ErrorMessage} from 'formik';

const SimpleForm = () => {

    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
            }}
            onSubmit={(values, {setSubmitting}) => {

                // simulating the server
                setTimeout(() => {
                    // alert(values);
                        console.log("form values");
                        console.log(values);
                    setSubmitting(false);
                },
                    1000);
            }
            }
            validate={validationFunction}
            render={({
                         handleSubmit,
                         handleChange,
                         values,
                         errors,
                         handleBlur, // s touto funkciou sa vyhodnoti napr. validate,
                         // aj ked do pola nic nenapises, len z neho odides
                         touched,
                         isSubmitting,
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

                    {
                        // Krasne nastavime v onSubmit: setSubmitting, ci sa ma pocas volania nejakeho requestu
                        // dalej zobrazovat button
                    }
                    <button disabled={isSubmitting}>Submit</button>

                    <br/>
                    <ErrorMessage name={"firstName"}/>
                    <br/>
                    <ErrorMessage name={"lastName"}/>
                </form>
            )}
        />
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