"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./login.module.scss";

export default function LoginPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [message, setMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            const response = await fetch("http://localhost:4000/graphql", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    query: `
            mutation Login($input: LoginInput!) {
              login(input: $input) {
                success
                message
                accessToken
                refreshToken
              }
            }
          `,
                    variables: {
                        input: {
                            email: formData.email,
                            password: formData.password,
                        },
                    },
                }),
            });

            const { data, errors } = await response.json();

            if (errors) {
                console.error(
                    "GraphQL Errors:",
                    JSON.stringify(errors, null, 2)
                );
                setMessage(
                    errors[0]?.message || "An error occurred. Please try again."
                );
                return;
            }

            if (data?.login?.success) {
                localStorage.setItem("accessToken", data.login.accessToken);
                localStorage.setItem("refreshToken", data.login.refreshToken);

                setMessage("Login successful! Redirecting...");
                setTimeout(() => {
                    router.push("/profile");
                }, 1000);
            } else {
                setMessage(
                    data?.login?.message || "Login failed. Please try again."
                );
            }
        } catch (error) {
            console.error("Network or server error:", error);
            setMessage("An error occurred. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className={styles["login-page"]}>
            <div className={styles["login-page__container"]}>
                <form
                    className={styles["login-page__form"]}
                    onSubmit={handleSubmit}
                >
                    <label className={styles["login-page__label"]}>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`${styles["login-page__input"]} ${styles["login-page__input--email"]}`}
                        required
                    />
                    <label className={styles["login-page__label"]}>
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`${styles["login-page__input"]} ${styles["login-page__input--password"]}`}
                        required
                    />
                    {message && (
                        <p className={styles["login-page__message"]}>
                            {message}
                        </p>
                    )}
                    <button
                        type="submit"
                        className={`${styles["login-page__button"]} ${styles["login-page__button--submit"]}`}
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Log In"}
                    </button>
                </form>
            </div>
        </section>
    );
}
