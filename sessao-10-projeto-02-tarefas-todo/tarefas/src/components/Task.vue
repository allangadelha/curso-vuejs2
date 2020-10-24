<template>
    <div class="task" :class="stateClass">
        <p>{{ task.name }}</p>
    </div>
</template>

<script>
export default {
    props: {
        task: { type: Object, required: true }
    },
    computed: {
        stateClass() {
            return {
                pending: this.task.pending,
                done: !this.task.pending
            }
        }
    }
}
</script>

<style >
    .task {
        align-items: center;
        border-radius: 8px;
        box-sizing: border-box;
        cursor: pointer;
        display: flex;
        font-size: 2rem;
        font-weight: 300;
        height: 150px;
        justify-content: center;
        padding: 10px;
        user-select: none;
        width: 350px;
    }

    .pending {
        border-left: 12px solid #B73229;
        background-color: #F44336;
    }

    .done {
        border-left: 12px solid #0A8F08;
        background-color: #4CAF50;
        color: #DDD;
        text-decoration: line-through;
    }

</style>