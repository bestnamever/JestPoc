import React, { useEffect } from 'react';
import App from './App';
import { render, RenderResult, screen, fireEvent, act } from '@testing-library/react';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>

mockedAxios.get.mockResolvedValue({
  data: {
    code: 200,
    data: [
      { status: 'div', value: 'Learn Jest' },
      { status: 'input', value: 'Learn Enzyme' }
    ],
    message: 'success'
  }
});

let wrapper: RenderResult;
let header: HTMLDivElement;
let list: HTMLDivElement;
let headerInput: HTMLInputElement;
let count: HTMLDivElement;
let ListItem: HTMLLIElement[];
let input: HTMLInputElement[];
let deleteBtn: HTMLDivElement[];


beforeEach(async () => {
  await act(async () => {
    wrapper = render(<App />);
  });
  header = wrapper.getByTestId("header") as HTMLDivElement;
  list = wrapper.getByTestId("list") as HTMLDivElement;
  headerInput = wrapper.getByTestId('header-input') as HTMLInputElement;
  count = wrapper.queryByTestId('count') as HTMLDivElement;
  ListItem = wrapper.queryAllByTestId('list-item') as HTMLLIElement[];
  input = wrapper.queryAllByTestId('input') as HTMLInputElement[];
  deleteBtn = wrapper.queryAllByTestId('delete-item') as HTMLDivElement[];
});

afterEach(() => {
  wrapper = null;
  header = null;
  list = null;
  headerInput = null;
  count = null;
  ListItem = [];
  input = [];
  deleteBtn = [];
});



describe('Should render App correctly', () => {

  test('Should render components correctly', () => {
    expect(header).toBeInTheDocument();
    expect(list).toBeInTheDocument();
  })
})

describe('Should UseEffect works correctly', () => {
  describe('When API calls successfully', () => {
    it("Should return list", async () => {

      expect(ListItem).not.toBeNull();
      expect(ListItem.length).toBe(2)

      expect(count).not.toBeNull();
      expect(count.textContent).toBe('2')
    })
    describe('When API calls erroneously', () => {
    })
  })
})

