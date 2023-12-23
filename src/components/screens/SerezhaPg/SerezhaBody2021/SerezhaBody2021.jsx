import styles from "./SerezhaBody2021.module.css"

const SerezhaBody2021 = () => {
    const imgUrl = [
        {
            id: 1,
            url: "/images/sergift/2021/1.jpg"
        },
        {
            id: 2,
            url: "/images/sergift/2021/2.jpg"
        },
        {
            id: 3,
            url: "/images/sergift/2021/3.jpg"
        },
    ]
    return (
        <div className={styles.container}>
            <video src="/images/sergift/2021/telega2.mp4" autoPlay loop muted className={styles.back}></video>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h1>2021</h1>
                    <p>21-ый это пиздец... Пересматривать видосы того времени это смешно и кринж одновременно + 1-я работа все дела</p>
                </div>
                <div className={styles.twentyone}>
                    <div className={styles.galleryYear2021}>
                        {imgUrl.map(url => <img key={url.id} src={url.url} />)}
                    </div>
                    <h1>А вспомни как мы играли в броул страс</h1>
                    <img src="/images/sergift/2021/4.jpg" alt="" className={styles.broul}/>
                </div>
            </div>

        </div>
    );
}

export default SerezhaBody2021;