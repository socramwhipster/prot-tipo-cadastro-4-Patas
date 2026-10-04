# Amor de Quatro Patas — V3.2

Versão conectada ao Supabase com:

- acesso Visitante ou Login;
- consulta pública restrita à view `animais_publicos`;
- área interna para admin/editor;
- cadastro de novo animal pelo celular;
- edição dos dados internos;
- 1 foto obrigatória em novos cadastros;
- compressão/redimensionamento automático da foto antes do upload;
- armazenamento da foto no bucket privado `fotos-animais`;
- URLs das fotos geradas por assinatura temporária;
- proteção contra sobrescrever uma ficha alterada por outra pessoa (controle por `versao`);
- observações livres com links clicáveis na visualização;
- código de 6 dígitos derivado do `id` do banco.

## Segurança

A chave Supabase presente no HTML é a Publishable Key. Não inserir Secret Key, service_role ou senha do banco no repositório.
