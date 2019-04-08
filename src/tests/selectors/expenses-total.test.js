import expensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test ('should return 0 if no expenses', () => {
    const res = expensesTotal
})

test('TShould correctly add up a single expense', () => {
    const res = expensesTotal([expenses[0]])
    expect(res).toBe(195)
  });

  test('Expect correctly add up multiple expenses', () => {
    const res = expensesTotal(expenses)
    expect(res).toBe(114195)
  });