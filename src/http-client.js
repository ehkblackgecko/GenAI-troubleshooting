const axios = require('axios');

const fetchStockData = async () => {
    try {
      const response = await axios.get('https://mock-api-virid.vercel.app/api/getStockMoves');
      console.log('API Response:', response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  

module.exports = {
  fetchStockData,
};


