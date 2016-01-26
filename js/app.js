var Cat = function() {
  this.catName = ko.observable('Sleepy');
  this.catNicknames = ko.observableArray(['Ming-ming', 'Boss Miaowok', 'Kuting']);
  this.catClicks = ko.observable(0);
  this.catLevel = ko.computed(function() {
    if (this.catClicks() < 5) {
      return 'kitten';
    } else if (this.catClicks() < 10) {
      return 'cat';
    } else {
      return 'tiger';
    }
  }, this);
  this.imgSrc = ko.observable('img/9648464288_2516b35537_z.jpg');
}

var ViewModel = function() {
  this.currentCat = ko.observable(new Cat());
  
  this.addClick = function() {
    this.catClicks(this.catClicks() + 1);
  };
}

ko.applyBindings(new ViewModel());