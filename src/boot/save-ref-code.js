export default ({ router }) => {
  router.beforeEach((to, from, next) => {
    if(to.query.referral_code) {
      localStorage.setItem('referral_code', to.query.referral_code);
    }
    next();
  });
}
