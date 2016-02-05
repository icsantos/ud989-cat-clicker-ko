var initialCats = [
  {
    catName: 'Grass',
    catNicknames: ['Nature Girl', 'Lawndry'],
    catClicks: 0,
    imgSrc: 'img/22252709_010df3379e_z.jpg'
  },
  {
    catName: 'Carper',
    catNicknames: ['Carpet Lover', 'AStare'],
    catClicks: 0,
    imgSrc: 'img/434164568_fea0ad4013_z.jpg'
  },
  {
    catName: 'Pouncer',
    catNicknames: ['Night Stalker', 'BeadyEyes'],
    catClicks: 0,
    imgSrc: 'img/1413379559_412a540d29_z.jpg'
  },
  {
    catName: 'Happy',
    catNicknames: ['All-smiles', 'Bigfoot'],
    catClicks: 0,
    imgSrc: 'img/4154543904_6e2428c421_z.jpg'
  },
  {
    catName: 'Sleepy',
    catNicknames: ['Ming-ming', 'Boss Miaowok', 'Kuting'],
    catClicks: 0,
    imgSrc: 'img/9648464288_2516b35537_z.jpg'
  }
];

var Cat = function(data) {
  this.catName = ko.observable(data.catName);
  this.catNicknames = ko.observableArray(data.catNicknames);
  this.catClicks = ko.observable(data.catClicks);
  this.catLevel = ko.computed(function() {
    var clicks = this.catClicks();
    if (clicks < 5) {
      return 'kitten';
    } else if (clicks < 10) {
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
    self.catList.push(new Cat(catItem));
  });

  this.currentCat = ko.observable(this.catList()[0]);

  this.selectCat = function(clickCat) {
    self.currentCat(clickCat);
  };

  this.addClick = function() {
    self.currentCat().catClicks(self.currentCat().catClicks() + 1);
  };
}

ko.applyBindings(new ViewModel());