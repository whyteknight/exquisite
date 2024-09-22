import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieille Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Spritz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Best Fine Dining Restaurant',
    subtitle: 'Voted as the top destination for fine dining, offering a sophisticated ambiance and an unforgettable culinary journey.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'This recognition highlights our commitment to creativity, quality, and excellence as we continue to make our mark on the dining scene.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'It reflects our team\'s passion for creating a warm, welcoming atmosphere where every guest feels valued and cared for from the moment they arrive.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Hosted a five-course charity dinner that raised over $10,000 for a local food bank.',
  },
];

export default { wines, cocktails, awards };
