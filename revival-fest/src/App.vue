<template>
  <header>
    <div class="wrapper">
      <nav>
        <div class="nav-logo">
          <RouterLink to="/">
            <img alt="RevivalFest logo" class="logo" src="./assets/logo.svg" />
          </RouterLink>
        </div>
        <div class="nav-links">
          <div class="nav-section-one">
            <RouterLink to="/lineup">Lineup</RouterLink>
            <RouterLink to="/map">Map</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/faq">FAQ</RouterLink>
          </div>
          <div class="nav-section-two">
            <RouterLink to="/login">Login</RouterLink>
            <RouterLink to="/tickets">Tickets</RouterLink>
          </div>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
}

.wrapper {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  margin-right: 20px;
  display: inline-block;
}

.logo {
  display: block;
  width: 40%;
  filter: invert(53%) sepia(73%) saturate(437%) hue-rotate(310deg) brightness(104%) contrast(104%);
}

.nav-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 2ch;
}

.nav-section-one {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-section-one a {
  margin: 0 10px;
  font-size: 18px;
  padding: 10px 20px;
}

.nav-section-two {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.nav-section-two a {
  margin: 0 10px;
  font-size: 18px;
  padding: 10px 20px;
}

nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}
</style>