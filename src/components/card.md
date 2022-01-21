# Card

```jsx

interface CardProps extends Omit<BoxProps, "border" | "borderRadius"> {


}

const Card: FC<CardProps> = ({title, content, border, ...rest}) => {
    return (
        <Box border="2px solid #bacdd8" borderRadius="1.25rem" {...rest}>
            <Header4>{title}</Header4>
            <Text>{content}</Text>
            ...
        </Box>
    )
}

<Card title={title} mx="10px" border="5px solid">
    <div>
        ...
    </div>
</Card>

const ProductCard = ({product}) => {
    return (
        <Card title={product.title}>
            ...
        </Card>
    )
}

<ProductCard product={product} onBuy={handleBuy} mx="10px"  />
```