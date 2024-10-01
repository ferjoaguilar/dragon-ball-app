import styles from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div>
                <h3>Dragon ball App</h3>
            </div>
            <div>
                <a href="">Home</a>
                <a href="">About</a>
            </div>
        </nav>
    )
}
