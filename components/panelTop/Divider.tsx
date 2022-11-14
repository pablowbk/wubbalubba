
const Divider = ({color = 'black'}) => {
  return (
    <svg viewBox="0 0 22 244" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="9" r="4" stroke={color} stroke-width="2"/>
      <circle cx="11" cy="9" r="8" stroke={color} stroke-width="2"/>
      <line x1="11" y1="16" x2="11" y2="102" stroke={color} stroke-width="2"/>
      <circle cx="11" cy="112" r="10" stroke={color} stroke-width="2"/>
      <circle cx="11" cy="59" r="3" fill={color}/>
      <circle cx="11" cy="112" r="3" fill={color}/>
      <circle cx="11" cy="235" r="4" transform="rotate(-180 11 235)" stroke={color} stroke-width="2"/>
      <circle cx="11" cy="235" r="8" transform="rotate(-180 11 235)" stroke={color} stroke-width="2"/>
      <line x1="11" y1="228" x2="11" y2="142" stroke={color} stroke-width="2"/>
      <circle cx="11" cy="132" r="10" transform="rotate(-180 11 132)" stroke={color} stroke-width="2"/>
      <circle cx="11" cy="185" r="3" transform="rotate(-180 11 185)" fill={color}/>
      <circle cx="11" cy="132" r="3" transform="rotate(-180 11 132)" fill={color}/>
    </svg>
  )
}

export default Divider