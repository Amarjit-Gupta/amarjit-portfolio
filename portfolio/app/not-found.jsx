import Link from "next/link";

const NotFound = () => {
  return (
    <div className="notfound">
      <div className="notfound-box">
        <h1 className="notfound-404">404</h1>

        <h2 className="notfound-title">Page Not Found</h2>

        <p className="notfound-text">
          Oops! The page you are looking for doesn't exist.
        </p>

        <Link href="/" className="notfound-btn">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;