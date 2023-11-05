import { fetchData } from '../fetchData';

describe('fetchData Function', () => {
    it('should fetch data successfully', async () => {
        global.fetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue({ key: 'value' }),
        });

        const endPoint = 'endpoint';
        const data = await fetchData(endPoint);

        expect(fetch).toHaveBeenCalledWith(`https://tools.texoit.com/backend-java/api/movies?${endPoint}`);
        expect(data).toEqual({ key: 'value' });
    });

    it('should handle errors', async () => {
        global.fetch = jest.fn().mockRejectedValue(new Error('Network error'));

        const endPoint = 'endpoint';
        const data = await fetchData(endPoint);

        expect(fetch).toHaveBeenCalledWith(`https://tools.texoit.com/backend-java/api/movies?${endPoint}`);
        expect(data).toBeUndefined();
    });

    afterEach(() => {
        global.fetch.mockClear();
    });
});
