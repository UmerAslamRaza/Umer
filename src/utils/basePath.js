export const withBasePath = (path) => {
    const base = process.env.NODE_ENV === 'production' ? '/Umer' : '';
    return `${base}${path}`;
};
