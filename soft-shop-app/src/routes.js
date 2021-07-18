import Checkout from "./pages/Checkout.vue";
import Shop from "./pages/Shop.vue";
import Home from "./pages/Home.vue";
import Admin from "./pages/Admin.vue";

export default [
  { path: "/checkout", component: Checkout },
  { path: "/shop", component: Shop },
  { path: "/admin", component: Admin },
  { path: "/", component: Home },
];
