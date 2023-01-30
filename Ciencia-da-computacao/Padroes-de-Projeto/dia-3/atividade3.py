from abc import ABC, abstractmethod

class Acesso(ABC):
    @abstractmethod
    def __init__(self, acesso=False):
        pass

    def acessar(self, acesso):
        pass

class AcessoSuporte(Acesso):
    def __init__(self, acesso=False):
        self.nome = "suporte"
        self.acesso = acesso

    def acessar(self, acesso):
        self.acessar(acesso)

class AcessoSuporteVenda(Acesso):
    def __init__(self, acesso=False):
        self.nome = "suporte e venda"
        self.acesso = acesso

    def acessar(self, acesso):
        self.acessar(acesso)

class AcessoGerente(Acesso):
    def __init__(self, acesso=False):
        self.nome = "gerente"
        self.acesso = acesso

    def acessar(self, acesso):
        self.acessar(acesso)

class Account(ABC):
    def __init__(self, nome):
        self.nome = nome
        self.permissoes = []
        self.criar_conta()
    
    @abstractmethod
    def criar_conta():
        pass

    def mostra_permissoes(self):
        permissoes = [
            permissao.nome for permissao in self.permissoes
        ]
        return permissoes
    
    def add_permissao(self, permissao):
        self.permissoes.append(permissao)

class contaSuporte(Account):
    def criar_conta(self):
        self.add_permissao(AcessoSuporte(True))

class contaVendas(Account):
    def criar_conta(self):
        self.add_permissao(AcessoSuporteVenda(True))
        self.add_permissao(AcessoSuporte(True))

class contaGerente(Account):
    def criar_conta(self):
        self.add_permissao(AcessoSuporteVenda(True))
        self.add_permissao(AcessoSuporte(True))
        self.add_permissao(AcessoGerente(True))

if __name__ == "__main__":
    print("nome: ")
    nome = input()
    print("codigo do perfil: ")
    codigo = input("\n1 - suporte\n2 - gerente\n3 - suporte e venda\n")

    if codigo == "1": account = contaSuporte(nome)
    if codigo == "2": account = contaGerente(nome)
    if codigo == "3": account = contaVendas(nome)

    print(f"\nCriando a conta para {account.nome}.")
    print(f"Acesso liberado para os sistemas: {account.mostra_permissoes()}")