import { useState } from "react";
// import axios from "axios";
import { Link, Route, Routes } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import OrderHistory from "./OrderHistory";
import ProductList from "./ProductList";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   deleteToken,
//   deleteUserInfo,
//   saveAvatarUrl,
//   saveUserName,
// } from "../js/redux/actions";
// import Orders from "./Orders";
// import LikedProducts from "./LikedProducts";
// import { hasPermissionAdmin } from "../js/utility/permissions";

const UpdateProfileSchema = Yup.object().shape({
    email: Yup.string()
        .email("Vui lòng nhập đúng định dạng email")
        .required("Vui lòng không để trống"),
    name: Yup.string().required("Vui lòng không để trống"),
    phoneNumber: Yup.string()
        .matches(/^[0-9]+$/, "Số điện thoại phải là số")
        .min(10, "Số điện thoại không hợp lệ")
        .max(12, "Số điện thoại không hợp lệ")
        .required("Vui lòng nhập số điện thoại của bạn"),
    gender: Yup.string().nullable(),
    birthday: Yup.date().nullable(),
});

const Profile = () => {
    //   const token = useSelector((state) => state.token);
    //   const avatarUrl = useSelector((state) => state.avatarUrl);
    //   const userName = useSelector((state) => state.userName);

    //   const [isAdmin, setIsAdmin] = useState(false);
    //   const [accountInfor, setAccountInfor] = useState();
    const [isEditing, setIsEditing] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [nUrl, setNUrl] = useState(
        // process.env.REACT_APP_HOST_API_URL + "images/avatar?imgPath=" + avatarUrl
    );

    //   const navigate = useNavigate();
    //   const dispatch = useDispatch();

    //   useEffect(() => {
    //     if (token) {
    //       axios
    //         .get(`${process.env.REACT_APP_HOST_API_URL}user/myprofile`, {
    //           headers: { Authorization: `Bearer ${token}` },
    //         })
    //         .then((response) => {
    //           setAccountInfor(response.data);
    //         })
    //         .catch((error) => {
    //           console.log("Lỗi khi load profile: ", error);
    //         });

    //       setIsAdmin(hasPermissionAdmin(token));
    //     } else {
    //       if (
    //         window.confirm("You need to log in to continue, do you want to log in?")
    //       ) {
    //         navigate("/SignIn");
    //       } else {
    //         navigate("/");
    //       }
    //     }
    //   }, [token]);

    const updateProfile = async (values) => {
        // try {
        //   handleUpload();
        //   const response = await axios.post(
        //     `${process.env.REACT_APP_HOST_API_URL}user/updateMyInfo`,
        //     values,
        //     { headers: { Authorization: `Bearer ${token}` } }
        //   );
        //   setIsEditing(false);
        //   dispatch(saveUserName(response.data.name));
        //   setAccountInfor(response.data);
        // } catch (error) {
        //   console.error("Lỗi khi cập nhật profile: ", error);
        // }
    };

    //   const logOut = () => {
    //     dispatch(deleteToken());
    //     dispatch(deleteUserInfo());
    //     navigate("/");
    //   };

    //   const renderImageProfile = () => {
    //     if (userName && avatarUrl) {
    //       return (
    //         <div className="flex flex-col items-center mb-5">
    //           <div className="w-24 h-24 overflow-hidden rounded-full">
    //             <img
    //               className="w-full h-auto"
    //               src={
    //                 process.env.REACT_APP_HOST_API_URL +
    //                 "images/avatar?imgPath=" +
    //                 avatarUrl
    //               }
    //               alt="No image"
    //             />
    //           </div>
    //           <p className="mt-2 text-lg font-bold">{userName}</p>
    //         </div>
    //       );
    //     }
    //   };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        const reader = new FileReader();
        reader.onload = () => {
            setNUrl(reader.result);
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    //   const handleUpload = async () => {
    //     if (!selectedFile) {
    //       return;
    //     }

    //     const formData = new FormData();
    //     formData.append("avatar", selectedFile);
    //     try {
    //       const response = await axios.post(
    //         `${process.env.REACT_APP_HOST_API_URL}images/loadavatar`,
    //         formData,
    //         { headers: { Authorization: `Bearer ${token}` } }
    //       );
    //       dispatch(saveAvatarUrl(response.data.avatarUrl));
    //       setNUrl(
    //         `${process.env.REACT_APP_HOST_API_URL}images/avatar?imgPath=${response.data.avatarUrl}`
    //       );
    //     } catch (error) {
    //       console.error("Lỗi khi tải lên ảnh:", error);
    //       alert("Đã xảy ra lỗi khi tải lên ảnh");
    //     }
    //   };

    const renderInfoForm = () => {
        // if (accountInfor) {
        return (
            <div className="bg-white p-5 rounded-lg">
                <Formik
                    initialValues={{
                        // name: accountInfor.name,
                        // email: accountInfor.email,
                        // phoneNumber: accountInfor.phone,
                        // gender: accountInfor.gender,
                        // birthday: accountInfor.birthday,
                        name: "Lê Đặng Xuân Bách",
                        email: "ledangxuanback@gmail.com",
                        phoneNumber: "0969214244",
                        gender: "made",
                        birthday: "18-07-2002",
                    }}
                    validationSchema={UpdateProfileSchema}
                    onSubmit={updateProfile}
                >
                    {({
                        isValid,
                        isSubmitting,
                        setFieldValue,
                        errors,
                        touched,
                        resetForm,
                    }) => (
                        <Form>
                            <div className="grid grid-cols-3 gap-6">
                                <div className="col-span-2">
                                    <div className=" grid grid-cols-2 gap-16">
                                        <div className="col-span-1">
                                            <div className="mb-6">
                                                <label className="block text-gray-700 font-medium">Địa chỉ Email:</label>
                                                <Field
                                                    name="email"
                                                    type="email"
                                                    disabled={!isEditing}
                                                    className={`w-full mt-1 p-2 border rounded-lg ${errors.email && touched.email ? "border-red-500" : "border-gray-300"}`}
                                                />
                                                <ErrorMessage
                                                    name="email"
                                                    component="div"
                                                    className="text-red-500 text-sm mt-1"
                                                />
                                            </div>
                                            <div className="mb-6">
                                                <label className="block text-gray-700 font-medium">Họ và Tên:</label>
                                                <Field
                                                    name="name"
                                                    type="text"
                                                    disabled={!isEditing}
                                                    className={`w-full mt-1 p-2 border rounded-lg ${errors.name && touched.name ? "border-red-500" : "border-gray-300"}`}
                                                />
                                                <ErrorMessage
                                                    name="name"
                                                    component="div"
                                                    className="text-red-500 text-sm mt-1"
                                                />
                                            </div>
                                            <div className="mb-6">
                                                <label className="block text-gray-700 font-medium">Số điện thoại:</label>
                                                <Field
                                                    name="phoneNumber"
                                                    type="text"
                                                    disabled={!isEditing}
                                                    className={`w-full mt-1 p-2 border rounded-lg ${errors.phoneNumber && touched.phoneNumber ? "border-red-500" : "border-gray-300"}`}
                                                />
                                                <ErrorMessage
                                                    name="phoneNumber"
                                                    component="div"
                                                    className="text-red-500 text-sm mt-1"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-1">
                                            <div className="mb-6">
                                                <label className="block text-gray-700 font-medium">Giới tính:</label>
                                                <div className="flex space-x-6 mt-1">
                                                    <label className="flex items-center">
                                                        <Field
                                                            name="gender"
                                                            type="radio"
                                                            value="male"
                                                            disabled={!isEditing}
                                                            className={`form-radio text-blue-600 ${errors.gender && touched.gender ? "border-red-500" : ""}`}
                                                        />
                                                        <span className="ml-2 text-gray-700">Nam</span>
                                                    </label>
                                                    <label className="flex items-center">
                                                        <Field
                                                            name="gender"
                                                            type="radio"
                                                            value="female"
                                                            disabled={!isEditing}
                                                            className={`form-radio text-blue-600 ${errors.gender && touched.gender ? "border-red-500" : ""}`}
                                                        />
                                                        <span className="ml-2 text-gray-700">Nữ</span>
                                                    </label>
                                                    <label className="flex items-center">
                                                        <Field
                                                            name="gender"
                                                            type="radio"
                                                            value="other"
                                                            disabled={!isEditing}
                                                            className={`form-radio text-blue-600 ${errors.gender && touched.gender ? "border-red-500" : ""}`}
                                                        />
                                                        <span className="ml-2 text-gray-700">Khác</span>
                                                    </label>
                                                </div>
                                                <ErrorMessage
                                                    name="gender"
                                                    component="div"
                                                    className="text-red-500 text-sm mt-1"
                                                />
                                            </div>
                                            <div className="mb-6">
                                                <label className="block text-gray-700 font-medium">Ngày sinh:</label>
                                                <Field
                                                    name="birthday"
                                                    type="date"
                                                    disabled={!isEditing}
                                                    className={`mt-1 p-2 border rounded-lg ${errors.birthday && touched.birthday ? "border-red-500" : "border-gray-300"}`}
                                                />
                                                <ErrorMessage
                                                    name="birthday"
                                                    component="div"
                                                    className="text-red-500 text-sm mt-1"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex space-x-4 mt-4">
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                                            disabled={!isValid || isSubmitting || !isEditing}
                                        >
                                            Lưu thay đổi
                                        </button>
                                        <button
                                            type="button"
                                            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50"
                                            disabled={!isEditing}
                                            onClick={() => {
                                                setIsEditing(false);
                                                resetForm();
                                            }}
                                        >
                                            Hủy
                                        </button>
                                        <button
                                            type="button"
                                            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                                            onClick={() => {
                                                setIsEditing(true);
                                            }}
                                        >
                                            Chỉnh sửa
                                        </button>
                                    </div>
                                </div>
                                <div className="col-span-1 flex items-center justify-center">
                                    <div className="flex flex-col items-center">
                                        <div className="w-80 h-80 mb-4 overflow-hidden rounded-full bg-gray-200 flex items-center justify-center border-4 border-gray-500">
                                            <img className="w-full h-full object-cover" src={nUrl} alt="Avatar" />
                                        </div>
                                        <label className="relative cursor-pointer inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
                                            Chọn ảnh
                                            <input
                                                type="file"
                                                className="absolute inset-0 opacity-0 cursor-pointer"
                                                onChange={handleFileChange}
                                                accept=".jpg, .png"
                                                disabled={!isEditing}
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        );
        // }
    };

    return (
        <div className="bg-gray-100">
            <div className="container mx-auto py-8 max-w-screen-2xl">
                <div className="flex space-x-8">
                    <div className="w-1/6 h-full p-6 bg-white rounded-lg shadow-lg">
                        <div className="space-y-4">
                            <Link to="/profile" className="block p-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition duration-300">
                                Hồ sơ của tôi
                            </Link>
                            <Link to="/products" className="block p-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition duration-300">
                                Sản phẩm đã thích
                            </Link>
                            <Link to="/order-history" className="block p-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition duration-300">
                                Đơn hàng
                            </Link>
                            <Link to="/ChangePassword" className="block p-3 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition duration-300">
                                Đổi mật khẩu
                            </Link>
                            <button className="w-full text-left p-3 rounded-lg text-red-600 hover:bg-red-50 transition duration-300">
                                Đăng xuất
                            </button>
                        </div>
                    </div>
                    <div className="w-5/6 p-6 bg-white rounded-lg shadow-lg">
                        {renderInfoForm()}
                        {/* <Routes>
                    <Route path="/" element={renderInfoForm()} />
                    <Route path="/Orders" element={<OrderHistory />} />
                    <Route path="/LikedProducts" element={<ProductList />} />
                </Routes> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
