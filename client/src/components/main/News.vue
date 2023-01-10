<template lang="pug">
	.news
		h1 Новости
		.news-container
			.news-item
				h2 Умер Клаус Шульц
				p
					img(src="../../assets/img/news/news-1-2.jpg" align="left" style="height: 300px;padding:0px 30px 30px 0px;")
					| Для российских охотников он останется в памяти одним из первых людей, который представил нам породу ягдтерьер как разностороннюю охотничью собаку. Клаус был частым гостем в России. Он щедро делился своими знаниями о ягдтерьере  несмотря на расстояния и преклонный возраст. Клаус был видным деятелем кинологии преданным породе ягдтерьер. Светлая ему память. Соболезнования родным, коллегам и друзьям.
				img(src="../../assets/img/news/news-1-1.jpg" style="width:100%;")
</template>

<script>

export default {
  name: 'news',
  components: {
    
  },
}
</script>

<style scoped lang="scss">
	h1 {
		padding: 10px 5px 20px 5px;
	}
	.news p {
		line-height: 22px;
	}
</style>