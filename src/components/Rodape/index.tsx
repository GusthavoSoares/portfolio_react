import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import styles from './Rodape.module.scss'
const Rodape = ()=>{
    return (
        <footer className={styles.rodape}>
            <div className={styles.rodape__icones}>
            <a href="https://www.linkedin.com/in/gusthavo-soares-74b5a4224/" target="_blank"><AiFillLinkedin/></a>
            <a href="https://github.com/GusthavoSoares" target="_blank"><AiFillGithub/></a>
            </div>
            <div className={styles.rodape__texto}>
            <h2>Desenvolvido por Gusthavo Soares</h2>
            </div>
        </footer>
    )
}

export default Rodape;