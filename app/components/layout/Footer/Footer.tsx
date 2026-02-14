import styles from "./footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.wrapper}>
      <div className={styles.inner}>
        <small className={styles.copy}>&copy; {year} Zestark. All Rights Reserved.</small>
      </div>
    </footer>
  );
}