import Slider from "~/components/Slider";
import styles from './Inicio.module.scss';
import imagemPerfil from '~/assets/perfil.jpeg';


const Inicio = () => {
    return(
        <>
        <section className={styles.secao__slider}>
            <Slider/>
        </section>
        <section className={styles.informacao}>
            <aside className={styles.informacao__esquerda}>
            <h2>Programar é mais do que automatizar</h2>
            <article className={styles.informacao__esquerda__texto}>
            <p>Me chamo Gusthavo Soares e para mim, programar é muito mais do que automatizar tarefas.</p>
            <p>Quer entender mais sobre o porquê disso? Clique abaixo e descubra!</p>
            </article>
            </aside>
            <figure className={styles.informacao__direita}>
                <img alt="imagem de perfil de Gusthavo Soares" src={imagemPerfil}/>
            </figure>
        </section>
        </>

    )
}

export default Inicio;