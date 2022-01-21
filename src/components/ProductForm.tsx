import React, { ReactNode } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ProductDTO } from "../api/productsApi";

interface ProductFormProps {
  children: ReactNode;
}

function ProductForm({ children }: ProductFormProps) {
  const { register, handleSubmit } = useForm<ProductDTO>();
  const onSubmit: SubmitHandler<ProductDTO> = (data) => console.log(data);

  return <form onSubmit={handleSubmit(onSubmit)}>{children}</form>;
}

export default ProductForm;
