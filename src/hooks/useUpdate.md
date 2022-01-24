```jsx

// src > hooks > useUpdate.ts

function useUpdate(url, id, data) {
  const postData = async () => {
    try {
    const response = await fetch (url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    }

  }
}

// src > components > ProductDetail > ProductEdit.tsx

```
