interface Market_data {
  price_usd: number;
  percent_change_usd_last_24_hours: number;
}

export default interface CurrencyData {
  data: {
    id: string;
    name: string;
    symbol: string;
    market_data: Market_data;
  };
}
