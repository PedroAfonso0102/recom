import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import styles from './Page.module.css';

import kougImg from '../assets/images/koug.png';
import makeeImg from '../assets/images/makee.png';
import koudoeImg from '../assets/images/koudoe.png';
import kirehaeImg from '../assets/images/kirehae.png';

const Produtos = () => {
  return (
    <Layout>
      <div className={styles.location}>
        <div className={styles.whereCenter}>
          Você está em: <Link to="/">Home</Link> &gt; O que é Metal Duro?
        </div>
      </div>

      <div className={styles.centerData}>
        <ul className={styles.menuLateral}>
          <li className={`${styles.produto} ${styles.first}`}><Link to="/produtos">O que é Metal Duro?</Link></li>
          <li className={styles.produto}><Link to="/sugestoes-de-utilizacao">Sugestões de Utilização</Link></li>
          <li className={styles.produto}><Link to="/seguranca">Segurança nas Ferramentas</Link></li>
          <li className={styles.produto}><Link to="/torneamento">Torneamento</Link></li>
          <li className={styles.produto}><Link to="/fresamento">Fresamento</Link></li>
          <li className={styles.produto}><Link to="/furacao">Furação</Link></li>
          <li className={styles.produto}><Link to="/videos">Vídeos</Link></li>
        </ul>

        <div className={styles.textBox}>
          <div className={styles.mainProductTitle}>Introdução</div>
          <p className={styles.just}>
            <img src={kougImg} align="right" className={styles.justTextLeft} alt="Koug" />
            Estamos rodeados por muitos produtos metálicos em nosso dia-a-dia. Você sabe como esses produtos
            são fabricados? Há muitas maneiras de usinar metais, mas o método mais utilizado é o corte.
            Aqui vamos aprender sobre ferramentas de corte e processos de corte. O que queremos dizer
            com "ferramentas de corte"?<br/><br/>

            Primeiro, vejamos alguns exemplos de ferramentas de corte presentes em nosso dia-a-dia.
            Facas e raladores na cozinha, tesouras e apontadores nos escritórios e serrotes e plainas na
            garagem são ferramentas de corte.<br/><br/>

            Estas ferramentas de corte possuem uma característica comum que é a de mudar o formato de coisas
            pelo corte e/ou pela produção de cavacos.<br/><br/>

            Como você viu até agora, ferramentas de corte são ferramentas que cortam coisas para que adquiram
            um formato desejado. Ferramentas de corte em nosso dia-a-dia cortam frutas, vegetais e madeira,
            mas as ferramentas de corte produzidas pela Mitsubishi Materiais cortam materiais mais duros,
            como aço.<br/><br/>

            Agora, vejamos as ferramentas de corte para usinar aço, o principal material industrial no mundo.
          </p>
          <div className={styles.clear}></div>

          <h2 className={styles.productTitle}>Processo de Fabricação de Ferramentas de Metal Duro</h2>
          <p className={styles.just}>
            <img src={makeeImg} align="right" className={styles.justTextLeft} alt="Make" />
            Vamos ver o processo de fabricação de metal duro. Primeiro, misture carboneto de tungstênio
            com cobalto para chegar ao põ que é classificado como matéria-prima. <br/><br/>
            A mistura granulada é colocada num molde côncavo e é prensada. Isso fornece uma consistência
            moderada como a do giz. <br/><br/>
            Depois, o compacto prensado é colocado num forno de sinterização e é aquecido a uma temperatura
            de aproximadamente 1400ºC, resultando no metal duro. Depois de sinterizado, o volume diminui
            consideravelmente. <br/><br/>
            <br/>
            <img src={koudoeImg} align="left" className={styles.justTextRight} alt="Koudoe" />
            Além disso, a dureza do metal duro está entre a dureza do diamante e da safira e o seu peso é
            aproximadamente duas vezes o aço. Então, como cortamos esse metal tão duro?
          </p>

          <div className={styles.clear}></div>

          <h2 className={styles.productTitle}>O que é Usinagem?</h2>
          <p className={styles.just}>
            <img src={kirehaeImg} align="right" className={styles.justTextLeft} alt="Kireha" />
            A figura à direita mostra a condição de uma aresta de corte durante a usinagem.
            A aresta de corte corta o material e produz cavacos. A temperatura na ponta da aresta de
            corte chega a 800ºC devido ao impacto e à fricção. As classes de metal duro que suportam
            esse calor e a força de corte são essenciais para uma boa usinagem.
          </p>
          <div className={styles.clear}></div>
        </div>
        <div className={styles.clear}></div>
      </div>
    </Layout>
  );
};

export default Produtos;