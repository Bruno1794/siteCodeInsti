import styles from './sectionTwo.module.css'
import Image from "next/image";
export default function SectionTwo() {
    return (
        <section className="container" id="servico">

            <h1 className={styles.tituloServico}>Serviços</h1>

            <div className={styles.gridServicos}>

                <div className={styles.bloco}>
                    <p>sistema</p>
                    <h1>DELIVER</h1>
                </div>

                <div className={styles.bloco}>
                    <p>sistema</p>
                    <h1>FISCAL</h1>
                </div>

                <div className={styles.bloco}>
                    <p>desenvolvimento</p>
                    <h1>WEB SITE</h1>
                </div>


                <div className={styles.bloco}>
                    <p>manutenção</p>
                    <h1>WEB SITE</h1>
                </div>

                <div className={styles.bloco}>
                    <p>instalação</p>
                    <h1>SISTEMAS</h1>
                </div>

                <div className={styles.bloco}>
                    <p>automação</p>
                    <h1>WHATSAPP</h1>
                </div>

            </div>
            <p className={styles.descricao}>
                Criamos sistemas personalizados para atender às necessidades específicas do seu negócio, garantindo
                eficiência e automação de processos.
                <br/>
                <br/>
                Plataformas completas para gestão de pedidos, pagamentos e logística de entregas, otimizando a operação
                do seu estabelecimento.
                <br/>
                <br/>
                Criação de sites institucionais, blogs e lojas virtuais responsivas, garantindo uma presença digital
                forte e atrativa.
                <br/>
                <br/>
                Configuração, otimização e suporte técnico para garantir o funcionamento eficiente dos seus sistemas e
                plataformas.
                <br/>
                <br/>
                Auxiliamos empresas na escolha e implementação de soluções tecnológicas, garantindo um ambiente digital seguro e eficiente.
            </p><br/>
            <a href="http://wa.me/554498108893" target="_blank" className={`btn ${styles.btnAjuste} `}>
                <Image src="/img/contato.png" alt="" width={32} height={32} />
                Fale Conosco
            </a>



        </section>
    )
}