import authorize from "./authorize"

describe('Github Authorize', () => {
    let dependencies;

    it('returns success', async () => {
        dependencies = {
            oauth: jest.fn().mockResolvedValue({
                token: 'x4y2bt6'
            }),
            Github: jest.fn().mockImplementation(() => ({
                users: {
                    getAuthenticated: jest.fn().mockResolvedValue({
                        data: {
                            id: '1yy4jfj2kg',
                            email: 'a@gmail.com',
                            name: 'andrew'
                        }
                    })
                }
            })),
            Users: {
                put: jest.fn().mockResolvedValue({})
            }
        }
        const input = {
            body: null,
            code: '1f13t5h',
            installation_id: 'a1',
            setup_action: 'install'
        };

        const result = await authorize(input, dependencies);

        expect(result).toEqual({ message: 'Success' });
    });
})
