import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const ForgotPassword = Yup.object().shape({
  code: Yup.string().required("Vui lòng nhập tên của bạn"),
  password: Yup.string()
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
    .required("Vui lòng nhập mật khẩu của bạn"),
});

const EmailSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập Email của bạn"),
});

const ForgotPass = () => {
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
                  <label className="block">Your Email:</label>
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

  const FormResetPassword = () => {
    return (
      <>
        <div className="card-body">
          <Formik
            initialValues={{
              code: "",
              password: "",
            }}
            validationSchema={ForgotPassword}
            onSubmit={createAccount}
          >
            {({ isValid, isSubmitting, errors, touched }) => (
              <Form>
                <div>
                  <label className="block">Code:</label>
                  <Field
                    type="text"
                    name="code"
                    className={`bg-gray-100 w-full border-2 border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500 ${errors.code && touched.code ? "border-red-500" : ""
                      }`}
                  />
                  <ErrorMessage
                    name="code"
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
                  className="bg-green-700 text-white px-4 py-2 rounded block mx-auto mt-4"
                  disabled={!isValid || isSubmitting}
                >
                  Reset Password
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
            <h2 className="text-2xl font-semibold mb-4 text-center">Reset Password</h2>
            {showCheckEmail ? <FormCheckEmail /> : <FormResetPassword />}
          </div>
        </div>
    </>
  );
};

export default ForgotPass;
