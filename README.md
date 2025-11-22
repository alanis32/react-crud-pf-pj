🧩 React CRUD — Pessoa Física e Pessoa Jurídica

Este repositório contém a solução da atividade de implementação de um CRUD para Pessoas (PF e PJ) utilizando ReactJS + Vite, com armazenamento em LocalStorage.

O projeto foi desenvolvido a partir da base disponibilizada pelo professor e adaptado para incluir novos requisitos relacionados ao tratamento de data de nascimento da Pessoa Física.

📌 Objetivo da Atividade

Implementar de forma complementar os objetos, formulários e componentes necessários para:

Inserir Data de Nascimento no cadastro de Pessoa Física.

Salvar e carregar corretamente esse campo no LocalStorage.

Exibir a data formatada tanto na listagem quanto na página de visualização.

✅ Funcionalidades Implementadas
🧑‍💼 Pessoa Física (PF)

As seguintes adaptações foram realizadas para atender à atividade:

🔧 1. Inclusão do campo Data de Nascimento no formulário

O arquivo PFForm.jsx foi atualizado para incluir um componente DatePicker.

O usuário agora pode selecionar a data diretamente no calendário.

🧱 2. Ajustes na classe PF (PF.mjs)

Foi adicionada a nova propriedade:

dataNascimento com getter e setter.

Isso garante que o objeto PF tenha a estrutura correta para tratamento da data.

💾 3. Salvamento da data no cadastro

No arquivo PessoaFormOOV2.jsx:

O valor selecionado no DatePicker é convertido para o formato "YYYY-MM-DD" usando dayjs antes de ser salvo.

Isso garante consistência no LocalStorage.

✏️ 4. Carregamento da data ao editar

Quando o usuário entra no modo edição, a data salva como string é convertida novamente para um objeto dayjs.

Assim, o DatePicker exibe corretamente a data já cadastrada.

📋 5. Exibição da data na listagem

Os arquivos foram atualizados:

src/componentes/listapessoas/ListaPessoasV2.jsx

src/componentes/visualizapessoa/VisualizaPessoaV2.jsx

Agora a Data de Nascimento aparece formatada, seguindo padrão "DD/MM/YYYY".

📂 Estrutura dos Arquivos Alterados
src/
 ├─ classes/
 │   └─ PF.mjs
 ├─ componentes/
 │   ├─ pf/PFForm.jsx
 │   ├─ pessoas/PessoaFormOOV2.jsx
 │   ├─ listapessoas/ListaPessoasV2.jsx
 │   └─ visualizapessoa/VisualizaPessoaV2.jsx

▶️ Como executar o projeto

Clone o repositório:

git clone https://github.com/alanis32/react-crud-pf-pj


Instale as dependências:

npm install


Execute o projeto:

npm run dev


Acesse no navegador:

http://localhost:5173

🛠️ Tecnologias Utilizadas

ReactJS + Vite

Dayjs

Ant Design (DatePicker e componentes)

LocalStorage

JavaScript (ES6 Módulos)

📄 Observações

Este projeto segue como continuação da atividade base disponibilizada pelo professor, incluindo as extensões necessárias para tratamento da Data de Nascimento na Pessoa Física.
