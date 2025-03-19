import styles from './head.module.css'


export default function HeadPage() {
    return (
        <header>
            <div className={styles.subHeand}>
                <p><a href="http://wa.me/554498108893" target="_blank">(44) 9810-8893 </a>/ contato@codeacode.com.br</p>

            </div>

            <div className="container">
                <div className={styles.head}>

                    <div className={styles.logo}>
                        <h1>CODE A CODE</h1>
                        <p>desenvolvimento de sistemas</p>
                    </div>

                    <div>
                        <ul>
                            <li><a href="#sobre">Sobre</a></li>
                            <li><a href="#servico">Serviço</a></li>
                            <li><a href="#contato">Contato</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}