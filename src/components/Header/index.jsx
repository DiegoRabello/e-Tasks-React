import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h1>e-Tasks</h1>
        <p className={styles.subTitle}>
          Transforme suas listas em conquistas: organize, priorize e realize!
        </p>
      </div>
    </header>
  );
}