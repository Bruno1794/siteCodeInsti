import styles from './sectionThree.module.css'
import Image from "next/image";

export default function SectionThree() {
    return (
        <section className="sectionThree" id="contato">

            <div className="container">
                <div className={styles.gridContato}>
                    <div className={styles.blocoImg}>

                        <Image src="/img/logosemfundo.png" alt="" width={200} height={200}/>
                    </div>
                    <div className={styles.blocoContato}>
                        <h1>Contato</h1>
                        <a href="http://wa.me/554498108893" target="_blank">
                            <p>
                                <Image src="/img/whatsContato.png" alt="" width={24} height={24}/>
                                Whatsapp
                            </p>

                            <p className={styles.info}>(44) 9810-8893</p>
                        </a>
                        <p>
                            <Image src="/img/email.png" alt="" width={24} height={24}/>
                            E-mail
                        </p>
                        <p className={styles.info}>contato@codeacode.com.br</p>

                        <p>
                            <Image src="/img/cidade.png" alt="" width={24} height={24}/>
                            Cidade
                        </p>
                        <p className={styles.info}>Terra Rica - PR</p>

                        <p>
                            <Image src="/img/local.png" alt="" width={24} height={24}/>
                            Endereço
                        </p>
                        <p className={styles.info}>Rua Acre 1247 - Centro</p>


                    </div>
                    <div className={styles.blocoContato}>
                        <h1>Rede Social</h1>
                        <div className={styles.redeSocial}>
                            <Image src="/img/facebook.png" alt="" width={32} height={32}/>
                            <a href="https://www.instagram.com/codeacodetr/" target="_blank">
                                <Image src="/img/instagram.png" alt="" width={32} height={32}/>
                            </a>
                            <a href="http://wa.me/554498108893" target="_blank">
                                <Image src="/img/whatsapp.png" alt="" width={32} height={32}/>
                            </a>

                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}