"use client";

import { useState } from "react";
import styles from "./signup.module.scss";

export default function SignUpPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [message, setMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setMessage("Passwords do not match!");
            return;
        }

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
                        mutation SignUp($input: SignUpInput!) {
                            signUp(input: $input) {
                                success
                                message
                                user {
                                    id
                                    email
                                }
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
                    "Registration failed. Please check your input or try again."
                );
                return;
            }

            if (data?.signUp?.success) {
                setMessage("Registration successful! You can now log in.");
                setFormData({
                    email: "",
                    password: "",
                    confirmPassword: "",
                });
            } else {
                setMessage(
                    data?.signUp?.message ||
                        "Registration failed. Please try again."
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
        <section className={styles["signup-page"]}>
            <div className={styles["signup-page__container"]}>
                <form
                    className={styles["signup-page__form"]}
                    onSubmit={handleSubmit}
                >
                    <label className={styles["signup-page__label"]}>
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`${styles["signup-page__input"]} ${styles["signup-page__input--email"]}`}
                        required
                    />

                    <label className={styles["signup-page__label"]}>
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`${styles["signup-page__input"]} ${styles["signup-page__input--password"]}`}
                        required
                    />

                    <label className={styles["signup-page__label"]}>
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className={`${styles["signup-page__input"]} ${styles["signup-page__input--confirm-password"]}`}
                        required
                    />

                    {message && (
                        <p className={styles["signup-page__message"]}>
                            {message}
                        </p>
                    )}

                    <button
                        type="submit"
                        className={`${styles["signup-page__button"]} ${styles["signup-page__button--submit"]}`}
                        disabled={loading}
                    >
                        {loading ? "Registering..." : "Sign Up"}
                    </button>
                </form>
            </div>
        </section>
    );
}
