import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'

test('Should correctly render expenses summary with one expense.', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />) 
    expect(wrapper).toMatchSnapshot()
})

test('Should correctly render expenses summary with two or more expenses.', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={2345436572} />) 
    expect(wrapper).toMatchSnapshot()
})