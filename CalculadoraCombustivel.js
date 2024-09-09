import React, { useState } from 'react';
import combustivelImage from './assets/combustivel1.png'; 
const CalculadoraCombustivel = () => {
  const [precoAlcool, setPrecoAlcool] = useState('');
  const [precoGasolina, setPrecoGasolina] = useState('');
  const [recomendacao, setRecomendacao] = useState('');

  const calcularRecomendacao = () => {
    const pa = parseFloat(precoAlcool);
    const pg = parseFloat(precoGasolina);

    if (isNaN(pa) || isNaN(pg) || pg <= 0) {
      alert('Por Favor, Insira Valores Válidos.');
      return;
    }

    const resultado = pa / pg;
    if (resultado < 0.7) {
      setRecomendacao('É mais Vantajoso Abastecer com Álcool.');
    } else {
      setRecomendacao('É mais Vantajoso Abastecer com Gasolina.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
      <div style={{ marginBottom: '20px' }}>
        <img
          src={combustivelImage}
          alt="Calculadora de Combustível"
          style={{ width: '100px', height: 'auto' }}
        />
      </div>
      <h1>Calculadora de Combustível</h1>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Preço do Álcool (R$):
          <input
            type="number"
            step="0.01"
            value={precoAlcool}
            onChange={(e) => setPrecoAlcool(e.target.value)}
          />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Preço da Gasolina (R$):
          <input
            type="number"
            step="0.01"
            value={precoGasolina}
            onChange={(e) => setPrecoGasolina(e.target.value)}
          />
        </label>
      </div>
      <button onClick={calcularRecomendacao}>Calcular Recomendação</button>
      {recomendacao && (
        <div style={{ marginTop: '20px' }}>
          <h2>{recomendacao}</h2>
        </div>
      )}
    </div>
  );
};

export default CalculadoraCombustivel;
