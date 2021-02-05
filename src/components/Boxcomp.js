import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box } from "@quarkly/widgets";
const defaultProps = {
	"width": "500px",
	"height": "500px",
	"background": "#e2bfbf"
};
const overrides = {};

const Boxcomp = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		{children}
	</Box>;
};

Object.assign(Boxcomp, { ...Box,
	defaultProps,
	overrides
});
export default Boxcomp;