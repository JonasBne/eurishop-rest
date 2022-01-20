import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Form from "../../components/Form";
import { useGetProduct } from "../../api/productsApi";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorModal from "../../components/ErrorModal/ErrorModal";

function ProductDetail() {
  const [editMode, setEditMode] = useState<boolean>(false);

  const { productId } = useParams<string>();
  const { loading, error, product } = useGetProduct(
    `${productId !== undefined ? productId : ""}`
  );

  const [formData, setFormData] = useState({
    id: 0,
    sku: "",
    title: "",
    desc: "",
    image: "",
    stocked: false,
    basePrice: 0,
    price: 0,
  });

  useEffect(() => {
    if (product !== undefined) {
      setFormData(product);
    }
  }, [product]);

  const gridTemplateAreas = `
  "id sku title . "
  "basePrice price stocked ."
  "image image . ."
  "desc desc desc desc"
  `;

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const handleCancel = () => {
    setEditMode(!editMode);
    // TODO: is this a clean way of setting the data back to the original content (and is this a undefined check)?
    if (product !== undefined) {
      setFormData(product);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name } = target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: target.value,
      };
    });
  };

  // TODO: is this a clean way for guarding the undefined state?
  return (
    <>
      {loading && !error && <LoadingSpinner />}
      {!loading && error && (
        <ErrorModal name={error.name} message={error.message} />
      )}
      {!loading && !error && product !== undefined && (
        <Form
          data={formData}
          title="Product Detail"
          width="50rem"
          margin="2rem auto"
          buttonMargin="2rem"
          gridTemplateAreas={gridTemplateAreas}
          gridRowGap="1.25rem"
          onEdit={handleEdit}
          editMode={editMode}
          onChange={handleInputChange}
          onCancel={handleCancel}
        />
      )}
    </>
  );
}

export default ProductDetail;
