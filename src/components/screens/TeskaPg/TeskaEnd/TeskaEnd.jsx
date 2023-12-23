import styles from "./TeskaEnd.module.css"
import { motion } from "framer-motion"

const TeskaEnd = () => {
    
    const allAnim = {
        hidden: {
            y: 20,
            opacity: 0
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: { delay: custom * 0.2, type: "smooth" }
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
                <div className={styles.desc}>
                    <motion.h1 custom={4} variants={allAnim}>Треска,</motion.h1>
                    <motion.p custom={6} variants={allAnim}>В жизни ты будешь принимать множество решений, но запомни, что какое бы количество их не было, какие бы разнообразие и трагичные не были, никогда не сомневайся и никогда не жалей о том что сделал. Люблю тебя, с Новай годай!</motion.p>
                </div>
                <div className={styles.personal}>
                    <motion.img custom={8} variants={allAnim} src="/images/teska/2023/2.jpg" alt="" />
                </div>
            </div>
        </motion.div>
    );
}

export default TeskaEnd;