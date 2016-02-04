var initialCats = [
  {
    catName: 'Sleepy',
    catNicknames: ['Ming-ming', 'Boss Miaowok', 'Kuting'],
    catClicks: 0,
    imgSrc: 'img/9648464288_2516b35537_z.jpg'      
  },
  {
    catName: 'Happy',
    catNicknames: ['All-smiles', 'Bigfoot'],
    catClicks: 0,
    imgSrc: 'img/4154543904_6e2428c421_z.jpg'
  }
];

var Cat = function(data) {
  this.catName = ko.observable(data.catName);
  this.catNicknames = ko.observableArray(data.catNicknames);
  this.catClicks = ko.observable(data.catClicks);
  this.catLevel = ko.computed(function() {
    if (this.catClicks() < 5) {
      return 'kitten';
    } else if (this.catClicks() < 10) {
      return 'cat';
    } else {
      return 'tiger';
    }
  }, this);
  this.imgSrc = ko.observable(data.imgSrc);
}

var ViewModel = function() {
  var self = this;
  
  this.catList = ko.observableArray([]);
  initialCats.forEach(function(catItem){
    self.catList.push( new Cat(catItem) );
  });
  
  this.currentCat = ko.observable(this.catList()[0]);
  
  this.updateCat = function(index) {
    console.log(index);
    self.currentCat = ko.observable(self.catList()[index]);
  };
  
  this.selectCat = function(cat) {
    console.log(cat);
    this.currentCat = ko.observable(cat);
  };
  
  this.addClick = function() {
    self.currentCat().catClicks(self.currentCat().catClicks() + 1);
  };
}

ko.applyBindings(new ViewModel());