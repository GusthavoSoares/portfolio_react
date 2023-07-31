import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
import links from './link.json';

const ativado = `${styles.menu__link} ${styles.menu__link__ativo}` 
const desativado =  `${styles.menu__link}`

const Menu = () => {
    return (
        <header className={styles.menu}>
            <nav className={styles.menu__navegacao}>
           {links.map((link)=>{
            return <NavLink to={link.path} key={link.id} className={({isActive})=> isActive ? ativado : desativado}>{link.titulo}</NavLink>
           })}
            </nav>
        </header>
    )
}

export default Menu;