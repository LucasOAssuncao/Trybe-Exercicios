def triangle_type(a, b, c):
    if (a + b > c) and (a + c > b) and (b + c > a):
        if a == b == c:
            print("equilátero")
        elif a == b or a == c or b == c:
            print("isósceles")
        else:
            print("escaleno")
    else:
        print("não é triângulo")

triangle_type(24,24,26)