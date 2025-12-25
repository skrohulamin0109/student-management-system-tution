import styles from "./NavBarOptions.module.css";

const NavBarOptions = () => {
  let navOptions = [ 'Teachers Section', 'Students Section', 'Fees & Dates', 'Contact Me']
  return (
    <>
    <div className={styles.company_logo_container}>
      <img src="" alt="company logo" className={styles.company_logo} />
    </div>

    <nav className={styles.nav}>
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