<template>
	<div class="hello">

	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		mounted: function () {
		var newsparams = {
			type:1,
			page:1
		};
			this.$api.getNews(newsparams).then(res => {
				console.log("--时尚新闻--",res)
			});
			
			var picparams = {
				type:2,
				page:1
			};
			
			this.$api.getNews(picparams).then(res => {
				console.log("--社会新闻--",res)
			})
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
