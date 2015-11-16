'use strict';

/* IIFE to isolate the scope of this function */
(function () {

    /* Reference the main angular module */
    angular.module('yoMissingKidsApp')
        /* Create a data service that provides a store and a shopping cart that */
        /* will be shared by all views (instead of creating fresh ones for each view). */
        .factory('DataService', function ($http, FURL, $firebaseArray) {

            // create store
            var myStore = new store($http, FURL, $firebaseArray);

            // create shopping cart
            var myCart = new shoppingCart("AngularStore");

            // enable PayPal checkout
            // note: the second parameter identifies the merchant; in order to use the
            // shopping cart with PayPal, you have to create a merchant account with
            // PayPal. You can do that here:
            // https://www.paypal.com/webapps/mpp/merchant
            myCart.addCheckoutParameters("PayPal", "scottnakada@gmail.com");

            // enable Google Wallet checkout
            // note: the second parameter identifies the merchant; in order to use the
            // shopping cart with Google Wallet, you have to create a merchant account with
            // Google. You can do that here:
            // https://developers.google.com/commerce/wallet/digital/training/getting-started/merchant-setup
            myCart.addCheckoutParameters("Google", "15296168355696718376",
                {
                    ship_method_name_1: "UPS Next Day Air",
                    ship_method_price_1: "20.00",
                    ship_method_currency_1: "USD",
                    ship_method_name_2: "UPS Ground",
                    ship_method_price_2: "15.00",
                    ship_method_currency_2: "USD"
                }
            );

            // enable Stripe checkout
            // note: the second parameter identifies your publishable key; in order to use the
            // shopping cart with Stripe, you have to create a merchant account with
            // Stripe. You can do that here:
            // https://manage.stripe.com/register
            myCart.addCheckoutParameters("Stripe", "pk_test_0pWkxV2DCsSsxA2vuB1Tf1CE",
                {
                    chargeurl: "process.php"
                }
            );

            // return data object with store and cart
            return {
                store: myStore,
                cart: myCart
            };

        });

}());
/* Close the IIFE */
