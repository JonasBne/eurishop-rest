/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useForm } from "react-hook-form";
import { ProductDTO } from "../api/productsApi";
import Grid from "./Grid";
import Label from "./Label";
import InputField from "./InputField";

interface ProductFormProps {
  initialData?: ProductDTO;
  gridTemplateAreas: string;
  onSubmit: (data: ProductDTO) => void;
}

function ProductForm({
  initialData = {
    id: 0,
    sku: "",
    title: "",
    desc: "",
    image: "",
    stocked: false,
    basePrice: 0,
    price: 0,
  },
  gridTemplateAreas,
  onSubmit,
}: ProductFormProps) {
  const { register, handleSubmit } = useForm<ProductDTO>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid gridTemplateAreas={gridTemplateAreas}>
        <InputField
          label="Serial Number"
          id="sku"
          type="text"
          defaultValue={initialData.sku}
          {...register("sku")}
        />
        <InputField
          label="Title"
          id="title"
          type="text"
          defaultValue={initialData.title}
          {...register("title")}
        />
        <InputField
          label="In stock"
          id="stocked"
          type="text"
          defaultValue={initialData.stocked ? "Yes" : "No"}
          {...register("stocked")}
        />
        <InputField
          label="Base price"
          id="basePrice"
          type="number"
          defaultValue={initialData.basePrice}
          {...register("basePrice")}
        />
        <InputField
          label="Unit price"
          id="price"
          type="number"
          defaultValue={initialData.price}
          {...register("price")}
        />
        <InputField
          label="Image URL"
          id="image"
          type="text"
          defaultValue={initialData.image}
          {...register("image")}
        />
        <Label htmlFor="desc">
          Description
          <textarea
            id="desc"
            defaultValue={initialData.desc}
            {...register("desc")}
          />
        </Label>
      </Grid>
    </form>
  );
}

export default ProductForm;
