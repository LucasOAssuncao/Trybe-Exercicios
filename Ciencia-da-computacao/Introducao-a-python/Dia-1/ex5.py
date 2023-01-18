def paint_cost(wall_size):
    cans = wall_size / (18 * 3)
    total_cost = cans * 80
    print((round(cans), round(total_cost, 2))) 

paint_cost(200)