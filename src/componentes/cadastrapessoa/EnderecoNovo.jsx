import React, { useState } from 'react';
import { Form, Input, Row, Col } from 'antd';

function EnderecoNovo() {
  const [form] = Form.useForm();
  const [loadingCEP, setLoadingCEP] = useState(false);
  // Função que busca o CEP na API ViaCEP
  const buscarCEP = async (cep) => {
    cep = cep.replace(/\D/g, ''); // remove caracteres não numéricos
    if (cep.length === 8) {
      setLoadingCEP(true);
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if (!data.erro) {
          form.setFieldsValue({
            logradouro: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            uf: data.uf,
          });
        } else {
          alert('CEP não encontrado!');
        }
      } catch (error) {
        console.error('Erro ao buscar o CEP:', error);
        alert('Erro ao consultar o CEP.');
      } finally {
        setLoadingCEP(false);
      }
    }
  };
  return (
    <Form form={form} layout="vertical">
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item
            label="CEP"
            name="cep"
            rules={[{ required: true, message: 'Informe o CEP' }]}
          >
            <Input
              placeholder="Somente números"
              maxLength={8} // limita a 8 números
              disabled={loadingCEP}
              onChange={(e) => buscarCEP(e.target.value)} // evento onChange
              onKeyPress={(e) => {
                // permite somente números
                if (!/[0-9]/.test(e.key)) {
                  e.preventDefault();
                }
              }}
            />
          </Form.Item>
        </Col>
        <Col span={16}>
          <Form.Item
            label="Logradouro"
            name="logradouro"
            rules={[{ required: true, message: 'Informe o logradouro' }]}
          >
            <Input placeholder="Rua / Avenida" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Bairro"
            name="bairro"
            rules={[{ required: true, message: 'Informe o bairro' }]}
          >
            <Input placeholder="Bairro" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Cidade"
            name="cidade"
            rules={[{ required: true, message: 'Informe a cidade' }]}
          >
            <Input placeholder="Cidade" />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item
            label="UF"
            name="uf"
            rules={[{ required: true, message: 'Informe o estado' }]}
          >
            <Input placeholder="UF" maxLength={2} />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
export default EnderecoNovo;
