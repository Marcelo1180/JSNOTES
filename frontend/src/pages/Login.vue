<template>
  <div
    style="background: url(./statics/login_bg.jpg) no-repeat center center fixed; -webkit-background-size: cover"
  >
    <q-page class="flex flex-center row">
      <div style="min-width: 350px">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <div class="column items-center">
            <q-avatar square size="150px" style="margin-bottom: 25px">
              <img src="statics/python-logo.png" />
            </q-avatar>
          </div>
          <q-input
            rounded
            outlined
            dense
            placeholder="Placeholder"
            v-model="username"
            bg-color="white"
            class="full-width"
          >
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>
          <q-input
            rounded
            outlined
            dense
            bg-color="white"
            class="full-width"
            label="Password"
            v-model="password"
            :type="isPwd ? 'password' : 'text'"
          >
            <template v-slot:prepend>
              <q-icon name="https" />
            </template>
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <q-btn
            unelevated
            rounded
            style="background: #FF0080; color: white"
            class="full-width"
            label="Log In"
            no-caps
          />
          <div class="column items-center" style="margin-top: 25px">
            <p style="color: #FFF">Lost your password?</p>
          </div>
        </q-form>
      </div>
    </q-page>
  </div>
</template>

<script>
export default {
  data () {
    return {
      onSubmit: '',
      onReset: '',

      username: '',
      password: '',
      isPwd: true
    }
  }
}
</script>
