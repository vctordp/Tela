import { IoArrowForward } from "react-icons/io5";
import Xmas from '../../assets/xmas.jpg'
import Renas from '../../assets/groupp/Group 4.png'
import Neve from '../../assets/neve/Mask Group.png'
import Logo from '../../assets/logo/logo.png'
import './style.css';




export default function Home() {
    return(
        <>
           <img src={Renas} className="Renas"/>
           <img src={Neve} className="Neve"/>
            <div className="Content-global">
                <div className="Content-info">
                    <div className="Txt-titles">
                        <img src={Logo} className="Logo"/>
                        <h1>
                            Relembre bons<br/> momentos e envie<br/> para quem você ama.
                        </h1>
                        <h2>
                            Envie uma mensagem especial a aqueles que fizeram parte do seu ano de 2020.
                            É simples e rápido, mas simbólico.
                            Compartilhe via
                            <span className="Txt-socialRede"> WhatsApp, Instagram ou Imprima</span>
                        </h2>
                    </div>
                    <div className="Btn-arrow">
                        <div className="Arrow-content">
                            <IoArrowForward className="Arrow" size={25} color="#cd291d"/>
                        </div>
                        <div className="Txt-comeceAgora">
                            <p>Comece Agora</p>
                        </div>
                    </div>
                </div>
                <div className="Content-Box">
                    <img src={Xmas} alt="xmas"/>
                    <div className="Txt-Banner">
                        <div className="textos-box">
                            <h1>
                                Escolha um tema pré-definido e escreva o que quiser.
                            </h1>
                            <h2>
                                Temos três temas para cartões, e você pode personalizar com a mensagem que preferir.
                            </h2>
                        </div>
                        <div className="Btn-Prox">
                            <a>PRÓXIMO</a>
                        </div>
                    </div>
                </div>
            </div>
           
                </>
    )
}