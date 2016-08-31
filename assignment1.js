//exercise 1
var reviewsData = {
  data: [
    {
      id: 1,
      attributes: {
        'review-title': 'Terrible!',
        'stars': 1,
        'cost': 'high'
      }
    }
    {
      id: 2,
      attributes: {
        'review-title': 'Decent place',
        'stars': 3,
        'cost': 'average'
      }
    }
    {
      id: 3,
      attributes: {
        'review-title': 'I would come again',
        'stars': 3.5,
        'cost': 'average'
      }
    }
    {
      id: 4,
      attributes: {
        'review-title': 'So good, and cheap!',
        'stars': 4,
        'cost': 'low-average'
      }
    {
      id: 5,
      attributes: {
        'review-title': 'Good, but pricey!',
        'stars': 4,
        'cost': 'high'
      }
    }
  ]
};

function extractReviews(reviewsData) {
  var mappedReviews = reviewsData.data.map(function(review){
    return {
      'id': review.id,
      'title': review.attributes['review-title'],
      'stars': review.attributes['stars'],
      'cost': review.attributes['cost']
    };
  });

  return mappedReviews;
}

console.log(extractReviews(reviewsData));






//exercise 2
var reviews = [
  { id: 1, title: 'Terrible!', stars: 1, cost: 'high' },
  { id: 2, title: 'Decent place', stars: 3, cost: 'average' },
  { id: 3, title: 'I would come again', stars: 3.5, cost: 'average' },
  { id: 4, title: 'So good, and cheap!', stars: 4, cost: 'low-average' },
  { id: 5, title: 'Good, but pricey!', stars: 4, cost: 'high' }
];

function findGoodReviews(reviews) {
  var goodReviews = reviews.filter(function(review) {
    return review.title.toLowerCase().indexOf('good') != -1;
  });
  return goodReviews;
}

console.log(findGoodReviews(reviews));




//exercise 3
function classifyReviewsByCost(reviews) {
  var classifiedReviews = reviews.reduce(function(classifiedReviews, review) {
    //review is each individual object
    if (classifiedReviews.hasOwnProperty(review.cost)) {
      classifiedReviews[review.cost] = classifiedReviews[review.cost] + 1;
    } else {
      classifiedReviews[review.cost] = 1;
    }

    return classifiedReviews;
  }, {});

  return classifiedReviews;
}

console.log(classifyReviewsByCost(reviews));
