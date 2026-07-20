const postExample = async () => {
    const body = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    };

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            'User-Agent': 'undici-stream-example',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    console.log(response);
    console.log(await response.json());
}

postExample();