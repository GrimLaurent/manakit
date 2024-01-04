<script lang="ts">
	import { className } from '../../utils';
	import type { ColAlignSelf, ColsOrder, ColsSize } from './Col.types';

	export let cols: ColsSize | undefined = '12';
	export let sm: ColsSize | undefined = undefined;
	export let md: ColsSize | undefined = undefined;
	export let lg: ColsSize | undefined = undefined;
	export let xl: ColsSize | undefined = undefined;
	export let xxl: ColsSize | undefined = undefined;
	export let alignSelf: ColAlignSelf = undefined;
	export let offset: ColsSize | undefined = undefined;
	export let offsetSm: ColsSize | undefined = undefined;
	export let offsetMd: ColsSize | undefined = undefined;
	export let offsetLg: ColsSize | undefined = undefined;
	export let offsetXl: ColsSize | undefined = undefined;
	export let offsetXxl: ColsSize | undefined = undefined;
	export let order: ColsOrder | undefined = undefined;
	export let orderSm: ColsOrder | undefined = undefined;
	export let orderMd: ColsOrder | undefined = undefined;
	export let orderLg: ColsOrder | undefined = undefined;
	export let orderXl: ColsOrder | undefined = undefined;
	export let orderXxl: ColsOrder | undefined = undefined;

	$: classList = [
		{ class: `col-${cols}`, value: cols },
		{ class: `col-sm-${sm}`, value: sm },
		{ class: `col-md-${md}`, value: md },
		{ class: `col-lg-${lg}`, value: lg },
		{ class: `col-xl-${xl}`, value: xl },
		{ class: `col-xxl-${xxl}`, value: xxl },
		{ class: `align-self-${alignSelf}`, value: alignSelf },
		{ class: `offset-${offset}`, value: offset },
		{ class: `offset-sm-${offsetSm}`, value: offsetSm },
		{ class: `offset-md-${offsetMd}`, value: offsetMd },
		{ class: `offset-lg-${offsetLg}`, value: offsetLg },
		{ class: `offset-xl-${offsetXl}`, value: offsetXl },
		{ class: `offset-xxl-${offsetXxl}`, value: offsetXxl },
		{ class: `order-${order}`, value: order },
		{ class: `order-sm-${orderSm}`, value: orderSm },
		{ class: `order-md-${orderMd}`, value: orderMd },
		{ class: `order-lg-${orderLg}`, value: orderLg },
		{ class: `order-xl-${orderXl}`, value: orderXl },
		{ class: `order-xxl-${orderXxl}`, value: orderXxl }
	];
</script>

<div class={className($$props.class, classList)} {...$$props.style}>
	<slot />
</div>

<style>
	.dal-col {
		width: 100%;
		padding: 12px;
	}

	.dal-col.col-1 {
		flex: 0 0 calc((100% / 12) * 1);
		max-width: calc((100% / 12) * 1);
	}
	.dal-col.col-2 {
		flex: 0 0 calc((100% / 12) * 2);
		max-width: calc((100% / 12) * 2);
	}
	.dal-col.col-3 {
		flex: 0 0 calc((100% / 12) * 3);
		max-width: calc((100% / 12) * 3);
	}
	.dal-col.col-4 {
		flex: 0 0 calc((100% / 12) * 4);
		max-width: calc((100% / 12) * 4);
	}
	.dal-col.col-5 {
		flex: 0 0 calc((100% / 12) * 5);
		max-width: calc((100% / 12) * 5);
	}
	.dal-col.col-6 {
		flex: 0 0 calc((100% / 12) * 6);
		max-width: calc((100% / 12) * 6);
	}
	.dal-col.col-7 {
		flex: 0 0 calc((100% / 12) * 7);
		max-width: calc((100% / 12) * 7);
	}
	.dal-col.col-8 {
		flex: 0 0 calc((100% / 12) * 8);
		max-width: calc((100% / 12) * 8);
	}
	.dal-col.col-9 {
		flex: 0 0 calc((100% / 12) * 9);
		max-width: calc((100% / 12) * 9);
	}
	.dal-col.col-10 {
		flex: 0 0 calc((100% / 12) * 10);
		max-width: calc((100% / 12) * 10);
	}
	.dal-col.col-11 {
		flex: 0 0 calc((100% / 12) * 11);
		max-width: calc((100% / 12) * 11);
	}
	.dal-col.col-12 {
		flex: 0 0 calc((100% / 12) * 12);
		max-width: calc((100% / 12) * 12);
	}
	.dal-col.offset-0 {
		margin-inline-start: 0;
	}
	.dal-col.offset-1 {
		margin-inline-start: calc((100% / 12) * 1);
	}
	.dal-col.offset-2 {
		margin-inline-start: calc((100% / 12) * 2);
	}
	.dal-col.offset-3 {
		margin-inline-start: calc((100% / 12) * 3);
	}
	.dal-col.offset-4 {
		margin-inline-start: calc((100% / 12) * 4);
	}
	.dal-col.offset-5 {
		margin-inline-start: calc((100% / 12) * 5);
	}
	.dal-col.offset-6 {
		margin-inline-start: calc((100% / 12) * 6);
	}
	.dal-col.offset-7 {
		margin-inline-start: calc((100% / 12) * 7);
	}
	.dal-col.offset-8 {
		margin-inline-start: calc((100% / 12) * 8);
	}
	.dal-col.offset-9 {
		margin-inline-start: calc((100% / 12) * 9);
	}
	.dal-col.offset-10 {
		margin-inline-start: calc((100% / 12) * 10);
	}
	.dal-col.offset-11 {
		margin-inline-start: calc((100% / 12) * 11);
	}
	.dal-col.offset-12 {
		margin-inline-start: calc((100% / 12) * 12);
	}

	@media screen and (min-width: 600px) {
		.dal-col.col-sm-1 {
			flex: 0 0 calc((100% / 12) * 1);
			max-width: calc((100% / 12) * 1);
		}
		.dal-col.col-sm-2 {
			flex: 0 0 calc((100% / 12) * 2);
			max-width: calc((100% / 12) * 2);
		}
		.dal-col.col-sm-3 {
			flex: 0 0 calc((100% / 12) * 3);
			max-width: calc((100% / 12) * 3);
		}
		.dal-col.col-sm-4 {
			flex: 0 0 calc((100% / 12) * 4);
			max-width: calc((100% / 12) * 4);
		}
		.dal-col.col-sm-5 {
			flex: 0 0 calc((100% / 12) * 5);
			max-width: calc((100% / 12) * 5);
		}
		.dal-col.col-sm-6 {
			flex: 0 0 calc((100% / 12) * 6);
			max-width: calc((100% / 12) * 6);
		}
		.dal-col.col-sm-7 {
			flex: 0 0 calc((100% / 12) * 7);
			max-width: calc((100% / 12) * 7);
		}
		.dal-col.col-sm-8 {
			flex: 0 0 calc((100% / 12) * 8);
			max-width: calc((100% / 12) * 8);
		}
		.dal-col.col-sm-9 {
			flex: 0 0 calc((100% / 12) * 9);
			max-width: calc((100% / 12) * 9);
		}
		.dal-col.col-sm-10 {
			flex: 0 0 calc((100% / 12) * 10);
			max-width: calc((100% / 12) * 10);
		}
		.dal-col.col-sm-11 {
			flex: 0 0 calc((100% / 12) * 11);
			max-width: calc((100% / 12) * 11);
		}
		.dal-col.col-sm-12 {
			flex: 0 0 calc((100% / 12) * 12);
			max-width: calc((100% / 12) * 12);
		}
		.dal-col.offset-sm-0 {
			margin-inline-start: 0;
		}
		.dal-col.offset-sm-1 {
			margin-inline-start: calc((100% / 12) * 1);
		}
		.dal-col.offset-sm-2 {
			margin-inline-start: calc((100% / 12) * 2);
		}
		.dal-col.offset-sm-3 {
			margin-inline-start: calc((100% / 12) * 3);
		}
		.dal-col.offset-sm-4 {
			margin-inline-start: calc((100% / 12) * 4);
		}
		.dal-col.offset-sm-5 {
			margin-inline-start: calc((100% / 12) * 5);
		}
		.dal-col.offset-sm-6 {
			margin-inline-start: calc((100% / 12) * 6);
		}
		.dal-col.offset-sm-7 {
			margin-inline-start: calc((100% / 12) * 7);
		}
		.dal-col.offset-sm-8 {
			margin-inline-start: calc((100% / 12) * 8);
		}
		.dal-col.offset-sm-9 {
			margin-inline-start: calc((100% / 12) * 9);
		}
		.dal-col.offset-sm-10 {
			margin-inline-start: calc((100% / 12) * 10);
		}
		.dal-col.offset-sm-11 {
			margin-inline-start: calc((100% / 12) * 11);
		}
		.dal-col.offset-sm-12 {
			margin-inline-start: calc((100% / 12) * 12);
		}
	}
	@media screen and (min-width: 960px) {
		.dal-col.col-md-1 {
			flex: 0 0 calc((100% / 12) * 1);
			max-width: calc((100% / 12) * 1);
		}
		.dal-col.col-md-2 {
			flex: 0 0 calc((100% / 12) * 2);
			max-width: calc((100% / 12) * 2);
		}
		.dal-col.col-md-3 {
			flex: 0 0 calc((100% / 12) * 3);
			max-width: calc((100% / 12) * 3);
		}
		.dal-col.col-md-4 {
			flex: 0 0 calc((100% / 12) * 4);
			max-width: calc((100% / 12) * 4);
		}
		.dal-col.col-md-5 {
			flex: 0 0 calc((100% / 12) * 5);
			max-width: calc((100% / 12) * 5);
		}
		.dal-col.col-md-6 {
			flex: 0 0 calc((100% / 12) * 6);
			max-width: calc((100% / 12) * 6);
		}
		.dal-col.col-md-7 {
			flex: 0 0 calc((100% / 12) * 7);
			max-width: calc((100% / 12) * 7);
		}
		.dal-col.col-md-8 {
			flex: 0 0 calc((100% / 12) * 8);
			max-width: calc((100% / 12) * 8);
		}
		.dal-col.col-md-9 {
			flex: 0 0 calc((100% / 12) * 9);
			max-width: calc((100% / 12) * 9);
		}
		.dal-col.col-md-10 {
			flex: 0 0 calc((100% / 12) * 10);
			max-width: calc((100% / 12) * 10);
		}
		.dal-col.col-md-11 {
			flex: 0 0 calc((100% / 12) * 11);
			max-width: calc((100% / 12) * 11);
		}
		.dal-col.col-md-12 {
			flex: 0 0 calc((100% / 12) * 12);
			max-width: calc((100% / 12) * 12);
		}
		.dal-col.offset-md-0 {
			margin-inline-start: 0;
		}
		.dal-col.offset-md-1 {
			margin-inline-start: calc((100% / 12) * 1);
		}
		.dal-col.offset-md-2 {
			margin-inline-start: calc((100% / 12) * 2);
		}
		.dal-col.offset-md-3 {
			margin-inline-start: calc((100% / 12) * 3);
		}
		.dal-col.offset-md-4 {
			margin-inline-start: calc((100% / 12) * 4);
		}
		.dal-col.offset-md-5 {
			margin-inline-start: calc((100% / 12) * 5);
		}
		.dal-col.offset-md-6 {
			margin-inline-start: calc((100% / 12) * 6);
		}
		.dal-col.offset-md-7 {
			margin-inline-start: calc((100% / 12) * 7);
		}
		.dal-col.offset-md-8 {
			margin-inline-start: calc((100% / 12) * 8);
		}
		.dal-col.offset-md-9 {
			margin-inline-start: calc((100% / 12) * 9);
		}
		.dal-col.offset-md-10 {
			margin-inline-start: calc((100% / 12) * 10);
		}
		.dal-col.offset-md-11 {
			margin-inline-start: calc((100% / 12) * 11);
		}
		.dal-col.offset-md-12 {
			margin-inline-start: calc((100% / 12) * 12);
		}
	}
	@media screen and (min-width: 1280px) {
		.dal-col.col-lg-1 {
			flex: 0 0 calc((100% / 12) * 1);
			max-width: calc((100% / 12) * 1);
		}
		.dal-col.col-lg-2 {
			flex: 0 0 calc((100% / 12) * 2);
			max-width: calc((100% / 12) * 2);
		}
		.dal-col.col-lg-3 {
			flex: 0 0 calc((100% / 12) * 3);
			max-width: calc((100% / 12) * 3);
		}
		.dal-col.col-lg-4 {
			flex: 0 0 calc((100% / 12) * 4);
			max-width: calc((100% / 12) * 4);
		}
		.dal-col.col-lg-5 {
			flex: 0 0 calc((100% / 12) * 5);
			max-width: calc((100% / 12) * 5);
		}
		.dal-col.col-lg-6 {
			flex: 0 0 calc((100% / 12) * 6);
			max-width: calc((100% / 12) * 6);
		}
		.dal-col.col-lg-7 {
			flex: 0 0 calc((100% / 12) * 7);
			max-width: calc((100% / 12) * 7);
		}
		.dal-col.col-lg-8 {
			flex: 0 0 calc((100% / 12) * 8);
			max-width: calc((100% / 12) * 8);
		}
		.dal-col.col-lg-9 {
			flex: 0 0 calc((100% / 12) * 9);
			max-width: calc((100% / 12) * 9);
		}
		.dal-col.col-lg-10 {
			flex: 0 0 calc((100% / 12) * 10);
			max-width: calc((100% / 12) * 10);
		}
		.dal-col.col-lg-11 {
			flex: 0 0 calc((100% / 12) * 11);
			max-width: calc((100% / 12) * 11);
		}
		.dal-col.col-lg-12 {
			flex: 0 0 calc((100% / 12) * 12);
			max-width: calc((100% / 12) * 12);
		}
		.dal-col.offset-lg-0 {
			margin-inline-start: 0;
		}
		.dal-col.offset-lg-1 {
			margin-inline-start: calc((100% / 12) * 1);
		}
		.dal-col.offset-lg-2 {
			margin-inline-start: calc((100% / 12) * 2);
		}
		.dal-col.offset-lg-3 {
			margin-inline-start: calc((100% / 12) * 3);
		}
		.dal-col.offset-lg-4 {
			margin-inline-start: calc((100% / 12) * 4);
		}
		.dal-col.offset-lg-5 {
			margin-inline-start: calc((100% / 12) * 5);
		}
		.dal-col.offset-lg-6 {
			margin-inline-start: calc((100% / 12) * 6);
		}
		.dal-col.offset-lg-7 {
			margin-inline-start: calc((100% / 12) * 7);
		}
		.dal-col.offset-lg-8 {
			margin-inline-start: calc((100% / 12) * 8);
		}
		.dal-col.offset-lg-9 {
			margin-inline-start: calc((100% / 12) * 9);
		}
		.dal-col.offset-lg-10 {
			margin-inline-start: calc((100% / 12) * 10);
		}
		.dal-col.offset-lg-11 {
			margin-inline-start: calc((100% / 12) * 11);
		}
		.dal-col.offset-lg-12 {
			margin-inline-start: calc((100% / 12) * 12);
		}
	}
	@media screen and (min-width: 1920px) {
		.dal-col.col-xl-1 {
			flex: 0 0 calc((100% / 12) * 1);
			max-width: calc((100% / 12) * 1);
		}
		.dal-col.col-xl-2 {
			flex: 0 0 calc((100% / 12) * 2);
			max-width: calc((100% / 12) * 2);
		}
		.dal-col.col-xl-3 {
			flex: 0 0 calc((100% / 12) * 3);
			max-width: calc((100% / 12) * 3);
		}
		.dal-col.col-xl-4 {
			flex: 0 0 calc((100% / 12) * 4);
			max-width: calc((100% / 12) * 4);
		}
		.dal-col.col-xl-5 {
			flex: 0 0 calc((100% / 12) * 5);
			max-width: calc((100% / 12) * 5);
		}
		.dal-col.col-xl-6 {
			flex: 0 0 calc((100% / 12) * 6);
			max-width: calc((100% / 12) * 6);
		}
		.dal-col.col-xl-7 {
			flex: 0 0 calc((100% / 12) * 7);
			max-width: calc((100% / 12) * 7);
		}
		.dal-col.col-xl-8 {
			flex: 0 0 calc((100% / 12) * 8);
			max-width: calc((100% / 12) * 8);
		}
		.dal-col.col-xl-9 {
			flex: 0 0 calc((100% / 12) * 9);
			max-width: calc((100% / 12) * 9);
		}
		.dal-col.col-xl-10 {
			flex: 0 0 calc((100% / 12) * 10);
			max-width: calc((100% / 12) * 10);
		}
		.dal-col.col-xl-11 {
			flex: 0 0 calc((100% / 12) * 11);
			max-width: calc((100% / 12) * 11);
		}
		.dal-col.col-xl-12 {
			flex: 0 0 calc((100% / 12) * 12);
			max-width: calc((100% / 12) * 12);
		}
		.dal-col.offset-xl-0 {
			margin-inline-start: 0;
		}
		.dal-col.offset-xl-1 {
			margin-inline-start: calc((100% / 12) * 1);
		}
		.dal-col.offset-xl-2 {
			margin-inline-start: calc((100% / 12) * 2);
		}
		.dal-col.offset-xl-3 {
			margin-inline-start: calc((100% / 12) * 3);
		}
		.dal-col.offset-xl-4 {
			margin-inline-start: calc((100% / 12) * 4);
		}
		.dal-col.offset-xl-5 {
			margin-inline-start: calc((100% / 12) * 5);
		}
		.dal-col.offset-xl-6 {
			margin-inline-start: calc((100% / 12) * 6);
		}
		.dal-col.offset-xl-7 {
			margin-inline-start: calc((100% / 12) * 7);
		}
		.dal-col.offset-xl-8 {
			margin-inline-start: calc((100% / 12) * 8);
		}
		.dal-col.offset-xl-9 {
			margin-inline-start: calc((100% / 12) * 9);
		}
		.dal-col.offset-xl-10 {
			margin-inline-start: calc((100% / 12) * 10);
		}
		.dal-col.offset-xl-11 {
			margin-inline-start: calc((100% / 12) * 11);
		}
		.dal-col.offset-xl-12 {
			margin-inline-start: calc((100% / 12) * 12);
		}
	}
	@media screen and (min-width: 2560px) {
		.dal-col.col-xxl-1 {
			flex: 0 0 calc((100% / 12) * 1);
			max-width: calc((100% / 12) * 1);
		}
		.dal-col.col-xxl-2 {
			flex: 0 0 calc((100% / 12) * 2);
			max-width: calc((100% / 12) * 2);
		}
		.dal-col.col-xxl-3 {
			flex: 0 0 calc((100% / 12) * 3);
			max-width: calc((100% / 12) * 3);
		}
		.dal-col.col-xxl-4 {
			flex: 0 0 calc((100% / 12) * 4);
			max-width: calc((100% / 12) * 4);
		}
		.dal-col.col-xxl-5 {
			flex: 0 0 calc((100% / 12) * 5);
			max-width: calc((100% / 12) * 5);
		}
		.dal-col.col-xxl-6 {
			flex: 0 0 calc((100% / 12) * 6);
			max-width: calc((100% / 12) * 6);
		}
		.dal-col.col-xxl-7 {
			flex: 0 0 calc((100% / 12) * 7);
			max-width: calc((100% / 12) * 7);
		}
		.dal-col.col-xxl-8 {
			flex: 0 0 calc((100% / 12) * 8);
			max-width: calc((100% / 12) * 8);
		}
		.dal-col.col-xxl-9 {
			flex: 0 0 calc((100% / 12) * 9);
			max-width: calc((100% / 12) * 9);
		}
		.dal-col.col-xxl-10 {
			flex: 0 0 calc((100% / 12) * 10);
			max-width: calc((100% / 12) * 10);
		}
		.dal-col.col-xxl-11 {
			flex: 0 0 calc((100% / 12) * 11);
			max-width: calc((100% / 12) * 11);
		}
		.dal-col.col-xxl-12 {
			flex: 0 0 calc((100% / 12) * 12);
			max-width: calc((100% / 12) * 12);
		}
		.dal-col.offset-xxl-0 {
			margin-inline-start: 0;
		}
		.dal-col.offset-xxl-1 {
			margin-inline-start: calc((100% / 12) * 1);
		}
		.dal-col.offset-xxl-2 {
			margin-inline-start: calc((100% / 12) * 2);
		}
		.dal-col.offset-xxl-3 {
			margin-inline-start: calc((100% / 12) * 3);
		}
		.dal-col.offset-xxl-4 {
			margin-inline-start: calc((100% / 12) * 4);
		}
		.dal-col.offset-xxl-5 {
			margin-inline-start: calc((100% / 12) * 5);
		}
		.dal-col.offset-xxl-6 {
			margin-inline-start: calc((100% / 12) * 6);
		}
		.dal-col.offset-xxl-7 {
			margin-inline-start: calc((100% / 12) * 7);
		}
		.dal-col.offset-xxl-8 {
			margin-inline-start: calc((100% / 12) * 8);
		}
		.dal-col.offset-xxl-9 {
			margin-inline-start: calc((100% / 12) * 9);
		}
		.dal-col.offset-xxl-10 {
			margin-inline-start: calc((100% / 12) * 10);
		}
		.dal-col.offset-xxl-11 {
			margin-inline-start: calc((100% / 12) * 11);
		}
		.dal-col.offset-xxl-12 {
			margin-inline-start: calc((100% / 12) * 12);
		}
	}
</style>
