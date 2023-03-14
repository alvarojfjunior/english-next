export const getImageURLByPhrase = async (phrase: string): Promise<string> => {
    const apiKey = '34397078-7645236e8cfc56fb396627924';
    try {
        const response = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${phrase}&orientation=horizontal`);
        const data = await response.json();
        if (!data) throw ''
        const sel = Math.floor(Math.random() * (data.hits.length - 0 + 1) + 0)
        if (!sel || !data.hits) throw ''
        const randomImageURL = data.hits[sel].webformatURL;
        if (!randomImageURL) throw ''
        return randomImageURL + ''
    } catch (Exception) {
        const response = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=study&orientation=horizontal`);
        const data = await response.json();
        const sel = Math.floor(Math.random() * (data.hits.length - 0 + 1) + 0)
        const randomImageURL = data.hits[sel].webformatURL;
        return randomImageURL + ''
    }
};
