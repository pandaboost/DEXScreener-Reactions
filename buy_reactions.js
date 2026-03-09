/**
 * Example: Buy DEX Screener Reactions via PandaBoost API
 *
 * Reaction types: rocket | fire | poop | flag
 * Speed modes:    slow | normal | fast
 * Chains:         solana | ethereum | bsc | base
 * Price:          $0.025 per reaction ($25 / 1,000)
 * Quantity range: 100 – 1,000 per order
 *
 * Docs: https://docs.pandaboost.app
 */

const BASE_URL = "https://web.pandaboost.app/api/v1";
const API_KEY = "pb_your_api_key_here"; // Get yours: t.me/pandaboosthelp

const headers = {
  "x-api-key": API_KEY,
  "Content-Type": "application/json",
};

async function pandaboost(path, body = null) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: body ? "POST" : "GET",
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json();
  if (!data.success) throw new Error(`API error: ${data.error}`);
  return data.data;
}

(async () => {
  // ── 1. Check balance ──────────────────────────────────────────────────────
  const balance = await pandaboost("/balance");
  console.log(`Balance: $${balance.balance} ${balance.currency}`);

  // ── 2. Place a fire reactions order ───────────────────────────────────────
  const order = await pandaboost("/orders", {
    serviceName: "reactions",
    orderTypeId: "fire",        // rocket | fire | poop | flag
    quantity: 1000,             // 100 – 1,000
    fields: {
      pair_address: "ErKGCuxZeMQoS3VhFJZ77giESQphJhGpYDaUJmhApump",
      chain: "solana",          // solana | ethereum | bsc | base
      speed: "fast",            // slow | normal | fast
    },
  });

  const orderId = order.order.publicId;
  console.log(`Order placed: ${orderId} — status: ${order.order.status}`);
  console.log(`Amount charged: $${order.payment.amount}`);
  console.log(`New balance: $${order.newBalance}`);

  // ── 3. Check order status ─────────────────────────────────────────────────
  const status = await pandaboost(`/orders/${orderId}`);
  console.log(`\nOrder ${orderId}:`);
  console.log(`  Status:    ${status.status}`);
  console.log(`  Quantity:  ${status.quantity}`);
  console.log(`  Completed: ${status.completed}`);

  // ── 4. List recent orders ─────────────────────────────────────────────────
  const history = await pandaboost("/orders?page=1&limit=5");
  console.log(`\nRecent orders (${history.pagination.total} total):`);
  for (const o of history.orders) {
    console.log(`  [${o.publicId}] ${o.orderTypeName} × ${o.quantity} — ${o.status}`);
  }
})();
