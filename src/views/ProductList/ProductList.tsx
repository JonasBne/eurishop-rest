import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useGetProducts, useUpdateProduct2 } from '../../api/productsApi';
import Table from '../../components/Table/Table';
import LoadingSpinner from '../../components/LoadingSpinner';
import sortBy from '../../utils/sortBy';
import ErrorModal from '../../components/ErrorModal/ErrorModal';
import Button from '../../components/Button';
import toasts from '../../components/toasts';

function ProductList() {
  const { succesToast, failToast } = toasts();
  const navigate = useNavigate();
  const {
    loading, error, products, refetch,
  } = useGetProducts();
  // const { error: deleteError, data: deletedData, update } = useUpdateProduct();
  const { error: deleteError, data: deletedData, remove } = useUpdateProduct2();

  const [sortExpression, setSortExpression] = useState<string>('');

  useEffect(() => {
    if (deleteError) {
      failToast(deleteError);
    }
    if (deletedData) {
      succesToast(`Item with id: ${deletedData.id} removed!`);
      refetch();
    }
  }, [deleteError, deletedData]);

  const handleRedirect = (productId: string) => {
    navigate(`/products/${productId}/edit`);
  };

  const handleAction = (productId: string) => {
    remove(productId);
  };

  // TODO: issue with sorting on Product ID and Product Number (order changes)

  const sortedProducts = sortBy(products ?? [], sortExpression);

  const columns = [
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

  const handleAddProductClick = () => {
    navigate('/products/new');
  };

  return (
    <>
      {loading && !error && <LoadingSpinner />}
      {error && <ErrorModal name={error.name} message={error.message} />}
      {products && (
        <>
          <Button
            m="2rem 0 0 2rem"
            p="0.5rem 2rem"
            variant="primary"
            onClick={handleAddProductClick}
          >
            Add product +
          </Button>
          <Table
            data={sortedProducts}
            columns={columns}
            sortExpression={sortExpression}
            setSortExpression={setSortExpression}
            onRowClick={handleRedirect}
            onActionClick={handleAction}
            my="2.5rem"
            mx="2rem"
          />
        </>
      )}
    </>
  );
}

export default ProductList;
