import NavBarOptions from "./assets/components/NavBar/NavBarOptions.jsx"
import styles from "./App.module.css"
import BatchesSection from "./assets/components/HeroSection/BatchesSection/BatchesSection.jsx"
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
