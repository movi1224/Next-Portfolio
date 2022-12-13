import Navbar from './navbar'
import Footer from './views/footerView'
import styles from '../styles/Layout.module.css'
export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center justify-center px-8">
      <Navbar />
      {/* Background color effect */}
      <img className={styles.background} alt="background" />
      {children}
      <Footer />
    </div>
  )
}
