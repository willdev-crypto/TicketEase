# 🛠️ TicketEase - Gestão de Suporte Técnico Simplificada

<p align="center">
  <img src="./assets/logo2.png" alt="TicketEase Logo" width="300">
</p>

**TicketEase** é uma aplicação web progressiva (PWA) e desktop (via Electron) projetada para otimizar o registro e gerenciamento de chamados técnicos. Com uma interface intuitiva e funcionalidades robustas, a plataforma oferece uma experiência fluida tanto para o cliente final quanto para o administrador do sistema.

---

## ✨ Funcionalidades Principais

O sistema foi desenvolvido com foco em diferentes perfis de usuário, garantindo flexibilidade e controle.

### Para Clientes
- **Abertura de Chamados Simplificada:** Usuários podem abrir chamados rapidamente, mesmo sem a necessidade de cadastro prévio.
- **Seleção de Múltiplos Serviços:** É possível adicionar vários serviços em um único chamado, com cálculo de valor total em tempo real.
- **Sistema de Cupons:** Aplicação de cupons de desconto (`ASSINANTE20`, `FIDELIDADE30`, `CYBERVIP50`) sobre o valor total dos serviços.
- **Cadastro e Login de Usuário:** Crie uma conta para ter acesso a um painel pessoal com o histórico de todos os seus chamados.
- **Gerenciamento de Conta:** Usuários cadastrados podem editar suas informações de email e senha.

### Para o Administrador
- **Painel de Controle Completo:** Acesso a uma visão geral de toda a operação através de um login exclusivo.
- **Gestão de Usuários:** Visualize todos os usuários cadastrados, incluindo seus dados de contato, senha e histórico de chamados.
- **Visualização Centralizada de Chamados:** Monitore tanto os chamados de usuários registrados quanto os de usuários anônimos.
- **Filtros Avançados:** Ferramentas para buscar usuários por CPF, email ou chamados por data, facilitando auditorias e consultas.
- **Exportação de Dados:** Exporte relatórios completos ou dados de clientes específicos para planilhas no formato CSV.

### Funcionalidades Gerais
- **Segurança de Sessão:** Logout automático após 20 minutos de inatividade para garantir a segurança dos dados.
- **Design Responsivo:** Interface totalmente adaptável para desktops, tablets e smartphones.
- **PWA (Progressive Web App):** A aplicação pode ser "instalada" em dispositivos móveis e desktops para uma experiência de aplicativo nativo.
- **Aplicação Desktop:** Empacotada com Electron para funcionar como um programa nativo em sistemas operacionais de desktop.

---

## 🚀 Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Armazenamento:** `localStorage` para persistência de dados no lado do cliente.
- **PWA:** Service Workers para funcionalidades offline e cache.
- **Desktop:** Electron para empacotamento da aplicação.

---

## 📂 Estrutura de Arquivos Atualizada

```plaintext
/
├── index.html                # Página inicial com a apresentação dos serviços
├── aberturachamados.html     # Formulário de abertura de chamados
├── login.html                # Página de login e cadastro de usuários
├── painel.html               # Painel do usuário e do administrador
├── styles.css                # Folha de estilos principal
├── script.js                 # Scripts gerais
├── service-worker.js         # Service Worker para PWA
├── main.js                   # Arquivo de inicialização do Electron
├── manifest.json             # Manifesto da PWA
└── assets/                   # Ícones, logos e outras mídias
```

---

## 🖥️ Como Utilizar

1.  Acesse a página **[ABRIR CHAMADO](./aberturachamados.html)** para registrar uma nova solicitação.
2.  Visite a página de **[LOGIN / CADASTRE-SE](./login.html)** para criar uma conta ou acessar seu painel.
3.  Como administrador, utilize as credenciais pré-definidas na página de login para acessar o painel de controle completo.












