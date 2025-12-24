import styles from "./NavBarOptions.module.css";

const NavBarOptions = () => {
  let navOptions = ['Students Section', 'Teachers Section']
  return (
    <>
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