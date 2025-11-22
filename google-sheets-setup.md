# Configuração do Google Sheets para Formulário de Contato

## Passo 1: Criar a Planilha Google

1. Acesse [Google Sheets](https://sheets.google.com)
2. Crie uma nova planilha
3. Na primeira linha, adicione os cabeçalhos:
   - Coluna A: **Data/Hora**
   - Coluna B: **Nome**
   - Coluna C: **Email**
   - Coluna D: **Telefone**
   - Coluna E: **Mensagem**

## Passo 2: Criar o Google Apps Script

1. Na planilha, clique em **Extensões** → **Apps Script**
2. Cole o seguinte código:

```javascript
function doPost(e) {
  try {
    // Obtém a planilha ativa
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse dos dados recebidos
    var data = JSON.parse(e.postData.contents);
    
    // Adiciona uma nova linha com os dados
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString('pt-BR'),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.message || ''
    ]);
    
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'success', message: 'Dados salvos com sucesso!' })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Passo 3: Implantar como Web App

1. No editor do Apps Script, clique em **Implantar** → **Nova implantação**
2. Escolha o tipo: **Aplicativo da web**
3. Configure:
   - **Descrição**: Formulário de Contato
   - **Executar como**: Eu (seu email)
   - **Quem tem acesso**: Qualquer pessoa
4. Clique em **Implantar**
5. **Copie a URL do Web App** que aparece

## Passo 4: Atualizar o Código do Site

1. Abra o arquivo `src/components/Contact.tsx`
2. Na linha 27, substitua `'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE'` pela URL copiada:

```typescript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/SEU_ID_AQUI/exec'
```

## Testando

Após configurar, teste o formulário no site. Os dados devem aparecer automaticamente na planilha!

## Dicas

- ✅ A URL do Apps Script termina com `/exec`
- ✅ Certifique-se de que o acesso está configurado como "Qualquer pessoa"
- ✅ Cada envio criará uma nova linha na planilha
- ✅ Você pode adicionar mais colunas na planilha conforme necessário
