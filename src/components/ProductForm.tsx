/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useForm } from "react-hook-form";
import { ProductDTO } from "../api/productsApi";
import Grid from "./Grid";
import Input from "./Input";
import Label from "./Label";

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
        <Label htmlFor="sku">
          Serial Number
          <Input
            id="sku"
            type="text"
            defaultValue={initialData.sku}
            {...register("sku")}
          />
        </Label>
        <Label htmlFor="title">
          Title
          <Input
            id="title"
            type="text"
            defaultValue={initialData.title}
            {...register("title")}
          />
        </Label>
        <Label htmlFor="stocked">
          In stock
          <Input
            id="stocked"
            type="text"
            defaultValue={initialData.stocked ? "Yes" : "No"}
            {...register("stocked")}
          />
        </Label>
        <Label htmlFor="basePrice">
          Base price
          <Input
            id="basePrice"
            type="number"
            defaultValue={initialData.basePrice}
            {...register("basePrice")}
          />
        </Label>
        <Label htmlFor="price">
          Unit price
          <Input
            id="price"
            type="number"
            defaultValue={initialData.price}
            {...register("price")}
          />
        </Label>
        <Label htmlFor="price">
          Unit price
          <Input
            id="price"
            type="number"
            defaultValue={initialData.price}
            {...register("price")}
          />
        </Label>
        <Label htmlFor="image">
          Image URL
          <Input
            id="image"
            type="text"
            defaultValue={initialData.image}
            {...register("image")}
          />
        </Label>
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
