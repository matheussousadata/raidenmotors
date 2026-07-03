require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Permite que o seu HTML acesse o servidor e que o servidor entenda JSON
app.use(cors());
app.use(express.json());

// Conexão com o banco de dados Neon
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Rota para receber os dados do formulário
app.post('/api/financiamento', async (req, res) => {
  try {
    const {
      veiculo_interesse, nome_completo, cpf, data_nascimento,
      telefone, whatsapp, email, estado_civil, profissao,
      empresa_atual, tempo_empresa, renda_mensal, outras_fontes_renda,
      valor_entrada, possui_veiculo_troca, cidade, estado,
      observacoes, aceita_termos
    } = req.body;

    const queryText = `
      INSERT INTO solicitacoes_financiamento (
        veiculo_interesse, nome_completo, cpf, data_nascimento,
        telefone, whatsapp, email, estado_civil, profissao,
        empresa_atual, tempo_empresa, renda_mensal, outras_fontes_renda,
        valor_entrada, possui_veiculo_troca, cidade, estado,
        observacoes, aceita_termos
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)
      RETURNING id;
    `;

    const values = [
      veiculo_interesse, nome_completo, cpf, data_nascimento,
      telefone, whatsapp, email, estado_civil, profissao,
      empresa_atual, tempo_empresa, renda_mensal, outras_fontes_renda,
      valor_entrada, possui_veiculo_troca, cidade, estado,
      observacoes, aceita_termos
    ];

    const result = await pool.query(queryText, values);
    
    res.status(201).json({ 
      success: true, 
      message: 'Solicitação enviada com sucesso!', 
      id: result.rows[0].id 
    });

  } catch (error) {
    console.error('Erro ao salvar no banco:', error);
    res.status(500).json({ success: false, message: 'Erro interno no servidor.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando com sucesso na porta ${port}`);
});