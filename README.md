# Amor de Quatro Patas — V3 (consulta Supabase)

Nesta versão o app:
- é hospedável no GitHub Pages;
- consulta a tabela `public.animais` do Supabase;
- usa a Publishable Key pública (apropriada para frontend);
- respeita o RLS configurado no Supabase;
- ainda NÃO permite login, cadastro, edição nem upload de fotos;
- mantém o formulário antigo apenas como base visual para a próxima etapa.

## Teste
Publique todos os arquivos desta pasta na raiz do GitHub Pages e abra o app.
Se a conexão estiver correta, aparecerá `Banco online conectado`. Como a tabela pode estar vazia, é normal aparecer `Nenhum animal encontrado no banco.`

## Segurança
Nunca coloque no GitHub a senha do banco, `service_role`, `sb_secret_...` ou qualquer Secret Key. A `sb_publishable_...` usada no frontend é pública por desenho; a segurança é feita pelas políticas RLS.
