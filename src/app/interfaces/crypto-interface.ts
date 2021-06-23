export interface CryptoAsset {
    "asset_id": string,
    "name": string,
    "type_is_crypto": number,
    "data_start": Date,
    "data_end": Date,
    "data_quote_start": Date,
    "data_quote_end": Date,
    "data_orderbook_start": Date,
    "data_orderbook_end": Date,
    "data_trade_start": Date,
    "data_trade_end": Date,
    "data_symbols_count": number,
    "volume_1hrs_usd": number,
    "volume_1day_usd": number,
    "volume_1mth_usd": number,
    "price_usd": number
  }

  export interface CryptoRate {
    "time": Date,
    "asset_id_base": string,
    "asset_id_quote": string,
    "rate": number
  }

  export interface CryptoTime {
    "time_period_start": string,
    "time_period_end": string,
    "time_open": string,
    "time_close": string,
    "rate_open": number,
    "rate_high": number,
    "rate_low": number,
    "rate_close": number
  }