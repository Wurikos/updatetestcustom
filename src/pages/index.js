import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Menu } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.NewCompic>
			<Menu />
		</Components.NewCompic>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<script
				async={true}
				type={""}
				src={""}
				crossorigin={"sove value"}
				integrity={"sove value"}
				place={"endOfHead"}
				rawKey={"601d4bcd201ffdc333c45eab"}
			>
				{"alert(\"Я работаю\")"}
			</script>
			<link
				href={"google"}
				rel={"stylesheet"}
				sizes={"20px"}
				type={"fonts"}
				media={"value"}
				as={"as"}
				crossorigin={"cross"}
				place={"endOfHead"}
				rawKey={"601d4bfaf2025e45d20dfa56"}
			/>
			<meta
				charset={"utf8"}
				name={"keywords"}
				content={"html css back"}
				http-equiv={"http-eq"}
				itemprop={"some item props"}
				place={"endOfHead"}
				rawKey={"601d4c1a6a28ad0f946f9b46"}
			/>
			<style place={"endOfHead"} rawKey={"601d4c3e8a98b9614d9ef7be"}>
				{"body {\nbackground-color: yellow}"}
			</style>
		</RawHtml>
	</Theme>;
});