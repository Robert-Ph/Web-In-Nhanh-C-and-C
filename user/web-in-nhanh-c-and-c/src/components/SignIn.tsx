import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SigninSchema = Yup.object().shape({
    email: Yup.string()
        .email("Email không hợp lệ")
        .required("Vui lòng nhập Email của bạn"),
    password: Yup.string()
        .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
        .required("Vui lòng nhập mật khẩu của bạn"),
});

const SignIn = () => {

    const signin = () => { };

    return (
        <>
            <div className="sing-up_container">
                <div className="max-w-md mx-auto my-8">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Sign In</h2>

                    <div>
                        <Formik
                            initialValues={{
                                email: "",
                                password: "",
                            }}
                            validationSchema={SigninSchema}
                            onSubmit={signin}
                        >
                            {({ isValid, isSubmitting, errors, touched }) => (
                                <Form>
                                    <div>
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
                                        <p className="text-right text-gray-500">
                                            Forgot password ?
                                        </p>
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-green-700 text-white px-4 py-2 rounded block w-32 mx-auto mt-4"
                                        disabled={!isValid || isSubmitting}
                                    >
                                        Sign In
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>

                    <div className="text-center separator mt-4">
                        Or
                    </div>
                    <div className="login-with-google mt-4 w-64 mx-auto">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded block w-full">
                            Sign In with Google
                        </button>
                    </div>
                    <div className="have-account mt-4 text-center">
                        <a href="/SignIn" className="text-blue-500">
                            Sign Up ?
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
