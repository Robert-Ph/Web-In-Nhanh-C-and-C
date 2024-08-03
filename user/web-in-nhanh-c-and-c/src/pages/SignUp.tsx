import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Vui lòng nhập tên của bạn"),
  password: Yup.string()
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
    .required("Vui lòng nhập mật khẩu của bạn"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Số điện thoại phải là số")
    .min(10, "Số điện thoại không hợp lệ")
    .required("Vui lòng nhập số điện thoại của bạn"),
});

const EmailSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập Email của bạn"),
});

const SignUp = () => {
  const [showCheckEmail, setShowCheckEmail] = useState<boolean>(true);
  const [email, setEmail] = useState<string | undefined>();

  const existsEmail = () => {
    setShowCheckEmail(!showCheckEmail);
  };

  const createAccount = () => { };

  const FormCheckEmail = () => {
    return (
      <>
        <div className="card-body">
          <Formik
            initialValues={{ email: email }}
            validationSchema={EmailSchema}
            onSubmit={existsEmail}
          >
            {({ isValid, isSubmitting, errors, touched }) => (
              <Form>
                <div className="form-group">
                  <label className="block">Email Address:</label>
                  <Field
                    type="email"
                    name="email"
                    className={`bg-gray-100 w-full border-2 border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500 ${errors.email && touched.email ? "border-red-500" : ""
                      }`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded block mx-auto mt-4"
                  disabled={!isValid || isSubmitting}
                >
                  Continue
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </>
    );
  };

  const FormCreateAccount = () => {
    return (
      <>
        <div className="card-body">
          <Formik
            initialValues={{
              name: "",
              password: "",
              phoneNumber: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={createAccount}
          >
            {({ isValid, isSubmitting, errors, touched }) => (
              <Form>
                <div>
                  <label className="block">Full Name:</label>
                  <Field
                    type="text"
                    name="name"
                    className={`bg-gray-100 w-full border-2 border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500 ${errors.name && touched.name ? "border-red-500" : ""
                      }`}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div>
                  <label className="block">Phone Number:</label>
                  <Field
                    type="text"
                    name="phoneNumber"
                    className={`bg-gray-100 w-full border-2 border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500 ${errors.phoneNumber && touched.phoneNumber
                      ? "border-red-500"
                      : ""
                      }`}
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div>
                  <label className="block">Password:</label>
                  <Field
                    type="password"
                    name="password"
                    className={`bg-gray-100 w-full border-2 border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500 ${errors.password && touched.password ? "border-red-500" : ""
                      }`}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-green-700 text-white px-4 py-2 rounded block w-32 mx-auto mt-4"
                  disabled={!isValid || isSubmitting}
                >
                  Sign Up
                </button>
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded block mt-4"
                  onClick={existsEmail}
                >
                  Back
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </>
    );
  };

  return (
    <>
        <div className="sing-up_container">
          <div className="max-w-md mx-auto my-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
            {showCheckEmail ? <FormCheckEmail /> : <FormCreateAccount />}
            <div className="text-center separator mt-4">
              Or
            </div>
            <div className="login-with-google mt-4 w-64 mx-auto">
              <button className="bg-blue-500 text-white px-4 py-2 rounded block w-full">
               Sign Up with Google
              </button>
            </div>
            <div className="have-account mt-4 text-center">
                <a href="/SignIn" className="text-blue-500">
                  Sign In ?
                </a>
            </div>
          </div>
        </div>
    </>
  );
};

export default SignUp;
