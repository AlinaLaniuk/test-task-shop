import { FormEvent, useState } from "react";
import { validateTextField } from "./validation";
import { login } from "../../services/auth.api";
import { useUserStore } from "../../store/useUserStore";
import { useRouter } from "next/navigation";

export default function useLogin() {
  const [username, setUsername] = useState({ value: "", isError: false });
  const [password, setPassword] = useState({ value: "", isError: false });
  const [authError, setAuthError] = useState("");
  const setUser = useUserStore((state) => state.setUser);
  const router = useRouter();

  function updateUsername(value: string) {
    setUsername({ value: value, isError: !validateTextField(value) });
  }

  function updatePassword(value: string) {
    setPassword({ value: value, isError: !validateTextField(value) });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (username.isError || password.isError) {
      return;
    }

    const response = await login({
      username: username.value,
      password: password.value,
    });

    if (response.error) {
      setAuthError(response.error);
      return;
    }
    if (response.data) {
      setUser(response.data);
      router.push("/");
      setAuthError("");
      return;
    } else {
      setAuthError("Authentication error");
    }
  }

  return {
    username,
    updateUsername,
    password,
    updatePassword,
    onSubmit,
    authError,
  };
}
