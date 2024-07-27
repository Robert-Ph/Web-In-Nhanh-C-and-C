import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    return (
        <nav className="flex items-center py-4 pl-20 bg-gray-100 rounded-md shadow-sm">
            <Link to="/" className="text-blue-600 hover:underline">home</Link>
            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;

                return (
                    <span key={to} className="flex items-center">
                        <span className="mx-2 text-gray-500">/</span>
                        {isLast ? (
                            <span className="text-gray-500">{decodeURI(value)}</span>
                        ) : (
                            <Link to={to} className="text-blue-600 hover:underline">{decodeURI(value)}</Link>
                        )}
                    </span>
                );
            })}
        </nav>
    );
};

export default Breadcrumb;
