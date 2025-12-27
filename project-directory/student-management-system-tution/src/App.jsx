import NavBarOptions from "./assets/components/NavBar/NavBarOptions"
import styles from "./App.module.css"
function App() {
 

  return (
    <>
    <div className={styles.mainContainer}>
    <NavBarOptions></NavBarOptions>
    
    <div className={styles.contentContainer}>
      <BatchesSection></BatchesSection>
    </div>

    </div>
    </>
  )
}

export default App
