import styles from "./SerezhaBody2022.module.css"

const SerezhaBody2022 = () => {

    const imgUrl = [
        {
            id: 1,
            url: "/images/sergift/2022/1.jpg"
        },
        {
            id: 2,
            url: "/images/sergift/2022/2.jpg"
        },
        {
            id: 3,
            url: "/images/sergift/2022/3.jpg"
        },
        {
            id: 4,
            url: "/images/sergift/2022/4.jpg"
        },
        {
            id: 5,
            url: "/images/sergift/2022/5.jpg"
        },
        {
            id: 7,
            url: "/images/sergift/2022/7.jpg"
        },
        {
            id: 8,
            url: "/images/sergift/2022/8.jpg"
        },
        {
            id: 10,
            url: "/images/sergift/2022/10.jpg"
        },
    ]

    return (
        <div className={styles.container}>

            <div className={styles.content}>
                <div className={styles.title}>
                    <h1>2022</h1>
                    <p>В 2022 мы ебались только так</p>
                </div>
                <div className={styles.twentytwo}>
                    <div className={styles.year2022}>
                        <div className={styles.galleryYear2022}>
                            {imgUrl.map(url => <img key={url.id} src={url.url} />)}
                        </div>
                        <div className={styles.cart1}>
                            <div className={styles.desc1}>
                                <p>Ты пытался сделать предложение крапиве, но она сказала нет(</p>
                            </div>
                            <img src="/images/sergift/2022/ring.jpg" alt="" />
                        </div>
                        <div className={styles.cart2}>
                            <div className={styles.desc2}>
                                <h2>🤦‍♀️</h2>
                                <p>Искал закладки</p>
                            </div>
                            <img src="/images/sergift/2022/trubi.jpg" alt="" />
                        </div>
                        <div className={styles.cart3}>
                            <div className={styles.desc3}>
                                <h2>🤦</h2>
                                <p>И тут искал</p>
                            </div>
                            <img src="/images/sergift/2022/itut.jpg" alt="" />
                        </div>
                        
                        <div className={styles.voina}>
                        <h1 className={styles.neizm}>Но одно остаётся не изменным</h1>
                            <img src="/images/sergift/2022/voina.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default SerezhaBody2022;