```jsx

interface ProductFormProps {
  initialData?: ProductDTO;
  gridTemplateAreas: string;
  onSubmit: (data: ProductDTO) => void;
}

function ProductForm({ gridTemplateAreas, onSubmit, initialData }: ProductFormProps) {
  const { handleSubmit } = useForm<ProductDTO>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid gridTemplateAreas={gridTemplateAreas}>
        <Label>Serial Number</Label>
        <Input type="text">{initialData["sku"]}</Input>
                <Label>Serial Number</Label>
        <Input type="text">{initialData["sku"]}</Input>
      </Grid>
    </form>
  );
}

ProductForm.defaultProps = {
  initialData: {
    sku: "",
    title: "",
    desc: "",
    image: "",
    stocked: false,
    basePrice: 0,
    price: 0
  }
}

export default ProductForm;


```
