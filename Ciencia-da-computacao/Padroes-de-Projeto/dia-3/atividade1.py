ROSA = "\033[95m"
ROXO = "\033[94m"
AZUL = "\033[96m"
VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"
NEGRITO = "\033[1m"
SUBLINHADO = "\033[4m"
RESET = "\033[0m"


class Log:
    def msg(self, message):
        return message


class LogError:
    def __init__(self, log):
        self.log = log

    def msg(self, message):
        return f"{VERMELHO}{NEGRITO}{self.log.msg(message)}{RESET}"


class LogWarning:
    def __init__(self, log):
        self.log = log

    def msg(self, message):
        return f"{ROXO}{NEGRITO}{self.log.msg(message)}{RESET}"


class LogSuccess:
    def __init__(self, log):
        self.log = log

    def msg(self, message):
        return f"{VERDE}{SUBLINHADO}{self.log.msg(message)}{RESET}"


logar = Log()

print(LogSuccess(logar).msg("O sistema esta funcionando"))

print(LogWarning(logar).msg("O sistema esta lento"))

print(LogError(logar).msg("O sistema esta com erros"))