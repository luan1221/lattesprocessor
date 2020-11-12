Scenario: Formação bem-sucedida de um grupo
    Given eu estou na página de grupos
    Given nao existe um grupo de "Centro de Informatica" cadastrado no sistema
    When eu crio o grupo "Centro de Informatica"
    Then eu posso ver o grupo "Centro de Informatica"

# Scenario: Insercao bem-sucedida de usuários em um grupo
#     Given eu estou na página de grupos
#     And vejo o grupo “Inteligencia Artificial”
#     And existe o aluno “Pedro” no grupo
#     When eu tento inserir “Joao” do grupo “Inteligência Artificial”
#     Then eu posso ver uma mensagem de confirmação
#     And no grupo “Inteligência Artificial” existem apenas os alunos “Pedro” e “Joao”

# Scenario: Remoção bem-sucedida de um grupo
#     Given eu estou na página de grupos
#     And existe o grupo “Engenharia de Software” no sistema
#     When eu removo o grupo “Engenharia de Software” do sistema
#     Then eu recebo uma mensagem de confirmação
#     And não existe mais o grupo “Engenharia de Software” no sistema

# Scenario: Formação bem-sucedida de um grupo a partir outros  grupos existentes
#     Given eu estou na página de grupos
#     And existem os grupos “Redes”, “Arquitetura de Computadores”  e “Sistemas Operacionais” no sistema
#     And não existe um grupo “Infra-estrutura” cadastrado no sistema
#     When eu crio o grupo “Infra-estrutura” a partir dos grupos “Redes”, “Arquitetura de Computadores” e “Sistemas Operacionais”
#     Then eu posso ver todos os usuários dos grupos “Redes”, “Sistemas Operacionais” e “Arquitetura de Computadores” no grupo “Infra-estrutura”

