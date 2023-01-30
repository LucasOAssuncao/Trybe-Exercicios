from abc import ABC, abstractmethod

class Alarme:
    def __init__(self):
        self.__rotinas = []

    def append_rotinas(self, rotinas):
        self.__rotinas.append(rotinas)
    
    def startar_rotinas(self):
        for rotina in self.__rotinas:
            rotina.notificar()

    def despertar(self):
        print("ACOOOOOOOOOOOOOOORRRRRRRRRRRDAAAAAA")
        self.startar_rotinas()


class Notificador(ABC):
    @abstractmethod
    def notificar(self):
        pass


class AcenderLuz(Notificador):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.append_rotinas(self)

    def notificar(self):
        print('acendendo a luz')


class PrepararCafe(Notificador):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.append_rotinas(self)

    def notificar(self):
        print('Café pronto')

class LigarComputador(Notificador):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.append_rotinas(self)

    def notificar(self):
        print('Computador ligando')

if __name__ == "__main__":
    alarme = Alarme()
    AcenderLuz(alarme)
    PrepararCafe(alarme)
    LigarComputador(alarme)

    alarme.despertar()