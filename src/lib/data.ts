import { Category, Product } from './types';

export const categories: Category[] = [
    { id: 'burgers', name: 'Burgers', slug: 'burgers', image: '/images/burgers.jpg' },
    { id: 'pizza', name: 'Pizza', slug: 'pizza', image: '/images/pizza.jpg' },
    { id: 'sushi', name: 'Sushi', slug: 'sushi', image: '/images/sushi.jpg' },
    { id: 'drinks', name: 'Drinks', slug: 'drinks', image: '/images/drinks.jpg' },
];

export const products: Product[] = [
    // Burgers
    {
        id: 'b1',
        name: 'Classic Cheeseburger',
        description: 'Juicy beef patty, cheddar cheese, lettuce, tomato, and our secret sauce.',
        price: 12.99,
        categoryId: 'burgers',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800',
        calories: 650,
        ingredients: ['Angus Beef', 'Brioche Bun', 'Cheddar Cheese', 'Iceberg Lettuce', 'Roma Tomato', 'House Sauce'],
        recipeSteps: [
            'Grill the patty to medium-rare.',
            'Toast the brioche bun with butter.',
            'Melt aged cheddar over the patty.',
            'Assemble with fresh veggies and sauce.'
        ],
        modifiers: [
            {
                id: 'extras',
                name: 'Extras',
                required: false,
                multiSelect: true,
                options: [
                    { id: 'bacon', name: 'Crispy Bacon', price: 2.0 },
                    { id: 'avocado', name: 'Avocado', price: 1.5 },
                ],
            },
        ],
    },
    {
        id: 'b2',
        name: 'Spicy Chicken Burger',
        description: 'Crispy chicken breast, spicy mayo, jalapeños, and slaw.',
        price: 11.99,
        categoryId: 'burgers',
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=800',
        calories: 600,
        isSpicy: true,
    },
    {
        id: 'b3',
        name: 'Mushroom Swiss Burger',
        description: 'Beef patty, sautéed mushrooms, Swiss cheese, and caramelized onions.',
        price: 13.50,
        categoryId: 'burgers',
        image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=800',
        calories: 720,
    },
    {
        id: 'b4',
        name: 'BBQ Bacon Burger',
        description: 'Beef patty, crispy bacon, onion rings, cheddar cheese, and BBQ sauce.',
        price: 14.50,
        categoryId: 'burgers',
        image: 'https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?auto=format&fit=crop&q=80&w=800',
        calories: 850,
    },

    // Pizza
    {
        id: 'p1',
        name: 'Margherita',
        description: 'Classic tomato sauce, fresh mozzarella, basil, and olive oil.',
        price: 14.00,
        categoryId: 'pizza',
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=800',
        calories: 800,
        isVegetarian: true,
        modifiers: [
            {
                id: 'size',
                name: 'Size',
                required: true,
                multiSelect: false,
                options: [
                    { id: 'med', name: 'Medium (12")', price: 0 },
                    { id: 'large', name: 'Large (14")', price: 4 },
                ],
            },
        ]
    },
    {
        id: 'p2',
        name: 'Pepperoni Feast',
        description: 'Double pepperoni, extra mozzarella, and oregano.',
        price: 16.50,
        categoryId: 'pizza',
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=800',
        calories: 950,
    },
    {
        id: 'p3',
        name: 'Four Cheese',
        description: 'Mozzarella, gorgonzola, parmesan, and provolone.',
        price: 15.50,
        categoryId: 'pizza',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
        calories: 880,
        isVegetarian: true,
    },
    {
        id: 'p4',
        name: 'Veggie Supreme',
        description: 'Bell peppers, onions, mushrooms, olives, and fresh tomatoes.',
        price: 14.99,
        categoryId: 'pizza',
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=800',
        calories: 780,
        isVegetarian: true,
    },

    // Sushi
    {
        id: 's1',
        name: 'Dragon Roll',
        description: 'Shrimp tempura, cucumber, topped with avocado and eel sauce.',
        price: 15.99,
        categoryId: 'sushi',
        image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&q=80&w=800',
        calories: 500,
    },

    // Drinks
    {
        id: 'd1',
        name: 'Homemade Lemonade',
        description: 'Freshly squeezed lemons with a hint of mint.',
        price: 4.50,
        categoryId: 'drinks',
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800',
        isVegetarian: true,
    },
];
