export interface MenuItem {
  name: string;
  description: string;
  price: number;
  category: 'starter' | 'main' | 'dessert';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
