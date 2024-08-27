import { MainApi } from "src/api/utilities/service";

export function list(searchParams) {
  return MainApi.swot("b2c/promo/bounty/incomes", { searchParams }).json();
}

export function bounty() {
  return MainApi.swot("b2c/promo/bounty/account").json();
}

export function getSkims() {
  return MainApi.swot("b2c/promo/bounty/skims").json()
}

export function getOutcomes() {
  console.log('.toFixed(2) ');
  return MainApi.swot("b2c/promo/bounty/outcomes").json()
}

export function skims(address, amount ) {
  return MainApi.swot.post("b2c/promo/bounty/skims", { json: { address, amount } }).json()
}
