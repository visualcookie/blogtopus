<template>
  <div class="dashboard">
    <vk-grid class="uk-flex-center">
      <div class="uk-width-1-5@m">
        <vk-card>
          <vk-nav>
            <router-link tag="li" :to="{ name: 'dashboard.home' }" active-class="uk-active">
              <a>Dashboard</a>
            </router-link>
            <router-link tag="li" :to="{ name: 'dashboard.post' }" active-class="uk-active">
              <a>Posts</a>
            </router-link>
            <vk-nav-item-divider></vk-nav-item-divider>
            <router-link tag="li" :to="{ name: 'settings' }" active-class="uk-active">
              <a>Settings</a>
            </router-link>
          </vk-nav>
        </vk-card>
      </div>
      <div class="uk-width-expand@m">
        <vk-card>
          <router-view></router-view>
        </vk-card>
      </div>
    </vk-grid>
  </div>
</template>
