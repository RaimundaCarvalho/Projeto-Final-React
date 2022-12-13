import {Header} from '../components/Header'
import imagemSobre from '../assets/img-sobre.svg'
import imgPerfil from '../assets/img-perfil.png' 
import imgGostos from '../assets/img-gostos.png'
import styles from '../styles/pages/sobre.module.css'

export function Sobre( ){
    return(
        <>
        <Header text= "Quem Sou?" image={imagemSobre}/>
        <div className= {styles.homeContainer}>
            <img src={imgPerfil} alt="perfil" width="500" height="500"/>
    
            <img src= { imgGostos } alt="gostos" width="500" heigth="500"/>

        </div>
    
    
    
            
            
        
    
    
    
        
        </>
    
            

    
    )
}
   