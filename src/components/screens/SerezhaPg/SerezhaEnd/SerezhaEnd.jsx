import styles from "./SerezhaEnd.module.css"

const SerezhaEnd = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.desc}>
                    <h1>Сереж, Спасибо тебе</h1>
                    <p>Спасибо тебе за все воспоминания которые ты мне подарил, за те все моменты когда мы рофлили, играли в бравл старс, апали 25 ранги, гуляли, работали, выполняли 100к шагов. С новай годай, дружок!</p>
                </div>
                <div className={styles.personal}>
                    <img src="/images/sergift/su1.jpg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default SerezhaEnd;