def validate_number(number_str):
    is_number_valid = True

    for i in number_str:
        if not (i.isnumeric() or i == '.') or (number_str[-1] == '.'):
            is_number_valid = False

    return is_number_valid


def get_wall_width():
    is_width_valid = False

    while not is_width_valid:
        width_str = input('Digite a largura da parede: ').replace(',', '.')
        is_width_valid = validate_number(width_str)

        if is_width_valid:
            converted_width = float(width_str)
            return converted_width
        else:
            print('Valor inválido, tente novamente.')


def get_wall_height():
    is_height_valid = False

    while not is_height_valid:
        height_str = input('Digite a altura da parede: ').replace(',', '.')
        is_height_valid = validate_number(height_str)

        if is_height_valid:
            converted_height = float(height_str)
            return converted_height
        else:
            print('Valor inválido, tente novamente.')


def get_wall_area(width,height):
    return width*height


def get_amount_paint(area):
    return area/2


wall_width = get_wall_width()
wall_height = get_wall_height()
wall_area = get_wall_area(wall_width, wall_height)
amount_paint = get_amount_paint(wall_area)

print('\nSua parede tem a dimensão {} x {} e sua área é de {}m²'.format(wall_width, wall_height, wall_area))
print('Para pintar essa parede, você precisará de {} litros de tinta.'.format(amount_paint))



