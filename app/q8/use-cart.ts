import { create } from 'zustand';

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: Product[];
  totalPrice: number;
  addItem(product: Product): void;
  removeItem(productId: number): void;
  updateItemQuantity(productId: number, quantity: number): void;
}

export const useCart = create<CartState>((set) => ({
  items: [],
  totalPrice: 0,
  addItem(product) {
    set((state) => {
      const existingProduct = state.items.find((item) => item.name === product.name);
      if (existingProduct) {
        return {
          items: state.items.map((item) => {
            return item.name === product.name ? {
              ...item,
              price: product.price,
              quantity: item.quantity + product.quantity,
            } : item;
          }),
          totalPrice: state.totalPrice + (product.price * product.quantity),
        };
      }

      return {
        items: [...state.items, product],
        totalPrice: state.totalPrice + (product.price * product.quantity),
      };
    });
  },
  removeItem(productId) {
    set((state) => {
      const removedProduct = state.items.find((item) => item.id === productId);

      return {
        items: state.items.filter((item) => item.id !== productId),
        totalPrice: state.totalPrice - ((removedProduct?.price || 0) * (removedProduct?.quantity || 0)),
      };
    });
  },
  updateItemQuantity(productId, quantity) {
    set((state) => {
      const updatedProduct = state.items.find((item) => item.id === productId);
      const newQuantity = Math.max(0, quantity);

      return {
        items: state.items.map((item) => {
          return item.id === productId ? {
            ...item,
            quantity: newQuantity,
          } : item;
        }),
        totalPrice: state.totalPrice + ((updatedProduct?.price || 0) * (newQuantity - (updatedProduct?.quantity || 0))),
      };
    });
  },
}));
