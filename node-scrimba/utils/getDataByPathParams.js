export const getDataByPathParams = (data, locationType, locationName) => {
    return data.filter((destination) => {
        return destination.continent.toLowerCase() === continent.toLowerCase();
    });
};
