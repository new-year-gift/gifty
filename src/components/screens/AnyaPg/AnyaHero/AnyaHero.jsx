import { motion } from "framer-motion"
import styles from "./AnyaHero.module.css"

const AnyaHero = () => {

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
            viewport={{ amount: 0.2, once: true }}
            className={styles.container}
        >
            <div className={styles.flowers_right}>
                <div className={styles.flower1}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="77" viewBox="0 0 35 77" fill="none">
                        <path d="M26.5406 76.6998H26.7406C27.7406 76.6998 28.8406 76.4998 29.9406 76.1998C30.8406 75.8998 31.7406 75.4998 32.6406 75.0998C33.4406 74.6998 34.1406 74.1998 34.8406 73.4998C35.4406 72.9998 36.0406 72.2998 36.6406 71.5998C37.6406 70.2998 38.4406 68.7998 39.1406 66.8998C39.7406 65.3998 40.1406 63.5998 40.3406 61.4998C40.7406 57.9998 40.5406 54.1998 39.8406 50.0998C39.3406 47.5998 38.7406 45.1998 37.9406 42.9998V42.8998C37.9406 42.7998 37.9406 42.6998 37.8406 42.5998C37.7406 42.3998 37.5406 42.2998 37.2406 42.2998C37.1406 42.2998 37.0406 42.2998 36.9406 42.3998C36.3406 42.6998 35.8406 43.0998 35.3406 43.3998L35.0406 43.4998C34.4406 43.9998 33.7406 44.3998 33.1406 44.8998C32.0406 45.7998 30.8406 46.6998 29.7406 47.7998C27.5406 49.6998 25.6406 51.7998 23.8406 53.9998C22.9406 55.1998 22.0406 56.3998 21.3406 57.4998C20.6406 58.6998 19.9406 59.9998 19.4406 61.2998C18.9406 62.5998 18.5406 63.8998 18.3406 65.2998C18.2406 65.9998 18.1406 66.5998 18.1406 67.2998C18.1406 67.7998 18.1406 68.3998 18.2406 69.0998C18.5406 71.1998 19.5406 73.1998 20.9406 74.5998C21.6406 75.2998 22.5406 75.7998 23.4406 76.1998C24.4406 76.4998 25.4406 76.6998 26.5406 76.6998Z" fill="#FF8988" />
                        <path d="M38.0391 35.4C38.2391 35.4 38.4391 35.3 38.5391 35.1C38.6391 35 38.6391 34.9 38.6391 34.8C39.7391 32.7 40.6391 30.4 41.4391 27.9C42.6391 24 43.2391 20.2 43.3391 16.7C43.3391 14.6 43.1391 12.8 42.8391 11.2C42.4391 9.3 41.7391 7.7 40.9391 6.3C40.4391 5.5 39.9391 4.8 39.3391 4.2C38.7391 3.5 38.0391 2.9 37.3391 2.4C36.5391 1.8 35.7391 1.3 34.8391 0.9C33.7391 0.4 32.7391 0.1 31.7391 0H31.5391C31.2391 0 30.9391 0 30.6391 0C29.9391 0 29.2391 0.1 28.5391 0.3C27.5391 0.6 26.6391 1 25.8391 1.6C24.2391 2.8 23.0391 4.6 22.5391 6.7C22.3391 7.4 22.2391 8 22.1391 8.5C22.0391 9.1 22.0391 9.8 22.0391 10.5C22.0391 11.9 22.2391 13.2 22.6391 14.6C23.0391 16 23.5391 17.3 24.0391 18.6C24.6391 19.8 25.3391 21.1 26.0391 22.4C27.5391 24.8 29.2391 27.1 31.1391 29.3C32.1391 30.4 33.1391 31.5 34.1391 32.6C34.7391 33.2 35.2391 33.7 35.8391 34.2L36.0391 34.4C36.4391 34.8 36.9391 35.2 37.5391 35.6C37.7391 35.3 37.8391 35.4 38.0391 35.4Z" fill="#FF8988" />
                        <path d="M13.5375 46.2C14.2375 46.2 15.0375 46.2 15.7375 46.1C17.1375 46 18.5375 45.7 19.9375 45.4C22.6375 44.8 25.4375 44 28.1375 42.9C29.5375 42.3 30.9375 41.8 32.2375 41.1C32.9375 40.8 33.6375 40.4 34.3375 40L34.5375 39.9C35.1375 39.6 35.7375 39.3 36.1375 38.9C36.2375 38.8 36.3375 38.7 36.3375 38.6C36.4375 38.4 36.4375 38.1 36.3375 37.9C36.2375 37.8 36.2375 37.7 36.1375 37.7C34.5375 35.9 32.6375 34.3 30.6375 32.8C27.3375 30.3 23.9375 28.5 20.6375 27.3C18.6375 26.6 16.9375 26.1 15.2375 25.9C14.4375 25.8 13.6375 25.8 12.9375 25.8C11.9375 25.8 10.9375 25.9 9.9375 26.1C8.9375 26.3 8.1375 26.5 7.4375 26.9C6.5375 27.3 5.7375 27.7 5.0375 28.2C4.2375 28.7 3.5375 29.4 2.8375 30.1C2.0375 30.9 1.4375 31.8 0.9375 32.7L0.8375 32.9C0.3375 33.9 0.1375 34.9 0.0375 35.8C-0.0625 36.9 0.0375 37.9 0.3375 38.8C0.9375 40.7 2.2375 42.5 4.0375 43.7C4.6375 44.1 5.1375 44.4 5.6375 44.6C6.2375 44.9 6.8375 45.1 7.4375 45.3C8.7375 45.7 10.1375 46 11.4375 46.1C12.1375 46.2 12.8375 46.2 13.5375 46.2Z" fill="#FF8988" />
                    </svg>
                </div>
                <div className={styles.flower2}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="47" height="77" viewBox="0 0 47 77" fill="none">
                        <path d="M64.0406 64.6C66.0406 64.6 67.9406 64 69.4406 62.9C70.2406 62.3 70.9406 61.6 71.4406 60.7C71.9406 59.9 72.3406 58.9 72.5406 57.9V57.7C72.7406 56.7 72.7406 55.6 72.6406 54.5C72.5406 53.5 72.3406 52.6 71.9406 51.7C71.6406 50.9 71.2406 50 70.8406 49.2C70.4406 48.5 69.9406 47.8 69.2406 47.1C68.1406 45.9 66.7406 44.8 65.1406 43.8C63.7406 42.9 62.0406 42.2 60.0406 41.6C56.6406 40.6 52.8406 40.1 48.7406 40H48.5406C46.0406 40 43.7406 40.2 41.4406 40.6H41.3406H41.2406C41.1406 40.6 41.0406 40.6 41.0406 40.6C40.8406 40.7 40.6406 40.9 40.6406 41.1C40.6406 41.2 40.6406 41.3 40.6406 41.5C40.8406 42.1 41.1406 42.8 41.3406 43.3L41.4406 43.5C41.7406 44.2 42.1406 44.9 42.4406 45.6C43.1406 46.9 43.8406 48.2 44.6406 49.5C46.1406 52 47.8406 54.3 49.7406 56.4C50.7406 57.5 51.7406 58.6 52.7406 59.5C53.7406 60.4 54.9406 61.3 56.1406 62.1C57.2406 62.8 58.5406 63.4 59.8406 63.9C60.5406 64.1 61.1406 64.3 61.7406 64.4C62.2406 64.5 62.7406 64.6 63.5406 64.6C63.7406 64.6 63.9406 64.6 64.0406 64.6Z" fill="#FF8988" />
                        <path d="M26.5406 76.6998H26.7406C27.7406 76.6998 28.8406 76.4998 29.9406 76.1998C30.8406 75.8998 31.7406 75.4998 32.6406 75.0998C33.4406 74.6998 34.1406 74.1998 34.8406 73.4998C35.4406 72.9998 36.0406 72.2998 36.6406 71.5998C37.6406 70.2998 38.4406 68.7998 39.1406 66.8998C39.7406 65.3998 40.1406 63.5998 40.3406 61.4998C40.7406 57.9998 40.5406 54.1998 39.8406 50.0998C39.3406 47.5998 38.7406 45.1998 37.9406 42.9998V42.8998C37.9406 42.7998 37.9406 42.6998 37.8406 42.5998C37.7406 42.3998 37.5406 42.2998 37.2406 42.2998C37.1406 42.2998 37.0406 42.2998 36.9406 42.3998C36.3406 42.6998 35.8406 43.0998 35.3406 43.3998L35.0406 43.4998C34.4406 43.9998 33.7406 44.3998 33.1406 44.8998C32.0406 45.7998 30.8406 46.6998 29.7406 47.7998C27.5406 49.6998 25.6406 51.7998 23.8406 53.9998C22.9406 55.1998 22.0406 56.3998 21.3406 57.4998C20.6406 58.6998 19.9406 59.9998 19.4406 61.2998C18.9406 62.5998 18.5406 63.8998 18.3406 65.2998C18.2406 65.9998 18.1406 66.5998 18.1406 67.2998C18.1406 67.7998 18.1406 68.3998 18.2406 69.0998C18.5406 71.1998 19.5406 73.1998 20.9406 74.5998C21.6406 75.2998 22.5406 75.7998 23.4406 76.1998C24.4406 76.4998 25.4406 76.6998 26.5406 76.6998Z" fill="#FF8988" />
                        <path d="M38.0391 35.4C38.2391 35.4 38.4391 35.3 38.5391 35.1C38.6391 35 38.6391 34.9 38.6391 34.8C39.7391 32.7 40.6391 30.4 41.4391 27.9C42.6391 24 43.2391 20.2 43.3391 16.7C43.3391 14.6 43.1391 12.8 42.8391 11.2C42.4391 9.3 41.7391 7.7 40.9391 6.3C40.4391 5.5 39.9391 4.8 39.3391 4.2C38.7391 3.5 38.0391 2.9 37.3391 2.4C36.5391 1.8 35.7391 1.3 34.8391 0.9C33.7391 0.4 32.7391 0.1 31.7391 0H31.5391C31.2391 0 30.9391 0 30.6391 0C29.9391 0 29.2391 0.1 28.5391 0.3C27.5391 0.6 26.6391 1 25.8391 1.6C24.2391 2.8 23.0391 4.6 22.5391 6.7C22.3391 7.4 22.2391 8 22.1391 8.5C22.0391 9.1 22.0391 9.8 22.0391 10.5C22.0391 11.9 22.2391 13.2 22.6391 14.6C23.0391 16 23.5391 17.3 24.0391 18.6C24.6391 19.8 25.3391 21.1 26.0391 22.4C27.5391 24.8 29.2391 27.1 31.1391 29.3C32.1391 30.4 33.1391 31.5 34.1391 32.6C34.7391 33.2 35.2391 33.7 35.8391 34.2L36.0391 34.4C36.4391 34.8 36.9391 35.2 37.5391 35.6C37.7391 35.3 37.8391 35.4 38.0391 35.4Z" fill="#FF8988" />
                        <path d="M13.5375 46.2C14.2375 46.2 15.0375 46.2 15.7375 46.1C17.1375 46 18.5375 45.7 19.9375 45.4C22.6375 44.8 25.4375 44 28.1375 42.9C29.5375 42.3 30.9375 41.8 32.2375 41.1C32.9375 40.8 33.6375 40.4 34.3375 40L34.5375 39.9C35.1375 39.6 35.7375 39.3 36.1375 38.9C36.2375 38.8 36.3375 38.7 36.3375 38.6C36.4375 38.4 36.4375 38.1 36.3375 37.9C36.2375 37.8 36.2375 37.7 36.1375 37.7C34.5375 35.9 32.6375 34.3 30.6375 32.8C27.3375 30.3 23.9375 28.5 20.6375 27.3C18.6375 26.6 16.9375 26.1 15.2375 25.9C14.4375 25.8 13.6375 25.8 12.9375 25.8C11.9375 25.8 10.9375 25.9 9.9375 26.1C8.9375 26.3 8.1375 26.5 7.4375 26.9C6.5375 27.3 5.7375 27.7 5.0375 28.2C4.2375 28.7 3.5375 29.4 2.8375 30.1C2.0375 30.9 1.4375 31.8 0.9375 32.7L0.8375 32.9C0.3375 33.9 0.1375 34.9 0.0375 35.8C-0.0625 36.9 0.0375 37.9 0.3375 38.8C0.9375 40.7 2.2375 42.5 4.0375 43.7C4.6375 44.1 5.1375 44.4 5.6375 44.6C6.2375 44.9 6.8375 45.1 7.4375 45.3C8.7375 45.7 10.1375 46 11.4375 46.1C12.1375 46.2 12.8375 46.2 13.5375 46.2Z" fill="#FF8988" />
                        <path d="M46.6391 37.6H46.9391C48.2391 37.6 49.6391 37.5 51.1391 37.4C54.0391 37.2 56.9391 36.8 59.6391 36.1C61.1391 35.8 62.4391 35.4 63.7391 34.9C65.0391 34.4 66.3391 33.8 67.5391 33.1C68.7391 32.4 69.8391 31.6 70.8391 30.7C71.3391 30.2 71.7391 29.7 72.1391 29.3C72.4391 28.9 72.8391 28.4 73.1391 27.8C74.2391 26 74.6391 23.8 74.3391 21.8C74.2391 20.8 73.8391 19.9 73.3391 19C72.8391 18.2 72.2391 17.4 71.3391 16.7L71.1391 16.6C70.3391 16 69.4391 15.5 68.3391 15C67.4391 14.7 66.5391 14.4 65.5391 14.2C64.8391 14.1 64.2391 14 63.5391 14C63.3391 14 63.1391 14 62.8391 14C62.0391 14 61.1391 14.2 60.2391 14.4C58.6391 14.8 57.0391 15.5 55.4391 16.5C54.0391 17.4 52.6391 18.5 51.1391 20C48.6391 22.5 46.4391 25.6 44.5391 29.3C43.3391 31.5 42.3391 33.8 41.6391 36V36.1C41.5391 36.2 41.5391 36.3 41.5391 36.4C41.5391 36.6 41.6391 36.9 41.8391 37C41.9391 37.1 42.0391 37.1 42.1391 37.1C42.7391 37.2 43.3391 37.3 43.9391 37.3H44.2391C45.0391 37.5 45.8391 37.6 46.6391 37.6Z" fill="#FF8988" />
                    </svg>
                </div>
                <div className={styles.flower3}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="77" viewBox="0 0 50 77" fill="none">
                        <path d="M64.0406 64.6C66.0406 64.6 67.9406 64 69.4406 62.9C70.2406 62.3 70.9406 61.6 71.4406 60.7C71.9406 59.9 72.3406 58.9 72.5406 57.9V57.7C72.7406 56.7 72.7406 55.6 72.6406 54.5C72.5406 53.5 72.3406 52.6 71.9406 51.7C71.6406 50.9 71.2406 50 70.8406 49.2C70.4406 48.5 69.9406 47.8 69.2406 47.1C68.1406 45.9 66.7406 44.8 65.1406 43.8C63.7406 42.9 62.0406 42.2 60.0406 41.6C56.6406 40.6 52.8406 40.1 48.7406 40H48.5406C46.0406 40 43.7406 40.2 41.4406 40.6H41.3406H41.2406C41.1406 40.6 41.0406 40.6 41.0406 40.6C40.8406 40.7 40.6406 40.9 40.6406 41.1C40.6406 41.2 40.6406 41.3 40.6406 41.5C40.8406 42.1 41.1406 42.8 41.3406 43.3L41.4406 43.5C41.7406 44.2 42.1406 44.9 42.4406 45.6C43.1406 46.9 43.8406 48.2 44.6406 49.5C46.1406 52 47.8406 54.3 49.7406 56.4C50.7406 57.5 51.7406 58.6 52.7406 59.5C53.7406 60.4 54.9406 61.3 56.1406 62.1C57.2406 62.8 58.5406 63.4 59.8406 63.9C60.5406 64.1 61.1406 64.3 61.7406 64.4C62.2406 64.5 62.7406 64.6 63.5406 64.6C63.7406 64.6 63.9406 64.6 64.0406 64.6Z" fill="#FF8988" />
                        <path d="M26.5406 76.6998H26.7406C27.7406 76.6998 28.8406 76.4998 29.9406 76.1998C30.8406 75.8998 31.7406 75.4998 32.6406 75.0998C33.4406 74.6998 34.1406 74.1998 34.8406 73.4998C35.4406 72.9998 36.0406 72.2998 36.6406 71.5998C37.6406 70.2998 38.4406 68.7998 39.1406 66.8998C39.7406 65.3998 40.1406 63.5998 40.3406 61.4998C40.7406 57.9998 40.5406 54.1998 39.8406 50.0998C39.3406 47.5998 38.7406 45.1998 37.9406 42.9998V42.8998C37.9406 42.7998 37.9406 42.6998 37.8406 42.5998C37.7406 42.3998 37.5406 42.2998 37.2406 42.2998C37.1406 42.2998 37.0406 42.2998 36.9406 42.3998C36.3406 42.6998 35.8406 43.0998 35.3406 43.3998L35.0406 43.4998C34.4406 43.9998 33.7406 44.3998 33.1406 44.8998C32.0406 45.7998 30.8406 46.6998 29.7406 47.7998C27.5406 49.6998 25.6406 51.7998 23.8406 53.9998C22.9406 55.1998 22.0406 56.3998 21.3406 57.4998C20.6406 58.6998 19.9406 59.9998 19.4406 61.2998C18.9406 62.5998 18.5406 63.8998 18.3406 65.2998C18.2406 65.9998 18.1406 66.5998 18.1406 67.2998C18.1406 67.7998 18.1406 68.3998 18.2406 69.0998C18.5406 71.1998 19.5406 73.1998 20.9406 74.5998C21.6406 75.2998 22.5406 75.7998 23.4406 76.1998C24.4406 76.4998 25.4406 76.6998 26.5406 76.6998Z" fill="#FF8988" />
                        <path d="M38.0391 35.4C38.2391 35.4 38.4391 35.3 38.5391 35.1C38.6391 35 38.6391 34.9 38.6391 34.8C39.7391 32.7 40.6391 30.4 41.4391 27.9C42.6391 24 43.2391 20.2 43.3391 16.7C43.3391 14.6 43.1391 12.8 42.8391 11.2C42.4391 9.3 41.7391 7.7 40.9391 6.3C40.4391 5.5 39.9391 4.8 39.3391 4.2C38.7391 3.5 38.0391 2.9 37.3391 2.4C36.5391 1.8 35.7391 1.3 34.8391 0.9C33.7391 0.4 32.7391 0.1 31.7391 0H31.5391C31.2391 0 30.9391 0 30.6391 0C29.9391 0 29.2391 0.1 28.5391 0.3C27.5391 0.6 26.6391 1 25.8391 1.6C24.2391 2.8 23.0391 4.6 22.5391 6.7C22.3391 7.4 22.2391 8 22.1391 8.5C22.0391 9.1 22.0391 9.8 22.0391 10.5C22.0391 11.9 22.2391 13.2 22.6391 14.6C23.0391 16 23.5391 17.3 24.0391 18.6C24.6391 19.8 25.3391 21.1 26.0391 22.4C27.5391 24.8 29.2391 27.1 31.1391 29.3C32.1391 30.4 33.1391 31.5 34.1391 32.6C34.7391 33.2 35.2391 33.7 35.8391 34.2L36.0391 34.4C36.4391 34.8 36.9391 35.2 37.5391 35.6C37.7391 35.3 37.8391 35.4 38.0391 35.4Z" fill="#FF8988" />
                        <path d="M13.5375 46.2C14.2375 46.2 15.0375 46.2 15.7375 46.1C17.1375 46 18.5375 45.7 19.9375 45.4C22.6375 44.8 25.4375 44 28.1375 42.9C29.5375 42.3 30.9375 41.8 32.2375 41.1C32.9375 40.8 33.6375 40.4 34.3375 40L34.5375 39.9C35.1375 39.6 35.7375 39.3 36.1375 38.9C36.2375 38.8 36.3375 38.7 36.3375 38.6C36.4375 38.4 36.4375 38.1 36.3375 37.9C36.2375 37.8 36.2375 37.7 36.1375 37.7C34.5375 35.9 32.6375 34.3 30.6375 32.8C27.3375 30.3 23.9375 28.5 20.6375 27.3C18.6375 26.6 16.9375 26.1 15.2375 25.9C14.4375 25.8 13.6375 25.8 12.9375 25.8C11.9375 25.8 10.9375 25.9 9.9375 26.1C8.9375 26.3 8.1375 26.5 7.4375 26.9C6.5375 27.3 5.7375 27.7 5.0375 28.2C4.2375 28.7 3.5375 29.4 2.8375 30.1C2.0375 30.9 1.4375 31.8 0.9375 32.7L0.8375 32.9C0.3375 33.9 0.1375 34.9 0.0375 35.8C-0.0625 36.9 0.0375 37.9 0.3375 38.8C0.9375 40.7 2.2375 42.5 4.0375 43.7C4.6375 44.1 5.1375 44.4 5.6375 44.6C6.2375 44.9 6.8375 45.1 7.4375 45.3C8.7375 45.7 10.1375 46 11.4375 46.1C12.1375 46.2 12.8375 46.2 13.5375 46.2Z" fill="#FF8988" />
                        <path d="M46.6391 37.6H46.9391C48.2391 37.6 49.6391 37.5 51.1391 37.4C54.0391 37.2 56.9391 36.8 59.6391 36.1C61.1391 35.8 62.4391 35.4 63.7391 34.9C65.0391 34.4 66.3391 33.8 67.5391 33.1C68.7391 32.4 69.8391 31.6 70.8391 30.7C71.3391 30.2 71.7391 29.7 72.1391 29.3C72.4391 28.9 72.8391 28.4 73.1391 27.8C74.2391 26 74.6391 23.8 74.3391 21.8C74.2391 20.8 73.8391 19.9 73.3391 19C72.8391 18.2 72.2391 17.4 71.3391 16.7L71.1391 16.6C70.3391 16 69.4391 15.5 68.3391 15C67.4391 14.7 66.5391 14.4 65.5391 14.2C64.8391 14.1 64.2391 14 63.5391 14C63.3391 14 63.1391 14 62.8391 14C62.0391 14 61.1391 14.2 60.2391 14.4C58.6391 14.8 57.0391 15.5 55.4391 16.5C54.0391 17.4 52.6391 18.5 51.1391 20C48.6391 22.5 46.4391 25.6 44.5391 29.3C43.3391 31.5 42.3391 33.8 41.6391 36V36.1C41.5391 36.2 41.5391 36.3 41.5391 36.4C41.5391 36.6 41.6391 36.9 41.8391 37C41.9391 37.1 42.0391 37.1 42.1391 37.1C42.7391 37.2 43.3391 37.3 43.9391 37.3H44.2391C45.0391 37.5 45.8391 37.6 46.6391 37.6Z" fill="#FF8988" />
                    </svg>
                </div>
            </div>
            <div className={styles.flowers_left}>
                <div className={styles.flower1}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="66" height="77" viewBox="0 0 66 77" fill="none">
                        <path d="M55.0406 64.6C57.0406 64.6 58.9406 64 60.4406 62.9C61.2406 62.3 61.9406 61.6 62.4406 60.7C62.9406 59.9 63.3406 58.9 63.5406 57.9V57.7C63.7406 56.7 63.7406 55.6 63.6406 54.5C63.5406 53.5 63.3406 52.6 62.9406 51.7C62.6406 50.9 62.2406 50 61.8406 49.2C61.4406 48.5 60.9406 47.8 60.2406 47.1C59.1406 45.9 57.7406 44.8 56.1406 43.8C54.7406 42.9 53.0406 42.2 51.0406 41.6C47.6406 40.6 43.8406 40.1 39.7406 40H39.5406C37.0406 40 34.7406 40.2 32.4406 40.6H32.3406H32.2406C32.1406 40.6 32.0406 40.6 32.0406 40.6C31.8406 40.7 31.6406 40.9 31.6406 41.1C31.6406 41.2 31.6406 41.3 31.6406 41.5C31.8406 42.1 32.1406 42.8 32.3406 43.3L32.4406 43.5C32.7406 44.2 33.1406 44.9 33.4406 45.6C34.1406 46.9 34.8406 48.2 35.6406 49.5C37.1406 52 38.8406 54.3 40.7406 56.4C41.7406 57.5 42.7406 58.6 43.7406 59.5C44.7406 60.4 45.9406 61.3 47.1406 62.1C48.2406 62.8 49.5406 63.4 50.8406 63.9C51.5406 64.1 52.1406 64.3 52.7406 64.4C53.2406 64.5 53.7406 64.6 54.5406 64.6C54.7406 64.6 54.9406 64.6 55.0406 64.6Z" fill="#FF8988" />
                        <path d="M17.5406 76.6998H17.7406C18.7406 76.6998 19.8406 76.4998 20.9406 76.1998C21.8406 75.8998 22.7406 75.4998 23.6406 75.0998C24.4406 74.6998 25.1406 74.1998 25.8406 73.4998C26.4406 72.9998 27.0406 72.2998 27.6406 71.5998C28.6406 70.2998 29.4406 68.7998 30.1406 66.8998C30.7406 65.3998 31.1406 63.5998 31.3406 61.4998C31.7406 57.9998 31.5406 54.1998 30.8406 50.0998C30.3406 47.5998 29.7406 45.1998 28.9406 42.9998V42.8998C28.9406 42.7998 28.9406 42.6998 28.8406 42.5998C28.7406 42.3998 28.5406 42.2998 28.2406 42.2998C28.1406 42.2998 28.0406 42.2998 27.9406 42.3998C27.3406 42.6998 26.8406 43.0998 26.3406 43.3998L26.0406 43.4998C25.4406 43.9998 24.7406 44.3998 24.1406 44.8998C23.0406 45.7998 21.8406 46.6998 20.7406 47.7998C18.5406 49.6998 16.6406 51.7998 14.8406 53.9998C13.9406 55.1998 13.0406 56.3998 12.3406 57.4998C11.6406 58.6998 10.9406 59.9998 10.4406 61.2998C9.94062 62.5998 9.54062 63.8998 9.34062 65.2998C9.24062 65.9998 9.14062 66.5998 9.14062 67.2998C9.14062 67.7998 9.14063 68.3998 9.24063 69.0998C9.54063 71.1998 10.5406 73.1998 11.9406 74.5998C12.6406 75.2998 13.5406 75.7998 14.4406 76.1998C15.4406 76.4998 16.4406 76.6998 17.5406 76.6998Z" fill="#FF8988" />
                        <path d="M29.0391 35.4C29.2391 35.4 29.4391 35.3 29.5391 35.1C29.6391 35 29.6391 34.9 29.6391 34.8C30.7391 32.7 31.6391 30.4 32.4391 27.9C33.6391 24 34.2391 20.2 34.3391 16.7C34.3391 14.6 34.1391 12.8 33.8391 11.2C33.4391 9.3 32.7391 7.7 31.9391 6.3C31.4391 5.5 30.9391 4.8 30.3391 4.2C29.7391 3.5 29.0391 2.9 28.3391 2.4C27.5391 1.8 26.7391 1.3 25.8391 0.9C24.7391 0.4 23.7391 0.1 22.7391 0H22.5391C22.2391 0 21.9391 0 21.6391 0C20.9391 0 20.2391 0.1 19.5391 0.3C18.5391 0.6 17.6391 1 16.8391 1.6C15.2391 2.8 14.0391 4.6 13.5391 6.7C13.3391 7.4 13.2391 8 13.1391 8.5C13.0391 9.1 13.0391 9.8 13.0391 10.5C13.0391 11.9 13.2391 13.2 13.6391 14.6C14.0391 16 14.5391 17.3 15.0391 18.6C15.6391 19.8 16.3391 21.1 17.0391 22.4C18.5391 24.8 20.2391 27.1 22.1391 29.3C23.1391 30.4 24.1391 31.5 25.1391 32.6C25.7391 33.2 26.2391 33.7 26.8391 34.2L27.0391 34.4C27.4391 34.8 27.9391 35.2 28.5391 35.6C28.7391 35.3 28.8391 35.4 29.0391 35.4Z" fill="#FF8988" />
                        <path d="M4.5375 46.2C5.2375 46.2 6.0375 46.2 6.7375 46.1C8.1375 46 9.5375 45.7 10.9375 45.4C13.6375 44.8 16.4375 44 19.1375 42.9C20.5375 42.3 21.9375 41.8 23.2375 41.1C23.9375 40.8 24.6375 40.4 25.3375 40L25.5375 39.9C26.1375 39.6 26.7375 39.3 27.1375 38.9C27.2375 38.8 27.3375 38.7 27.3375 38.6C27.4375 38.4 27.4375 38.1 27.3375 37.9C27.2375 37.8 27.2375 37.7 27.1375 37.7C25.5375 35.9 23.6375 34.3 21.6375 32.8C18.3375 30.3 14.9375 28.5 11.6375 27.3C9.6375 26.6 7.9375 26.1 6.2375 25.9C5.4375 25.8 4.6375 25.8 3.9375 25.8C2.9375 25.8 1.9375 25.9 0.9375 26.1C-0.0625 26.3 -0.8625 26.5 -1.5625 26.9C-2.4625 27.3 -3.2625 27.7 -3.9625 28.2C-4.7625 28.7 -5.4625 29.4 -6.1625 30.1C-6.9625 30.9 -7.5625 31.8 -8.0625 32.7L-8.1625 32.9C-8.6625 33.9 -8.8625 34.9 -8.9625 35.8C-9.0625 36.9 -8.9625 37.9 -8.6625 38.8C-8.0625 40.7 -6.7625 42.5 -4.9625 43.7C-4.3625 44.1 -3.8625 44.4 -3.3625 44.6C-2.7625 44.9 -2.1625 45.1 -1.5625 45.3C-0.2625 45.7 1.1375 46 2.4375 46.1C3.1375 46.2 3.8375 46.2 4.5375 46.2Z" fill="#FF8988" />
                        <path d="M37.6391 37.6H37.9391C39.2391 37.6 40.6391 37.5 42.1391 37.4C45.0391 37.2 47.9391 36.8 50.6391 36.1C52.1391 35.8 53.4391 35.4 54.7391 34.9C56.0391 34.4 57.3391 33.8 58.5391 33.1C59.7391 32.4 60.8391 31.6 61.8391 30.7C62.3391 30.2 62.7391 29.7 63.1391 29.3C63.4391 28.9 63.8391 28.4 64.1391 27.8C65.2391 26 65.6391 23.8 65.3391 21.8C65.2391 20.8 64.8391 19.9 64.3391 19C63.8391 18.2 63.2391 17.4 62.3391 16.7L62.1391 16.6C61.3391 16 60.4391 15.5 59.3391 15C58.4391 14.7 57.5391 14.4 56.5391 14.2C55.8391 14.1 55.2391 14 54.5391 14C54.3391 14 54.1391 14 53.8391 14C53.0391 14 52.1391 14.2 51.2391 14.4C49.6391 14.8 48.0391 15.5 46.4391 16.5C45.0391 17.4 43.6391 18.5 42.1391 20C39.6391 22.5 37.4391 25.6 35.5391 29.3C34.3391 31.5 33.3391 33.8 32.6391 36V36.1C32.5391 36.2 32.5391 36.3 32.5391 36.4C32.5391 36.6 32.6391 36.9 32.8391 37C32.9391 37.1 33.0391 37.1 33.1391 37.1C33.7391 37.2 34.3391 37.3 34.9391 37.3H35.2391C36.0391 37.5 36.8391 37.6 37.6391 37.6Z" fill="#FF8988" />
                    </svg>
                </div>
                <div className={styles.flower2}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="66" height="77" viewBox="0 0 66 77" fill="none">
                        <path d="M55.0406 64.6C57.0406 64.6 58.9406 64 60.4406 62.9C61.2406 62.3 61.9406 61.6 62.4406 60.7C62.9406 59.9 63.3406 58.9 63.5406 57.9V57.7C63.7406 56.7 63.7406 55.6 63.6406 54.5C63.5406 53.5 63.3406 52.6 62.9406 51.7C62.6406 50.9 62.2406 50 61.8406 49.2C61.4406 48.5 60.9406 47.8 60.2406 47.1C59.1406 45.9 57.7406 44.8 56.1406 43.8C54.7406 42.9 53.0406 42.2 51.0406 41.6C47.6406 40.6 43.8406 40.1 39.7406 40H39.5406C37.0406 40 34.7406 40.2 32.4406 40.6H32.3406H32.2406C32.1406 40.6 32.0406 40.6 32.0406 40.6C31.8406 40.7 31.6406 40.9 31.6406 41.1C31.6406 41.2 31.6406 41.3 31.6406 41.5C31.8406 42.1 32.1406 42.8 32.3406 43.3L32.4406 43.5C32.7406 44.2 33.1406 44.9 33.4406 45.6C34.1406 46.9 34.8406 48.2 35.6406 49.5C37.1406 52 38.8406 54.3 40.7406 56.4C41.7406 57.5 42.7406 58.6 43.7406 59.5C44.7406 60.4 45.9406 61.3 47.1406 62.1C48.2406 62.8 49.5406 63.4 50.8406 63.9C51.5406 64.1 52.1406 64.3 52.7406 64.4C53.2406 64.5 53.7406 64.6 54.5406 64.6C54.7406 64.6 54.9406 64.6 55.0406 64.6Z" fill="#FF8988" />
                        <path d="M17.5406 76.6998H17.7406C18.7406 76.6998 19.8406 76.4998 20.9406 76.1998C21.8406 75.8998 22.7406 75.4998 23.6406 75.0998C24.4406 74.6998 25.1406 74.1998 25.8406 73.4998C26.4406 72.9998 27.0406 72.2998 27.6406 71.5998C28.6406 70.2998 29.4406 68.7998 30.1406 66.8998C30.7406 65.3998 31.1406 63.5998 31.3406 61.4998C31.7406 57.9998 31.5406 54.1998 30.8406 50.0998C30.3406 47.5998 29.7406 45.1998 28.9406 42.9998V42.8998C28.9406 42.7998 28.9406 42.6998 28.8406 42.5998C28.7406 42.3998 28.5406 42.2998 28.2406 42.2998C28.1406 42.2998 28.0406 42.2998 27.9406 42.3998C27.3406 42.6998 26.8406 43.0998 26.3406 43.3998L26.0406 43.4998C25.4406 43.9998 24.7406 44.3998 24.1406 44.8998C23.0406 45.7998 21.8406 46.6998 20.7406 47.7998C18.5406 49.6998 16.6406 51.7998 14.8406 53.9998C13.9406 55.1998 13.0406 56.3998 12.3406 57.4998C11.6406 58.6998 10.9406 59.9998 10.4406 61.2998C9.94062 62.5998 9.54062 63.8998 9.34062 65.2998C9.24062 65.9998 9.14062 66.5998 9.14062 67.2998C9.14062 67.7998 9.14063 68.3998 9.24063 69.0998C9.54063 71.1998 10.5406 73.1998 11.9406 74.5998C12.6406 75.2998 13.5406 75.7998 14.4406 76.1998C15.4406 76.4998 16.4406 76.6998 17.5406 76.6998Z" fill="#FF8988" />
                        <path d="M29.0391 35.4C29.2391 35.4 29.4391 35.3 29.5391 35.1C29.6391 35 29.6391 34.9 29.6391 34.8C30.7391 32.7 31.6391 30.4 32.4391 27.9C33.6391 24 34.2391 20.2 34.3391 16.7C34.3391 14.6 34.1391 12.8 33.8391 11.2C33.4391 9.3 32.7391 7.7 31.9391 6.3C31.4391 5.5 30.9391 4.8 30.3391 4.2C29.7391 3.5 29.0391 2.9 28.3391 2.4C27.5391 1.8 26.7391 1.3 25.8391 0.9C24.7391 0.4 23.7391 0.1 22.7391 0H22.5391C22.2391 0 21.9391 0 21.6391 0C20.9391 0 20.2391 0.1 19.5391 0.3C18.5391 0.6 17.6391 1 16.8391 1.6C15.2391 2.8 14.0391 4.6 13.5391 6.7C13.3391 7.4 13.2391 8 13.1391 8.5C13.0391 9.1 13.0391 9.8 13.0391 10.5C13.0391 11.9 13.2391 13.2 13.6391 14.6C14.0391 16 14.5391 17.3 15.0391 18.6C15.6391 19.8 16.3391 21.1 17.0391 22.4C18.5391 24.8 20.2391 27.1 22.1391 29.3C23.1391 30.4 24.1391 31.5 25.1391 32.6C25.7391 33.2 26.2391 33.7 26.8391 34.2L27.0391 34.4C27.4391 34.8 27.9391 35.2 28.5391 35.6C28.7391 35.3 28.8391 35.4 29.0391 35.4Z" fill="#FF8988" />
                        <path d="M4.5375 46.2C5.2375 46.2 6.0375 46.2 6.7375 46.1C8.1375 46 9.5375 45.7 10.9375 45.4C13.6375 44.8 16.4375 44 19.1375 42.9C20.5375 42.3 21.9375 41.8 23.2375 41.1C23.9375 40.8 24.6375 40.4 25.3375 40L25.5375 39.9C26.1375 39.6 26.7375 39.3 27.1375 38.9C27.2375 38.8 27.3375 38.7 27.3375 38.6C27.4375 38.4 27.4375 38.1 27.3375 37.9C27.2375 37.8 27.2375 37.7 27.1375 37.7C25.5375 35.9 23.6375 34.3 21.6375 32.8C18.3375 30.3 14.9375 28.5 11.6375 27.3C9.6375 26.6 7.9375 26.1 6.2375 25.9C5.4375 25.8 4.6375 25.8 3.9375 25.8C2.9375 25.8 1.9375 25.9 0.9375 26.1C-0.0625 26.3 -0.8625 26.5 -1.5625 26.9C-2.4625 27.3 -3.2625 27.7 -3.9625 28.2C-4.7625 28.7 -5.4625 29.4 -6.1625 30.1C-6.9625 30.9 -7.5625 31.8 -8.0625 32.7L-8.1625 32.9C-8.6625 33.9 -8.8625 34.9 -8.9625 35.8C-9.0625 36.9 -8.9625 37.9 -8.6625 38.8C-8.0625 40.7 -6.7625 42.5 -4.9625 43.7C-4.3625 44.1 -3.8625 44.4 -3.3625 44.6C-2.7625 44.9 -2.1625 45.1 -1.5625 45.3C-0.2625 45.7 1.1375 46 2.4375 46.1C3.1375 46.2 3.8375 46.2 4.5375 46.2Z" fill="#FF8988" />
                        <path d="M37.6391 37.6H37.9391C39.2391 37.6 40.6391 37.5 42.1391 37.4C45.0391 37.2 47.9391 36.8 50.6391 36.1C52.1391 35.8 53.4391 35.4 54.7391 34.9C56.0391 34.4 57.3391 33.8 58.5391 33.1C59.7391 32.4 60.8391 31.6 61.8391 30.7C62.3391 30.2 62.7391 29.7 63.1391 29.3C63.4391 28.9 63.8391 28.4 64.1391 27.8C65.2391 26 65.6391 23.8 65.3391 21.8C65.2391 20.8 64.8391 19.9 64.3391 19C63.8391 18.2 63.2391 17.4 62.3391 16.7L62.1391 16.6C61.3391 16 60.4391 15.5 59.3391 15C58.4391 14.7 57.5391 14.4 56.5391 14.2C55.8391 14.1 55.2391 14 54.5391 14C54.3391 14 54.1391 14 53.8391 14C53.0391 14 52.1391 14.2 51.2391 14.4C49.6391 14.8 48.0391 15.5 46.4391 16.5C45.0391 17.4 43.6391 18.5 42.1391 20C39.6391 22.5 37.4391 25.6 35.5391 29.3C34.3391 31.5 33.3391 33.8 32.6391 36V36.1C32.5391 36.2 32.5391 36.3 32.5391 36.4C32.5391 36.6 32.6391 36.9 32.8391 37C32.9391 37.1 33.0391 37.1 33.1391 37.1C33.7391 37.2 34.3391 37.3 34.9391 37.3H35.2391C36.0391 37.5 36.8391 37.6 37.6391 37.6Z" fill="#FF8988" />
                    </svg>
                </div>
            </div>
            <div className={styles.content}>
                <motion.div custom={3} variants={allAnim} className={styles.desc} >
                    <h1>Королева Поп</h1>
                    <p>2023 для меня стал очень насыщенным, ярким, полный воспоминаний во многом благодаря тебе. В начале 2023 мы начали с тобой общаться и я не на секунду не сомнивался "а надо ли мне это?". Наш первый разговор в жизни был про динозавров, как сейчас помню и он был капец каким интересным. Ань, ты мне подарила кучу эмоций и воспоминаний и я благодарен тебе за это)))</p>
                </motion.div>
                <motion.div custom={2} variants={allAnim} className={styles.personal} id="2">
                    <div className={styles.lep1}></div>
                    <div className={styles.lep2}>
                        <img src="/images/anya-slider.png" alt="" />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default AnyaHero;