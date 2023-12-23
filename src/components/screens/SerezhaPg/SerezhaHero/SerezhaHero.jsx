import { useEffect } from "react";
import styles from "./SerezhaHero.module.css"
import { motion } from "framer-motion"


const SerezhaHero = () => {

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

            <div className={styles.content}>
                <motion.div custom={3} variants={allAnim} className={styles.desc} >
                    <h1>Серёжечка, мой дорогой</h1>
                    <p>В 2023 мы общались не достаточно много, что конечно же не скажешь про 2022 или 2021, но за то о чем разговаривали😏. Нашей дружбе уже более... более черт я даже не помню в каком году мы познакомились...) И я очень рад что когда-то нас познакомил диман, пока мы с ним играли в майнкрафт. Листай ниже</p>
                </motion.div>
                <motion.div custom={2} variants={allAnim} className={styles.personal} id="2">
                    <div className={styles.lep1}></div>
                    <div className={styles.lep2}>
                        <img src="/images/serezha-slider.png" alt="" />
                    </div>
                </motion.div>
            </div>
            <div className={styles.particles}>
                <canvas id="particle" className={styles.canvas}></canvas>
            </div>
        </motion.div>
    );
}

export default SerezhaHero;