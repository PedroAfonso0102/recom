import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import styles from './Page.module.css';

const Contato = () => {
  return (
    <Layout>
      <div className={styles.location}>
        <div className={styles.whereCenter}>
          Você está em: <Link to="/">Home</Link> &gt; Contato
        </div>
      </div>

      <div className={styles.centerData}>
        <ul className={styles.menuLateral}>
          <li className={`${styles.produto} ${styles.first}`}><Link to="/o-que-e-metal-duro">O que é Metal Duro?</Link></li>
          <li className={styles.produto}><Link to="/sugestoes-de-utilizacao">Sugestões de Utilização</Link></li>
          <li className={styles.produto}><Link to="/seguranca">Segurança nas Ferramentas</Link></li>
          <li className={styles.produto}><Link to="/torneamento">Torneamento</Link></li>
          <li className={styles.produto}><Link to="/fresamento">Fresamento</Link></li>
          <li className={styles.produto}><Link to="/furacao">Furação</Link></li>
          <li className={styles.produto}><Link to="/videos">Vídeos</Link></li>
        </ul>

        <div className={styles.textBox}>
          <div className={styles.mainProductTitle}>Contato</div>
          <p className={styles.just}>
            Solicite um orçamento ou tire suas dúvidas entrando em contato conosco.
          </p>
          <div style={{ marginTop: '20px' }}>
            <form className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label>Nome:</label>
                <input type="text" className={styles.inputField} />
              </div>
              <div className={styles.formGroup}>
                <label>E-mail:</label>
                <input type="email" className={styles.inputField} />
              </div>
              <div className={styles.formGroup}>
                <label>Telefone:</label>
                <input type="text" className={styles.inputField} />
              </div>
              <div className={styles.formGroup}>
                <label>Mensagem:</label>
                <textarea rows="5" className={styles.textareaField}></textarea>
              </div>
              <button type="submit" className={styles.submitBtn}>Enviar</button>
            </form>
          </div>
        </div>
        <div className={styles.clear}></div>
      </div>
    </Layout>
  );
};

export default Contato;