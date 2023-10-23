const getTopMovers = (stockData) => {
    // Check if stockData is an object with a 'stocks' property
    if (!stockData || !Array.isArray(stockData.stocks)) {
      // Handle the case where stockData is not in the expected format
      return [];
    }
  
    const stocks = stockData.stocks;
  
    // Ensure that each item in stocks is an object with the required properties
    const validStockData = stocks.filter(item => {
      return (
        typeof item === 'object' &&
        'Symbol' in item &&
        'Price' in item &&
        'Change' in item
      );
    });
  
    // Parse string values to numbers
    validStockData.forEach(stock => {
      stock.Price = parseFloat(stock.price);
      stock.Change = parseFloat(stock.change);
    });
  
    // Sort and return the top movers
    return validStockData.sort((a, b) => b.Change - a.Change).slice(0, 10);
  };
  
  module.exports = {
    getTopMovers,
  };
  