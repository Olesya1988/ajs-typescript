import Cart from '../service/Cart';
import Book from '../domain/Book';
import Movie from '../domain/Movie';
import MusicAlbum from '../domain/MusicAlbum';

test('test add', () => {
  const cart = new Cart();
  const correct = [
    {
      "id": 1001,
      "name": "War and Piece",
      "author": "Leo Tolstoy",
      "price": 2000,
      "pages": 1225
    },
    {
      "id": 1008,
      "name": "Meteora",
      "author": "Linkin Park",
      "price": 900
    },
    {
      "id": 1013,
      "name": "Мстители",
      "price": 220000000,
      "originalName": "The Avengers",
      "year": 2012,
      "country": "США",
      "slogan": "«Avengers Assemble!»",
      "genres": "фантастика, боевик, фэнтези, приключения",
      "time": 137,
      "author": "Marvel",
    }
  ];

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(
    1013,
    'Мстители',
    220000000,
    'The Avengers',
    2012,    
    'США',
    '«Avengers Assemble!»',
    'фантастика, боевик, фэнтези, приключения',
    137,
    'Marvel'
  ));

  expect(cart.items).toEqual(correct);
});

test('test priceWithoutDiscount', () => {
  const cart = new Cart();
  const correct = 2900;

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  expect(cart.priceWithoutDiscount()).toEqual(correct);
});

test('test discountPrice', () => {
  const cart = new Cart();
  const correct = 2400;

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  expect(cart.discountPrice(500)).toEqual(correct);
});

test('test removeObject', () => {
  const cart = new Cart();
  const correct = [
    {
      "id": 1001,
      "name": "War and Piece",
      "author": "Leo Tolstoy",
      "price": 2000,
      "pages": 1225
    }
  ];

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.removeObject(1008)

  expect(cart.items).toEqual(correct);
});

test('test removeObject-2', () => {
  const cart = new Cart();
  const correct = [
    {
      "id": 1001,
      "name": "War and Piece",
      "author": "Leo Tolstoy",
      "price": 2000,
      "pages": 1225
    }
  ];

  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));  
  cart.removeObject(1000);

  expect(cart.items).toEqual(correct);
});