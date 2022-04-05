const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = ({name, phoneNumber, address: {street, number, apartment}, order: {delivery: {deliveryPerson},},}) => {
    // Adicione abaixo as informações necessárias.
    return `Olá ${deliveryPerson}, entrega para: ${name}, telefone: ${phoneNumber}, ${street}, Nº: ${number}, AP: ${apartment}`
  }
  console.log(customerInfo(order));
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const novoNome = order.name = 'Luiz Silva';
    const sabores = Object.keys(order.order.pizza);
    const bebidas = order.order.drinks.coke.type;
    const total2 = order.payment.total = '50';

    console.log(`Olá ${novoNome}, o total do seu pedido de ${sabores[0]}, ${sabores[1]} e ${bebidas} é R$${total2},00`);
  }
  ;
  orderModifier(order);