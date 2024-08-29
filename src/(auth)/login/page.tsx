/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useAuthStore } from "@/store/Auth";
import React from "react";

function loginPage() {
  const { login } = useAuthStore();
  const [isLoading, setIsLoading] = React.useState(false);
  const [errer, setError] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // collect data
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    //validation
    if (!email || !password) {
      setError(() => "Please fill all the fields");
      return;
    }

    //handle loading and error
    setIsLoading(() => true);
    setError(() => "");

    //login => store
    const loginResponse = await login(email.toString(), password.toString());

    if (loginResponse.error) {
      setError(() => loginResponse.error!.message);
    }
    setIsLoading(() => false);
  };
  return <div>loginPage</div>;
}

export default loginPage;
