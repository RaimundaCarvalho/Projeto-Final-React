import {Alien,BracketsCurly,AddressBook} from 'phosphor-react'
import {Header} from '../components/Header'

import imagemSite from '../assets/imagem-site.svg'

import styles from '../styles/pages/inicio.module.css'

export function Inicio(){
    return(
        <>
        <Header text="Meu Site Pessoal" image={imagemSite}/>
        <div className={styles.homeContainer}>
        <div className={styles.cardContainer}>
            <Alien size={150} color='#686AAc'weigth="thin"/>
            <h2 className={styles.cardTitle}>Vida</h2>
            <p className={styles.cardText}>Contar sobre você, formação, etc.</p>
        </div>
        <div className={styles.cardContainer}>
            <BracketsCurly size={150} color='#686AAc'weigth="thin"/>
            <h2 className={styles.cardTitle}>Código</h2>
            <p className={styles.cardText}>Meu portfólio</p>
        </div>
        <div className={styles.cardContainer}>
            <AddressBook size={150} color='#686AAc' weigth="thin"/>
            <h2 className={styles.cardTitle}>Contato</h2>
            <p className={styles.cardText}>Entre em contato comigo</p>
        </div>

        </div>
        </>
    )
}