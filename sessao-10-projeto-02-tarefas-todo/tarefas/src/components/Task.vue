<template>
    <div class="task" :class="stateClass">
        <span @click="$emit('taskDeleted', task)" class="close">x</span>
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
        position: relative;
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

    .pending .close {
        background-color: #B73229;
    }

    .done .close {
        background-color: #0A8F08;
    }

    .close {
        border-radius: 10px;
        display: flex;
        font-size: 0.9rem;
        font-weight: 600;
        height: 20px;
        justify-content: center;
        position: absolute;
        right: 10px;
        top: 10px;
        width: 20px;
    }

</style>