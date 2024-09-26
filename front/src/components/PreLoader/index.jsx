import styles from './PreLoader.module.scss'

export const PreLoader = () => {
    return (
        <div className={styles.preloader}>
            <div className={styles.preloader__row}>
                <div className={styles.preloader__item}></div>
                <div className={styles.preloader__item}></div>
            </div>
        </div>
    )
}