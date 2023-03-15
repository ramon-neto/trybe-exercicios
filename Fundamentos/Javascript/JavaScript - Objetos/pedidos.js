let order = {
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
        calabresa: {
            amount: 1,
            price: 25,
        },
        portuguesa: {
            amount: 1,
            price: 25,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  //'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701'

  function customerInfo(order) {
    console.log(`'Olá, ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}'`);
  }
  
  customerInfo(order);
  
  order.name = 'Luiz Silva';
  order.payment.total = 50;

//'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.'

  function orderModifier(order) {
    let sabores = Object.keys(order.order.pizza);
    console.log(`'Olá, ${order.name}, o valor total de seu pedido de ${sabores[0]}, ${sabores[1]} e ${order.order.drinks.coke.type} é R$ ${order.payment.total},00.'`);
  }
  
  orderModifier(order);

  function orderModifier1(order) {
    let total = order.order.pizza.marguerita.price + order.order.pizza.calabresa.price + order.order.pizza.portuguesa.price + order.order.drinks.coke.price + order.order.delivery.price;
    let sabores = Object.keys(order.order.pizza);
    console.log(`'Olá, ${order.name}, o valor total de seu pedido de ${sabores[0]}, ${sabores[1]}, ${sabores[2]} e ${order.order.drinks.coke.type} é R$ ${total},00.'`);
  }

  orderModifier1(order);