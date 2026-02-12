import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <div className="mb-8">
            <h1 className="text-7xl md:text-9xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              404
            </h1>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Oops! Page not found
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            The page you're looking for might have been removed or is temporarily unavailable. Let's get you back on track.
          </p>
          <Link to="/" className="btn-primary inline-flex items-center gap-2">
            Return to Home
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
