# Amor de Quatro Patas — V3.1

Versão com duas portas de acesso:

- **Visitante:** consulta somente `animais_publicos`, portanto vê apenas animais ativos e campos públicos.
- **Login:** autenticação pelo Supabase; usuários ativos em `perfis` com papel `admin` ou `editor` consultam a tabela completa `animais`.

Nesta versão ainda não há cadastro/edição pelo aplicativo. O objetivo é validar autenticação, diferenciação de permissões e visualização pública/interna.

## Próximas etapas

1. Cadastro e edição pelo celular.
2. Compressão de foto antes do upload.
3. Upload de uma foto por animal no Storage.
4. Controle de concorrência de edição.
5. Relatório simples e relatório detalhado em PDF.
