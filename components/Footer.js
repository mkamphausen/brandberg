import Link from 'next/link';
import styles from '../styles/Footer.module.css';

//this component provides 
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                Kontakt | <Link href="impressum">Impressum</Link> 
            </div>
        </footer>
    )
}