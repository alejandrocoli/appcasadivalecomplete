// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Casa Di Vale App',
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/menu/',
    	url: 'menu.html',
    	name: 'menu',
  		},
		{
		path: '/galeria/',
    	url: 'galeria.html',
    	name: 'galeria',
  		},
		{
		path: '/eventos/',
    	url: 'eventos.html',
    	name: 'eventos',
  		},
		{
		path: '/mainmenu/',
    	url: 'mainmenu.html',
    	name: 'mainmenu',
  		},
		{
		path: '/promos/',
    	url: 'promos.html',
    	name: 'promos',
  		},
		{
		path: '/Reviews/',
    	url: 'Reviews.html',
    	name: 'Reviews',
  		},
		{
		path: '/Historia/',
    	url: 'Historia.html',
    	name: 'Historia',
  		},
		{
		path: '/redes/',
    	url: 'redes.html',
    	name: 'redes',
  		},
		{
		path: '/ubicacion/',
    	url: 'ubicacion.html',
    	name: 'ubicacion',
  		},
		{
		path: '/Contacto/',
    	url: 'Contacto.html',
    	name: 'Contacto',
  		},
		{
		path: '/Delivery/',
    	url: 'Delivery.html',
    	name: 'Delivery',
  		},
		{
		path: '/pizzas/',
    	url: 'pizzas.html',
    	name: 'pizzas',
  		},
		{
		path: '/signup/',
    	url: 'signup.html',
    	name: 'signup',
  		},
		{
		path: '/login/',
    	url: 'login.html',
    	name: 'login',
  		},
		{
		path: '/aboutus/',
    	url: 'aboutus.html',
    	name: 'aboutus',
  		},
		{
		path: '/orden/',
    	url: 'orden.html',
    	name: 'orden',
  		},
		{
		path: '/gracias/',
    	url: 'gracias.html',
    	name: 'gracias',
  		}
	],
	dialog: {
		title: 'Casa Di Vale App',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#login');
		
		app.dialog.alert('¡ Welcome to Rungran Shop !');
    }
	
});



$$(document).on('click', '#btnAddCart', function (e) {
	e.preventDefault();

	
	var notification = app.notification.create({
      icon: '<i class="material-icons">check</i>',
      title: 'Order',
      titleRightText: '',
      subtitle: '',
      text: "Your order has been received.",
      closeTimeout: 3000,
    });
    notification.open();
	
});





