import { MainApi } from "src/api/utilities/service";

export function list(searchParams) {
  return MainApi.swot("b2c/promo/referrals", { searchParams }).json();
}
