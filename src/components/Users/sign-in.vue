<template>
    <div class="signin_container p_top">

        <Form @submit="onSubmit" :validation-schema="formSchema">

            <h1 v-text="!type ? 'Sign in' : 'Sign up'"></h1>

            <div class="form-group">
                <Field name="email"  :value ="`komal@gmail.com`" v-slot="{ field, errors, errorMessage }">
                    <input type="text"  id="email" class="form-control" placeholder="Enter your email" v-bind="field"
                        :class="{ 'is-invalid': errors.length !== 0 }" />
                    <div class="input_alert" v-if="errors.length !== 0">
                        {{ errorMessage }}
                    </div>

                </Field>
            </div>


            <div class="form-group">
                <Field name="password"  :value ="`Password@123`" v-slot="{ field, errors, errorMessage }">
                    <input type="password" id="password" class="form-control" placeholder="Enter your password"
                        v-bind="field" :class="{ 'is-invalid': errors.length !== 0 }" />
                    <div class="input_alert" v-if="errors.length !== 0">
                        {{ errorMessage }}
                    </div>
                </Field>
            </div>

            <button type="submit" class="btn mb-3 btn-block" v-text="!type ? 'Sign in' : 'Sign up'">
            </button>

            <hr />
            <div class="form_swap" @click="type = !type">
                <span v-if="type">
                    I want to <b>Sign in</b>
                </span>
                <span v-else>
                    I want to <b>Sign up</b>
                </span>
            </div>


        </Form>


    </div>


</template>
<script>
import { Field, Form } from 'vee-validate';
import * as yup from 'yup';
export default {
    components: {
        Field,
        Form,
    },
    data() {
        return {
            type: false,
            formSchema: {
                email: yup.string().required('Email is Required').email('enter correct email'),
                password: yup.string().required('password is Required').matches(
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                ),
            }

        }
    },
    methods: {
        onSubmit(values, { resetForm }) {
            if (!this.type) {
                //sign in
                console.log(values, 'Sign In');
            } else {
                this.$store.dispatch('auth/signup',values);
            }
            resetForm();
        }
    }
}
</script>
