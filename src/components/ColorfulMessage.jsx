import React from 'react';

export const ColorfulMessage = (props) => {
const { color, children } = props;//分割代入
    const contentStyle = {
            color,//color: color,の省略
            fontSize: '72px',
            fontWeight: '600',
            margin: '20px'
          };

    return (
        <p style = {contentStyle}>{children}</p>
    );
}