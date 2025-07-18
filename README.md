# 🛠️ TicketEase - Facilitando o Suporte Técnico com Eficiência e Simplicidade

<p align="center">
  <img src="./assets/logo2.png" alt="TicketEase Logo" width="300">
</p>

**TicketEase** é uma aplicação web e desktop (PWA + Electron) para registro e gerenciamento de chamados técnicos. Com interface acessível e intuitiva, permite que usuários relatem problemas rapidamente, conectando-os ao suporte técnico de maneira eficaz.

---

## ✨ Funcionalidades Principais

- **Abertura de Chamados**
  - Formulário moderno para cadastrar solicitações de suporte, incluindo:
    - Dados pessoais (CPF ou CNPJ, Nome, Email)
    - Motivo do chamado (opções como *"Sistema Inoperante"*, *"Telefone Mudo"*, *"Problemas de Impressora"*, *"Erro de Sistema"*, *"Dúvidas sobre Fatura"*, *"Solicitar Treinamento"*, *"Suporte Remoto"*, *"Outros"*)
    - Campo de descrição detalhada do chamado

- **Validação de CPF**
  - Verificação automática de 11 dígitos numéricos para CPF

- **Design Responsivo**
  - Layout adaptado para diferentes tamanhos de dispositivos

- **Redirecionamento com Confirmação**
  - Após o registro, uma mensagem de sucesso é exibida antes de retornar à página inicial

- **PWA e Desktop**
  - Funciona como aplicativo web, PWA e também como aplicativo desktop via Electron

---

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura do conteúdo
- **CSS3**: Design responsivo e animações
- **JavaScript**: Validações e interatividade
- **Electron**: Empacotamento desktop
- **Service Worker**: Cache offline (PWA)

---

## 🖥️ Demonstração

Acesse a página **"Abra seu Chamado"** em [aberturachamados.html](./aberturachamados.html) e experimente o processo completo de abertura de um ticket.

---

## 📂 Estrutura de Arquivos

```plaintext
/
├── index.html                # Página inicial
├── aberturachamados.html     # Formulário de abertura de chamados
├── styles.css                # Estilo da aplicação
├── script.js                 # Funcionalidades interativas
├── service-worker.js         # Service Worker para PWA
├── main.js                   # Inicialização do Electron
├── manifest.json             # Manifesto PWA
├── assets/                   # Imagens e ícones
└── sobrenos.html             # Página sobre nós
```












