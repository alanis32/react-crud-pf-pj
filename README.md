Segue o link do meu repositório com a solução da atividade:

👉 https://github.com/fabiulabrandao-154/Atividade_Avaliativa_2_Unidade_5

Para atender ao requisito da atividade, fiz as seguintes adaptações:

### 🧍‍♀️ Pessoa Física (PF)
- Adicionei o campo de **Data de Nascimento** no formulário da Pessoa Física (`PessoaFormOOV2.jsx`).
- Implementei a propriedade **dataNascimento** na classe PF (`PF.js`), incluindo getter e setter.
- Ajustei o salvamento no cadastro para gravar corretamente a data no objeto PF.
- Ajustei o carregamento para edição, garantindo que a data armazenada seja exibida corretamente no formulário.
- Adicionei a coluna **Data Nascimento** na listagem (`ListaPessoasV2.jsx`), exibindo a data formatada conforme o filtro PF.

### 🏢 Pessoa Jurídica (PJ)
- Adicionei o campo de **Data de Registro** no formulário.
- Implementei a propriedade **dataRegistro** na classe PJ (`PJ.js`), com getter e setter.
- Ajustei o DAO (`PJDAOLocalV2.mjs`) para salvar e recuperar a data no `localStorage`.
- Ajustei o carregamento para edição da PJ, mantendo a data consistente.
- Adicionei a coluna **Data Registro** na listagem (`ListaPessoasV2.jsx`) quando o filtro selecionado é PJ.

### 🗂️ DAOs e Listagem
- Ajustei `PFDAOLocalV2.mjs` e `PJDAOLocalV2.mjs` para garantir gravação e leitura correta das datas.
- A listagem agora exibe automaticamente:
  - **Data de Nascimento** quando o tipo selecionado é **PF**.
  - **Data de Registro** quando o tipo selecionado é **PJ**.
- Toda a lógica de exibição foi mantida dentro do arquivo `ListaPessoasV2.jsx`, conforme padrão do projeto.

As modificações garantem que as datas sejam cadastradas, editadas, armazenadas e exibidas corretamente no CRUD, atendendo às exigências da atividade.
