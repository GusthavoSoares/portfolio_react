import styles from './Slider.module.scss'

import imagem from '~/assets/cartorio1.jpg';
const Slider = () => {
    return (
        <div className={styles.slider__container}>
            <img alt="Imagem do cartório" src={imagem}></img>
        </div>
    )
}


export default Slider;