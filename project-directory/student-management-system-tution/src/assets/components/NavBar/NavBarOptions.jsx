import styles from "./NavBarOptions.module.css";
import companyLogo from "../../images/company_logo.png";



const NavBarOptions = () => {
  let navOptions = [ 'Teachers Section', 'Students Section', 'Fees & Dates', 'Contact Me']
  return (
    <>

    <nav className={styles.nav}>
    <div className={styles.company_logo_container}>
      <img src={companyLogo} alt="company logo" className={styles.company_logo} />
    </div>
      <ul className={styles.ul_container}>
       {navOptions.map((item, index) =>(
        <li key={index} className={styles.li_items}>{item}</li>)
       )}
      </ul>
    </nav>
    </>
  )
}

export default NavBarOptions;