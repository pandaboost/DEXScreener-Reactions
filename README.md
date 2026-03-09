[![PandaBoost — DEX Screener Reactions](https://i.imgur.com/siYVjyB.jpeg)](https://pandaboost.app)

# DEX SCREENER REACTIONS

**Buy DEX Screener reactions for your token — rocket 🚀, fire 🔥, poop 💩, flag 🚩**

Boost your token's social proof on [DexScreener](https://dexscreener.com) with real-looking reactions.
Fast delivery, stealth mode, full refund guarantee.

---

## 💥 Service Details

- **Reaction types:** `rocket` 🚀 · `fire` 🔥 · `poop` 💩 · `flag` 🚩
- **Quantity:** 100 – 1,000 per order
- **Price:** $0.025 / reaction ($25 per 1,000)
- **Speed modes:** Slow 🐢 · Normal ⚡ · Fast 🚀
- **Supported chains:** Solana · Ethereum · BSC · Base
- **Start time:** Instant (within 60 seconds)
- **Guarantee:** Full refund if delivery fails

---

## 🌐 How to Order

### Option 1 — Web Panel
1. Go to [web.pandaboost.app](https://web.pandaboost.app)
2. Connect your wallet (EVM via WalletConnect or Solana)
3. Add funds via crypto
4. Open **New Order → DEX Screener → Reactions**
5. Choose reaction type and speed
6. Paste your pair address → confirm

### Option 2 — Telegram Bot
Open [@pandaboostbot](https://t.me/pandaboostbot) → New Order → DEX Screener → Reactions

---

## 🔌 API Example

Order DEX Screener reactions programmatically via the [PandaBoost API](https://docs.pandaboost.app).

**Base URL:** `https://web.pandaboost.app/api/v1`  
**Auth:** `x-api-key: pb_...` header

### Python
```python
import requests

API_KEY = "pb_your_api_key"
BASE_URL = "https://web.pandaboost.app/api/v1"
HEADERS = {"x-api-key": API_KEY, "Content-Type": "application/json"}

order = requests.post(f"{BASE_URL}/orders", headers=HEADERS, json={
    "serviceName": "reactions",
    "orderTypeId": "rocket",   # rocket | fire | poop | flag
    "quantity": 500,
    "fields": {
        "pair_address": "YOUR_PAIR_ADDRESS",
        "chain": "solana",     # solana | ethereum | bsc | base
        "speed": "normal"      # slow | normal | fast
    }
})

print(order.json())
# {"success": true, "data": {"order": {"publicId": "ABCD1234", "status": "processing"}, "newBalance": "..."}}
```

### JavaScript
```javascript
const res = await fetch("https://web.pandaboost.app/api/v1/orders", {
  method: "POST",
  headers: { "x-api-key": "pb_your_api_key", "Content-Type": "application/json" },
  body: JSON.stringify({
    serviceName: "reactions",
    orderTypeId: "fire",       // rocket | fire | poop | flag
    quantity: 1000,
    fields: {
      pair_address: "YOUR_PAIR_ADDRESS",
      chain: "solana",         // solana | ethereum | bsc | base
      speed: "fast"            // slow | normal | fast
    }
  })
});
const data = await res.json();
console.log(data.data.order.publicId);
```

### cURL
```bash
curl -X POST -H "x-api-key: pb_..." \
  -H "Content-Type: application/json" \
  -d '{
    "serviceName": "reactions",
    "orderTypeId": "rocket",
    "quantity": 500,
    "fields": {
      "pair_address": "ErKGCuxZeMQoS3VhFJZ77giESQphJhGpYDaUJmhApump",
      "chain": "solana",
      "speed": "normal"
    }
  }' \
  https://web.pandaboost.app/api/v1/orders
```

### Check Order Status
```bash
curl -H "x-api-key: pb_..." \
  https://web.pandaboost.app/api/v1/orders/ABCD1234
```

---

## 📦 Other Services

| Service | Price |
|---|---|
| DEX Screener Trending SOL | $1,200 / 12h · $1,600 / 24h |
| DEX Screener Trending ETH/BSC/Base | from $1,000 / 24h |
| DexTools Trending | available in panel |
| CoinMarketCap | available in panel |
| Coingecko & GeckoTerminal | available in panel |
| Phantom Wallet Trending | available in panel |

Full catalog → [web.pandaboost.app](https://web.pandaboost.app)

---

## 🔗 Links

- 🌐 Web Panel — [web.pandaboost.app](https://web.pandaboost.app)
- 🤖 Telegram Bot — [@pandaboostbot](https://t.me/pandaboostbot)
- 📚 Docs & API — [docs.pandaboost.app](https://docs.pandaboost.app)
- 💬 Support — [@pandaboosthelp](https://t.me/pandaboosthelp)
- 📧 Email — support@pandaboost.app

> ⭐ Star this repo if it helped you. PRs and issues welcome.
