import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const ForgotPassword = Yup.object().shape({
  code: Yup.string().required("Vui lòng nhập mã xác nhận được gửi về email"),
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
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-medium">Email đã đăng ký:</label>
                  <Field
                    id="email"
                    type="email"
                    name="email"
                    className={`bg-gray-100 w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 ${errors.email && touched.email ? "border-red-500" : ""} transition-colors duration-300`}
                  />
                  <div className="h-5">
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-yellow-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors duration-300 block mx-auto mt-8"
                  disabled={!isValid || isSubmitting}
                >
                  Tiếp tục
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
                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-700 text-sm font-medium">Mã xác nhận:</label>
                  <Field
                    id="code"
                    type="text"
                    name="code"
                    className={`bg-gray-100 w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 ${errors.code && touched.code ? "border-red-500" : ""} transition-colors duration-300`}
                  />
                  <div className="h-5">
                    <ErrorMessage name="code" component="div" className="text-red-500 text-sm" />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-700 text-sm font-medium">Mật khẩu:</label>
                  <Field
                    id="password"
                    type="password"
                    name="password"
                    className={`bg-gray-100 w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 ${errors.password && touched.password ? "border-red-500" : ""} transition-colors duration-300`}
                  />
                  <div className="h-5">
                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-yellow-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors duration-300 block mx-auto mt-8"
                  disabled={!isValid || isSubmitting}
                >
                  Đặt lại mật khẩu
                </button>
                <button
                  type="button"
                  className="bg-yellow-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors duration-300 block mx-auto mt-8"
                  onClick={existsEmail}
                >
                  Quay lại
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
      <div className="bg-[url('background.jpg')] bg-cover bg-center h-screen w-full flex items-center justify-center">
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
          <a href="/home">
            <img src="logo.png" alt="Logo" className="w-24 h-auto mx-auto cursor-pointer" />
          </a>
        </div>
        <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg max-w-md w-full mx-auto my-8">
          <h2 className="text-3xl font-semibold text-black-800 mb-4 text-center">Đặt lại mật khẩu</h2>
          {showCheckEmail ? <FormCheckEmail /> : <FormResetPassword />}
        </div>
      </div>
    </>
  );
};

export default ForgotPass;
