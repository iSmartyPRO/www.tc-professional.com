<template>
		<!--HEADER-->
		<header>
			<div class="uk-container">
				<nav class="uk-navbar-transparent" data-uk-navbar>
					<div class="uk-navbar-left">
						<router-link class="uk-navbar-item uk-logo" :to="{name: 'Home'}"> <img src="@/assets/anchor-logo-horizontal.svg" class="logo"/> </router-link>
					</div>
					<div class="uk-navbar-right uk-visible@m">
						<ul class="uk-navbar-nav">
							<li v-for="m in menus.list" :key="m.name"><router-link :to="{name: m.name}" @click="handleMenuClick(m.name)">{{ m.displayName }}</router-link></li>
						</ul>
					</div>
				</nav>
			</div>
		</header>
		<!--/HEADER-->

</template>

<script>
export default {
	props: ['menus'],
	methods: {
		handleMenuClick(name) {
			this.$emit('menuName', name)
		}
	}
}
</script>

<style>
	.logo {
		width: 300px;
	}
	.uk-navbar-nav li a{
		font-size: 1.01rem;
		font-weight: 500;
	}

	.uk-navbar-nav li a:hover{
		color: #b21014;
		text-decoration: underline;
		text-decoration-style: solid;
		text-decoration-thickness: 0.15em;
		text-underline-offset: 0.9em;
	}
	.uk-navbar-nav li a.router-link-active {
		color: #b21014;
	}


</style>