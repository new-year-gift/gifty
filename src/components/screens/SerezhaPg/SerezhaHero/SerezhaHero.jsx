import styles from "./SerezhaHero.module.css"

const SerezhaHero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.desc}>
                    <h1>Серёжечка, мой дорогой</h1>
                    <p>В 2023 мы общались не достаточно много, что конечно же не скажешь про 2022 или 2021, но за то о чем разговаривали😏. Нашей дружбе уже более... более черт я даже не помню в каком году мы познакомились...) И я очень рад что когда-то нас познакомил диман, пока мы с ним играли в майнкрафт. Листай ниже</p>
                </div>
                <div className={styles.personal}>
                    <div className={styles.lep1}></div>
                    <div className={styles.lep2}>
                        <img src="/images/serezha-slider.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SerezhaHero;