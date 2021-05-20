<template>
  <div>
    <Hero />

    <FeaturedProjects />

    <WorkHeadline />
  </div>
</template>

<script>
  export default {
      transition: {
        name: "fade",
        mode: "out-in",
        css: false,

        beforeEnter(el) {
          this.$gsap.set(el, {
            opacity: 0,
            top: "-100%",
          });
        },

        enter(el, done) {
          this.$gsap.to(el, {
            opacity: 1,
            top: 0,
            duration: .5,
            ease: "power2.inOut",
            onComplete: done,
          });
        },

        leave(el, done) {
          this.$gsap.to(el, {
            opacity: 0,
            top: "100%",
            duration: .5,
            ease: "power2.inOut",
            onComplete: done,
          });
        },
      },
      data() {
        return {
          lmS: null
        }
      },
      mounted() {
        this.$nextTick(() => {
          this.$nuxt.$loading.start()

          setTimeout(() => this.$nuxt.$loading.finish(), 500)
        });
      }
  }
</script>

<style lang="scss" scoped>
  

</style>