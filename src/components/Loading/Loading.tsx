import { FaSpinner } from "react-icons/fa";
import styles from './Loading.module.css'


export const Loading = () => {
  return (
    <div className={styles.loading}>
        <FaSpinner className={styles.icon} />
    </div>
  )
}