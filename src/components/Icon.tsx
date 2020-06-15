import React from 'react';

// require('icons/tag.svg');
// require('icons/money.svg');
// require('icons/chart.svg');

let importAll = (requireContent: __WebpackModuleApi.RequireContext) => {
    requireContent.keys().forEach(requireContent)
}

try {
    importAll(require.context('../icons', true, /\.svg$/))
} catch(error) {
    console.error(error)
}

type Props = {
    name: string
}

const Icon = (props: Props) => {
    return (
        <svg className="icon">
            <use xlinkHref={'#' + props.name} />
        </svg>
    )
}

export default Icon;