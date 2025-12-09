
export interface Category {
    id: string;
    name: string;
    slug: string;
    image?: string;
}

export interface ModifierOption {
    id: string;
    name: string;
    price: number;
}

export interface Modifier {
    id: string;
    name: string;
    required: boolean;
    multiSelect: boolean;
    options: ModifierOption[];
}

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    categoryId: string;
    image: string;
    isVegetarian?: boolean;
    isSpicy?: boolean;
    calories?: number;
    modifiers?: Modifier[];
    ingredients?: string[];
    recipeSteps?: string[];
}

export interface CartItem extends Product {
    cartId: string; // Unique ID for the cart entry (product + modifiers)
    quantity: number;
    selectedModifiers: {
        modifierId: string;
        optionId: string;
        name: string;
        price: number;
    }[];
}
