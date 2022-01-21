
```jsx
const Form = ({ inputs, data, children }) => {
    const period = inputs.find(item => item.name === 'period')
    const handleChange = () => {

    }
    const formContext = {
        handleChange() {

        }
    }
    return children(formContext)
    // return (
    //     <form>
    //         <input />
    //         {period.type({ value: data['period'], handleChange})}  
    //     </form>
    // )

    const FormContext = React.createContext();
    return (
        <FormContext.Provider value={{values: data, handleChange}}>
            <form>
                {children}
            </form>
        </FormContext.Provider>

    )
}

const Input = ({name}) => {
    const context = useContext(FormContext);
    return (
        <input name="name" value={context.values[name]} onChange={context.handleChange}/>
    )
}


const App = () => {
    const handleSubmit = (formData) => {
        console.log(formData);
    }

    const handleCancel = () => {
        console.log(formData);
    }
    
    const buttons = [
        { label: 'save', type: 'submit' },
        { label: 'cancel', type: 'button', onClick: handleCancel }
        { label: 'other', type: 'button', onClick: handleCancel }
    ]

    const data = {
        name: 'peter',
        desc: 'xxxx',
        birthday: new Date();
        profession: 'developer'   // developer, manager, ...
    }

    const inputs = [
        { name: 'name', type: 'input' },
        { name: 'desc', type: 'texarea' },
        { name: 'birthday', type: 'datepicker' },
        { name: 'profession', type: 'select', options: ['developer', 'manager'] }
    ]

    return (
        <Form onSubmit={handleSubmit} buttons={buttons} data={data} inputs={inputs} gridTemplateAreas="..."/>
    )
}
```


```jsx
const Form = ({children}) => {
    return (
        <form>
            <input >
            <input >
            {children}
        </form>
    )
}


const App = () => {
    const handleSubmit = (formData) => {
        console.log(formData);
    }

    const handleCancel = () => {
        console.log(formData);
    }

    const button = [
        <Button type="button" onClick={handleCancel}>Cancel</Button>
    ]
    
    const data = {
        name: 'peter',
        desc: 'xxxx',
        birthday: new Date();
        profession: 'developer'   // developer, manager, ...
        period: { start: '2000/01/01', end: '2022/01/02' }
    }

    // const inputs = [
    //     { name: 'name', type: 'input' },
    //     { name: 'desc', type: 'texarea' },
    //     { name: 'period', type: (formContext) => <DateRange value={formContext.value} onChange={formContext.handleChange}/> },
    //     { name: 'birthday', type: 'datepicker' },
    //     { name: 'profession', type: 'select', options: ['developer', 'manager'] }
    // ]

    return (
        <Form onSubmit={handleSubmit} data={data} gridTemplateAreas="...">
            <Input name="name" type="text" value={value} onChange={handleChange}>
            <Input name="desc" type="texarea">
            <DateRange name="period">
            <DatePicker name="birthday">
            <Select name="profession" option={['developer', 'manager'] } ></Select>
            <Fexbox>
                <AnimatedButton type="submit">Save</AnimatedButton>,
                <Button type="button" onClick={handleCancel}>Cancel</Button>
            </Fexbox>
        </Form>
    )

    return (
        <Form onSubmit={handleSubmit} data={data} gridTemplateAreas="...">
            {(formContext) => {
                return (
                    <Input name="name" type="text" value={formContext.values.name} onChange={formContext.handleChange}>
                    <Input name="desc" type="texarea" value={formContext.values.desc} onChange={formContext.handleChange}>
                    <DateRange name="period">
                    <DatePicker name="birthday">
                    <Select name="profession" option={['developer', 'manager'] } ></Select>
                    <Fexbox>
                        <AnimatedButton type="submit">Save</AnimatedButton>,
                        <Button type="button" onClick={handleCancel}>Cancel</Button>
                    </Fexbox>
                )
            }}
        </Form>
    )

    return (
        <Form onSubmit={handleSubmit} data={data} gridTemplateAreas="...">
            <Input name="name" type="text" >
            <Input name="desc" type="texarea" >
            <DateRange name="period">
            <DatePicker name="birthday">
            <Select name="profession" option={['developer', 'manager'] } ></Select>
            <Fexbox>
                <AnimatedButton type="submit">Save</AnimatedButton>,
                <Button type="button" onClick={handleCancel}>Cancel</Button>
            </Fexbox>
        </Form>
    )

}
```

```tsx
    const { data } = useFetch('http://domain/api/user')

    const { post, put, delete } = useUpdate('http://domain/api/user')
    const handleSubmit = (formValues) => {
        post(formValues)
        put(1, formValues)
        delete(1)
    }
```