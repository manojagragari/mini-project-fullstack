class A:
    def f1(self):
        return "Method f1 from class A"
    def f2(self):
        return "Method f2 from class A"
class B(A):
    def f3(self):
        return "Method f3 from class B"
        A.f1(self)
    def f4(self):
        return "Method f4 from class B"
a=A()
b=B()   
print(b.f3())
#super is used to call parent class methods is notdefinitely needed here
#super function check the value of next in mro and calls that method
print(super(B,b).f1())
#mro is method resolution order which is the order in which python looks for a method in a hierarchy of classes
print(b.f1())
class A:
    def f1(self):
        return "Method f1 from class A"
    def f2(self):
        return "Method f2 from class A"
class B(A):
    def f3(self):
        return "Method f3 from class B"
        A.f1(self)
    def f4(self):
        return "Method f4 from class B"
class c(A):
    pass
class D(c,B):
    pass
    # super().f1()
    # super().f3()    
    # super().f2()

#diamond problem diamond problem occurs when two classes B and C inherit from A and class D inherits from both B and C
#in this case if we call a method from class A using an object of class D python uses mro to determine which method to call
a=A()
b=B()
C=c()
d=D()
print(D.__mro__)
#merthod resolution order shows the order in which methods are looked up in a hierarchy of classes
#list use more memory than range
#dandor methods are special methods in python that have double underscores at the beginning and end of their names
#they are also called magic methods or special methods
#they are used to define the behavior of built-in operations for user-defined classes
#list of dandor methods: __init__, __str__, __repr__, __add__, __sub__, __mul__, __len__, __getitem__, __setitem__, __delitem__, __iter__, __next__, __call__, __eq__, __ne__, __lt__, __le__, __gt__, __ge__
#__init__ is used to initialize an object when it is created
#__str__ is used to define the string representation of an object   
#__repr__ is used to define the official string representation of an object
#__add__ is used to define the behavior of the + operator
#__sub__ is used to define the behavior of the - operator
#__mul__ is used to define the behavior of the * operator
#__len__ is used to define the behavior of the len() function
#__getitem__ is used to define the behavior of indexing and slicing
#__setitem__ is used to define the behavior of item assignment
#__delitem__ is used to define the behavior of item deletion
#__iter__ is used to define the behavior of iteration
#__next__ is used to define the behavior of the next() function
#__call__ is used to define the behavior of function calls  
#__eq__ is used to define the behavior of the == operator
#__ne__ is used to define the behavior of the != operator   
#__lt__ is used to define the behavior of the < operator
#__le__ is used to define the behavior of the <= operator
#__gt__ is used to define the behavior of the > operator
#__ge__ is used to define the behavior of the >= operator\
#explaining memory difference between range and list
import sys
print(sys.getsizeof(range(1,1000)))
print(sys.getsizeof(list(range(1,1000))))

class A:
    def __init__(self, x,y):
        self.x = x
        self.y = y  
    def __str__(self):
        return f" {self.x} and {self.y}"
    def __repr__(self):
        return f"A({self.x}, {self.y})"
    def __add__(self, other):
        return A(self.x + other.x, self.y + other.y) 
a1 = A(2,3) 
a2 = A(4,5)
a3 = a1 + a2
print(a3)
print(a3.__repr__())    
print(repr(a3)) 
#repr is used to get the official string representation of an object which can be used to recreate the object
#this code demonstrates the use of dandor methods in python
#it shows how to define custom behavior for built-in operations for user-defined classes
#diff between str and repr is that str is used to get a readable string representation of an object for end-users
#whereas repr is used to get an official string representation of an object for developers
try:
    try:
        x = 1 / 0
    except ZeroDivisionError:
        print("Inner try-except: Caught division by zero")
        raise ValueError("Raising ValueError from inner except")
except ValueError as ve:
    print(f"Outer try-except: Caught ValueError: {ve}") 
#nested try-except blocks are used to handle exceptions that may occur within another try-except block
#in this example the inner try block attempts to divide by zero which raises a ZeroDivisionError
#the inner except block catches this exception and raises a ValueError
#the outer try block catches the ValueError raised by the inner except block
#and handles it by printing a message
