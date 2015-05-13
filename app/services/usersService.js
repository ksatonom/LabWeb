reportsApp.service('usersService', function () {

    this.getUsers = function() {
        return users;
    };

    this.getUser = function(id) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].id === id) {
                var user = users[i];

                

                
                    

                return user;
            }
        }
        return null;
    };
    



    var users = [
        {
            id: 1, firstName: 'Lee', lastName: 'Carroll', address: '1234 Anywhere St.', city: 'Phoenix',
            transacciones: [
                {
                    idtransaccion: '1', monto: 46, comision: 1, iva: 30,
                    detalleTransaccion: [
                        { product: 'Basket', price: 30, quantity: 1, orderTotal: 30 },
                        { product: 'Yarn', price: 10, quantity: 1, orderTotal: 40 },
                        { product: 'Needes', price:6, quantity: 1, orderTotal:6 }
                    ]
                },
                {
                    idtransaccion: '2', monto: 550, comision: 1, iva: 40, detalleTransaccion: [
                        { product: 'Table', price: 330, quantity: 1, orderTotal: 330 },
                        { product: 'Chair', price: 130, quantity: 4, orderTotal: 520 },
                        { product: 'Lamp', price: 90, quantity: 5, orderTotal: 450 }
                    ]
                },
                { idtransaccion: '3', monto:6, comision: 1, iva:6, detalleTransaccion:[] }
            ]
        },
        {
            id: 2, firstName: 'Jesse', lastName: 'Hawkins', address: '89 W. Center St.', city: 'Atlanta',
            transacciones: [
                {
                    idtransaccion: '4', monto: 30, comision: 1, iva: 330, detalleTransaccion: [
                        { product: 'Baseball', price: 10, quantity: 5, orderTotal: 50 },
                        { product: 'Bat', price: 20, quantity: 1, orderTotal: 20 }
                    ]
                },
                {
                    idtransaccion: '5', monto: 900, comision: 4, iva: 520, detalleTransaccion: [
                        { product: 'Speakers', price: 500, quantity: 1, orderTotal: 500 },
                        { product: 'iPod', price: 400, quantity: 1, orderTotal: 400 }
                    ]
                },
                {
                    idtransaccion: '6', monto: 1460, comision: 5, iva: 450, detalleTransaccion: [
                        { product: 'Statue', price: 430, quantity: 1, orderTotal: 430 },
                        { product: 'Picture', price: 1030, quantity: 1, orderTotal: 1030 }
                    ]
                }
            ]
        },
        {
            id: 3, firstName: 'Charles', lastName: 'Sutton', address: '455 7th Ave.', city: 'Quebec',
            transacciones: [
                {
                    idtransaccion: '7', monto: 60, comision: 1, iva: 60, detalleTransaccion: [
                        { product: 'Book: AngularJS Development', price: 40, quantity: 1, orderTotal: 40 },
                        { product: 'Book: Basket Weaving Made Simple', price: 20, quantity: 1, orderTotal: 20 }
                    ]
                },
                {
                    idtransaccion: '8', monto: 126, comision: 1, iva: 50, detalleTransaccion: [
                        { product: 'Webcam', price: 86, quantity: 1, orderTotal: 86 },
                        { product: 'HDMI Cable', price: 40, quantity: 2, orderTotal: 80 }
                    ]
                },
                {
                    idtransaccion: '9', monto: 160, comision: 1, iva: 50, detalleTransaccion: [
                        { product: 'Fan', price: 50, quantity: 4, orderTotal: 200 },
                        { product: 'Remote Control', price: 110, quantity: 1, orderTotal: 110 }
                    ]
                },
                {
                    idtransaccion: '10', monto: 46, comision: 1, iva: 50, detalleTransaccion: [
                        { product: 'Basket', price: 30, quantity: 1, orderTotal: 30 },
                        { product: 'Yarn', price: 10, quantity: 1, orderTotal: 40 },
                        { product: 'Needes', price:6, quantity: 1, orderTotal:6 }
                    ]
                }
            ]
        },
        {
            id: 4, firstName: 'Albert', lastName: 'Einstein', address: '8966 N. Crescent Dr.', city: 'New York City',
            transacciones: [
                {
                    idtransaccion: '11', monto: 550, comision: 5, iva: 50, detalleTransaccion: [
                        { product: 'Table', price: 330, quantity: 1, orderTotal: 330 },
                        { product: 'Chair', price: 130, quantity: 4, orderTotal: 520 },
                        { product: 'Lamp', price: 90, quantity: 5, orderTotal: 450 }
                    ]
                },
                {
                    idtransaccion: '12', monto: 210, comision: 1, iva: 20, detalleTransaccion: [
                        { product: 'Call of Duty', price: 60, quantity: 1, orderTotal: 60 },
                        { product: 'Controller', price: 50, quantity: 1, orderTotal: 50 },
                        { product: 'Gears of War', price: 50, quantity: 1, orderTotal: 50 },
                        { product: 'Lego City', price: 50, quantity: 1, orderTotal: 50 }
                    ]
                }
            ]
        },
        {
            id: 5, firstName: 'Sonya', lastName: 'Williams', address: '55 S. Hollywood Blvd', city: 'Los Angeles'
        },
        {
            id: 6, firstName: 'Victor', lastName: 'Bryan', address: '563 N. Rainier St.', city: 'Seattle',
            transacciones: [
                {
                    idtransaccion: '13', monto: 30, comision: 1, iva: 500, detalleTransaccion: [
                        { product: 'Baseball', price: 10, quantity: 5, orderTotal: 50 },
                        { product: 'Bat', price: 20, quantity: 1, orderTotal: 20 }
                    ]
                },
                {
                    idtransaccion: '14', monto: 900, comision: 1, iva: 400, detalleTransaccion: [
                        { product: 'Speakers', price: 500, quantity: 1, orderTotal: 500 },
                        { product: 'iPod', price: 400, quantity: 1, orderTotal: 400 }
                    ]
                }
            ]
        },
        {
            id: 7, firstName: 'Lynette', lastName: 'Gonzalez', address: '25624 Main St.', city: 'Albuquerque',
            transacciones: [
                {
                    idtransaccion: '15', monto: 1460, comision: 1, iva: 430, detalleTransaccion: [
                        { product: 'Statue', price: 430, quantity: 1, orderTotal: 430 },
                        { product: 'Picture', price: 1030, quantity: 1, orderTotal: 1030 }
                    ]
                },
                {
                    idtransaccion: '16', monto: 1030, comision: 1, iva: 1030, detalleTransaccion: [
                        { product: 'Book: AngularJS Development', price: 40, quantity: 1, orderTotal: 40 },
                        { product: 'Book: Basket Weaving Made Simple', price: 20, quantity: 1, orderTotal: 20 }
                    ]
                }
            ]
        },
        {
            id: 8, firstName: 'Erick', lastName: 'Pittman', address: '33 S. Lake Blvd', city: 'Chicago',
            transacciones: [
                {
                    idtransaccion: '17', monto: 126, comision: 1, iva: 40, detalleTransaccion: [
                        { product: 'Webcam', price: 86, quantity: 1, orderTotal: 86 },
                        { product: 'HDMI Cable', price: 40, quantity: 2, orderTotal: 80 }
                    ]
                },
                {
                    idtransaccion: '18', monto: 160, comision: 1, iva: 20, detalleTransaccion: [
                        { product: 'Fan', price: 50, quantity: 4, orderTotal: 200 },
                        { product: 'Remote Control', price: 110, quantity: 1, orderTotal: 110 }
                    ]
                }
            ]
        },
        {
            id: 9, firstName: 'Alice', lastName: 'monto', address: '3354 Town', city: 'Cleveland',
            transacciones: [
                {
                    idtransaccion: '19', monto: 46, comision: 1, iva: 86, detalleTransaccion: [
                        { product: 'Basket', price: 30, quantity: 1, orderTotal: 30 },
                        { product: 'Yarn', price: 10, quantity: 1, orderTotal: 40 },
                        { product: 'Needes', price:6, quantity: 1, orderTotal:6 }
                    ]
                },
                {
                    idtransaccion: '20', monto: 350, comision: 2, iva: 80, detalleTransaccion: [
                        { product: 'Table', price: 330, quantity: 1, orderTotal: 330 },
                        { product: 'Chair', price: 130, quantity: 4, orderTotal: 520 },
                        { product: 'Lamp', price: 90, quantity: 5, orderTotal: 450 }
                    ]
                }
            ]
        },
        {
            id: 10, firstName: 'Gerard', lastName: 'Tucker', address: '6795 N. 53 W. Bills Dr.', city: 'Buffalo',
            transacciones: [
                {
                    idtransaccion: '21', monto: 210, comision: 4, iva: 200, detalleTransaccion: [
                        { product: 'Call of Duty', price: 60, quantity: 1, orderTotal: 60 },
                        { product: 'Controller', price: 50, quantity: 1, orderTotal: 50 },
                        { product: 'Gears of War', price: 50, quantity: 1, orderTotal: 50 },
                        { product: 'Lego City', price: 50, quantity: 1, orderTotal: 50 }
                    ]
                },
                {
                    idtransaccion: '22', monto: 30, comision: 1, iva: 110, detalleTransaccion: [
                        { product: 'Baseball', price: 10, quantity: 5, orderTotal: 50 },
                        { product: 'Bat', price: 20, quantity: 1, orderTotal: 20 }
                    ]
                }
            ]
        },
        {
            id: 11, firstName: 'Shanika', lastName: 'Passmore', address: '459 S. International Dr.', city: 'Orlando'
        }
    ];
});