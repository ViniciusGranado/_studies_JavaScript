def validate_value(value_str):
    is_valid = True

    if (value_str == '') or (value_str[-1] == '.'):
        is_valid = False
    else:
        for i in value_str:
            if i == value_str[0]:
                if not (i.isnumeric() or i == '.' or i == '-'):
                    is_valid = False
            else:
                if not (i.isnumeric() or i == '.'):
                    is_valid = False

    return is_valid


def get_temp():
    is_valid = False

    while not is_valid:
        temp_str = input('Informe a temperatura em Celsius: ').replace(',', '.')
        is_valid = validate_value(temp_str)

        if is_valid:
            converted_temp = float(temp_str)
            return converted_temp
        else:
            print('Valor inválido, tente novamente.')


def convert_c_to_f(c):
    f = (c * 9) / 5 + 32
    return f


temp_c = get_temp()
temp_f = convert_c_to_f(temp_c)

temp_c_formatted = str('%.1f' % temp_c).replace('.', ',')
temp_f_formatted = str('%.1f' % temp_f).replace('.', ',')

print('A temperatura de {}°C corresponde a {}°F.'.format(temp_c_formatted, temp_f_formatted))
