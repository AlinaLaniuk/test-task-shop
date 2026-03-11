"use client";

import Header from "@/components/Header/Header";
import "../styles/globals.scss";
import { useEffect } from "react";
import { useUserStore } from "../store/useUserStore";
import Footer from "@/components/Footer/Footer";
import useAuth from "@/hooks/useAuth";
import Loader from "@/components/Loader/Loader";
import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary";
import { useErrorStore } from "@/store/useErrorStore";
import RootError from "@/components/RootError/RootError";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { setUser, user, logout } = useUserStore((state) => state);
  const { data, loading } = useAuth();
  const error = useErrorStore((s) => s.message);
  const setError = useErrorStore((s) => s.setError);

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  const handleRetry = () => {
    setError(null);
    window.location.reload();
  };

  if (loading)
    return (
      <div className="app-container container flex flexCenter">
        <Loader />
      </div>
    );

  if (error) return <RootError message={error} onRetry={handleRetry} />;

  return (
    <html lang="en">
      <body>
        <div className="app-container">
          <ErrorBoundary>
            <Header
              isAuth={Boolean(user)}
              name={`${user?.firstName} ${user?.lastName}`}
              logout={logout}
            />
            <main className="main">{children}</main>
            <Footer email={user?.email} />
          </ErrorBoundary>
        </div>
      </body>
    </html>
  );
}
