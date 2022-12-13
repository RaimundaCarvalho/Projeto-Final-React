import {Header} from '../components/Header'
import imagemPortfolio from '../assets/img-portfolio.svg'
import imgHtml from '../assets/img-site-html.png'
import imgSite from '../assets/img-todolist.png'
import styles from '../styles/pages/portfolio.module.css'


export function Portfolio(){
    return(
        <>
        <Header text= "Meus projetos" image={imagemPortfolio}/>
        <div className={styles.homeContainer}>
        <img src={imgHtml} alt="portfolio" width="350" height="350"/>
            <button className={styles.menuButton} type="button"><a href="https://portfolio-raimunda-trindade.netlify.app/" className={styles.btnButton} target="_blank">Clique aqui</a></button>
        
         <img src={imgSite} alt="site html" width="350" height="350"/> 
            <button className={styles.todoButton} type="button"><a href="https://todolist-raimundacarvalho.netlify.app/" className={styles.btn2Button} target="_blank">Clique aqui</a></button>
        
        </div>
        </>
    )
}

