const getExample = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    console.log(response);
    console.log(await response.json());
}

getExample();