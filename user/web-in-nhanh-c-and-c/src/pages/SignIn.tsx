import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SigninSchema = Yup.object().shape({
    phoneNumber: Yup.string()
        .matches(/^[0-9]+$/, "Số điện thoại phải là số")
        .min(10, "Số điện thoại không hợp lệ")
        .max(11, "Số điện thoại không hợp lệ")
        .required("Vui lòng nhập số điện thoại của bạn"),
    password: Yup.string()
        .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
        .required("Vui lòng nhập mật khẩu của bạn"),
});

const SignIn = () => {

    const signin = () => { };

    return (
        <>
            <div className="bg-[url('background.jpg')] bg-cover bg-center h-screen w-full flex items-center justify-center">
                <div className="absolute top-10 left-20 transform -translate-x-1/2">
                    <a href="/home">
                        <img src="logo.png" alt="Logo" className="w-24 h-auto mx-auto cursor-pointer" />
                    </a>
                </div>
                <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg max-w-md w-full mx-auto my-8">
                    <h2 className="text-3xl font-semibold text-black-800 mb-4 text-center">Đăng Nhập</h2>

                    <div>
                        <Formik
                            initialValues={{
                                phoneNumber: "",
                                password: "",
                            }}
                            validationSchema={SigninSchema}
                            onSubmit={signin}
                        >
                            {({ isValid, isSubmitting, errors, touched }) => (
                                <Form>
                                    <div className="mb-4">
                                        <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-medium">Số điện thoại:</label>
                                        <Field
                                            id="phoneNumber"
                                            type="text"
                                            name="phoneNumber"
                                            className={`bg-gray-100 w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 ${errors.phoneNumber && touched.phoneNumber ? "border-red-500" : ""} transition-colors duration-300`}
                                        />
                                        <div className="h-5">
                                            <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm" />
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

                                            <div className="text-right mt-2 po">
                                                <a href="/forgotpass" className="text-gray-600 hover:text-black">
                                                    Quên mật khẩu ?
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-yellow-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors duration-300 block mx-auto mt-8"
                                        disabled={!isValid || isSubmitting}
                                    >
                                        Đăng nhập
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>

                    <div className="text-center separator mt-4">
                        Hoặc
                    </div>
                    <div className="login-with-google mt-4 w-64 mx-auto">
                        <button
                            className="flex items-center justify-center bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 w-full py-2 px-4"
                        // onClick={handleGoogleSignIn}
                        >
                            <img
                                src="https://developers.google.com/identity/images/g-logo.png"
                                alt="Google Logo"
                                className="w-6 h-6 mr-3"
                            />
                            <span className="text-gray-800 font-semibold">Đăng nhập với Google</span>
                        </button>
                    </div>
                    <div className="have-account mt-4 text-center">
                        <a href="/Signup" className="text-gray-600 hover:text-black">
                            Đăng ký ?
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
