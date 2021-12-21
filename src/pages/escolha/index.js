import RenaSolo from '../../assets/GroupRenaSolo/Group 4.png'
import Neve from '../../assets/neve/Mask Group.png'
import Logo from '../../assets/logo/logo.png'
import Card1 from '../../assets/cards/card1.png'
import Card2 from '../../assets/cards/card2.png'
import Card3 from '../../assets/cards/card3.png'
import './style.css';



export default function Escolha(){
    return(
        <>
            {/* background */}
            
            <img src={RenaSolo} className="RenaSolo"/>
            <img src={Neve} className="Neve-escolha"/>

            {/* Conteudo site */}
            <div className="Global">
                <div className="Temas">
                    <div className="Tema-css">
                        <div className="line1"></div>
                        <div className="text-cards">
                            <h3>TEMA 01</h3>
                            <h2>CARTÃO SIMPLES</h2>
                        </div>
                        <img src={Card1} className="LogoSolo" alt="LALALA" />
                    </div>
                    <div className="Tema-css">
                        <div className="line1"></div>
                        <div className="text-cards">
                            <h3>TEMA 02</h3>
                            <h2>NOME DO TEMA</h2>
                        </div>
                        <img src={Card2} className="LogoSolo" alt="LALALA" />
                    </div>
                    <div className="Tema-css">
                        <div className="line1"></div>
                        <div className="text-cards">
                            <h3>TEMA 03</h3>
                            <h2>PAPAI NOEL AZUL</h2>
                        </div>
                        <img src={Card3} className="LogoSolo" alt="LALALA" />
                    </div>
                </div>
                <div className="Txt-apoio">
                    <p> 
                        Escolha o tema 
                        desejado ao lado.
                    </p>
                </div>
                <div className="Logo">
                    <img src={Logo} className="LogoSolo" alt="LALALA" />
                </div>
            </div>
        </>
    );
}