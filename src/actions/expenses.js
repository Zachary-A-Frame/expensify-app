import uuid from 'uuid';
import database from '../firebase/firebase.js'

// ------ Outline: 

// Components call action generator
// Action generator returns object
// Component dispatches object
// Redux store changes

// ----- TODO: Asynchronous Actions 

// Components calls action generator 
// Action generator returns function
// Component dispatches function (?)
// Function runs (has the ability to dispatch to other actions and do whatever it wants)



// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
})

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
    note = '',
    amount = 0,
    createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt }

    return database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
    })
  }
}

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({ id }))
    
    })
}}

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
})

// // Our asynchronous fetch 
// export const startSetExpenses 
// Fetch all expense data 
// Parse into array
// Dispatch SET_EXPENSES

export const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses').once('value').then((snapshot) => {
      const expenses = [];

      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })

      dispatch(setExpenses(expenses))
    })
  }
}