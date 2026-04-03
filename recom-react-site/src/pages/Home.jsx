import React from 'react';
import Layout from '../components/Layout';
import styles from './Home.module.css';

import logoMitsubishi from '../assets/images/logo_mitsubishi.png';
import logo7leaders from '../assets/images/logo_7leaders.png';
import logoBtfixo from '../assets/images/logo_btfixo.png';
import logoKifix from '../assets/images/logo_kifix.png';

// Slider images
import linhaMitsu from '../assets/images/linha_mitsu.jpg';
import torneamento1 from '../assets/images/torneamento1.jpg';
import torneamento2 from '../assets/images/torneamento2.jpg';
import fresamento1 from '../assets/images/fresamento1.jpg';
import fresa1 from '../assets/images/fresa1.jpg';
import fresa2 from '../assets/images/fresa2.jpg';
import furacao1 from '../assets/images/furacao1.jpg';
import furacao2 from '../assets/images/furacao2.jpg';
import linha7leaders from '../assets/images/linha_7leaders.jpg';
import prods7leaders from '../assets/images/prods_7leaders.jpg';
import linhaBtfixo from '../assets/images/linha_btfixo.jpg';
import prodsBtfixo from '../assets/images/prods_btfixo.jpg';
import cones from '../assets/images/cones.jpg';
import logoMit from '../assets/images/LOGO-MIT.png';

const Home = () => {
  return (
    <Layout>
      <div className={styles.location}>
        <div className={styles.whereCenter}>
          Você está em: <a href="/">Home</a>
        </div>
      </div>

      <div className={`${styles.centerData} ${styles.brandsSection}`}>
        <div className={styles.homeBox1}>
          <div className={styles.homeTier}>
            <h3>Fornecedores</h3>
            <ul className={styles.brands}>
              <li style={{ marginLeft: '20px' }}>
                <a href="/catalogo-mitsubishi"><img src={logoMitsubishi} style={{ paddingTop: '11px' }} alt="Mitsubishi" /></a>
              </li>
              <li>
                <a href="/catalogo-7leaders"><img src={logo7leaders} style={{ paddingTop: '10px' }} alt="7Leaders" /></a>
              </li>
              <li>
                <a href="/btfixo"><img src={logoBtfixo} alt="BT Fixo" /></a>
              </li>
              <li>
                <a href="/catalogo-kifix"><img src={logoKifix} style={{ paddingTop: '5px' }} alt="Kifix" /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.clear}></div>
      </div>

      <div className={styles.clear}></div>

      <div className={`${styles.sliderWrapper} ${styles.themeDefault}`}>
        <div className={styles.ribbon}></div>
        <div id="slider" className={styles.nivoSlider}>
            <img src={linhaMitsu} alt="" title="Torneamento" />
            <img src={torneamento1} alt="" title="Torneamento" />
            <img src={torneamento2} alt="" title="Torneamento" />
            <img src={fresamento1} alt="" title="Fresas de topo" />
            <img src={fresa1} alt="" title="Fresas" />
            <img src={fresa2} alt="" title="Fresas" />
            <img src={furacao1} alt="" title="Furação" />
            <img src={furacao2} alt="" title="Furação" />
            <img src={linha7leaders} alt="" title="Linha 7Leaders" />
            <a href="http://7leaders.com/video/video_en.html" target="_blank" rel="noopener noreferrer"><img src={prods7leaders} alt="" title="Linha 7Leaders" /></a>
            <a href="/btfixo"><img src={linhaBtfixo} alt="" title="Linha BT Fixo" /></a>
            <a href="/btfixo"><img src={prodsBtfixo} alt="" title="Linha BT Fixo" /></a>
            <img src={cones} alt="" title="Cones" />
        </div>
      </div>
      <div className={styles.wsShadow}></div>

      <div className={styles.clear}></div><br/>

      <div className={styles.centerData}>
        <div className={styles.homeBox1}>
            <div className={styles.homeTier}>
                <h3>Vídeo <div style={{ float: 'right' }}><img src={logoMit} style={{ height: '25px', marginTop: '-8px' }} alt="MIT" /></div></h3>
                <div style={{ float: 'left', width: '100%', marginBottom: '20px', textAlign: 'center' }}>
                    <video height="400" width="600" controls>
                        <source src="http://www.recommetalduro.com.br//webroot/img/VID-20200316-WA0040.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className={styles.clear}></div>
            </div>
        </div>

        <div className={styles.homeBox1}>
            <div className={styles.homeTier} style={{ marginBottom: '20px' }}>
                <h3>Novidades</h3>
                <ul className={styles.news}>
                    <li>
                        <h4>Mitsubishi traz novidades em todas as linhas</h4>
                        <a href="/novidade-linha-mitsubishi" className={styles.linkClearDgray}>Clique aqui e confira os detalhes</a>
                        <p className={styles.postDate}>Postado em: 30/09/2013 às 23:19</p>
                    </li>
                    <li>
                        <h4>Veja as fotos da FENASUCRO 2012</h4>
                        <a href="/feiras/fenasucro" className={styles.linkClearDgray}>Fotos da FENASUCRO 2012</a>
                        <p className={styles.postDate}>Postado em: 19/09/2012 às 20:49</p>
                    </li>
                    <li>
                        <h4>Confira os novos videos promocionais</h4>
                        <a href="#" className={styles.linkClearDgray}>Smart Miracle</a><br/>
                        <a href="#" className={styles.linkClearDgray}>MC6025</a>
                        <p className={styles.postDate}>Postado em: 19/09/2012 às 20:25</p>
                    </li>
                </ul>
            </div>
        </div>
        <div className={styles.clear}></div>
      </div>
    </Layout>
  );
};

export default Home;
