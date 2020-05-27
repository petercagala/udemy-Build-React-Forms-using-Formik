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
        >
            {
                ({ handleSubmit,
                     handleChange,
                     values }) => (
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
                     </form>
                )
            }
        </Formik>
    );
}

export default SimpleForm;