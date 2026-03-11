import React, { Component, ReactNode } from "react";
import { useErrorStore } from "@/store/useErrorStore";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundaryClass extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    const setError = useErrorStore.getState().setError;
    setError(error.message);
  }

  render() {
    return this.props.children;
  }
}

export default function ErrorBoundary({ children }: Props) {
  return <ErrorBoundaryClass>{children}</ErrorBoundaryClass>;
}
