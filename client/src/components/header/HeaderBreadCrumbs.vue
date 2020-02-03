<template lang="pug">
    .bread-crumbs
        img(src="../../assets/img/breadCrumbs.jpg")
        .bread-crumbs-block
            span Текущая Страница:
            .triangle
            span.bread-crumb-active Главаная
            .triangle
            span Инфо
</template>

<script>
export default {
  name: 'header-bread-crumbs'
}
</script>

<style scoped lang="scss">
    .bread-crumbs {
        position: relative;
        img {
            display: block;
        }
        .bread-crumbs-block {
            background-color: rgba(43, 68, 35, 0.7);
            height: 35px;
            width: 625px;
            position: absolute;
            bottom: 0px;
            z-index: 10;
            display: flex;
            align-items: center;
            padding-left: 5px;
            color: white;
            .triangle {
                width: 0;
                height: 0;
                border-top: 4px solid transparent;
                border-left: 7px solid #FF8400;
                border-bottom: 4px solid transparent;
                margin: 2px 5px 0px 5px;
            }
            .bread-crumb-active {
                &:hover {
                    cursor: pointer;
                    text-decoration: underline;
                    color: #CC0000;
                }
            }
        }
    }
</style>
