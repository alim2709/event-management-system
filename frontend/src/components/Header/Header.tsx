import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Event Management</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/events">Events</Link>
        <Link href="/profile">Profile</Link>
      </nav>
    </header>
  );
}
