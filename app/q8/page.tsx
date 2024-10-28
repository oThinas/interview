'use client';

import { Header } from '@/components/header';
import { QUESTIONS } from '@/config/questions';
import { useCallback, useState } from 'react';
import { Product, useCart } from './use-cart';

export default function Page() {
  const { addItem, items, removeItem, totalPrice, updateItemQuantity } = useCart();
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productQuantity, setProductQuantity] = useState(1);

  const handleAddItem = useCallback((product: Product) => {
    addItem(product);
    setProductName('');
    setProductPrice(0);
    setProductQuantity(1);
  }, [addItem]);

  const handleRemoveItem = useCallback((productId: number) => {
    removeItem(productId);
  }, [removeItem]);

  const handleUpdateItemQuantity = useCallback((productId: number, quantity: number) => {
    updateItemQuantity(productId, quantity);
  }, [updateItemQuantity]);

  return (
    <div>
      <Header description={QUESTIONS.q8} />

      <h2>
        Carrinho de compras
      </h2>

      <ul className="list-inside list-disc">
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - R${item.price.toFixed(2).replace('.', ',')} - Quantidade: {item.quantity}

            <button className="border border-white" onClick={() => handleRemoveItem(item.id)}>
              Remover
            </button>

            <input
              type="number" value={item.quantity} className="text-black"
              onChange={(e) => handleUpdateItemQuantity(item.id, parseInt(e.target.value))}
            />
          </li>
        ))}
      </ul>

      <h3>
        Total: R${totalPrice.toFixed(2).replace('.', ',')} - {items.length} itens
      </h3>

      <input
        type="text" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Nome do produto"
        className="text-black"
      />

      <input
        type="number" value={productPrice} onChange={(e) => setProductPrice(parseFloat(e.target.value))}
        className="text-black"
      />

      <input
        type="number" value={productQuantity} onChange={(e) => setProductQuantity(parseInt(e.target.value))}
        className="text-black"
      />

      <button
        className="border border-white"
        onClick={() => handleAddItem({
          id: items.length + 1,
          name: productName,
          price: productPrice,
          quantity: productQuantity,
        })}
      >
        Adicionar
      </button>
    </div>
  );
}
