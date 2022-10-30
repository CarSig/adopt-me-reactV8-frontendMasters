const fetchFactory = async ({ queryKey }) => {
    const link = queryKey[1];
    if (!link) return [];

    const apiRes = await fetch(`http://pets-v2.dev-apis.com${link}`);

    if (!apiRes.ok) {
        throw new Error(`${link} fetch not ok`);
    }

    return apiRes.json();
}

export default fetchFactory;