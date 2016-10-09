(function() {

angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyController = this;

  buyController.items = ShoppingListCheckOffService.getToBuyItems();
  buyController.buy = function(index) {
    ShoppingListCheckOffService.buy(index);
    buyController.items = ShoppingListCheckOffService.getToBuyItems();
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBoughtCtrl = this;

  alreadyBoughtCtrl.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  service.toBuyItems = [
    {
      name: "apples",
      quantity: 5
    },
    {
      name: "bananas",
      quantity: 6
    },
    {
      name: "oranges",
      quantity: 3
    },
    {
      name: "pineapples",
      quantity: 1
    },
    {
      name: "peaches",
      quantity: 4
    }
  ];

  service.boughtItems = [];

  service.buy = function(index) {
    var removedArray = service.toBuyItems.splice(index, 1);
    service.boughtItems.push(removedArray[0]);
  };

  service.getToBuyItems = function() {
    return service.toBuyItems;
  };

  service.getBoughtItems = function() {
    return service.boughtItems;
  };
}



})();
