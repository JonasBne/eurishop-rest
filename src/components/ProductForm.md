```jsx


const handleSubmit = (data: ProductDTO) => {
  console.log(data)
}


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
        <Label area="sku">Serial Number</Label>
          <Input type="text">{initialData["sku"]} />
        <Label area="title">Serial Number</Label>
          <Input type="text">{initialData["title"]} />
        <Label area="title">Serial Number</Label>
          <TextArea>{initialData["desc"]} />
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
