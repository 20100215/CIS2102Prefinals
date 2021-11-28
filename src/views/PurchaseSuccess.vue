<template>
  <div class="row align-items-center fw-bold my-5" style="min-height: 200px; color:green">
    <h2>PURCHASE SUCCESSFUL!</h2>
    <h2>Thank you for shopping with us!</h2>
    <br>
    <h2>Your change is P{{change}}.00</h2>
    </div>
</template>

<script>
export default {
    name: 'Success',
    props: {
        change: {type:Number, default:0},
    }
}
</script>