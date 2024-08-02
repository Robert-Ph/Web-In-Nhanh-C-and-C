// ui-admin/src/data.ts

export const accountsData = [
  { id: 1, name: "Phan Trường Thịnh", phone: "0368 757 921", category: "Root", role: 0 },
  { id: 2, name: "Nguyễn Văn A", phone: "0123 456 789", category: "User", role: 3 },
  { id: 3, name: "Trần Thị B", phone: "0987 654 321", category: "User", role: 3 },
  { id: 4, name: "Lê Văn C", phone: "0123 456 123", category: "Admin cấp cao", role: 1 },
  { id: 5, name: "Ngô Thị D", phone: "0987 654 987", category: "User", role: 3 },
  { id: 6, name: "Hoàng Văn E", phone: "0368 111 222", category: "User", role: 3 },
  { id: 7, name: "Đinh Thị F", phone: "0123 333 444", category: "Admin thường", role: 2 },
  { id: 8, name: "Vũ Văn G", phone: "0987 555 666", category: "User", role: 3 },
  { id: 9, name: "Nguyễn Thị H", phone: "0369 123 456", category: "User", role: 3 },
  { id: 10, name: "Trần Văn I", phone: "0370 987 654", category: "User", role: 3 },
  { id: 11, name: "Phạm Thị J", phone: "0371 654 321", category: "User", role: 3 },
  { id: 12, name: "Lê Văn K", phone: "0372 123 789", category: "User", role: 3 },
  { id: 13, name: "Ngô Thị L", phone: "0373 456 987", category: "User", role: 3 },
  { id: 14, name: "Hoàng Văn M", phone: "0374 789 123", category: "User", role: 3 },
  { id: 15, name: "Đinh Thị N", phone: "0375 987 456", category: "User", role: 3 },
  { id: 16, name: "Vũ Thị O", phone: "0376 123 654", category: "User", role: 3 },
  { id: 17, name: "Nguyễn Văn P", phone: "0377 456 321", category: "User", role: 3 },
  { id: 18, name: "Trần Thị Q", phone: "0378 789 654", category: "User", role: 3 },
  { id: 19, name: "Phạm Văn R", phone: "0379 321 987", category: "User", role: 3 },
  { id: 20, name: "Lê Thị S", phone: "0380 654 123", category: "User", role: 3 },
  { id: 21, name: "Nguyễn Văn T", phone: "0381 987 654", category: "User", role: 3 },
  { id: 22, name: "Trần Thị U", phone: "0382 123 456", category: "User", role: 3 },
  { id: 23, name: "Phạm Văn V", phone: "0383 654 789", category: "User", role: 3 },
  { id: 24, name: "Lê Thị W", phone: "0384 789 987", category: "User", role: 3 },
  { id: 25, name: "Nguyễn Văn X", phone: "0385 456 123", category: "User", role: 3 },
  { id: 26, name: "Trần Thị Y", phone: "0386 321 654", category: "User", role: 3 },
  { id: 27, name: "Phạm Văn Z", phone: "0387 987 321", category: "User", role: 3 },
];

export const orders = [
  {
    id: 1,
    customerId: 2,
    customer: "Nguyễn Văn A",
    email: "nguyen.a@example.com",
    phone: "0123 456 789",
    date: "2023-01-01",
    amount: "$123.45",
    status: "Shipped",
    products: [
      {
        id: 1,
        title: "Playstation 5 Digital Edition",
        img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
        price: "$250.99",
      },
      {
        id: 2,
        title: "Dell Laptop KR211822",
        img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
        price: "$499.99",
      },
    ],
  },
  {
    id: 2,
    customerId: 3,
    customer: "Trần Thị B",
    email: "tran.b@example.com",
    phone: "0987 654 321",
    date: "2023-01-02",
    amount: "$67.89",
    status: "Pending",
    products: [
      {
        id: 3,
        title: "Samsung TV 4K SmartTV",
        img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
        price: "$999.49",
      },
    ],
  },
  {
    id: 3,
    customerId: 5,
    customer: "Ngô Thị D",
    email: "ngo.d@example.com",
    phone: "0987 654 987",
    date: "2023-01-03",
    amount: "$45.67",
    status: "Delivered",
    products: [
      {
        id: 4,
        title: "Apple Iphone 14 Pro Max",
        img: "https://raylo.imgix.net/iphone-14-blue.png",
        price: "$799.49",
      },
    ],
  },
  {
    id: 4,
    customerId: 6,
    customer: "Hoàng Văn E",
    email: "hoang.e@example.com",
    phone: "0368 111 222",
    date: "2023-01-04",
    amount: "$89.99",
    status: "Cancelled",
    products: [
      {
        id: 5,
        title: "Philips Hue Play Gradient",
        img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
        price: "$39.99",
      },
    ],
  },
  {
    id: 5,
    customerId: 8,
    customer: "Vũ Văn G",
    email: "vu.g@example.com",
    phone: "0987 555 666",
    date: "2023-01-05",
    amount: "$56.78",
    status: "Shipped",
    products: [
      {
        id: 6,
        title: "Logitech MX Master 3",
        img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
        price: "$59.49",
      },
    ],
  },
  {
    id: 6,
    customerId: 9,
    customer: "Nguyễn Thị H",
    email: "nguyen.h@example.com",
    phone: "0369 123 456",
    date: "2023-01-06",
    amount: "$78.90",
    status: "Delivered",
    products: [
      {
        id: 7,
        title: "Rode Podcast Microphone",
        img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
        price: "$119.49",
      },
    ],
  },
  {
    id: 7,
    customerId: 10,
    customer: "Trần Văn I",
    email: "tran.i@example.com",
    phone: "0370 987 654",
    date: "2023-01-07",
    amount: "$102.34",
    status: "Pending",
    products: [
      {
        id: 8,
        title: "Toshiba Split AC 2",
        img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
        price: "$899.99",
      },
    ],
  },
  {
    id: 8,
    customerId: 12,
    customer: "Lê Văn K",
    email: "le.k@example.com",
    phone: "0372 123 789",
    date: "2023-01-08",
    amount: "$123.45",
    status: "Shipped",
    products: [
      {
        id: 9,
        title: "Sony Bravia KDL-47W805A",
        img: "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
        price: "$970.49",
      },
    ],
  },
  {
    id: 9,
    customerId: 14,
    customer: "Hoàng Văn M",
    email: "hoang.m@example.com",
    phone: "0374 789 123",
    date: "2023-01-09",
    amount: "$78.90",
    status: "Delivered",
    products: [
      {
        id: 10,
        title: "Acer Laptop 16 KL-4804",
        img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
        price: "$599.99",
      },
    ],
  },
  {
    id: 10,
    customerId: 15,
    customer: "Đinh Thị N",
    email: "dinh.n@example.com",
    phone: "0375 987 456",
    date: "2023-01-10",
    amount: "$89.99",
    status: "Cancelled",
    products: [
      {
        id: 11,
        title: "Logitech MX Master 3",
        img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
        price: "$59.49",
      },
    ],
  },
  {
    id: 11,
    customerId: 16,
    customer: "Vũ Thị O",
    email: "vu.o@example.com",
    phone: "0376 123 654",
    date: "2023-01-11",
    amount: "$56.78",
    status: "Shipped",
    products: [
      {
        id: 12,
        title: "Rode Podcast Microphone",
        img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
        price: "$119.49",
      },
    ],
  },
  {
    id: 12,
    customerId: 18,
    customer: "Trần Thị Q",
    email: "tran.q@example.com",
    phone: "0378 789 654",
    date: "2023-01-12",
    amount: "$102.34",
    status: "Pending",
    products: [
      {
        id: 13,
        title: "Sony Bravia KDL-47W805A",
        img: "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
        price: "$970.49",
      },
    ],
  },
  {
    id: 13,
    customerId: 20,
    customer: "Lê Thị S",
    email: "le.s@example.com",
    phone: "0380 654 123",
    date: "2023-01-13",
    amount: "$78.90",
    status: "Delivered",
    products: [
      {
        id: 14,
        title: "Acer Laptop 16 KL-4804",
        img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
        price: "$599.99",
      },
    ],
  },
  {
    id: 14,
    customerId: 22,
    customer: "Trần Thị U",
    email: "tran.u@example.com",
    phone: "0382 123 456",
    date: "2023-01-14",
    amount: "$89.99",
    status: "Cancelled",
    products: [
      {
        id: 15,
        title: "Logitech MX Master 3",
        img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
        price: "$59.49",
      },
    ],
  },
  {
    id: 15,
    customerId: 23,
    customer: "Phạm Văn V",
    email: "pham.v@example.com",
    phone: "0383 654 789",
    date: "2023-01-15",
    amount: "$56.78",
    status: "Shipped",
    products: [
      {
        id: 16,
        title: "Rode Podcast Microphone",
        img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
        price: "$119.49",
      },
    ],
  },
  // Thêm các đơn hàng khác...
];

export const products = [
  {
    id: 1,
    imgs: [
      "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
      "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
      "https://store.sony.com.vn/cdn/shop/files/Access_PR_01_RGB_400x.png?v=1694746471",
      "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
      "https://store.sony.com.vn/cdn/shop/files/Access_PR_01_RGB_400x.png?v=1694746471",
      "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
      "https://store.sony.com.vn/cdn/shop/files/Access_PR_01_RGB_400x.png?v=1694746471",
      "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    ],
    title: "Playstation 5 Digital Edition99999999999999999999",
    description: "Playstation 5 Digital Edition is the latest gaming console with advanced features...",
    category: "Gaming",
    color: "white",
    producer: "Sony",
    price: "$250.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 2,
    imgs: [
      "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png"
    ],
    title: "Dell Laptop KR211822",
    description: "Dell Laptop KR211822 with powerful performance and sleek design...",
    category: "Electronics",
    color: "black",
    producer: "Dell",
    price: "$499.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 3,
    imgs: [
      "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front"
    ],
    title: "Samsung TV 4K SmartTV",
    description: "Samsung TV 4K SmartTV with stunning picture quality and smart features...",
    category: "Electronics",
    color: "gray",
    producer: "Samsung",
    price: "$999.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 4,
    imgs: [
      "https://raylo.imgix.net/iphone-14-blue.png"
    ],
    title: "Apple Iphone 14 Pro Max",
    description: "Apple Iphone 14 Pro Max with advanced camera and performance...",
    category: "Electronics",
    color: "white",
    producer: "Apple",
    price: "$799.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 5,
    imgs: [
      "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png"
    ],
    title: "Philips Hue Play Gradient",
    description: "Philips Hue Play Gradient with vibrant lighting options...",
    category: "Home Appliances",
    color: "rainbow",
    producer: "Philips",
    price: "$39.99",
    createdAt: "01.02.2023",
    inStock: false,
  },
  {
    id: 6,
    imgs: [
      "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png"
    ],
    title: "Logitech MX Master 3",
    description: "Logitech MX Master 3 with ergonomic design and precision...",
    category: "Electronics",
    color: "black",
    producer: "Logitech",
    price: "$59.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 7,
    imgs: [
      "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png"
    ],
    title: "Rode Podcast Microphone",
    description: "Rode Podcast Microphone with professional audio quality...",
    category: "Electronics",
    color: "gray",
    producer: "Rode",
    price: "$119.49",
    createdAt: "01.02.2023",
    inStock: false,
  },
  {
    id: 8,
    imgs: [
      "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png"
    ],
    title: "Toshiba Split AC 2",
    description: "Toshiba Split AC 2 with efficient cooling and energy-saving features...",
    category: "Home Appliances",
    color: "white",
    producer: "Toshiba",
    price: "$899.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 9,
    imgs: [
      "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png"
    ],
    title: "Sony Bravia KDL-47W805A",
    description: "Sony Bravia KDL-47W805A with exceptional picture quality...",
    category: "Electronics",
    color: "black",
    producer: "Sony",
    price: "$970.49",
    createdAt: "01.02.2023",
    inStock: false,
  },
  {
    id: 10,
    imgs: [
      "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all"
    ],
    title: "Acer Laptop 16 KL-4804",
    description: "Acer Laptop 16 KL-4804 with powerful performance and sleek design...",
    category: "Electronics",
    color: "black",
    producer: "Acer",
    price: "$599.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
];

export const menu = [
  {
    id: 1,
    title: "Dashboard",
    url: "/",
    icon: "/icons/home.svg",
  },
  {
    id: 2,
    title: "Accounts",
    url: "/accounts",
    icon: "/icons/account.svg",
  },
  {
    id: 3,
    title: "Products",
    url: "/products",
    icon: "/icons/product.svg",
  },
  {
    id: 4,
    title: "Create Product",
    url: "/products/create",
    icon: "/icons/product.svg",
  },
  {
    id: 5,
    title: "Orders",
    url: "/orders",
    icon: "/icons/order.svg",
  },
  {
    id: 6,
    title: "Posts",
    url: "/posts",
    icon: "/icons/post.svg",
  },
  {
    id: 7,
    title: "System Log",
    url: "/system-log",
    icon: "/icons/system.svg",
  },
];

// export const orders = [
//   {
//     id: 1,
//     customer: "John Doe",
//     email: "john@example.com",
//     phone: "123-456-7890",
//     date: "2023-01-01",
//     amount: "$123.45",
//     status: "Shipped",
//     products: [
//       {
//         id: 1,
//         title: "Playstation 5 Digital Edition",
//         img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
//         price: "$250.99",
//       },
//       {
//         id: 2,
//         title: "Dell Laptop KR211822",
//         img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
//         price: "$499.99",
//       },
//     ],
//   },
//   {
//     id: 2,
//     customer: "Jane Smith",
//     email: "jane@example.com",
//     phone: "987-654-3210",
//     date: "2023-01-02",
//     amount: "$67.89",
//     status: "Pending",
//     products: [
//       {
//         id: 3,
//         title: "Samsung TV 4K SmartTV",
//         img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
//         price: "$999.49",
//       },
//     ],
//   },
//   // Thêm các đơn hàng khác...
// ];

//   {
//     id: 2,
//     title: "lists",
//     listItems: [
//       {
//         id: 1,
//         title: "Accounts",
//         url: "/users",
//         icon: "account.svg",
//       },
//       {
//         id: 2,
//         title: "Products",
//         url: "/products",
//         icon: "product.svg",
//       },
//       {
//         id: 3,
//         title: "Orders",
//         url: "/orders",
//         icon: "order.svg",
//       },
//       {
//         id: 4,
//         title: "Posts",
//         url: "/posts",
//         icon: "post2.svg",
//       },
//     ],
//   },
//   {
//     id: 3,
//     title: "general",
//     listItems: [
//       {
//         id: 1,
//         title: "Elements",
//         url: "/",
//         icon: "element.svg",
//       },
//       {
//         id: 2,
//         title: "Notes",
//         url: "/",
//         icon: "note.svg",
//       },
//       {
//         id: 3,
//         title: "Forms",
//         url: "/",
//         icon: "form.svg",
//       },
//       {
//         id: 4,
//         title: "Calendar",
//         url: "/",
//         icon: "calendar.svg",
//       },
//     ],
//   },
//   {
//     id: 4,
//     title: "Maintenance",
//     listItems: [
//       {
//         id: 1,
//         title: "Settings",
//         url: "/",
//         icon: "setting.svg",
//       },
//       {
//         id: 2,
//         title: "Backups",
//         url: "/",
//         icon: "backup.svg",
//       },
//     ],
//   },
//   {
//     id: 5,
//     title: "analytics",
//     listItems: [
//       {
//         id: 1,
//         title: "Charts",
//         url: "/",
//         icon: "chart.svg",
//       },
//       {
//         id: 2,
//         title: "Logs",
//         url: "/",
//         icon: "log.svg",
//       },
//     ],
//   },
// ];

export const topDealUsers = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    username: "Elva McDonald",
    email: "elva@gmail.com",
    amount: "3.668",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Linnie Nelson",
    email: "linnie@gmail.com",
    amount: "3.256",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Brent Reeves",
    email: "brent@gmail.com",
    amount: "2.998",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Adeline Watson",
    email: "adeline@gmail.com",
    amount: "2.512",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Juan Harrington",
    email: "juan@gmail.com",
    amount: "2.134",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Augusta McGee",
    email: "augusta@gmail.com",
    amount: "1.932",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Angel Thomas",
    email: "angel@gmail.com",
    amount: "1.560",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/",
  title: "Total Accounts",
  number: "11.238",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/",
  title: "Total Products",
  number: "238",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  icon: "/",
  title: "Total Revenue",
  number: "$56.432",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};
export const chartBoxConversion = {
  color: "gold",
  icon: "/",
  title: "Total Ratio",
  number: "2.6",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
    {
      name: "Sat",
      profit: 3490,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4000,
    },
    {
      name: "Mon",
      visit: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2780,
    },
    {
      name: "Thu",
      visit: 1890,
    },
    {
      name: "Fri",
      visit: 2390,
    },
    {
      name: "Sat",
      visit: 3490,
    },
  ],
};

export const userRows = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Hubbard",
    firstName: "Eula",
    email: "kewez@@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Manning",
    firstName: "Stella",
    email: "comhuhmit@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Greer",
    firstName: "Mary",
    email: "ujudokon@hottmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williamson",
    firstName: "Mildred",
    email: "tinhavabe@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gross",
    firstName: "Jose",
    email: "gobtagbes@yahoo.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Sharp",
    firstName: "Jeremy",
    email: "vulca.eder@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Lowe",
    firstName: "Christina",
    email: "reso.bilic@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dean",
    firstName: "Garrett",
    email: "codaic@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Parsons",
    firstName: "Leah",
    email: "uzozor@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Reid",
    firstName: "Elnora",
    email: "tuhkabapu@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 11,
    img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dunn",
    firstName: "Gertrude",
    email: "gibo@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 12,
    img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williams",
    firstName: "Mark",
    email: "tic.harvey@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 13,
    img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Cruz",
    firstName: "Charlotte",
    email: "ceuc@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 14,
    img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Harper",
    firstName: "Sara",
    email: "bafuv@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 15,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Griffin",
    firstName: "Eric",
    email: "ubi@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
];

export const singleUser = {
  id: 1,
  title: "John Doe",
  img: "https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  info: {
    username: "Johndoe99",
    fullname: "John Doe",
    email: "johndoe@gmail.com",
    phone: "123 456 789",
    status: "verified",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "clicks", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        clicks: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        clicks: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        clicks: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        clicks: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        clicks: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        clicks: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        clicks: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Doe purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "John Doe added 3 items into their wishlist",
      time: "1 week ago",
    },
    {
      text: "John Doe purchased Sony Bravia KD-32w800",
      time: "2 weeks ago",
    },
    {
      text: "John Doe reviewed a product",
      time: "1 month ago",
    },
    {
      text: "John Doe added 1 items into their wishlist",
      time: "1 month ago",
    },
    {
      text: "John Doe reviewed a product",
      time: "2 months ago",
    },
  ],
};
export const singleProduct = {
  id: 1,
  title: "Playstation 5 Digital Edition",
  img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
  info: {
    productId: "Ps5SDF1156d",
    color: "white",
    price: "$250.99",
    producer: "Sony",
    export: "Japan",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "orders", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        orders: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        orders: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        orders: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        orders: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        orders: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        orders: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        orders: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Doe purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "Jane Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 week ago",
    },
    {
      text: "Mike Doe purchased Playstation 5 Digital Edition",
      time: "2 weeks ago",
    },
    {
      text: "Anna Doe reviewed the product",
      time: "1 month ago",
    },
    {
      text: "Michael Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 month ago",
    },
    {
      text: "Helen Doe reviewed the product",
      time: "2 months ago",
    },
  ],
};
