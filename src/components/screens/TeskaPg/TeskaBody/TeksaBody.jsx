import { useEffect } from "react";
import styles from "./TeskaBody.module.css"
import { motion } from "framer-motion"

const TeksaBody = () => {



    const allAnim = {
        hidden: {
            y: 20,
            opacity: 0
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 }
        })
    }
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            className={styles.container}
        >
            <div className={styles.content}>
                <div className={styles.title}>
                    <motion.h1 custom={2} variants={allAnim}>2023</motion.h1>
                    <motion.p custom={3} variants={allAnim}>Улыбайся чаще, у тебя красивая улыбка😄</motion.p>
                </div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    className={styles.twentythree}
                >
                    <div className={styles.summer2023}>
                        <div className={styles.gallery}>
                            <motion.img custom={2} variants={allAnim} src="images/teska/2023/1.jpg" alt="" />
                            <motion.img custom={3} variants={allAnim} src="images/teska/2023/2.jpg" alt="" />
                            <motion.img custom={4} variants={allAnim} src="images/teska/2023/3.jpg" alt="" />
                            <motion.img custom={5} variants={allAnim} src="images/teska/2023/4.jpg" alt="" />
                            <motion.img custom={6} variants={allAnim} src="images/teska/2023/5.jpg" alt="" />
                            <motion.img custom={7} variants={allAnim} src="images/teska/2023/6.jpg" alt="" />
                            <motion.img custom={8} variants={allAnim} src="images/teska/2023/7.jpg" alt="" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default TeksaBody;