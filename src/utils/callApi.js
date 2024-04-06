import axios from "axios";

const BASE_URL = "..";

export const getData = async (resource) => {
    const { data } = await axios.get(`${BASE_URL}/${resource}`);
    return data;
};
