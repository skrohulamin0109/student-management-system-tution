import styles from "./BatchesSection.module.css";
import morningCartoon from "./batchCard images/morning_cartoon.jpg";
import noonCartoon from "./batchCard images/noon_cartoon.jpg";
import afternoonCartoon from "./batchCard images/afternoon_cartoon.jpg";
import nightCartoon from "./batchCard images/night_cartoon.jpg";
function BatchesSection() {

    let batchesInfo =[
      {
        batchImg: morningCartoon,
        batchTitle: "Batch Title 1",
        time: "7:30 - 9:00 a.m",
        subjects: ["Mathematics", "English"],
        classes: "5 to 9",
        totalStudents: 25
      },
      {
        batchImg: noonCartoon,
        batchTitle: "Batch Title 2",
        time: "11:30 - 1:00 p.m",
        subjects: ["Biology", "Geography"],
        classes: "7 to 11",
        totalStudents: 28
      },
      {
        batchImg: afternoonCartoon,
        batchTitle: "Batch Title 3",
        time: "9:30 - 11:00 a.m",
        subjects: ["Science", "History"],
        classes: "6 to 10",
        totalStudents: 30
      },

      {
        batchImg: nightCartoon,
        batchTitle: "Batch Title 4",
        time: "5:30 - 7:00 p.m",
        subjects: ["Physics", "Chemistry"],
        classes: "8 to 12",
        totalStudents: 27
      },
    ];

    return (
        <>
            <h1 className={styles.batchSectionHeading}>Batches Section</h1>
            <div className={styles.batchesSection}>
            {batchesInfo.map((item, index) =>
                 (
                <div className={styles.batchCard}>
                    <img src={item.batchImg} alt="batch image" className={styles.batchImg} />
                    <h2 className={styles.batchTitle}>{item.batchTitle}</h2>
                    <div className={styles.batchDetails}>
                        <p><b>Time:</b> {item.time}</p>
                        <p><b>Subjects:</b> {item.subjects.join(", ")}</p>
                        <p><b>Classes:</b> {item.classes}</p>
                        <p><b>Total Students:</b> {item.totalStudents}</p>
                    </div>
                </div>
                )
            )}
            </div>

        </>
    );
}

export default BatchesSection;