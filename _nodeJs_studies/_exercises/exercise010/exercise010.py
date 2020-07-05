def validate_number(number_str):
    is_valid = True

    for i in number_str:
        if not(i.isnumeric() or i == '.') or (number_str[-1] == '.'):
            is_valid = False

    return is_valid

def get_dollar_quote():
    is_dollar_quote_valid = False

    while is_dollar_quote_valid == False:
        dollar_quote_str = input('Digite a cotação do Dolar de hoje: ').replace(',', '.')
        is_dollar_quote_valid = validate_number(dollar_quote_str)

        if is_dollar_quote_valid:
            converted_dollar_quote = float(dollar_quote_str)
            return converted_dollar_quote
        else:
            print('Valor inválido, tente novamente.')

def get_user_money():
    is_user_money_valid = False

    while is_user_money_valid == False:
        user_money_str = input('Quantos Reais você tem na sua carteira? R$').replace(',', '.')
        is_user_money_valid = validate_number(user_money_str)

        if is_user_money_valid:
            converted_user_money = float(user_money_str)
            return converted_user_money
        else:
            print('Valor inválido, tente novamente.')


dollar_quote = get_dollar_quote()
user_money = get_user_money()
user_can_buy = user_money/dollar_quote

print('\nCom R${:.2f} você pode comprar US${:.2f}'.format(user_money,user_can_buy))
