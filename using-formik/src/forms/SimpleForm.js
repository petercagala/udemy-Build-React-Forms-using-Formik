import React from 'react';
import { Formik} from 'formik';

const SimpleForm = () => {

    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "Cagalova",
            }}
            onSubmit={(values) => {
                console.log("form values");
                console.log(values);
                }
            }
            validate={validationFunction}
        >
            {
                ({ handleSubmit,
                     handleChange,
                     values,
                     errors}) => (
                     <form onSubmit={handleSubmit}>
                         <input
                             type={"text"}
                             name={"firstName"}
                             onChange={handleChange}
                             value={values.firstName}
                             placeholder={"Enter your firstName"}
                         />
                         <input
                             type={"text"}
                             name={"lastName"}
                             onChange={handleChange}
                             value={values.lastName}
                             placeholder={"Enter your lastName"}
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

    let errorsObject = {

    };

    if(!values.firstName) {
        errorsObject.firstName = "Please, enter firstName";
    }

    if(!values.lastName) {
        errorsObject.lastName = "Please, enter lastName";
    }

    return errorsObject;
}

export default SimpleForm;