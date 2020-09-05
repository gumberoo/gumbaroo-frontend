import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import StudentDashboard from './StudentDashboard';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { rootReducer } from '../reducers';


const store = createStore(rootReducer, {
  setStudentName:'Bill'
})
describe('StudentDashboards', () => {
it('Should render the app name and student name', () => {
const { getByText, getByTestId } = render(
  <MemoryRouter>
    <Provider store={store}>
      <StudentDashboard/>
    </Provider>
  </MemoryRouter>
)
const appName = getByText('Gumberoo')
const studentName = getByText('Bill')
})
})