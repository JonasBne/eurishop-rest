import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';
import Product from '../../domain/product';
import Table from './Table';
import theme from '../../theme/theme';

// TODO: move to table.spec.tsx
// TODO: test of tabel genoeg rijen heeft in overeenstemming met aantal producten

// TODO: test aantal rijen in tabel met aantal rijen van producten api

describe('product list', () => {
  let sortExpression: string;
  let columns: any[];
  let products: Product[];

  let mockSetSortExpression: () => void;
  let mockOnLoad: () => void;
  let mockOnRowClick: () => void;
  let mockOnActionClick: () => void;

  beforeEach(() => {
    sortExpression = '';
    products = [
      {
        id: 1,
        title: 'product1',
        sku: 'AAA',
        basePrice: 10.0,
        price: 10.0,
        image: 'https://dummyimage.com',
        desc: 'description product1',
      },
      {
        id: 2,
        title: 'product2',
        sku: 'BBB',
        basePrice: 20.0,
        price: 20.0,
        image: 'https://dummyimage.com',
        desc: 'description product2',
      },
    ] as Product[];
    columns = [
      {
        name: 'id',
        label: 'Product ID',
        sortable: true,
        id: 'col1',
      },
      {
        name: 'sku',
        label: 'Product number',
        sortable: true,
        id: 'col2',
      },
      {
        name: 'title',
        label: 'Title',
        sortable: true,
        id: 'col3',
      },
      {
        name: 'desc',
        label: 'Description',
        sortable: false,
        id: 'col4',
      },
      {
        name: 'image',
        label: 'Image URL',
        sortable: false,
        id: 'col5',
      },
      {
        name: 'stocked',
        label: 'In stock',
        sortable: true,
        id: 'col6',
      },
      {
        name: 'basePrice',
        label: 'Base price',
        sortable: true,
        id: 'col7',
      },
      {
        name: 'price',
        label: 'Unit price',
        sortable: true,
        id: 'col8',
      },
      {
        name: 'actions',
        label: 'Actions',
        sortable: false,
        id: 'col9',
      },
    ];
    mockSetSortExpression = jest.fn();
    mockOnLoad = jest.fn();
    mockOnRowClick = jest.fn();
    mockOnActionClick = jest.fn();
  });

  test('click fires onRowClick event', () => {
    render(
      <ThemeProvider theme={theme}>
        <Table
          data={products}
          columns={columns}
          onLoadData={mockOnLoad}
          onRowClick={mockOnRowClick}
          onActionClick={mockOnActionClick}
          sortExpression={sortExpression}
          setSortExpression={mockSetSortExpression}
        />
      </ThemeProvider>,
    );

    userEvent.click(screen.getAllByRole('cell')[0]);

    expect(mockOnRowClick).toBeCalledTimes(1);
  });
  test('click fires onLoadData event', () => {
    render(
      <ThemeProvider theme={theme}>
        <Table
          data={products}
          columns={columns}
          onLoadData={mockOnLoad}
          onRowClick={mockOnRowClick}
          onActionClick={mockOnActionClick}
          sortExpression={sortExpression}
          setSortExpression={mockSetSortExpression}
        />
      </ThemeProvider>,
    );

    userEvent.click(screen.getByRole('button', { name: /load more/i }));

    expect(mockOnLoad).toBeCalledTimes(1);
  });

  test('click fires onActionClick event', () => {
    render(
      <ThemeProvider theme={theme}>
        <Table
          data={products}
          columns={columns}
          onLoadData={mockOnLoad}
          onRowClick={mockOnRowClick}
          onActionClick={mockOnActionClick}
          sortExpression={sortExpression}
          setSortExpression={mockSetSortExpression}
        />
      </ThemeProvider>,
    );

    userEvent.click(screen.getAllByLabelText('trash-bin')[0]);

    expect(mockOnActionClick).toBeCalledTimes(1);
  });

  test('click fires setSortExpression', () => {
    render(
      <ThemeProvider theme={theme}>
        <Table
          data={products}
          columns={columns}
          onLoadData={mockOnLoad}
          onRowClick={mockOnRowClick}
          onActionClick={mockOnActionClick}
          sortExpression={sortExpression}
          setSortExpression={mockSetSortExpression}
        />
      </ThemeProvider>,
    );

    userEvent.click(screen.getAllByLabelText('sort-icon')[0]);

    expect(mockSetSortExpression).toBeCalledTimes(1);
  });
});
