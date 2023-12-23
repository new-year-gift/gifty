import styles from "./SerezhaBody2023.module.css"
import { IoFootsteps } from "react-icons/io5";
import { motion } from "framer-motion"


const SerezhaBody2023 = () => {

    const imgUrl = [
        {
            id: 1,
            url: "/images/sergift/su1.jpg"
        },
        {
            id: 2,
            url: "/images/sergift/su2.jpg"
        },
        {
            id: 3,
            url: "/images/sergift/su3.jpg"
        },
        {
            id: 4,
            url: "/images/sergift/su4.jpg"
        },
        {
            id: 5,
            url: "/images/sergift/su5.jpg"
        },
        {
            id: 6,
            url: "/images/sergift/su6.jpg"
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
                <div className={styles.title}>
                    <motion.h1 custom={2} variants={allAnim}>2023</motion.h1>
                    <motion.p custom={3} variants={allAnim}>Начнем наше небольшое путешествие с 2023 года и всё дальше будем уходить в прошлое</motion.p>
                </div>
                <div className={styles.twentythree}>
                    <div className={styles.summer2023}>
                        <div className={styles.summer_title2023}>
                            <div className={styles.desc_summer2023}>
                                <IoFootsteps className={styles.icon_foots} />
                                <p>Лето 2023 стало для меня самым ярким и полон ходьбы. Раз в год мы пытали удачу и свои ноги, да бы пройти эти 100к шагов, но у нас всё время терпела неудача по разным причинам. Но в это году МЫ БЛЯТЬ ДОШЛИ ДО КСТОВО!!!</p>
                            </div>
                            <video src="/images/sergift/us.mp4" preload="auto" controls autoPlay loop muted type="video/mp4" ></video>
                        </div>
                        <div className={styles.gallerySummer2023}>
                            {imgUrl.map(url => <img key={url.id} src={url.url} />)}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default SerezhaBody2023;