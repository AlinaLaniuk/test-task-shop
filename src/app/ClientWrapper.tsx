"use client";

import { useUserStore } from "@/store/useUserStore";
import useAuth from "@/hooks/useAuth";
import Loader from "@/components/Loader/Loader";
import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary";
import RootError from "@/components/RootError/RootError";
import { useErrorStore } from "@/store/useErrorStore";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { useEffect } from "react";
import { ReactNode } from "react";
import "../styles/globals.scss";

export default function ClientWrapper({ children }: { children: ReactNode }) {
  const { setUser, user, logout } = useUserStore();
  const { data, loading } = useAuth();
  const error = useErrorStore((s) => s.message);
  const setError = useErrorStore((s) => s.setError);

  useEffect(() => {
    if (data) setUser(data);
  }, [data, setUser]);

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
    <div className="app-container">
      <ErrorBoundary>
        <Header
          isAuth={Boolean(user)}
          name={`${user?.firstName} ${user?.lastName}`}
          logout={logout}
        />
        <main>{children}</main>
        <Footer email={user?.email} />
      </ErrorBoundary>
    </div>
  );
}
