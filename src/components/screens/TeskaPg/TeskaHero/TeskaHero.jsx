import { useEffect } from "react";
import styles from "./TeskaHero.module.css"
import { motion } from "framer-motion"

const TeskaHero = () => {
    useEffect(() => {
        var width, height, target, canvas, ctx, circles;
        particleInit();


        function particleInit() {
            width = window.innerWidth;
            height = window.innerHeight;
            target = {
                x: 0,
                y: height
            };
            canvas = document.getElementById('particle');
            canvas.width = width;
            canvas.height = height;
            ctx = canvas.getContext('2d');

            circles = [];
            for (var x = 0; x < width * 0.25; x++) {
                var c = new particleCircle();
                circles.push(c);
            }
            particleAnimate();
        }

        function particleAnimate() {
            ctx.clearRect(0, 0, width, height);
            for (var i in circles) {
                circles[i].draw();
            }
            requestAnimationFrame(particleAnimate);
        }

        function particleCircle() {
            var _this = this;

            (function () {
                _this.pos = {};
                init();
            })();

            function init() {
                _this.pos.x = Math.random() * width;
                _this.pos.y = height + Math.random() * 700;
                _this.alpha = 0.2 + Math.random() * 0.2;
                _this.scale = 0.01 + Math.random();
                _this.velocity = Math.random() * 5;
            }

            _this.draw = function () {
                if (_this.alpha <= 0) {
                    init();
                }
                _this.pos.y -= _this.velocity;
                _this.alpha -= 0.0005;
                ctx.beginPath();
                ctx.arc(_this.pos.x, _this.pos.y, _this.scale * 10, 0, 2 * Math.PI, false);
                ctx.fillStyle = 'rgba(200,200,240,' + _this.alpha + ')';
                ctx.fill();
            };
        }
    }, [])

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
            <div className={styles.particles}>
                <canvas id="particle1" className={styles.canvas}></canvas>
            </div>
            <div className={styles.content}>
                <motion.div custom={3} variants={allAnim} className={styles.desc} >
                    <h1>Дорогой Теска</h1>
                    <p>Мы с тобой знакомы уже почти 9 лет (ебануться просто). И в 2023 мы стали еще ближе, мы проводили много времени в дс - играя в пабг, на улице - гуляя и в переписке - общаясь. 23 год для тебя стал очень трудным, но и так же полным перемен и открытий в себе. Я подготовил немного фоток ибо их реально мало. Надеюсь в 24-м году их будет гораздо больше))</p>
                </motion.div>
                <motion.div custom={2} variants={allAnim} className={styles.personal} >
                    <img src="/images/teska/utopiaLogo.png" alt="" />
                    <img src="/images/teska-slider.png" alt="" />
                </motion.div>
            </div>
            <div className={styles.particles}>
                <canvas id="particle" className={styles.canvas}></canvas>
            </div>
        </motion.div>
    );
}

export default TeskaHero;