import BlogCard from "./BlogCard.tsx";

const data = [
    {
        img: "/post__1.webp",
        title: "Thực phẩm lành mạnh Cuộc sống lành mạnh",
        date: "Aug 27, 2023",
        comment: 8,
    },
    {
        img: "/post__2.webp",
        title: "Thực phẩm lành mạnh Cuộc sống lành mạnh",
        date: "Aug 25, 2023",
        comment: 1,
    },
    {
        img: "/post__3.webp",
        title: "Thực phẩm lành mạnh Cuộc sống lành mạnh",
        date: "Aug 30, 2023",
        comment: 6,
    },
];

const BlogSection = () => {
    return (
        <div className="container pt-16">
            <h2 className="font-bold text-2xl">Tin mới nhất</h2>
            <p className="text-gray-500">
                Trình bày bài viết theo cách tốt nhất để làm nổi bật những khoảnh khắc thú vị trong blog của bạn.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
                {data.map((el) => (
                    <BlogCard
                        key={el.date}
                        img={el.img}
                        title={el.title}
                        date={el.date}
                        comment={el.comment}
                    />
                ))}
            </div>
        </div>
    );
};

export default BlogSection;
