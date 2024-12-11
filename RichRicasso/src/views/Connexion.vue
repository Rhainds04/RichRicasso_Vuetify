<template>
    <v-container>
      <v-card class="pa-4" max-width="500">
        <v-tabs v-model="activeTab" align-with-title @update:model-value="updateSignInTab">
          <v-tab>Login</v-tab>
          <v-tab>Sign Up</v-tab>
        </v-tabs>
  
        <v-tabs-items v-model="activeTab">
          <!-- Login Tab -->
          <v-tab-item v-show="activeTab === 0">
            <v-form @submit.prevent="handleLogin">
              <v-text-field
                v-model="loginForm.email"
                label="Email"
                type="email"
                required
              ></v-text-field>
              <v-text-field
                v-model="loginForm.password"
                label="Password"
                type="password"
                required
              ></v-text-field>
              <v-btn color="primary" type="submit" block>Login</v-btn>
            </v-form>
          </v-tab-item>
  
          <!-- Sign-Up Tab -->
          <v-tab-item v-show="activeTab === 1">
            <v-form @submit.prevent="handleSignup">
              <v-text-field
                v-model="signupForm.name"
                label="Name"
                required
              ></v-text-field>
              <v-text-field
                v-model="signupForm.email"
                label="Email"
                type="email"
                required
              ></v-text-field>
              <v-text-field
                v-model="signupForm.password"
                label="Password"
                type="password"
                required
              ></v-text-field>
              <v-text-field
                v-model="signupForm.confirmPassword"
                label="Confirm Password"
                type="password"
                required
              ></v-text-field>
              <v-btn color="primary" type="submit" block>Sign Up</v-btn>
            </v-form>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Tab state
  const activeTab = ref(0);
  
  // Login form state
  const loginForm = ref({
    email: '',
    password: '',
  });
  
  // Sign-up form state
  const signupForm = ref({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  
  // Handle login
  const handleLogin = () => {
    console.log('Login form submitted:', loginForm.value);
    //implementer le login
  };
  
  // Handle signup
  const handleSignup = () => {
    console.log('Signup form submitted:', signupForm.value);
    if (signupForm.value.password !== signupForm.value.confirmPassword) {
      alert('Passwords do not match!');
      //implementer le signup
    }
  };
  </script>
  
  <style scoped>
  .v-card {
    margin: auto;
  }
  </style>
  