export const CancelSVG = ({  height = "13px",
width = "13px",
color = "#30404D",
...props
}: React.SVGProps<SVGSVGElement>) => (
<svg width={width} height={height} viewBox="0 0 12 12"  xmlns="http://www.w3.org/2000/svg">
<line x1="1.72469" y1="1.61139" x2="11.3932"  y2="11.0376"    stroke={color} stroke-linecap="round"/>
<line x1="11.3865" y1="1.28579" x2="1.55477" y2="10.69"    stroke={color} stroke-linecap="round"/>
</svg>);