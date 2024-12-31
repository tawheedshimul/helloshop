export const fetchSections = () => {
    return [
      {
        id: 1,
        name: "Men & Women",
        subcategories: [
          {
            id: 101,
            name: "Men",
            products: [
              { id: 1001, name: "Formal Shirt", price: 35 },
              { id: 1002, name: "Casual Trousers", price: 45 },
              { id: 1003, name: "Leather Belt", price: 25 },
            ],
          },
          {
            id: 102,
            name: "Women",
            products: [
              { id: 1004, name: "Evening Dress", price: 60 },
              { id: 1005, name: "Handbag", price: 50 },
              { id: 1006, name: "Heels", price: 40 },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Children",
        subcategories: [
          {
            id: 201,
            name: "Toys",
            products: [
              { id: 2001, name: "Building Blocks", price: 20 },
              { id: 2002, name: "Remote Car", price: 35 },
            ],
          },
          {
            id: 202,
            name: "Clothing",
            products: [
              { id: 2003, name: "T-shirt", price: 15 },
              { id: 2004, name: "Jeans", price: 25 },
            ],
          },
        ],
      },
      {
        id: 3,
        name: "Eyesores",
        subcategories: [
          {
            id: 301,
            name: "Sunglasses",
            products: [
              { id: 3001, name: "Polarized Sunglasses", price: 75 },
              { id: 3002, name: "Aviator Sunglasses", price: 90 },
            ],
          },
          {
            id: 302,
            name: "Contact Lenses",
            products: [
              { id: 3003, name: "Blue Tint Lenses", price: 30 },
              { id: 3004, name: "Daily Use Lenses", price: 40 },
            ],
          },
        ],
      },
      {
        id: 4,
        name: "Beauty Materials",
        subcategories: [
          {
            id: 401,
            name: "Makeup",
            products: [
              { id: 4001, name: "Lipstick", price: 15 },
              { id: 4002, name: "Foundation", price: 20 },
            ],
          },
          {
            id: 402,
            name: "Skincare",
            products: [
              { id: 4003, name: "Moisturizer", price: 25 },
              { id: 4004, name: "Sunscreen", price: 18 },
            ],
          },
        ],
      },
      {
        id: 5,
        name: "Home Eyesores",
        subcategories: [
          {
            id: 501,
            name: "Decor",
            products: [
              { id: 5001, name: "Table Lamp", price: 45 },
              { id: 5002, name: "Wall Clock", price: 35 },
            ],
          },
          {
            id: 502,
            name: "Furniture",
            products: [
              { id: 5003, name: "Wooden Chair", price: 55 },
              { id: 5004, name: "Sofa", price: 300 },
            ],
          },
        ],
      },
      {
        id: 6,
        name: "Electronic",
        subcategories: [
          {
            id: 601,
            name: "Mobiles",
            products: [
              { id: 6001, name: "Smartphone", price: 799 },
              { id: 6002, name: "Flip Phone", price: 499 },
            ],
          },
          {
            id: 602,
            name: "Laptops",
            products: [
              { id: 6003, name: "Gaming Laptop", price: 1200 },
              { id: 6004, name: "Ultrabook", price: 999 },
            ],
          },
        ],
      },
    ];
  };
  