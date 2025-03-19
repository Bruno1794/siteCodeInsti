import styles from './sectionOne.module.css'
import Image from "next/image";
export default function SectionOne() {
    return (
        <section className="container" id="sobre">

            <div className={styles.grid}>
                <div className={styles.img}>
                    <Image src="/img/img01.png" alt="" width={511} height={388} />
                </div>
                <div className={styles.sobre}>
                    <h1>Sobre</h1>
                    <p>
                        A Code a Code é uma empresa especializada no desenvolvimento de software e criação de websites,
                        oferecendo soluções digitais personalizadas para diferentes segmentos do mercado. Com foco em
                        tecnologia, inovação e eficiência, nossa missão é transformar ideias em produtos digitais de alta
                        qualidade, sempre alinhados às necessidades dos nossos clientes.
                    </p> <br/>

                    <p>
                        Nosso time de especialistas utiliza tecnologias modernas para garantir desempenho, segurança e
                        usabilidade em cada projeto. Seja para pequenas empresas, startups ou grandes corporações,
                        desenvolvemos sistemas intuitivos, responsivos e escaláveis que impulsionam o crescimento e a
                        presença digital de nossos clientes.
                    </p><br/>

                    <p>
                        Na Code a Code, acreditamos que cada linha de código conta uma história e cada projeto é uma
                        oportunidade de inovar. Se você busca soluções tecnológicas eficientes e personalizadas, estamos prontos para ajudar!
                    </p><br/>

                    <a href="http://wa.me/554498108893" target="_blank" className="btn">
                        <Image src="/img/contato.png" alt="" width={32} height={32} />
                        Fale conosco
                    </a>
                </div>
            </div>

        </section>
    )
}