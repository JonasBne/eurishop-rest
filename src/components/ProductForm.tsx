import React, { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { ProductDTO } from "../api/productsApi";
import Grid from "./Grid";
import Input from "./Input";
import Label from "./Label";

interface ProductFormProps {
  initialData?: ProductDTO;
  children: ReactNode;
  gridTemplateAreas: string;
  onSubmit: (data: ProductDTO) => void;
}

function ProductForm({ gridTemplateAreas, onSubmit }: ProductFormProps) {
  const { handleSubmit } = useForm<ProductDTO>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid gridTemplateAreas={gridTemplateAreas}>
        <Label>Serial Number</Label>
        <Input id="sku" name="sku" placeholder="test" />
      </Grid>
    </form>
  );
}

export default ProductForm;
