class Person:
    def __init__(self, name, age):
        self._name = name
        self._age = age
    
    def get_name(self):
        return self._name

    def get_age(self):
        return self._age

    def set_name(self, name):
        self._name = name

    def set_age(self, age):
        self._age = age
class Human:
    def __init__(self, type):
        self._type = type

    def set_type(self, type):
        self._type = type

    def get_type(self):
        return self._type

class FamilyMember(Person, Human):
    def __init__(self, name, age, status, type):
        super().__init__(name, age)
        self._status = status
        self.set_type(type)

    def set_status(self, status):
        self._status = status

    def get_description(self):
        return f'Name: {self._name} \nAge: {self._age} \nStatus: {self._status}\nType: {self._type}'

family_memeber = FamilyMember('Shubham', 21, 'Son','Introvert')
print(family_memeber.get_description())

class Som