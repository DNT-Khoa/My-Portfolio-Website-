<template>
  <div class="master-wrapper">
    <NavBar />

    <main>
      <Nuxt />
    </main>

    <Footer />
  <div class="overlay"></div>
  </div>
</template>

<style lang="scss">
  .master-wrapper {
    margin: 30px;
    background-color: $bg-primary;
    position: relative;
    overflow: hidden;
  }

    @media (max-width: 640px) {
      .master-wrapper {
        margin: 0;
      }
    }
</style>
