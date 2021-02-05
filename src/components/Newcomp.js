import React from 'react';
import atomize from "@quarkly/atomize";

const Newcomp = props => <div {...props}>
	Say hello Newcomp
</div>;

export default atomize(Newcomp)({
	name: "Newcomp",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "Newcomp — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});