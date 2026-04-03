import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';


const Contato = () => {
  return (
    <Layout>
      <div className="text-sm text-muted-text py-2 border-b border-border-light mb-4 px-4">
        <div className="w-full max-w-5xl mx-auto">
          Você está em: <Link to="/">Home</Link> &gt; Contato
        </div>
      </div>
      
      <div className="w-full max-w-5xl mx-auto px-4 pb-6 flex flex-col md:flex-row justify-center gap-8 items-start">
        <div className="flex-1 min-w-0 w-full" style={{ width: '100%' }}>
          <div className="text-2xl md:text-3xl color-accent-blue border-b-2 border-border-light pb-2 mb-4 font-bold text-accent-blue">Contato</div>
          
          <div className="flex gap-10 flex-wrap" style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <h3 className="text-xl text-accent-blue border-b border-border-light pb-1 my-6 mt-8 font-bold">Solicite um Orçamento</h3>
              <p className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base" style={{ marginBottom: '20px' }}>
                Utilize o formulário abaixo para orçamentos técnicos ou dúvidas.
              </p>
              
              <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Nome *</label>
                  <input type="text" required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>E-mail *</label>
                    <input type="email" required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Telefone</label>
                    <input type="tel" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Código(s) do(s) produto(s) desejado(s)</label>
                  <input type="text" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Assunto *</label>
                  <input type="text" required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Comentários *</label>
                  <textarea required rows="5" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}></textarea>
                </div>
                <p style={{ fontSize: '11px', color: '#666' }}>* Campos obrigatórios</p>
                <button type="submit" style={{ padding: '12px 24px', backgroundColor: '#cc0000', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', alignSelf: 'flex-start' }}>
                  Enviar Mensagem
                </button>
              </form>
            </div>

            <div style={{ flex: '0.8', minWidth: '300px' }}>
              <div style={{ backgroundColor: '#f4f4f4', padding: '25px', borderRadius: '8px', marginBottom: '25px' }}>
                <h3 className="text-xl text-accent-blue border-b border-border-light pb-1 my-6 mt-8 font-bold" style={{ marginTop: 0 }}>Informações de Contato</h3>
                <p className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base">
                  <strong>Endereço:</strong><br />
                  Rua Alferes João José, 350<br />
                  Jardim Chapadão - Campinas, SP<br />
                  CEP 13070-188
                </p>
                <p className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base" style={{ marginTop: '15px' }}>
                  <strong>Telefones:</strong><br />
                  (19) 3233-2224 (PABX)<br />
                  (19) 3232-6935
                </p>
                <p className="text-justify [text-justify:inter-word] hyphens-auto leading-relaxed text-secondary-text mb-4 text-base" style={{ marginTop: '15px' }}>
                  <strong>E-mail:</strong><br />
                  <a href="mailto:vendas.recom@montelione.com.br" style={{ color: '#cc0000', textDecoration: 'none' }}>vendas.recom@montelione.com.br</a>
                </p>
              </div>

              <h3 className="text-xl text-accent-blue border-b border-border-light pb-1 my-6 mt-8 font-bold">Onde Estamos</h3>
              <div style={{ width: '100%', height: '250px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <iframe 
                  src="https://www.google.com/maps?q=Rua+Alferes+João+José,+350,+Campinas,+SP&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  title="RECOM Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="clear-both"></div>
      </div>
    </Layout>
  );
};

export default Contato;