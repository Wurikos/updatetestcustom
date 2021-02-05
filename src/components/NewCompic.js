import React from "react";
import { useOverrides, StackItem, Stack, SocialMedia, Section, Menu, GoogleMap, Formspree } from "@quarkly/components";
import { Text, Input, Button, List, Link, Image, Icon, Hr, Box } from "@quarkly/widgets";
import Newcomp from "./Newcomp";
import { MdFace } from "react-icons/md";
const defaultProps = {};
const overrides = {
	"stackItem": {
		"kind": "StackItem",
		"props": {}
	},
	"text": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"children": "Stack item"
		}
	},
	"newcomp": {
		"kind": "Newcomp",
		"props": {}
	},
	"stack": {
		"kind": "Stack",
		"props": {}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "flex"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"margin": "0px 0px 0px 0px",
			"display": "inline-block",
			"children": <>
				{"            "}First Item{"\n        "}
			</>
		}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "flex"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"margin": "0px 0px 0px 0px",
			"display": "inline-block",
			"children": <>
				{"            "}Second Item{"\n        "}
			</>
		}
	},
	"socialMedia": {
		"kind": "SocialMedia",
		"props": {
			"facebook": "https://www.facebook.com/quarklyapp/",
			"twitter": "https://twitter.com/quarklyapp",
			"youtube": "https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw",
			"vkontakte": "https://vk.com/quarklyapp",
			"telegram": "https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
		}
	},
	"section": {
		"kind": "Section",
		"props": {}
	},
	"menu": {
		"kind": "Menu",
		"props": {}
	},
	"googleMap": {
		"kind": "GoogleMap",
		"props": {}
	},
	"formspree": {
		"kind": "Formspree",
		"props": {
			"errorMessage": "Something went wrong",
			"completeText": "Success"
		}
	},
	"input": {
		"kind": "Input",
		"props": {
			"name": "email",
			"placeholder": "Email",
			"margin-right": "4px"
		}
	},
	"button": {
		"kind": "Button",
		"props": {
			"children": "Submit"
		}
	},
	"formspree1": {
		"kind": "Formspree",
		"props": {
			"errorMessage": "Something went wrong",
			"completeText": "Success"
		}
	},
	"input1": {
		"kind": "Input",
		"props": {
			"name": "email",
			"placeholder": "Email",
			"margin-right": "4px"
		}
	},
	"button1": {
		"kind": "Button",
		"props": {
			"children": "Submit"
		}
	},
	"list": {
		"kind": "List",
		"props": {}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"children": "First item"
		}
	},
	"text4": {
		"kind": "Text",
		"props": {
			"children": "Some text"
		}
	},
	"input2": {
		"kind": "Input",
		"props": {}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "#",
			"children": "Some text"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"width": "64px",
			"height": "64px"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdFace
		}
	},
	"hr": {
		"kind": "Hr",
		"props": {}
	},
	"button2": {
		"kind": "Button",
		"props": {
			"children": "Button"
		}
	},
	"button3": {
		"kind": "Button",
		"props": {
			"children": "Button"
		}
	},
	"box": {
		"kind": "Box",
		"props": {}
	}
};

const NewCompic = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<StackItem {...override("stackItem")}>
			<Text {...override("text")} />
			<Newcomp {...override("newcomp")} />
		</StackItem>
		<Stack {...override("stack")}>
			{"    "}
			<StackItem {...override("stackItem1")}>
				{"        "}
				<Text {...override("text1")} />
				{"    "}
			</StackItem>
			{"    "}
			<StackItem {...override("stackItem2")}>
				{"        "}
				<Text {...override("text2")} />
				{"    "}
			</StackItem>
		</Stack>
		<SocialMedia {...override("socialMedia")} />
		<Section {...override("section")} />
		<Menu {...override("menu")} />
		<GoogleMap {...override("googleMap")} />
		<Formspree {...override("formspree")}>
			<Input {...override("input")} />
			<Button {...override("button")} />
		</Formspree>
		<Formspree {...override("formspree1")}>
			<Input {...override("input1")} />
			<Button {...override("button1")} />
		</Formspree>
		<List {...override("list")}>
			<Text {...override("text3")} />
		</List>
		<Text {...override("text4")} />
		<Input {...override("input2")} />
		<Link {...override("link")} />
		<Image {...override("image")} />
		<Icon {...override("icon")} />
		<Hr {...override("hr")} />
		<Button {...override("button2")} />
		<Button {...override("button3")} />
		<Box {...override("box")} />
		{children}
	</Box>;
};

Object.assign(NewCompic, { ...Box,
	defaultProps,
	overrides
});
export default NewCompic;