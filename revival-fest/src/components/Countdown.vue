<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="countdown">
        <p>Countdown to 28th January</p>
        <div class="time">
            <span id="days"></span>
            <span id="hours"></span>
            <span id="minutes"></span>
            <span id="seconds"></span>
        </div>
    </div>
</template>

<script>
    export default {
    mounted() {
        const end = new Date('01/28/2025 00:00:00');
        const _second = 1000;
        const _minute = _second * 60;
        const _hour = _minute * 60;
        const _day = _hour * 24;
        const timer = setInterval(() => {
        const now = new Date();
        const distance = end - now;
        const days = Math.floor(distance / _day);
        const hours = Math.floor((distance % _day) / _hour);
        const minutes = Math.floor((distance % _hour) / _minute);
        const seconds = Math.floor((distance % _minute) / _second);
        document.getElementById('days').innerText = days + ":";
        document.getElementById('hours').innerText = hours + ":";
        document.getElementById('minutes').innerText = minutes + ":";
        document.getElementById('seconds').innerText = seconds;
        if (distance < 0) {
            clearInterval(timer);
        }
        }, _second);
    },
}
</script>

<style lang="scss" scoped>

</style>