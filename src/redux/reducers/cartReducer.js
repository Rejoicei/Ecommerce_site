// cartReducer.js

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, { ...action.payload, quantity: 1 }];
      
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload);
      
    case 'INCREASE_QUANTITY':
      return state.map(item =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      );
      
    case 'DECREASE_QUANTITY':
      return state.map(item =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      
    default:
      return state;
  }
};

export default cartReducer;
