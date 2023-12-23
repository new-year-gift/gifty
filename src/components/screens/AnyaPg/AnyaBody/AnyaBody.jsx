import styles from "./AnyaBody.module.css"
import { motion } from "framer-motion"

const AnyaBody = () => {

    const autumn = [
        {
            id: 1,
            url: "/images/anya/autumn/1.jpg"
        },
        {
            id: 2,
            url: "/images/anya/autumn/2.jpg"
        },
        {
            id: 3,
            url: "/images/anya/autumn/3.jpg"
        },
        {
            id: 4,
            url: "/images/anya/autumn/4.jpg"
        },
        {
            id: 5,
            url: "/images/anya/autumn/5.jpg"
        },
        {
            id: 6,
            url: "/images/anya/autumn/6.jpg"
        },
        {
            id: 7,
            url: "/images/anya/autumn/7.jpg"
        },
        {
            id: 8,
            url: "/images/anya/autumn/8.jpg"
        },
    ]
    const summer = [
        {
            id: 1,
            url: "/images/anya/summer/1.jpg"
        },
        {
            id: 2,
            url: "/images/anya/summer/2.jpg"
        },
        {
            id: 3,
            url: "/images/anya/summer/3.jpg"
        },
        {
            id: 4,
            url: "/images/anya/summer/4.jpg"
        },
        {
            id: 5,
            url: "/images/anya/summer/5.jpg"
        },
        {
            id: 6,
            url: "/images/anya/summer/6.jpg"
        },
        {
            id: 7,
            url: "/images/anya/summer/7.jpg"
        },
        {
            id: 8,
            url: "/images/anya/summer/8.jpg"
        },
        {
            id: 9,
            url: "/images/anya/summer/9.jpg"
        },
        {
            id: 11,
            url: "/images/anya/summer/11.jpg"
        },
        {
            id: 12,
            url: "/images/anya/summer/12.jpg"
        },
        {
            id: 13,
            url: "/images/anya/summer/13.jpg"
        },
        {
            id: 14,
            url: "/images/anya/summer/14.jpg"
        },
        {
            id: 15,
            url: "/images/anya/summer/15.jpg"
        },
        {
            id: 16,
            url: "/images/anya/summer/16.jpg"
        },
        {
            id: 17,
            url: "/images/anya/summer/17.jpg"
        },
        {
            id: 18,
            url: "/images/anya/summer/18.jpg"
        },
        {
            id: 19,
            url: "/images/anya/summer/19.jpg"
        },
    ]
    const spring = [
        {
            id: 1,
            url: "/images/anya/spring/1.jpg"
        },
        {
            id: 2,
            url: "/images/anya/spring/2.jpg"
        },
        {
            id: 3,
            url: "/images/anya/spring/3.jpg"
        },
        {
            id: 4,
            url: "/images/anya/spring/4.jpg"
        },
        {
            id: 5,
            url: "/images/anya/spring/5.jpg"
        },
        {
            id: 6,
            url: "/images/anya/spring/6.jpg"
        },
        {
            id: 7,
            url: "/images/anya/spring/7.jpg"
        },
        {
            id: 8,
            url: "/images/anya/spring/8.jpg"
        },
        {
            id: 9,
            url: "/images/anya/spring/9.jpg"
        },
        {
            id: 10,
            url: "/images/anya/spring/10.jpg"
        },
        {
            id: 11,
            url: "/images/anya/spring/11.jpg"
        },
        {
            id: 12,
            url: "/images/anya/spring/12.jpg"
        },
        {
            id: 13,
            url: "/images/anya/spring/13.jpg"
        },
        {
            id: 14,
            url: "/images/anya/spring/14.jpg"
        },
        {
            id: 15,
            url: "/images/anya/spring/15.jpg"
        },
        {
            id: 16,
            url: "/images/anya/spring/16.jpg"
        },
        {
            id: 17,
            url: "/images/anya/spring/17.jpg"
        },
        {
            id: 18,
            url: "/images/anya/spring/18.jpg"
        },
        {
            id: 19,
            url: "/images/anya/spring/19.jpg"
        },
    ]
    const winter = [
        {
            id: 1,
            url: "/images/anya/winter/1.jpg"
        },
        {
            id: 2,
            url: "/images/anya/winter/2.jpg"
        },
        {
            id: 3,
            url: "/images/anya/winter/3.jpg"
        },
        {
            id: 4,
            url: "/images/anya/winter/4.jpg"
        },
        {
            id: 5,
            url: "/images/anya/winter/5.jpg"
        },
    ]

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
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    className={styles.title}
                >
                    <motion.h1 custom={2} variants={allAnim}>2023</motion.h1>
                    <motion.p custom={4} variants={allAnim}>Ты супер открытый, честный, весёлый, разговорчивый и разносторонний человек.</motion.p>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    className={styles.twentythree}
                >
                    <div className={styles.year}>
                        <div className={styles.title}>
                            <h1 style={{ color: "#ff9900" }}>Осень</h1>
                            <p>До чего на довела 24 школа..</p>
                        </div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.2 }}
                            className={styles.gallery}
                        >
                            {autumn.map(val => <motion.img custom={val.id + 2} variants={allAnim} key={val.id} src={val.url} />)}
                        </motion.div>
                        <div className={styles.title}>
                            <h1 style={{ color: "#51ff00" }}>Лето</h1>
                            <p>Супер насыщенное и интересное</p>
                        </div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.2 }}
                            className={styles.gallery}
                        >
                            {summer.map(val => <motion.img custom={val.id + 2} variants={allAnim} key={val.id} src={val.url} />)}
                        </motion.div>
                        <div className={styles.title}>
                            <h1 style={{ color: "#d400ff" }}>Весна</h1>
                            <p>Была очень смешной ну и конечно же боже кремик</p>
                        </div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.2 }}
                            className={styles.gallery}
                        >
                            {spring.map(val => <motion.img custom={val.id + 2} variants={allAnim} key={val.id} src={val.url} />)}
                            </motion.div>
                        <div className={styles.title}>
                            <h1 style={{ color: "#00ffff" }}>Зима</h1>
                            <p>Холодно. 187 Школа... и я с обосанным хвостиком. Ублюб</p>
                        </div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.2 }}
                            className={styles.gallery}
                        >
                            {winter.map(val => <motion.img custom={val.id + 2} variants={allAnim} key={val.id} src={val.url} />)}
                            </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default AnyaBody;